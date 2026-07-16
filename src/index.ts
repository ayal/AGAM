import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import type { Creation } from "./creation";
import { createAgamograph } from "./creations/agamograph";
import { createFountain, rollFountainModes, type FountainModes } from "./creations/fountain";
import { newScheme } from "./palette";
import { mountTypography } from "./typography";

// ---------------------------------------------------------------------------
// Shared scene / renderer / camera / controls
// ---------------------------------------------------------------------------
const scene = new THREE.Scene();
// 52° vertical FOV everywhere (kiosk used this already): a wide 75° exaggerated
// near-field perspective, ballooning the pool's reflection in normal mode.
const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight);
camera.far = 4000; // default 2000 would clip the far side of the enlarged sky dome when zoomed way out
camera.updateProjectionMatrix();

// ?lobby → simulate the real installation on any monitor: the 4640×1760
// screen letterboxed on a dark lobby wall, with bezel, glow and a glossy
// floor reflection. Implies kiosk mode — what's inside the frame is exactly
// what the physical screen runs.
const LOBBY = new URLSearchParams(location.search).has("lobby");
// ?auto → unattended kiosk mode for a big screen: no UI, locked input, the
// camera glides on its own, and the render re-rolls itself over time. (See the
// "Auto / kiosk mode" section below.)
const AUTO = new URLSearchParams(location.search).has("auto") || LOBBY;
// ?near → alternative glide composition that stays close on the fountain
// (Omer: "not too much of the surroundings"); without it the shot mix is the
// original one. Combines with ?auto and ?text for the memorial-screen options.
const NEAR = new URLSearchParams(location.search).has("near");
// typography overlay active → the homage credit is redundant (the overlay
// itself names Agam and the work), so it shrinks to just the URL
const TEXT_ON =
  !!new URLSearchParams(location.search).get("text") ||
  new URLSearchParams(location.search).has("design");

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
    trackball.handleResize(); // trackball caches the canvas rect
  });
}

// Two control schemes, one per creation:
//  • fountain → OrbitControls, upright + clamped (polar angle & distance), so
//    the camera can't tumble into orientations the auto-glide can't represent
//    — which makes resuming the glide smooth by construction.
//  • agamograph → TrackballControls: no glide to hand back to, so the camera
//    is fully free — tumble over the poles, roll, pan, zoom right in.
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.enablePan = false; // keep the orbit centred (clean glide handoff)
controls.minPolarAngle = 0.18; // ~10° from top (matches the glide's aerial)
controls.maxPolarAngle = 1.95; // ~112°: can look up from below, but not under the pool
controls.minDistance = 32;
controls.maxDistance = 1900; // deep-space pull-back, still inside the sky dome (r≈1984)
controls.enabled = !AUTO; // kiosk mode is a locked display — ignore all input

const trackball = new TrackballControls(camera, renderer.domElement);
trackball.rotateSpeed = 3;
trackball.zoomSpeed = 1.4;
trackball.panSpeed = 0.6;
trackball.dynamicDampingFactor = 0.12;
trackball.minDistance = 6;
trackball.maxDistance = 400;
trackball.enabled = false;

// exactly one scheme listens at a time (both are attached to the same canvas)
function applyControlMode(name: string) {
  const free = name === "surface" && !AUTO;
  trackball.enabled = free;
  controls.enabled = !free && !AUTO;
  if (free) trackball.target.set(0, 0, 0);
}

// disable double-click / double-tap to zoom
renderer.domElement.addEventListener("dblclick", (e) => e.preventDefault());

// ---------------------------------------------------------------------------
// UI helpers
// ---------------------------------------------------------------------------
// ?thumb → a clean capture mode for the share thumbnail (no UI, no spin, a
// colourful crisp render, zoomed in).
const THUMB = new URLSearchParams(location.search).has("thumb");
const bar = document.createElement("div");
bar.id = "ui-bar";
// Frosted pill behind the buttons so they read at every hour of the sky's
// day/night cycle (dark icons on a bare night sky were invisible).
bar.style.cssText =
  "position:fixed;top:14px;left:14px;z-index:9999;display:flex;gap:4px;align-items:center;" +
  "background:rgba(246,244,238,.8);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);" +
  "border-radius:12px;padding:4px 8px;box-shadow:0 1px 8px rgba(0,0,0,.14);";
// HUD (bottom-left): a creation's one-line status — the fountain's simulated
// clock. Filled per-frame in the render loop from current.status().
const hud = document.createElement("div");
hud.style.cssText =
  "font-family:'Helvetica Neue',Arial,sans-serif;letter-spacing:.2em;" +
  "font-variant-numeric:tabular-nums;font-weight:200;" +
  "color:rgba(255,255,255,.22);" +
  "text-shadow:0 1px 18px rgba(0,0,0,.6),0 0 4px rgba(0,0,0,.35);" +
  "line-height:1;user-select:none;display:none;";
