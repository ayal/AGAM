import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
);

// const shiftY = -30;

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xc8c8c8));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Create an array to hold the cubes
const cubes = [];

// Create and position 10x10 cubes with random colors for each face
for (let i = -10; i < 10; i++) {
  for (let j = -10; j < 10; j++) {
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterials = [];

    // Generate random colors for each face of the cube
    for (let k = 0; k < 6; k++) {
      // Adjusted probability: Increase the chances of selecting white or black
      if (Math.random() < 0.6) {
        cubeMaterials.push(new THREE.MeshBasicMaterial({ color: 0xffffff })); // White
      } else if (Math.random() < 0.6) {
        cubeMaterials.push(new THREE.MeshBasicMaterial({ color: 0x000000 })); // Black
      } else {
        cubeMaterials.push(
          new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff }),
        );
      }
    }

    const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
    cube.position.set(i, i, j); // Position cubes evenly in a grid and offset along the Z-axis
    scene.add(cube);
    cubes.push(cube);
  }
}

camera.position.y = 22;
camera.position.x = -22;
camera.position.z = 0;


// Create OrbitControls for camera manipulation
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Add damping effect for smoother movement

// Add rotation animation
const animate = () => {
  requestAnimationFrame(animate);
 
  renderer.render(scene, camera);
  controls.update();   
};

animate();

