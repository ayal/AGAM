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
  analogous,
} from "./palette";

// ---------------------------------------------------------------------------
// A composition is drawn to a 2D canvas of cols x rows cells, then used as a
// texture. Pixelated flat cells for everything EXCEPT circles (true curves).
// Every region is a DENSE pattern so there are no big flat single-color areas.
// The same code renders the wall's square faces and the fountain's wide ring
// strips — only the (cols, rows) differ.
// ---------------------------------------------------------------------------
export const GRID = 20; // wall faces are GRID x GRID
const CELL = 51; // px per cell

type Ctx = CanvasRenderingContext2D;
type CellFn = (lx: number, ly: number) => number;

// Divide `total` cells into n regions, each >= 2.
function regionWidths(n: number, total: number): number[] {
  const w = Array(n).fill(Math.floor(total / n));
  let rem = total - w.reduce((a, b) => a + b, 0);
  for (let i = 0; rem > 0; i = (i + 1) % n) {
    w[i]++;
    rem--;
  }
  for (let t = 0; t < n; t++) {
    const a = randInt(n);
    const b = randInt(n);
    if (a !== b && w[a] > 3) {
      w[a]--;
      w[b]++;
    }
  }
  return w;
}

function cell(ctx: Ctx, gx: number, gy: number, color: number) {
  ctx.fillStyle = hex(color);
  ctx.fillRect(gx * CELL, gy * CELL, CELL + 0.6, CELL + 0.6);
}

function paintFill(ctx: Ctx, gx0: number, cw: number, rows: number, fn: CellFn) {
  for (let ly = 0; ly < rows; ly++)
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
function ringFill(cs: number[], cw: number, rows: number, nb: number, diamond: boolean): CellFn {
  const cx = (cw - 1) / 2;
  const cy = (rows - 1) / 2;
  return (lx, ly) => {
    const ax = Math.abs(lx - cx) / Math.max(1, cw / 2);
    const ay = Math.abs(ly - cy) / Math.max(1, rows / 2);
    const dd = diamond ? (ax + ay) / 2 : Math.max(ax, ay);
    return cs[Math.floor(Math.min(0.999, dd) * nb) % cs.length];
  };
}

function patternFill(cw: number, rows: number, cols: number[]): CellFn {
  const cc = analogous(cols, 2 + randInt(2));
  const c2 = cc[1] ?? cols[(cols.indexOf(cc[0]) + 1) % cols.length];
  switch (pick(["checker", "stripesV", "stripesH", "diamond", "rect", "halves", "halves"])) {
    case "checker": return checkerFill(cc[0], c2, 1 + randInt(3));
    case "stripesV": return stripeFill(cc, 1 + randInt(2), false);
    case "stripesH": return stripeFill(cc, 1 + randInt(2), true);
    case "diamond": return ringFill(cc, cw, rows, 4 + randInt(4), true);
    case "rect": return ringFill(cc, cw, rows, 4 + randInt(4), false);
    default: {
      // two-tone split — top/bottom or left/right halves
      if (Math.random() < 0.6) {
        const sp = 1 + randInt(Math.max(1, rows - 1));
        return (_lx, ly) => (ly < sp ? cc[0] : c2);
      }
      const sp = 1 + randInt(Math.max(1, cw - 1));
      return (lx) => (lx < sp ? cc[0] : c2);
    }
  }
}

// ---- shapes ---------------------------------------------------------------
function rhombusFill(inside: CellFn, outside: CellFn, edge: number, cw: number, rows: number, hollow: boolean): CellFn {
  const cx = (cw - 1) / 2;
  const cy = (rows - 1) / 2;
  return (lx, ly) => {
    const dd = Math.abs(lx - cx) / Math.max(1, cw / 2) + Math.abs(ly - cy) / Math.max(1, rows / 2);
    if (dd > 1) return outside(lx, ly);
    if (hollow && dd >= 0.74) return edge;
    return inside(lx, ly);
  };
}

function rectShapeFill(cw: number, rows: number, cols: number[]): CellFn {
  const cx = (cw - 1) / 2;
  const cy = (rows - 1) / 2;
  const maxHx = Math.max(1, Math.floor((cw - 1) / 2));
  const maxHy = Math.max(1, Math.floor((rows - 1) / 2));
  let hx = 1 + randInt(maxHx);
  let hy = 1 + randInt(maxHy);
  if (Math.random() < 0.5) hy = Math.min(hx, maxHy); // square-ish
  hx = Math.min(hx, maxHx);
  hy = Math.min(hy, maxHy);

  const ground = patternFill(cw, rows, analogous(cols, 2 + randInt(2)));
  const inside = Math.random() < 0.5 ? solidFill(pick(cols)) : patternFill(cw, rows, analogous(cols, 2));
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
    return inside(lx, ly);
  };
}

