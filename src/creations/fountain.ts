import * as THREE from "three";
import { randInt } from "../palette";
import { makeStripTexture } from "../patterns";
import type { Creation } from "../creation";

// Agam's Fire & Water Fountain (Dizengoff Square): five stacked rings, profile
// bulging with a big, tall middle ring. Each ring is a ZIGZAG accordion of
// panels (alternating outward ridges / inward valleys) — the agamograph fold
// wrapped into a cylinder, so a different image resolves from each side. The
// structure cylinders read as blue water; only the ribs carry color.
export function createFountain(): Creation {
  const group = new THREE.Group();

  // bottom -> top: the middle ring is widest and tallest
  const RADII = [7, 12, 16, 10.5, 6.5];
  const HEIGHTS = [3, 3.6, 6.5, 4, 3];
  const TIERS = RADII.length;
  const gap = 0.3;
  const totalH = HEIGHTS.reduce((a, b) => a + b, 0) + gap * (TIERS - 1);

  const amp = 0.9; // pleat depth (zigzag amplitude)
  const pleatW = 1.9; // angular width of one pleat
  const monoTier = randInt(TIERS);
  const WATER = 0x2a6fb0;
  const maxR = Math.max(...RADII);

  // blue water: central column (top pokes out at the center) + base pool
  group.add(
    new THREE.Mesh(
      new THREE.CylinderGeometry(3.5, 3.5, totalH + 2, 32),
      new THREE.MeshBasicMaterial({ color: WATER }),
    ),
  );
  const pool = new THREE.Mesh(
    new THREE.CircleGeometry(maxR + amp + 6, 64),
    new THREE.MeshBasicMaterial({ color: WATER, side: THREE.DoubleSide }),
  );
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = -totalH / 2 - 0.5;
  group.add(pool);

  let yCursor = -totalH / 2;
  for (let t = 0; t < TIERS; t++) {
    const R = RADII[t];
    const h = HEIGHTS[t];
    const y = yCursor + h / 2;
    yCursor += h + gap;

    const mono = t === monoTier;
    const Rout = R + amp;
    const Rin = R - amp;
    const P = Math.max(16, Math.round((2 * Math.PI * R) / pleatW)); // pleats
    const N = 2 * P; // panels (two per pleat)
    const rows = Math.max(5, Math.round(h * 1.4)); // vertical cells scale with height

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

    // blue water drum (closed) behind the ribs — top & bottom read as water
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

  return {
    name: "Fountain",
    group,
    camera: [36, 10, 36],
  };
}
