import * as THREE from "three";

// A switchable artwork. Each creation builds a THREE.Group and suggests a
// camera position; index.ts handles the shared scene, controls and switching.
export interface Creation {
  name: string;
  group: THREE.Group;
  camera: [number, number, number]; // suggested camera position
  dispose?: () => void; // tear down any DOM/listeners it added
}

export type CreationFactory = () => Creation;
