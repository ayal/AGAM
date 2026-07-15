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

// One stylesheet fetch for the whole menu (only when the overlay is active):
// Cormorant Garamond (engraved serif), Space Grotesk (minimal sans),
// Space Mono (exhibit label), Anton (poster display).
const FONT_URL =
  "https://fonts.googleapis.com/css2" +
  "?family=Anton" +
  "&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300" +
  "&family=Space+Grotesk:wght@300;400" +
  "&family=Space+Mono" +
  "&display=swap";
const FAMS: Record<string, string> = {
  serif: "font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif;",
  grotesk: "font-family:'Space Grotesk','Helvetica Neue',Arial,sans-serif;",
  mono: "font-family:'Space Mono',ui-monospace,Menlo,monospace;",
  poster: "font-family:'Anton',Impact,'Arial Narrow',sans-serif;font-weight:400;",
};
const VARIANTS = ["top", "topbottom", "corners", "grotesk", "mono", "poster", "side"];

export function mountTypography(
  parent: HTMLElement,
  fixed: boolean, // regular mode overlays the page; kiosk overlays the frame
  params: URLSearchParams,
): void {
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
        el(years, fam("serif") + ls(0.3) + fs(14, 2.3) + "margin-top:.25em;"),
      ]),
      topbottom: () => [
        ...stack("top:3.4%;left:0;right:0;text-align:center;", [
          el(name, fam("serif") + ls(0.1) + fs(26, 4.6)),
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
        el(years, fam("mono") + ls(0.25) + fs(11, 1.7) + "margin-top:.2em;", 0.75),
      ]),
      // display-type poster block, anchored bottom-left
      poster: () => stack(`bottom:${posterBottom};left:3%;`, [
        el(name, fam("poster") + ls(0.03) + "line-height:1;" + fs(34, 7), 0.85),
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
    put("name", state.name, NAME_DEFAULT);
    put("work", state.work, WORK_DEFAULT);
    put("years", state.years, YEARS_DEFAULT);
    history.replaceState(null, "", "?" + q.toString());
  };
  sync(); // normalize the URL on entry (e.g. text=pick → text=top)

  const panel = document.createElement("div");
  panel.style.cssText =
    `position:${fixed ? "fixed" : "absolute"};top:${fixed ? "14px" : "2%"};right:${fixed ? "14px" : "2%"};` +
    `z-index:${fixed ? 10000 : 5};width:238px;padding:12px 14px 14px;border-radius:14px;` +
    "max-height:calc(100vh - 40px);overflow-y:auto;" +
    "background:rgba(246,244,238,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);" +
    "box-shadow:0 2px 14px rgba(0,0,0,.18);font:12px 'Helvetica Neue',Arial,sans-serif;" +
    "color:#1d1d1f;pointer-events:auto;";
  const ctl =
    "width:100%;box-sizing:border-box;margin:2px 0 8px;font:12px 'Helvetica Neue',Arial,sans-serif;" +
    "accent-color:#1d1d1f;";
  const lbl = "display:flex;justify-content:space-between;color:#5b5e63;letter-spacing:.04em;";
  const pct = (v: number) => Math.round(v * 100) + "%";
  const sel = (k: string, cur: string, opts: [string, string][]) =>
    `<select data-k="${k}" style="${ctl}">` +
    opts.map(([v, l]) => `<option value="${v}"${v === cur ? " selected" : ""}>${l}</option>`).join("") +
    "</select>";
  panel.innerHTML =
    '<div style="font-weight:600;letter-spacing:.08em;margin-bottom:10px;">TEXT DESIGN</div>' +
    `<div style="${lbl}">layout</div>` +
    sel("variant", state.variant, VARIANTS.map((v) => [v, v] as [string, string])) +
    `<div style="${lbl}">font</div>` +
    sel("font", state.font, [
      ["auto", "auto (per layout)"], ["serif", "serif · Cormorant"],
      ["grotesk", "sans · Space Grotesk"], ["mono", "mono · Space Mono"], ["poster", "display · Anton"],
    ]) +
    `<div style="${lbl}">weight</div>` +
    sel("weight", state.weight, [["200", "extralight"], ["300", "light"], ["400", "regular"]]) +
    `<div style="${lbl}">case</div>` +
    sel("tcase", state.tcase, [
      ["none", "as written"], ["lower", "lowercase"], ["upper", "UPPERCASE"], ["smallcaps", "small caps"],
    ]) +
    `<div style="${lbl}">color</div>` +
    sel("tint", state.tint, [["white", "white"], ["cream", "cream"], ["gold", "gold"], ["ink", "ink"]]) +
    `<div style="${lbl}">blend</div>` +
    sel("blend", state.blend, [
      ["none", "none"], ["overlay", "overlay"], ["soft-light", "soft light"], ["difference", "difference"],
    ]) +
    `<div style="${lbl}">size <span data-v="scale">${pct(state.scale)}</span></div>` +
    `<input data-k="scale" type="range" min="40" max="250" step="5" value="${state.scale * 100}" style="${ctl}">` +
    `<div style="${lbl}">tracking <span data-v="track">${pct(state.track)}</span></div>` +
    `<input data-k="track" type="range" min="0" max="300" step="10" value="${state.track * 100}" style="${ctl}">` +
    `<div style="${lbl}">opacity <span data-v="alpha">${pct(state.alpha)}</span></div>` +
    `<input data-k="alpha" type="range" min="10" max="100" step="5" value="${state.alpha * 100}" style="${ctl}">` +
    `<div style="${lbl}">shadow <span data-v="shadow">${pct(state.shadow)}</span></div>` +
    `<input data-k="shadow" type="range" min="0" max="100" step="5" value="${state.shadow * 100}" style="${ctl}">` +
    `<div style="${lbl}">name</div><input data-k="name" value="${state.name}" style="${ctl}">` +
    `<div style="${lbl}">work</div><input data-k="work" value="${state.work}" style="${ctl}">` +
    `<div style="${lbl}">years</div><input data-k="years" value="${state.years}" style="${ctl}">` +
    '<div style="display:flex;gap:6px;">' +
    '<button data-copy style="flex:1;padding:7px 0;border:none;border-radius:9px;cursor:pointer;' +
    "background:#1d1d1f;color:#f6f4ee;font:12px 'Helvetica Neue',Arial,sans-serif;letter-spacing:.06em;\">" +
    "copy design link</button>" +
    '<button data-random title="roll a random design" style="padding:7px 10px;border:1px solid #c9cbce;' +
    "border-radius:9px;cursor:pointer;background:none;color:#1d1d1f;" +
    "font:12px 'Helvetica Neue',Arial,sans-serif;letter-spacing:.06em;\">random</button>" +
    '<button data-reset title="back to defaults" style="padding:7px 10px;border:1px solid #c9cbce;' +
    "border-radius:9px;cursor:pointer;background:none;color:#1d1d1f;" +
    "font:12px 'Helvetica Neue',Arial,sans-serif;letter-spacing:.06em;\">reset</button></div>" +
    '<div style="margin-top:7px;color:#8a8d92;font-size:10.5px;line-height:1.5;">' +
    "every change updates the URL — send it to share this exact design</div>";
  parent.appendChild(panel);

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
    state.font = pickOne(["auto", "serif", "grotesk", "mono", "poster"]);
    state.weight = pickOne(["200", "300", "400"]);
    state.tcase = pickOne(["none", "lower", "upper", "smallcaps"]);
    state.tint = pickOne(["white", "cream", "gold"]);
    state.blend = pickOne(["none", "none", "overlay", "soft-light", "difference"]); // none weighted 2×
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
    for (const k of ["text", "tf", "ts", "tt", "to", "tw", "tc", "th", "tb", "td", "name", "work", "years"])
      q.delete(k);
    location.href = location.pathname + "?" + q.toString();
  };
}
