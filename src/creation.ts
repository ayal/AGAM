import * as THREE from "three";

// A switchable artwork. Each creation builds a THREE.Group and suggests a
// camera position; index.ts handles the shared scene, controls and switching.
// A feature toggle a creation exposes (shown as a sub-button in the UI).
export interface Toggle {
  label: string;
  initial: boolean;
  set: (on: boolean) => void;
}

export interface Creation {
  name: string;
  group: THREE.Group;
  camera: [number, number, number]; // suggested camera position
  background?: number; // optional scene clear color (defaults to gallery cream)
  // per-frame animation; `env` gives access to the shared renderer/scene (e.g.
  // for off-screen reflection captures).
  update?: (
    time: number,
    autoRotate: boolean,
    env?: {
      renderer: THREE.WebGLRenderer;
      scene: THREE.Scene;
      camera?: THREE.Camera;
      // false = don't spin the whole group (auto/kiosk mode orbits the camera
      // instead, so the group should hold still while the rings keep spinning).
      spinGroup?: boolean;
    },
  ) => void;
  toggles?: Toggle[]; // optional feature toggles (e.g. fire / water / music)
  status?: () => string;    // optional one-line HUD (e.g. the simulated clock)
  dayCount?: () => number;  // increments each simulated midnight — used to schedule pattern changes
  dispose?: () => void;     // tear down any DOM/listeners it added
}

export type CreationFactory = () => Creation;
