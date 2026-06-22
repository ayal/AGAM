/// <reference types="vite/client" />
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { CREAM, pick } from "./palette";
import { GRID, makeFaceTexture } from "./patterns";

// ---------------------------------------------------------------------------
// Scene / renderer
// ---------------------------------------------------------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(new THREE.Color(0xf4f1e8)); // gallery-wall cream
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ---------------------------------------------------------------------------
// Per-face textures. BoxGeometry material order: [+x, -x, +y, -y, +z, -z].
// +z/-z stay cream (the gaps between slats).
//  - the heart lives on a +x/-x side face (reveals head-on, upright)
//  - the circle on the OTHER side face
//  - exactly ONE side per render is pure black & white
// ---------------------------------------------------------------------------
const heartFace = pick([0, 1]);
const circleFace = heartFace === 0 ? 1 : 0;
const monoFace = pick([0, 1, 2, 3]);
const faceMats: THREE.MeshBasicMaterial[] = [];
for (let k = 0; k < 4; k++) {
  faceMats[k] = new THREE.MeshBasicMaterial({
    map: makeFaceTexture(k === heartFace, k === monoFace, k === circleFace),
  });
}
const creamMat = new THREE.MeshBasicMaterial({ color: CREAM });

// ---------------------------------------------------------------------------
// Debug (local dev only): download all four side compositions as one flat image.
// ---------------------------------------------------------------------------
if (import.meta.env.DEV) {
  const btn = document.createElement("button");
  btn.textContent = "⬇ download sides";
  btn.style.cssText =
    "position:fixed;top:12px;left:12px;z-index:9999;padding:8px 12px;" +
    "font:14px sans-serif;border:1px solid #333;background:#fff;" +
    "cursor:pointer;border-radius:6px";
  document.body.appendChild(btn);
  btn.onclick = () => {
    const S = 300;
    const pad = 16;
    const labelH = 26;
    const out = document.createElement("canvas");
    out.width = 4 * S + 5 * pad;
    out.height = S + labelH + 2 * pad;
    const o = out.getContext("2d")!;
    o.fillStyle = "#ffffff";
    o.fillRect(0, 0, out.width, out.height);
    o.fillStyle = "#000";
    o.font = "13px sans-serif";
    const names = ["face0 +x", "face1 -x", "face2 +y", "face3 -y"];
    for (let k = 0; k < 4; k++) {
      const img = (faceMats[k].map as THREE.CanvasTexture).image as HTMLCanvasElement;
      const x = pad + k * (S + pad);
      const y = labelH + pad;
      o.drawImage(img, x, y, S, S);
      o.strokeStyle = "#999";
      o.strokeRect(x, y, S, S);
      let tag = names[k];
      if (k === heartFace) tag += " · HEART";
      if (k === circleFace) tag += " · CIRCLE";
      o.fillText(tag, x, labelH - 8);
    }
    const a = document.createElement("a");
    a.download = "agam-sides.png";
    a.href = out.toDataURL("image/png");
    a.click();
  };
}

// ---------------------------------------------------------------------------
// Raycaster (click handler kept for future interaction)
// ---------------------------------------------------------------------------
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
function onMouseClick(event: MouseEvent) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  raycaster.intersectObjects(scene.children);
}
renderer.domElement.addEventListener("click", onMouseClick);

// ---------------------------------------------------------------------------
// Build the offset cube field. Each cube samples its own cell of each face
// texture via custom UVs. Each BoxGeometry face orients its (u,v) along
// different world axes, so the per-cube sub-rectangle is assigned per face for
// the texture to tile continuously (otherwise curves shear into spikes).
// ---------------------------------------------------------------------------
for (let i = -10; i < 10; i++) {
  for (let j = -10; j < 10; j++) {
    const geo = new THREE.BoxGeometry();
    const uv = geo.attributes.uv as THREE.BufferAttribute;
    const gi = i + 10;
    const gj = j + 10;
    const a = gj / GRID;
    const b = (gj + 1) / GRID;
    const c = gi / GRID;
    const d = (gi + 1) / GRID;
    // +x face (k=0): u runs along -z, v along +y
    uv.setXY(0, b, d); uv.setXY(1, a, d); uv.setXY(2, b, c); uv.setXY(3, a, c);
    // -x face (k=1): u runs along +z, v along +y
    uv.setXY(4, a, d); uv.setXY(5, b, d); uv.setXY(6, a, c); uv.setXY(7, b, c);
    // +y face (k=2): u along +x (gi), v along +z (gj)
    uv.setXY(8, c, a); uv.setXY(9, d, a); uv.setXY(10, c, b); uv.setXY(11, d, b);
    // -y face (k=3): u along +x (gi), v along -z (gj)
    uv.setXY(12, c, b); uv.setXY(13, d, b); uv.setXY(14, c, a); uv.setXY(15, d, a);
    uv.needsUpdate = true;
    const cube = new THREE.Mesh(geo, [
      faceMats[0],
      faceMats[1],
      faceMats[2],
      faceMats[3],
      creamMat,
      creamMat,
    ]);
    (cube as any).data = { i, j };
    cube.position.set(i, i + 1, j + 0.5); // offset grid — this hides/reveals the images
    scene.add(cube);
  }
}

// ---------------------------------------------------------------------------
// Camera + controls + render loop
// ---------------------------------------------------------------------------
camera.position.y = 30; // original vertical orientation
camera.position.x = -30;

const controls = new TrackballControls(camera, renderer.domElement);
controls.dynamicDampingFactor = 0.1;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
};

animate();
