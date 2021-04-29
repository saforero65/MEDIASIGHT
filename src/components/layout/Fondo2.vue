<template>
  <div id="scene-container" ref="sceneContainer">
    <div  class="position-absolute">
      <div class="point point-0">
          <div class="label">1</div>
          <div class="text">Front and top screen with HUD aggregating terrain and battle informations.</div>
      </div>
      <div class="point point-1">
          <div class="label">2</div>
          <div class="text">Ventilation with air purifier and detection of environment toxicity.</div>
      </div>
      <div class="point point-2">
          <div class="label">3</div>
          <div class="text">Cameras supporting night vision and heat vision with automatic adjustment.</div>
      </div>
      <button class="MoverCamara" @click="Mover">Cámara</button>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "fondo2",
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      renderer: null,
      clock: null,
      mixer: [],
      model: null,
      Mover_Camara: false
    };
  },
  methods: {
    Mover() {     
      if(this.Mover_Camara)
      {
        this.camera.position.set(0, 2, 6);
      this.Mover_Camara = false;
      }
      else
      {
      this.camera.position.set(0, 0, 0);
      this.Mover_Camara = true;
      }
    },
    init() {
      // estabcer el container
      this.container = this.$refs.sceneContainer;

      //elemento clock para animacion
      this.clock = new THREE.Clock();

      // crear render
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.gammaFactor = 2.2;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.physicallyCorrectLights = true;
      this.container.appendChild(this.renderer.domElement);

      // cra la escena
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("skyblue");

      // añade camaras
      const camera = new THREE.PerspectiveCamera(
        45,
        this.container.clientWidth / this.container.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 10, 3);
      camera.translateY(-10);
      this.camera = camera;

      //Orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
// // this.controls.enableDamping = true
//       this.controls.target.set(0, 0, 0); //Objetivo de la cámara

//       //this.controls.enablePan = false;
//       // this.controls.maxAzimuthAngle = [-2 * Math.PI, Math.PI / 2];
//       this.controls.maxPolarAngle = Math.PI / 2;
//       this.controls.minDistance = 1;
//       this.controls.maxDistance = 7;
this.controls.update();

      // añade luces
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // color brillante
        0x222222, // color fondo tenue
        1 // intensity
      );
      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
      mainLight.position.set(10, 10, 10);
      this.scene.add(ambientLight, mainLight);

      // establecer el aspecto respecto al tamaño de la ventana
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );

      //añadiendo modelo .glb
// let sceneReady = false
      const loader = new GLTFLoader();

      loader.load("/three-assets/Habitaciones_export.glb", (gltf) => {
        this.model = gltf.scene;
        const animations = gltf.animations;

        this.mixer = new THREE.AnimationMixer(this.model);
        console.log(animations);

        const action = this.mixer.clipAction(animations[0]);
        action.play();

        console.log(`modelo cargado`);
        this.model.position.set(-3, -2, -2);
        this.model.scale.set(5, 5, 5);
        this.scene.add(this.model);
        this.model.needsUpdate = true;
      });

// this.scene.add(overlay)

/**
 * Points of interest
 */
// const raycaster = new THREE.Raycaster()
// const points = [
//     {
//         position: new THREE.Vector3(-3, 3, 2),
//         element: document.querySelector(".point-0")
//     },
//     {
//         position: new THREE.Vector3(0.5, 0.8, - 1.6),
//         element: document.querySelector(".point-1")
//     },
//     {
//         position: new THREE.Vector3(1.6, - 1.3, - 0.7),
//         element: document.querySelector(".point-2")
//     }
// ]
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// const tick = () =>
// {
//     // Update controls
//     this.controls.update()

//     // Update points only when the scene is ready
//     if(sceneReady)
//     {
//         // Go through each point
//         for(const point of points)
//         {
//             // Get 2D screen position
//             const screenPosition = point.position.clone()
//             screenPosition.project(this.camera)
    
//             // Set the raycaster
//             raycaster.setFromCamera(screenPosition, this.camera)
//             const intersects = raycaster.intersectObjects(this.scene.children, true)
    
//             // No intersect found
//             if(intersects.length === 0)
//             {
//                 // Show
//                 point.element.classList.add('visible')
//             }

//             // Intersect found
//             else
//             {
//                 // Get the distance of the intersection and the distance of the point
//                 const intersectionDistance = intersects[0].distance
//                 const pointDistance = point.position.distanceTo(this.camera.position)
    
//                 // Intersection is close than the point
//                 if(intersectionDistance < pointDistance)
//                 {
//                     // Hide
//                     point.element.classList.remove('visible')
//                 }
//                 // Intersection is further than the point
//                 else
//                 {
//                     // Show
//                     point.element.classList.add('visible')
//                 }
//             }
    
//             const translateX = screenPosition.x * sizes.width * 0.5
//             const translateY = - screenPosition.y * sizes.height * 0.5
//             point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
//         }
//     }


//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }
// tick()
    this.render();
    },

    render() {
      requestAnimationFrame(this.render);
      const delta = this.clock.getDelta();

      if (this.mixer.length != 0) {
        this.mixer.update(delta);
        console.log(`mixer update true en for`);
      }

      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize: function () {
      console.log("resize");
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      
    // Update renderer
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    },

  },
  mounted() {
    this.init();

    window.addEventListener("resize", this.onWindowResize, false);
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scene-container {
  width: 100%;
  height: 100%;
}
.MoverCamara {
  position: fixed;
  bottom: 5%;
  right: 0;
}
</style>
