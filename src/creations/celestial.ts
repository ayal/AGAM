import * as THREE from "three";
import type { Noise } from "./noise";

// The sun and moon: REAL procedural spheres (not sprites), sharing the planet's
// fBm noise field — fBm-driven vertex colours (+ displacement for the moon's
// rugged limb) on actual geometry. Opaque meshes, so the planet clips them via
// the depth buffer as they set; self-spin shows the surface actually rotating;
// and a small onBeforeCompile injection adds view-dependent limb darkening — so
// features and shading both foreshorten toward the edge like a true ball.

// Inject view-dependent limb darkening into a stock material: outgoing light is
// scaled by |N·V|, darkening the grazing rim toward the silhouette.
const limbDarken = (mat: THREE.Material, k: number) => {
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace("void main() {", "varying vec3 vOrbN;\nvarying vec3 vOrbP;\nvoid main() {")
      .replace("#include <begin_vertex>",
        "#include <begin_vertex>\nvOrbN = normalize(normalMatrix * normal);\nvOrbP = (modelViewMatrix * vec4(position, 1.0)).xyz;");
    sh.fragmentShader = sh.fragmentShader
      .replace("void main() {", "varying vec3 vOrbN;\nvarying vec3 vOrbP;\nvoid main() {")
      .replace("#include <opaque_fragment>",
        `outgoingLight *= ${(1 - k).toFixed(2)} + ${k.toFixed(2)} * abs(dot(normalize(vOrbN), normalize(-vOrbP)));\n#include <opaque_fragment>`);
  };
};

// Build an orb: a sphere whose per-vertex colour (and optional radial
// displacement) comes from `paint`. `paint` fills `c` and returns the
// displacement in world units (0 = smooth sphere).
const makeOrb = (
  radius: number,
  paint: (p: THREE.Vector3, c: THREE.Color) => number,
) => {
  const geo = new THREE.SphereGeometry(radius, 64, 44);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const col = new Float32Array(pos.count * 3);
  const p = new THREE.Vector3();
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i);
    const d = paint(p, c);
    if (d) {
      const k = (radius + d) / radius;
      pos.setXYZ(i, p.x * k, p.y * k, p.z * k);
    }
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  // Basic (self-luminous) — the sun IS a light source, and the moon must
  // stay a bright full moon at night when the scene's sun-key is off
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true });
  limbDarken(mat, 0.45);
  return new THREE.Mesh(geo, mat);
};

// sun: granulation via fBm — darker granules drift orange (blue channel
// drops fastest), like real solar surface texture. A faint corona sprite is
// centred INSIDE the opaque mesh, so the sphere's front half hides the sprite's
// core and only the halo past the limb shows.
export function createSun(noise: Noise): THREE.Mesh {
  const sunDisc = makeOrb(25, (p, c) => {
    const n = noise.fbm(p.x * 0.14, p.y * 0.14, p.z * 0.14);
    const g = Math.min(1, Math.max(0.55, 0.78 + 0.5 * (n - 0.5)));
    c.setRGB(Math.pow(g, 0.4), 0.99 * Math.pow(g, 0.8), 0.84 * Math.pow(g, 1.6));
    return 0; // gas — no displacement
  });
  {
    const s = 128;
    const cv = document.createElement("canvas");
    cv.width = cv.height = s;
    const ctx = cv.getContext("2d")!;
    const cg = ctx.createRadialGradient(s / 2, s / 2, s * 0.3, s / 2, s / 2, s / 2);
    cg.addColorStop(0, "rgba(255,235,160,0.32)");
    cg.addColorStop(1, "rgba(255,235,160,0)");
    ctx.fillStyle = cg;
    ctx.fillRect(0, 0, s, s);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false,
    }));
    glow.scale.set(80, 80, 1);
    sunDisc.add(glow);
  }
  return sunDisc;
}

// moon: big fBm maria patches + fine regolith mottle, and ±0.45 radial
// displacement so even the silhouette is subtly rugged.
export function createMoon(noise: Noise): THREE.Mesh {
  return makeOrb(19, (p, c) => {
    const mar = noise.fbm(p.x * 0.045, p.y * 0.045, p.z * 0.045);
    const fine = noise.fbm(p.x * 0.3 + 40, p.y * 0.3, p.z * 0.3);
    const g = Math.min(1, Math.max(0.35,
      0.88 + 0.22 * (fine - 0.5) - 0.34 * noise.sstep(0.52, 0.72, mar)));
    c.setRGB(
      Math.min(1, 0.92 * g + 0.1),
      Math.min(1, 0.93 * g + 0.12),
      Math.min(1, 0.96 * g + 0.16), // blue-ish floor, like the old earthshine
    );
    return (fine - 0.5) * 0.9;
  });
}
