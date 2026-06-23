import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import type { Creation } from "./creation";
import { createAgamograph } from "./creations/agamograph";
import { createFountain, rollFountainModes, type FountainModes } from "./creations/fountain";
import { newScheme } from "./palette";

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

// disable double-click / double-tap to zoom
renderer.domElement.addEventListener("dblclick", (e) => e.preventDefault());

// ---------------------------------------------------------------------------
// UI helpers
// ---------------------------------------------------------------------------
const BTN = "border:none;background:none;cursor:pointer;padding:0;font:13px sans-serif;letter-spacing:.02em;";
// ?thumb → a clean capture mode for the share thumbnail (no UI, no spin, a
// colourful crisp render, zoomed in).
const THUMB = new URLSearchParams(location.search).has("thumb");
const bar = document.createElement("div");
bar.style.cssText = "position:fixed;top:14px;left:16px;z-index:9999;display:flex;gap:16px;align-items:center;";
if (!THUMB) document.body.appendChild(bar);

function styleBtn(b: HTMLButtonElement, on: boolean) {
  // colors chosen to read on both the cream (surface) and gray (fountain) bg
  b.style.cssText = BTN + `color:${on ? "#111" : "#5f6266"};font-weight:${on ? "700" : "400"};`;
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
let currentName = "";
let autoRotate = true;
let spinBtn: (HTMLButtonElement & { setOn?: (v: boolean) => void }) | null = null;
let fountainModes: FountainModes = THUMB ? { crisp: true } : rollFountainModes(); // kept on recolor, re-rolled on full render

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
  for (const sel of ["surface", "fountain"]) {
    const b = document.createElement("button");
    b.textContent = sel;
    styleBtn(b, sel === name);
    // clicking the current creation re-rolls patterns+colors but keeps the modes
    // & camera (soft); clicking the other one switches (full render).
    b.onclick = () => setCreation(sel, sel === currentName);
    bar.appendChild(b);
  }
  // refresh = a full new render (new modes, colors, patterns, reset camera)
  const refresh = document.createElement("button");
  refresh.textContent = "↻";
  styleBtn(refresh, false);
  refresh.style.fontSize = "17px"; // glyph reads small; bump it to match the labels
  refresh.style.lineHeight = "1";
  refresh.title = "new render";
  refresh.onclick = () => setCreation(name, false);
  bar.appendChild(refresh);
  if (current?.toggles) {
    const sep = document.createElement("span");
    sep.textContent = "·";
    sep.style.cssText = "color:#8b8e91;";
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

// soft = re-roll patterns + colors but keep the modes and camera (a re-click on
// the current creation). Otherwise it's a full render: new modes + reset camera.
function setCreation(name: string, soft = false) {
  if (current) {
    scene.remove(current.group);
    current.dispose?.();
    disposeGroup(current.group);
  }
  if (!soft && !THUMB) fountainModes = rollFountainModes(); // new modes only on a full render
  newScheme(); // colors always change
  current = name === "surface" ? createAgamograph() : createFountain(fountainModes, THUMB);
  renderer.setClearColor(new THREE.Color(current.background ?? 0xf4f1e8));
  scene.add(current.group);
  if (!soft) {
    // full render: reset the camera/orbit to the creation's default view
    autoRotate = !THUMB;
    camera.up.set(0, 1, 0);
    camera.position.set(...current.camera);
    if (THUMB) camera.position.multiplyScalar(0.62); // zoom in for the thumbnail
    controls.target.set(0, 0, 0);
    controls.update();
  }
  currentName = name;
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
  current?.update?.(clock.getElapsedTime(), autoRotate, { renderer, scene });
  renderer.render(scene, camera);
  controls.update();
};
animate();
