import { Scene, BoxGeometry, SphereGeometry, MeshPhongMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import loadingManager from "./LoadingManager";
import { World } from "cannon-es";

export const commonEnv = {
  scene: new Scene(),
  world: new World(),
  gltfLoader: new GLTFLoader(loadingManager()),
  fbxLoader: new FBXLoader(loadingManager()),
  mixer: undefined,
};

export const commonAttr = {
  backgroundColor: "#3e1322",
  lightColor: "#ffe9ac",
  lightOffColor: "#222",
};

export const commonGeo = {};

export const commonMat = {};
