import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import type { Creation } from "./creation";
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

// TrackballControls: free tumble (no pole "stuck" point); 1 finger rotates,
// two fingers zoom/pan.
const controls = new TrackballControls(camera, renderer.domElement);
controls.dynamicDampingFactor = 0.12;
controls.rotateSpeed = 2.2;

// ---------------------------------------------------------------------------
// UI helpers
// ---------------------------------------------------------------------------
const BTN = "border:none;background:none;cursor:pointer;padding:0;font:13px sans-serif;letter-spacing:.02em;";
const bar = document.createElement("div");
bar.style.cssText = "position:fixed;top:14px;left:16px;z-index:9999;display:flex;gap:16px;align-items:center;";
document.body.appendChild(bar);

function styleBtn(b: HTMLButtonElement, on: boolean) {
  b.style.cssText = BTN + `color:${on ? "#111" : "#b3aea2"};font-weight:${on ? "600" : "400"};`;
}
function makeToggle(label: string, initial: boolean, onChange: (on: boolean) => void) {
  const b = document.createElement("button");
  let on = initial;
  b.textContent = label;
  styleBtn(b, on);
  b.onclick = () => { on = !on; styleBtn(b, on); onChange(on); };
  (b as any).setOn = (v: boolean) => { on = v; styleBtn(b, on); };
  return b;
}

// ---------------------------------------------------------------------------
// Creation management — in-place switching (a fresh page load always starts on
// the fountain; the buttons swap without reloading).
// ---------------------------------------------------------------------------
let current: Creation | null = null;
let autoRotate = true;
let spinBtn: (HTMLButtonElement & { setOn?: (v: boolean) => void }) | null = null;

function disposeGroup(group: THREE.Group) {
  group.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const mats = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
    for (const m of mats) {
      (m as THREE.MeshBasicMaterial).map?.dispose?.();
      m.dispose();
    }
  });
}

function setSpin(on: boolean) {
  autoRotate = on;
  spinBtn?.setOn?.(on);
}

function buildUI(name: string) {
  bar.replaceChildren();
  for (const sel of ["agamograph", "fountain"]) {
    const b = document.createElement("button");
    b.textContent = sel;
    styleBtn(b, sel === name);
    b.onclick = () => setCreation(sel);
    bar.appendChild(b);
  }
  if (current?.toggles) {
    const sep = document.createElement("span");
    sep.textContent = "·";
    sep.style.cssText = "color:#cfcabd;";
    bar.appendChild(sep);
    spinBtn = makeToggle("spin", autoRotate, setSpin);
    bar.appendChild(spinBtn);
    for (const tg of current.toggles) {
      tg.set(tg.initial);
      bar.appendChild(makeToggle(tg.label, tg.initial, tg.set));
    }
  } else {
    spinBtn = null;
  }
}

function setCreation(name: string) {
  if (current) {
    scene.remove(current.group);
    current.dispose?.();
    disposeGroup(current.group);
  }
  autoRotate = true;
  current = name === "agamograph" ? createAgamograph() : createFountain();
  scene.add(current.group);
  camera.up.set(0, 1, 0); // reset any roll so one piece's orbit doesn't carry over
  camera.position.set(...current.camera);
  controls.target.set(0, 0, 0);
  controls.update();
  buildUI(name);
}

// fresh load always starts on the fountain
setCreation("fountain");

// ---------------------------------------------------------------------------
// Render loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
const animate = () => {
  requestAnimationFrame(animate);
  current?.update?.(clock.getElapsedTime(), autoRotate);
  renderer.render(scene, camera);
  controls.update();
};
animate();
