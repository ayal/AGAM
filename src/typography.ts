// Memorial typography overlay: Yaacov Agam (1928–2026) and Fire and Water —
// the fountain this piece pays homage to — drawn over the art.
//
// Layout variants (?text=<variant>):
//   top | topbottom | corners | grotesk | mono | poster | side
//   ?text=cycle fades through all of them (~18s each)
//
// Designer mode (?design, works alongside any ?text=): a settings panel to
// tune the type live — variant, font, size, tracking, opacity, wording. Every
// change is written back into the URL (ts/tt/to/tf/text/name/work/years), so
// the address bar IS the design: the designer just copies the link (there's a
// button) and sends it, and that URL reproduces the exact look — drop the
// `design` param for the final kiosk URL.
const NAME_DEFAULT = "Yaacov Agam";
const WORK_DEFAULT = "Fire and Water";
const YEARS_DEFAULT = "1928–2026";

// One stylesheet fetch for the whole menu (only when the overlay is active).
// Google Fonts only downloads the binaries of families actually used, so the
// menu can stay broad: Cormorant (engraved serif), Fraunces (warm modern
// serif), Italiana (hairline display serif), Cinzel (Roman inscription caps —
// carved-in-stone register), Space Grotesk (minimal sans), Syne (arty
// geometric sans), Space Mono (exhibit label), Anton & Bebas (poster display).
const FONT_URL =
  "https://fonts.googleapis.com/css2" +
  "?family=Anton" +
  "&family=Bebas+Neue" +
  "&family=Cinzel:wght@400;500" +
  "&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300" +
  "&family=Fraunces:ital,wght@0,300;0,400;1,300" +
  "&family=Italiana" +
  "&family=Space+Grotesk:wght@300;400" +
  "&family=Space+Mono" +
  "&family=Syne:wght@400;500" +
  "&display=swap";
const FAMS: Record<string, string> = {
  serif: "font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif;",
  fraunces: "font-family:'Fraunces',Georgia,serif;",
  italiana: "font-family:'Italiana',Georgia,serif;",
  cinzel: "font-family:'Cinzel',Georgia,serif;",
  grotesk: "font-family:'Space Grotesk','Helvetica Neue',Arial,sans-serif;",
  syne: "font-family:'Syne','Helvetica Neue',Arial,sans-serif;",
  mono: "font-family:'Space Mono',ui-monospace,Menlo,monospace;",
  poster: "font-family:'Anton',Impact,'Arial Narrow',sans-serif;font-weight:400;",
  bebas: "font-family:'Bebas Neue',Impact,'Arial Narrow',sans-serif;font-weight:400;",
};
const VARIANTS = ["top", "topbottom", "corners", "grotesk", "mono", "poster", "side"];

