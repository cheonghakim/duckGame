import { commonMat, commonEnv } from "./Common";
import * as CANNON from "cannon-es";
import { AnimationMixer } from "three";

export class Stuff {
  constructor(data) {
    this.world = commonEnv.world;
    this.scene = commonEnv.scene;
    //position
    this.x = data.x || 0;
    this.y = data.y || 0;
    this.z = data.z || 0;
    //rotation
    this.rotationX = data.rotationX || 0;
    this.rotationY = data.rotationY || 0;
    this.rotationZ = data.rotationZ || 0;
    //transition
    this.width = data.width || 1;
    this.height = data.height || 1;
    this.depth = data.depth || 1;
    //file loader
    this.gltfLoader = commonEnv.gltfLoader;
    this.fbxLoader = commonEnv.fbxLoader;
    this.imageSrc = data.imageSrc;
    //cannon attributes
    this.mass = data.math || 0;
    this.canonMaterial = data.canonMaterial || commonMat.defaultMaterial;
  }

  setCannonBoxBody() {
    this.cannonBody = new CANNON.Body({
      shape: new CANNON.Box(
        new CANNON.Vec3(this.width / 2, this.height / 2, this.depth / 2)
      ),
      mass: this.mass,
      material: this.canonMaterial,
      position: new CANNON.Vec3(this.x, this.y, this.z),
    });
    this.world.addBody(this.cannonBody);
  }
}

export class Floor extends Stuff {
  constructor(data) {
    super(data);
    this.gltfLoader.load(this.imageSrc, (glb) => {
      this.modelMesh = glb.scene.children[0];
      this.modelMesh.position.set(this.x, this.y, this.z);
      this.modelMesh.rotation.set(
        this.rotationX,
        this.rotationY,
        this.rotationZ
      );
      this.modelMesh.castShadow = true;
      this.scene.add(this.modelMesh);

      this.width = this.modelMesh.width;
      this.height = this.modelMesh.height;
      this.depth = this.modelMesh.depth;
      this.setCannonBoxBody();
    });
  }
}

export class Pillar extends Stuff {
  constructor(data) {
    super(data);
  }
}

export class Bridge extends Stuff {
  constructor(data) {
    super(data);
  }
}

export class Glass extends Stuff {
  constructor(data) {
    super(data);
  }
}
