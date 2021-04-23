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
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in proyectos" v-bind:key="item.id">
              <th v-if="correo == item.data.correo" scope="row">
                {{ item.data.correo }}
              </th>
              <td v-if="correo == item.data.correo">{{ item.data.estado }}</td>
              <td v-if="correo == item.data.correo">
                {{ item.data.nombre_proyecto }}
              </td>
              <td v-if="correo == item.data.correo">{{ item.data.materia }}</td>
            </tr>
          </tbody>
        </table>
        <button @click.prevent="pop_form = true">Agregar Proyecto</button>
        <div v-if="pop_form">
          <form enctype="multipart/form-data">
            <input
              type="text"
              v-model="nombre_proyecto"
              placeholder="Nombre del proyecto"
            />
            <input type="text" v-model="materia" placeholder="Materia" />
            <input
              type="text"
              v-model="descripcion"
              placeholder="Descripcion"
            />
            <input @change="clickImagen($event)" type="file" accept="image/*" />
            <button
              @click.prevent="agregar_proyecto()"
              type="submit"
              class="boton"
            >
              Guardar
            </button>
          </form>
        </div>
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
      estado: "pendiente",
      proyectos: [],
      imagenes: [],
      imagen: null,
      coincide: false,
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
    agregar_proyecto() {
      if (
        this.descripcion &&
        this.materia &&
        this.nombre_proyecto &&
        this.estado
      ) {
        db.collection("proyecto")
          .add({
            correo: this.correo,
            descripcion: this.descripcion,
            materia: this.materia,
            nombre_proyecto: this.nombre_proyecto,
            estado: this.estado,
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
        const refImg = storage.ref().child("imagenes/" + this.imagen.name);
        const metadata = { contentType: "img/jpeg" };
        refImg.put(this.imagen, metadata).then((e) => console.log(e));
        this.pop_form = false;
      } else {
        console.log(`vacio no se agrega proyecto`);
      }
    },
    clickImagen(e) {
      this.imagen = e.target.files[0];
      console.log(this.imagen);
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
        console.log(db.collection(user.email));

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

