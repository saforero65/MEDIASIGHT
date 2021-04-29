<template>
  <div id="scene-container" ref="sceneContainer">
    <div class="point point-1">
      <div class="label">1</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-2">
      <div class="label">2</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-3">
      <div class="label">3</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-4">
      <div class="label">4</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-5">
      <div class="label">5</div>
      <div class="text">{{ contenidos }}ty.</div>
    </div>
    <div class="point point-6">
      <div class="label">6</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-7">
      <div class="label">7</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-8">
      <div class="label">8</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-9">
      <div class="label">9</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-10">
      <div class="label">10</div>
      <div class="text">
        {{ contenidos10 }}
      </div>
    </div>
    <div class="point point-11">
      <div class="label">11</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-12">
      <div class="label">12</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-13">
      <div class="label">13</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-14">
      <div class="label">14</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { db } from "@/firebase/init";
export default {
  name: "FondoMain",
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      renderer: null,
      clock: null,
      mixer: [],
      raycaster: null,
      points: [],
      intersects: [],
      contenidos: null,
      contenidos2: null,
      contenidos3: null,
      contenidos4: null,
      contenidos5: null,
      contenidos6: null,
      contenidos7: null,
      contenidos8: null,
      contenidos9: null,
      contenidos10: null,
      contenidos11: null,
      contenidos12: null,
      contenidos13: null,
      contenidos14: null,
      point: null,
    };
  },
  methods: {
    init() {
      console.log(this.contenidos);
      // console.log(Object.values(this.contenidos));
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
      this.controls = new OrbitControls(camera, this.renderer.domElement);
      this.controls.target.set(0, 0, 0); //Objetivo de la cámara
      this.controls.enablePan = true;
      this.controls.maxAzimuthAngle = [-2 * Math.PI, Math.PI / 2];
      this.controls.maxPolarAngle = Math.PI / 2;
      this.controls.minDistance = 5;
      this.controls.maxDistance = 20;
      // this.controls.enableDamping = true;
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
        model.position.set(-3, 0, 0);
        model.scale.set(5, 5, 5);
        // model.needsUpdate = true;
      });
      this.raycaster = new THREE.Raycaster();
      this.points = [
        {
          position: new THREE.Vector3(-0.5, 0.3, 2),
          element: document.querySelector(".point-1"),
        },
        {
          position: new THREE.Vector3(0, 0, 0),
          element: document.querySelector(".point-2"),
        },
        {
          position: new THREE.Vector3(0, 0, 1),
          element: document.querySelector(".point-3"),
        },
        {
          position: new THREE.Vector3(-0.8, 0.0, 1),
          element: document.querySelector(".point-4"),
        },
        // {
        //   position: new THREE.Vector3(0, 0, 0.5),
        //   element: document.querySelector(".point-5"),
        // },
        // {
        //   position: new THREE.Vector3(0, 0.5, 1),
        //   element: document.querySelector(".point-6"),
        // },
        // {
        //   position: new THREE.Vector3(-0.8, 0.3, 2),
        //   element: document.querySelector(".point-7"),
        // },
        // {
        //   position: new THREE.Vector3(0.8, 0.8, 0),
        //   element: document.querySelector(".point-8"),
        // },
        // {
        //   position: new THREE.Vector3(0, 0.8, 1),
        //   element: document.querySelector(".point-9"),
        // },
        // {
        //   position: new THREE.Vector3(-0.5, 0.83, 2),
        //   element: document.querySelector(".point-10"),
        // },
        // {
        //   position: new THREE.Vector3(0.2, 0.8, 0),
        //   element: document.querySelector(".point-11"),
        // },
        // {
        //   position: new THREE.Vector3(0, 0.6, 1),
        //   element: document.querySelector(".point-12"),
        // },
        // {
        //   position: new THREE.Vector3(-0.5, 0.83, 2),
        //   element: document.querySelector(".point-13"),
        // },
        // {
        //   position: new THREE.Vector3(0, 0.9, 1),
        //   element: document.querySelector(".point-14"),
        // },
      ];
      this.render();
    },
    render() {
      requestAnimationFrame(this.render);
      const delta = this.clock.getDelta();
      this.controls.update();
      // this.scene.update();
      if (this.mixer.length != 0) {
        this.mixer.update(delta);
        for (this.point of this.points) {
          // Get 2D screen position
          // this.mixer.update(delta);
          const screenPosition = this.point.position.clone();
          screenPosition.project(this.camera);

          // Set the raycaster
          this.raycaster.setFromCamera(screenPosition, this.camera);
          this.intersects = this.raycaster.intersectObjects(
            this.scene.children,
            true
          );

          // No intersect found
          if (this.intersects.length === 0) {
            // Show
            this.point.element.classList.add("visible");
          }

          // Intersect found
          else {
            // Get the distance of the intersection and the distance of the point
            const intersectionDistance = this.intersects[0].distance;
            const pointDistance = this.point.position.distanceTo(
              this.camera.position
            );

            // Intersection is close than the point
            if (intersectionDistance < pointDistance) {
              // Hide
              this.point.element.classList.remove("visible");
            }
            // Intersection is further than the point
            else {
              // Show
              this.point.element.classList.add("visible");
            }
          }

          const translateX =
            screenPosition.x * this.container.clientWidth * 0.5;
          const translateY =
            -screenPosition.y * this.container.clientHeight * 0.5;
          this.point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
        }
        console.log(`mixer update fondo main`);
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
  created() {
    this.contenidos = [];
    // db.collection("contenido")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       this.id = `${doc.id}`;
    //       this.contenidos[doc.id] = doc.data().descripcion;
    //     });
    //   });
    // let iterable = [
    //   0.01,
    //   0.02,
    //   0.03,
    //   0.04,
    //   0.05,
    //   0.06,
    //   0.07,
    //   0.08,
    //   0.09,
    //   0.1,
    //   0.11,
    //   0.12,
    //   0.13,
    //   0.14,
    // ];
    // for (let value of iterable) {
    //   db.collection("contenido")
    //     .doc(`${value}`)
    //     .onSnapshot((doc) => {
    //       this.contenidos[value] = `${doc.data().descripcion}`;
    //     });
    //   console.log(this.contenidos);
    // }
    db.collection("contenido")
      .doc("0.01")
      .onSnapshot((doc) => {
        this.contenidos = `${doc.data().descripcion}`;
      });
    // db.collection("contenido")
    //   .doc("0.02")
    //   .onSnapshot((doc) => {
    //     this.contenidos2 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.03")
    //   .onSnapshot((doc) => {
    //     this.contenidos3 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.04")
    //   .onSnapshot((doc) => {
    //     this.contenidos4 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.05")
    //   .onSnapshot((doc) => {
    //     this.contenidos5 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.06")
    //   .onSnapshot((doc) => {
    //     this.contenidos6 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.07")
    //   .onSnapshot((doc) => {
    //     this.contenidos7 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.08")
    //   .onSnapshot((doc) => {
    //     this.contenidos8 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.09")
    //   .onSnapshot((doc) => {
    //     this.contenidos9 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.1")
    //   .onSnapshot((doc) => {
    //     this.contenidos10 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.11")
    //   .onSnapshot((doc) => {
    //     this.contenidos11 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.12")
    //   .onSnapshot((doc) => {
    //     this.contenidos12 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.13")
    //   .onSnapshot((doc) => {
    //     this.contenidos13 = `${doc.data().descripcion}`;
    //   });
    // db.collection("contenido")
    //   .doc("0.14")
    //   .onSnapshot((doc) => {
    //     this.contenidos14 = `${doc.data().descripcion}`;
    //   });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scene-container {
  width: 100%;
  height: 100vh;
}

.point {
  position: absolute;
  top: 50%;
  left: 50%;
  /* pointer-events: none; */
}

.point .label {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #00000077;
  border: 1px solid #ffffff77;
  color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  line-height: 40px;
  font-weight: 100;
  font-size: 14px;
  cursor: help;
  transform: scale(0, 0);
  transition: transform 0.3s;
}

.point .text {
  position: absolute;
  top: 30px;
  left: -120px;
  width: 200px;
  padding: 20px;
  border-radius: 4px;
  background: #00000077;
  border: 1px solid #ffffff77;
  color: #ffffff;
  line-height: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.point:hover .text {
  opacity: 1;
}

.point.visible .label {
  transform: scale(0.5, 0.5);
}
</style>