export function mountTypography(
  parent: HTMLElement,
  fixed: boolean, // regular mode overlays the page; kiosk overlays the frame
  params: URLSearchParams,
  panelParent?: HTMLElement, // ?lobby: text goes on the 3D screen, but the
): void { //                    designer panel belongs on the page, not in the scene
  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = FONT_URL;
  document.head.appendChild(font);

  const design = params.has("design") || params.get("text") === "pick";
  const rawVariant = params.get("text") || "top";
  const state = {
    variant: VARIANTS.includes(rawVariant) ? rawVariant : rawVariant === "cycle" && !design ? "cycle" : "top",
    font: params.get("tf") || "auto", // auto = each variant's own family
    scale: Number(params.get("ts")) || 1, // font-size multiplier
    track: params.get("tt") !== null && !isNaN(Number(params.get("tt"))) ? Number(params.get("tt")) : 1,
    alpha: Number(params.get("to")) || 0.6, // text opacity
    weight: params.get("tw") || "300",
    tcase: params.get("tc") || "none", // none | lower | upper | smallcaps
    tint: params.get("th") || "white", // white | cream | gold | ink
    blend: params.get("tb") || "none", // none | overlay | soft-light | difference
    shadow: params.get("td") !== null && !isNaN(Number(params.get("td"))) ? Number(params.get("td")) : 1,
    italic: params.get("ti") || "0",
    rule: params.get("tr") || "none", // hairline ornament in stacked layouts
    name: params.get("name") || NAME_DEFAULT,
    work: params.get("work") || WORK_DEFAULT,
    years: params.get("years") || YEARS_DEFAULT,
  };

  // regular mode has the toolbar pill at the top-left and the HUD clock at the
  // bottom-left — inset away from them (kiosk has neither, edges stand)
  const topInset = fixed ? "max(3%, 60px)" : "3%";
  const posterBottom = fixed ? "8%" : "2.5%";

  // ---- style helpers, all driven by the designer state ---------------------
  // Sizes are vh-driven with px floors so the type scales up to the real
  // 4640×1760 screen instead of capping at laptop sizes.
  const fs = (px: number, vh: number) =>
    `font-size:max(${Math.round(px * state.scale)}px,${(vh * state.scale).toFixed(2)}vh);`;
  const ls = (em: number) => `letter-spacing:${(em * state.track).toFixed(3)}em;`;
  const indent = (em: number) => `text-indent:${(em * state.track).toFixed(3)}em;`;
  const fam = (def: keyof typeof FAMS) => (state.font !== "auto" && FAMS[state.font]) || FAMS[def];
  // Ghost tint with the HUD's soft shadow by default: present, but the art
  // dominates and it stays legible across the sky's whole day/night cycle.
  // The designer can retint, reweight, recase, blend into the art, or strip
  // the shadow entirely.
  const TINTS: Record<string, string> = {
    white: "255,255,255",
    cream: "246,240,226",
    gold: "226,196,148",
    ink: "26,26,28",
  };
  const CASES: Record<string, string> = {
    none: "",
    lower: "text-transform:lowercase;",
    upper: "text-transform:uppercase;",
    smallcaps: "font-variant:small-caps;",
  };
  const base = (alphaMul = 1) =>
    "position:absolute;pointer-events:none;user-select:none;" +
    `font-weight:${state.weight};line-height:1.25;` +
    `color:rgba(${TINTS[state.tint] ?? TINTS.white},${(state.alpha * alphaMul).toFixed(3)});` +
    (state.italic === "1" ? "font-style:italic;" : "") +
    (CASES[state.tcase] ?? "") +
    (state.blend !== "none" ? `mix-blend-mode:${state.blend};` : "") +
    (state.shadow > 0
      ? `text-shadow:0 1px 18px rgba(0,0,0,${(0.6 * state.shadow).toFixed(2)}),` +
        `0 0 4px rgba(0,0,0,${(0.35 * state.shadow).toFixed(2)});`
      : "");

  const el = (text: string, css: string, alphaMul = 1) => {
    const d = document.createElement("div");
    d.textContent = text;
    d.style.cssText = base(alphaMul) + css;
    return d;
  };
  const stack = (wrapCss: string, lines: HTMLElement[]) => {
    const w = el("", wrapCss);
    for (const l of lines) l.style.position = "static";
    w.append(...lines);
    return [w];
  };
  // optional hairline rule between lines in stacked layouts (engraved-plaque
  // ornament); inherits the current tint so it recolours with the text
  const ornament = (left = false) => {
    if (state.rule !== "rule") return [];
    const d = document.createElement("div");
    d.style.cssText =
      `width:2.8em;height:1px;background:rgba(${TINTS[state.tint] ?? TINTS.white},` +
      `${(state.alpha * 0.75).toFixed(3)});margin:.6em ${left ? "0" : "auto"} .5em;`;
    return [d];
  };

  // Bottom corner items sit at 9% so they clear the credit (kiosk bottom-right)
  // and the HUD clock (regular bottom-left); centred bottom text has no such
  // neighbour and can hug the edge.
  const layouts = (): Record<string, () => HTMLElement[]> => {
    const { name, work, years } = state;
    const [yearA, yearB = ""] = years.split(/[–—-]/);
    return {
      top: () => stack("top:3.4%;left:0;right:0;text-align:center;", [
        el(name, fam("serif") + ls(0.1) + fs(30, 5.4)),
        el(work, fam("serif") + "font-style:italic;" + ls(0.14) + fs(17, 2.9), 0.9),
        ...ornament(),
        el(years, fam("serif") + ls(0.3) + fs(14, 2.3) + "margin-top:.25em;"),
      ]),
      topbottom: () => [
        ...stack("top:3.4%;left:0;right:0;text-align:center;", [
          el(name, fam("serif") + ls(0.1) + fs(26, 4.6)),
          ...ornament(),
          el(work, fam("serif") + "font-style:italic;" + ls(0.14) + fs(16, 2.6), 0.9),
        ]),
        el(years, fam("serif") +
          "bottom:3.4%;left:0;right:0;text-align:center;" + ls(0.3) + fs(15, 2.6)),
      ],
      corners: () => [
        el(name, fam("serif") + `top:${topInset};left:2.4%;` + ls(0.1) + fs(22, 3.8)),
        el(work, fam("serif") + `top:${topInset};right:2.4%;font-style:italic;` + ls(0.12) + fs(20, 3.4)),
        el(yearA, fam("serif") + "bottom:9%;left:2.4%;" + ls(0.3) + fs(16, 2.7)),
        el(yearB || years, fam("serif") + "bottom:9%;right:2.4%;" + ls(0.3) + fs(16, 2.7)),
      ],
      // whisper-minimal: small sans, wide tracking, two quiet bands
      grotesk: () => [
        el(name, fam("grotesk") +
          "top:4%;left:0;right:0;text-align:center;" + ls(0.45) + indent(0.45) + fs(15, 2.5)),
        el(`${work} · ${years}`, fam("grotesk") +
          "bottom:4%;left:0;right:0;text-align:center;" + ls(0.35) + indent(0.35) + fs(12, 1.9), 0.8),
      ],
      // gallery exhibit label: small mono, bottom centre
      mono: () => stack("bottom:3.6%;left:0;right:0;text-align:center;", [
        el(name, fam("mono") + ls(0.08) + fs(13, 2.1)),
        el(work, fam("mono") + ls(0.14) + fs(12, 1.9), 0.85),
        ...ornament(),
        el(years, fam("mono") + ls(0.25) + fs(11, 1.7) + "margin-top:.2em;", 0.75),
      ]),
      // display-type poster block, anchored bottom-left
      poster: () => stack(`bottom:${posterBottom};left:3%;`, [
        el(name, fam("poster") + ls(0.03) + "line-height:1;" + fs(34, 7), 0.85),
        ...ornament(true),
        el(`${work} · ${years}`, fam("grotesk") + ls(0.3) + fs(13, 2) + "margin-top:.4em;", 0.85),
      ]),
      // vertical rails: name & work up the left edge, years up the right.
      // white-space:nowrap — vertical text wraps into a second column once the
      // tracked line outgrows the viewport height (it did on the 1760px screen)
      side: () => [
        el(`${name} · ${work}`, fam("grotesk") +
          "left:2%;top:50%;transform:translateY(-50%) rotate(180deg);writing-mode:vertical-rl;" +
          "white-space:nowrap;" + ls(0.4) + fs(13, 2.1)),
        el(years, fam("grotesk") +
          "right:2%;top:50%;transform:translateY(-50%) rotate(180deg);writing-mode:vertical-rl;" +
          "white-space:nowrap;" + ls(0.4) + fs(12, 1.9), 0.85),
      ],
    };
  };

  // Each variant lives in its own full-bleed group so cycle can crossfade
  // whole layouts. z-index 3 in the kiosk frame keeps it above the re-render
  // fader (z 2), like the credit — the text never dips with the art.
  const makeGroup = (key: string) => {
    const g = document.createElement("div");
    g.style.cssText =
      `position:${fixed ? "fixed" : "absolute"};inset:0;pointer-events:none;` +
      `z-index:${fixed ? 9999 : 3};transition:opacity 1200ms ease;`;
    for (const child of layouts()[key]()) g.appendChild(child);
    parent.appendChild(g);
    return g;
  };

  let groups: HTMLElement[] = [];
  const render = () => {
    for (const g of groups) g.remove();
    if (state.variant === "cycle") {
      groups = VARIANTS.map(makeGroup);
      groups.forEach((g, j) => (g.style.opacity = j === 0 ? "1" : "0"));
      let i = 0;
      setInterval(() => {
        groups[i].style.opacity = "0";
        i = (i + 1) % groups.length;
        groups[i].style.opacity = "1";
      }, 18_000);
    } else {
      groups = [makeGroup(state.variant)];
    }
  };
  render();
  if (!design) return;

  // ---- designer panel -------------------------------------------------------
  // Mirror every knob into the URL so the current address always reproduces
  // the current look; defaults are dropped to keep the link clean.
  const sync = () => {
    const q = new URLSearchParams(location.search);
    const put = (k: string, v: string, def: string) => (v === def ? q.delete(k) : q.set(k, v));
    q.set("text", state.variant);
    put("tf", state.font, "auto");
    put("ts", String(state.scale), "1");
    put("tt", String(state.track), "1");
    put("to", String(state.alpha), "0.6");
    put("tw", state.weight, "300");
    put("tc", state.tcase, "none");
    put("th", state.tint, "white");
    put("tb", state.blend, "none");
    put("td", String(state.shadow), "1");
    put("ti", state.italic, "0");
    put("tr", state.rule, "none");
    put("name", state.name, NAME_DEFAULT);
    put("work", state.work, WORK_DEFAULT);
    put("years", state.years, YEARS_DEFAULT);
    history.replaceState(null, "", "?" + q.toString());
  };
  sync(); // normalize the URL on entry (e.g. text=pick → text=top)

  // Dark glass inspector, set in Space Grotesk (already loaded for the art):
  // custom-styled selects/sliders/fields so it reads as part of the piece,
  // not a browser default form.
  const styleEl = document.createElement("style");
  styleEl.textContent = `
.tdp{width:266px;max-height:min(calc(100vh - 32px),94%);overflow-y:auto;padding:16px 16px 14px;border-radius:16px;
  color:#ececee;background:rgba(19,19,22,.72);backdrop-filter:blur(24px) saturate(1.4);
  -webkit-backdrop-filter:blur(24px) saturate(1.4);border:1px solid rgba(255,255,255,.09);
  box-shadow:0 12px 40px rgba(0,0,0,.38);pointer-events:auto;
  font:11.5px/1.4 'Space Grotesk','Helvetica Neue',Arial,sans-serif;
  transition:opacity .3s ease;}
.tdp:not(:hover):not(.dragging){opacity:.07;backdrop-filter:none;-webkit-backdrop-filter:none;
  background:none;box-shadow:none;}
.tdp h3{margin:0 0 12px;font-size:10.5px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#98989f;
  cursor:grab;user-select:none;touch-action:none;}
.tdp h3:active{cursor:grabbing;}
.tdp .grid{display:grid;grid-template-columns:1fr 1fr;gap:9px 8px;}
.tdp label{display:block;color:#84848d;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;}
.tdp .v{float:right;color:#cfcfd6;font-size:10px;letter-spacing:.04em;}
.tdp select,.tdp input[type=text]{width:100%;box-sizing:border-box;margin-top:4px;padding:6px 9px;
  background:rgba(255,255,255,.07);color:#ececee;border:1px solid rgba(255,255,255,.1);border-radius:8px;
  font:inherit;outline:none;appearance:none;-webkit-appearance:none;}
.tdp select{padding-right:22px;background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5"><path d="M0 0l4 5 4-5z" fill="%23909096"/></svg>');
  background-repeat:no-repeat;background-position:right 9px center;cursor:pointer;}
.tdp option{color:#141417;background:#fff;}
.tdp select:focus,.tdp input[type=text]:focus{border-color:rgba(255,255,255,.32);}
.tdp .sliders{margin-top:11px;}
.tdp .sliders label{margin-top:7px;}
.tdp input[type=range]{width:100%;height:20px;margin:1px 0 0;background:none;appearance:none;-webkit-appearance:none;cursor:pointer;}
.tdp input[type=range]::-webkit-slider-runnable-track{height:2px;border-radius:1px;background:rgba(255,255,255,.2);}
.tdp input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;
  background:#ececee;margin-top:-5px;box-shadow:0 1px 4px rgba(0,0,0,.45);}
.tdp input[type=range]::-moz-range-track{height:2px;background:rgba(255,255,255,.2);}
.tdp input[type=range]::-moz-range-thumb{width:12px;height:12px;border:none;border-radius:50%;background:#ececee;}
.tdp .words{margin-top:11px;display:grid;gap:8px;}
.tdp .actions{display:flex;gap:6px;margin-top:14px;}
.tdp button{border:none;cursor:pointer;border-radius:9px;padding:8px 10px;font:inherit;letter-spacing:.05em;
  transition:filter .15s ease;}
.tdp button:hover{filter:brightness(1.15);}
.tdp .primary{flex:1;background:#ececee;color:#141417;font-weight:500;}
.tdp .ghost{background:rgba(255,255,255,.08);color:#d9d9df;border:1px solid rgba(255,255,255,.13);}
.tdp .hint{margin-top:10px;color:#75757d;font-size:9.5px;line-height:1.55;letter-spacing:.05em;}
.tdp .fold{float:right;background:none;border:none;color:#98989f;cursor:pointer;padding:0 2px;
  margin:-3px -2px 0 0;font:13px/1 inherit;letter-spacing:0;}
.tdp .fold:hover{color:#ececee;}
.tdp-pill{padding:7px 13px;border-radius:999px;cursor:pointer;pointer-events:auto;
  color:#ececee;background:rgba(19,19,22,.72);backdrop-filter:blur(20px) saturate(1.4);
  -webkit-backdrop-filter:blur(20px) saturate(1.4);border:1px solid rgba(255,255,255,.12);
  box-shadow:0 6px 24px rgba(0,0,0,.35);font:12px 'Space Grotesk','Helvetica Neue',Arial,sans-serif;
  letter-spacing:.08em;}
.tdp-pill{transition:opacity .3s ease;}
.tdp-pill:not(:hover){opacity:.12;backdrop-filter:none;-webkit-backdrop-filter:none;
  background:none;box-shadow:none;}
.tdp-pill:hover{filter:brightness(1.2);}`;
  document.head.appendChild(styleEl);

  const host = panelParent ?? parent;
  const pFixed = panelParent ? true : fixed;
  const panel = document.createElement("div");
  panel.className = "tdp";
  panel.style.cssText =
    `position:${pFixed ? "fixed" : "absolute"};top:${pFixed ? "14px" : "2%"};right:${pFixed ? "14px" : "2%"};` +
    `z-index:${pFixed ? 10000 : 5};`;
  const pct = (v: number) => Math.round(v * 100) + "%";
  const sel = (label: string, k: string, cur: string, opts: [string, string][]) =>
    `<label>${label}<select data-k="${k}">` +
    opts.map(([v, l]) => `<option value="${v}"${v === cur ? " selected" : ""}>${l}</option>`).join("") +
    "</select></label>";
  const slider = (label: string, k: string, cur: number, min: number, max: number, step: number) =>
    `<label>${label}<span class="v" data-v="${k}">${pct(cur)}</span></label>` +
    `<input data-k="${k}" type="range" min="${min}" max="${max}" step="${step}" value="${cur * 100}">`;
  const field = (label: string, k: string, cur: string) =>
    `<label>${label}<input data-k="${k}" type="text" value="${cur}"></label>`;
  panel.innerHTML =
    '<h3>Text design<button class="fold" data-fold title="collapse panel">−</button></h3>' +
    '<div class="grid">' +
    sel("layout", "variant", state.variant, VARIANTS.map((v) => [v, v] as [string, string])) +
    sel("font", "font", state.font, [
      ["auto", "auto"], ["serif", "Cormorant"], ["fraunces", "Fraunces"], ["italiana", "Italiana"],
      ["cinzel", "Cinzel"], ["grotesk", "Grotesk"], ["syne", "Syne"], ["mono", "Mono"],
      ["poster", "Anton"], ["bebas", "Bebas"],
    ]) +
    sel("weight", "weight", state.weight, [["200", "extralight"], ["300", "light"], ["400", "regular"]]) +
    sel("case", "tcase", state.tcase, [
      ["none", "as written"], ["lower", "lowercase"], ["upper", "uppercase"], ["smallcaps", "small caps"],
    ]) +
    sel("color", "tint", state.tint, [["white", "white"], ["cream", "cream"], ["gold", "gold"], ["ink", "ink"]]) +
    sel("blend", "blend", state.blend, [
      ["none", "none"], ["overlay", "overlay"], ["soft-light", "soft light"], ["difference", "difference"],
    ]) +
    sel("style", "italic", state.italic, [["0", "roman"], ["1", "italic"]]) +
    sel("ornament", "rule", state.rule, [["none", "none"], ["rule", "hairline rule"]]) +
    "</div>" +
    '<div class="sliders">' +
    slider("size", "scale", state.scale, 40, 250, 5) +
    slider("tracking", "track", state.track, 0, 300, 10) +
    slider("opacity", "alpha", state.alpha, 10, 100, 5) +
    slider("shadow", "shadow", state.shadow, 0, 100, 5) +
    "</div>" +
    '<div class="words">' +
    field("name", "name", state.name) +
    field("work", "work", state.work) +
    field("years", "years", state.years) +
    "</div>" +
    '<div class="actions">' +
    '<button data-copy class="primary">copy design link</button>' +
    '<button data-random class="ghost" title="roll a random design">random</button>' +
    '<button data-reset class="ghost" title="back to defaults">reset</button>' +
    "</div>" +
    '<div class="hint">every change updates the URL — send it to share this exact design</div>';
  host.appendChild(panel);

  // collapse to a small chip so the panel can get out of the art's way;
  // design mode (and the URL) stay active — reopening is one click
  const pill = document.createElement("button");
  pill.className = "tdp-pill";
  pill.textContent = "Aa";
  pill.title = "open text design";
  pill.style.cssText = panel.style.cssText + "display:none;";
  host.appendChild(pill);
  (panel.querySelector("[data-fold]") as HTMLButtonElement).onclick = () => {
    // the chip takes over the panel's (possibly dragged) position
    pill.style.left = panel.style.left;
    pill.style.top = panel.style.top;
    pill.style.right = panel.style.right;
    panel.style.display = "none";
    pill.style.display = "block";
  };
  pill.onclick = () => {
    pill.style.display = "none";
    panel.style.display = "block";
  };

  // drag by the header to uncover whatever corner a layout uses
  const head = panel.querySelector("h3") as HTMLElement;
  let grab: { dx: number; dy: number } | null = null;
  const parentOrigin = () =>
    pFixed ? { left: 0, top: 0 } : host.getBoundingClientRect();
  head.addEventListener("pointerdown", (e) => {
    if ((e.target as HTMLElement).hasAttribute("data-fold")) return;
    const r = panel.getBoundingClientRect();
    grab = { dx: e.clientX - r.left, dy: e.clientY - r.top };
    panel.classList.add("dragging"); // stay opaque even if the pointer outruns the panel
    head.setPointerCapture(e.pointerId);
  });
  head.addEventListener("pointermove", (e) => {
    if (!grab) return;
    const o = parentOrigin();
    panel.style.left = `${e.clientX - grab.dx - o.left}px`;
    panel.style.top = `${e.clientY - grab.dy - o.top}px`;
    panel.style.right = "auto";
  });
  head.addEventListener("pointerup", () => {
    grab = null;
    panel.classList.remove("dragging");
  });

  panel.addEventListener("input", (e) => {
    const t = e.target as HTMLInputElement;
    const k = t.dataset.k as keyof typeof state | undefined;
    if (!k) return;
    if (k === "scale" || k === "track" || k === "alpha" || k === "shadow") {
      state[k] = Number(t.value) / 100;
      const v = panel.querySelector(`[data-v="${k}"]`);
      if (v) v.textContent = pct(state[k]);
    } else {
      state[k] = t.value;
    }
    render();
    sync();
  });
  const copyBtn = panel.querySelector("[data-copy]") as HTMLButtonElement;
  copyBtn.onclick = () => {
    navigator.clipboard?.writeText(location.href);
    copyBtn.textContent = "copied ✓";
    setTimeout(() => (copyBtn.textContent = "copy design link"), 1400);
  };
  // random: roll every knob (within tasteful ranges) — a fast way to stumble
  // onto a direction, then fine-tune. Content fields are left alone.
  const refreshControls = () => {
    panel.querySelectorAll<HTMLInputElement>("[data-k]").forEach((c) => {
      const v = state[c.dataset.k as keyof typeof state];
      c.value = typeof v === "number" ? String(v * 100) : v;
    });
    for (const k of ["scale", "track", "alpha", "shadow"] as const) {
      const s = panel.querySelector(`[data-v="${k}"]`);
      if (s) s.textContent = pct(state[k]);
    }
  };
  const pickOne = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
  const roll = (a: number, b: number, step: number) =>
    Number((Math.round((a + Math.random() * (b - a)) / step) * step).toFixed(2));
  (panel.querySelector("[data-random]") as HTMLButtonElement).onclick = () => {
    state.variant = pickOne(VARIANTS);
    state.font = pickOne(["auto", "serif", "fraunces", "italiana", "cinzel", "grotesk", "syne", "mono", "poster", "bebas"]);
    state.weight = pickOne(["200", "300", "400"]);
    state.tcase = pickOne(["none", "lower", "upper", "smallcaps"]);
    state.tint = pickOne(["white", "cream", "gold"]);
    state.blend = pickOne(["none", "none", "overlay", "soft-light", "difference"]); // none weighted 2×
    state.italic = pickOne(["0", "0", "0", "1"]); // roman weighted 3×
    state.rule = pickOne(["none", "none", "rule"]);
    state.scale = roll(0.7, 1.8, 0.05);
    state.track = roll(0.2, 2.5, 0.1);
    state.alpha = roll(0.35, 1, 0.05);
    state.shadow = roll(0, 1, 0.05);
    refreshControls();
    render();
    sync();
  };
  // reset: strip every type param (auto/near/design stay) and reload clean —
  // a reload guarantees state, URL and panel controls all match the defaults
  (panel.querySelector("[data-reset]") as HTMLButtonElement).onclick = () => {
    const q = new URLSearchParams(location.search);
    for (const k of ["text", "tf", "ts", "tt", "to", "tw", "tc", "th", "tb", "td", "ti", "tr", "name", "work", "years"])
      q.delete(k);
    location.href = location.pathname + "?" + q.toString();
  };
}
