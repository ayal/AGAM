import * as THREE from "three";
import {
  BLACK,
  PALE,
  VIVID,
  SPECTRUM,
  randInt,
  pick,
  hex,
  colorSet,
  bgOf,
  subset,
} from "./palette";

// ---------------------------------------------------------------------------
// Each face's composition is drawn to a 2D canvas, then used as a texture.
// The grid is PIXELATED (flat cell colors) for everything EXCEPT circles, which
// are drawn as true smooth curves. Every region is filled with a DENSE pattern
// so there are no big flat single-color areas.
// ---------------------------------------------------------------------------
export const GRID = 20;
const TEX = 1024; // texture resolution per face
const cellpx = TEX / GRID;

type Ctx = CanvasRenderingContext2D;
type CellFn = (lx: number, ly: number) => number; // a per-cell color "fill"

// Divide width into n regions (grid cells), summing to GRID.
function regionWidths(n: number): number[] {
  const w = Array(n).fill(Math.floor(GRID / n));
  let rem = GRID - w.reduce((a, b) => a + b, 0);
  for (let i = 0; rem > 0; i = (i + 1) % n) {
    w[i]++;
    rem--;
  }
  for (let t = 0; t < n; t++) {
    const a = randInt(n);
    const b = randInt(n);
    if (a !== b && w[a] > 5) {
      w[a]--;
      w[b]++;
    }
  }
  return w;
}

// Fill a single grid cell (with a hair of overlap to avoid seams).
function cell(ctx: Ctx, gx: number, gy: number, color: number) {
  ctx.fillStyle = hex(color);
  ctx.fillRect(gx * cellpx, gy * cellpx, cellpx + 0.6, cellpx + 0.6);
}

function paintFill(ctx: Ctx, gx0: number, cw: number, fn: CellFn) {
  for (let ly = 0; ly < GRID; ly++)
    for (let lx = 0; lx < cw; lx++) cell(ctx, gx0 + lx, ly, fn(lx, ly));
}

// ---- fills ----------------------------------------------------------------
const solidFill = (c: number): CellFn => () => c;

function checkerFill(c1: number, c2: number, s: number): CellFn {
  return (lx, ly) => ((Math.floor(lx / s) + Math.floor(ly / s)) % 2 === 0 ? c1 : c2);
}
function stripeFill(cs: number[], sw: number, horiz: boolean): CellFn {
  return (lx, ly) => cs[Math.floor((horiz ? ly : lx) / sw) % cs.length];
}
function ringFill(cs: number[], cw: number, nb: number, diamond: boolean): CellFn {
  const cx = (cw - 1) / 2;
  const cy = (GRID - 1) / 2;
  return (lx, ly) => {
    const ax = Math.abs(lx - cx) / Math.max(1, cw / 2);
    const ay = Math.abs(ly - cy) / (GRID / 2);
    const dd = diamond ? (ax + ay) / 2 : Math.max(ax, ay);
    return cs[Math.floor(Math.min(0.999, dd) * nb) % cs.length];
  };
}

// A random dense pattern fill for a region cw wide.
function patternFill(cw: number, cols: number[]): CellFn {
  const cc = subset(cols, 2 + randInt(2)); // 2-3 colors
  const c2 = cc[1] ?? cols[(cols.indexOf(cc[0]) + 1) % cols.length];
  switch (pick(["checker", "stripesV", "stripesH", "diamond", "rect"])) {
    case "checker": return checkerFill(cc[0], c2, 1 + randInt(3));
    case "stripesV": return stripeFill(cc, 1 + randInt(2), false);
    case "stripesH": return stripeFill(cc, 1 + randInt(2), true);
    case "diamond": return ringFill(cc, cw, 4 + randInt(4), true);
    default: return ringFill(cc, cw, 4 + randInt(4), false);
  }
}

