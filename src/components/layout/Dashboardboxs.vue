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
      <template v-else>
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
          <h1 class="content_title">Vista General de la Cuenta</h1>
          <h3 class="content_subtitle">Perfil</h3>
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
        <div class="box1">
          <img
            class="img_perfil2"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="imagen perfil"
          />
          <button v-if="mostrardep" class="boton_edit" @click="editar()">
            EDITAR PERFIL
          </button>
        </div>
        <template v-if="!edit">
          <div>
            <div class="content">
              <h3 class="label">NOMBRE</h3>
              <p class="label_content">{{ nombre }}</p>
              <h3 class="label">E-MAIL</h3>
              <p class="label_content">{{ correo }}</p>
              <h3 class="label">ROL</h3>
              <p class="label_content">Miembro</p>
              <h3 class="label">TIPO</h3>
              <p class="label_content">{{ tipo }}</p>
            </div>
          </div>
        </template>
        <template v-else>
          <div>
            <form class="content" @submit.prevent="actualizar">
              <h3 class="label">NOMBRE</h3>
              <input class="label_content" type="text" v-model="nombre" />
              <h3 class="label">contraseña actual</h3>
              <input class="label_content" type="text" v-model="passworda" />
              <h3 class="label">contraseña nueva</h3>
              <input class="label_content" type="text" v-model="passwordn" />
              <h3 class="label">E-MAIL</h3>
              <p class="label_content">{{ correo }}</p>
              <h3 class="label">ROL</h3>
              <p class="label_content">Miembro</p>
              <h3 class="label">TIPO</h3>
              <p
                v-if="correo == 'admin@unimilitar.edu.co'"
                class="label_content"
              >
                {{ tipo }}
              </p>
              <b-form-select
                v-else
                v-model="tipo"
                :options="types"
              ></b-form-select>
              <button>guardar</button>
            </form>
          </div>
        </template>
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
      tipo: null,
      edit: false,
      mostrardep: false,
      passworda: null,
      passwordn: null,

      types: [
        { text: "TIPO", value: null },
        "docente",
        "egresado",
        "estudiante",
      ],
    };
  },

  methods: {
    actualizar() {
      this.edit = false;
      console.log(this.nombre);
      console.log(this.tipo);
      db.collection(`${this.correo}`)
        .doc(this.id)
        .update({
          nombre: this.nombre,
          tipo: this.tipo,
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
      var user = Firebase.auth().currentUser;
      var newPassword = this.passwordn;

      const credential = Firebase.auth.EmailAuthProvider.credential(
        user.email,
        this.passworda
      );
      // Now you can use that to reauthenticate
      user
        .reauthenticateWithCredential(credential)
        .then(function () {
          user
            .updatePassword(newPassword)
            .then(function () {
              // Update successful.
            })
            .catch(function (error) {
              console.error("Error updating document: ", error);
              // An error happened.
            }); // User re-authenticated.
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
    },
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
          // window.location.href = "/#/home";
        });
    },
    editar() {
      this.edit = true;
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
      } else {
        this.user = null;
      }
    });
  },
};
</script>

