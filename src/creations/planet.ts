import * as THREE from "three";
import type { Noise } from "./noise";

// The little planet the fountain stands on. Minimal take on
// dgreenheck/threejs-procedural-planets: 4-octave value-noise fBm (shared with
// the sun/moon orbs) displaces the sphere's vertices and drives an elevation
// colour ramp baked into VERTEX COLOURS. Everything is computed once at build
// time on the CPU — no custom shader — so the Lambert sun/moon lighting, OLED
// dithering and the depth-buffer occlusion of the sun/moon all keep working.

// `radius` is large enough to look like ground up close yet reveal curvature on
// wide glide shots; `poolY` is the fountain's waterline. The sphere top is set
// 0.6 BELOW the waterline so the flat pool floats just above the ground
// everywhere (no z-fighting at the pole) and the basin rim covers the widening
// gap toward the edge (~1.4 at the rim radius).
export function createPlanet(noise: Noise, radius: number, poolY: number): THREE.Mesh {
  const planetMat = new THREE.MeshLambertMaterial({
    color: 0xffffff, // real colour lives in the vertex colours
    vertexColors: true,
    polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1,
    // one huge smoothly-lit surface — without dithering its day/night shading
    // bands visibly on OLED screens
    dithering: true,
  });
  // high tessellation: the far "planet shot" puts the whole silhouette on
  // screen, and at 72 segments the limb visibly faceted (~5° per edge).
  // (Also the terrain resolution: ~2° per edge ≈ 11-unit features.)
  const planetGeo = new THREE.SphereGeometry(radius, 160, 112);
  const pos = planetGeo.attributes.position as THREE.BufferAttribute;
  const col = new Float32Array(pos.count * 3);
  // warm rock ramp (no grass — tried it, looked wrong here), staying in the
  // fountain's concrete family so the plaza blends seamlessly into terrain
  const LOW = new THREE.Color(0x6b655a);   // basalt lowlands
  const MID = new THREE.Color(0x8a8580);   // the old concrete gray
  const HIGH = new THREE.Color(0xa89f8f);  // pale weathered highlands
  const PLAZA = new THREE.Color(0x8a8580); // flat ground under the fountain
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const n = noise.fbm(x * 0.011, y * 0.011, z * 0.011); // feature size ~90 units
    // the fountain + basin sit at the +y pole: flatten a plaza there and
    // let the terrain grow in from ~40 to ~120 units along the surface
    const surfDist = radius * Math.acos(Math.min(1, Math.max(-1, y / radius)));
    const wild = noise.sstep(40, 120, surfDist);
    const disp = (n - 0.5) * 22 * wild; // ±11 max — ~3.5% silhouette roughness
    const k = (radius + disp) / radius;
    pos.setXYZ(i, x * k, y * k, z * k);
    // elevation ramp, eased back to plaza concrete near the fountain
    if (n < 0.5) c.lerpColors(LOW, MID, n * 2);
    else c.lerpColors(MID, HIGH, (n - 0.5) * 2);
    c.lerp(PLAZA, 1 - wild);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  planetGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  planetGeo.computeVertexNormals();
  const planetMesh = new THREE.Mesh(planetGeo, planetMat);
  planetMesh.position.y = poolY - radius - 0.6;
  return planetMesh;
}
