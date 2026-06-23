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
  update?: (time: number, autoRotate: boolean) => void; // per-frame animation
  toggles?: Toggle[]; // optional feature toggles (e.g. fire / water / music)
  dispose?: () => void; // tear down any DOM/listeners it added
}

export type CreationFactory = () => Creation;
