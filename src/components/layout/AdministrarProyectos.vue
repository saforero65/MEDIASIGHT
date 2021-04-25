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
              <router-link to="/home">Pagina Principal</router-link>
              <div @click.prevent="logout">
                <router-link to="/home">Cerrar Sesion </router-link>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="overflow-auto" style="height: 75%">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">correo</th>
              <th scope="col">estado</th>
              <th scope="col">nombre_proyecto</th>
              <th scope="col">materia</th>
              <th scope="col">ver</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in proyectos" v-bind:key="item.id">
              <th scope="row">{{ item.data.correo }}</th>
              <td>{{ item.data.estado }}</td>
              <td>{{ item.data.nombre_proyecto }}</td>
              <td>{{ item.data.materia }}</td>
              <td>
                <img
                  v-b-modal="modalId(item.id)"
                  class="img_item botn"
                  src="@/assets/img/icons/visibilidad.svg"
                  alt="imagnen_perfil"
                />
                <!-- <b-btn v-b-modal="modalId(item.id)">ver</b-btn> -->
                <b-modal
                  centered
                  :id="item.id"
                  title="Revisión de Formulario de proyecto "
                  hide-footer
                >
                  <div class="popup_ver">
                    <div class="primerrow">
                      <div>
                        <h3 class="subtittle">Nombre del Proyecto</h3>
                        <p>{{ item.data.nombre_proyecto }}</p>
                      </div>
                      <div>
                        <h3 class="subtittle">Materia</h3>
                        <p>{{ item.data.materia }}</p>
                      </div>
                    </div>
                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>
                      <p class="descripcion">{{ item.data.descripcion }}</p>
                    </div>
                    <div class="tercerdrow">
                      <h3 class="subtittle">Imagenes</h3>
                      <b-img-lazy
                        v-bind="mainProps"
                        :src="getImageUrl(item.data.imagen)"
                        alt="Image 1"
                      ></b-img-lazy>
                    </div>
                    <div class="cuartodrow">
                      <button
                        v-if="item.data.estado != 'aprobado'"
                        type="button"
                        class="btn btn-success"
                        @click.prevent="updateStatusA(item.id)"
                      >
                        APROBAR
                      </button>
                      <button
                        v-if="item.data.estado != 'denegado'"
                        type="button"
                        class="btn btn-danger"
                        @click.prevent="updateStatusD(item.id)"
                      >
                        DENEGAR
                      </button>
                    </div>
                  </div>
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
      user: null,
      id: null,
      nombre: null,
      correo: null,
      descripcion: null,
      materia: null,
      nombre_proyecto: null,
      mostrardep: false,
      pop_form: false,
      tipo: null,
      correom: null,
      estado: null,
      proyectos: [],
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
    };
  },

  methods: {
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
          this.$router.push({ name: "home" });
          // window.location.href = "/#/home";
        });
    },
    updateStatusA(id) {
      db.collection("proyectos_admin")
        .doc(id)
        .update({
          estado: "aprobado",
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.$router.go(0);
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
      this.ver_form = false;
    },
    updateStatusD(id) {
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
      db.collection("proyectos_admin")
        .doc(id)
        .update({
          estado: "denegado",
        })
        .then(() => {
          console.log("Document successfully updated!");

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
            });
          });
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
</style>>

