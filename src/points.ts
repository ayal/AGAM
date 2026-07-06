import * as THREE from "three";

// Soft round radial sprite shared by every particle system (water jets,
// splashes, smoke, embers) — a bare THREE.Points renders hard SQUARES
// without a map, which is what the water drops used to look like.
export function makeSoftSprite(): THREE.CanvasTexture {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(c);
}

// Tighter sprite for water droplets and sparks: a solid core with a short
// falloff, so drops read as beads rather than blur. (The fully-soft sprite
// above is right for smoke, but smears at droplet sizes.)
export function makeDropSprite(): THREE.CanvasTexture {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.55, "rgba(255,255,255,0.95)");
  g.addColorStop(0.78, "rgba(255,255,255,0.3)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(c);
}

// Points shader with PER-PARTICLE world-space size, alpha and color.
// PointsMaterial only offers one size/opacity for the whole cloud, but
// particles that fade in/out over their life (smoke, splashes, embers) need
// their own alpha, and varied drop sizes make the water read as spray.
// uScale must track the drawing-buffer height (set once per frame).
export function makeParticleMaterial(map: THREE.Texture): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uMap: { value: map },
      uOpacity: { value: 1 },
      uScale: { value: 800 },
    },
    transparent: true,
    depthWrite: false,
    vertexShader: `
      attribute float aSize;
      attribute float aAlpha;
      attribute vec3 aColor;
      uniform float uScale;
      varying float vAlpha;
      varying vec3 vColor;
      void main(){
        vAlpha = aAlpha;
        vColor = aColor;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale / max(0.1, -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform sampler2D uMap;
      uniform float uOpacity;
      varying float vAlpha;
      varying vec3 vColor;
      void main(){
        float a = texture2D(uMap, gl_PointCoord).a;
        if (a < 0.01) discard;
        gl_FragColor = vec4(vColor, a * vAlpha * uOpacity);
      }
    `,
  });
}
