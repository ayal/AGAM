import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import { makeStrip } from "../patterns";
import { newScheme } from "../palette";
import { createMusic } from "../music";
import { createFireVolume } from "../fire";
import { makeSoftSprite, makeDropSprite, makeParticleMaterial } from "../points";
import type { Creation } from "../creation";
// the fountain's world, built in cohesive modules (see each file):
import { createNoise } from "./noise";
import { createSun, createMoon } from "./celestial";
import { createPlanet } from "./planet";
import { createSkyDome } from "./sky";
import { createPool } from "./water";

// Chance that a build/recolor comes out black & white. Deliberately rare — a
// B&W fountain is a striking exception, not a regular in the rotation.
const MONO_CHANCE = 0.08;

// Agam's Fire & Water Fountain (Dizengoff Square): five stacked rings, profile
// bulging with a big, tall middle ring. Each ring is a ZIGZAG accordion of
// panels (the agamograph fold wrapped into a cylinder), so a different image
// resolves from each side. Structure cylinders read as blue water (animated
// ripple shader for the pool), and arcing water jets squirt from the middle ring.
// The pool reflection style persists across a recolor (re-click) but is
// re-rolled on a full render (switch / refresh): crisp = sharp planar pool
// mirror vs the soft cube-map pool. (Black & white is treated as a COLOR
// decision, re-rolled on every build, so a B&W render isn't stuck in B&W.)
export interface FountainModes {
  crisp: boolean;
}
export const rollFountainModes = (): FountainModes => ({
  // The soft cube-map (non-planar) reflection is disabled for now — the fire
  // reads poorly against it. Its code is kept below; always use the crisp
  // planar mirror. To re-enable variety, restore `Math.random() < 0.5`.
  crisp: true,
});

