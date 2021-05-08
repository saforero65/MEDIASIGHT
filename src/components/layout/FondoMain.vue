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
      <button class="MoverCamara" @click="Mover">Cámara</button>
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
    };
  },
  methods: {
    Mover() {
      if (this.Mover_Camara) {
        this.camera.position.set(0, 2, 6);
        this.Mover_Camara = false;
      } else {
        this.camera.position.set(0, 0, 0);
        this.Mover_Camara = true;
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
      this.camera.position.set(1, 1, 3);
      //Orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set(0, 0, 0); //Objetivo de la cámara
      this.controls.enablePan = true;
      this.controls.maxAzimuthAngle = Math.PI / 2;
      this.controls.minAzimuthAngle = -Math.PI / 2;
      this.controls.maxPolarAngle = Math.PI / 2;
      this.controls.minDistance = 1;
      // this.controls.maxDistance = 3;
      // this.controls.autoRotate = true;
      // this.controls.autoRotateSpeed = 0.2;

      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.5;

      this.controls.update();
      // añade luces
      // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x94c9ff, 2);
      // hemiLight.position.set(0, 3, 0);

      // this.scene.add(hemiLight);
      // const helper1 = new THREE.HemisphereLightHelper(hemiLight, 2);
      // this.scene.add(helper1);

      // const dirLight3 = new THREE.DirectionalLight(0xffffff, 1);
      // dirLight3.position.set(0, 10, 5);
      // // dirLight3.target.position.set(0, 1, 0);
      // // dirLight3.target.updateMatrixWorld();
      // dirLight3.castShadow = true;
      // dirLight3.shadow.camera.top = 5;
      // dirLight3.shadow.camera.bottom = -5;
      // dirLight3.shadow.camera.left = -5;
      // dirLight3.shadow.camera.right = 5;
      // dirLight3.shadow.camera.near = 0.1;
      // dirLight3.shadow.camera.far = 40;
      // this.scene.add(dirLight3);

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

      //FONDO
      // var geometry2 = new THREE.BufferGeometry();
      // var sphere = new THREE.SphereGeometry(0.4, 15);
      // var plano = new THREE.CircleGeometry(1, 10);

      // var textureLoader = new THREE.TextureLoader();

      // var sprite1 = textureLoader.load("@/assets/logo.png");
      // var sprite2 = textureLoader.load('textures/snowflake2.png');
      // var Material1 = new THREE.MeshStandardMaterial({
      //   color: 0xffffff,
      //   // map: sprite1,
      //   transparent: true,
      // });
      // const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      // const geometry2 = new THREE.TorusGeometry(0.3, 0.1, 3, 3);
      // // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // var material3 = new THREE.MeshPhongMaterial({
      //   color: 0x424242,
      //   side: THREE.DoubleSide,
      //   wireframe: true,
      //   shininess: 70,
      // });
      // // const material = new THREE.WireframeGeometry(geometry);
      // // const material2 = new THREE.WireframeGeometry(geometry2);

      // var range = 5;
      // this.particulas = new THREE.Object3D();
      // this.scene.add(this.particulas);
      // this.particulas2 = new THREE.Object3D();
      // this.scene.add(this.particulas2);

      // for (var i = 0; i < 10; i++) {
      //   var cube = new THREE.Mesh(geometry, material3);

      //   cube.position.x = range * (0.5 - Math.random());
      //   cube.position.y = range * (0.5 - Math.random());
      //   cube.position.z = range * (0.5 - Math.random());
      //   cube.rotation.x = range * (0.5 - Math.random());
      //   this.particulas.add(cube);

      //   var cube2 = new THREE.Mesh(geometry2, material3);

      //   cube2.position.x = range * (0.5 - Math.random());
      //   cube2.position.y = range * (0.5 - Math.random());
      //   cube2.rotation.y = range * (0.5 - Math.random());
      //   cube2.position.z = range * (0.5 - Math.random());
      //   this.particulas2.add(cube2);
      // }
      // this.particulas2.translateX(-10);
      // this.particulas.translateX(-10);
      const loader = new GLTFLoader();

      // var fondo1 = new THREE.CubeTextureLoader()
      //   .setPath("/fondobox/")
      //   .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
      // // fondo1.format = THREE.RGBFormat;
      // console.log(fondo1);
      // this.scene.background = fondo1;

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
      this.raycaster = new THREE.Raycaster();
      this.points = [
        {
          position: new THREE.Vector3(-1.6789, 0.44965, 0.10555),
          element: document.querySelector(".pointProject_1"),
        },
        {
          position: new THREE.Vector3(1.65975, 1.4345, 0.03925),
          element: document.querySelector(".pointProject_2"),
        },
        {
          position: new THREE.Vector3(-0.244, 2.3842, -0.24985),
          element: document.querySelector(".pointProject_3"),
        },
        {
          position: new THREE.Vector3(1.6473, 3.35865, 0.03885),
          element: document.querySelector(".pointProject_4"),
        },
        {
          position: new THREE.Vector3(-1.6811, 0.5912, 0.00745),
          element: document.querySelector(".point-1"),
        },
        {
          position: new THREE.Vector3(-0.6839, 0.3635, -0.0836),
          element: document.querySelector(".point-2"),
        },
        {
          position: new THREE.Vector3(-0.84935, 0.3072, 0.55295),
          element: document.querySelector(".point-3"),
        },
        // {
        //   position: new THREE.Vector3(1.63735, 1.56235, -0.045),
        //   element: document.querySelector(".point-4"),
        // },
        // {
        //   position: new THREE.Vector3(0.6827, 1.19975, 0.0751),
        //   element: document.querySelector(".point-5"),
        // },
        // {
        //   position: new THREE.Vector3(0.24735, 1.6617, -0.46475),
        //   element: document.querySelector(".point-6"),
        // },
        // {
        //   position: new THREE.Vector3(1.615, 3.4663, -0.04465),
        //   element: document.querySelector(".point-7"),
        // },
        // {
        //   position: new THREE.Vector3(0.8487, 3.3736, 0.23075),
        //   element: document.querySelector(".point-8"),
        // },
        // {
        //   position: new THREE.Vector3(0.57445, 3.45325, -0.0522),
        //   element: document.querySelector(".point-9"),
        // },
        // {
        //   position: new THREE.Vector3(0.60245, 3.3337, -0.7051),
        //   element: document.querySelector(".point-10"),
        // },
        // {
        //   position: new THREE.Vector3(-0.26745, 2.50965, -0.3352),
        //   element: document.querySelector(".point-11"),
        // },
        // {
        //   position: new THREE.Vector3(-0.72475, 2.5461, -0.4612),
        //   element: document.querySelector(".point-12"),
        // },
        // {
        //   position: new THREE.Vector3(-0.49355, 2.1686, 0.5836),
        //   element: document.querySelector(".point-13"),
        // },
        // {
        //   position: new THREE.Vector3(0.55145, 3.5849, -0.76405),
        //   element: document.querySelector(".point-14"),
        // },
      ];
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

        this.controls.update();
        // this.scene.update();
        if (this.mixer.length != 0) {
          this.mixer.update(delta);
          // this.content_ponits();
          console.log(`mixer update fondo main`);
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