// ---- shapes ---------------------------------------------------------------
// A rhombus (diamond) made of two fills — full, or hollow with a colored edge.
function rhombusFill(inside: CellFn, outside: CellFn, edge: number, cw: number, hollow: boolean): CellFn {
  const cx = (cw - 1) / 2;
  const cy = (GRID - 1) / 2;
  return (lx, ly) => {
    const dd = Math.abs(lx - cx) / Math.max(1, cw / 2) + Math.abs(ly - cy) / (GRID / 2);
    if (dd > 1) return outside(lx, ly);
    if (hollow && dd >= 0.74) return edge; // outline ring
    return inside(lx, ly);
  };
}

// An axis-aligned rectangle / square of a random size on a patterned ground:
// full (filled), hollow (frame only), or with a colored center.
function rectShapeFill(cw: number, cols: number[]): CellFn {
  const cx = (cw - 1) / 2;
  const cy = (GRID - 1) / 2;
  const maxHx = Math.max(1, Math.floor((cw - 1) / 2));
  let hx = 1 + randInt(maxHx);
  let hy = 2 + randInt(8);
  if (Math.random() < 0.5) hy = Math.min(hx, 9); // square
  hx = Math.min(hx, maxHx);
  hy = Math.min(hy, 9);

  const ground = patternFill(cw, subset(cols, 2 + randInt(2)));
  const inside = Math.random() < 0.5 ? solidFill(pick(cols)) : patternFill(cw, subset(cols, 2));
  const border = pick(cols);
  const centerC = pick(cols);
  const mode = pick(["full", "hollow", "center"]);

  return (lx, ly) => {
    const dx = Math.abs(lx - cx);
    const dy = Math.abs(ly - cy);
    if (dx > hx || dy > hy) return ground(lx, ly);
    const onBorder = dx > hx - 1 || dy > hy - 1;
    if (mode === "hollow") return onBorder ? border : ground(lx, ly);
    if (mode === "center") {
      if (onBorder) return border;
      return dx <= hx * 0.4 && dy <= hy * 0.4 ? centerC : inside(lx, ly);
    }
    return inside(lx, ly); // full
  };
}

// Smooth linear gradient across a region (colored faces only). Uses CONSECUTIVE
// spectrum colors so it stays analogous (a clean spectrum run, never a muddy
// cross-wheel blend like yellow->purple).
function paintGradient(ctx: Ctx, gx0: number, cw: number) {
  const x = gx0 * cellpx;
  const w = cw * cellpx;
  const len = 3 + randInt(3); // 3-5 stops
  const start = randInt(SPECTRUM.length);
  const cs = Array.from({ length: len }, (_, i) => SPECTRUM[(start + i) % SPECTRUM.length]);
  if (Math.random() < 0.5) cs.reverse();
  const vertical = Math.random() < 0.6;
  const g = vertical
    ? ctx.createLinearGradient(0, 0, 0, TEX)
    : ctx.createLinearGradient(x, 0, x + w, 0);
  cs.forEach((c, i) => g.addColorStop(i / (cs.length - 1), hex(c)));
  ctx.fillStyle = g;
  ctx.fillRect(x, 0, w, TEX);
}

// The ONLY curved painting: ONE big, perfect circle on a PATTERNED ground.
function drawBigCircle(ctx: Ctx, gx0: number, cw: number, cols: number[]) {
  paintFill(ctx, gx0, cw, patternFill(cw, subset(cols, 2 + randInt(2)))); // ground
  const x = gx0 * cellpx;
  const d = Math.max(4, Math.min(cw, GRID) - randInt(3)); // diameter in cells
  const r = (d * cellpx) / 2;
  const cx = x + (cw / 2) * cellpx;
  const cy = (GRID / 2) * cellpx;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = hex(pick(cols));
  ctx.fill();
}