if (!THUMB && !AUTO) {
  // text/design mode is a composition preview — no toolbar, no clock (same
  // as kiosk); the credit stays, already minimal under the overlay
  if (!TEXT_ON) document.body.appendChild(bar);
  const credit = makeCredit(); // bottom-right homage in regular mode
  credit.style.position = "fixed";
  credit.style.right = "14px";
  credit.style.bottom = "12px";
  credit.style.zIndex = "9999";
  document.body.appendChild(credit);
  hud.style.cssText += "position:fixed;left:20px;bottom:18px;z-index:9999;" +
    "font-size:clamp(22px,3.8vh,40px);";
  if (!TEXT_ON) document.body.appendChild(hud);
}

// ---- inline stroke icons (Lucide-style; no icon font to load) -------------
const ICONS: Record<string, string> = {
  grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  fountain: '<circle cx="12" cy="4" r="1.3"/><path d="M12 5.3v6.7"/><path d="M12 7c-2.6.5-4.2 2.6-4.7 5M12 7c2.6.5 4.2 2.6 4.7 5"/><path d="M4 14q8 3.6 16 0"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v5h-5"/>',
  orbit: '<ellipse cx="12" cy="12" rx="9.5" ry="4"/><circle cx="12" cy="12" r="2.3"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  droplets: '<path d="M7 16.3a4 4 0 0 0 4-4c0-1.2-.6-2.3-1.7-3.2S7.3 6.8 7 5.3c-.3 1.5-1.1 2.8-2.3 3.8S3 11.1 3 12.3a4 4 0 0 0 4 4z"/><path d="M12.6 6.6A11 11 0 0 0 14 3c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 0 1-11.9 5"/>',
  sound: '<path d="M11 4.7 6.5 8.3H3v7.4h3.5L11 19.3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.8 5.2a9 9 0 0 1 0 13.6"/>',
  play: '<path d="M7 4.5 19 12 7 19.5z"/>',
};
function svg(name: string): string {
  return (
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
    ' stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
    ICONS[name] + "</svg>"
  );
}
function styleIcon(el: HTMLElement, on: boolean) {
  // dark when active/selected, muted gray otherwise — reads on cream & gray bg
  el.style.color = on ? "#1d1d1f" : "#6b6e72";
  el.style.opacity = on ? "1" : ".8";
}
function iconBtn(name: string, label: string): HTMLButtonElement {
  const b = document.createElement("button");
  b.innerHTML = svg(name);
  b.title = label;
  b.setAttribute("aria-label", label);
  b.style.cssText =
    "border:none;background:none;cursor:pointer;padding:5px;display:inline-flex;line-height:0;";
  return b;
}
// a button showing an image (the colour fountain SVG); active = full colour,
// inactive = grayscale + dimmed (since a colour image can't use currentColor).
function imgBtn(src: string, label: string): HTMLButtonElement {
  const b = document.createElement("button");
  const img = document.createElement("img");
  img.src = src;
  img.alt = label;
  img.width = 23;
  img.height = 23;
  img.style.display = "block";
  b.appendChild(img);
  b.title = label;
  b.setAttribute("aria-label", label);
  b.style.cssText =
    "border:none;background:none;cursor:pointer;padding:3px;display:inline-flex;line-height:0;";
  return b;
}
function styleImgBtn(b: HTMLButtonElement, on: boolean) {
  (b.firstElementChild as HTMLElement).style.filter = on ? "none" : "grayscale(1)";
  b.style.opacity = on ? "1" : ".5";
}
// Homage / attribution credit, shared by kiosk mode (inside the frame) and
// regular mode (fixed bottom-right). Caller sets position.
function makeCredit(): HTMLAnchorElement {
  const a = document.createElement("a");
  a.href = "https://ayal.github.io/AGAM";
  a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML = TEXT_ON
    ? '<span class="credit-url">ayal.github.io/AGAM</span>' // overlay already names Agam & the work
    : '<span class="credit-full">Homage to Yaacov Agam&rsquo;s ' +
      '<span style="font-style:italic">Fire &amp; Water Fountain</span> &middot; by Ayal Gelles</span>' +
      '<span class="credit-short">by Ayal Gelles</span>' +
      '<span class="credit-url">ayal.github.io/AGAM</span>'; // always shown — kiosk isn't clickable
  a.style.cssText =
    "display:inline-block;text-align:right;line-height:1.45;" +
    "font:12px 'Helvetica Neue',Arial,sans-serif;letter-spacing:.04em;" +
    // ghost text, no pill (same in kiosk and regular mode) — the art should
    // dominate; the soft dark shadow keeps it legible on the pale day sky
    "color:rgba(255,255,255,.32);text-decoration:none;" +
    "text-shadow:0 1px 10px rgba(0,0,0,.5);";
  return a;
}

