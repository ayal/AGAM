/// <reference types="vite/client" />
import * as THREE from "three";
import { CREAM, pick } from "../palette";
import { GRID, makeFaceTexture } from "../patterns";
import type { Creation } from "../creation";

// The "Agamograph": a field of offset cubes whose faces carry the canvas
// compositions; the hidden images resolve as you orbit (venetian reveal).
export function createAgamograph(): Creation {
  const group = new THREE.Group();

  // BoxGeometry material order: [+x, -x, +y, -y, +z, -z]. +z/-z stay cream.
  //  - heart on a +x/-x side face (reveals head-on, upright)
  //  - circle on the OTHER side face
  //  - exactly ONE side per render is pure black & white
  const heartFace = pick([0, 1]);
  const circleFace = heartFace === 0 ? 1 : 0;
  const monoFace = pick([0, 1, 2, 3]);
  const faceMats: THREE.MeshBasicMaterial[] = [];
  for (let k = 0; k < 4; k++) {
    faceMats[k] = new THREE.MeshBasicMaterial({
      map: makeFaceTexture(k === heartFace, k === monoFace, k === circleFace),
    });
  }
  const creamMat = new THREE.MeshBasicMaterial({ color: CREAM });

  for (let i = -10; i < 10; i++) {
    for (let j = -10; j < 10; j++) {
      const geo = new THREE.BoxGeometry();
      const uv = geo.attributes.uv as THREE.BufferAttribute;
      const gi = i + 10;
      const gj = j + 10;
      const a = gj / GRID;
      const b = (gj + 1) / GRID;
      const c = gi / GRID;
      const d = (gi + 1) / GRID;
      // each face orients (u,v) along different world axes — assign per face
      uv.setXY(0, b, d); uv.setXY(1, a, d); uv.setXY(2, b, c); uv.setXY(3, a, c);   // +x
      uv.setXY(4, a, d); uv.setXY(5, b, d); uv.setXY(6, a, c); uv.setXY(7, b, c);   // -x
      uv.setXY(8, c, a); uv.setXY(9, d, a); uv.setXY(10, c, b); uv.setXY(11, d, b); // +y
      uv.setXY(12, c, b); uv.setXY(13, d, b); uv.setXY(14, c, a); uv.setXY(15, d, a); // -y
      uv.needsUpdate = true;
      const cube = new THREE.Mesh(geo, [
        faceMats[0], faceMats[1], faceMats[2], faceMats[3], creamMat, creamMat,
      ]);
      cube.position.set(i, i + 1, j + 0.5);
      group.add(cube);
    }
  }

  // Debug (local dev only): download all four side compositions as one image.
  let btn: HTMLButtonElement | undefined;
  if (import.meta.env.DEV) {
    btn = document.createElement("button");
    btn.textContent = "⬇ download sides";
    btn.style.cssText =
      "position:fixed;bottom:12px;left:12px;z-index:9999;padding:8px 12px;" +
      "font:14px sans-serif;border:1px solid #333;background:#fff;" +
      "cursor:pointer;border-radius:6px";
    document.body.appendChild(btn);
    btn.onclick = () => {
      const S = 300, pad = 16, labelH = 26;
      const out = document.createElement("canvas");
      out.width = 4 * S + 5 * pad;
      out.height = S + labelH + 2 * pad;
      const o = out.getContext("2d")!;
      o.fillStyle = "#ffffff";
      o.fillRect(0, 0, out.width, out.height);
      o.fillStyle = "#000";
      o.font = "13px sans-serif";
      const names = ["face0 +x", "face1 -x", "face2 +y", "face3 -y"];
      for (let k = 0; k < 4; k++) {
        const img = (faceMats[k].map as THREE.CanvasTexture).image as HTMLCanvasElement;
        const x = pad + k * (S + pad);
        const y = labelH + pad;
        o.drawImage(img, x, y, S, S);
        o.strokeStyle = "#999";
        o.strokeRect(x, y, S, S);
        let tag = names[k];
        if (k === heartFace) tag += " · HEART";
        if (k === circleFace) tag += " · CIRCLE";
        o.fillText(tag, x, labelH - 8);
      }
      const a = document.createElement("a");
      a.download = "agam-sides.png";
      a.href = out.toDataURL("image/png");
      a.click();
    };
  }

  return {
    name: "Agamograph",
    group,
    camera: [-30, 30, 0],
    update: (_t, autoRotate) => {
      if (autoRotate) group.rotation.y += 0.0006;
    },
    dispose: () => btn?.remove(),
  };
}
