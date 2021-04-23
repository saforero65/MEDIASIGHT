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
              <router-link class="link" to="/dashboard">
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
              <router-link to="/home">Pagina Principal</router-link>
              <div @click.prevent="logout">
                <router-link to="/home">Cerrar Sesion </router-link>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="content_box">
        <table class="table">
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
                <button @click.prevent="updateStatusA(item.id)">aprovar</button>
                <button @click.prevent="updateStatusD(item.id)">denegar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <div v-if="ver_form">
          <input
            @click.prevent="updateStatus()"
            v-model="estado"
            type="button"
            value="aprovar"
          />
          <input
            @click.prevent="updateStatus()"
            type="button"
            v-model="estado"
            value="denegar"
          />
        </div> -->
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
    };
  },

  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
          // window.location.href = "/#/home";
        });
    },
    updateStatusA(id) {
      db.collection("proyecto")
        .doc(id)
        .update({
          estado: "aprovado",
        })
        .then(() => {
          console.log("Document successfully updated!");
          location.reload();
          this.$router.go(0);
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
      this.ver_form = false;
    },
    updateStatusD(id) {
      db.collection("proyecto")
        .doc(id)
        .update({
          estado: "denegado",
        })
        .then(() => {
          console.log("Document successfully updated!");
          location.reload();
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
          console.log(`estado de mostrar dep=${this.mostrardep}`);
          this.mostrardep = false;
          console.log(`estado de mostrar dep=${this.mostrardep}`);
        } else {
          this.mostrardep = true;
        }
        db.collection(user.email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data().nombre}`);
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
              console.log("item.id");
              console.log(item.id);

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

