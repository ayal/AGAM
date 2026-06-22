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
  const WATER = 0x2a6fb0;
  const maxR = Math.max(...RADII);

  // tier center heights (cumulative from the bottom)
  const tierY: number[] = [];
  let yc = -totalH / 2;
  for (let t = 0; t < TIERS; t++) {
    tierY[t] = yc + HEIGHTS[t] / 2;
    yc += HEIGHTS[t] + gap;
  }
  const poolY = -totalH / 2 - 0.5;

  // ---- blue water: central column + animated pool ----
  group.add(
    new THREE.Mesh(
      new THREE.CylinderGeometry(3.5, 3.5, totalH + 2, 32),
      new THREE.MeshBasicMaterial({ color: WATER }),
    ),
  );

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
        vec2 p = (vUv - 0.5) * 28.0;
        float r = length(p);
        float ripple = sin(r * 1.4 - uTime * 2.2) * 0.5 + 0.5;
        float waves  = sin(p.x * 0.7 + uTime * 1.3) * sin(p.y * 0.7 - uTime * 1.1);
        float m = clamp(ripple * 0.5 + waves * 0.25 + 0.3, 0.0, 1.0);
        vec3 deep  = vec3(0.10, 0.34, 0.60);
        vec3 light = vec3(0.34, 0.66, 0.88);
        gl_FragColor = vec4(mix(deep, light, m), 1.0);
      }
    `,
  });
  const pool = new THREE.Mesh(new THREE.CircleGeometry(maxR + amp + 6, 96), waterMat);
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = poolY;
  group.add(pool);

  // ---- rings ----
  for (let t = 0; t < TIERS; t++) {
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
      new THREE.MeshBasicMaterial({ color: WATER }),
    );
    drum.position.set(0, y, 0);
    group.add(drum);

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
      group.add(panel);
    }
  }

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

  return {
    name: "Fountain",
    group,
    camera: [36, 10, 36],
    update: (time: number) => {
      waterUniforms.uTime.value = time;
      for (let n = 0; n < COUNT; n++) {
        const tt = (time + phase[n]) % LIFE;
        positions[n * 3] = ox[n] + vx[n] * tt;
        positions[n * 3 + 1] = oy[n] + vy[n] * tt - 0.5 * G * tt * tt;
        positions[n * 3 + 2] = oz[n] + vz[n] * tt;
      }
      jetGeo.attributes.position.needsUpdate = true;
    },
  };
}
