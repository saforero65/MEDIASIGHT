<template>
  <div>
    <button
      v-if="saltar && ocultar == true"
      @click.prevent="ocultar = false"
      class="btn_Saltar"
    >
      SALTAR
    </button>
    <button
      v-show="saltar && ocultar == true"
      @click.prevent="ocultar = false"
      class="btn_iniciar"
    >
      ¡EMPECEMOS!
    </button>
    <PreLoader v-if="ocultar" />
    <div id="scene-container" ref="sceneContainer">
      <div class="Caja_Ascensor">
        <a v-if="aux1 == false" class="MoverCamaraAbajo" @click="MoverAbajo">
          <img src="@/assets/img/icons/boton-abajo.svg" alt="abajo" />
        </a>
        <a v-if="aux1" class="MoverCamaraAbajo Off" @click="MoverAbajo">
          <img src="@/assets/img/icons/boton-abajo.svg" alt="abajo" />
        </a>
        <div v-if="habitacion == 1"><p>Ciencias básicas</p></div>
        <div v-if="habitacion == 2"><p>Humanística</p></div>
        <div v-if="habitacion == 3"><p>Diseño</p></div>
        <div v-if="habitacion == 4"><p>Ingeniería aplicada</p></div>
        <a v-if="aux == false" class="MoverCamaraArriba" @click="MoverArriba">
          <img src="@/assets/img/icons/boton-arriba.svg" alt="arriba" />
        </a>
        <a v-if="aux" class="MoverCamaraArriba Off" @click="MoverArriba">
          <img src="@/assets/img/icons/boton-arriba.svg" alt="arriba" />
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

        <transition name="fade">
          <div v-if="showModal" class="modal_proyectos">
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
                      item.data.habitacion == 'Ciencias Básicas'
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
                            de
                            {{ item.data.materia }}:
                          </h3>
                          <h3 class="materia_proyecto">
                            -
                            {{ item.data.tipo }}:
                          </h3>
                          <h3 class="materia_proyecto">
                            {{ item.data.nombre }}
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
                      item.data.habitacion == 'Humanística'
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
                            de
                            {{ item.data.materia }}:
                          </h3>
                          <h3 class="materia_proyecto">
                            -
                            {{ item.data.tipo }}:
                          </h3>
                          <h3 class="materia_proyecto">
                            {{ item.data.nombre }}
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
                      item.data.habitacion == 'Ingeniería'
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
                            de
                            {{ item.data.materia }}:
                          </h3>
                          <h3 class="materia_proyecto">
                            -
                            {{ item.data.tipo }}:
                          </h3>
                          <h3 class="materia_proyecto">
                            {{ item.data.nombre }}
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
                      item.data.habitacion == 'Ingeniería Aplicada'
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
                            de
                            {{ item.data.materia }}:
                          </h3>
                          <h3 class="materia_proyecto">
                            -
                            {{ item.data.tipo }}:
                          </h3>
                          <h3 class="materia_proyecto">
                            {{ item.data.nombre }}
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
        <div class="label"><b>1</b></div>
        <div class="text">
          <b>MATERIAS:</b> <br />
          {{ contenidos }}
        </div>
      </div>
      <div class="point point-2">
        <div class="label"><b>2</b></div>
        <div class="text">
          <b>PROFESORES:</b> <br />
          <b>MATEMATICA BASICAS:</b> <br />
          {{ contenidos2 }}<br />
          <b>CALCULO DIFERENCIAL:</b> <br />
          <b>CALCULO INTEGRAL:</b> <br />
          <b>CALCULO VECTORIAL:</b> <br />
          <b>ECUACIONES DIFERENCIALES:</b> <br />
          <b>FISICA MECANICA:</b> <br />
          <b>FISICA ELECTRICIDAD Y MAGNETISMO:</b> <br />
          <b>FISICA OPTICA Y ACUSTICA:</b> <br />
          <b>ALGEBRA LINEAL:</b> <br />
          <b>PROBABILIDAD Y ESTADISTICA:</b> <br />
          <b>METODOS NUMERICOS:</b> <br />
          <b>QUIMICA:</b> <br />
        </div>
      </div>
      <div class="point point-3">
        <div class="label"><b>3</b></div>
        <div class="text">
          <b>MOTIVACIÓN:</b> <br />
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
import PreLoader from "@/components/PreLoader";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
require("@/css/fondomain.css");
import { db } from "@/firebase/init";
export default {
  name: "FondoMain",
  props: ["statuspadre", "statuspadre4"],
  components: {
    PreLoader,
  },
  data() {
    return {
      ocultar: true,
      saltar: false,
      aux1: false,
      habitacion: 1,
      aux: false,
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
      particulas: null,
      particulas2: null,
      aux2: 0,
      sphereMesh: null,
    };
  },
  methods: {
    HabitacionArriba() {
      if (this.camera.position.y <= 1.5) {
        this.aux = false;
        this.aux1 = false;
        this.habitacion = 2;
      } else if (
        this.camera.position.y <= 2.5 &&
        this.camera.position.y >= 1.5
      ) {
        this.aux = false;
        this.aux1 = false;
        this.habitacion = 3;
      } else if (
        this.camera.position.y <= 3.5 &&
        this.camera.position.y >= 2.5
      ) {
        this.aux = true;
        this.aux1 = false;
        this.habitacion = 4;
      }
    },
    HabitacionAbajo() {
      if (this.camera.position.y >= 3.5) {
        this.aux = false;
        this.aux1 = false;
        this.habitacion = 3;
      } else if (
        this.camera.position.y <= 3.5 &&
        this.camera.position.y >= 2.5
      ) {
        this.aux = false;
        this.aux1 = false;
        this.habitacion = 2;
      } else if (
        this.camera.position.y <= 2.5 &&
        this.camera.position.y >= 1.5
      ) {
        this.aux = false;
        this.aux1 = true;
        this.habitacion = 1;
      }
    },
    MoverArriba() {
      this.HabitacionArriba();
      if (this.camera.position.y <= 1.5) {
        let position1 = new THREE.Vector3(0.8, 1.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        this.sphereMesh.position.x = 0.8;
        this.sphereMesh.position.y = 1.2;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
        this.camera.rotation.set(-0.3, 0, 0);
      } else if (
        this.camera.position.y <= 2.5 &&
        this.camera.position.y >= 1.5
      ) {
        let position1 = new THREE.Vector3(-0.8, 2.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        this.sphereMesh.position.x = -0.8;
        this.sphereMesh.position.y = 2.2;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
        this.camera.rotation.set(-0.3, 0, 0);
      } else if (
        this.camera.position.y <= 3.5 &&
        this.camera.position.y >= 2.5
      ) {
        let position1 = new THREE.Vector3(0.8, 3.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        this.sphereMesh.position.x = 0.8;
        this.sphereMesh.position.y = 3;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
        this.camera.rotation.set(-0.3, 0, 0);
      }
    },
    MoverAbajo() {
      this.HabitacionAbajo();
      if (this.camera.position.y >= 3.5) {
        let position1 = new THREE.Vector3(-0.8, 2.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        this.sphereMesh.position.x = -0.8;
        this.sphereMesh.position.y = 2.2;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
        this.camera.rotation.set(-0.3, 0, 0);
      } else if (
        this.camera.position.y <= 3.5 &&
        this.camera.position.y >= 2.5
      ) {
        let position1 = new THREE.Vector3(0.8, 1.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        this.sphereMesh.position.x = 0.8;
        this.sphereMesh.position.y = 1.2;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
        this.camera.rotation.set(-0.3, 0, 0);
      } else if (
        this.camera.position.y <= 2.5 &&
        this.camera.position.y >= 1.5
      ) {
        let position1 = new THREE.Vector3(-0.8, 0.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        this.sphereMesh.position.x = -0.8;
        this.sphereMesh.position.y = 0;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
        this.camera.rotation.set(-0.3, 0, 0);
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
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      // cra la escena
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#000");
      // añade camaras
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.container.clientWidth / this.container.clientHeight,
        0.1,
        100
      );
      var sphere = new THREE.SphereGeometry(2, 2, 2);
      var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
      this.sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
      this.sphereMesh.position.x = -0.8;
      this.sphereMesh.position.y = 0;
      this.sphereMesh.position.z = -0.5;

      this.camera.position.x = -0.8;
      this.camera.position.y = 0.85;
      this.camera.position.z = 1.8;
      this.camera.rotation.set(-0.3, 0, 0);
      //Orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.controls.enablePan = false;
      this.controls.minAzimuthAngle = [(7 * Math.PI) / 4];
      this.controls.maxAzimuthAngle = [Math.PI / 4];
      this.controls.minPolarAngle = Math.PI / 4;
      this.controls.maxPolarAngle = (5 * Math.PI) / 12;
      this.controls.minDistance = 1;
      this.controls.maxDistance = 2.34;
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.5;

      this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
      this.controls.update();

      const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      dirLight.position.set(0, 3, 5);
      dirLight.target.position.set(0, 1, 0);
      dirLight.target.updateMatrixWorld();
      dirLight.castShadow = true;
      dirLight.shadow.camera.top = 2;
      dirLight.shadow.camera.bottom = -2;
      dirLight.shadow.camera.left = -2;
      dirLight.shadow.camera.right = 2;
      dirLight.shadow.camera.near = 0.1;
      dirLight.shadow.camera.far = 40;
      this.scene.add(dirLight);
      // const helper = new THREE.DirectionalLightHelper(dirLight, 1);
      // this.scene.add(helper);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
      dirLight2.position.set(0, 6, 5);
      dirLight2.target.position.set(0, 3, 0);
      dirLight2.target.updateMatrixWorld();
      dirLight2.castShadow = true;
      dirLight2.shadow.camera.top = 2;
      dirLight2.shadow.camera.bottom = -2;
      dirLight2.shadow.camera.left = -2;
      dirLight2.shadow.camera.right = 2;
      dirLight2.shadow.camera.near = 0.1;
      dirLight2.shadow.camera.far = 40;
      this.scene.add(dirLight2);
      // const helper2 = new THREE.DirectionalLightHelper(dirLight2, 1);
      // this.scene.add(helper2);

      const width = 1;
      const height = 1;

      const rectLight = new THREE.RectAreaLight(0xade8f4, 7, width, height);
      rectLight.position.set(-0.3, 1.5, 1.3);
      rectLight.lookAt(-1, 0.5, -0.5);
      this.scene.add(rectLight);
      // this.scene.add(new RectAreaLightHelper(rectLight));

      const rectLight2 = new THREE.RectAreaLight(0xffd000, 4, width, height);
      rectLight2.position.set(0.5, 2.5, 0.7);
      rectLight2.lookAt(1, 1.5, 0);
      this.scene.add(rectLight2);
      // this.scene.add(new RectAreaLightHelper(rectLight2));

      const rectLight3 = new THREE.RectAreaLight(0xffdd33, 7, width, height);
      rectLight3.position.set(-1, 3.5, 1);
      rectLight3.lookAt(-1, 2.5, -0.5);
      this.scene.add(rectLight3);
      // this.scene.add(new RectAreaLightHelper(rectLight3));

      const rectLight4 = new THREE.RectAreaLight(0x240046, 7, width, height);
      rectLight4.position.set(1, 3.8, 0.6);
      rectLight4.lookAt(1, 3.5, 0);
      this.scene.add(rectLight4);
      // this.scene.add(new RectAreaLightHelper(rectLight4));

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
      axesHelper.translateY(-1);
      this.scene.add(axesHelper);

      const loader = new GLTFLoader();

      loader.load("/three-assets/Habitaciones_export.glb", (gltf) => {
        const model = gltf.scene;
        const animations = gltf.animations;

        gltf.scene.traverse(function (node) {
          if (node.isMesh || node.isLight) node.castShadow = true;
          if (node.isMesh || node.isLight) node.receiveShadow = true;
        });

        this.mixer = new THREE.AnimationMixer(model);
        console.log(animations);
        const action = this.mixer.clipAction(animations[0]);
        action.play();
        this.scene.add(model);
        console.log(`modelo cargado`);
        this.saltar = true;
        model.position.set(0, 0, 0);
        model.scale.set(5, 5, 5);
        // model.needsUpdate = true;
      });

      this.render();
    },
    content_ponits() {
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
        const translateX = screenPosition.x * this.container.clientWidth * 0.5;
        const translateY =
          -screenPosition.y * this.container.clientHeight * 0.5;
        this.point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      }
    },
    render() {
      if (this.statuspadre && this.statuspadre4 && this.aux2 == 0) {
        requestAnimationFrame(this.render);
        const delta = this.clock.getDelta();
        TWEEN.update(this.time);
        if (this.mixer.length != 0) {
          this.mixer.update(delta);

          console.log(`mixer update fondo main`);
        }
        this.renderer.render(this.scene, this.camera);
      } else {
        this.mixer = 0;
        this.aux2 = 1;
      }
      if (this.statuspadre == false && this.aux2 == 1 && this.mixer == 0) {
        this.mixer = 0;
        console.log(`PARO DE RENDERIZAR mixer update fondoMain`);
        this.$router.push({ name: "login" });
      }

      if (this.statuspadre4 == false && this.aux2 == 1 && this.mixer == 0) {
        this.mixer = 0;
        console.log(`PARO DE RENDERIZAR mixer update fondo2`);
        this.$router.push({ name: "dashboard" });
      }
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

    db.collection("contenido")
      .doc("0.01")
      .onSnapshot((doc) => {
        this.contenidos = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.02")
      .onSnapshot((doc) => {
        this.contenidos2 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.03")
      .onSnapshot((doc) => {
        this.contenidos3 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.04")
      .onSnapshot((doc) => {
        this.contenidos4 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.05")
      .onSnapshot((doc) => {
        this.contenidos5 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.06")
      .onSnapshot((doc) => {
        this.contenidos6 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.07")
      .onSnapshot((doc) => {
        this.contenidos7 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.08")
      .onSnapshot((doc) => {
        this.contenidos8 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.09")
      .onSnapshot((doc) => {
        this.contenidos9 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.1")
      .onSnapshot((doc) => {
        this.contenidos10 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.11")
      .onSnapshot((doc) => {
        this.contenidos11 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.12")
      .onSnapshot((doc) => {
        this.contenidos12 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.13")
      .onSnapshot((doc) => {
        this.contenidos13 = `${doc.data().descripcion}`;
      });
    db.collection("contenido")
      .doc("0.14")
      .onSnapshot((doc) => {
        this.contenidos14 = `${doc.data().descripcion}`;
      });
  },
};
</script>

