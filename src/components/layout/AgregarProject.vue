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

      <template v-if="mostrardep">
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
              <router-link class="link" to="/AgregarProject">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/boton-agregar.svg"
                    alt="imagnen_perfil"
                  />Agregar un Proyecto
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
          <h1 class="content_title">Agregar un Proyecto</h1>
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
      <div class="overflow-auto projects" style="height: 75%">
        <div class="cards_projects">
          <div
            class="card"
            style="width: 18rem; background: #243241; border-radius: 10px"
          >
            <div class="card-body">
              <a v-b-modal.modal-1 class="añadir">
                <img
                  class="img_items"
                  src="@/assets/img/icons/anadir-imagen.svg"
                  alt="imagnen_perfil"
                />
                <p style="width: 50%; text-align: center">
                  Añade un proyecto nuevo
                </p>
              </a>
              <b-modal
                :header-bg-variant="headerBgVariant"
                :header-text-variant="headerTextVariant"
                :body-bg-variant="bodyBgVariant"
                :body-text-variant="bodyTextVariant"
                :footer-bg-variant="footerBgVariant"
                :footer-text-variant="footerTextVariant"
                id="modal-1"
                title="Agregar un Proyecto"
                centered
              >
                <div class="popup_ver">
                  <form enctype="multipart/form-data">
                    <div class="col">
                      <h3 class="subtittle">Nombre del Proyecto</h3>
                      <input
                        class="form-control"
                        type="text"
                        v-model="nombre_proyecto"
                        placeholder="Nombre del proyecto"
                      />
                    </div>
                    <div class="primerrow">
                      <div class="row">
                        <div class="primerrow row">
                          <div class="col">
                            <h3 class="subtittle">Habitación</h3>
                            <b-form-select
                              v-model="habitacion"
                              :options="habitaciones"
                            ></b-form-select>
                          </div>
                          <div class="col">
                            <h3 class="subtittle">Materia</h3>

                            <b-form-select
                              v-if="habitacion == 'Ciencias Básicas'"
                              v-model="materia"
                              :options="materiasCB"
                            ></b-form-select>
                            <b-form-select
                              v-if="habitacion == 'Humanística'"
                              v-model="materia"
                              :options="materiasH"
                            ></b-form-select>
                            <b-form-select
                              v-if="habitacion == 'Ingeniería Aplicada'"
                              v-model="materia"
                              :options="materiasIA"
                            ></b-form-select>
                            <b-form-select
                              v-if="habitacion == 'Ingeniería'"
                              v-model="materia"
                              :options="materiasI"
                            ></b-form-select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>

                      <textarea
                        class="form-control"
                        type="text"
                        v-model="descripcion"
                        style="height: 10rem"
                        placeholder="Máximo de caraceres 250"
                        maxlength="250"
                      ></textarea>
                    </div>
                    <div class="tercerdrow">
                      <h3 class="subtittle">Añadir Imagen</h3>
                      <input
                        @change="clickImagen($event)"
                        type="file"
                        accept="image/*"
                      />

                      <img
                        v-if="urlTemp"
                        class="img_card"
                        :src="urlTemp"
                        alt="imagen para subir"
                      />
                      <!-- <v-img :src="urlTemp"></v-img> -->
                    </div>
                  </form>
                </div>
                <template #modal-footer="{ ok }">
                  <b-button variant="danger" @click="ok()"> Cancelar </b-button>
                  <b-button variant="success" @click="agregar_proyecto()">
                    Guardar
                  </b-button>
                  <b-spinner v-if="cargando" label="Spinning"></b-spinner>
                </template>
                <div v-if="error">
                  <div
                    v-show="ver"
                    class="alert alert-danger position-absolute"
                  >
                    <button
                      v-on:click="ver = !ver"
                      type="button"
                      class="close"
                      data-dismiss="alert"
                    >
                      &times;
                    </button>

                    <strong>¡Hey!</strong>{{ error }}
                  </div>
                </div>
              </b-modal>
            </div>
          </div>
        </div>
        <div v-for="item in proyectos" v-bind:key="item.id">
          <div
            v-if="correo == item.data.correo"
            class="card cards_projects"
            style="border-radius: 10px"
          >
            <img
              class="img_cards"
              :src="getImageUrl(item.data.imagen)"
              alt=""
            />
            <div class="card-body">
              <div class="body_sup">
                <h5 class="card-title">{{ item.data.nombre_proyecto }}</h5>
                <h5 class="card-subtitle">
                  {{ item.data.habitacion }}
                </h5>
              </div>
              <div class="body_inf">
                <p class="card-text descripcion-card">
                  {{ item.data.descripcion }}
                </p>
                <img
                  v-b-modal="modalId(item.id)"
                  class="img_item"
                  src="@/assets/img/icons/visibilidad.svg"
                  alt="ver"
                />

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
                    <div class="primerrow1">
                      <div class="box">
                        <h3 class="subtittle">Nombre del Proyecto</h3>
                        <p>{{ item.data.nombre_proyecto }}</p>
                      </div>
                      <div class="box">
                        <h3 class="subtittle">Materia</h3>
                        <!-- <p>{{ item.data.habitacion }}</p> -->
                        <p>{{ item.data.materia }}</p>
                      </div>
                      <div class="box" v-if="item.data.estado == 'aprobado'">
                        <h3 class="subtittle">Estado</h3>
                        <b class="aprobado">{{ item.data.estado }}</b>
                      </div>
                      <div class="box" v-if="item.data.estado == 'denegado'">
                        <h3 class="subtittle">Estado</h3>
                        <b class="denegado">{{ item.data.estado }}</b>
                      </div>
                      <div class="box" v-if="item.data.estado == 'pendiente'">
                        <h3 class="subtittle">Estado</h3>
                        <b class="pendiente">{{ item.data.estado }}</b>
                      </div>
                    </div>

                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>
                      <p class="descripcion">{{ item.data.descripcion }}</p>
                    </div>
                    <div class="tercerdrow">
                      <h3 class="subtittle">Imágenes</h3>
                      <img
                        class="img_card"
                        :src="getImageUrl(item.data.imagen)"
                        alt=""
                      />
                    </div>
                    <a></a>
                  </div>
                  <template #modal-footer="{ ok }">
                    <b-button variant="success" @click="ok()"> OK </b-button>
                    <b-button variant="danger" @click="borrar(item.id)">
                      Borrar
                    </b-button>
                    <b-spinner v-if="cargando" label="Spinning"></b-spinner>
                  </template>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pop_form"></div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Firebase from "firebase";
