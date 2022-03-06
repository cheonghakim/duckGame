import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Floor, Player, Pillar, Glass, Bridge } from "./Stuff";
import { commonAttr, commonEnv } from "./Common";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function main() {
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  renderer.setClearAlpha(0.5);

  // Scene
  const scene = commonEnv.scene;

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(38, 8, 10);
  scene.add(camera);

  // Light
  const ambientLight = new THREE.AmbientLight(commonAttr.lightColor, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(commonAttr.lightColor, 1);
  directionalLight.position.x = 1;
  directionalLight.position.z = 2;
  scene.add(directionalLight);

  // Grid helper
  const gridHelper = new THREE.GridHelper();
  scene.add(gridHelper);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Mesh

  // Floor
  const floor = new Floor({
    imageSrc: "/models/background/floor1.glb",
    x: -20,
    rotationX: Math.PI * 0.5,
    rotationZ: -Math.PI,
  });

  const floor2 = new Floor({
    imageSrc: "/models/background/floor2.glb",
    x: 20,
    rotationX: Math.PI * 0.5,
    rotationZ: -Math.PI,
    // z: -5.92967,
  });

  // Player
  const player = new Player({
    imageSrc: "/models/player/character_bear.gltf",
  });

  // 그리기
  const clock = new THREE.Clock();

  function draw() {
    const delta = clock.getDelta();
    controls.update();

    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // 이벤트
  window.addEventListener("resize", setSize);

  draw();
}
