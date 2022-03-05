import { Scene, BoxGeometry, SphereGeometry, MeshPhongMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const commonEnv = {
  scene: new Scene(),
  gltfLoader: new GLTFLoader(),
};

export const commonAttr = {
  backgroundColor: "#3e1322",
  lightColor: "#ffe9ac",
  lightOffColor: "#222",
};

export const commonGeo = {};

export const commonMat = {};