import { storage } from "@/firebase/init";
import { db } from "@/firebase/init";
require("@/css/dashboard.css");

export default {
  data() {
    return {
      error: "",
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "dark",
      footerTextVariant: "light",
      cargando: false,
      user: null,
      id: null,
      nombre: null,
      correo: null,
      descripcion: null,
      habitacion: "Ciencias Básicas",
      habitaciones: [
        "Ciencias Básicas",
        "Humanística",
        "Ingeniería Aplicada",
        "Ingeniería",
      ],
      materia: null,
      materiasCB: [
        { text: "Materias", value: null },
        "Matemáticas básicas",
        "Cáculo diferencial ",
        "Cáculo integral",
        "Cálculo vectorial",
        "Ecuaciones dieferenciales ",
        "Física mecánica",
        "Física electricidad y magnetismo ",
        "Física óptica y acústica",
        "Algebra lineal ",
        "Química",
      ],
      materiasH: [
        { text: "Materias", value: null },
        "Cátedra neogranadina ",
        "Historia del arte ",
        "Guiones",
        "Ética",
        "Principios constitucionales",
        "Economía y finanzas ",
        "Gestión empresarial",
        "Gestión integral de proyectos",
      ],
      materiasIA: [
        { text: "Materias", value: null },
        "Taller digital de diseño",
        "Animación 2D",
        "Modelado 3D",
        "Render",
        "Introducción a la computación gráfica ",
        "Computación gráfica ",
        "Simulación",
        "Inteligencia artificial",
        "Diseño I",
        "Diseño II",
        "Diseño III",
        "Procesamiento de señales",
        "Procesamiento de imágenes",
        "Electiva ",
        "Ingeniería de software",
        "Tecnologías de internet",
        "Audio y vídeo ",
        "Electiva de enfásis ",
        "Electiva de enfásis ",
      ],
      materiasI: [
        { text: "Materias", value: null },
        "Programación I",
        "Pogramación II",
        "Programación III",
        "Expresión gráfica ",
        "Introducción a la ingeniería ",
        "Metodologías de la investigación",
        "Dibujo",
        "Seminario de investigación",
        "Electiva de énfasis ",
      ],
      nombre_proyecto: null,
      mostrardep: false,
      pop_form: false,
      tipo: null,
      estado: "pendiente",
      proyectos: [],
      imagenes: [],
      imagen: [],
      coincide: false,
      urlImg: "",
      ver: true,
      urlTemp: "",
      avatar: null,
    };
  },

  methods: {
    borrar(id) {
      this.cargando = true;
      db.collection("proyecto")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.cargando = false;
          this.$router.go(0);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    modalId(i) {
      return i;
    },
    getImageUrl(imageId) {
      return `${imageId}`;
    },
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          // this.$router.push({ name: "/" });
        });
      window.location.href = "/";
    },
    agregar_proyecto() {
      this.error = "";
      this.cargando = true;
      if (
        this.descripcion &&
        this.habitacion &&
        this.nombre_proyecto &&
        this.estado &&
        this.materia &&
        this.imagen
      ) {
        if (
          this.imagen.name.includes(".jpg") ||
          this.imagen.name.includes(".png")
        ) {
          console.log(this.imagen.name);
          const refImg = storage.ref().child("imagenes/" + this.imagen.name);
          const metadata = { contentType: "img/jpeg" };
          refImg.put(this.imagen, metadata).then(() => {
            refImg.getDownloadURL().then((url) => {
              this.urlImg = url;

              console.log(metadata);
              db.collection("proyecto")
                .add({
                  correo: this.correo,
                  nombre: this.nombre,
                  descripcion: this.descripcion,
                  habitacion: this.habitacion,
                  materia: this.materia,
                  nombre_proyecto: this.nombre_proyecto,
                  estado: this.estado,
                  imagen: this.urlImg,
                  tipo: this.tipo,
                })
                .then((docRef) => {
                  console.log("Document written with ID: ", docRef.id);
                  db.collection("proyectos_admin")
                    .add({
                      correo: this.correo,
                      nombre: this.nombre,
                      descripcion: this.descripcion,
                      habitacion: this.habitacion,
                      materia: this.materia,
                      nombre_proyecto: this.nombre_proyecto,
                      estado: this.estado,
                      imagen: this.urlImg,
                      id: docRef.id,
                      tipo: this.tipo,
                    })
                    .then((docRef) => {
                      console.log("Document written with ID: ", docRef.id);
                      this.cargando = false;
                      this.$router.go(0);
                    })
                    .catch((error) => {
                      this.error = error.message;
                      console.error("Error adding document: ", error);
                    });
                })
                .catch((error) => {
                  this.error = error.message;
                  console.error("Error adding document: ", error);
                });
            });
          });
        } else {
          this.cargando = false;
          this.error = "El formato de la imagen debe ser .jpg o .png";
          this.ver = true;
          console.log(`vacio no se agrega proyecto`);
        }

        this.pop_form = false;
      } else {
        this.cargando = false;
        this.error = "Los campos estan vacios";
        this.ver = true;
        console.log(`vacio no se agrega proyecto`);
      }
    },
    clickImagen(e) {
      this.imagen = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.imagen);
      reader.onload = (e) => {
        // console.log(e.target.result);
        this.urlTemp = e.target.result;
      };
    },
  },
  created() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;

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
        db.collection("proyecto")
          .get()
          .then((r) => {
            r.docs.map((item) => {
              this.proyectos.push({
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
.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.cards_projects {
  display: flex;
  width: 18rem;
  height: 18rem;
  margin: 1rem;
}
.img_cards {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.img_card {
  height: 80%;
  width: 80%;
  display: block;
  margin: auto;
}
.card-body {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
}
.body_inf {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  width: 100%;
  background: rgb(36, 50, 65);
  border-radius: 10px;
}
.body_sup {
  background: rgb(36, 50, 65);
  width: 100%;
  padding: 0.5rem;
  color: white;
  border-radius: 10px;
}
.descripcion {
  word-wrap: break-word;
}
.descripcion-card {
  width: 230px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  padding: 0.5rem;
  color: white;
}
.subtittle {
  font-size: 18px;
}
.primerrow {
  justify-content: space-between;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
}
.primerrow1 {
  display: flex;
  justify-content: space-between;

  margin-top: 1rem;
}
.secondrow {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  margin-top: 1rem;
}
.tercerdrow {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-top: 1rem;
}

.row {
  align-items: flex-end;
}
.añadir {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
.cuartodrow {
  display: flex;
  justify-content: space-around;
}
.card-title {
  font-size: 18px;
  text-transform: capitalize;
}
.card-subtitle {
  font-size: 12px;
}
.box {
  width: 30%;
  margin: 1rem;
}
</style>

