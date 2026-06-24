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

// ?auto → unattended kiosk mode for a big screen: no UI, locked input, the
// camera glides on its own, and the render re-rolls itself over time. (See the
// "Auto / kiosk mode" section below.)
const AUTO = new URLSearchParams(location.search).has("auto");

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(new THREE.Color(0xf4f1e8)); // gallery-wall cream
// In kiosk mode cap the pixel ratio: a huge hi-DPI screen + the per-frame
// cube-map pool capture is the most likely thing to cook the GPU over a
// multi-day run.
renderer.setPixelRatio(AUTO ? Math.min(window.devicePixelRatio, 1.75) : window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

if (!AUTO) {
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// TrackballControls: free tumble (no pole "stuck" point); 1 finger rotates,
// two fingers zoom/pan.
const controls = new TrackballControls(camera, renderer.domElement);
controls.dynamicDampingFactor = 0.12;
controls.rotateSpeed = 2.2;
controls.enabled = !AUTO; // kiosk mode is a locked display — ignore all input

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
if (!THUMB && !AUTO) document.body.appendChild(bar);

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
let autoTick: ((t: number) => void) | null = null; // kiosk per-frame driver (?auto)
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
// keepCamera = a full render (new modes) that does NOT snap the camera — used by
// kiosk mode so a mode change never interrupts the camera's glide.
function setCreation(name: string, soft = false, keepCamera = false) {
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
  if (!soft && !keepCamera) {
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
// Auto / kiosk mode (?auto): an unattended big-screen attract loop.
//   • the camera glides between random-but-bounded viewpoints (smooth eased
//     legs, with the occasional slow push-in so a composition resolves), so it
//     never goes out of bounds and never reads as a steady screensaver spin;
//   • the render re-rolls itself — frequent recolours, rarer full mode changes
//     — each hidden behind a short cross-fade so the rebuild never "pops";
//   • input is locked and the run is hardened for multi-day uptime.
// ---------------------------------------------------------------------------
const rand = (a: number, b: number) => a + Math.random() * (b - a);
const lerpN = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t); // ease in/out

if (AUTO) {
  // ---- presentation frame -------------------------------------------------
  // Compose for the 4640×1760 screen with a thin gallery-line border and a
  // title. Letterboxed so it looks identical on any monitor; on the real
  // screen it fills edge to edge.
  const TARGET_ASPECT = 4640 / 1760;
  const surround = document.createElement("div");
  surround.style.cssText =
    "position:fixed;inset:0;background:#101012;display:flex;" +
    "align-items:center;justify-content:center;z-index:1;";
  const frame = document.createElement("div");
  frame.style.cssText =
    "position:relative;overflow:hidden;background:#ccced0;" +
    "outline:2px solid #2b2b29;outline-offset:-2px;"; // outer gallery line
  renderer.domElement.style.cssText = "display:block;width:100%;height:100%;";
  frame.appendChild(renderer.domElement); // move the canvas inside the frame
  const innerLine = document.createElement("div"); // the second (inner) line
  innerLine.style.cssText =
    "position:absolute;inset:14px;border:1px solid #2b2b29;" +
    "pointer-events:none;z-index:3;";
  frame.appendChild(innerLine);
  const title = document.createElement("div");
  title.style.cssText =
    "position:absolute;top:3.4%;left:0;right:0;text-align:center;" +
    "pointer-events:none;z-index:3;text-transform:uppercase;letter-spacing:.3em;" +
    "font-family:'Helvetica Neue',Arial,sans-serif;color:#2b2b29;" +
    "text-shadow:0 1px 2px rgba(255,255,255,.25);";
  title.innerHTML =
    '<span style="font-weight:600">Agam</span>' +
    '<span style="opacity:.45;margin:0 .55em">&mdash;</span>' +
    '<span style="font-weight:300">Fire &amp; Water</span>';
  frame.appendChild(title);
  surround.appendChild(frame);
  document.body.appendChild(surround);

  camera.fov = 52; // a tighter vertical FOV fills the short, wide frame

  const frameLayout = () => {
    const vw = window.innerWidth, vh = window.innerHeight;
    let w = vw, h = w / TARGET_ASPECT;
    if (h > vh) { h = vh; w = h * TARGET_ASPECT; }
    frame.style.width = `${w}px`;
    frame.style.height = `${h}px`;
    renderer.setSize(w, h, false); // false: keep the canvas's 100% CSS size
    camera.aspect = TARGET_ASPECT;
    camera.updateProjectionMatrix();
    innerLine.style.inset = `${Math.max(8, Math.round(h * 0.016))}px`;
    title.style.fontSize = `${Math.max(11, Math.round(h * 0.034))}px`;
  };
  frameLayout();
  window.addEventListener("resize", frameLayout);

  const DEG = Math.PI / 180;
  // The pool disc reaches ~r23 and the tower ~r17, so the closest distance stays
  // well outside the geometry. Elevation never dips under the pool nor looks
  // perfectly straight down (which would read flat).
  const DIST = [58, 122] as const;
  const LOOKY = [-1, 5] as const;

  // continuous orbit state (az is NOT wrapped, so legs can sweep either way and
  // sometimes past a full turn). Seed from the fountain's default view.
  const d0 = new THREE.Vector3(...current!.camera);
  const orbit = {
    az: Math.atan2(d0.z, d0.x),
    el: Math.asin(d0.y / d0.length()),
    dist: d0.length(),
    lookY: 2,
  };
  let from = { ...orbit };
  let to = { ...orbit };
  let legStart = 0;
  let legDur = 0.001; // first frame: instantly "arrive" and pick a real leg
  let holdUntil = 0;
  let holding = true;

  // A small repertoire of shot types (picked by weight) keeps the motion varied
  // and intentional rather than aimless drift. az always sweeps to a new angle.
  const pickLeg = (now: number) => {
    from = { ...orbit };
    const dir = Math.random() < 0.5 ? 1 : -1;
    const az = orbit.az + dir * rand(60 * DEG, 220 * DEG);
    const r = Math.random();
    let el: number, dist: number, lookY: number, dur: number;
    if (r < 0.22) {
      // push-in: glide in close on the rings so a composition resolves
      el = rand(8 * DEG, 22 * DEG); dist = rand(58, 80); lookY = rand(0, 7); dur = rand(7, 11);
    } else if (r < 0.44) {
      // aerial: look down on the cog rings + the circular pool (not flat-on top)
      el = rand(52 * DEG, 78 * DEG); dist = rand(80, 118); lookY = rand(-3, 1); dur = rand(10, 16);
    } else if (r < 0.56) {
      // low / heroic: near eye-level, the tower looming overhead
      el = rand(-2 * DEG, 8 * DEG); dist = rand(72, 112); lookY = rand(3, 8); dur = rand(9, 14);
    } else {
      // mid orbit: the everyday three-quarter view
      el = rand(12 * DEG, 40 * DEG); dist = rand(DIST[0], DIST[1]); lookY = rand(LOOKY[0], LOOKY[1]); dur = rand(9, 16);
    }
    to = { az, el, dist, lookY };
    legStart = now;
    legDur = dur;
    holding = false;
  };

  const applyOrbit = () => {
    const ce = Math.cos(orbit.el);
    camera.up.set(0, 1, 0);
    camera.position.set(
      orbit.dist * ce * Math.cos(orbit.az),
      orbit.dist * Math.sin(orbit.el),
      orbit.dist * ce * Math.sin(orbit.az),
    );
    camera.lookAt(0, orbit.lookY, 0);
  };

  // self-triggered re-renders, hidden behind a cross-fade through the bg colour.
  const fader = document.createElement("div");
  fader.style.cssText =
    "position:absolute;inset:0;background:#ccced0;opacity:0;pointer-events:none;" +
    "z-index:2;transition:opacity 280ms ease;"; // below the border/title (z3)
  frame.appendChild(fader);
  let swapping = false;
  const crossfade = (swap: () => void) => {
    if (swapping) return;
    swapping = true;
    fader.style.opacity = "1";
    setTimeout(() => {
      swap();
      fader.style.opacity = "0";
      setTimeout(() => { swapping = false; }, 300);
    }, 300);
  };

  let nextSoft = rand(30, 45); // frequent recolour + new patterns (keeps camera)
  let nextFull = rand(180, 300); // rarer full mode change (pool style / B&W)

  autoTick = (now: number) => {
    // camera glide
    if (now >= legStart + legDur) {
      if (!holding) { orbit.az = to.az; orbit.el = to.el; orbit.dist = to.dist; orbit.lookY = to.lookY; holding = true; holdUntil = now + rand(1.5, 3); }
      else if (now >= holdUntil) pickLeg(now);
    } else {
      const t = smooth((now - legStart) / legDur);
      orbit.az = lerpN(from.az, to.az, t);
      orbit.el = lerpN(from.el, to.el, t);
      orbit.dist = lerpN(from.dist, to.dist, t);
      orbit.lookY = lerpN(from.lookY, to.lookY, t);
    }
    applyOrbit();

    // self re-render (full takes priority; it implies fresh colours too)
    if (now >= nextFull) {
      crossfade(() => setCreation("fountain", false, true));
      nextFull = now + rand(180, 300);
      nextSoft = now + rand(30, 45);
    } else if (now >= nextSoft) {
      crossfade(() => setCreation("fountain", true));
      nextSoft = now + rand(30, 45);
    }
  };

  // hardening for an unattended multi-day run
  renderer.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
  renderer.domElement.addEventListener("webglcontextrestored", () => location.reload());
  setTimeout(() => location.reload(), 3 * 60 * 60 * 1000); // periodic safety reload
}

// ---------------------------------------------------------------------------
// Render loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
const animate = () => {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  autoTick?.(t);
  current?.update?.(t, autoRotate, { renderer, scene, spinGroup: !AUTO });
  renderer.render(scene, camera);
  if (!AUTO) controls.update(); // controls would fight the kiosk camera
};
animate();
