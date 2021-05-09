<template>
  <div id="scene-container" ref="sceneContainer">
<div class="Caja_Ascensor">
      <a v-if="aux1 == false" class="MoverCamaraAbajo" @click="MoverAbajo">
        <img src="@/assets/img/icons/boton-abajo.svg" alt="abajo"/>
      </a>
      <a v-if="aux1" class="MoverCamaraAbajo Off" @click="MoverAbajo">
        <img src="@/assets/img/icons/boton-abajo.svg" alt="abajo"/>
      </a>
      <div v-if="habitacion == 1"><p>Ciencias básicas</p></div>
      <div v-if="habitacion == 2"><p>Humanística</p></div>
      <div v-if="habitacion == 3"><p>Diseño</p></div>
      <div v-if="habitacion == 4"><p>Ingeniería aplicada</p></div>
      <a v-if="aux == false" class="MoverCamaraArriba" @click="MoverArriba">
        <img src="@/assets/img/icons/boton-arriba.svg" alt="arriba"/>
      </a>
      <a v-if="aux" class="MoverCamaraArriba Off" @click="MoverArriba">
        <img src="@/assets/img/icons/boton-arriba.svg" alt="arriba"/>
      </a>
    </div>
    <div>
      <transition name="fade">
        <div class="modal-overlay" v-if="showModal"></div>
      </transition>
      <transition name="fade">
        <div class="modal-overlay" v-if="showModal2"></div>
      </transition>
      <transition name="fade">
        <div class="modal-overlay" v-if="showModal3"></div>
      </transition>
      <transition name="fade">
        <div class="modal-overlay" v-if="showModal4"></div>
      </transition>
      <div class="Fondo">
      <transition name="fade">
        <div v-if="showModal" class="modal_proyectos">
          <!-- <h1>Proyectos</h1> -->
          <div class="carrusel">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              controls
              no-animatio
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <div v-for="item in proyectos" v-bind:key="item.id">
                <b-carousel-slide
                  v-if="
                    item.data.estado == 'aprobado' &&
                    item.data.materia == 'Ciencias Basicas'
                  "
                >
                  <template #img>
                    <div class="contenedor_carrusel">
                      <img
                        :src="getImageUrl(item.data.imagen)"
                        alt="image slot"
                      />
                      <div class="titulos">
                        <h2 class="nombre_proyecto">
                          {{ item.data.nombre_proyecto }}
                        </h2>
                        <h3 class="materia_proyecto">
                          -
                          {{ item.data.materia }}
                        </h3>
                      </div>
                      <p class="descripcion_proyecto">
                        {{ item.data.descripcion }}
                      </p>
                    </div>
                  </template>
                </b-carousel-slide>
              </div>
            </b-carousel>
          </div>
          <a class="posicion_boton_cerrar" @click="showModal = false">
            <img src="@/assets/img/icons/cerrar.svg" alt="logo_umng" />
          </a>
        </div>
      </transition>
    </div>
    <div>
      <transition name="fade">
        <div class="modal-overlay" v-if="showModal"></div>
      </transition>

      <transition name="fade">
        <div v-if="showModal2" class="modal_proyectos">
          <!-- <h1>Proyectos</h1> -->
          <div class="carrusel">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              controls
              no-animation
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <div v-for="item in proyectos" v-bind:key="item.id">
                <b-carousel-slide
                  v-if="
                    item.data.estado == 'aprobado' &&
                    item.data.materia == 'Humanistica'
                  "
                >
                  <template #img>
                    <div class="contenedor_carrusel">
                      <img
                        :src="getImageUrl(item.data.imagen)"
                        alt="image slot"
                      />
                      <div class="titulos">
                        <h2 class="nombre_proyecto">
                          {{ item.data.nombre_proyecto }}
                        </h2>
                        <h3 class="materia_proyecto">
                          -
                          {{ item.data.materia }}
                        </h3>
                      </div>
                      <p class="descripcion_proyecto">
                        {{ item.data.descripcion }}
                      </p>
                    </div>
                  </template>
                </b-carousel-slide>
              </div>
            </b-carousel>
          </div>
          <a class="posicion_boton_cerrar" @click="showModal2 = false">
            <img src="@/assets/img/icons/cerrar.svg" alt="logo_umng" />
          </a>
        </div>
      </transition>
    </div>
    <div>
      <transition name="fade">
        <div class="modal-overlay" v-if="showModal2"></div>
      </transition>

      <transition name="fade">
        <div v-if="showModal3" class="modal_proyectos">
          <!-- <h1>Proyectos</h1> -->
          <div class="carrusel">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              controls
              no-animation
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <div v-for="item in proyectos" v-bind:key="item.id">
                <b-carousel-slide
                  v-if="
                    item.data.estado == 'aprobado' &&
                    item.data.materia == 'Ingenieria'
                  "
                >
                  <template #img>
                    <div class="contenedor_carrusel">
                      <img
                        :src="getImageUrl(item.data.imagen)"
                        alt="image slot"
                      />
                      <div class="titulos">
                        <h2 class="nombre_proyecto">
                          {{ item.data.nombre_proyecto }}
                        </h2>
                        <h3 class="materia_proyecto">
                          -
                          {{ item.data.materia }}
                        </h3>
                      </div>
                      <p class="descripcion_proyecto">
                        {{ item.data.descripcion }}
                      </p>
                    </div>
                  </template>
                </b-carousel-slide>
              </div>
            </b-carousel>
          </div>
          <a class="posicion_boton_cerrar" @click="showModal3 = false">
            <img src="@/assets/img/icons/cerrar.svg" alt="logo_umng" />
          </a>
        </div>
      </transition>
    </div>
    <div>
      <transition name="fade">
        <div class="modal-overlay" v-if="showModal3"></div>
      </transition>

      <transition name="fade">
        <div v-if="showModal4" class="modal_proyectos">
          <!-- <h1>Proyectos</h1> -->
          <div class="carrusel">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              controls
              no-animation
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <div v-for="item in proyectos" v-bind:key="item.id">
                <b-carousel-slide
                  v-if="
                    item.data.estado == 'aprobado' &&
                    item.data.materia == 'Ingenieria Aplicada'
                  "
                >
                  <template #img>
                    <div class="contenedor_carrusel">
                      <img
                        :src="getImageUrl(item.data.imagen)"
                        alt="image slot"
                      />
                      <div class="titulos">
                        <h2 class="nombre_proyecto">
                          {{ item.data.nombre_proyecto }}
                        </h2>
                        <h3 class="materia_proyecto">
                          -
                          {{ item.data.materia }}
                        </h3>
                      </div>
                      <p class="descripcion_proyecto">
                        {{ item.data.descripcion }}
                      </p>
                    </div>
                  </template>
                </b-carousel-slide>
              </div>
            </b-carousel>
          </div>
          <a class="posicion_boton_cerrar" @click="showModal4 = false">
            <img src="@/assets/img/icons/cerrar.svg" alt="logo_umng" />
          </a>
        </div>
      </transition>
    </div>
    <div class="point pointProject_1">
      <div class="label point_project" @click="showModal = true">
        <b> P1</b>
      </div>
    </div>
    <div class="point pointProject_2">
      <div class="label point_project" @click="showModal2 = true">
        <b> P2</b>
      </div>
    </div>
    <div class="point pointProject_3">
      <div class="label point_project" @click="showModal3 = true">
        <b> P3</b>
      </div>
    </div>
    <div class="point pointProject_4">
      <div class="label point_project" @click="showModal4 = true">
        <b> P4</b>
      </div>
    </div>
    <div class="point point-1">
      <div class="label">1</div>
      <div class="text">
        {{ contenidos }}
      </div>
    </div>
    <div class="point point-2">
      <div class="label">2</div>
      <div class="text">
        {{ contenidos2 }}
      </div>
    </div>
    <div class="point point-3">
      <div class="label">3</div>
      <div class="text">
        {{ contenidos3 }}
      </div>
    </div>

    <div class="point point-4">
      <div class="label">4</div>
      <div class="text">
        {{ contenidos4 }}
      </div>
    </div>
    <div class="point point-5">
      <div class="label">5</div>
      <div class="text">
        {{ contenidos5 }}
      </div>
    </div>
    <div class="point point-6">
      <div class="label">6</div>
      <div class="text">
        {{ contenidos6 }}
      </div>
    </div>
    <div class="point point-7">
      <div class="label">7</div>
      <div class="text">
        {{ contenidos7 }}
      </div>
    </div>
    <div class="point point-8">
      <div class="label">8</div>
      <div class="text">
        {{ contenidos8 }}
      </div>
    </div>
    <div class="point point-9">
      <div class="label">9</div>
      <div class="text">
        {{ contenidos9 }}
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
        {{ contenidos11 }}
      </div>
    </div>
    <div class="point point-12">
      <div class="label">12</div>
      <div class="text">
        {{ contenidos12 }}
      </div>
    </div>
    <div class="point point-13">
      <div class="label">13</div>
      <div class="text">
        {{ contenidos13 }}
      </div>
    </div>
    <div class="point point-14">
      <div class="label">14</div>
      <div class="text">
        {{ contenidos14 }}
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { InteractionManager } from "three.interactive";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
//import { GUI } from '/jsm/libs/dat.gui.module';

