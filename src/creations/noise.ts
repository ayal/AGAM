// Shared procedural noise for the fountain's world (the sun, the moon AND the
// planet terrain): a compact 4-octave value-noise fBm. One seed per render, so
// every build gets a different sun/moon/planet while all three stay coherent
// with each other (they draw from the same field).
export interface Noise {
  // 4-octave value-noise fractional Brownian motion, ≈ 0..1
  fbm: (x: number, y: number, z: number) => number;
  // smoothstep helper (bundled here because the terrain + moon use it alongside fbm)
  sstep: (a: number, b: number, x: number) => number;
}

export function createNoise(seed = Math.random() * 1000): Noise {
  const hash3 = (x: number, y: number, z: number) => {
    const s = Math.sin(x * 127.1 + y * 311.7 + z * 74.7 + seed) * 43758.5453;
    return s - Math.floor(s);
  };
  const fade5 = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerpN = (a: number, b: number, t: number) => a + (b - a) * t;
  const vnoise = (x: number, y: number, z: number) => {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    const u = fade5(x - xi), v = fade5(y - yi), w = fade5(z - zi);
    return lerpN(
      lerpN(lerpN(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), u),
            lerpN(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), u), v),
      lerpN(lerpN(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), u),
            lerpN(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), u), v),
      w);
  };
  const fbm = (x: number, y: number, z: number) => {
    let a = 0, amp = 0.5, f = 1;
    for (let o = 0; o < 4; o++) { a += amp * vnoise(x * f, y * f, z * f); amp *= 0.5; f *= 2.03; }
    return a; // ≈ 0..1
  };
  const sstep = (a: number, b: number, x: number) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };
  return { fbm, sstep };
}
