<template>
  <div class="home">
    <div id="container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      container: null,
    };
  },
  computed: {
    ...mapGetters({
      model: "getModel",
    }),
  },
  methods: {
    init: function () {
      this.container = document.getElementById("container");

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.container.appendChild(this.renderer.domElement);

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("black");
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.container.clientWidth / this.container.clientHeight,
        1,
        1000
      );
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.screenSpacePanning = true;

      var size = 10;
      var divisions = 10;

      var gridHelper = new THREE.GridHelper(size, divisions);
      gridHelper.position.y = -1.5;
      this.scene.add(gridHelper);

      const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
      // const helper = new THREE.HemisphereLightHelper(light, 5);
      this.scene.add(light);

      var directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight2.position.set(10, -10, 10);
      this.scene.add(directionalLight2);

      this.$store.dispatch("loadModel", "/three-assets/RobotExpressive.glb");

      this.camera.position.z = 5;
      // this.camera.position.x = 5;
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
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
    addModel: function () {
      this.$store.subscribe((mutation) => {
        switch (mutation.type) {
          case "setModel":
            this.scene.add(this.model);
            this.model.position.y = -1.5;
            this.model.position.x = -3.5;
            this.model.position.z = -3.5;
            break;
        }
      });
    },
  },
  mounted() {
    this.init();
    this.animate();
    this.addModel();

    window.addEventListener("resize", this.onWindowResize, false);
  },
};
</script>

<style >
#container {
  width: 100%;
  height: 100vh;
}
</style>
