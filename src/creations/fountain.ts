import * as THREE from "three";
import { makeStrip } from "../patterns";
import { createMusic } from "../music";
import type { Creation } from "../creation";

// Agam's Fire & Water Fountain (Dizengoff Square): five stacked rings, profile
// bulging with a big, tall middle ring. Each ring is a ZIGZAG accordion of
// panels (the agamograph fold wrapped into a cylinder), so a different image
// resolves from each side. Structure cylinders read as blue water (animated
// ripple shader for the pool), and arcing water jets squirt from the middle ring.
export function createFountain(): Creation {
  const group = new THREE.Group();

  const RADII = [7, 12, 16, 10.5, 6.5];
  const HEIGHTS = [3, 3.6, 6.5, 4, 3];
  const TIERS = RADII.length;
  const gap = 0.3;
  const totalH = HEIGHTS.reduce((a, b) => a + b, 0) + gap * (TIERS - 1);
  const amp = 0.9;
  const pleatW = 1.9;
  // Sometimes the WHOLE fountain is black & white (never just one ring). On a
  // B&W render the cream wall would swallow the whites, so we switch to a mid
  // gray background that keeps both black and white legible.
  const monoRender = Math.random() < 0.25;
  const background = monoRender ? 0x73767b : undefined;
  const maxR = Math.max(...RADII);

  // tier center heights (cumulative from the bottom)
  const tierY: number[] = [];
  let yc = -totalH / 2;
  for (let t = 0; t < TIERS; t++) {
    tierY[t] = yc + HEIGHTS[t] / 2;
    yc += HEIGHTS[t] + gap;
  }
  const poolY = -totalH / 2 - 0.5;

  // ---- animated water: ONE shared material for the pool AND every cylinder ----
  const waterUniforms = { uTime: { value: 0 } };
  const waterMat = new THREE.ShaderMaterial({
    uniforms: waterUniforms,
    side: THREE.DoubleSide,
    vertexShader: `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
    `,
    fragmentShader: `
      uniform float uTime; varying vec2 vUv;
      void main(){
        // layered scrolling waves — reads as rippling water on a disc or a cylinder
        float a = sin(vUv.x * 16.0 + uTime * 1.6) * 0.5 + 0.5;
        float b = sin(vUv.y * 20.0 - uTime * 1.2 + vUv.x * 8.0) * 0.5 + 0.5;
        float c = sin((vUv.x - vUv.y) * 12.0 + uTime * 0.9) * 0.5 + 0.5;
        float m = clamp(0.25 + 0.45 * a * b + 0.2 * c, 0.0, 1.0);
        vec3 deep  = vec3(0.10, 0.34, 0.60);
        vec3 light = vec3(0.36, 0.68, 0.90);
        gl_FragColor = vec4(mix(deep, light, m), 1.0);
      }
    `,
  });

  // central water column — top flush with the top ring's top (the water level),
  // bottom down into the pool (so no extra cylinder pokes out the top)
  const colTop = totalH / 2; // == top ring's cap top
  const colH = colTop - poolY;
  const column = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, colH, 32), waterMat);
  column.position.y = (colTop + poolY) / 2;
  group.add(column);

  const pool = new THREE.Mesh(new THREE.CircleGeometry(maxR + amp + 6, 96), waterMat);
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = poolY;
  group.add(pool);

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
    const P = Math.max(16, Math.round((2 * Math.PI * R) / pleatW));
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
      waterMat,
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
  const ringSpeeds = ringGroups.map((_, t) => (t % 2 === 0 ? 1 : -1) * (0.0007 + 0.00025 * t));

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
    for (let e = 0; e < nEmit; e++) {
      const th = (e / nEmit) * Math.PI * 2;
      const cx = Math.cos(th), cz = Math.sin(th);
      for (let k = 0; k < 6; k++) {
        const life = 1.5 + Math.random() * 0.3;
        drops.push({ ox: R * cx, oy: topY, oz: R * cz, cx, cz, ph: (k / 6) * life + Math.random() * 0.1, life, up: 7 + Math.random() * 2, out: 4 + Math.random() * 1.5, grp: g });
      }
    }
  });
  // center jet on the topmost ring (group 3): tall, near-vertical
  const topY4 = tierY[TIERS - 1] + HEIGHTS[TIERS - 1] / 2;
  for (let k = 0; k < 140; k++) {
    const az = Math.random() * Math.PI * 2;
    const life = 2.0 + Math.random() * 0.6;
    drops.push({ ox: 0, oy: topY4, oz: 0, cx: Math.cos(az), cz: Math.sin(az), ph: Math.random() * life, life, up: 20 + Math.random() * 3, out: 1.4 + Math.random() * 1.4, grp: 3 });
  }
  const COUNT = drops.length;
  const positions = new Float32Array(COUNT * 3);
  const jetGeo = new THREE.BufferGeometry();
  jetGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const jets = new THREE.Points(
    jetGeo,
    new THREE.PointsMaterial({ color: 0x3f9ad6, size: 0.55, transparent: true, opacity: 0.95, depthWrite: false }),
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
  const music = createMusic();

  return {
    name: "Fountain",
    group,
    background,
    camera: [72, 20, 72], // start zoomed out (~0.5x)
    toggles: [
      { label: "fire", initial: true, set: (on) => { fireOn = on; } },
      { label: "water", initial: true, set: (on) => { waterOn = on; } },
      { label: "music", initial: false, set: (on) => (on ? music.start() : music.stop()) },
    ],
    dispose: () => music.stop(),
    update: (time: number, autoRotate: boolean) => {
      if (autoRotate) {
        group.rotation.y += 0.0001;
        for (let t = 0; t < ringGroups.length; t++) ringGroups[t].rotation.y += ringSpeeds[t];
      }

      // water jets
      jets.visible = waterOn;
      if (waterOn) {
        waterUniforms.uTime.value = time;
        for (let n = 0; n < COUNT; n++) {
          const d = drops[n];
          const tt = (time + d.ph) % d.life;
          const p = d.grp === 3 ? centerPressure(time) : ringPressure(time - tt, d.grp);
          if (p < 0.04) { positions[n * 3 + 1] = -9999; continue; } // off → hidden
          const pn = p > 1 ? 1 : p;
          const vy = d.up * p; // more pressure -> higher
          const vo = d.out * (1 - 0.7 * pn); // more pressure -> narrower (less outward)
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
      fire.visible = fireOn;
      if (fireOn) {
        const fs = fireScale(time);
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
