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

// GLSL simplex noise by Ian McEwan, Ashima Arts (MIT, github.com/ashima/webgl-noise).
const SIMPLEX = /* glsl */ `
  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
  float simplex3(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

export interface Clouds {
  points: THREE.Points;
  // once per frame: `key` is the fountain's sun-following directional light
  // (for colour only), `sunDir` is its TRUE world direction (unclamped —
  // the key light itself is clamped above the horizon so it can't gate night)
  update: (renderer: THREE.WebGLRenderer, key: THREE.DirectionalLight, dayL: number, duskL: number, sunDir: THREE.Vector3, dt: number) => void;
  dispose: () => void;
}

// A cloud shell around the planet: big wispy sprite masses (the reference's
// actual cloud.png, an MIT wisp-cumulus alpha texture, vendored into public/)
// gated by a live weather-noise field so they read as slowly-evolving weather
// systems, not confetti. Lit per-sprite by angle to the true sun direction —
// day side glows white, dusk sun-facing sprites catch orange, night stays a
// faint gray mist (never fully black against space).
export function createClouds(radius: number, poolY: number): Clouds {
  const cloudTex = new THREE.TextureLoader().load("cloud.png");
  const cloudMat = new THREE.ShaderMaterial({
    uniforms: {
      uMap: { value: cloudTex },
      uScale: { value: 800 }, // drawing-buffer height (set per frame)
      uSun: { value: new THREE.Vector3(0, 1, 0) }, // world-space TRUE sun direction
      uSunCol: { value: new THREE.Color(1, 1, 1) },// key light colour (amber at dusk)
      uSunI: { value: 1 },                         // sun term gate: 0 at night, 1 by day/dusk
      uCenter: { value: new THREE.Vector3() },     // world-space planet centre
      uDay: { value: 1 },                          // daylight 0..1 (ambient floor)
      uDusk: { value: 0 },                         // sun-near-horizon 0..1 (orange soak)
      uTime: { value: 0 },                         // weather drift
    },
    transparent: true,
    depthWrite: false,
    vertexShader: `
      attribute float aSize;
      attribute float aRot;
      uniform float uScale;
      uniform vec3 uSun;
      uniform vec3 uSunCol;
      uniform float uSunI;
      uniform vec3 uCenter;
      uniform float uDay;
      uniform float uDusk;
      uniform float uTime;
      varying float vAlpha;
      varying vec3 vColor;
      varying float vRot;
      varying float vSeed;
      ${SIMPLEX}
      void main(){
        vec3 world = (modelMatrix * vec4(position, 1.0)).xyz;
        vec3 rel = world - uCenter;
        // ONE broad noise octave; alpha is just clamp(n) — a soft 0..1 ramp
        // over the whole amplitude (a steep smoothstep gate here made
        // crisp-edged "systems" that read as popcorn instead of mist)
        float n = simplex3(rel / 130.0 + uTime * 0.02);
        vAlpha = 0.38 * clamp(n, 0.0, 1.0);
        vRot = aRot + n * 2.0; // the field also twists the sprite — free variety
        vSeed = aRot; // STATIC per-sprite dither seed — see the fragment shader
        float sunL = max(0.0, dot(normalize(rel), uSun));
        // pow lifts mid angles (most of the day side reads bright, not just
        // the subsolar point); uSunI kills the term at night — without it the
        // whole night veil glowed amber, since clouds ignore key.intensity
        float lit = pow(sunL, 0.6) * uSunI;
        float floorL = 0.22 + 0.48 * uDay; // never black, but a faint gray at night
        // lit ridges overshoot past 1 so the texture's dense cores clip to
        // actual white (a hard cap left even noon clouds a dirty gray)
        float bright = floorL + (1.3 - floorL) * lit;
        // ambient part stays neutral; the SUN part carries the key colour
        // (warm white at noon, amber near the horizon) deepened toward true
        // sunset orange as duskL peaks — so the sun-facing veil catches fire
        vec3 tint = uSunCol * mix(vec3(1.0), vec3(1.15, 0.62, 0.34), uDusk);
        vColor = min(vec3(1.0), vec3(floorL) + (bright - floorL) * tint);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = vAlpha < 0.01 ? 0.0 : aSize * uScale / max(0.1, -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform sampler2D uMap;
      varying float vAlpha;
      varying vec3 vColor;
      varying float vRot;
      varying float vSeed;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        uv = vec2(uv.x * cos(vRot) - uv.y * sin(vRot), uv.x * sin(vRot) + uv.y * cos(vRot)) + 0.5;
        float a = texture2D(uMap, uv).a;
        float alpha = a * vAlpha;
        if (alpha < 0.01) discard;
        // dither colour AND alpha, seeded per-sprite rather than just
        // per-pixel: a screen-only hash gives every stacked sprite layer at a
        // pixel the SAME offset, so the quantization error correlates across
        // layers instead of cancelling — the veil's smooth optical depth
        // gradient toward the limb terraces into rings that crawl as the
        // field drifts. The seed must be the STATIC aRot (via vSeed), never
        // the drifting vRot: the hash is chaotic, so a seed that moves with
        // the weather field re-rolls every sprite's noise pattern every
        // frame — ~30 stacked re-rolling layers read as full-veil shimmer.
        float dn = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + vSeed * 39.347) * 43758.5453);
        gl_FragColor = vec4(vColor + (dn - 0.5) * (2.0 / 255.0), alpha + (dn - 0.5) * (1.5 / 255.0));
      }
    `,
  });
  const verts: number[] = [], sizes: number[] = [], rots: number[] = [];
  let placed = 0;
  while (placed < 3000) {
    const v = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
    const l = v.length();
    if (l > 1 || l < 1e-4) continue;
    v.divideScalar(l);
    if (v.y > 0.85) continue; // keep the plaza sky clear (~31° cap)
    // shell thickness matters at the limb: at ONE aligned radius, the stacked
    // sprite envelopes seen edge-on read as concentric onion rings — spread
    // the radii wide (and bias low via the square) so no two arcs align
    v.multiplyScalar(radius + 6 + Math.pow(Math.random(), 2) * 34);
    verts.push(v.x, v.y, v.z);
    // HUGE wispy sprites (~⅓ of the planet radius each), heavily overlapped at
    // low alpha — the veil is continuous mist with dense white ridges, and no
    // individual sprite is ever readable
    sizes.push(90 + Math.random() * 80);
    rots.push(Math.random() * Math.PI * 2);
    placed++;
  }
  const cloudGeo = new THREE.BufferGeometry();
  cloudGeo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  cloudGeo.setAttribute("aSize", new THREE.Float32BufferAttribute(sizes, 1));
  cloudGeo.setAttribute("aRot", new THREE.Float32BufferAttribute(rots, 1));
  const points = new THREE.Points(cloudGeo, cloudMat);
  points.renderOrder = 2; // after the planet, the veil is the outermost layer
  // same offset as createPlanet's mesh, so the shell is centred on the planet
  points.position.y = poolY - radius - 0.6;

  const center = new THREE.Vector3();
  return {
    points,
    update: (renderer, key, dayL, duskL, sunDir, dt) => {
      cloudMat.uniforms.uScale.value = renderer.domElement.height;
      (cloudMat.uniforms.uSun.value as THREE.Vector3).copy(sunDir);
      (cloudMat.uniforms.uSunCol.value as THREE.Color).copy(key.color);
      cloudMat.uniforms.uSunI.value = Math.max(dayL, duskL);
      points.getWorldPosition(center);
      (cloudMat.uniforms.uCenter.value as THREE.Vector3).copy(center);
      cloudMat.uniforms.uDay.value = dayL;
      cloudMat.uniforms.uDusk.value = duskL;
      cloudMat.uniforms.uTime.value += dt; // weather field drift
      points.rotation.y += 0.006 * dt; // slow drift — weather, not machinery
    },
    dispose: () => {
      cloudTex.dispose();
      cloudMat.dispose();
    },
  };
}
