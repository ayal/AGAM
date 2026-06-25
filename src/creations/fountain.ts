import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import { makeStrip } from "../patterns";
import { createMusic } from "../music";
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

  // Darker, slightly see-through neutral fill for the upper levels (ring drums +
  // central column) — no water, no reflection.
  const neutralMat = new THREE.MeshBasicMaterial({
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
      },
      vertexShader: `
        uniform mat4 textureMatrix;
        varying vec4 vUv;     // projective coords into the reflection texture
        varying vec2 vLocal;  // disc-local uv for the water ripple
        void main() {
          vLocal = uv;
          vUv = textureMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float uTime;
        varying vec4 vUv;
        varying vec2 vLocal;
        void main() {
          // summed directional ripples (no multiplicative blobs) → smooth
          // flowing water rather than isolated spots; low amplitude = subtle
          float w = sin(vLocal.x * 7.0 + uTime * 0.5)
                  + sin(vLocal.y * 9.0 - uTime * 0.45)
                  + 0.7 * sin((vLocal.x + vLocal.y) * 13.0 + uTime * 0.65)
                  + 0.5 * sin((vLocal.x - vLocal.y) * 17.0 - uTime * 0.6);
          float m = clamp(0.5 + 0.1 * w, 0.0, 1.0);
          vec3 deep  = vec3(0.12, 0.36, 0.62);
          vec3 light = vec3(0.34, 0.66, 0.88);
          vec3 water = mix(deep, light, m);
          vec2 ripple = vec2(sin(vLocal.y * 28.0 + uTime * 1.3),
                             cos(vLocal.x * 28.0 - uTime * 1.1)) * 0.006;
          vec4 refl = texture2DProj(tDiffuse, vUv + vec4(ripple, 0.0, 0.0));
          gl_FragColor = vec4(mix(water, refl.rgb, 0.34), 1.0);
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
    const matA = new THREE.MeshBasicMaterial({ map: stripA.texture, side: THREE.DoubleSide });
    const matB = new THREE.MeshBasicMaterial({ map: stripB.texture, side: THREE.DoubleSide });

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
    const capMat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
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
  const randSpin = () => (Math.random() < 0.5 ? 1 : -1) * (0.0006 + Math.random() * 0.0012);
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
    const life = 2.0 + Math.random() * 0.6;
    const up = 20 + Math.random() * 3;
    const out = 1.4 + Math.random() * 1.4;
    for (let k = 0; k < 34; k++) {
      drops.push({ ox: 0, oy: topY4, oz: 0, cx: Math.cos(az), cz: Math.sin(az), ph: (k / 34) * life, life, up, out, grp: 3 });
    }
  }
  const COUNT = drops.length;
  const positions = new Float32Array(COUNT * 3);
  const jetGeo = new THREE.BufferGeometry();
  jetGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const jets = new THREE.Points(
    jetGeo,
    new THREE.PointsMaterial({ color: 0x3f9ad6, size: 0.6, transparent: true, opacity: 0.95, depthWrite: false }),
  );
  group.add(jets);

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
  const FCOUNT = 240;
  const fox = new Float32Array(FCOUNT), foz = new Float32Array(FCOUNT);
  const fvy = new Float32Array(FCOUNT), fdx = new Float32Array(FCOUNT), fdz = new Float32Array(FCOUNT);
  const flife = new Float32Array(FCOUNT), fphase = new Float32Array(FCOUNT);
  const firePos = new Float32Array(FCOUNT * 3);
  const fireCol = new Float32Array(FCOUNT * 3);
  const fireY0 = topY4 + 0.2;
  for (let n = 0; n < FCOUNT; n++) {
    const a = Math.random() * Math.PI * 2;
    const rr = Math.random() * 2.0;
    fox[n] = Math.cos(a) * rr;
    foz[n] = Math.sin(a) * rr;
    fvy[n] = 5 + Math.random() * 3.5;
    fdx[n] = (Math.random() - 0.5) * 1.2;
    fdz[n] = (Math.random() - 0.5) * 1.2;
    flife[n] = 0.9 + Math.random() * 0.7;
    fphase[n] = Math.random() * flife[n];
  }
  const fireGeo = new THREE.BufferGeometry();
  fireGeo.setAttribute("position", new THREE.BufferAttribute(firePos, 3));
  fireGeo.setAttribute("color", new THREE.BufferAttribute(fireCol, 3));
  const fire = new THREE.Points(
    fireGeo,
    new THREE.PointsMaterial({
      size: 1.7, vertexColors: true, transparent: true, opacity: 0.92,
      depthWrite: false, sizeAttenuation: true,
    }),
  );
  group.add(fire);

  // flickering fire height/pressure
  const fireScale = (t: number) => 0.55 + 0.3 * Math.sin(t * 1.7) + 0.15 * Math.sin(t * 5.3);

  // ---- feature state + music ----
  let fireOn = true;
  let waterOn = true;
  // eased 0..1 intensities so toggling ramps the jets/flames down/up smoothly
  // (in both manual and auto mode) instead of cutting abruptly.
  let fireLvl = 1;
  let waterLvl = 1;
  let lastT = 0;
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
      if (crispPool) (pool as Reflector).dispose(); // free the planar render target
      cubeRT.dispose(); // free the cube render target
    },
    update: (time, autoRotate, env) => {
      const dt = Math.min(0.05, Math.max(0, time - lastT));
      lastT = time;
      if (autoRotate) {
        // auto/kiosk mode orbits the camera, so it asks us to hold the group
        // still (spinGroup === false) while the rings keep turning.
        if (env?.spinGroup !== false) group.rotation.y += 0.0001;
        if (!ringInit) {
          for (let t = 0; t < ringGroups.length; t++) ringNext[t] = time + 6 + Math.random() * 12;
          ringInit = true;
        }
        for (let t = 0; t < ringGroups.length; t++) {
          // re-roll this ring's target spin now and then; ease toward it
          if (time >= ringNext[t]) { ringTarget[t] = randSpin(); ringNext[t] = time + 8 + Math.random() * 14; }
          const step = 0.0014 * dt;
          ringSpeed[t] += Math.max(-step, Math.min(step, ringTarget[t] - ringSpeed[t]));
          ringGroups[t].rotation.y += ringSpeed[t];
        }
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

      // ease fire/water intensity toward their on/off targets (no abrupt cut)
      const RAMP = 1.3; // seconds for a full fade in/out
      const approach = (lvl: number, on: boolean) => {
        const step = dt / RAMP;
        const target = on ? 1 : 0;
        return lvl < target ? Math.min(target, lvl + step) : Math.max(target, lvl - step);
      };
      waterLvl = approach(waterLvl, waterOn);
      fireLvl = approach(fireLvl, fireOn);

      // water jets
      jets.visible = waterLvl > 0.001;
      if (jets.visible) {
        (jets.material as THREE.PointsMaterial).opacity = 0.95 * Math.min(1, waterLvl * 1.6);
        for (let n = 0; n < COUNT; n++) {
          const d = drops[n];
          const tt = (time + d.ph) % d.life;
          const p = d.grp === 3 ? centerPressure(time) : ringPressure(time - tt, d.grp);
          if (p < 0.04) { positions[n * 3 + 1] = -9999; continue; } // off → hidden
          const pn = p > 1 ? 1 : p;
          const vy = d.up * p * waterLvl; // intensity scales arc height -> collapses smoothly
          const vo = d.out * (1 - 0.7 * pn) * waterLvl; // ...and reach, so it sinks back in
          const rad = vo * tt;
          const y = d.oy + vy * tt - 0.5 * G * tt * tt;
          if (y < poolY - 0.3) { positions[n * 3 + 1] = -9999; continue; }
          positions[n * 3] = d.ox + d.cx * rad;
          positions[n * 3 + 1] = y;
          positions[n * 3 + 2] = d.oz + d.cz * rad;
        }
        jetGeo.attributes.position.needsUpdate = true;
      }

      // fire is always present when toggled on (even with water); height
      // flickers with its own changing "pressure"
      fire.visible = fireLvl > 0.001;
      if (fire.visible) {
        (fire.material as THREE.PointsMaterial).opacity = 0.92 * Math.min(1, fireLvl * 1.5);
        const fs = fireScale(time) * fireLvl; // intensity lowers the flames to nothing
        for (let n = 0; n < FCOUNT; n++) {
          const tt = (time + fphase[n]) % flife[n];
          const f = tt / flife[n];
          firePos[n * 3] = fox[n] * (1 - 0.4 * f) + fdx[n] * tt;
          firePos[n * 3 + 1] = fireY0 + fvy[n] * fs * tt;
          firePos[n * 3 + 2] = foz[n] * (1 - 0.4 * f) + fdz[n] * tt;
          const gg = Math.max(0, 0.5 - 0.46 * f);
          const fade = f * f;
          fireCol[n * 3] = 1.0 * (1 - fade) + 0.957 * fade;
          fireCol[n * 3 + 1] = gg * (1 - fade) + 0.945 * fade;
          fireCol[n * 3 + 2] = 0.0 * (1 - fade) + 0.91 * fade;
        }
        fireGeo.attributes.position.needsUpdate = true;
        fireGeo.attributes.color.needsUpdate = true;
      }
    },
  };
}
