<template>
  <div>
    <div>
      <button
        v-if="saltar && ocultar == true"
        @click.prevent="ocultar = false"
        class="arrow right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="60px"
          height="80px"
          viewBox="0 0 50 80"
          xml:space="preserve"
        >
          <polyline
            fill="none"
            stroke="#FFFFFF"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
          />
        </svg>
      </button>
    </div>

    <div class="lds-ellipsis saltar" v-if="saltar == false">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
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
      <video
        id="video1"
        playsinline
        webkit-playsinline
        muted
        loop
        autoplay
        width="320"
        height="240"
        src="/textures/Pacman.mp4"
        style="display: none"
      ></video>
      <video
        id="video2"
        playsinline
        webkit-playsinline
        muted
        loop
        autoplay
        width="320"
        height="240"
        src="/textures/esfera.mp4"
        style="display: none"
      ></video>
      <video
        id="video3"
        playsinline
        webkit-playsinline
        muted
        loop
        autoplay
        width="320"
        height="240"
        src="/textures/rectangulo.mp4"
        style="display: none"
      ></video>
      <video
        id="video4"
        playsinline
        webkit-playsinline
        muted
        loop
        autoplay
        width="320"
        height="240"
        src="/textures/cuadrado.mp4"
        style="display: none"
      ></video>
      <video
        id="video5"
        playsinline
        webkit-playsinline
        muted
        loop
        autoplay
        width="320"
        height="240"
        src="/textures/codigo.mp4"
        style="display: none"
      ></video>
      <video
        id="video6"
        playsinline
        webkit-playsinline
        muted
        loop
        autoplay
        width="240"
        height="240"
        src="/textures/logo.mp4"
        style="display: none"
      ></video>
    </div>
  </div>
</template>

