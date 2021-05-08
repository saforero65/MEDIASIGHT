<template >
  <div class="background">
    <div class="menu_box">
      <div class="perfil">
        <div class="img_perfils">
          <img
            class="img_perfil"
            :src="getImageUrl(avatar)"
            alt="imagen perfil"
          />
        </div>
        <h2 class="perfil_name">{{ nombre }}</h2>
        <h3 class="perfil_type">{{ tipo }}</h3>
      </div>
      <template v-if="!mostrardep">
        <div class="menu">
          <div>
            <h3 class="title_menu">MENÚ</h3>
            <ul class="list">
              <router-link class="link" to="/dashboard">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/usuario.svg"
                    alt="imagnen_perfil"
                  />Perfil
                </li>
              </router-link>
              <router-link class="link" to="/AdministrarProyectos">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/boton-agregar.svg"
                    alt="imagnen_perfil"
                  />Administrar Proyectos
                </li>
              </router-link>
              <router-link class="link" to="/AdministrarContenido">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/boton-agregar.svg"
                    alt="imagnen_perfil"
                  />Administrar Contenido
                </li>
              </router-link>
            </ul>
          </div>
          <a class="link" href="/">
            <img
              class="img_footer"
              src="@/assets/img/logo_main.png"
              alt="imagen_perfil"
            />
          </a>
        </div>
      </template>
    </div>
    <div class="perfil_content">
      <div class="head_content">
        <div>
          <h1 class="content_title">Administrar Proyectos</h1>
          <h3 class="content_subtitle">Proyectos</h3>
        </div>

        <template v-if="user">
          <div class="dropdown">
            <img
              class="img_menu"
              src="@/assets/img/icons/menu.svg"
              alt="imagnen_perfil"
            />
            <div class="dropdown-content">
              <router-link to="/">Página Principal</router-link>
              <div @click.prevent="logout">
                <a class="logout">Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div
        v-if="mostrarMaterias"
        style="
          height: 75%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <div class="materias">
          <div>
            <a @click="verCB()">
              <b-card
                overlay
                text-variant="white"
                title="Ciencias Basicas"
                style="max-width: 500px"
              >
              </b-card>
            </a>
          </div>
          <div>
            <a @click="verH()">
              <b-card
                overlay
                text-variant="white"
                title="Humanistica"
                style="max-width: 500px"
              >
              </b-card>
            </a>
          </div>
        </div>
        <div class="materias">
          <div>
            <a @click="verIA()">
              <b-card
                overlay
                text-variant="white"
                title="Ingenieria Aplicada"
                style="max-width: 500px"
              >
              </b-card>
            </a>
          </div>
          <div>
            <a @click="verI()">
              <b-card
                overlay
                text-variant="white"
                title="Ingenieria"
                style="max-width: 500px; min-heigth=100px"
              >
              </b-card>
            </a>
          </div>
        </div>
      </div>
      <div class="overflow-auto" style="height: 75%" v-if="mostrarCB">
        <b-button pill variant="primary" class="volver" @click="volver()"
          >Volver</b-button
        >

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Correo</th>
              <th scope="col">Estado</th>
              <th scope="col">Nombre del Proyecto</th>
              <th scope="col">Materia</th>
              <th scope="col">Ver</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in proyectos" v-bind:key="item.id">
              <th v-if="item.data.habitacion == 'Ciencias Básicas'" scope="row">
                {{ item.data.nombre }}
              </th>
              <td
                v-if="
                  item.data.estado == 'aprobado' &&
                  item.data.habitacion == 'Ciencias Básicas'
                "
              >
                <b class="aprobado">{{ item.data.estado }}</b>
              </td>
              <td
                v-if="
                  item.data.estado == 'denegado' &&
                  item.data.habitacion == 'Ciencias Básicas'
                "
              >
                <b class="denegado">{{ item.data.estado }}</b>
              </td>
              <td
                v-if="
                  item.data.estado == 'pendiente' &&
                  item.data.habitacion == 'Ciencias Básicas'
                "
              >
                <b class="pendiente">{{ item.data.estado }}</b>
              </td>
              <td v-if="item.data.habitacion == 'Ciencias Básicas'">
                {{ item.data.nombre_proyecto }}
              </td>
              <td v-if="item.data.habitacion == 'Ciencias Básicas'">
                {{ item.data.habitacion }}
              </td>
              <td
                v-if="item.data.habitacion == 'Ciencias Básicas'"
                @click="
                  (descripcion = item.data.descripcion),
                    (nombre_proyecto = item.data.nombre_proyecto)
                "
              >
                <img
                  v-b-modal="modalId(item.id)"
                  class="img_item botn"
                  src="@/assets/img/icons/visibilidad.svg"
                  alt="imagnen_perfil"
                />
                <!-- <b-btn v-b-modal="modalId(item.id)">ver</b-btn> -->
                <b-modal
                  :header-bg-variant="headerBgVariant"
                  :header-text-variant="headerTextVariant"
                  :body-bg-variant="bodyBgVariant"
                  :body-text-variant="bodyTextVariant"
                  :footer-bg-variant="footerBgVariant"
                  :footer-text-variant="footerTextVariant"
                  centered
                  :id="item.id"
                  title="Revisión de Formulario de proyecto "
                >
                  <div class="popup_ver">
                    <div class="primerrow">
                      <div>
                        <h3 class="subtittle">Nombre del Proyecto</h3>
                        <!-- <p>{{ item.data.nombre_proyecto }}</p> -->
                        <input type="text" v-model="nombre_proyecto" />
                      </div>
                      <div>
                        <h3 class="subtittle">Materia</h3>
                        <p>{{ item.data.habitacion }}</p>
                      </div>
                    </div>
                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>
                      <!-- <p class="descripcion">{{ item.data.descripcion }}</p> -->
                      <textarea
                        style="height: 12rem"
                        type="text"
                        v-model="descripcion"
                      />
                    </div>
                    <div class="tercerdrow">
                      <h3 class="subtittle">Imágenes</h3>
                      <b-img-lazy
                        v-bind="mainProps"
                        :src="getImageUrl(item.data.imagen)"
                        alt="Image 1"
                      ></b-img-lazy>
                    </div>
                  </div>
                  <template #modal-footer="{}">
                    <b-button
                      variant="danger"
                      @click.prevent="updateStatusD(item.id, item.data.id)"
                    >
                      Denegar
                    </b-button>
                    <b-spinner v-if="cargando" label="Spinning"></b-spinner>
                    <b-button
                      variant="success"
                      @click="updateStatusA(item.id, item.data.id)"
                    >
                      Aprobar
                    </b-button>
                    <b-spinner v-if="cargando2" label="Spinning"></b-spinner>
                  </template>
                </b-modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="overflow-auto" style="height: 75%" v-if="mostrarH">
        <b-button pill variant="primary" class="volver" @click="volver()"
          >Volver</b-button
        >
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Correo</th>
              <th scope="col">Estado</th>
              <th scope="col">Nombre del Proyecto</th>
              <th scope="col">Materia</th>
              <th scope="col">Ver</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in proyectos" v-bind:key="item.id">
              <th v-if="item.data.habitacion == 'Humanística'" scope="row">
                {{ item.data.nombre }}
              </th>
              <td
                v-if="
                  item.data.estado == 'aprobado' &&
                  item.data.habitacion == 'Humanística'
                "
              >
                <b class="aprobado">{{ item.data.estado }}</b>
              </td>
              <td
                v-if="
                  item.data.estado == 'denegado' &&
                  item.data.habitacion == 'Humanística'
                "
              >
                <b class="denegado">{{ item.data.estado }}</b>
              </td>
              <td
                v-if="
                  item.data.estado == 'pendiente' &&
                  item.data.habitacion == 'Humanística'
                "
              >
                <b class="pendiente">{{ item.data.estado }}</b>
              </td>
              <td v-if="item.data.habitacion == 'Humanística'">
                {{ item.data.nombre_proyecto }}
              </td>
              <td v-if="item.data.habitacion == 'Humanística'">
                {{ item.data.habitacion }}
              </td>
              <td
                v-if="item.data.habitacion == 'Humanística'"
                @click="
                  (descripcion = item.data.descripcion),
                    (nombre_proyecto = item.data.nombre_proyecto)
                "
              >
                <img
                  v-b-modal="modalId(item.id)"
                  class="img_item botn"
                  src="@/assets/img/icons/visibilidad.svg"
                  alt="imagnen_perfil"
                />
                <!-- <b-btn v-b-modal="modalId(item.id)">ver</b-btn> -->
                <b-modal
                  :header-bg-variant="headerBgVariant"
                  :header-text-variant="headerTextVariant"
                  :body-bg-variant="bodyBgVariant"
                  :body-text-variant="bodyTextVariant"
                  :footer-bg-variant="footerBgVariant"
                  :footer-text-variant="footerTextVariant"
                  centered
                  :id="item.id"
                  title="Revisión de Formulario de proyecto "
                >
                  <div class="popup_ver">
                    <div class="primerrow">
                      <div>
                        <h3 class="subtittle">Nombre del Proyecto</h3>
                        <!-- <p>{{ item.data.nombre_proyecto }}</p> -->
                        <input type="text" v-model="nombre_proyecto" />
                      </div>
                      <div>
                        <h3 class="subtittle">Materia</h3>
                        <p>{{ item.data.habitacion }}</p>
                      </div>
                    </div>
                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>
                      <!-- <p class="descripcion">{{ item.data.descripcion }}</p> -->
                      <textarea
                        style="height: 12rem"
                        type="text"
                        v-model="descripcion"
                      />
                    </div>
                    <div class="tercerdrow">
                      <h3 class="subtittle">Imágenes</h3>
                      <b-img-lazy
                        v-bind="mainProps"
                        :src="getImageUrl(item.data.imagen)"
                        alt="Image 1"
                      ></b-img-lazy>
                    </div>
                  </div>
                  <template #modal-footer="{}">
                    <b-button
                      variant="danger"
                      @click.prevent="updateStatusD(item.id, item.data.id)"
                    >
                      Denegar
                    </b-button>
                    <b-spinner v-if="cargando" label="Spinning"></b-spinner>
                    <b-button
                      variant="success"
                      @click="updateStatusA(item.id, item.data.id)"
                    >
                      Aprobar
                    </b-button>
                    <b-spinner v-if="cargando2" label="Spinning"></b-spinner>
                  </template>
                </b-modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="overflow-auto" style="height: 75%" v-if="mostrarIA">
        <b-button pill variant="primary" class="volver" @click="volver()"
          >Volver</b-button
        >
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Correo</th>
              <th scope="col">Estado</th>
              <th scope="col">Nombre del Proyecto</th>
              <th scope="col">Materia</th>
              <th scope="col">Ver</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in proyectos" v-bind:key="item.id">
              <th
                v-if="item.data.habitacion == 'Ingeniería Aplicada'"
                scope="row"
              >
                {{ item.data.nombre }}
              </th>
              <td
                v-if="
                  item.data.estado == 'aprobado' &&
                  item.data.habitacion == 'Ingeniería Aplicada'
                "
              >
                <b class="aprobado">{{ item.data.estado }}</b>
              </td>
              <td
                v-if="
                  item.data.estado == 'denegado' &&
                  item.data.habitacion == 'Ingeniería Aplicada'
                "
              >
                <b class="denegado">{{ item.data.estado }}</b>
              </td>
              <td
                v-if="
                  item.data.estado == 'pendiente' &&
                  item.data.habitacion == 'Ingeniería Aplicada'
                "
              >
                <b class="pendiente">{{ item.data.estado }}</b>
              </td>
              <td v-if="item.data.habitacion == 'Ingeniería Aplicada'">
                {{ item.data.nombre_proyecto }}
              </td>
              <td v-if="item.data.habitacion == 'Ingeniería Aplicada'">
                {{ item.data.habitacion }}
              </td>
              <td
                v-if="item.data.habitacion == 'Ingeniería Aplicada'"
                @click="
                  (descripcion = item.data.descripcion),
                    (nombre_proyecto = item.data.nombre_proyecto)
                "
              >
                <img
                  v-b-modal="modalId(item.id)"
                  class="img_item botn"
                  src="@/assets/img/icons/visibilidad.svg"
                  alt="imagnen_perfil"
                />
                <!-- <b-btn v-b-modal="modalId(item.id)">ver</b-btn> -->
                <b-modal
                  :header-bg-variant="headerBgVariant"
                  :header-text-variant="headerTextVariant"
                  :body-bg-variant="bodyBgVariant"
                  :body-text-variant="bodyTextVariant"
                  :footer-bg-variant="footerBgVariant"
                  :footer-text-variant="footerTextVariant"
                  centered
                  :id="item.id"
                  title="Revisión de Formulario de proyecto "
                >
                  <div class="popup_ver">
                    <div class="primerrow">
                      <div>
                        <h3 class="subtittle">Nombre del Proyecto</h3>
                        <!-- <p>{{ item.data.nombre_proyecto }}</p> -->
                        <input type="text" v-model="nombre_proyecto" />
                      </div>
                      <div>
                        <h3 class="subtittle">Materia</h3>
                        <p>{{ item.data.habitacion }}</p>
                      </div>
                    </div>
                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>
                      <!-- <p class="descripcion">{{ item.data.descripcion }}</p> -->
                      <textarea
                        style="height: 12rem"
                        type="text"
                        v-model="descripcion"
                      />
                    </div>
                    <div class="tercerdrow">
                      <h3 class="subtittle">Imágenes</h3>
                      <b-img-lazy
                        v-bind="mainProps"
                        :src="getImageUrl(item.data.imagen)"
                        alt="Image 1"
                      ></b-img-lazy>
                    </div>
                  </div>
                  <template #modal-footer="{}">
                    <b-button
                      variant="danger"
                      @click.prevent="updateStatusD(item.id, item.data.id)"
                    >
                      Denegar
                    </b-button>
                    <b-spinner v-if="cargando" label="Spinning"></b-spinner>
                    <b-button
                      variant="success"
                      @click="updateStatusA(item.id, item.data.id)"
                    >
                      Aprobar
                    </b-button>
                    <b-spinner v-if="cargando2" label="Spinning"></b-spinner>
                  </template>
                </b-modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="overflow-auto" style="height: 75%" v-if="mostrarI">
        <b-button pill variant="primary" class="volver" @click="volver()"
          >Volver</b-button
        >
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Correo</th>
              <th scope="col">Estado</th>
              <th scope="col">Nombre del Proyecto</th>
              <th scope="col">Materia</th>
              <th scope="col">Ver</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in proyectos" v-bind:key="item.id">
              <th v-if="item.data.habitacion == 'Ingeniería'" scope="row">
                {{ item.data.nombre }}
              </th>
              <td
                v-if="
                  item.data.estado == 'aprobado' &&
                  item.data.habitacion == 'Ingeniería'
                "
              >
                <b class="aprobado">{{ item.data.estado }}</b>
              </td>
              <td
                v-if="
                  item.data.estado == 'denegado' &&
                  item.data.habitacion == 'Ingeniería'
                "
              >
                <b class="denegado">{{ item.data.estado }}</b>
              </td>
              <td
                v-if="
                  item.data.estado == 'pendiente' &&
                  item.data.habitacion == 'Ingeniería'
                "
              >
                <b class="pendiente">{{ item.data.estado }}</b>
              </td>
              <td v-if="item.data.habitacion == 'Ingeniería'">
                {{ item.data.nombre_proyecto }}
              </td>
              <td v-if="item.data.habitacion == 'Ingeniería'">
                {{ item.data.habitacion }}
              </td>
              <td
                v-if="item.data.habitacion == 'Ingeniería'"
                @click="
                  (descripcion = item.data.descripcion),
                    (nombre_proyecto = item.data.nombre_proyecto)
                "
              >
                <img
                  v-b-modal="modalId(item.id)"
                  class="img_item botn"
                  src="@/assets/img/icons/visibilidad.svg"
                  alt="imagnen_perfil"
                />
                <!-- <b-btn v-b-modal="modalId(item.id)">ver</b-btn> -->
                <b-modal
                  :header-bg-variant="headerBgVariant"
                  :header-text-variant="headerTextVariant"
                  :body-bg-variant="bodyBgVariant"
                  :body-text-variant="bodyTextVariant"
                  :footer-bg-variant="footerBgVariant"
                  :footer-text-variant="footerTextVariant"
                  centered
                  :id="item.id"
                  title="Revisión de Formulario de proyecto "
                >
                  <div class="popup_ver">
                    <div class="primerrow">
                      <div>
                        <h3 class="subtittle">Nombre del Proyecto</h3>
                        <!-- <p>{{ item.data.nombre_proyecto }}</p> -->
                        <input type="text" v-model="nombre_proyecto" />
                      </div>
                      <div>
                        <h3 class="subtittle">Materia</h3>
                        <p>{{ item.data.habitacion }}</p>
                      </div>
                    </div>
                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>
                      <!-- <p class="descripcion">{{ item.data.descripcion }}</p> -->
                      <textarea
                        style="height: 12rem"
                        type="text"
                        v-model="descripcion"
                      />
                    </div>
                    <div class="tercerdrow">
                      <h3 class="subtittle">Imágenes</h3>
                      <b-img-lazy
                        v-bind="mainProps"
                        :src="getImageUrl(item.data.imagen)"
                        alt="Image 1"
                      ></b-img-lazy>
                    </div>
                  </div>
                  <template #modal-footer="{}">
                    <b-button
                      variant="danger"
                      @click.prevent="updateStatusD(item.id, item.data.id)"
                    >
                      Denegar
                    </b-button>
                    <b-spinner v-if="cargando" label="Spinning"></b-spinner>
                    <b-button
                      variant="success"
                      @click="updateStatusA(item.id, item.data.id)"
                    >
                      Aprobar
                    </b-button>
                    <b-spinner v-if="cargando2" label="Spinning"></b-spinner>
                  </template>
                </b-modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Firebase from "firebase";