export function createFountain(
  modes: FountainModes = rollFountainModes(),
  forceColor = false, // thumbnail capture forces a colour (non-B&W) render
): Creation {
  const group = new THREE.Group();

  const RADII = [7, 12, 16, 10.5, 6.5];
  const HEIGHTS = [3, 3.6, 6.5, 4, 3];
  const TIERS = RADII.length;
  const gap = 0.3;
  const totalH = HEIGHTS.reduce((a, b) => a + b, 0) + gap * (TIERS - 1);
  const amp = 0.9;
  // Ribs are ~60° equilateral triangles (horizontal cross-section), identical on
  // every ring: the peak-to-valley depth is the triangle's altitude (= 2*amp),
  // so its side = 2*amp / sin60°.
  const ribSide = (2 * amp) / Math.sin(Math.PI / 3);
  // Sometimes the WHOLE fountain is black & white (never just one ring). Rolled
  // every build (it's a colour decision), so re-clicks can move in/out of B&W.
  const monoRender = forceColor ? false : Math.random() < MONO_CHANCE;
  // Always the same neutral gray background (keeps both colour and B&W legible).
  const background = 0xccced0;
  const maxR = Math.max(...RADII);

  // Only the bottom pool is water. crisp = sharp planar mirror; else soft cube.
  const crispPool = modes.crisp;

  // tier center heights (cumulative from the bottom)
  const tierY: number[] = [];
  let yc = -totalH / 2;
  for (let t = 0; t < TIERS; t++) {
    tierY[t] = yc + HEIGHTS[t] / 2;
    yc += HEIGHTS[t] + gap;
  }
  const poolY = -totalH / 2 - 0.5;

  // Gentle gallery lighting: a bright hemisphere keeps every face close to its
  // painted colour (matte, poster-bright), while a soft warm key + cool fill
  // give the pleats real dimensionality as the rings turn. Only the Lambert
  // surfaces (panels, caps, drums) respond — pool/jets/fire are shaders.
  const hemi = new THREE.HemisphereLight(0xffffff, 0xcfc8bb, 1.1);
  const key = new THREE.DirectionalLight(0xfff2e0, 4.5);
  key.position.set(60, 90, 40);
  const fill = new THREE.DirectionalLight(0xdfe8ff, 0.2);
  fill.position.set(-50, 40, -60);
  group.add(hemi, key, fill);

  // ---- sky bodies: a sun and a moon arc overhead on a FAST day/night cycle
  // (~2 min per full day). The key light follows the sun (warming toward the
  // horizon), the fill light turns into cool moonlight after dark, and the
  // background + hemisphere dim through a warm dusk into blue-gray night.
  const DAY_CYCLE = 27; // seconds for one full day + night
  // Celestial orbit radius. MUST clear the planet sphere: the orbit circles
  // the ORIGIN (fountain), but the planet (r=320) is centered ~330 below — at
  // 430 the arc's low point passed within ~230 of the planet's center, so the
  // sun/moon visibly tunneled THROUGH the ground on wide shots. At 620 the
  // closest approach is ~383, safely outside the sphere plus sprite size.
  const SKY_R = 620;
  // Realistic diurnal arc for the fountain's real home — Dizengoff Square,
  // ~32°N: the sun rises due east, crosses the SOUTHERN sky culminating at
  // ~58°, and sets due west. Scene axes: +x east, +y up, +z south.
  const LAT = (32 * Math.PI) / 180;
  // shared procedural noise field — one seed per render drives the sun, the
  // moon AND the planet terrain, so all three are coherent (see ./noise).
  const noise = createNoise();

  // sun & moon as real procedural spheres (see ./celestial). moonE/moonK are
  // the phase: a full moon (opposite the sun, so it rises at sunset) reads best
  // at this scale — partial phases look like a glitch, not astronomy. moonK=1
  // means fully illuminated → full moonlight strength.
  const sunDisc = createSun(noise);
  const moonDisc = createMoon(noise);
  const moonE = Math.PI;
  const moonK = 1;
  group.add(sunDisc, moonDisc);
  // pre-allocated palette for the per-frame day/night blends.
  // Per-session random sky character: duskMood (0=golden, 1=crimson),
  // keyStrength (sun brightness), moonStrength (full-moon brightness).
  const duskMood = Math.random();
  const keyStrength = 4.0 + Math.random() * 1.2;   // 4.0–5.2 (strong sun = real lit/shadow split)
  // Moonlight sized against the night ambient floor (0.5) so its lit:shadow
  // ratio lands at ~3.2–3.8:1 — right at, but not above, the day's ~3.5:1
  // (key 4.0–5.2 over ~1.3 day ambient). The old 1.6–2.5 moon hit 5:1 and
  // out-contrasted the sun; the 0.7–1.1 overcorrection left the moon barely
  // modelling the fountain and planet at all.
  const moonStrength = 1.1 + Math.random() * 0.3;  // 1.1–1.4
  const BG_DAY = new THREE.Color(0xb8d4e8); // proper pale-blue haze (was flat gray)
  const BG_NIGHT = new THREE.Color(0x525866);
  const BG_DUSK = new THREE.Color().lerpColors(new THREE.Color(0xdfb08a), new THREE.Color(0xff6030), duskMood);
  const KEY_HIGH = new THREE.Color(0xfff2e0), KEY_LOW = new THREE.Color(0xff9f5e); // golden-hour amber
  const HEMI_DAY = new THREE.Color(0xffffff), HEMI_NIGHT = new THREE.Color(0x93a0c0);
  const GND_DAY = new THREE.Color(0xb0a898), GND_NIGHT = new THREE.Color(0x4a4f5d); // warm earth ground
  const FILL_DAY = new THREE.Color(0xdfe8ff), MOONLIGHT = new THREE.Color(0xb9c8ee);
  const GOLD = new THREE.Color().lerpColors(new THREE.Color(0xffcf9a), new THREE.Color(0xff9050), duskMood);
  // even at its brightest the sun keeps a touch of yellow — pure white reads
  // as a hole in the sky, not a star
  const SUN_HIGH = new THREE.Color(0xfff3c8), SUN_LOW = new THREE.Color(0xffa864);
  const bgNow = new THREE.Color();
  let simHour = 10; // simulated time of day (for the HUD clock)
  let sunUp = true;
  let midnightCount = 0; // increments each time simHour crosses midnight
  let lastWasMidnight = false; // edge-detect for the midnight crossing

  // ---- sky dome: the "background" is a real sky, not a flat clear color.
  // A big inward-facing sphere carries a horizon→zenith gradient driven by the
  // same day/dusk/night blends as the lights, a warm glow pooled around the
  // sun's spot at golden hour, and hashed stars that twinkle in after dark.
  // The pool's mirror reflects it, so the water picks up the sky for free.
  const ZEN_DAY = new THREE.Color(0x2e6eb8), ZEN_NIGHT = new THREE.Color(0x252c3d);
  const ZEN_DUSK = new THREE.Color().lerpColors(new THREE.Color(0x7878a8), new THREE.Color(0x60258a), duskMood);
  const zenNow = new THREE.Color();
  const sky = createSkyDome(SKY_R);
  const skyUniforms = sky.uniforms; // the update loop drives these per-frame
  group.add(sky.mesh);

  // the fountain stands on a little planet — real geometry so the Lambert
  // material takes the sun/moon lights and wide shots reveal the curvature.
  // Procedural terrain + placement live in ./planet (shares the noise field).
  const PLANET_R = 320;
  const planetMesh = createPlanet(noise, PLANET_R, poolY);
  group.add(planetMesh);

  // Darker, slightly see-through neutral fill for the upper levels (ring drums +
  // central column) — no water, no reflection.
  const neutralMat = new THREE.MeshLambertMaterial({
    color: 0x6f6a5e,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    side: THREE.DoubleSide,
    dithering: true, // smooth curved drums band in low light without it
  });

  // central water column — rises up the centre but STOPS at the base of the top
  // ring, whose own inner drum is the single water surface at the very top. (If
  // the column ran all the way up it sat *inside* the top drum, so the top read
  // as two concentric water cylinders.)
  const colTop = tierY[TIERS - 1] - HEIGHTS[TIERS - 1] / 2;
  const colH = colTop - poolY;
  const column = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, colH, 32), neutralMat);
  column.position.y = (colTop + poolY) / 2;
  group.add(column);

  // pool + basin: flat water disc held in a raised concrete rim (see ./water).
  // The reflection style is chosen at build time (crisp planar mirror vs soft
  // cube-map); the update loop pokes the pool material's uniforms via `pool`.
  const { pool, cubeCam, cubeRT, waterMeshes, basin } = createPool(maxR + amp + 6, poolY, crispPool);
  group.add(pool, cubeCam, basin);

  // ---- rings (each spins on its own, alternating directions) ----
  const ringGroups: THREE.Group[] = [];
  // Handles for the in-place pattern morph (recolor without any rebuild or
  // fade-to-black): the panel patterns are canvas textures, so new patterns
  // can be cross-blended INTO the live canvases while everything keeps moving.
  type MorphRing = {
    P: number; rows: number; N: number;
    matA: THREE.MeshLambertMaterial; matB: THREE.MeshLambertMaterial;
    capGeos: THREE.BufferGeometry[];
  };
  const morphRings: MorphRing[] = [];
  for (let t = 0; t < TIERS; t++) {
    const ring = new THREE.Group();
    const R = RADII[t];
    const h = HEIGHTS[t];
    const y = tierY[t];
    const mono = monoRender;
    const Rout = R + amp;
    const Rin = R - amp;
    // pick the pleat count so each rib's base chord ≈ ribSide → ~60° apex, so
    // the same equilateral rib repeats on every ring (rounding to a whole rib
    // count leaves only a tiny per-ring deviation).
    const P = Math.max(8, Math.round(Math.PI / Math.asin(Math.min(0.99, ribSide / (2 * Rin)))));
    const N = 2 * P;
    const rows = Math.max(5, Math.round(h * 1.4));

    const stripA = makeStrip(P, rows, mono, Math.random() < 0.6);
    const stripB = makeStrip(P, rows, mono, Math.random() < 0.6);
    const matA = new THREE.MeshLambertMaterial({ map: stripA.texture, side: THREE.DoubleSide });
    const matB = new THREE.MeshLambertMaterial({ map: stripB.texture, side: THREE.DoubleSide });

    const vert = (k: number) => {
      const ang = (k * Math.PI) / P;
      const r = k % 2 === 0 ? Rout : Rin;
      return new THREE.Vector3(r * Math.cos(ang), y, r * Math.sin(ang));
    };

    const drum = new THREE.Mesh(
      new THREE.CylinderGeometry(Rin - 0.05, Rin - 0.05, h - 0.1, Math.max(32, P)),
      neutralMat,
    );
    drum.position.set(0, y, 0);
    ring.add(drum);

    for (let k = 0; k < N; k++) {
      const p0 = vert(k);
      const p1 = vert(k + 1);
      const dx = p1.x - p0.x;
      const dz = p1.z - p0.z;
      const segLen = Math.hypot(dx, dz);
      const col = Math.floor(k / 2);
      const u0 = col / P;
      const u1 = (col + 1) / P;

      const geo = new THREE.PlaneGeometry(segLen, h);
      const uv = geo.attributes.uv as THREE.BufferAttribute;
      uv.setXY(0, u0, 1); uv.setXY(1, u1, 1); uv.setXY(2, u0, 0); uv.setXY(3, u1, 0);
      uv.needsUpdate = true;

      const panel = new THREE.Mesh(geo, k % 2 === 0 ? matA : matB);
      panel.position.set((p0.x + p1.x) / 2, y, (p0.z + p1.z) / 2);
      panel.rotation.y = Math.atan2(-dz, dx);
      ring.add(panel);
    }

    // colored caps that follow the ZIGZAG (cog) outline, closing the top &
    // bottom of the pleated ring. Each cap segment is colored to match its rib
    // (sampled from that rib's composition column) via vertex colors.
    const capMat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    const ri = Math.max(0.3, Rin - 0.1);
    const buildCap = (yy: number) => {
      const verts: number[] = [];
      const cols: number[] = [];
      for (let k = 0; k < N; k++) {
        const a0 = (k * Math.PI) / P;
        const a1 = ((k + 1) * Math.PI) / P;
        const r0 = k % 2 === 0 ? Rout : Rin;
        const r1 = (k + 1) % 2 === 0 ? Rout : Rin;
        const o0x = r0 * Math.cos(a0), o0z = r0 * Math.sin(a0);
        const o1x = r1 * Math.cos(a1), o1z = r1 * Math.sin(a1);
        const i0x = ri * Math.cos(a0), i0z = ri * Math.sin(a0);
        const i1x = ri * Math.cos(a1), i1z = ri * Math.sin(a1);
        verts.push(o0x, yy, o0z, o1x, yy, o1z, i1x, yy, i1z);
        verts.push(o0x, yy, o0z, i1x, yy, i1z, i0x, yy, i0z);
        // this segment's color = the adjacent rib's composition column
        const c = (k % 2 === 0 ? stripA.colors : stripB.colors)[Math.floor(k / 2)] ?? 0x888888;
        const r = ((c >> 16) & 255) / 255, g = ((c >> 8) & 255) / 255, b = (c & 255) / 255;
        for (let v = 0; v < 6; v++) cols.push(r, g, b);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
      geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
      geo.computeVertexNormals(); // caps are now lit (Lambert needs normals)
      return geo;
    };
    const capTop = buildCap(y + h / 2);
    const capBot = buildCap(y - h / 2);
    ring.add(new THREE.Mesh(capTop, capMat));
    ring.add(new THREE.Mesh(capBot, capMat));

    group.add(ring);
    ringGroups.push(ring);
    morphRings.push({ P, rows, N, matA, matB, capGeos: [capTop, capBot] });
  }
  // per-ring spin speeds: alternating directions, varied magnitude (gentle)
  // each ring spins independently and re-rolls its own direction + gentle speed
  // on a timer during playback (eased, so it slows, stops and reverses
  // naturally) — so adjacent rings drift in and out of sync on their own.
  // speeds in rad/s (scaled by dt each frame → same pace at 60Hz and 120Hz)
  const randSpin = () => (Math.random() < 0.5 ? 1 : -1) * (0.036 + Math.random() * 0.072);
  const ringSpeed = ringGroups.map(randSpin); // current (eased) speed
  const ringTarget = ringSpeed.slice();        // speed it's easing toward
  const ringNext: number[] = ringGroups.map(() => 0); // time of next re-roll
  let ringInit = false;

  // ---- in-place pattern morph (the midnight "recolor" WITHOUT a fade) ----
  // New patterns are blended into the live panel canvases and cap vertex
  // colors over several seconds — no rebuild, no overlay, no dip to black.
  const cloneCanvas = (src: HTMLCanvasElement) => {
    const c = document.createElement("canvas");
    c.width = src.width;
    c.height = src.height;
    c.getContext("2d")!.drawImage(src, 0, 0);
    return c;
  };
  // same rib→color mapping as buildCap: segment k takes column floor(k/2) of
  // strip A (even k) or B (odd k), six vertices per segment
  const capColorArray = (colorsA: number[], colorsB: number[], N: number) => {
    const cols: number[] = [];
    for (let k = 0; k < N; k++) {
      const c = (k % 2 === 0 ? colorsA : colorsB)[Math.floor(k / 2)] ?? 0x888888;
      const r = ((c >> 16) & 255) / 255, g = ((c >> 8) & 255) / 255, b = (c & 255) / 255;
      for (let v = 0; v < 6; v++) cols.push(r, g, b);
    }
    return new Float32Array(cols);
  };
  type Morph = {
    t0: number;
    dur: number;
    items: { mat: THREE.MeshLambertMaterial; from: HTMLCanvasElement; to: HTMLCanvasElement; live: HTMLCanvasElement }[];
    caps: { geo: THREE.BufferGeometry; from: Float32Array; to: Float32Array }[];
  };
  let morph: Morph | null = null;
  let pendingRecolor = false; // set by recolor(), consumed by update() (which knows `time`)

  // ---- water jets: arcs from the top 3 rings + a center jet on the topmost,
  // all with changing "pressure" (parabola size). ----
  const G = 22; // gravity
  const JET_RINGS = [2, 3, 4]; // upper rings squirt; groups 0,1,2
  type Drop = {
    ox: number; oy: number; oz: number; cx: number; cz: number;
    ph: number; life: number; up: number; out: number; grp: number;
  };
  const drops: Drop[] = [];
  JET_RINGS.forEach((ri, g) => {
    const R = RADII[ri] + amp;
    const topY = tierY[ri] + HEIGHTS[ri] / 2;
    const nEmit = Math.max(12, Math.round((2 * Math.PI * R) / 3));
    const PER_JET = 26; // tightly-packed droplets per stream → reads continuous
    for (let e = 0; e < nEmit; e++) {
      const th = (e / nEmit) * Math.PI * 2;
      const cx = Math.cos(th), cz = Math.sin(th);
      // one launch velocity shared by the whole stream so the droplets trace a
      // single coherent arc (not a scattered cloud); they just differ in phase.
      const life = 1.5 + Math.random() * 0.3;
      const up = 7 + Math.random() * 2;
      const out = 4 + Math.random() * 1.5;
      for (let k = 0; k < PER_JET; k++) {
        drops.push({ ox: R * cx, oy: topY, oz: R * cz, cx, cz, ph: (k / PER_JET) * life, life, up, out, grp: g });
      }
    }
  });
  // center jet on the topmost ring (group 3): a few tall near-vertical streams
  const topY4 = tierY[TIERS - 1] + HEIGHTS[TIERS - 1] / 2;
  const CENTER_STREAMS = 10;
  for (let s = 0; s < CENTER_STREAMS; s++) {
    const az = (s / CENTER_STREAMS) * Math.PI * 2 + Math.random() * 0.3;
    const life = 2.8 + Math.random() * 0.8; // long enough to reach the apex
    const up = 20 + Math.random() * 5; // tall at max capacity (a touch lower)
    const out = 4 + Math.random() * 2.5; // medium parabola arc radius
    const CN = 84; // dense, so the tall stream stays continuous
    for (let k = 0; k < CN; k++) {
      drops.push({ ox: 0, oy: topY4, oz: 0, cx: Math.cos(az), cz: Math.sin(az), ph: (k / CN) * life, life, up, out, grp: 3 });
    }
  }
  const COUNT = drops.length;
  const sprite = makeSoftSprite(); // soft puff — the fire halo
  const dropSprite = makeDropSprite(); // crisp bead — jets / splash / embers
  const positions = new Float32Array(COUNT * 3);
  // per-drop size + alpha + tint variation → spray, not uniform confetti
  const dropSize = new Float32Array(COUNT);
  const dropAlpha = new Float32Array(COUNT);
  const dropColor = new Float32Array(COUNT * 3);
  // per-drop sideways scatter that grows with flight time: streams leave the
  // nozzle tight and feather into mist toward the end of the arc
  const dropJit = new Float32Array(COUNT);
  const DRAG = 0.35; // horizontal drag → arcs fall steeper than they rise
  for (let n = 0; n < COUNT; n++) {
    positions[n * 3 + 1] = -9999;
    dropJit[n] = (Math.random() - 0.5) * 0.5;
    dropSize[n] = 0.3 + Math.random() * 0.22;
    dropAlpha[n] = 0.7 + Math.random() * 0.3;
    const k = Math.random() * 0.3; // lighten some drops around the jet blue
    dropColor[n * 3] = 0.25 + k * 0.5;
    dropColor[n * 3 + 1] = 0.6 + k * 0.35;
    dropColor[n * 3 + 2] = 0.84 + k * 0.16;
  }
  const jetGeo = new THREE.BufferGeometry();
  jetGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  jetGeo.setAttribute("aSize", new THREE.BufferAttribute(dropSize, 1));
  jetGeo.setAttribute("aAlpha", new THREE.BufferAttribute(dropAlpha, 1));
  jetGeo.setAttribute("aColor", new THREE.BufferAttribute(dropColor, 3));
  const jetMat = makeParticleMaterial(dropSprite);
  const jets = new THREE.Points(jetGeo, jetMat);
  group.add(jets);

  // ---- splashes: short-lived droplets kicked up where a jet meets the pool
  // (drops used to just vanish at the surface). Slots are recycled round-robin.
  const SPLASH_N = 420;
  const spX = new Float32Array(SPLASH_N), spZ = new Float32Array(SPLASH_N);
  const spVX = new Float32Array(SPLASH_N), spVY = new Float32Array(SPLASH_N), spVZ = new Float32Array(SPLASH_N);
  const spAge = new Float32Array(SPLASH_N).fill(9);
  const spLife = new Float32Array(SPLASH_N).fill(1);
  const spPos = new Float32Array(SPLASH_N * 3);
  const spSize = new Float32Array(SPLASH_N);
  const spAlpha = new Float32Array(SPLASH_N);
  const spColor = new Float32Array(SPLASH_N * 3);
  for (let i = 0; i < SPLASH_N; i++) {
    spPos[i * 3 + 1] = -9999;
    spColor[i * 3] = 0.62; spColor[i * 3 + 1] = 0.82; spColor[i * 3 + 2] = 0.95; // pale spray
  }
  let spNext = 0;
  const spawnSplash = (x: number, z: number) => {
    const i = spNext;
    spNext = (spNext + 1) % SPLASH_N;
    spX[i] = x; spZ[i] = z;
    const a = Math.random() * Math.PI * 2;
    const sp = 0.4 + Math.random() * 1.1;
    spVX[i] = Math.cos(a) * sp;
    spVZ[i] = Math.sin(a) * sp;
    spVY[i] = 2 + Math.random() * 3;
    spAge[i] = 0;
    spLife[i] = 0.3 + Math.random() * 0.3;
    spSize[i] = 0.22 + Math.random() * 0.2;
  };
  const splashGeo = new THREE.BufferGeometry();
  splashGeo.setAttribute("position", new THREE.BufferAttribute(spPos, 3));
  splashGeo.setAttribute("aSize", new THREE.BufferAttribute(spSize, 1));
  splashGeo.setAttribute("aAlpha", new THREE.BufferAttribute(spAlpha, 1));
  splashGeo.setAttribute("aColor", new THREE.BufferAttribute(spColor, 3));
  const splashMat = makeParticleMaterial(dropSprite);
  const splash = new THREE.Points(splashGeo, splashMat);
  group.add(splash);
  const wasAbove = new Uint8Array(COUNT); // drop was over the pool last frame

  // occasional slow surges so jets sometimes shoot MUCH higher than normal
  const surge = (t: number, phase: number) => {
    const s = Math.sin(t * 0.22 + phase);
    return s > 0.55 ? 1 + ((s - 0.55) / 0.45) * 2.6 : 1; // ~1 normally, up to ~3.6 in a surge
  };
  // pressure builds up then releases (a triangle ramp), so the arc visibly
  // grows and shrinks over time. Each ring is phase-offset.
  const ringPressure = (launch: number, g: number) => {
    const P = 7;
    const c = ((((launch + g * 2.3) % P) + P) % P) / P;
    const v = c < 0.75 ? c / 0.75 : 1 - (c - 0.75) / 0.25; // peak at 75% then release
    return (0.2 + 0.8 * v) * surge(launch, g * 1.7);
  };
  // center builds up to a tall near-vertical jet, releases to zero, then rests.
  const centerPressure = (t: number) => {
    const P = 13;
    const c = (((t % P) + P) % P) / P;
    let base: number;
    if (c < 0.5) base = 0.2 + 0.8 * (c / 0.5); // build to full (vertical)
    else if (c < 0.65) base = 1 - (c - 0.5) / 0.15; // release to 0
    else return 0; // rest (no center stream)
    return base * Math.min(1.4, surge(t, 4.0)); // capped surge — keep it reasonable
  };

  // ---- fire at the center top (the "Fire" of Fire & Water) ----
  // Volumetric ray-marched flame (mattatz/THREE.Fire, ported in ../fire). The
  // gradient texture loads async; the flame sits just above the top ring and
  // its height flickers via a scale pulse.
  const fireY0 = topY4 + 0.2;
  const FIRE_W = 3.2, FIRE_H = 19; // box footprint (flame width) and full height
  const fire = createFireVolume(new THREE.TextureLoader().load("fire-lut.png"));
  fire.scale.set(FIRE_W, FIRE_H, FIRE_W);
  fire.position.set(0, fireY0 + FIRE_H / 2, 0);
  // stronger, faster turbulence → the flame licks and dies out more raggedly
  const fmat = fire.material as THREE.ShaderMaterial;
  fmat.uniforms.magnitude.value = 2.1;
  fmat.uniforms.lacunarity.value = 2.6;
  fmat.uniforms.noiseScale.value.set(1, 2, 1, 0.55);
  group.add(fire);

  // flickering fire height/pressure
  const fireScale = (t: number) => 0.55 + 0.3 * Math.sin(t * 1.7) + 0.15 * Math.sin(t * 5.3);

  // ---- embers: tiny hot sparks spiralling up from the flame, cooling from
  // yellow through orange to smoke-gray as they age (ties fire to smoke) ----
  const EM_N = 26;
  const emA = new Float32Array(EM_N), emR = new Float32Array(EM_N);
  const emY = new Float32Array(EM_N), emVy = new Float32Array(EM_N);
  const emLife = new Float32Array(EM_N), emPh = new Float32Array(EM_N);
  const emSw = new Float32Array(EM_N), emS0 = new Float32Array(EM_N);
  const emPos = new Float32Array(EM_N * 3);
  const emSize = new Float32Array(EM_N);
  const emAlpha = new Float32Array(EM_N);
  const emCol = new Float32Array(EM_N * 3);
  for (let n = 0; n < EM_N; n++) {
    emA[n] = Math.random() * Math.PI * 2;
    emR[n] = 0.2 + Math.random() * 0.9;
    emY[n] = fireY0 + 1 + Math.random() * 4;
    emVy[n] = 3.5 + Math.random() * 3;
    emLife[n] = 1.1 + Math.random() * 1.3;
    emPh[n] = Math.random() * emLife[n];
    emSw[n] = (Math.random() - 0.5) * 3; // swirl rate
    emS0[n] = 0.2 + Math.random() * 0.2;
    emPos[n * 3 + 1] = -9999;
  }
  const emberGeo = new THREE.BufferGeometry();
  emberGeo.setAttribute("position", new THREE.BufferAttribute(emPos, 3));
  emberGeo.setAttribute("aSize", new THREE.BufferAttribute(emSize, 1));
  emberGeo.setAttribute("aAlpha", new THREE.BufferAttribute(emAlpha, 1));
  emberGeo.setAttribute("aColor", new THREE.BufferAttribute(emCol, 3));
  const emberMat = makeParticleMaterial(dropSprite); // crisp sparks, not fuzz
  emberMat.blending = THREE.AdditiveBlending; // sparks GLOW instead of paint
  const embers = new THREE.Points(emberGeo, emberMat);
  group.add(embers);

  // the flame really lights its surroundings: a flickering warm point light
  // that warms the top ring — barely noticeable in daylight (as it should
  // be), unmistakable at night
  const fireLight = new THREE.PointLight(0xff8a3c, 0, 60, 2);
  fireLight.position.set(0, fireY0 + 4, 0);
  group.add(fireLight);

  // a faint warm halo behind the flame — fake firelight, no real lighting
  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: sprite, color: 0xff9540, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }),
  );
  halo.scale.set(11, 14, 1);
  halo.position.set(0, fireY0 + 6, 0);
  group.add(halo);

  // ---- feature state + music ----
  let fireOn = true;
  let waterOn = true;
  // eased 0..1 intensities so toggling ramps the jets/flames down/up smoothly
  // (in both manual and auto mode) instead of cutting abruptly.
  let fireLvl = 1;
  let waterLvl = 1;
  let lastT = 0;
  // periodic "rest" interludes: fire/water briefly fade to zero then return —
  // in EVERY mode, not just kiosk. Respects the toggles: a feature toggled off
  // stays off; a rest only dips one that's currently on.
  let waterRestUntil = 0, waterRestNext = 0;
  let fireRestUntil = 0, fireRestNext = 0;
  let restInit = false;
  const music = createMusic();

  return {
    name: "Fountain",
    group,
    background,
    camera: [113, 20, 113], // pulled back to keep framing at 52° FOV (was [72,13,72]@75°)
    // the HUD clock: simulated time of day, with a sun/moon marker
    status: () => {
      const h = Math.floor(simHour);
      const m = Math.floor((simHour % 1) * 60);
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    },
    dayCount: () => midnightCount,
    // the midnight pattern change: new patterns breathe into the live panels
    // over ~6s — no rebuild, no fade to black
    recolor: () => { pendingRecolor = true; },
    toggles: [
      { label: "fire", initial: true, set: (on) => { fireOn = on; } },
      { label: "water", initial: true, set: (on) => { waterOn = on; } },
      { label: "sound", initial: false, set: (on) => (on ? music.start() : music.stop()) },
    ],
    dispose: () => {
      music.stop();
      (fire.material as THREE.ShaderMaterial).uniforms.fireTex.value?.dispose(); // free the LUT
      if (crispPool) (pool as Reflector).dispose(); // free the planar render target
      cubeRT.dispose(); // free the cube render target
      sprite.dispose(); // particle sprites (not reachable via material.map)
      dropSprite.dispose();
    },
    update: (time, autoRotate, env) => {
      const dt = Math.min(0.05, Math.max(0, time - lastT));
      lastT = time;
      if (autoRotate) {
        // auto/kiosk mode orbits the camera, so it asks us to hold the group
        // still (spinGroup === false) while the rings keep turning.
        if (env?.spinGroup !== false) group.rotation.y += 0.006 * dt;
        if (!ringInit) { ringInit = true; } // initial speeds set at creation; no per-frame re-rolling
        for (let t = 0; t < ringGroups.length; t++) {
          // rings drift at their creation-time random speed; they only get new
          // targets at the midnight pattern change (see below)
          const step = 0.084 * dt;
          ringSpeed[t] += Math.max(-step, Math.min(step, ringTarget[t] - ringSpeed[t]));
          ringGroups[t].rotation.y += ringSpeed[t] * dt;
        }
      }
      // particle point sizes are in world units; the shader needs the drawing-
      // buffer height to convert them to pixels
      if (env) {
        const hpx = env.renderer.domElement.height;
        jetMat.uniforms.uScale.value = hpx;
        splashMat.uniforms.uScale.value = hpx;
        emberMat.uniforms.uScale.value = hpx;
      }

      // ---- in-place pattern morph: start ----
      if (pendingRecolor) {
        pendingRecolor = false;
        newScheme(); // swap the palette too — a recolor without a new scheme
        // only reshuffles patterns within the same colours
        const newMono = Math.random() < MONO_CHANCE; // same B&W odds as a fresh build
        const items: Morph["items"] = [];
        const caps: Morph["caps"] = [];
        for (const r of morphRings) {
          const nA = makeStrip(r.P, r.rows, newMono, Math.random() < 0.6);
          const nB = makeStrip(r.P, r.rows, newMono, Math.random() < 0.6);
          for (const [mat, ns] of [[r.matA, nA], [r.matB, nB]] as const) {
            const live = (mat.map as THREE.CanvasTexture).image as HTMLCanvasElement;
            items.push({ mat, from: cloneCanvas(live), to: ns.texture.image as HTMLCanvasElement, live });
          }
          const to = capColorArray(nA.colors, nB.colors, r.N);
          for (const geo of r.capGeos) {
            const attr = geo.getAttribute("color") as THREE.BufferAttribute;
            caps.push({ geo, from: Float32Array.from(attr.array as Float32Array), to });
          }
        }
        morph = { t0: time, dur: 6, items, caps };
        // fresh drift for the new patterns
        for (let i = 0; i < ringTarget.length; i++) ringTarget[i] = randSpin();
      }
      // ---- in-place pattern morph: advance (blend new patterns into the
      // live canvases + cap vertex colors; nothing rebuilds, nothing fades) ----
      if (morph) {
        const k = Math.min(1, (time - morph.t0) / morph.dur);
        const e = k * k * (3 - 2 * k); // smoothstep — eases both ends
        for (const it of morph.items) {
          const ctx = it.live.getContext("2d")!;
          ctx.globalAlpha = 1;
          ctx.drawImage(it.from, 0, 0);
          ctx.globalAlpha = e;
          ctx.drawImage(it.to, 0, 0);
          ctx.globalAlpha = 1;
          (it.mat.map as THREE.CanvasTexture).needsUpdate = true;
        }
        for (const cp of morph.caps) {
          const attr = cp.geo.getAttribute("color") as THREE.BufferAttribute;
          const arr = attr.array as Float32Array;
          for (let i = 0; i < arr.length; i++) arr[i] = cp.from[i] + (cp.to[i] - cp.from[i]) * e;
          attr.needsUpdate = true;
        }
        if (k >= 1) morph = null;
      }

      // ---- fast day/night: the sun & moon arc across the sky ----
      // skyTime is the PAUSABLE clock: freezing it holds the sun/moon/light
      // still while `time` (rings, water, fire) keeps running
      const skyT = env?.skyTime ?? time;
      const th = (skyT / DAY_CYCLE) * Math.PI * 2 + 1.1; // t=0 → mid-morning
      // hour angle: 0 at solar noon, ±π at midnight (equinox declination)
      const H = th - Math.PI / 2;
      // unit direction on the celestial sphere (x east, y up, z south)
      const ue = -Math.sin(H);
      const uu = Math.cos(LAT) * Math.cos(H);
      const us = Math.sin(LAT) * Math.cos(H);
      const se = uu; // sun height (±cos LAT); drives daylight/dusk/night
      const sxp = ue * SKY_R, syp = uu * SKY_R, szp = us * SKY_R;
      sunDisc.position.set(sxp, syp, szp);
      // the moon rides the same arc at its own hour angle, lagging the sun by
      // its elongation — a full moon (E=π) rises exactly at sunset, a half
      // moon trails by a quarter of a day
      const Hm = H - moonE;
      const uem = -Math.sin(Hm);
      const uum = Math.cos(LAT) * Math.cos(Hm);
      const usm = Math.sin(LAT) * Math.cos(Hm);
      moonDisc.position.set(uem * SKY_R, uum * SKY_R, usm * SKY_R);
      const dayL = Math.min(1, Math.max(0, (se + 0.06) / 0.24)); // daylight 0..1
      const nightL = 1 - dayL;
      const duskL = Math.max(0, 1 - Math.abs(se) / 0.25); // sun near the horizon
      const sunMat = sunDisc.material as THREE.MeshBasicMaterial;
      // NO opacity modulation on either body, EVER — they are opaque meshes
      // and the planet's limb clipping them via the depth buffer is the ONLY
      // thing that hides them. (Any time-of-day opacity is a trap: the full
      // moon sets exactly at sunrise, so a fade fires during every moonset.)
      // Slow self-spin — the procedural surface visibly rotates; runs on the
      // sky clock so pausing time also holds the orbs still.
      sunDisc.rotation.y = skyT * 0.1;
      moonDisc.rotation.y = -skyT * 0.06;
      // moonLIGHT on the fountain follows the moon's true altitude — the light
      // should die as the moon drops below the fountain's own horizon,
      // independent of where the viewing camera happens to be
      const moonUp = Math.max(0, Math.min(1, (uum * SKY_R + 6) / 18));
      // golden hour: near the horizon the sun swells, reddens, and washes the
      // whole sky (hemisphere + background) in amber
      // the tint multiplies the granulation vertex colours (amber at the
      // horizon → warm white high in the sky); the mesh swells a touch at dusk
      sunMat.color.lerpColors(SUN_LOW, SUN_HIGH, Math.min(1, Math.max(0, se / 0.45)));
      const sunK = 1 + 0.1 * duskL;
      sunDisc.scale.set(sunK, sunK, sunK);
      // the key light IS the sun; after dark the fill light becomes moonlight.
      // Key is deliberately strong relative to hemi so the sun's DIRECTION is
      // legible: panels facing the sun are bright, panels facing away are in
      // shadow — the fountain rotates and you see it sweep.
      key.position.set(sxp, Math.max(syp, 8), szp);
      key.intensity = keyStrength * dayL;
      key.color.lerpColors(KEY_LOW, KEY_HIGH, Math.min(1, Math.max(0, se / 0.55)));
      fill.position.set(uem * SKY_R, Math.max(uum * SKY_R, 12), usm * SKY_R);
      // fill / moonlight is a gentler bounce — keeps shadow sides readable but
      // doesn't compete with the key, so there's always a lit and a dark side.
      // Day fill kept LOW: the shadow side should visibly drop away from the
      // sunlit side, not get topped back up by a second sun.
      fill.intensity = 0.2 * dayL + moonStrength * nightL * moonUp * (0.35 + 0.65 * moonK);
      // the spray is lit by the same sky: full brightness by day, dim and
      // slightly cool by night (brighter under a big moon) — it used to stay
      // day-bright at midnight, which read as self-luminous water
      const wetB = 0.4 + 0.6 * dayL + 0.32 * nightL * moonUp * moonK;
      const jetTint = jetMat.uniforms.uTint.value as THREE.Color;
      jetTint.setRGB(wetB * (1 - 0.14 * nightL), wetB * (1 - 0.06 * nightL), wetB);
      (splashMat.uniforms.uTint.value as THREE.Color).copy(jetTint);
      fill.color.lerpColors(MOONLIGHT, FILL_DAY, dayL);
      // hemisphere: enough fill to keep the panels colourful on their shadow
      // side, but the DAY ambient is what was washing out daytime shadows —
      // at 1.9 the shadow side sat at ~2.2 total vs the night floor's 0.5,
      // which is why moonlight looked contrastier than sunlight. At ~1.1 the
      // noon key:ambient ratio is ~3.5:1: sunlit faces stay bright (key is
      // untouched) while shadow faces and the planet's night side actually
      // fall dark. Night floor (0.5) keeps the artwork visible by moonlight.
      hemi.intensity = 0.5 + 0.6 * dayL; // range 0.5–1.1 (key at 4.0–5.2 dominates)
      hemi.color.lerpColors(HEMI_NIGHT, HEMI_DAY, dayL).lerp(GOLD, duskL * 0.4);
      hemi.groundColor.lerpColors(GND_NIGHT, GND_DAY, dayL);
      // horizon follows: day haze → GOLDEN dusk → night blue-gray; the clear
      // color still tracks it so the toolbar crossfade dips through the sky
      bgNow.lerpColors(BG_NIGHT, BG_DAY, dayL).lerp(BG_DUSK, duskL * 0.6);
      env?.renderer.setClearColor(bgNow);
      // sky dome: horizon = bgNow, zenith runs its own bluer/darker ramp
      zenNow.lerpColors(ZEN_NIGHT, ZEN_DAY, dayL).lerp(ZEN_DUSK, duskL * 0.45);
      (skyUniforms.uHorizon.value as THREE.Color).copy(bgNow);
      (skyUniforms.uZenith.value as THREE.Color).copy(zenNow);
      skyUniforms.uNight.value = nightL;
      skyUniforms.uTime.value = time;
      (skyUniforms.uSunDir.value as THREE.Vector3).set(ue, uu, us);
      skyUniforms.uGlow.value = duskL;
      // simulated clock: noon when the sun peaks (th = π/2), midnight opposite
      simHour = ((((th - Math.PI / 2) / (Math.PI * 2)) * 24 + 12) % 24 + 24) % 24;
      sunUp = se > 0;
      // count simulated midnights (hour near 0) for the pattern-change scheduler
      const atMidnight = simHour < 0.6 || simHour > 23.4;
      if (atMidnight && !lastWasMidnight) midnightCount++;
      lastWasMidnight = atMidnight;
      // animate the pool's reflective water surface
      (pool.material as THREE.ShaderMaterial).uniforms.uTime.value = time;

      // non-crisp mode: refresh the cube map the pool reflects (hide the pool
      // during the capture to avoid feedback)
      if (env && !crispPool) {
        for (const w of waterMeshes) w.visible = false;
        cubeCam.update(env.renderer, env.scene);
        for (const w of waterMeshes) w.visible = true;
      }

      // one coherent breeze for the whole scene: direction and strength wander
      // slowly, and the jets, smoke, embers and flame all lean with it — far
      // more alive than each system drifting randomly on its own.
      const windS = 0.35 + 0.35 * Math.sin(time * 0.11 + 2.1) + 0.2 * Math.sin(time * 0.031);
      const windA = time * 0.05;
      const wx = Math.cos(windA) * windS;
      const wz = Math.sin(windA) * windS;

      // schedule the periodic rests (water rests a touch longer than fire)
      if (!restInit) {
        waterRestNext = time + 35 + Math.random() * 35;
        fireRestNext = time + 28 + Math.random() * 32;
        restInit = true;
      }
      if (waterRestUntil) { if (time >= waterRestUntil) { waterRestUntil = 0; waterRestNext = time + 35 + Math.random() * 35; } }
      else if (time >= waterRestNext) waterRestUntil = time + 5 + Math.random() * 5;
      if (fireRestUntil) { if (time >= fireRestUntil) { fireRestUntil = 0; fireRestNext = time + 28 + Math.random() * 32; } }
      else if (time >= fireRestNext) fireRestUntil = time + 4 + Math.random() * 4;

      // ease fire/water intensity toward target (toggle AND not currently resting)
      const RAMP = 1.3; // seconds for a full fade in/out
      const approach = (lvl: number, on: boolean) => {
        const step = dt / RAMP;
        const target = on ? 1 : 0;
        return lvl < target ? Math.min(target, lvl + step) : Math.max(target, lvl - step);
      };
      waterLvl = approach(waterLvl, waterOn && !waterRestUntil);
      fireLvl = approach(fireLvl, fireOn && !fireRestUntil);

      // drive the pool's impact ripples from where each ring's jets land
      // (rough analytic landing radius from the ring's current pressure)
      if (crispPool) {
        const u = (pool.material as THREE.ShaderMaterial).uniforms;
        u.uNight.value = nightL;
        (u.uSky.value as THREE.Color).copy(bgNow);
        const poolR = maxR + amp + 6;
        for (let g = 0; g < JET_RINGS.length; g++) {
          const ri = JET_RINGS[g];
          const p = Math.min(1, ringPressure(time, g));
          const vy = 8 * p * waterLvl;
          const vo = 4.75 * (1 - 0.7 * p) * waterLvl;
          const hh = tierY[ri] + HEIGHTS[ri] / 2 - poolY;
          const tl = (vy + Math.sqrt(vy * vy + 2 * G * hh)) / G;
          const reach = (vo / DRAG) * (1 - Math.exp(-DRAG * tl)); // same drag as the drops
          u.uImpactR.value.setComponent(g, Math.min(0.96, (RADII[ri] + amp + reach) / poolR));
          u.uImpactA.value.setComponent(g, 0.12 * p * waterLvl);
        }
      }

      // water jets
      jets.visible = waterLvl > 0.001;
      const canSplash = waterLvl > 0.25; // no splashes while the jets collapse
      if (jets.visible) {
        jetMat.uniforms.uOpacity.value = 0.95 * Math.min(1, waterLvl * 1.6);
        for (let n = 0; n < COUNT; n++) {
          const d = drops[n];
          const tt = (time + d.ph) % d.life;
          // pressure sampled at LAUNCH time (time - tt), so drops already in
          // flight keep their arc while the nozzle pressure changes behind them
          const p = d.grp === 3 ? centerPressure(time - tt) : ringPressure(time - tt, d.grp);
          if (p < 0.04) { positions[n * 3 + 1] = -9999; wasAbove[n] = 0; continue; } // off → hidden
          const pn = p > 1 ? 1 : p;
          const vy = d.up * p * waterLvl; // intensity scales arc height -> collapses smoothly
          const vo = d.out * (1 - 0.7 * pn) * waterLvl; // ...and reach, so it sinks back in
          const rad = (vo / DRAG) * (1 - Math.exp(-DRAG * tt)); // dragged reach
          const jit = dropJit[n] * tt * tt; // sideways scatter grows in flight
          const wt = 0.35 * tt * tt; // wind takes hold as the drop slows
          const y = d.oy + vy * tt - 0.5 * G * tt * tt;
          const x = d.ox + d.cx * rad - d.cz * jit + wx * wt;
          const z = d.oz + d.cz * rad + d.cx * jit + wz * wt;
          if (y < poolY - 0.3) {
            // the drop just crossed the pool surface → kick up a splash there
            if (wasAbove[n] && canSplash && Math.random() < 0.3) spawnSplash(x, z);
            wasAbove[n] = 0;
            positions[n * 3 + 1] = -9999;
            continue;
          }
          positions[n * 3] = x;
          positions[n * 3 + 1] = y;
          positions[n * 3 + 2] = z;
          wasAbove[n] = 1;
        }
        jetGeo.attributes.position.needsUpdate = true;
      }

      // splashes play out even while the jets fade
      let liveSplash = false;
      for (let i = 0; i < SPLASH_N; i++) {
        if (spAge[i] < spLife[i]) spAge[i] += dt;
        const a = spAge[i];
        if (a >= spLife[i]) { spPos[i * 3 + 1] = -9999; spAlpha[i] = 0; continue; }
        liveSplash = true;
        spPos[i * 3] = spX[i] + spVX[i] * a;
        spPos[i * 3 + 1] = poolY + 0.1 + spVY[i] * a - 0.5 * G * a * a;
        spPos[i * 3 + 2] = spZ[i] + spVZ[i] * a;
        spAlpha[i] = 0.85 * (1 - a / spLife[i]); // fade out over its short life
      }
      splash.visible = liveSplash;
      if (liveSplash) {
        splashGeo.attributes.position.needsUpdate = true;
        splashGeo.attributes.aAlpha.needsUpdate = true;
      }

      // fire is always present when toggled on (even with water); height
      // flickers with its own changing "pressure"
      fire.visible = fireLvl > 0.001;
      if (fire.visible) {
        // flicker the flame height a little, and keep its base pinned to the
        // top ring as the height changes
        const hScale = 0.85 + 0.3 * (fireScale(time) - 0.55);
        fire.scale.set(FIRE_W, FIRE_H * hScale, FIRE_W);
        fire.position.y = fireY0 + (FIRE_H * hScale) / 2;
        // the flame leans away from the wind (rotation is about its centre, so
        // keep the angle small enough that the base stays on the ring)
        fire.rotation.x = wz * 0.07;
        fire.rotation.z = -wx * 0.07;
        fire.updateFire(time, Math.min(1, fireLvl * 1.5));
      }
      // halo + real firelight breathe with the flame's flicker
      halo.visible = fire.visible;
      if (halo.visible)
        (halo.material as THREE.SpriteMaterial).opacity = 0.12 * fireLvl * (0.7 + 0.6 * fireScale(time));
      fireLight.intensity = fireLvl * (26 + 30 * (fireScale(time) - 0.55));

      // embers ride the flame: spiral up, cool yellow → orange → gray, fade
      embers.visible = fireLvl > 0.01;
      if (embers.visible) {
        emberMat.uniforms.uOpacity.value = 0.9 * fireLvl;
        for (let n = 0; n < EM_N; n++) {
          const tt = (time + emPh[n]) % emLife[n];
          const f = tt / emLife[n];
          const ang = emA[n] + emSw[n] * tt;
          const r = emR[n] + 0.6 * f;
          emPos[n * 3] = Math.cos(ang) * r + wx * 1.6 * tt;
          emPos[n * 3 + 1] = emY[n] + emVy[n] * tt;
          emPos[n * 3 + 2] = Math.sin(ang) * r + wz * 1.6 * tt;
          if (f < 0.45) {
            const k = f / 0.45; // yellow → orange
            emCol[n * 3] = 1 - 0.02 * k;
            emCol[n * 3 + 1] = 0.9 - 0.42 * k;
            emCol[n * 3 + 2] = 0.35 - 0.22 * k;
          } else {
            const k = (f - 0.45) / 0.55; // orange → smoke gray
            emCol[n * 3] = 0.98 - 0.43 * k;
            emCol[n * 3 + 1] = 0.48 + 0.07 * k;
            emCol[n * 3 + 2] = 0.13 + 0.42 * k;
          }
          emAlpha[n] = Math.min(1, f / 0.12) * Math.max(0, 1 - Math.max(0, (f - 0.55) / 0.45));
          emSize[n] = emS0[n] * (1 - 0.4 * f); // sparks shrink as they cool
        }
        emberGeo.attributes.position.needsUpdate = true;
        emberGeo.attributes.aColor.needsUpdate = true;
        emberGeo.attributes.aAlpha.needsUpdate = true;
        emberGeo.attributes.aSize.needsUpdate = true;
      }

    },
  };
}
