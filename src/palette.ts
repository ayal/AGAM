// ---------------------------------------------------------------------------
// Yaacov Agam palette.
//
// Agam trained under Itten (Bauhaus) but, per museum descriptions and the
// reference sheet, there is no single uniform color wheel: he works from a few
// discrete, cohesive, high-chroma schemes anchored by strong black & white, and
// the image transforms with viewing angle. So we pick ONE named scheme per
// render (cohesion within a piece, variety across renders) and let black/white
// provide the achromatic structure.
// ---------------------------------------------------------------------------

// ---- helpers --------------------------------------------------------------
export const randInt = (n: number) => Math.floor(Math.random() * n);
export const pick = <T>(arr: T[]): T => arr[randInt(arr.length)];

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const hex = (c: number) => "#" + c.toString(16).padStart(6, "0");

// Linear interpolate between two 24-bit colors (t in 0..1).
export function lerp(a: number, b: number, t: number): number {
  const ar = (a >> 16) & 255, ag = (a >> 8) & 255, ab = a & 255;
  const br = (b >> 16) & 255, bg = (b >> 8) & 255, bb = b & 255;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return (r << 16) | (g << 8) | bl;
}

// ---- achromatic anchors ---------------------------------------------------
export const BLACK = 0x161616;
export const WHITE = 0xf7f7f4;
export const CREAM = 0xf4f1e8; // gallery-wall background & slat gaps

// ---- named Agam-style schemes (from the reference sheet) -------------------
export const PALETTES: Record<string, number[]> = {
  agamograph: [0xe53935, 0xfdd835, 0x43a047, 0x1e88e5, 0x8e24aa],
  nightRainbow: [0xd7263d, 0xf46036, 0xffd23f, 0x1565c0, 0x7b2cbf],
  dizengoff: [0xd7263d, 0xffd23f, 0x247ba0, 0x2ec4b6, 0x6a4c93],
  highContrast: [0xff1744, 0x00c853, 0x2979ff, 0xff9100, 0xffea00, 0xaa00ff],
  spectrumBand: [0xe53935, 0xfb8c00, 0xfdd835, 0x43a047, 0x1e88e5, 0x8e24aa],
};

// One scheme is chosen per render for cohesion.
export const SCHEME = pick(Object.values(PALETTES));

// Colored working set = the scheme + black for achromatic accents (very Agam).
export const VIVID = [...SCHEME, BLACK];

// pale (background) tints and pure black & white
export const PALE = [WHITE, WHITE, CREAM]; // mostly white grounds, like his prints
export const BW = [WHITE, BLACK]; // black & white only — no grayscale

// full reference list (not used directly by the renderer)
export const AGAM_PALETTE = [BLACK, WHITE, CREAM, ...SCHEME];

// ---- spectrum ordering (for gradients) ------------------------------------
const hueOf = (c: number) => {
  const r = ((c >> 16) & 255) / 255;
  const g = ((c >> 8) & 255) / 255;
  const b = (c & 255) / 255;
  const mx = Math.max(r, g, b);
  const mn = Math.min(r, g, b);
  const d = mx - mn;
  if (!d) return 0;
  let h: number;
  if (mx === r) h = ((g - b) / d) % 6;
  else if (mx === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return (h * 60 + 360) % 360;
};

// Scheme colors ordered around the hue wheel. Gradients use CONSECUTIVE entries
// so they stay analogous instead of muddy cross-wheel blends.
export const SPECTRUM = [...SCHEME].sort((a, b) => hueOf(a) - hueOf(b));

// k colors that are NEIGHBORS on the hue wheel (a short analogous run). Used
// instead of random subsets so patterns build from related hues and avoid harsh
// equal-area complementary clashes (black/white in the set act as neutrals).
export function analogous(cols: number[], k: number): number[] {
  const sorted = [...cols].sort((a, b) => hueOf(a) - hueOf(b));
  const n = sorted.length;
  const len = Math.min(k, n);
  const start = randInt(n);
  return Array.from({ length: len }, (_, i) => sorted[(start + i) % n]);
}

// ---- per-face color sets --------------------------------------------------
export const colorSet = (mono: boolean) => (mono ? BW : VIVID);
export const bgOf = (mono: boolean) => (mono ? WHITE : pick(PALE));
export const subset = (cols: number[], k: number) =>
  shuffle(cols).slice(0, Math.min(k, cols.length));