// Fill one region with a randomly chosen pattern or shape.
function paintRegion(ctx: Ctx, gx0: number, cw: number, cols: number[], allowGradient: boolean) {
  if (allowGradient && Math.random() < 0.18) {
    paintGradient(ctx, gx0, cw);
    return;
  }
  switch (pick(["rhombus", "rect", "pattern", "pattern"])) {
    case "rhombus": {
      const hollow = Math.random() < 0.5;
      const inside = Math.random() < 0.5
        ? solidFill(pick(cols))
        : patternFill(cw, subset(cols, 2 + randInt(2)));
      const outside = patternFill(cw, subset(cols, 2 + randInt(2)));
      paintFill(ctx, gx0, cw, rhombusFill(inside, outside, pick(cols), cw, hollow));
      break;
    }
    case "rect":
      paintFill(ctx, gx0, cw, rectShapeFill(cw, cols));
      break;
    default:
      paintFill(ctx, gx0, cw, patternFill(cw, cols));
  }
}

// ---- whole-face compositions ----------------------------------------------
function drawComposition(ctx: Ctx, mono: boolean, withCircle: boolean) {
  const cols = colorSet(mono);
  ctx.fillStyle = hex(bgOf(mono));
  ctx.fillRect(0, 0, TEX, TEX);

  const n = 3 + randInt(3); // 3-5 vertical regions
  const widths = regionWidths(n);
  // Circle goes on the WIDEST region so it has room to be a proper circle.
  let circleRegion = -1;
  if (withCircle) {
    circleRegion = 0;
    for (let r = 1; r < n; r++) if (widths[r] > widths[circleRegion]) circleRegion = r;
  }
  let gx = 0;
  for (let r = 0; r < n; r++) {
    const cw = widths[r];
    ctx.save();
    ctx.beginPath();
    ctx.rect(gx * cellpx, 0, cw * cellpx, TEX);
    ctx.clip();
    if (r === circleRegion) drawBigCircle(ctx, gx, cw, cols);
    else paintRegion(ctx, gx, cw, cols, !mono); // gradients only on colored faces
    ctx.restore();
    gx += cw;
  }
}

// Original pixelated heart — shape & size that worked before. Row 0 = top lobes.
const HEART_BITMAP = [
  "0001111000011110000",
  "0111111100111111100",
  "0111111111111111100",
  "1111111111111111110",
  "1111111111111111110",
  "1111111111111111110",
  "1111111111111111110",
  "0111111111111111100",
  "0011111111111111000",
  "0001111111111110000",
  "0000111111111100000",
  "0000011111111000000",
  "0000001111110000000",
  "0000000111100000000",
  "0000000011000000000",
];

function drawHeartFace(ctx: Ctx, mono: boolean) {
  const bg = mono ? 0xffffff : pick(PALE);
  const heart = mono ? 0x111111 : pick(VIVID.filter((c) => c !== bg));
  const inside: boolean[][] = Array.from({ length: GRID }, () => Array(GRID).fill(false));
  const ox = 1; // 18-wide heart centered in the 20-wide grid
  const oy = 2;
  for (let r = 0; r < HEART_BITMAP.length; r++)
    for (let cc = 0; cc < HEART_BITMAP[r].length; cc++)
      if (HEART_BITMAP[r][cc] === "1") {
        const gy = oy + r;
        const gx = ox + cc;
        if (gy < GRID && gx < GRID) inside[gy][gx] = true;
      }

  for (let gy = 0; gy < GRID; gy++)
    for (let gx = 0; gx < GRID; gx++) {
      let color = bg;
      if (inside[gy][gx]) color = heart;
      else if (
        inside[gy]?.[gx + 1] || inside[gy]?.[gx - 1] ||
        inside[gy + 1]?.[gx] || inside[gy - 1]?.[gx]
      ) {
        color = BLACK; // contour outline
      }
      cell(ctx, gx, gy, color);
    }
}

// Build a CanvasTexture for one face.
export function makeFaceTexture(isHeart: boolean, mono: boolean, withCircle: boolean): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = TEX;
  const ctx = canvas.getContext("2d")!;
  if (isHeart) drawHeartFace(ctx, mono);
  else drawComposition(ctx, mono, withCircle);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}
