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
          <h1 class="content_title">Administrar Contenidos</h1>
          <h3 class="content_subtitle">Contenido</h3>
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
      <div class="overflow-auto" style="height: 75%; padding: 0 1rem">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">titulo</th>
              <th scope="col">habitacion</th>
              <th scope="col">descripcion</th>
              <th scope="col">ver</th>
              <th scope="col">editar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in contenidos" v-bind:key="item.id">
              <th scope="row">{{ item.data.titulo }}</th>
              <td>{{ item.data.habitacion }}</td>
              <td style="width: 300px">
                <p class="initial descripcion-card">
                  {{ item.data.descripcion }}
                </p>
              </td>

              <td>
                <img
                  v-b-modal="modalId(item.id)"
                  class="img_item botn"
                  src="@/assets/img/icons/visibilidad.svg"
                  alt="imagnen_perfil"
                />
                <b-modal
                  centered
                  :id="item.id"
                  title="Revisión de Formulario de proyecto "
                  ok-only
                >
                  <div class="popup_ver">
                    <div class="primerrow">
                      <div>
                        <h3 class="subtittle">Titulo</h3>
                        <p>{{ item.data.titulo }}</p>
                      </div>
                      <div>
                        <h3 class="subtittle">Habitacion</h3>
                        <p>{{ item.data.habitacion }}</p>
                      </div>
                    </div>
                    <div class="secondrow">
                      <h3 class="subtittle">Descripción</h3>
                      <p class="descripcion initial">
                        {{ item.data.descripcion }}
                      </p>
                    </div>
                  </div>
                </b-modal>
              </td>
              <td>
                <img
                  v-b-modal="modalId2(item.id)"
                  class="img_item botn"
                  src="@/assets/img/icons/editar.svg"
                  alt="imagnen_perfil"
                />
                <b-modal
                  :id="item.id + 1"
                  title="Editar Contenido"
                  centered
                  hide-footer
                >
                  <div class="popup_ver">
                    <form @submit.prevent="actualizar_contenido(item.id)">
                      <div class="primerrow2">
                        <div class="row">
                          <div class="col">
                            <h3 class="subtittle">Titulo</h3>
                            <p>{{ item.data.titulo }}</p>
                          </div>
                          <div class="col">
                            <h3 class="subtittle">habitacion</h3>
                            <p>{{ item.data.habitacion }}</p>
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
                        ></textarea>
                      </div>
                      <div class="cuartodrow">
                        <input
                          type="submit"
                          value=" Guardar"
                          class="btn btn-success"
                        />
                      </div>
                    </form>
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
      descripcion: "",
      habitacion: null,
      habitaciones: [
        { text: "habitaciones", value: null },
        "Ciencias Basicas",
        "Humanistica",
        "Ingenieria Aplicada",
        "Ingenieria",
      ],
      titulo: null,
      mostrardep: false,
      pop_form: false,
      tipo: null,
      correom: null,
      estado: null,
      contenidos: [],
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
    modalId(i) {
      return i;
    },
    modalId2(i) {
      return i + 1;
    },
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
    actualizar_contenido(id) {
      if (this.descripcion) {
        db.collection("contenido")
          .doc(id)
          .update({
            descripcion: this.descripcion,
          })
          .then(() => {
            console.log("Document successfully updated!");
            this.$router.go();
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
        this.ver_form = false;
      } else {
        console.log(`description esta en null`);
      }
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
        this.contenidos = [];
        db.collection("contenido")
          .get()
          .then((r) => {
            r.docs.map((item) => {
              this.contenidos.push({
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
.primerrow2 {
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
  text-align: justify;
}
.descripcion-card {
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5% 0 0 0;
}
.row {
  align-items: flex-end;
}
.btn {
  margin: 1rem;
}
.botn {
  margin: 0rem;
  object-fit: cover;
  min-width: 25px;
  filter: brightness(0);
}
.table th,
.table td {
  vertical-align: middle;
  padding: 0.3rem;
  border-top: 1px solid #dee2e6;
  width: 28%;
}
p,
td,
th {
  text-transform: capitalize;
}
.initial {
  text-transform: initial;
}
</style>>

