<template>
  <div id="scene-container" ref="sceneContainer"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

      // añade camaras

      const camera = new THREE.PerspectiveCamera(
        45,
        this.container.clientWidth / this.container.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 5, 10);
      this.camera = camera;

      // cra la escena
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("skyblue");

      // añade luces
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // color brillante
        0x222222, // color fondo tenue
        1 // intensity
      );
      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
      mainLight.position.set(10, 10, 10);
      this.scene.add(ambientLight, mainLight);

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

      loader.load("/three-assets/RobotExpressive.glb", (gltf) => {
        const model = gltf.scene;
        const animations = gltf.animations;

        this.mixer = new THREE.AnimationMixer(model);
        console.log(animations);

        const action = this.mixer.clipAction(animations[0]);
        action.play();

        this.scene.add(model);
        console.log(`modelo cargado`);
        model.position.set(-5, 3, 0);
        model.scale.set(0.7, 0.7, 0.7);
        model.needsUpdate = true;
      });
      this.render();
      // this.renderer.setAnimationLoop(() => {
      //   if (this.mixer) {
      //     // this.render();
      //     // console.log(` carga el modelo`);
      //   } else {
      //     console.log(`aun no se carga el modelo`);
      //   }
      // });
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
    render() {
      requestAnimationFrame(this.render);
      const delta = this.clock.getDelta();

      //  FIXME:Arreglar que renderice hasta que la carga del modelo sea ocmpletada

      //TODO:
      // - Ordenar Codigo
      // console.log(this.clock.getDelta());

      // if (this.mixer) {
      //   console.log(`mixer true en if`);
      //   this.mixer.update(0.001);
      // }
      // if (this.mixer) {
      //   this.mixer.update(delta);
      //   console.log("update mixer");
      // }
      // console.log(`estos es mixer ${this.mixer[1]}`);
      if (this.mixer.length != 0) {
        // console.log(this.mixer);
        for (let i = 0; i < 1; ++i) {
          // console.log("entro al for");
          this.mixer.update(delta);
          console.log(`mixer update true en for`);
          // this.mixer.update(0.000001 + 0.01);
        }
      }
      // console.log("salio al for");
      this.renderer.render(this.scene, this.camera);
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
