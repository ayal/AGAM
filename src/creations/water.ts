import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";

// The fountain's pool + basin. FLAT water disc (water can't drape a convex
// planet — a warped disc read as a wet decal), held in a raised concrete basin
// whose lip stands proud of the waterline and whose outer wall runs down past
// the curved ground, hiding the gap on every side. Flat is also what the crisp
// planar Reflector assumes (it mirrors across a plane).
//
// Two reflection styles (chosen at build time):
//   crisp  -> a sharp planar mirror of the fountain (Reflector)
//   !crisp -> a cube-map reflective water surface (soft / non-crisp)
export interface Pool {
  pool: THREE.Mesh;                    // the water surface (Reflector or Mesh)
  crisp: boolean;
  cubeCam: THREE.CubeCamera;           // feeds the non-crisp reflection
  cubeRT: THREE.WebGLCubeRenderTarget;
  waterMeshes: THREE.Object3D[];       // hidden during the cube capture
  basin: THREE.Group;                  // the concrete rim (lip + walls)
}

// `radius` is the water radius (maxR + amp + 6); `poolY` the waterline.
export function createPool(radius: number, poolY: number, crisp: boolean): Pool {
  // Cube map for the NON-crisp reflection mode (captured from the fountain's
  // centre each frame). Only used when the render isn't crisp.
  const cubeRT = new THREE.WebGLCubeRenderTarget(512);
  const cubeCam = new THREE.CubeCamera(0.5, 2000, cubeRT);
  cubeCam.position.y = poolY + 0.5; // just above the pool, so its upward view
  const waterMeshes: THREE.Object3D[] = []; // captures the fountain → the pool reflects it

  // Cube-map water material — the pool's soft/non-crisp reflective surface.
  const waterMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      envMap: { value: cubeRT.texture },
    },
    side: THREE.DoubleSide,
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main(){
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform samplerCube envMap;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main(){
        // summed directional ripples (no multiplicative blobs) → smooth flowing
        // water rather than isolated spots; low amplitude = subtle shimmer
        float w = sin(vUv.x * 7.0 + uTime * 0.5)
                + sin(vUv.y * 9.0 - uTime * 0.45)
                + 0.7 * sin((vUv.x + vUv.y) * 13.0 + uTime * 0.65)
                + 0.5 * sin((vUv.x - vUv.y) * 17.0 - uTime * 0.6);
        float m = clamp(0.5 + 0.1 * w, 0.0, 1.0);
        vec3 deep  = vec3(0.12, 0.36, 0.62);
        vec3 light = vec3(0.34, 0.66, 0.88);
        vec3 water = mix(deep, light, m);
        vec3 N = normalize(vWorldNormal + 0.012 * vec3(sin(vUv.y*18.0+uTime*1.3), 0.0, cos(vUv.x*18.0-uTime*1.1)));
        vec3 V = normalize(vWorldPos - cameraPosition);
        vec3 R = reflect(V, N);
        vec3 env = textureCube(envMap, R).rgb;
        float fres = 0.5 + 0.18 * pow(1.0 - abs(dot(N, -V)), 3.0); // stronger, more visible
        vec3 col = mix(water, env, fres);
        // anti-banding dither (dark water gradients step visibly on OLED)
        col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 160.0;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  const poolGeo = new THREE.CircleGeometry(radius, 96);
  let pool: THREE.Mesh;
  if (crisp) {
    const poolReflectShader = {
      uniforms: {
        color: { value: null },
        tDiffuse: { value: null },
        textureMatrix: { value: null },
        uTime: { value: 0 },
        // impact ripples: normalized radius where each jet ring's water lands,
        // and its strength (both driven per-frame from the jet pressure)
        uImpactR: { value: new THREE.Vector3(0.5, 0.55, 0.6) },
        uImpactA: { value: new THREE.Vector3(0, 0, 0) },
        uNight: { value: 0 }, // 0 = day, 1 = night (water darkens after dark)
        uSky: { value: new THREE.Color(0xccced0) }, // current sky, tints the water
      },
      vertexShader: `
        uniform mat4 textureMatrix;
        varying vec4 vUv;     // projective coords into the reflection texture
        varying vec2 vLocal;  // disc-local uv for the water ripple
        varying vec3 vWorldPos; // for the Fresnel view angle
        void main() {
          vLocal = uv;
          vUv = textureMatrix * vec4(position, 1.0);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform vec3 uImpactR;
        uniform vec3 uImpactA;
        uniform float uNight;
        uniform vec3 uSky;
        varying vec4 vUv;
        varying vec2 vLocal;
        varying vec3 vWorldPos;
        void main() {
          // summed directional ripples (no multiplicative blobs) → smooth
          // flowing water rather than isolated spots; low amplitude = subtle
          float w = sin(vLocal.x * 7.0 + uTime * 0.5)
                  + sin(vLocal.y * 9.0 - uTime * 0.45)
                  + 0.7 * sin((vLocal.x + vLocal.y) * 13.0 + uTime * 0.65)
                  + 0.5 * sin((vLocal.x - vLocal.y) * 17.0 - uTime * 0.6);
          // expanding rings around each jet-ring's landing radius, so the pool
          // visibly reacts where the falling water actually meets it
          float dc = length(vLocal - vec2(0.5)) * 2.0;
          float rings =
              uImpactA.x * exp(-24.0 * abs(dc - uImpactR.x)) * sin((dc - uImpactR.x) * 80.0 - uTime * 7.0)
            + uImpactA.y * exp(-24.0 * abs(dc - uImpactR.y)) * sin((dc - uImpactR.y) * 80.0 - uTime * 7.4)
            + uImpactA.z * exp(-24.0 * abs(dc - uImpactR.z)) * sin((dc - uImpactR.z) * 80.0 - uTime * 6.6);
          float m = clamp(0.5 + 0.1 * w + rings, 0.0, 1.0);
          vec3 deep  = vec3(0.12, 0.36, 0.62);
          vec3 light = vec3(0.34, 0.66, 0.88);
          // water takes the sky's tint (golden at dusk, blue-gray at night) and
          // darkens after dark — open water is mostly reflected sky
          vec3 water = mix(deep, light, m) * mix(1.0, 0.5, uNight);
          water = mix(water, uSky * 0.55, 0.22);
          vec2 ripple = vec2(sin(vLocal.y * 28.0 + uTime * 1.3),
                             cos(vLocal.x * 28.0 - uTime * 1.1)) * 0.006
                      + vec2(rings * 0.01);
          vec4 refl = texture2DProj(tDiffuse, vUv + vec4(ripple, 0.0, 0.0));
          // Fresnel: near-vertical views see into the water (deep colour),
          // grazing views become mostly mirror — like a real pool
          vec3 V = normalize(cameraPosition - vWorldPos);
          float fres = 0.18 + 0.55 * pow(1.0 - max(V.y, 0.0), 2.5);
          // contact shading: the water darkens toward the tower base, which
          // grounds the sculpture in the pool instead of floating on a disc
          float ao = 1.0 - 0.22 * smoothstep(0.95, 0.55, dc);
          vec3 col = mix(water, refl.rgb, fres) * ao;
          // anti-banding dither (dark water gradients step visibly on OLED)
          col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 160.0;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    };
    pool = new Reflector(poolGeo, {
      textureWidth: 1024,
      textureHeight: 1024,
      clipBias: 0.003,
      shader: poolReflectShader,
    });
  } else {
    pool = new THREE.Mesh(poolGeo, waterMat); // cube-map (non-crisp) water
  }
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = poolY;
  waterMeshes.push(pool);

  // basin rim: a low concrete ring that CONTAINS the water — the lip stands
  // proud of the waterline and the outer wall runs down past the curved ground
  // (which has dropped ~1.4 by the rim radius), hiding the gap under the flat
  // water on every side.
  const basin = new THREE.Group();
  {
    const rimW = 1.7;              // lip width
    const lipY = poolY + 0.6;      // lip top, proud of the water
    const wallB = poolY - 2.6;     // below the sphere surface at this radius
    const rimMat = new THREE.MeshLambertMaterial({
      color: 0x9a948a, // concrete, a touch lighter than the planet
      side: THREE.DoubleSide,
      dithering: true,
    });
    const outerWall = new THREE.Mesh(
      new THREE.CylinderGeometry(radius + rimW, radius + rimW, lipY - wallB, 96, 1, true),
      rimMat,
    );
    outerWall.position.y = (lipY + wallB) / 2;
    const innerWall = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, lipY - (poolY - 1), 96, 1, true),
      rimMat,
    );
    innerWall.position.y = (lipY + poolY - 1) / 2;
    const lip = new THREE.Mesh(new THREE.RingGeometry(radius, radius + rimW, 96), rimMat);
    lip.rotation.x = -Math.PI / 2;
    lip.position.y = lipY;
    basin.add(outerWall, innerWall, lip);
  }

  return { pool, crisp, cubeCam, cubeRT, waterMeshes, basin };
}
