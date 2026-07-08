import * as THREE from "three";

// The "background" is a real sky, not a flat clear colour: a big inward-facing
// sphere carries a horizon→zenith gradient (driven per-frame from the lights'
// day/dusk/night blends), a warm glow pooled around the sun at golden hour, and
// hashed stars that twinkle in after dark. The pool's mirror reflects it, so
// the water picks up the sky for free.
export interface SkyUniforms {
  [uniform: string]: THREE.IUniform; // ShaderMaterial.uniforms needs the index signature
  uZenith: { value: THREE.Color };
  uHorizon: { value: THREE.Color };
  uNight: { value: number };
  uTime: { value: number };
  uSunDir: { value: THREE.Vector3 };
  uGlow: { value: number };
}

export interface SkyDome {
  mesh: THREE.Mesh;
  uniforms: SkyUniforms;
}

// `skyR` is the celestial orbit radius; the dome is drawn well outside it.
export function createSkyDome(skyR: number): SkyDome {
  const uniforms: SkyUniforms = {
    uZenith: { value: new THREE.Color(0x2e6eb8) },
    uHorizon: { value: new THREE.Color(0xb8d4e8) },
    uNight: { value: 0 },
    uTime: { value: 0 },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uGlow: { value: 0 },
  };
  const skyMat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    vertexShader: `
      varying vec3 vDir;
      void main(){
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uZenith, uHorizon;
      uniform float uNight, uTime, uGlow;
      uniform vec3 uSunDir;
      varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        // full-sphere gradient, mirrored below the equator: haze band at the
        // middle fading to zenith toward BOTH poles. The old clamp(d.y)+pow
        // version was flat below y=0 and had infinite slope at y=0, which drew
        // a visible "second horizon" line in the sky above the planet's limb.
        // smoothstep(h)^0.75 keeps zero slope at the equator — no crease.
        float h = abs(d.y);
        float t = pow(h * h * (3.0 - 2.0 * h), 0.75);
        vec3 sky = mix(uHorizon, uZenith, t);
        // golden-hour glow pooled around the sun's azimuth
        float sunAmt = max(dot(d, uSunDir), 0.0);
        sky += uGlow * vec3(1.0, 0.48, 0.18) * pow(sunAmt, 5.0) * (1.0 - h * 0.8) * 0.65;
        // stars: a uniform 3D cell hash over the whole celestial sphere — no
        // atan seam, no pinching at the zenith, and identical density in every
        // direction; the opaque planet simply hides the ones behind its limb
        if (uNight > 0.02) {
          vec3 sc = d * 22.0;
          vec3 cell = floor(sc);
          float hs = fract(sin(dot(cell, vec3(127.1, 311.7, 74.7))) * 43758.5453);
          if (hs > 0.88) {
            vec3 sp = vec3(
              fract(sin(dot(cell + 7.0,  vec3(269.5, 183.3, 246.1))) * 43758.5453),
              fract(sin(dot(cell + 13.0, vec3(113.5, 271.9, 124.6))) * 43758.5453),
              fract(sin(dot(cell + 31.0, vec3(419.2, 371.9, 168.2))) * 43758.5453)
            ) * 0.6 + 0.2;
            float sd = length(fract(sc) - sp);
            float tw = 0.7 + 0.3 * sin(uTime * (2.0 + 4.0 * hs) + hs * 40.0);
            sky += smoothstep(0.10, 0.0, sd) * tw * uNight * (0.5 + 0.5 * hs) * vec3(0.85, 0.88, 0.95);
          }
        }
        // dither: ±1 LSB of screen-space noise breaks up 8-bit banding in the
        // smooth gradient — without it, dark dusk/night skies show visible
        // stepped bands (worst on OLED, and AirPlay compression amplifies them
        // into crawling blocks)
        float dn = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        sky += (dn - 0.5) / 160.0;
        gl_FragColor = vec4(sky, 1.0);
      }
    `,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(skyR * 2.6, 48, 32), skyMat);
  mesh.renderOrder = -1; // paint first; everything else draws over it
  mesh.frustumCulled = false; // the camera lives inside the sphere
  return { mesh, uniforms };
}
