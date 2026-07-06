import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import { makeStrip } from "../patterns";
import { createMusic } from "../music";
import { createFireVolume } from "../fire";
import { makeSoftSprite, makeDropSprite, makeParticleMaterial } from "../points";
import type { Creation } from "../creation";

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
  const monoRender = forceColor ? false : Math.random() < 0.25;
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
  const hemi = new THREE.HemisphereLight(0xffffff, 0xcfc8bb, 2.6);
  const key = new THREE.DirectionalLight(0xfff2e0, 1.5);
  key.position.set(60, 90, 40);
  const fill = new THREE.DirectionalLight(0xdfe8ff, 0.7);
  fill.position.set(-50, 40, -60);
  group.add(hemi, key, fill);

  // Darker, slightly see-through neutral fill for the upper levels (ring drums +
  // central column) — no water, no reflection.
  const neutralMat = new THREE.MeshLambertMaterial({
    color: 0x6f6a5e,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  // Cube map for the pool's NON-crisp reflection mode (captured from the
  // fountain's centre each frame). Only used when the render isn't crisp.
  const cubeRT = new THREE.WebGLCubeRenderTarget(512);
  const cubeCam = new THREE.CubeCamera(0.5, 2000, cubeRT);
  cubeCam.position.y = poolY + 0.5; // just above the pool, so its upward view
  group.add(cubeCam);               // captures the fountain → the pool reflects it
  const waterMeshes: THREE.Object3D[] = []; // hidden during the cube capture (just the pool)

  // Cube-map water material — the pool's soft/non-crisp reflective surface.
  const waterUniforms = {
    uTime: { value: 0 },
    envMap: { value: cubeRT.texture },
  };
  const waterMat = new THREE.ShaderMaterial({
    uniforms: waterUniforms,
    side: THREE.DoubleSide,
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main(){
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform samplerCube envMap;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main(){
        // summed directional ripples (no multiplicative blobs) → smooth flowing
        // water rather than isolated spots; low amplitude = subtle shimmer
        float w = sin(vUv.x * 7.0 + uTime * 0.5)
                + sin(vUv.y * 9.0 - uTime * 0.45)
                + 0.7 * sin((vUv.x + vUv.y) * 13.0 + uTime * 0.65)
                + 0.5 * sin((vUv.x - vUv.y) * 17.0 - uTime * 0.6);
        float m = clamp(0.5 + 0.1 * w, 0.0, 1.0);
        vec3 deep  = vec3(0.12, 0.36, 0.62);
        vec3 light = vec3(0.34, 0.66, 0.88);
        vec3 water = mix(deep, light, m);
        vec3 N = normalize(vWorldNormal + 0.012 * vec3(sin(vUv.y*18.0+uTime*1.3), 0.0, cos(vUv.x*18.0-uTime*1.1)));
        vec3 V = normalize(vWorldPos - cameraPosition);
        vec3 R = reflect(V, N);
        vec3 env = textureCube(envMap, R).rgb;
        float fres = 0.5 + 0.18 * pow(1.0 - abs(dot(N, -V)), 3.0); // stronger, more visible
        gl_FragColor = vec4(mix(water, env, fres), 1.0);
      }
    `,
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

  // The pool's reflection style for this render:
  //   crispPool  -> a sharp planar mirror of the fountain
  //   !crispPool -> the cube-map reflective water surface (soft / non-crisp)
  const poolGeo = new THREE.CircleGeometry(maxR + amp + 6, 96);
  let pool: THREE.Mesh;
  if (crispPool) {
    const poolReflectShader = {
      uniforms: {
        color: { value: null },
        tDiffuse: { value: null },
        textureMatrix: { value: null },
        uTime: { value: 0 },
        // impact ripples: normalized radius where each jet ring's water lands,
        // and its strength (both driven per-frame from the jet pressure)
        uImpactR: { value: new THREE.Vector3(0.5, 0.55, 0.6) },
        uImpactA: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexShader: `
        uniform mat4 textureMatrix;
        varying vec4 vUv;     // projective coords into the reflection texture
        varying vec2 vLocal;  // disc-local uv for the water ripple
        varying vec3 vWorldPos; // for the Fresnel view angle
        void main() {
          vLocal = uv;
          vUv = textureMatrix * vec4(position, 1.0);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform vec3 uImpactR;
        uniform vec3 uImpactA;
        varying vec4 vUv;
        varying vec2 vLocal;
        varying vec3 vWorldPos;
        void main() {
          // summed directional ripples (no multiplicative blobs) → smooth
          // flowing water rather than isolated spots; low amplitude = subtle
          float w = sin(vLocal.x * 7.0 + uTime * 0.5)
                  + sin(vLocal.y * 9.0 - uTime * 0.45)
                  + 0.7 * sin((vLocal.x + vLocal.y) * 13.0 + uTime * 0.65)
                  + 0.5 * sin((vLocal.x - vLocal.y) * 17.0 - uTime * 0.6);
          // expanding rings around each jet-ring's landing radius, so the pool
          // visibly reacts where the falling water actually meets it
          float dc = length(vLocal - vec2(0.5)) * 2.0;
          float rings =
              uImpactA.x * exp(-24.0 * abs(dc - uImpactR.x)) * sin((dc - uImpactR.x) * 80.0 - uTime * 7.0)
            + uImpactA.y * exp(-24.0 * abs(dc - uImpactR.y)) * sin((dc - uImpactR.y) * 80.0 - uTime * 7.4)
            + uImpactA.z * exp(-24.0 * abs(dc - uImpactR.z)) * sin((dc - uImpactR.z) * 80.0 - uTime * 6.6);
          float m = clamp(0.5 + 0.1 * w + rings, 0.0, 1.0);
          vec3 deep  = vec3(0.12, 0.36, 0.62);
          vec3 light = vec3(0.34, 0.66, 0.88);
          vec3 water = mix(deep, light, m);
          vec2 ripple = vec2(sin(vLocal.y * 28.0 + uTime * 1.3),
                             cos(vLocal.x * 28.0 - uTime * 1.1)) * 0.006
                      + vec2(rings * 0.01);
          vec4 refl = texture2DProj(tDiffuse, vUv + vec4(ripple, 0.0, 0.0));
          // Fresnel: near-vertical views see into the water (deep colour),
          // grazing views become mostly mirror — like a real pool
          vec3 V = normalize(cameraPosition - vWorldPos);
          float fres = 0.18 + 0.55 * pow(1.0 - max(V.y, 0.0), 2.5);
          // contact shading: the water darkens toward the tower base, which
          // grounds the sculpture in the pool instead of floating on a disc
          float ao = 1.0 - 0.22 * smoothstep(0.95, 0.55, dc);
          gl_FragColor = vec4(mix(water, refl.rgb, fres) * ao, 1.0);
        }
      `,
    };
    pool = new Reflector(poolGeo, {
      textureWidth: 1024,
      textureHeight: 1024,
      clipBias: 0.003,
      shader: poolReflectShader,
    });
  } else {
    pool = new THREE.Mesh(poolGeo, waterMat); // cube-map (non-crisp) water
  }
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = poolY;
  group.add(pool);
  waterMeshes.push(pool);

  // ---- rings (each spins on its own, alternating directions) ----
  const ringGroups: THREE.Group[] = [];
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
    ring.add(new THREE.Mesh(buildCap(y + h / 2), capMat));
    ring.add(new THREE.Mesh(buildCap(y - h / 2), capMat));

    group.add(ring);
    ringGroups.push(ring);
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
        if (!ringInit) {
          for (let t = 0; t < ringGroups.length; t++) ringNext[t] = time + 6 + Math.random() * 12;
          ringInit = true;
        }
        for (let t = 0; t < ringGroups.length; t++) {
          // re-roll this ring's target spin now and then; ease toward it
          if (time >= ringNext[t]) { ringTarget[t] = randSpin(); ringNext[t] = time + 8 + Math.random() * 14; }
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
      // halo breathes with the flame's flicker
      halo.visible = fire.visible;
      if (halo.visible)
        (halo.material as THREE.SpriteMaterial).opacity = 0.12 * fireLvl * (0.7 + 0.6 * fireScale(time));

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