function paintGradient(ctx: Ctx, gx0: number, cw: number, rows: number) {
  const x = gx0 * CELL;
  const w = cw * CELL;
  const h = rows * CELL;
  const len = 3 + randInt(3);
  const start = randInt(SPECTRUM.length);
  const cs = Array.from({ length: len }, (_, i) => SPECTRUM[(start + i) % SPECTRUM.length]);
  if (Math.random() < 0.5) cs.reverse();
  const vertical = Math.random() < 0.6;
  const g = vertical
    ? ctx.createLinearGradient(0, 0, 0, h)
    : ctx.createLinearGradient(x, 0, x + w, 0);
  cs.forEach((c, i) => g.addColorStop(i / (cs.length - 1), hex(c)));
  ctx.fillStyle = g;
  ctx.fillRect(x, 0, w, h);
}

// The ONLY curved painting: one big, perfect circle on a patterned ground.
function drawBigCircle(ctx: Ctx, gx0: number, cw: number, rows: number, cols: number[]) {
  paintFill(ctx, gx0, cw, rows, patternFill(cw, rows, analogous(cols, 2 + randInt(2))));
  const x = gx0 * CELL;
  const d = Math.max(3, Math.min(cw, rows) - randInt(2));
  const r = (d * CELL) / 2;
  const cx = x + (cw / 2) * CELL;
  const cy = (rows / 2) * CELL;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = hex(pick(cols));
  ctx.fill();
}

function paintRegion(ctx: Ctx, gx0: number, cw: number, rows: number, cols: number[], allowGradient: boolean) {
  if (allowGradient && Math.random() < 0.18) {
    paintGradient(ctx, gx0, cw, rows);
    return;
  }
  switch (pick(["rhombus", "rect", "pattern", "pattern"])) {
    case "rhombus": {
      const hollow = Math.random() < 0.5;
      const inside = Math.random() < 0.5
        ? solidFill(pick(cols))
        : patternFill(cw, rows, analogous(cols, 2 + randInt(2)));
      const outside = patternFill(cw, rows, analogous(cols, 2 + randInt(2)));
      paintFill(ctx, gx0, cw, rows, rhombusFill(inside, outside, pick(cols), cw, rows, hollow));
      break;
    }
    case "rect":
      paintFill(ctx, gx0, cw, rows, rectShapeFill(cw, rows, cols));
      break;
    default:
      paintFill(ctx, gx0, cw, rows, patternFill(cw, rows, cols));
  }
}

// ---- whole compositions ---------------------------------------------------
function drawComposition(
  ctx: Ctx, cols: number, rows: number, mono: boolean, withCircle: boolean, gradients: boolean,
) {
  const palette = colorSet(mono);
  ctx.fillStyle = hex(bgOf(mono));
  ctx.fillRect(0, 0, cols * CELL, rows * CELL);

  const n = 3 + randInt(3);
  const widths = regionWidths(n, cols);
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
    ctx.rect(gx * CELL, 0, cw * CELL, rows * CELL);
    ctx.clip();
    if (r === circleRegion) drawBigCircle(ctx, gx, cw, rows, palette);
    else paintRegion(ctx, gx, cw, rows, palette, gradients && !mono);
    ctx.restore();
    gx += cw;
  }
}

// Original pixelated heart — for the wall's square faces. Row 0 = top lobes.
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
  const ox = 1;
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
        color = BLACK;
      }
      cell(ctx, gx, gy, color);
    }
}

function toTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

// Wall: a square GRID x GRID face (optionally the heart).
export function makeFaceTexture(isHeart: boolean, mono: boolean, withCircle: boolean): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = GRID * CELL;
  const ctx = canvas.getContext("2d")!;
  if (isHeart) drawHeartFace(ctx, mono);
  else drawComposition(ctx, GRID, GRID, mono, withCircle, true);
  return toTexture(canvas);
}

// Fountain: a wide ring strip, cols x rows cells. Returns the texture plus a
// representative color per column (sampled mid-height) so the ring's caps can
// match each rib's colors.
export function makeStrip(
  cols: number, rows: number, mono: boolean, withCircle: boolean,
): { texture: THREE.CanvasTexture; colors: number[] } {
  const canvas = document.createElement("canvas");
  canvas.width = cols * CELL;
  canvas.height = rows * CELL;
  const ctx = canvas.getContext("2d")!;
  drawComposition(ctx, cols, rows, mono, withCircle, false); // no gradients on fountain ribs
  const row = ctx.getImageData(0, Math.floor(canvas.height / 2), canvas.width, 1).data;
  const colors: number[] = [];
  for (let c = 0; c < cols; c++) {
    const px = Math.min(canvas.width - 1, Math.floor((c + 0.5) * CELL));
    const i = px * 4;
    colors.push((row[i] << 16) | (row[i + 1] << 8) | row[i + 2]);
  }
  return { texture: toTexture(canvas), colors };
}
