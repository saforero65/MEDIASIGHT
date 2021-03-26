<template>
  <div class="home">
    <div id="container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as Three from 'three';
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//import { mapGetters } from "vuex";

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      //controls: null,
      mesh: null,
      plane_mesh: null
    }
  },
  methods: {
    init: function() {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;
        //this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        //this.controls.screenSpacePanning = true;

        this.scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.5,0.5,0.2);
        let material = new Three.MeshNormalMaterial();

        this.mesh = new Three.Mesh(geometry, material);
        this.mesh.translateX(0.7);
        this.scene.add(this.mesh);

        var plane = new Three.PlaneGeometry(3,1);
        var matPlane = new Three.MeshBasicMaterial( { color: 0xF6E3CE } );
        this.plane_mesh = new Three.Mesh( plane, matPlane );
        this.plane_mesh.rotateX(5);
        this.plane_mesh.translateZ(-0.5);
        this.scene.add(this.plane_mesh);

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

    },

    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>

<style >
#container {
  width: 100%;
  height: 100vh;
}
</style>
