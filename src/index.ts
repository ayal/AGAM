import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
);

// const shiftY = -30;

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xc8c8c8));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Create an array to hold the cubes
const cubes = [];

const whiteProbabilities = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const blackProbabilities = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
whiteProbabilities[1] = 1 - whiteProbabilities[0];
blackProbabilities[1] = 1 - blackProbabilities[0];
whiteProbabilities[3] = 1 - whiteProbabilities[2];
blackProbabilities[3] = 1 - blackProbabilities[2];


// Create and position 10x10 cubes with random colors for each face
for (let i = -10; i < 10; i++) {
  for (let j = -10; j < 10; j++) {
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterials = [];

    // Generate random colors for each face of the cube
    for (let k = 0; k < 6; k++) {

      if (k === 4 || k === 5) {
        cubeMaterials.push(new THREE.MeshBasicMaterial({ color: 0xffffff })); // White
        continue;
      }
      // Adjusted probability: Increase the chances of selecting white or black
      if (Math.random() < whiteProbabilities[k]) {
        cubeMaterials.push(new THREE.MeshBasicMaterial({ color: 0xffffff })); // White
      } else if (Math.random() < blackProbabilities[k]) {
        cubeMaterials.push(new THREE.MeshBasicMaterial({ color: 0x000000 })); // Black
      } else {
        cubeMaterials.push(
          new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff }),
        );
      }
    }

    const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
    cube.position.set(i, i + 1, j + 0.5); // Position cubes evenly in a grid and offset along the Z-axis
    scene.add(cube);
    cubes.push(cube);
  }
}

camera.position.y = 22;
camera.position.x = -22;
camera.position.z = 0;


// Create OrbitControls for camera manipulation
const controls = new TrackballControls(camera, renderer.domElement);
controls.enableDamping = true; // Add damping effect for smoother movement

// Add rotation animation
const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  controls.update();
};

animate();

