<template>
  <div id="scene-container" ref="sceneContainer"></div>
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
    };
  },
  methods: {
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
      camera.position.set(0, 5, 10);
      this.camera = camera;

      //Orbit controls
      this.controls = new OrbitControls( camera, this.renderer.domElement );
			this.controls.target.set(0, 0, 0); //Objetivo de la cámara

      this.controls. enablePan = false;
      this.controls.maxAzimuthAngle = [-2*Math.PI, Math.PI/2];
      this.controls.maxPolarAngle = Math.PI / 2;
      this.controls.minDistance = 5;
      this.controls.maxDistance = 20;
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
      const loader = new GLTFLoader();

      loader.load("/three-assets/Habitaciones_export.glb", (gltf) => {
        const model = gltf.scene;
        const animations = gltf.animations;

        this.mixer = new THREE.AnimationMixer(model);
        console.log(animations);

        const action = this.mixer.clipAction(animations[0]);
        action.play();

        this.scene.add(model);
        console.log(`modelo cargado`);
        model.position.set(0, 0, 0);
        model.scale.set(5, 5, 5);
        model.needsUpdate = true;
      });
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
  height: 100vh;
}
</style>