import { db } from "@/firebase/init";
export default {
  name: "FondoMain",
  data() {
    return {
      proyectos: [],
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      slide: 0,
      sliding: null,
      container: null,
      scene: null,
      camera: null,
      ascensor: null,
      renderer: null,
      clock: null,
      mixer: [],
      mixer1: [],
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
      sphereMesh: null,
      aux: false,
      aux1: true,
      habitacion: 1,
    };
  },
  
  methods: {
    HabitacionArriba(){
      if(this.camera.position.y <= 1.5)
      {
        this.aux = false;
        this.aux1 = false;
        this.habitacion = 2;
      }
      else if (this.camera.position.y <= 2.5 && this.camera.position.y >= 1.5)
      {
        this.aux = false;
        this.aux1 = false;
        this.habitacion = 3;
      }
      else if (this.camera.position.y <= 3.5 && this.camera.position.y >= 2.5)
      {
        this.aux = true;
        this.aux1 = false;
        this.habitacion = 4;
      }
    },
    HabitacionAbajo(){
        if (this.camera.position.y >= 3.5)
        {
          this.aux = false;
          this.aux1 = false;
          this.habitacion = 3;
        }
        else if (this.camera.position.y <= 3.5 && this.camera.position.y >= 2.5)
        {
          this.aux = false;
          this.aux1 = false;
          this.habitacion = 2;
        }
        else if (this.camera.position.y <= 2.5 && this.camera.position.y >= 1.5)
        {
          this.aux = false;
          this.aux1 = true;
          this.habitacion = 1;
        }
    },
    MoverArriba() {
        this.HabitacionArriba();
        if(this.camera.position.y <= 1.5)
        {
          let position1 = new THREE.Vector3(0.8,1.85,1.8);
          let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000,)
          .easing(TWEEN.Easing.Quadratic.InOut)
          camara.start();
          this.sphereMesh.position.x = 0.8;
          this.sphereMesh.position.y = 1.2;
          this.sphereMesh.position.z = -0.5;
          this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
          this.controls.update();
          this.camera.rotation.set(-0.3,0,0); 
        }
        else if (this.camera.position.y <= 2.5 && this.camera.position.y >= 1.5)
        {
          let position1 = new THREE.Vector3(-0.8,2.85,1.8);
          let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          camara.start();
          this.sphereMesh.position.x = -0.8;
          this.sphereMesh.position.y = 2.2;
          this.sphereMesh.position.z = -0.5;
          this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
          this.controls.update();
          this.camera.rotation.set(-0.3,0,0);
        }
        else if (this.camera.position.y <= 3.5 && this.camera.position.y >= 2.5)
        {
          let position1 = new THREE.Vector3(0.8,3.85,1.8);
          let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          camara.start();
          this.sphereMesh.position.x = 0.8;
          this.sphereMesh.position.y = 3;
          this.sphereMesh.position.z = -0.5;
          this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
          this.controls.update();
          this.camera.rotation.set(-0.3,0,0);
        }
    },
    MoverAbajo() {
        this.HabitacionAbajo();
        if (this.camera.position.y >= 3.5)
        {
          let position1 = new THREE.Vector3(-0.8,2.85,1.8);
          let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          camara.start();
          this.sphereMesh.position.x = -0.8;
          this.sphereMesh.position.y = 2.2;
          this.sphereMesh.position.z = -0.5;
          this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
          this.controls.update();
          this.camera.rotation.set(-0.3,0,0);
        }
        else if (this.camera.position.y <= 3.5 && this.camera.position.y >= 2.5)
        {
          let position1 = new THREE.Vector3(0.8,1.85,1.8);
          let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          camara.start();
          this.sphereMesh.position.x = 0.8;
          this.sphereMesh.position.y = 1.2;
          this.sphereMesh.position.z = -0.5;
          this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
          this.controls.update();
          this.camera.rotation.set(-0.3,0,0);
        }
        else if (this.camera.position.y <= 2.5 && this.camera.position.y >= 1.5)
        {
          let position1 = new THREE.Vector3(-0.8,0.85,1.8);
          let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          camara.start();
          this.sphereMesh.position.x = -0.8;
          this.sphereMesh.position.y = 0;
          this.sphereMesh.position.z = -0.5;
          this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
          this.controls.update();
          this.camera.rotation.set(-0.3,0,0);
        }
      },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    getImageUrl(imageId) {
      return `${imageId}`;
    },
    
    init() {
      console.log(this.contenidos);
      // console.log(Object.values(this.contenidos));
      // establecer el container
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
      // crea la escena
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("black");
      
      // añade camaras
      this.camera = new THREE.PerspectiveCamera(45,this.container.clientWidth / this.container.clientHeight,0.1,100);

var sphere=new THREE.SphereGeometry(2,2,2);
var sphereMaterial=new THREE.MeshLambertMaterial({color:0xff0000});
this.sphereMesh = new THREE.Mesh(sphere,sphereMaterial);
this.sphereMesh.position.x = -0.8;
this.sphereMesh.position.y = 0;
this.sphereMesh.position.z = -0.5;
// this.scene.add(this.sphereMesh);
    this.camera.position.x = -0.8;
    this.camera.position.y = 0.85;
    this.camera.position.z = 1.8;
    this.camera.rotation.set(-0.3,0,0);

      //Orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enablePan = false;
      this.controls.minAzimuthAngle = [7*Math.PI/4];
      this.controls.maxAzimuthAngle = [Math.PI/4];
      this.controls.minPolarAngle = Math.PI / 4;
      this.controls.maxPolarAngle = 5*Math.PI / 12;
      this.controls.minDistance = 1;
      this.controls.maxDistance = 2.34;
      // this.controls.enableDamping = true;      
      this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
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

      const size = 10;
      const divisions = 10;
      const gridHelper = new THREE.GridHelper(size, divisions);
      gridHelper.translateY(-1);
      this.scene.add(gridHelper);
      //añadiendo modelo .glb
      const axesHelper = new THREE.AxesHelper(5);
      // axesHelper.translateY(-1);
      this.scene.add(axesHelper);

      const loader = new GLTFLoader();
      loader.load("/three-assets/Habitaciones.glb", (gltf) => {
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
      });

      const loader8 = new GLTFLoader();
      loader8.load("/three-assets/VentanaIA.glb", (gltf1) => {
      const VentanaIA = gltf1.scene;
      const animations1 = gltf1.animations;
      this.mixer = new THREE.AnimationMixer(VentanaIA);
      console.log(animations1);
      const action1 = this.mixer.clipAction(animations1[0]);
      action1.play();
      this.scene.add(VentanaIA);
      console.log(`modelo cargado`);
      VentanaIA.position.set(0, 0, 0);
      VentanaIA.scale.set(5, 5, 5);
      // model.needsUpdate = true;
      });

        const loader1 = new GLTFLoader();
        loader1.load("/three-assets/Lampara_ciencias_basicas.glb", (gltf) => {
        const lampara = gltf.scene;
        console.log(`modelo cargado`);
        lampara.position.set(0, 0, 0);
        lampara.scale.set(5, 5, 5);

        this.scene.add(lampara);
      });
        const loader2 = new GLTFLoader();
        loader2.load("/three-assets/Avion_humanistica.glb", (gltf) => {
        const model2 = gltf.scene;
        this.scene.add(model2);
        console.log(`modelo cargado`);
        model2.position.set(0, 0, 0);
        model2.scale.set(5, 5, 5);
      });
        const loader3 = new GLTFLoader();
        loader3.load("/three-assets/Ascensor_cabina.glb", (gltf) => {
        this.ascensor = gltf.scene;
        this.scene.add(this.ascensor);
        console.log(`modelo cargado`);
        this.ascensor.position.set(0, 0.015, 0);
        this.ascensor.scale.set(5, 5, 5);
      });
        const loader4 = new GLTFLoader();
        loader4.load("/three-assets/PuertaCB.glb", (gltf) => {
        this.PuertaCB = gltf.scene;
        this.scene.add(this.PuertaCB);
        console.log(`modelo cargado`);
        this.PuertaCB.position.set(0, 0, 0);
        this.PuertaCB.scale.set(5, 5, 5);
        this.PuertaCB.rotation.set(0,2,0);
      });
        const loader5 = new GLTFLoader();
        loader5.load("/three-assets/PuertaH.glb", (gltf) => {
        this.PuertaH = gltf.scene;
        this.scene.add(this.PuertaH);
        console.log(`modelo cargado`);
        this.PuertaH.position.set(0, 0, 0);
        this.PuertaH.scale.set(5, 5, 5);
        this.PuertaH.rotation.set(0,2,0);
      });
        const loader6 = new GLTFLoader();
        loader6.load("/three-assets/PuertaD.glb", (gltf) => {
        this.PuertaD = gltf.scene;
        this.scene.add(this.PuertaD);
        console.log(`modelo cargado`);
        this.PuertaD.position.set(0, 0, 0);
        this.PuertaD.scale.set(5, 5, 5);
        this.PuertaD.rotation.set(0,2,0);
      });
        const loader7 = new GLTFLoader();
        loader7.load("/three-assets/PuertaIA.glb", (gltf) => {
        this.PuertaIA = gltf.scene;
        this.scene.add(this.PuertaIA);
        console.log(`modelo cargado`);
        this.PuertaIA.position.set(0, 0, 0);
        this.PuertaIA.scale.set(5, 5, 5);
        this.PuertaIA.rotation.set(0,2,0);
      });
      this.render();
    },

    render() {
      requestAnimationFrame(this.render);
      const delta = this.clock.getDelta();
      //this.controls.update();
    TWEEN.update(this.time);
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
    this.proyectos = [];
    db.collection("proyectos_admin")
      .get()
      .then((r) => {
        r.docs.map((item) => {
          this.proyectos.push({
            id: item.id,
            data: item.data(),
          });
        });
      });

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scene-container {
  width: 100%;
  height: 100vh;
 overflow: hidden;
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
  background: blueviolet;
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
.point .point_project {
  cursor: pointer;
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

.posicion_boton_cerrar img {
  width: 3%;
}
.posicion_boton_cerrar {
  position: fixed;
  top: 2%;
  right: 2%;
  transform: translate(98%, -2%);
  cursor: pointer;
  z-index: 200;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);
}
.modal_proyectos {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 80vh;
  transform: translate(-50%, -50%);
  background: rgba(28, 28, 28, 0.4);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(28, 28, 28, 0.4) 0%,
    rgba(28, 28, 28, 0.46) 8%,
    rgba(19, 19, 19, 0.71) 43%,
    rgba(19, 19, 19, 1) 83%
  );
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(28, 28, 28, 0.4)),
    color-stop(8%, rgba(28, 28, 28, 0.46)),
    color-stop(43%, rgba(19, 19, 19, 0.71)),
    color-stop(83%, rgba(19, 19, 19, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(28, 28, 28, 0.4) 0%,
    rgba(28, 28, 28, 0.46) 8%,
    rgba(19, 19, 19, 0.71) 43%,
    rgba(19, 19, 19, 1) 83%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(28, 28, 28, 0.4) 0%,
    rgba(28, 28, 28, 0.46) 8%,
    rgba(19, 19, 19, 0.71) 43%,
    rgba(19, 19, 19, 1) 83%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(28, 28, 28, 0.4) 0%,
    rgba(28, 28, 28, 0.46) 8%,
    rgba(19, 19, 19, 0.71) 43%,
    rgba(19, 19, 19, 1) 83%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(28, 28, 28, 0.4) 0%,
    rgba(28, 28, 28, 0.46) 8%,
    rgba(19, 19, 19, 0.71) 43%,
    rgba(19, 19, 19, 1) 83%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c1c1c', endColorstr='#131313', GradientType=1 );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=1 );
  color: white;
  padding: 0;
  /* border-radius: 10px; */
  z-index: 101;
  font-family: "Roboto Mono", monospace;
}
.modal_proyectos h1 {
  display: flex;
  justify-content: center;
  margin-bottom: 2.5%;
}
.contenedor_carrusel {
  background: rgba(0, 0, 0, 0);
  margin: 0 15%;
}
.carousel {
  position: inherit;
}
.carousel-control-prev,
.carousel-control-next {
  top: 15%;
  height: 60%;
}
.contenedor_carrusel img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  overflow: hidden;
}
.titulos {
  margin-top: 1rem;
  text-align: center;
  text-transform: uppercase;
}
.nombre_proyecto,
.materia_proyecto {
  font-size: 18px;
  display: inline;
}
.descripcion_proyecto {
  font-size: 13px;
  text-align: center;
  margin: 0;
}
.Fondo{
  overflow: hidden;
}
.Caja_Ascensor {
  position: fixed;
  bottom: 2%;
  right: 40%;
  min-width: 10vh;
  width: 30vh;
  max-width: 30vh;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Caja_Ascensor p {
  margin: 0;
}
.MoverCamaraArriba {
  padding: 1.5vh;
  border-radius: 50%;
  background-color: rgb(214, 214, 214);
  cursor: pointer;
}
.MoverCamaraArriba img, .MoverCamaraAbajo img {
  min-width: 0.5vh;
  max-width: 2.5vh;
}
.MoverCamaraAbajo {
  padding: 1.5vh;
  border-radius: 50%;
  background-color: rgb(214, 214, 214);
  cursor: pointer;
}
.MoverCamaraArriba:hover, .MoverCamaraAbajo:hover {
  background-color: yellow;  
  /* border: 2px solid yellow; */
}
.Off, .Off:hover{
  background-color: darkgrey;
  cursor: default;
}
</style>