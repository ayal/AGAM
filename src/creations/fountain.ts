import * as THREE from "three";
import { randInt } from "../palette";
import { makeStripTexture } from "../patterns";
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
  const monoTier = randInt(TIERS);
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

  // central column + base pool
  group.add(new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, totalH + 2, 32), waterMat));
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
    const mono = t === monoTier;
    const Rout = R + amp;
    const Rin = R - amp;
    const P = Math.max(16, Math.round((2 * Math.PI * R) / pleatW));
    const N = 2 * P;
    const rows = Math.max(5, Math.round(h * 1.4));

    const matA = new THREE.MeshBasicMaterial({
      map: makeStripTexture(P, rows, mono, Math.random() < 0.6),
      side: THREE.DoubleSide,
    });
    const matB = new THREE.MeshBasicMaterial({
      map: makeStripTexture(P, rows, mono, Math.random() < 0.6),
      side: THREE.DoubleSide,
    });

    const vert = (k: number) => {
      const ang = (k * Math.PI) / P;
      const r = k % 2 === 0 ? Rout : Rin;
      return new THREE.Vector3(r * Math.cos(ang), y, r * Math.sin(ang));
    };

    const drum = new THREE.Mesh(
      new THREE.CylinderGeometry(Rin - 0.05, Rin - 0.05, h + 0.5, Math.max(32, P)),
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
    group.add(ring);
    ringGroups.push(ring);
  }
  // per-ring spin speeds: alternating directions, varied magnitude (gentle)
  const ringSpeeds = ringGroups.map((_, t) => (t % 2 === 0 ? 1 : -1) * (0.0014 + 0.0006 * t));

  // ---- arcing water jets from the (big) middle ring ----
  const midR = RADII[2] + amp;
  const midTopY = tierY[2] + HEIGHTS[2] / 2;
  const JETS = 30;
  const PER = 10; // droplets per jet stream
  const G = 22; // gravity
  const LIFE = 1.7; // seconds for a droplet to arc back down to the pool
  const COUNT = JETS * PER;
  const ox = new Float32Array(COUNT), oy = new Float32Array(COUNT), oz = new Float32Array(COUNT);
  const vx = new Float32Array(COUNT), vy = new Float32Array(COUNT), vz = new Float32Array(COUNT);
  const phase = new Float32Array(COUNT);
  const positions = new Float32Array(COUNT * 3);
  let i = 0;
  for (let j = 0; j < JETS; j++) {
    const th = (j / JETS) * Math.PI * 2;
    const dirx = Math.cos(th);
    const dirz = Math.sin(th);
    for (let k = 0; k < PER; k++) {
      ox[i] = midR * dirx; oy[i] = midTopY; oz[i] = midR * dirz;
      const up = 9 + Math.random() * 2;
      const out = 3.5 + Math.random() * 1.5;
      vx[i] = dirx * out; vy[i] = up; vz[i] = dirz * out;
      phase[i] = (k / PER) * LIFE + Math.random() * 0.08;
      i++;
    }
  }
  const jetGeo = new THREE.BufferGeometry();
  jetGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const jets = new THREE.Points(
    jetGeo,
    new THREE.PointsMaterial({ color: 0xcdeeff, size: 0.42, transparent: true, opacity: 0.9, depthWrite: false }),
  );
  group.add(jets);

  // ---- fire at the top (the "Fire" of Fire & Water) ----
  const FCOUNT = 240;
  const fox = new Float32Array(FCOUNT), foz = new Float32Array(FCOUNT);
  const fvy = new Float32Array(FCOUNT), fdx = new Float32Array(FCOUNT), fdz = new Float32Array(FCOUNT);
  const flife = new Float32Array(FCOUNT), fphase = new Float32Array(FCOUNT);
  const firePos = new Float32Array(FCOUNT * 3);
  const fireCol = new Float32Array(FCOUNT * 3);
  const fireY0 = totalH / 2 + 0.4;
  for (let n = 0; n < FCOUNT; n++) {
    const a = Math.random() * Math.PI * 2;
    const rr = Math.random() * 2.2;
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
      // normal blending (additive blows out to white over the cream background)
      size: 1.7, vertexColors: true, transparent: true, opacity: 0.92,
      depthWrite: false, sizeAttenuation: true,
    }),
  );
  group.add(fire);

  return {
    name: "Fountain",
    group,
    camera: [36, 10, 36],
    update: (time: number, autoRotate: boolean) => {
      waterUniforms.uTime.value = time;
      // idle: the whole fountain drifts and each ring spins on its own
      if (autoRotate) {
        group.rotation.y += 0.0002;
        for (let t = 0; t < ringGroups.length; t++) ringGroups[t].rotation.y += ringSpeeds[t];
      }
      // arcing water jets
      for (let n = 0; n < COUNT; n++) {
        const tt = (time + phase[n]) % LIFE;
        positions[n * 3] = ox[n] + vx[n] * tt;
        positions[n * 3 + 1] = oy[n] + vy[n] * tt - 0.5 * G * tt * tt;
        positions[n * 3 + 2] = oz[n] + vz[n] * tt;
      }
      jetGeo.attributes.position.needsUpdate = true;
      // rising, flickering fire — tapers inward and fades yellow -> red
      for (let n = 0; n < FCOUNT; n++) {
        const tt = (time + fphase[n]) % flife[n];
        const f = tt / flife[n];
        firePos[n * 3] = fox[n] * (1 - 0.4 * f) + fdx[n] * tt;
        firePos[n * 3 + 1] = fireY0 + fvy[n] * tt;
        firePos[n * 3 + 2] = foz[n] * (1 - 0.4 * f) + fdz[n] * tt;
        // fiery ramp: orange at the base -> red as it rises, then fades into
        // the cream background near the top (normal blending over a light bg).
        const gg = Math.max(0, 0.5 - 0.46 * f); // orange -> red
        const fade = f * f; // stays colored, fades out near the top
        fireCol[n * 3] = 1.0 * (1 - fade) + 0.957 * fade;
        fireCol[n * 3 + 1] = gg * (1 - fade) + 0.945 * fade;
        fireCol[n * 3 + 2] = 0.0 * (1 - fade) + 0.91 * fade;
      }
      fireGeo.attributes.position.needsUpdate = true;
      fireGeo.attributes.color.needsUpdate = true;
    },
  };
}
