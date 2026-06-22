import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { createAgamograph } from "./creations/agamograph";
import { createFountain } from "./creations/fountain";

// ---------------------------------------------------------------------------
// Shared scene / renderer / camera / controls
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

const controls = new TrackballControls(camera, renderer.domElement);
controls.dynamicDampingFactor = 0.1;

// ---------------------------------------------------------------------------
// Which creation to show is remembered in localStorage. The two name buttons
// pick one explicitly; refresh switches to the other. Every load re-randomizes.
// ---------------------------------------------------------------------------
const KEY = "agam:show";
const which = localStorage.getItem(KEY) === "agamograph" ? "agamograph" : "fountain";
const creation = which === "agamograph" ? createAgamograph() : createFountain();
scene.add(creation.group);
camera.position.set(...creation.camera);
controls.target.set(0, 0, 0);
controls.update();

const go = (target: string) => {
  localStorage.setItem(KEY, target);
  location.reload();
};

// selector buttons (top-left): agamograph | fountain — active one is bold/dark
const bar = document.createElement("div");
bar.style.cssText =
  "position:fixed;top:14px;left:16px;z-index:9999;font:13px sans-serif;display:flex;gap:16px;";
for (const name of ["agamograph", "fountain"]) {
  const b = document.createElement("button");
  b.textContent = name;
  const active = name === which;
  b.style.cssText =
    "border:none;background:none;cursor:pointer;padding:0;letter-spacing:.02em;" +
    `color:${active ? "#111" : "#b3aea2"};font-weight:${active ? "600" : "400"};`;
  b.onclick = () => go(name);
  bar.appendChild(b);
}
document.body.appendChild(bar);


// ---------------------------------------------------------------------------
// Gentle idle auto-rotation; the first time you grab it, it stops and it's yours.
// ---------------------------------------------------------------------------
let autoRotate = true;
const stopAuto = () => (autoRotate = false);
renderer.domElement.addEventListener("pointerdown", stopAuto, { once: true });
renderer.domElement.addEventListener("touchstart", stopAuto, { once: true, passive: true });

// ---------------------------------------------------------------------------
// Render loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
const animate = () => {
  requestAnimationFrame(animate);
  creation.update?.(clock.getElapsedTime(), autoRotate);
  renderer.render(scene, camera);
  controls.update();
};
animate();