// Responsive bits for small screens: a shorter credit and a tighter, wrapping
// toolbar. (The kiosk frame itself adapts in frameLayout.)
const responsiveCss = document.createElement("style");
responsiveCss.textContent =
  ".credit-full,.credit-short,.credit-url{white-space:nowrap}" +
  ".credit-url{display:block;opacity:.72;letter-spacing:.09em;font-size:.92em}" +
  ".credit-short{display:none}" +
  "#ui-bar a,#ui-bar button{-webkit-tap-highlight-color:transparent}" +
  "@media (max-width:640px){" +
  "  #ui-bar{gap:6px;left:8px;top:8px;flex-wrap:wrap}" +
  "  .credit-full{display:none}.credit-short{display:inline}" +
  "}";
document.head.appendChild(responsiveCss);

function makeToggle(icon: string, label: string, initial: boolean, onChange: (on: boolean) => void) {
  const b = iconBtn(icon, label);
  let on = initial;
  styleIcon(b, on);
  b.onclick = () => { on = !on; styleIcon(b, on); onChange(on); };
  (b as any).setOn = (v: boolean) => { on = v; styleIcon(b, on); };
  return b;
}

// ---------------------------------------------------------------------------
// Creation management — in-place switching (a fresh page load always starts on
// the fountain; the buttons swap without reloading).
// ---------------------------------------------------------------------------
let current: Creation | null = null;
let currentName = "";
let autoRotate = true;
let autoTick: ((t: number) => void) | null = null; // per-frame camera glide (attract loop)
let lobbyTick: ((t: number) => void) | null = null; // ?lobby: per-frame walk-through of the room
let isManual = false; // regular mode: user has grabbed camera control
let seedGlide: (() => void) | null = null; // (re)seed the glide orbit from the live camera
let checkIdle: ((t: number) => void) | null = null; // regular mode: resume glide after idle
let frameEl: HTMLElement | null = null; // kiosk presentation frame (null in regular mode)
let uiFade: ((swap: () => void) => void) | null = null; // crossfade for UI-triggered re-renders
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

const TOGGLE_ICONS: Record<string, string> = { fire: "flame", water: "droplets", sound: "sound" };

// wrap a rebuild in the crossfade when it's available (it's created alongside
// the glide loop; before that, or if a fade is already running, swap directly)
const fadeTo = (swap: () => void) => (uiFade ? uiFade(swap) : swap());