import { db } from "@/firebase/init";
require("@/css/dashboard.css");

export default {
  data() {
    return {
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "dark",
      footerTextVariant: "light",
      cargando: false,
      cargando2: false,
      user: null,
      id: null,
      nombre: null,
      correo: null,
      descripcion: null,
      mostrarCB: null,
      mostrarH: null,
      mostrarIA: null,
      mostrarI: null,
      materia: null,
      nombre_proyecto: null,
      mostrardep: false,
      pop_form: false,
      tipo: null,
      correom: null,
      estado: null,
      avatar: null,
      proyectos: [],
      proyectosadmin: [],
      ver_form: false,
      showModal: false,
      urlImg: null,
      width: 600,
      height: 400,
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 400,
      },
      mostrarMaterias: true,
    };
  },

  methods: {
    volver() {
      this.mostrarCB = false;
      this.mostrarH = false;
      this.mostrarIA = false;
      this.mostrarI = false;
      this.mostrarMaterias = true;
    },
    verCB() {
      this.mostrarCB = true;
      this.mostrarMaterias = false;
      console.log("ver ciencias basicas");
    },
    verH() {
      this.mostrarH = true;
      this.mostrarMaterias = false;
      console.log("ver ciencias basicas");
    },
    verIA() {
      this.mostrarIA = true;
      this.mostrarMaterias = false;
      console.log("ver ciencias basicas");
    },
    verI() {
      this.mostrarI = true;
      this.mostrarMaterias = false;
      console.log("ver ciencias basicas");
    },
    getImageUrl(imageId) {
      return `${imageId}`;
    },
    modalId(i) {
      return i;
    },
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          // this.$router.push({ name: "/" });
          // window.location.href = "/#/home";
        });
      window.location.href = "/";
    },
    updateStatusA(id, id2) {
      this.cargando2 = true;
      db.collection("proyectos_admin")
        .doc(id)
        .update({
          estado: "aprobado",
          descripcion: this.descripcion,
          nombre_proyecto: this.nombre_proyecto,
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.$router.go(0);
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
      db.collection("proyecto")
        .doc(id2)
        .update({
          estado: "aprobado",
          descripcion: this.descripcion,
          nombre_proyecto: this.nombre_proyecto,
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.cargando2 = false;
          this.$router.go(0);
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
      this.ver_form = false;
    },
    updateStatusD(id, id2) {
      this.cargando = true;
      db.collection("proyectos_admin")
        .doc(id)
        .update({
          estado: "denegado",
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });

      db.collection("proyecto")
        .doc(id2)
        .update({
          estado: "denegado",
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.cargando = false;
          this.$router.go(0);
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
      this.ver_form = false;
    },
  },
  created() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
        if (user.email == "admin@unimilitar.edu.co") {
          this.mostrardep = false;
        } else {
          this.mostrardep = true;
        }
        db.collection(user.email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.id = `${doc.id}`;
              this.nombre = `${doc.data().nombre}`;
              this.correo = `${doc.data().correo}`;
              this.tipo = `${doc.data().tipo}`;
              this.avatar = `${doc.data().avatar}`;
            });
          });
        this.proyectos = [];
        this.proyectosadmin = [];
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
        db.collection("proyecto")
          .get()
          .then((r) => {
            r.docs.map((item) => {
              this.proyectosadmin.push({
                id: item.id,
                data: item.data(),
              });
            });
          });
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style scoped>
.popup_ver {
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono", monospace;
}
.primerrow {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
}
.secondrow {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
}
.tercerdrow {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
.cuartodrow {
  display: flex;
  justify-content: space-around;
}
.subtittle {
  font-size: 18px;
}
.descripcion {
  word-wrap: break-word;
}
.botn {
  margin: 0rem;

  max-width: 150px;
  filter: brightness(0);
}

.materias {
  display: flex;
  justify-content: center;
}
.card {
  background: radial-gradient(
    circle,
    rgba(36, 50, 65, 1) 0%,
    rgba(40, 153, 158, 1) 0%,
    rgba(36, 50, 65, 1) 100%
  );
  height: 25vh;
  width: 55vh;
  margin: 1rem;
  border-radius: 10px;
  cursor: pointer;
}
.card-img-overlay {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

@media screen and (max-width: 1440px) {
  .card {
    background: radial-gradient(
      circle,
      rgba(36, 50, 65, 1) 0%,
      rgba(40, 153, 158, 1) 0%,
      rgba(36, 50, 65, 1) 100%
    );
    height: 25vh;
    width: 35vh;
    margin: 1rem;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>>

