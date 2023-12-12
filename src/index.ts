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


function brightenColor(hexColor, factor) {
  // Extract the red, green, and blue components
  const red = (hexColor >> 16) & 0xff;
  const green = (hexColor >> 8) & 0xff;
  const blue = hexColor & 0xff;

  // Calculate the new RGB values with the brightness factor
  const newRed = Math.min(255, red + factor);
  const newGreen = Math.min(255, green + factor);
  const newBlue = Math.min(255, blue + factor);

  // Combine the new RGB values to get the new color number
  const newColor = (newRed << 16) | (newGreen << 8) | newBlue;

  return newColor;
}


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
  // Calculate the mouse position in normalized device coordinates (NDC)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the raycaster's position based on the mouse coordinates
  raycaster.setFromCamera(mouse, camera);

  // Find the intersected objects
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
      // The first object in the intersects array is the one that was clicked
      const clickedMesh = intersects[0].object;
      //console.log('Clicked Mesh:', clickedMesh.position.x, clickedMesh.position.y, clickedMesh.position.z, clickedMesh.data);

  }
}

renderer.domElement.addEventListener('click', onMouseClick);


// Create an array to hold the cubes
const cubes = [];

// [backtop, frontbottom, frontop, backbottom, ...]
const whiteProbabilities = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const blackProbabilities = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
// between 0.5 and 0.8
const shouldColorBeTheSameProb  = Math.random() * (0.8 - 0.4) + 0.4;



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
    cube.data = {i,j};
   

    cube.position.set(i, i + 1, j + 0.5); // Position cubes evenly in a grid and offset along the Z-axis
    scene.add(cube);
    cubes.push(cube);


  }
}

// change colors based on the previous cube
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

   
///
      if (shouldColorBeTheSameProb > Math.random()) {
        // consider modulu if it's the first cube in the row
        const cubeOnTheLeft = cubes.find(cube => cube.data.i === i - 1 && cube.data.j === j);

        if (!cubeOnTheLeft) {
          continue;
        }

        const previousCubeMaterials = cubeOnTheLeft.material;
        // if white or black continue:
        if (previousCubeMaterials[k].color.getHex() === 0xffffff || previousCubeMaterials[k].color.getHex() === 0x000000) {
          continue;
        }

        const previousColor = previousCubeMaterials[k].color.getHex();
        const newColor = brightenColor(previousColor, Math.random() * 10);
        const newMaterials = new THREE.MeshBasicMaterial({ color: newColor });
        const currentCube = cubes.find(cube => cube.data.i === i && cube.data.j === j);
        currentCube.material[k] =  newMaterials
        continue;
      }

      if (shouldColorBeTheSameProb > Math.random()) {
        // consider modulu if it's the first cube in the row
        const cubeOneTheTop = cubes.find(cube => cube.data.i === i && cube.data.j === j - 1);

        if (!cubeOneTheTop) {
          continue;
        }

        const previousCubeMaterials = cubeOneTheTop.material;
         // if white or black continue:
         if (previousCubeMaterials[k].color.getHex() === 0xffffff || previousCubeMaterials[k].color.getHex() === 0x000000) {
          continue;
        }
        const previousColor = previousCubeMaterials[k].color.getHex();
        const newColor = brightenColor(previousColor, Math.random() * 10);
        const newMaterials = new THREE.MeshBasicMaterial({ color: newColor });
        const currentCube = cubes.find(cube => cube.data.i === i && cube.data.j === j);
        currentCube.material[k] =  newMaterials
        continue;
      }

      if (shouldColorBeTheSameProb > Math.random()) {
        // consider modulu if it's the first cube in the row
        const cubeOneTheTopLeft = cubes.find(cube => cube.data.i === i - 1 && cube.data.j === j - 1);

        if (!cubeOneTheTopLeft) {
          continue;
        }

        const previousCubeMaterials = cubeOneTheTopLeft.material;
         // if white or black continue:
         if (previousCubeMaterials[k].color.getHex() === 0xffffff || previousCubeMaterials[k].color.getHex() === 0x000000) {
          continue;
        }
        const previousColor = previousCubeMaterials[k].color.getHex();
        const newColor = brightenColor(previousColor, Math.random() * 10);
        const newMaterials = new THREE.MeshBasicMaterial({ color: newColor });
        const currentCube = cubes.find(cube => cube.data.i === i && cube.data.j === j);
        currentCube.material[k] =  newMaterials
        continue;
      }
      
    }



    

  }
}

camera.position.y = 30;
camera.position.x = -30;


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