function buildUI(name: string) {
  bar.replaceChildren();
  for (const sel of ["surface", "fountain"]) {
    const active = sel === name;
    let b: HTMLButtonElement;
    if (sel === "fountain") {
      b = imgBtn("favicon.svg", sel); // the colourful fountain icon
      styleImgBtn(b, active);
    } else {
      b = iconBtn("grid", sel);
      styleIcon(b, active);
    }
    // clicking the current creation re-rolls patterns+colors. If the creation
    // supports recolor (the fountain), morph IN PLACE — same path as the
    // kiosk's nightly pattern change: no rebuild, no crossfade, the new
    // patterns breathe into the live panels. Otherwise (or when switching to
    // the OTHER creation) rebuild behind the crossfade as before.
    b.onclick = () => {
      if (sel === currentName && current?.recolor) current.recolor();
      else fadeTo(() => setCreation(sel, sel === currentName));
    };
    bar.appendChild(b);
  }
  // refresh = a full new render (new modes, colors, patterns, reset camera)
  const refresh = iconBtn("refresh", "new render");
  styleIcon(refresh, false);
  refresh.onclick = () => fadeTo(() => setCreation(name, false));
  bar.appendChild(refresh);
  // link into the unattended kiosk / auto mode
  const auto = document.createElement("a");
  auto.innerHTML = svg("play");
  auto.href = "?auto";
  auto.title = "fullscreen kiosk mode (camera glides, self-updates)";
  auto.setAttribute("aria-label", "auto / kiosk mode");
  auto.style.cssText = "display:inline-flex;line-height:0;padding:5px;text-decoration:none;";
  styleIcon(auto, false);
  bar.appendChild(auto);
  if (current?.toggles) {
    const sep = document.createElement("span");
    sep.style.cssText = "width:1px;height:16px;background:#b9bbbd;margin:0 3px;";
    bar.appendChild(sep);
    spinBtn = makeToggle("orbit", "spin", autoRotate, setSpin);
    bar.appendChild(spinBtn);
    for (const tg of current.toggles) {
      tg.set(tg.initial);
      bar.appendChild(makeToggle(TOGGLE_ICONS[tg.label] ?? "play", tg.label, tg.initial, tg.set));
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
  applyControlMode(name);
  buildUI(name);
  // if the fountain will be auto-gliding, (re)seed the glide from this view
  if (!soft && !THUMB && !isManual && name === "fountain") seedGlide?.();
}

// fresh load always starts on the fountain
setCreation("fountain");
const timer = new THREE.Timer(); // (Clock is deprecated) updated once per frame
let elapsed = 0; // last frame's elapsed time, for event handlers between frames

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
  // screen it fills edge to edge — no letterboxing.
  const surround = document.createElement("div");
  const frame = document.createElement("div");
  frame.style.cssText =
    "position:relative;overflow:hidden;background:#ccced0;" +
    (LOBBY
      ? "position:absolute;border:3px solid #050506;will-change:transform;" +
        "box-shadow:0 40px 110px rgba(0,0,0,.6),0 0 160px rgba(190,210,255,.12);"
      : "");
  renderer.domElement.style.cssText = "display:block;width:100%;height:100%;";
  frame.appendChild(renderer.domElement); // move the canvas inside the frame
  // homage / attribution, bottom-right corner of the frame
  const credit = makeCredit();
  credit.style.position = "absolute";
  credit.style.right = "2.4%";
  credit.style.bottom = "3%";
  credit.style.zIndex = "3";
  frame.appendChild(credit);
  // (no clock in kiosk — the sky itself tells the time)
  frameEl = frame; // the shared glide loop fades re-renders inside this frame

  camera.fov = 52; // a tighter vertical FOV fills the short, wide frame

  if (!LOBBY) {
    surround.style.cssText = "position:fixed;inset:0;z-index:1;";
    surround.appendChild(frame);
    document.body.appendChild(surround);
    const frameLayout = () => {
      const vw = window.innerWidth, vh = window.innerHeight;
      frame.style.width = `${vw}px`;
      frame.style.height = `${vh}px`;
      renderer.setSize(vw, vh, false);
      camera.aspect = vw / vh;
      camera.updateProjectionMatrix();
      credit.style.fontSize = `${Math.max(11, Math.round(Math.min(vh * 0.014, vw * 0.022)))}px`;
    };
    frameLayout();
    window.addEventListener("resize", frameLayout);
  } else {
    // ---- walkable lobby scene (?lobby) ------------------------------------
    // A CSS-3D room around the live screen: perspective on the root, a world
    // div carrying wall/floor/screen, and a first-person camera written into
    // the world transform each frame. The screen keeps its real DOM (canvas +
    // typography overlay + design panel) — it's simply placed in 3D, so what
    // it shows is exactly what the physical 4640×1760 screen runs.
    // World scale ≈ 400px per metre; y=0 is eye height (~1.6m), CSS y is down.
    const SW = 1800, SH = Math.round(SW / (4640 / 1760)); // the screen (≈4.6×1.76m)
    const FLOOR_Y = 640; // the floor, 1.6m below the eye
    const SCREEN_Y = FLOOR_Y - 200 - SH / 2; // screen bottom ~0.5m above the floor
    surround.style.cssText =
      "position:fixed;inset:0;z-index:1;overflow:hidden;background:#17171c;cursor:grab;" +
      "perspective:1000px;perspective-origin:50% 47%;";
    const world = document.createElement("div");
    world.style.cssText =
      "position:absolute;left:50%;top:50%;width:0;height:0;transform-style:preserve-3d;" +
      "will-change:transform;"; // keep children composited — re-rastering them per move flickers
    // Small elements scaled up 4× in the transform: a 9600px-wide surface as
    // an actual 9600px layer overflows the GPU tile budget and shows
    // unrasterised black holes while moving; a 2400px texture scaled up is
    // fully resident, and soft gradients survive the upscale losslessly.
    const wall = document.createElement("div");
    wall.style.cssText =
      `position:absolute;left:-4800px;top:${FLOOR_Y - 3200}px;width:2400px;height:800px;` +
      "transform-origin:0 0;transform:translateZ(-40px) scale3d(4,4,4);" +
      "backface-visibility:hidden;will-change:transform;" +
      "background:radial-gradient(760px 430px at 50% 80%,#4a4a55,transparent 78%)," +
      "linear-gradient(#3a3a43,#2c2c33);";
    const floor = document.createElement("div");
    floor.style.cssText =
      `position:absolute;left:-4800px;top:${FLOOR_Y}px;width:2400px;height:1600px;` +
      "transform-origin:0 0;transform:scale3d(4,4,4) rotateX(90deg);" +
      "backface-visibility:hidden;will-change:transform;" +
      "background:radial-gradient(520px 230px at 50% 40px,rgba(160,180,255,.18),transparent 70%)," +
      "linear-gradient(#34343d,#1f1f26 60%);";
    const plaque = document.createElement("div");
    plaque.textContent = "lobby preview · 4640 × 1760";
    plaque.style.cssText =
      `position:absolute;left:-400px;top:${SCREEN_Y + SH / 2 + 56}px;width:800px;text-align:center;` +
      "color:#8a8a94;font:15px 'Space Grotesk','Helvetica Neue',Arial,sans-serif;" +
      "letter-spacing:.3em;text-transform:uppercase;";
    frame.style.width = `${SW}px`;
    frame.style.height = `${SH}px`;
    frame.style.left = `${-SW / 2}px`;
    frame.style.top = `${SCREEN_Y - SH / 2}px`;
    world.append(wall, floor, plaque, frame);
    surround.appendChild(world);
    document.body.appendChild(surround);
    renderer.setSize(SW, SH, false);
    camera.aspect = SW / SH;
    camera.updateProjectionMatrix();
    credit.style.fontSize = "13px";
    const hint = document.createElement("div");
    hint.textContent = "drag to look · arrows / wasd to walk · scroll to dolly";
    hint.style.cssText =
      "position:fixed;left:50%;transform:translateX(-50%);bottom:2.4%;z-index:2;color:#7e7e88;" +
      "font:11px 'Space Grotesk','Helvetica Neue',Arial,sans-serif;letter-spacing:.22em;" +
      "text-transform:uppercase;pointer-events:none;";
    document.body.appendChild(hint);

    // first-person camera: facing = (sin yaw, 0, -cos yaw); pitch > 0 looks up
    const cam = { x: 260, z: 1500, yaw: 0, pitch: 0.02 }; // screen centre ≈ eye level now
    let lastInput = -30; // start on the auto-walk
    const markInput = () => { lastInput = elapsed; };
    const keys = new Set<string>();
    const WALK = ["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"];
    window.addEventListener("keydown", (e) => {
      const k = e.key.toLowerCase();
      if (!WALK.includes(k)) return;
      keys.add(k);
      markInput();
      e.preventDefault();
    });
    window.addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
    let look: { x: number; y: number } | null = null;
    surround.addEventListener("pointerdown", (e) => {
      if ((e.target as HTMLElement).closest(".tdp,.tdp-pill,a,select,input,button")) return;
      look = { x: e.clientX, y: e.clientY };
      surround.setPointerCapture(e.pointerId);
      surround.style.cursor = "grabbing";
      markInput();
    });
    surround.addEventListener("pointermove", (e) => {
      if (!look) return;
      cam.yaw += (e.clientX - look.x) * 0.0022;
      cam.pitch -= (e.clientY - look.y) * 0.0015;
      look = { x: e.clientX, y: e.clientY };
      markInput();
    });
    const endLook = () => { look = null; surround.style.cursor = "grab"; };
    surround.addEventListener("pointerup", endLook);
    surround.addEventListener("pointercancel", endLook);
    surround.addEventListener("wheel", (e) => {
      e.preventDefault();
      cam.x -= Math.sin(cam.yaw) * e.deltaY * 1.2;
      cam.z += Math.cos(cam.yaw) * e.deltaY * 1.2;
      markInput();
    }, { passive: false });

    let lastT = 0;
    lobbyTick = (t) => {
      const dt = Math.min(0.1, Math.max(0, t - lastT));
      lastT = t;
      // keyboard walk: up/down move along the facing, left/right turn, a/d strafe
      const fwd = (keys.has("arrowup") || keys.has("w") ? 1 : 0) -
        (keys.has("arrowdown") || keys.has("s") ? 1 : 0);
      const turn = (keys.has("arrowright") ? 1 : 0) - (keys.has("arrowleft") ? 1 : 0);
      const strafe = (keys.has("d") ? 1 : 0) - (keys.has("a") ? 1 : 0);
      if (fwd || turn || strafe) markInput();
      cam.yaw += turn * 1.1 * dt;
      const sp = 1150 * dt;
      cam.x += (Math.sin(cam.yaw) * fwd + Math.cos(cam.yaw) * strafe) * sp;
      cam.z += (-Math.cos(cam.yaw) * fwd + Math.sin(cam.yaw) * strafe) * sp;
      // idle → resume the slow auto-walk (ease toward the path, no snap)
      if (t - lastInput > 14) {
        const ax = Math.sin(t * 0.085) * 1050;
        const az = 1250 + Math.sin(t * 0.057 + 1.4) * 520;
        const ayaw = Math.atan2(-ax, az) * 0.8; // mostly keep facing the screen
        const apitch = 0.02 + 0.04 * Math.sin(t * 0.045);
        const k = Math.min(1, dt * 0.55);
        cam.x += (ax - cam.x) * k;
        cam.z += (az - cam.z) * k;
        cam.yaw += (ayaw - cam.yaw) * k;
        cam.pitch += (apitch - cam.pitch) * k;
      }
      // stay inside the room, keep the screen findable
      cam.x = Math.max(-3800, Math.min(3800, cam.x));
      cam.z = Math.max(430, Math.min(5200, cam.z));
      cam.yaw = Math.max(-1.35, Math.min(1.35, cam.yaw));
      cam.pitch = Math.max(-0.5, Math.min(0.55, cam.pitch));
      world.style.transform =
        `rotateX(${cam.pitch}rad) rotateY(${cam.yaw}rad) translate3d(${-cam.x}px,0px,${-cam.z}px)`;
    };
  }

  // ---- self-update / hardening for an unattended multi-day run ------------
  // A graceful reload: fade the whole screen to the backdrop colour, then
  // reload. The fresh page builds on the same backdrop, so there's no white
  // flash and the swap reads as a slow dip rather than a glitch.
  const blackout = document.createElement("div");
  blackout.style.cssText =
    "position:fixed;inset:0;background:#101012;opacity:0;pointer-events:none;" +
    "z-index:50;transition:opacity 450ms ease;";
  document.body.appendChild(blackout);
  let reloading = false;
  const gracefulReload = () => {
    if (reloading) return;
    reloading = true;
    blackout.style.opacity = "1";
    setTimeout(() => location.reload(), 500);
  };

  // Auto-update on deploy: poll the deployed index.html and reload when the
  // built bundle's filename hash changes. GitHub Pages caches HTML on its CDN
  // (~10 min), so a new build is picked up within roughly that window — fine
  // for a kiosk. A change must be seen on two consecutive polls before we act,
  // so a flapping/half-propagated CDN can never trigger a reload loop.
  const bundleRe = /assets\/index-[\w-]+\.js/;
  const running = (
    [...document.querySelectorAll("script")] as HTMLScriptElement[]
  ).map((s) => s.src).find((s) => bundleRe.test(s)) ?? ""; // "" in dev → never reloads
  let pending = "";
  const checkForUpdate = async () => {
    try {
      const res = await fetch(`${location.pathname}?_=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) return;
      const m = (await res.text()).match(bundleRe);
      if (!m || !running) return;
      const latest = m[0];
      if (running.includes(latest)) { pending = ""; return; } // already on latest
      if (latest === pending) gracefulReload(); // stable new build → update
      else pending = latest; // first sighting — confirm on the next poll
    } catch {
      /* offline / transient — keep running, retry next tick */
    }
  };
  setInterval(checkForUpdate, 60_000);

  // recover from a lost GL context (driver hiccup) instead of going black
  renderer.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
  renderer.domElement.addEventListener("webglcontextrestored", gracefulReload);
  // long backstop reload in case something drifts over days of uptime
  setTimeout(gracefulReload, 6 * 60 * 60 * 1000);
}

// ---------------------------------------------------------------------------
// Memorial typography (?text=<variant>) and the designer panel (?design):
// dedication lines over the art; the panel tunes them live and mirrors every
// knob into the URL, so a link reproduces the exact design. Works in both
// regular and kiosk mode, so options can be previewed anywhere.
// ---------------------------------------------------------------------------
if (!THUMB) {
  const q = new URLSearchParams(location.search);
  if (q.get("text") || q.has("design")) {
    // in the lobby scene the text lives on the 3D screen, but the designer
    // panel stays flat on the page
    mountTypography(frameEl ?? document.body, !frameEl, q, LOBBY ? document.body : undefined);
  }
}

// ---------------------------------------------------------------------------
// Camera glide (attract loop) — runs in BOTH modes, governs the fountain only.
//   • kiosk (?auto): always on, input locked.
//   • regular: glides on its own until the user grabs the camera (drag / zoom),
//     then hands over manual control; after an idle pause it resumes the glide.
// ---------------------------------------------------------------------------
{
  const DEG = Math.PI / 180;
  // The pool disc reaches ~r23 and the tower ~r17, so the closest distance stays
  // well outside the geometry. Elevation never dips under the pool nor looks
  // perfectly straight down (which would read flat).
  const DIST = [58, 122] as const;
  const LOOKY = [-1, 5] as const;
  const Y_FLOOR = -10; // keep the camera above the pool (~y -11)

  const orbit = { az: 0, el: 0.3, dist: 100, lookY: 2, roll: 0 };
  let from = { ...orbit };
  let to = { ...orbit };
  let legStart = 0;
  let legDur = 0.001;
  let holdUntil = 0;
  let holding = true;

  // (re)seed the orbit from wherever the camera is now → smooth start / resume
  seedGlide = () => {
    const p = camera.position;
    const len = Math.max(1, p.length());
    orbit.az = Math.atan2(p.z, p.x);
    orbit.el = Math.asin(Math.max(-1, Math.min(1, p.y / len)));
    orbit.dist = len; // seed at the ACTUAL distance so resume eases in (no snap)
    orbit.lookY = controls.target.y || 2;
    orbit.roll = 0;
    from = { ...orbit };
    to = { ...orbit };
    holding = true;
    holdUntil = 0; // pick a fresh leg on the next tick
  };

  // A small repertoire of shot types keeps the motion varied and intentional.
  // The fountain stays the anchor, and close-ups never chain back-to-back:
  // after one, the next leg is pushed out to a mid/wide/planet shot, so the
  // loop keeps circulating and showing the scene from new angles instead of
  // lingering at the basin.
  // Two shot mixes (cumulative probability cut-offs): the default one, and the
  // ?near variant where ~86% of legs stay at close/mid range and wide (10%) /
  // planet (4%) become rare punctuation — the composition stays on the
  // fountain, not "too much of the surroundings".
  const MIX = NEAR
    ? { pushIn: 0.16, below: 0.44, rise: 0.58, mid: 0.86, wide: 0.96 }
    : { pushIn: 0.1, below: 0.34, rise: 0.48, mid: 0.7, wide: 0.88 };
  let lastClose = false;
  const pickLeg = (now: number) => {
    from = { ...orbit };
    const dir = Math.random() < 0.5 ? 1 : -1;
    const big = Math.random() < 0.35; // often the long way round (>1 turn)
    const az = orbit.az + dir * (big ? rand(320 * DEG, 520 * DEG) : rand(80 * DEG, 240 * DEG));
    let r = Math.random();
    if (lastClose) r = MIX.below + r * (1 - MIX.below); // just had a close-up — pull away first
    lastClose = r < MIX.below; // the first two shot types below are the close ones
    let el: number, dist: number, lookY: number, dur: number;
    if (r < MIX.pushIn) {
      el = rand(8 * DEG, 22 * DEG); dist = rand(58, 80); lookY = rand(0, 7); dur = rand(7, 11); // push-in
    } else if (r < MIX.below) {
      el = rand(-18 * DEG, 6 * DEG); dist = rand(56, 80); lookY = rand(3, 11); dur = rand(9, 14); // from-below
    } else if (r < MIX.rise) {
      el = rand(48 * DEG, 76 * DEG); dist = rand(78, 116); lookY = rand(-3, 2); dur = rand(7, 11); // rise-above
    } else if (r < MIX.mid) {
      el = rand(12 * DEG, 40 * DEG); dist = rand(DIST[0], DIST[1]); lookY = rand(LOOKY[0], LOOKY[1]); dur = rand(9, 14); // mid orbit
    } else if (r < MIX.wide) {
      // wide establishing shot: pull right back and aim a little upward, so
      // the sky — sun, moon, high jet surges — shares the frame with the tower
      el = rand(2 * DEG, 20 * DEG); dist = rand(150, 250); lookY = rand(8, 24); dur = rand(12, 18);
    } else {
      // planet shot: pull way out until the fountain is a jewel on its
      // little world — curvature, stars and the orbiting sun/moon fill the
      // frame. (Capped at 550: the camera must stay inside the sky dome.)
      el = rand(4 * DEG, 18 * DEG); dist = rand(300, 550); lookY = rand(0, 16); dur = rand(16, 24);
    }
    el = Math.max(el, Math.asin(Y_FLOOR / dist)); // never below the pool
    if (big) dur = Math.max(dur, rand(20, 30));
    const roll = Math.random() < 0.3 ? (Math.random() < 0.5 ? 1 : -1) * rand(7 * DEG, 18 * DEG) : 0;
    to = { az, el, dist, lookY, roll };
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
    if (orbit.roll) camera.rotateZ(orbit.roll);
  };

  // self-triggered re-renders, cross-faded through the bg colour. In kiosk the
  // fade lives inside the frame (below the title); in regular mode it's a
  // full-screen dip behind the toolbar.
  const fader = document.createElement("div");
  if (frameEl) {
    fader.style.cssText =
      "position:absolute;inset:0;background:#ccced0;opacity:0;pointer-events:none;z-index:2;transition:opacity 280ms ease;";
    frameEl.appendChild(fader);
  } else {
    fader.style.cssText =
      "position:fixed;inset:0;background:#ccced0;opacity:0;pointer-events:none;z-index:9998;transition:opacity 280ms ease;";
    document.body.appendChild(fader);
  }
  let swapping = false;
  const crossfade = (swap: () => void) => {
    if (swapping) return;
    swapping = true;
    // dip through the CURRENT clear colour (gray for the fountain, cream for
    // the agamograph) so the fade never flashes a foreign tone
    fader.style.background = "#" + renderer.getClearColor(new THREE.Color()).getHexString();
    fader.style.opacity = "1";
    setTimeout(() => {
      swap();
      fader.style.opacity = "0";
      setTimeout(() => { swapping = false; }, 300);
    }, 300);
  };
  uiFade = crossfade; // toolbar re-render clicks share the same dip

  let holdDir = 1;
  let lastNow = 0;
  // Pattern-change cadence, in simulated midnights: fresh colours + patterns
  // at EVERY midnight (~27s of wall time per day).
  const PATTERN_DAYS = 1;
  let lastDayCount = 0;

  autoTick = (now: number) => {
    const dtg = Math.min(0.1, Math.max(0, now - lastNow));
    lastNow = now;
    if (now >= legStart + legDur) {
      if (!holding) {
        orbit.az = to.az; orbit.el = to.el; orbit.dist = to.dist; orbit.lookY = to.lookY; orbit.roll = to.roll;
        holdDir = Math.sign(to.az - from.az) || 1;
        holding = true;
        holdUntil = now + rand(0.6, 4.5);
      } else if (now >= holdUntil) {
        pickLeg(now);
      } else {
        orbit.az += holdDir * 0.7 * DEG * dtg;
      }
    } else {
      const t = smooth((now - legStart) / legDur);
      orbit.az = lerpN(from.az, to.az, t);
      orbit.el = lerpN(from.el, to.el, t);
      orbit.dist = lerpN(from.dist, to.dist, t);
      orbit.lookY = lerpN(from.lookY, to.lookY, t);
      orbit.roll = lerpN(from.roll, to.roll, t);
    }
    applyOrbit();

    // Pattern change every PATTERN_DAYS simulated midnights: the new patterns
    // morph INTO the live panels (fountain.recolor) — no rebuild, no overlay,
    // and therefore no fade to black. dayCount never resets (nothing rebuilds).
    const dc = current?.dayCount?.() ?? 0;
    if (dc - lastDayCount >= PATTERN_DAYS) {
      lastDayCount = dc;
      current?.recolor?.();
    }
  };

  if (!AUTO) {
    // regular mode: hand the camera to the user on interaction, resume on idle.
    // The idle countdown starts when a drag/zoom ENDS (not on hover), so a
    // cursor merely resting over the canvas can't keep it from resuming.
    const IDLE = 22; // seconds after the last interaction before the glide resumes
    let lastInteract = 0;
    let dragging = false;
    const mark = () => { lastInteract = elapsed; };
    const startManual = () => { isManual = true; controls.target.set(0, orbit.lookY, 0); mark(); };
    const el = renderer.domElement;
    el.addEventListener("pointerdown", () => { dragging = true; startManual(); });
    el.addEventListener("wheel", () => startManual(), { passive: true });
    el.addEventListener("touchstart", () => { dragging = true; startManual(); }, { passive: true });
    window.addEventListener("pointerup", () => { if (dragging) { dragging = false; mark(); } });
    window.addEventListener("touchend", () => { if (dragging) { dragging = false; mark(); } });
    checkIdle = (now: number) => { if (isManual && !dragging && now - lastInteract > IDLE) isManual = false; };
  }
}

// ---------------------------------------------------------------------------
// Render loop
// ---------------------------------------------------------------------------
let wasGliding = false;
let lastHud = "";
// ---- time pause (click the HUD clock to freeze / resume the simulation) ----
let timePaused = false;
let pauseStart = 0;       // raw timer value when pause began
let totalPausedTime = 0;  // accumulated pause duration (subtracted from elapsed)
hud.style.cursor = "pointer";
hud.title = "Click to pause / resume time";
hud.addEventListener("click", () => {
  timePaused = !timePaused;
  if (timePaused) {
    pauseStart = timer.getElapsed();
  } else {
    totalPausedTime += timer.getElapsed() - pauseStart;
  }
});
const animate = () => {
  requestAnimationFrame(animate);
  timer.update();
  const raw = timer.getElapsed();
  // `t` ALWAYS runs — pausing time freezes only the day/night sky (sun, moon,
  // lighting) via skyT below; the fountain keeps spinning and spraying.
  const t = (elapsed = raw);
  const skyT = timePaused ? (pauseStart - totalPausedTime) : (raw - totalPausedTime);
  const baseStatus = current?.status?.() ?? "";
  const hudText = baseStatus ? (timePaused ? baseStatus + " ⏸" : baseStatus) : "";
  if (hudText !== lastHud) {
    hud.textContent = hudText;
    hud.style.display = hudText ? "inline-block" : "none";
    lastHud = hudText;
  }
  // glide only governs the fountain, and only when the user isn't in control
  const gliding = !isManual && currentName === "fountain";
  if (gliding && !wasGliding) seedGlide?.(); // entering the glide → seed from current view
  if (gliding) autoTick?.(t);
  else if (trackball.enabled) trackball.update(); // free-tumble agamograph
  else controls.update(); // manual fountain control
  lobbyTick?.(t); // ?lobby: walk the room (independent of the art's own glide)
  checkIdle?.(t);
  current?.update?.(t, autoRotate, { renderer, scene, camera, skyTime: skyT, spinGroup: !gliding });
  renderer.render(scene, camera);
  wasGliding = gliding;
};
animate();
