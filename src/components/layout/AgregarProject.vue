<template >
  <div class="background">
    <div class="menu_box">
      <div class="perfil">
        <img
          class="img_perfil"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="imagen perfil"
        />
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
              <router-link to="/">Pagina Principal</router-link>
              <div @click.prevent="logout">Cerrar Sesion</div>
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
                    <div class="primerrow">
                      <div class="row">
                        <div class="col">
                          <h3 class="subtittle">Nombre del Proyecto</h3>
                          <input
                            class="form-control"
                            type="text"
                            v-model="nombre_proyecto"
                            placeholder="Nombre del proyecto"
                          />
                        </div>
                        <div class="col">
                          <h3 class="subtittle">Materia</h3>

                          <b-form-select
                            v-model="materia"
                            :options="materias"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>
                    <div class="secondrow">
                      <h3 class="subtittle">Descripcion</h3>

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
                <h5 class="card-subtitle">{{ item.data.materia }}</h5>
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
                        <p>{{ item.data.materia }}</p>
                      </div>
                      <div class="box">
                        <h3 class="subtittle">Estado</h3>
                        <p>{{ item.data.estado }}</p>
                      </div>
                    </div>

                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>
                      <p class="descripcion">{{ item.data.descripcion }}</p>
                    </div>
                    <div class="tercerdrow">
                      <h3 class="subtittle">Imagenes</h3>
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
      materia: null,
      materias: [
        { text: "materia", value: null },
        "Ciencias Basicas",
        "Humanistica",
        "Ingenieria Aplicada",
        "Ingenieria",
      ],
      nombre_proyecto: null,
      mostrardep: false,
      pop_form: false,
      tipo: null,
      estado: "pendiente",
      proyectos: [],
      imagenes: [],
      imagen: null,
      coincide: false,
      urlImg: "",
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
      this.cargando = true;
      if (
        this.descripcion &&
        this.materia &&
        this.nombre_proyecto &&
        this.estado
      ) {
        const refImg = storage.ref().child("imagenes/" + this.imagen.name);
        const metadata = { contentType: "img/jpeg" };
        refImg.put(this.imagen, metadata).then(() => {
          refImg.getDownloadURL().then((url) => {
            this.urlImg = url;

            db.collection("proyecto")
              .add({
                correo: this.correo,
                descripcion: this.descripcion,
                materia: this.materia,
                nombre_proyecto: this.nombre_proyecto,
                estado: this.estado,
                imagen: this.urlImg,
              })
              .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                db.collection("proyectos_admin")
                  .add({
                    correo: this.correo,
                    descripcion: this.descripcion,
                    materia: this.materia,
                    nombre_proyecto: this.nombre_proyecto,
                    estado: this.estado,
                    imagen: this.urlImg,
                    id: docRef.id,
                  })
                  .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    this.cargando = true;
                    this.$router.go(0);
                  })
                  .catch((error) => {
                    console.error("Error adding document: ", error);
                  });
              })
              .catch((error) => {
                console.error("Error adding document: ", error);
              });
          });
        });

        this.pop_form = false;
      } else {
        console.log(`vacio no se agrega proyecto`);
      }
    },
    clickImagen(e) {
      this.imagen = e.target.files[0];
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
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
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