<script>
import PreLoader from "@/components/PreLoader";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
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
      aux1: false,
      aux: false,
      habitacion: 1,
      sphereMesh: null,
      ocultar: true,
      saltar: false,
      Mover_Camara: false,
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
      grupo1: null,
      grupo2: null,
      grupo3: null,
      grupo4: null,
      intensity: 0,
      material1: null,
      points: [],
      intersects1: [],
      intersects2: [],
      intersects3: [],
      intersects4: [],
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
      auxLuz: 0,
      raycaster: null,
      mouse: new THREE.Vector2(),
      animations: [],
      spotLight: null,
      video6: null,
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
          .to(position1, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        let rotationr = new THREE.Vector3(-0.3, 0, 0);
        let camarar = new TWEEN.Tween(this.camera.rotation)
          .to(rotationr, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camarar.start();
        let positionA = new THREE.Vector3(0, 0.95, 0);
        let ascensor1 = new TWEEN.Tween(this.ascensor.position).to(
          positionA,
          1700
        );
        ascensor1.start();
        let rotationA = new THREE.Vector3(0, 3.1416, 0);
        let ascensor2 = new TWEEN.Tween(this.ascensor.rotation).to(
          rotationA,
          1700
        );
        ascensor2.start();
        let rotationP1 = new THREE.Vector3(0, 0, 0);
        let Puerta1 = new TWEEN.Tween(this.PuertaCB.rotation).to(
          rotationP1,
          1000
        );
        Puerta1.start();
        let rotationP = new THREE.Vector3(0, 2, 0);
        let Puerta = new TWEEN.Tween(this.PuertaH.rotation).to(rotationP, 2700);
        Puerta.start();
        this.sphereMesh.position.x = 0.8;
        this.sphereMesh.position.y = 1.2;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
      } else if (
        this.camera.position.y <= 2.5 &&
        this.camera.position.y >= 1.5
      ) {
        let position1 = new THREE.Vector3(-0.8, 2.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        let rotationr = new THREE.Vector3(-0.3, 0, 0);
        let camarar = new TWEEN.Tween(this.camera.rotation)
          .to(rotationr, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camarar.start();
        let positionA = new THREE.Vector3(0, 1.92, 0);
        let ascensor1 = new TWEEN.Tween(this.ascensor.position).to(
          positionA,
          1700
        );
        ascensor1.start();
        let rotationA = new THREE.Vector3(0, 0, 0);
        let ascensor2 = new TWEEN.Tween(this.ascensor.rotation).to(
          rotationA,
          1700
        );
        ascensor2.start();
        let rotationP1 = new THREE.Vector3(0, 0, 0);
        let Puerta1 = new TWEEN.Tween(this.PuertaH.rotation).to(
          rotationP1,
          1000
        );
        Puerta1.start();
        let rotationP = new THREE.Vector3(0, 2, 0);
        let Puerta = new TWEEN.Tween(this.PuertaD.rotation).to(rotationP, 2700);
        Puerta.start();
        this.sphereMesh.position.x = -0.8;
        this.sphereMesh.position.y = 2.2;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
      } else if (
        this.camera.position.y <= 3.5 &&
        this.camera.position.y >= 2.5
      ) {
        let position1 = new THREE.Vector3(0.8, 3.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        let rotationr = new THREE.Vector3(-0.3, 0, 0);
        let camarar = new TWEEN.Tween(this.camera.rotation)
          .to(rotationr, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camarar.start();
        let positionA = new THREE.Vector3(0, 2.87, 0);
        let ascensor1 = new TWEEN.Tween(this.ascensor.position).to(
          positionA,
          1700
        );
        ascensor1.start();
        let rotationA = new THREE.Vector3(0, 3.1416, 0);
        let ascensor2 = new TWEEN.Tween(this.ascensor.rotation).to(
          rotationA,
          1700
        );
        ascensor2.start();
        let rotationP1 = new THREE.Vector3(0, 0, 0);
        let Puerta1 = new TWEEN.Tween(this.PuertaD.rotation).to(
          rotationP1,
          1000
        );
        Puerta1.start();
        let rotationP = new THREE.Vector3(0, 2, 0);
        let Puerta = new TWEEN.Tween(this.PuertaIA.rotation).to(
          rotationP,
          2700
        );
        Puerta.start();
        this.sphereMesh.position.x = 0.8;
        this.sphereMesh.position.y = 3;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
      }
    },
    MoverAbajo() {
      this.HabitacionAbajo();
      if (this.camera.position.y >= 3.5) {
        let position1 = new THREE.Vector3(-0.8, 2.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        let rotationr = new THREE.Vector3(-0.3, 0, 0);
        let camarar = new TWEEN.Tween(this.camera.rotation)
          .to(rotationr, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camarar.start();
        let positionA = new THREE.Vector3(0, 1.92, 0);
        let ascensor1 = new TWEEN.Tween(this.ascensor.position).to(
          positionA,
          1700
        );
        ascensor1.start();
        let rotationA = new THREE.Vector3(0, 0, 0);
        let ascensor2 = new TWEEN.Tween(this.ascensor.rotation).to(
          rotationA,
          1700
        );
        ascensor2.start();
        let rotationP1 = new THREE.Vector3(0, 0, 0);
        let Puerta1 = new TWEEN.Tween(this.PuertaIA.rotation).to(
          rotationP1,
          1000
        );
        Puerta1.start();
        let rotationP = new THREE.Vector3(0, 2, 0);
        let Puerta = new TWEEN.Tween(this.PuertaD.rotation).to(rotationP, 2700);
        Puerta.start();
        this.sphereMesh.position.x = -0.8;
        this.sphereMesh.position.y = 2.2;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
      } else if (
        this.camera.position.y <= 3.5 &&
        this.camera.position.y >= 2.5
      ) {
        let position1 = new THREE.Vector3(0.8, 1.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        let rotationr = new THREE.Vector3(-0.3, 0, 0);
        let camarar = new TWEEN.Tween(this.camera.rotation)
          .to(rotationr, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camarar.start();
        let positionA = new THREE.Vector3(0, 0.95, 0);
        let ascensor1 = new TWEEN.Tween(this.ascensor.position).to(
          positionA,
          1700
        );
        ascensor1.start();
        let rotationA = new THREE.Vector3(0, 3.1416, 0);
        let ascensor2 = new TWEEN.Tween(this.ascensor.rotation).to(
          rotationA,
          1700
        );
        ascensor2.start();
        let rotationP1 = new THREE.Vector3(0, 0, 0);
        let Puerta1 = new TWEEN.Tween(this.PuertaD.rotation).to(
          rotationP1,
          1000
        );
        Puerta1.start();
        let rotationP = new THREE.Vector3(0, 2, 0);
        let Puerta = new TWEEN.Tween(this.PuertaH.rotation).to(rotationP, 2700);
        Puerta.start();
        this.sphereMesh.position.x = 0.8;
        this.sphereMesh.position.y = 1.2;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
      } else if (
        this.camera.position.y <= 2.5 &&
        this.camera.position.y >= 1.5
      ) {
        let position1 = new THREE.Vector3(-0.8, 0.85, 1.8);
        let camara = new TWEEN.Tween(this.camera.position)
          .to(position1, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camara.start();
        let rotationr = new THREE.Vector3(-0.3, 0, 0);
        let camarar = new TWEEN.Tween(this.camera.rotation)
          .to(rotationr, 1700)
          .easing(TWEEN.Easing.Quadratic.InOut);
        camarar.start();
        let positionA = new THREE.Vector3(0, 0.01, 0);
        let ascensor1 = new TWEEN.Tween(this.ascensor.position).to(
          positionA,
          1700
        );
        ascensor1.start();
        let rotationA = new THREE.Vector3(0, 0, 0);
        let ascensor2 = new TWEEN.Tween(this.ascensor.rotation).to(
          rotationA,
          1700
        );
        ascensor2.start();
        let rotationP1 = new THREE.Vector3(0, 0, 0);
        let Puerta1 = new TWEEN.Tween(this.PuertaH.rotation).to(
          rotationP1,
          1000
        );
        Puerta1.start();
        let rotationP = new THREE.Vector3(0, 2, 0);
        let Puerta = new TWEEN.Tween(this.PuertaCB.rotation).to(
          rotationP,
          2700
        );
        Puerta.start();
        this.sphereMesh.position.x = -0.8;
        this.sphereMesh.position.y = 0;
        this.sphereMesh.position.z = -0.5;
        this.controls.target.copy(this.sphereMesh.position); //Objetivo de la cámara
        this.controls.update();
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
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      // crea la escena
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#FFF");
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
      // const size = 10;
      // const divisions = 10;
      // const gridHelper = new THREE.GridHelper(size, divisions);
      // gridHelper.translateY(-1);
      // this.scene.add(gridHelper);

      //añadiendo modelo .glb
      // const axesHelper = new THREE.AxesHelper(5);
      // axesHelper.translateY(-1);
      // this.scene.add(axesHelper);

      const loader = new GLTFLoader();

      loader.load("/three-assets/Habitaciones_export.glb", (gltf) => {
        const model = gltf.scene;
        this.animations = gltf.animations;
        gltf.scene.traverse(function (node) {
          if (node.isMesh || node.isLight) node.castShadow = true;
          if (node.isMesh || node.isLight) node.receiveShadow = true;
        });
        this.mixer = new THREE.AnimationMixer(model);
        console.log(this.animations);
        let action = this.mixer.clipAction(this.animations[0]);
        action.play();
        this.scene.add(model);
        console.log(`modelo cargado`);
        this.saltar = true;
        model.position.set(0, 0, 0);
        model.scale.set(5, 5, 5);
        // model.needsUpdate = true;
      });
      const loader3 = new GLTFLoader(); //Cabina Ascensor
      loader3.load("/three-assets/Ascensor_cabina.glb", (gltf) => {
        this.ascensor = gltf.scene;
        this.scene.add(this.ascensor);

        this.ascensor.position.set(0, 0.015, 0);
        this.ascensor.scale.set(5, 5, 5);
      });
      const loader4 = new GLTFLoader(); //Puerta Ciencias Básicas
      loader4.load("/three-assets/PuertaCB.glb", (gltf) => {
        this.PuertaCB = gltf.scene;
        this.scene.add(this.PuertaCB);

        this.PuertaCB.position.set(0, 0, 0);
        this.PuertaCB.scale.set(5, 5, 5);
        this.PuertaCB.rotation.set(0, 2, 0);
      });
      const loader5 = new GLTFLoader(); //Puerta Humanística
      loader5.load("/three-assets/PuertaH.glb", (gltf) => {
        this.PuertaH = gltf.scene;
        this.scene.add(this.PuertaH);

        this.PuertaH.position.set(0, 0, 0);
        this.PuertaH.scale.set(5, 5, 5);
        this.PuertaH.rotation.set(0, 0, 0);
      });
      const loader6 = new GLTFLoader(); //Puerta Diseño
      loader6.load("/three-assets/PuertaD.glb", (gltf) => {
        this.PuertaD = gltf.scene;
        this.scene.add(this.PuertaD);

        this.PuertaD.position.set(0, 0, 0);
        this.PuertaD.scale.set(5, 5, 5);
        this.PuertaD.rotation.set(0, 0, 0);
      });
      const loader7 = new GLTFLoader(); //Puerta Ingeniería aplicada
      loader7.load("/three-assets/PuertaIA.glb", (gltf) => {
        this.PuertaIA = gltf.scene;
        this.scene.add(this.PuertaIA);

        this.PuertaIA.position.set(0, 0, 0);
        this.PuertaIA.scale.set(5, 5, 5);
        this.PuertaIA.rotation.set(0, 0, 0);
      });

      // ------------------------------------------------------
      //Ventana interactiva
      this.grupo1 = new THREE.Object3D();
      const geometry = new THREE.BoxGeometry(1, 0.45, 0.02);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(0, 3.57, -0.36);
      cube.rotation.set(0, 0.9, 0);
      this.grupo1.add(cube);

      //Muñeco interactivo
      this.grupo2 = new THREE.Object3D();
      const geometry1 = new THREE.CylinderGeometry(0.07, 0.07, 0.2, 32);
      const cylinder = new THREE.Mesh(geometry1, material);
      cylinder.position.set(-0.9, 2.56, -0.45);
      this.grupo2.add(cylinder);
      this.grupo3 = new THREE.Object3D();
      const geometry3 = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 32);
      const cylinder3 = new THREE.Mesh(geometry3, material);
      cylinder3.position.set(-1.08, 0.36, -0.1);
      this.grupo3.add(cylinder3);
      // ------------------
      
      //Lampara interactiva
      const geometry2 = new THREE.CylinderGeometry(0.001, 0.08, 0.15, 32);
      this.material1 = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.0,
      });
      const cylinder2 = new THREE.Mesh(geometry2, this.material1);
      cylinder2.position.set(-1.02, 0.36, -0.13);
      cylinder2.rotation.set(0.2, 0, 0.4);
      this.scene.add(cylinder2);
      this.spotLight = new THREE.SpotLight(
        0xffffff,
        this.intensity,
        0.15,
        0.5,
        0.02
      );

      //Luz interactiva
      this.spotLight.target.position.set(-0.85, 0, -0.2);
      this.spotLight.target.updateMatrixWorld();
      this.spotLight.position.set(-1.05, 0.42, -0.11);
      this.scene.add(this.spotLight);
      console.log(this.spotLight);
      console.log(this.material1);

      //Video pacman
      const video = document.getElementById("video1");
      const videoTexture = new THREE.VideoTexture(video);
      const videoMaterial = new THREE.MeshBasicMaterial({
        map: videoTexture,
        side: THREE.FrontSide,
        toneMapped: false,
      });
      const screen = new THREE.PlaneGeometry(0.195, 0.195, 1);
      const videoScreen = new THREE.Mesh(screen, videoMaterial);
      videoScreen.position.set(0.63, 3.38, -0.745);
      videoScreen.rotation.set(-0.42, -0.64, -0.27);
      this.scene.add(videoScreen);
      video.play();

      //video diseño esfera
      const video2 = document.getElementById("video2");
      const videoTexture2 = new THREE.VideoTexture(video2);
      const screen2 = new THREE.PlaneGeometry(0.25, 0.25, 1);
      const videoMaterial2 = new THREE.MeshBasicMaterial({
        map: videoTexture2,
        side: THREE.FrontSide,
        toneMapped: false,
      });
      const videoScreen2 = new THREE.Mesh(screen2, videoMaterial2);
      videoScreen2.position.set(-1.51, 2.618, -0.16);
      videoScreen2.rotation.set(0, 1.2, 0);
      this.scene.add(videoScreen2);
      video2.play();

      //video diseño rectangulo
      const video3 = document.getElementById("video3");
      const videoTexture3 = new THREE.VideoTexture(video3);
      const screen3 = new THREE.PlaneGeometry(0.25, 0.25, 1);
      const videoMaterial3 = new THREE.MeshBasicMaterial({
        map: videoTexture3,
        side: THREE.FrontSide,
        toneMapped: false,
      });
      const videoScreen3 = new THREE.Mesh(screen3, videoMaterial3);
      videoScreen3.position.set(-1.37, 2.618, -0.398);
      videoScreen3.rotation.set(0, 0.905, 0);
      this.scene.add(videoScreen3);
      video3.play();

      //video diseño cuadrado
      const video4 = document.getElementById("video4");
      const videoTexture4 = new THREE.VideoTexture(video4);
      const screen4 = new THREE.PlaneGeometry(0.25, 0.25, 1);
      const videoMaterial4 = new THREE.MeshBasicMaterial({
        map: videoTexture4,
        side: THREE.FrontSide,
        toneMapped: false,
      });
      const videoScreen4 = new THREE.Mesh(screen4, videoMaterial4);
      videoScreen4.position.set(-1.169, 2.618, -0.59);
      videoScreen4.rotation.set(0, 0.6, 0);
      this.scene.add(videoScreen4);
      video4.play();

      //video tablet
      const video5 = document.getElementById("video5");
      const videoTexture5 = new THREE.VideoTexture(video5);
      const screen5 = new THREE.PlaneGeometry(0.125, 0.075, 1);
      const videoMaterial5 = new THREE.MeshBasicMaterial({
        map: videoTexture5,
        side: THREE.FrontSide,
        toneMapped: false,
      });
      const videoScreen5 = new THREE.Mesh(screen5, videoMaterial5);
      videoScreen5.position.set(0.988, 3.295, 0.158);
      videoScreen5.rotation.set(-0.22, 0.055, 0.02);
      this.scene.add(videoScreen5);
      video5.play();

      //video caballete
      this.grupo4 = new THREE.Object3D();
      this.video6 = document.getElementById("video6");
      const videoTexture6 = new THREE.VideoTexture(this.video6);
      const screen6 = new THREE.PlaneGeometry(0.25, 0.18, 1);
      const videoMaterial6 = new THREE.MeshBasicMaterial({
        map: videoTexture6,
        side: THREE.FrontSide,
        toneMapped: false,
      });
      const videoScreen6 = new THREE.Mesh(screen6, videoMaterial6);
      videoScreen6.position.set(1.265, 1.33, 0.34);
      videoScreen6.rotation.set(-0.25, -0.12, -0.03);
      this.grupo4.add(videoScreen6);

      this.render();
    },
    onMouseMove(event) {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      event.preventDefault();
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      this.raycaster = new THREE.Raycaster();
      this.raycaster.setFromCamera(this.mouse, this.camera);
      this.scene.add(this.grupo1);
      this.scene.add(this.grupo2);
      this.scene.add(this.grupo3);
      this.scene.add(this.grupo4);
      // calculate objects intersecting the picking ray
      this.intersects1 = this.raycaster.intersectObjects(this.grupo1.children);
      this.intersects2 = this.raycaster.intersectObjects(this.grupo2.children);
      this.intersects3 = this.raycaster.intersectObjects(this.grupo3.children);
      this.intersects4 = this.raycaster.intersectObjects(this.grupo4.children);
      // const intersects = this.raycaster.intersectObjects(this.scene.children);
      if (this.intersects1.length > 0 && this.mixer.length != 0) {
        console.log("intersecto un objeto");
        let aux = 0;
        let action = this.mixer.clipAction(this.animations[0]);
        let action1 = this.mixer.clipAction(this.animations[1]);
        // action1.paused = false;
        if (aux == 0) {
          aux == 1;
          action.stop();
          action1.play();
        }
        // action1.crossFadeFrom(action, 1, true);
      }
      if (this.intersects2.length > 0 && this.mixer.length != 0) {
        console.log("intersecto un objeto2");
        let aux = 0;
        let action = this.mixer.clipAction(this.animations[0]);
        let action2 = this.mixer.clipAction(this.animations[2]);
        // action1.paused = false;
        if (aux == 0) {
          aux == 1;
          action.stop();
          action2.play();
        }
      }
      if (this.intersects3.length > 0 && this.mixer.length != 0) {
        let aux = 0;
        console.log("intersecto lampara");

        if (aux == 0) {
          aux == 1;
        }
        if (this.spotLight.intensity == 0) {
          this.spotLight.intensity = 2;
          this.material1.opacity = 0.05;
        }
      }
      if (this.intersects4.length > 0 && this.mixer.length != 0) {
        console.log("intersecto un objeto4");
        let aux = 0;

        if (aux == 0) {
          aux == 1;
          this.video6.play();
        }
      }
      if (
        this.intersects1.length == 0 &&
        this.intersects2.length == 0 &&
        this.intersects3.length == 0 &&
        this.intersects4.length == 0 &&
        this.mixer.length != 0
      ) {
        console.log("intersecto FONDO");

        if (this.spotLight.intensity == 2) {
          this.spotLight.intensity = 0;
          this.material1.opacity = 0;
        }
        let aux = 0;
        let action = this.mixer.clipAction(this.animations[0]);
        let action1 = this.mixer.clipAction(this.animations[1]);
        let action2 = this.mixer.clipAction(this.animations[2]);
        // action1.paused = true;
        if (aux == 0) {
          aux == 1;
          action2.stop();
          action1.stop();
          action.play();
          this.video6.pause();
        }
      }
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
        this.controls.update();
        // this.scene.update();
        if (this.mixer.length != 0) {
          this.mixer.update(delta);
          TWEEN.update(this.time);
          window.addEventListener("mousemove", this.onMouseMove, false);
        }

        this.renderer.render(this.scene, this.camera);
        // console.log(this.camera.position);
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
<style scoped>
.lds-ellipsis {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
button {
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  outline: 0;
}
svg {
  padding: 5px;
  width: 2rem;
}
.arrow {
  cursor: pointer;
  position: absolute;
  /* top: 50%; */
  margin-top: -45px;
  margin-left: -35px;
  width: 70px;
  height: 90px;
  z-index: 500;
  right: 6rem;
  bottom: 1.5rem;
  color: white;
}
.right:hover polyline,
.right:focus polyline {
  stroke-width: 10;
}
.right:active polyline {
  stroke-width: 15;
  transition: all 100ms ease-in-out;
}
polyline {
  transition: all 250ms ease-in-out;
  stroke-width: 5;
}
.btn_iniciar {
  position: absolute;
  border-radius: 25px;
  padding: 0.2rem 0;
  height: 50px;
  width: 15%;
  background-color: #d01f22;
  color: #0e031a;
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.493);
  margin: auto;
  z-index: 500;
  top: 150px;
  bottom: -3rem;
  left: 0;
  right: 0;
  opacity: 0;
  animation: cambiar 2s;
  animation-delay: 9s;
  animation-fill-mode: forwards;
}
@keyframes cambiar {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 1340px) {
  .btn_iniciar {
    position: absolute;
    border-radius: 25px;
    padding: 0.2rem 0;
    height: 50px;
    width: 15%;
    background-color: #d01f22;
    color: #0e031a;
    display: inline-flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.493);
    margin: auto;
    z-index: 500;
    top: 150px;
    bottom: 4rem;
    left: 0;
    right: 0;
    opacity: 0;
    animation: cambiar 2s;
    animation-delay: 9s;
    animation-fill-mode: forwards;
  }
}
</style>