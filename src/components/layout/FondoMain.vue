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
      v-if="saltar && ocultar == true"
      @click.prevent="ocultar = false"
      class="btn_iniciar"
    >
      empecemos
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
      <!-- <div class="point point-1">
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
    </div> -->
    </div>
  </div>
</template>

<script>
import PreLoader from "@/components/PreLoader";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
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
      // cra la escena
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#141414");
      // añade camaras
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.container.clientWidth / this.container.clientHeight,
        0.1,
        100
      );
      this.camera.position.set(1, 0.5, 3);
      //Orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set(0, 0, 0); //Objetivo de la cámara
      this.controls.enablePan = true;
      this.controls.maxAzimuthAngle = [-2 * Math.PI, Math.PI / 2];
      this.controls.maxPolarAngle = Math.PI / 2;
      this.controls.minDistance = 1;
      this.controls.maxDistance = 10;
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
      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const geometry2 = new THREE.TorusGeometry(0.3, 0.1, 3, 3);
      // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      var material3 = new THREE.MeshPhongMaterial({
        color: 0x424242,
        side: THREE.DoubleSide,
        wireframe: true,
        shininess: 70,
      });
      // const material = new THREE.WireframeGeometry(geometry);
      // const material2 = new THREE.WireframeGeometry(geometry2);

      var range = 20;
      this.particulas = new THREE.Object3D();
      this.scene.add(this.particulas);
      this.particulas2 = new THREE.Object3D();
      this.scene.add(this.particulas2);

      for (var i = 0; i < 100; i++) {
        var cube = new THREE.Mesh(geometry, material3);

        cube.position.x = range * (0.5 - Math.random());
        cube.position.y = range * (0.5 - Math.random());
        cube.position.z = range * (0.5 - Math.random());
        this.particulas.add(cube);

        var cube2 = new THREE.Mesh(geometry2, material3);

        cube2.position.x = range * (0.5 - Math.random());
        cube2.position.y = range * (0.5 - Math.random());
        cube2.position.z = range * (0.5 - Math.random());
        this.particulas2.add(cube2);
      }
      this.particulas2.translateX(-10);
      this.particulas.translateX(-10);
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
          position: new THREE.Vector3(-0.25, 0.535, 1.23),
          element: document.querySelector(".pointProject_1"),
        },
        {
          position: new THREE.Vector3(-0.25, 1.535, 1.23),
          element: document.querySelector(".pointProject_2"),
        },
        {
          position: new THREE.Vector3(-0.25, 2.535, 1.23),
          element: document.querySelector(".pointProject_3"),
        },
        {
          position: new THREE.Vector3(-0.25, 3.535, 1.23),
          element: document.querySelector(".pointProject_4"),
        },
        // {
        //   position: new THREE.Vector3(-0.5, 0.3, 2),
        //   element: document.querySelector(".point-1"),
        // },
        // {
        //   position: new THREE.Vector3(0, 0, 0),
        //   element: document.querySelector(".point-2"),
        // },
        // {
        //   position: new THREE.Vector3(0, 0, 1),
        //   element: document.querySelector(".point-3"),
        // },
        // {
        //   position: new THREE.Vector3(0, 0, 1),
        //   element: document.querySelector(".point-4"),
        // },
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
      if (this.statuspadre && this.statuspadre4 && this.aux2 == 0) {
        requestAnimationFrame(this.render);
        var time = Date.now() * 0.008;
        const delta = this.clock.getDelta();
        this.particulas.position.x = Math.cos(time * 0.005) * -5;
        this.particulas.position.y = Math.cos(time * 0.005) * 5;
        this.particulas2.position.x = Math.cos(time * 0.005) * 5;
        this.particulas2.position.y = Math.cos(time * 0.005) * -5;
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
  background: fuchsia;
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
.MoverCamara {
  position: fixed;
  bottom: 5%;
  right: 0;
}
.btn_Saltar {
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
  right: 25px;
  bottom: 40px;
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
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0%;
  animation: cambiar 3s;
  animation-delay: 13s;
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
</style>