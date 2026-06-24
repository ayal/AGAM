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
// ?thumb → a clean capture mode for the share thumbnail (no UI, no spin, a
// colourful crisp render, zoomed in).
const THUMB = new URLSearchParams(location.search).has("thumb");
const bar = document.createElement("div");
bar.id = "ui-bar";
bar.style.cssText = "position:fixed;top:14px;left:14px;z-index:9999;display:flex;gap:4px;align-items:center;";
if (!THUMB && !AUTO) {
  document.body.appendChild(bar);
  const credit = makeCredit(); // bottom-right homage in regular mode
  credit.style.position = "fixed";
  credit.style.right = "14px";
  credit.style.bottom = "12px";
  credit.style.zIndex = "9999";
  document.body.appendChild(credit);
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
// Homage / attribution credit, shared by kiosk mode (inside the frame) and
// regular mode (fixed bottom-right). Caller sets position.
function makeCredit(): HTMLAnchorElement {
  const a = document.createElement("a");
  a.href = "https://ayal.github.io/AGAM";
  a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML =
    '<span class="credit-full">Homage to Yaacov Agam&rsquo;s ' +
    '<span style="font-style:italic">Fire &amp; Water Fountain</span> &middot; by Ayal Gelles</span>' +
    '<span class="credit-short">by Ayal Gelles</span>';
  a.style.cssText =
    "font:12px 'Helvetica Neue',Arial,sans-serif;letter-spacing:.04em;white-space:nowrap;" +
    "color:#4e5154;opacity:.75;text-decoration:none;";
  return a;
}

// Responsive bits for small screens: a shorter credit and a tighter, wrapping
// toolbar. (The kiosk frame itself adapts in frameLayout.)
const responsiveCss = document.createElement("style");
responsiveCss.textContent =
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

const TOGGLE_ICONS: Record<string, string> = { fire: "flame", water: "droplets", sound: "sound" };

function buildUI(name: string) {
  bar.replaceChildren();
  for (const sel of ["surface", "fountain"]) {
    const b = iconBtn(sel === "surface" ? "grid" : "fountain", sel);
    styleIcon(b, sel === name);
    // clicking the current creation re-rolls patterns+colors but keeps the modes
    // & camera (soft); clicking the other one switches (full render).
    b.onclick = () => setCreation(sel, sel === currentName);
    bar.appendChild(b);
  }
  // refresh = a full new render (new modes, colors, patterns, reset camera)
  const refresh = iconBtn("refresh", "new render");
  styleIcon(refresh, false);
  refresh.onclick = () => setCreation(name, false);
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
  // homage / attribution, bottom-right corner of the frame
  const credit = makeCredit();
  credit.style.position = "absolute";
  credit.style.right = "2.4%";
  credit.style.bottom = "3%";
  credit.style.zIndex = "3";
  frame.appendChild(credit);
  surround.appendChild(frame);
  document.body.appendChild(surround);

  camera.fov = 52; // a tighter vertical FOV fills the short, wide frame

  const frameLayout = () => {
    const vw = window.innerWidth, vh = window.innerHeight;
    // On a wide-enough viewport (the real wall, or a desktop landscape window)
    // lock to the 4640×1760 aspect so the composition is exactly what ships.
    // On a phone / portrait window that would be a thin letterboxed sliver, so
    // instead fill the viewport with the scene.
    const fill = vw / vh < 1.4;
    let w: number, h: number, aspect: number;
    if (fill) {
      w = vw; h = vh; aspect = vw / vh;
    } else {
      w = vw; h = w / TARGET_ASPECT;
      if (h > vh) { h = vh; w = h * TARGET_ASPECT; }
      aspect = TARGET_ASPECT;
    }
    frame.style.width = `${w}px`;
    frame.style.height = `${h}px`;
    renderer.setSize(w, h, false); // false: keep the canvas's 100% CSS size
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    innerLine.style.inset = `${Math.max(8, Math.round(Math.min(w, h) * 0.02))}px`;
    // cap the title by width too, so it never overflows a narrow frame
    title.style.fontSize = `${Math.max(11, Math.min(Math.round(h * 0.034), Math.round(w * 0.045)))}px`;
    credit.style.fontSize = `${Math.max(9, Math.round(Math.min(h, w * 0.6) * 0.013))}px`;
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
    roll: 0, // camera roll (Dutch tilt) about the view axis
  };
  let from = { ...orbit };
  let to = { ...orbit };
  let legStart = 0;
  let legDur = 0.001; // first frame: instantly "arrive" and pick a real leg
  let holdUntil = 0;
  let holding = true;

  // A small repertoire of shot types (picked by weight) keeps the motion varied
  // and intentional rather than aimless drift. az always sweeps to a new angle.
  // never let the camera drop below the water (pool sits at ~y -11)
  const Y_FLOOR = -8;
  const pickLeg = (now: number) => {
    from = { ...orbit };
    const dir = Math.random() < 0.5 ? 1 : -1;
    // sometimes take the long way around — more than a full turn, slowed down
    const big = Math.random() < 0.25;
    const az = orbit.az + dir * (big ? rand(320 * DEG, 520 * DEG) : rand(60 * DEG, 220 * DEG));
    const r = Math.random();
    let el: number, dist: number, lookY: number, dur: number;
    if (r < 0.22) {
      // push-in: glide in close on the rings so a composition resolves
      el = rand(8 * DEG, 22 * DEG); dist = rand(58, 80); lookY = rand(0, 7); dur = rand(7, 11);
    } else if (r < 0.42) {
      // aerial: look down on the cog rings + the circular pool (not flat-on top)
      el = rand(52 * DEG, 78 * DEG); dist = rand(80, 118); lookY = rand(-3, 1); dur = rand(10, 16);
    } else if (r < 0.60) {
      // low: skim near the water and look up at the looming tower
      el = rand(-15 * DEG, 4 * DEG); dist = rand(58, 78); lookY = rand(6, 12); dur = rand(9, 14);
    } else {
      // mid orbit: the everyday three-quarter view
      el = rand(12 * DEG, 40 * DEG); dist = rand(DIST[0], DIST[1]); lookY = rand(LOOKY[0], LOOKY[1]); dur = rand(9, 16);
    }
    // clamp the downward angle so the camera can't dip below the pool surface
    el = Math.max(el, Math.asin(Y_FLOOR / dist));
    if (big) dur = Math.max(dur, rand(20, 30)); // keep the grand orbit calm
    // occasionally lean the horizon (Dutch tilt); usually upright
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
    if (orbit.roll) camera.rotateZ(orbit.roll); // lean about the view axis
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
      if (!holding) { orbit.az = to.az; orbit.el = to.el; orbit.dist = to.dist; orbit.lookY = to.lookY; orbit.roll = to.roll; holding = true; holdUntil = now + rand(1.5, 3); }
      else if (now >= holdUntil) pickLeg(now);
    } else {
      const t = smooth((now - legStart) / legDur);
      orbit.az = lerpN(from.az, to.az, t);
      orbit.el = lerpN(from.el, to.el, t);
      orbit.dist = lerpN(from.dist, to.dist, t);
      orbit.lookY = lerpN(from.lookY, to.lookY, t);
      orbit.roll = lerpN(from.roll, to.roll, t);
    }
    applyOrbit();

    // self re-render. The periodic "full" change ALTERNATES the pool's
    // reflection type (planar mirror <-> soft cube-map water) so the look keeps
    // visibly changing rather than risking the same roll twice; the frequent
    // "soft" change just re-rolls colours + patterns. Both keep the camera glide
    // going (soft render preserves modes + camera).
    if (now >= nextFull) {
      // reflection-type switching is disabled for now (cube-map hides the
      // fire); re-enable by flipping crisp here once that's fixed. Until then
      // this is just a slower full re-roll alongside the frequent soft one.
      crossfade(() => setCreation("fountain", true));
      nextFull = now + rand(180, 300);
      nextSoft = now + rand(30, 45);
    } else if (now >= nextSoft) {
      crossfade(() => setCreation("fountain", true));
      nextSoft = now + rand(30, 45);
    }
  };

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
