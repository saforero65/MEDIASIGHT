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
              <li class="menu_item">
                <router-link class="link" to="/dashboard">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/usuario.svg"
                    alt="imagnen_perfil"
                  />Perfil</router-link
                >
              </li>

              <li class="menu_item">
                <router-link class="link" to="/AdministrarProyectos">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/boton-agregar.svg"
                    alt="imagnen_perfil"
                  />Administrar Proyectos</router-link
                >
              </li>

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
      <template v-else>
        <div class="menu">
          <div>
            <h3 class="title_menu">MENÚ</h3>
            <ul class="list">
              <li class="menu_item">
                <router-link class="link" to="/dashboard">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/usuario.svg"
                    alt="imagnen_perfil"
                  />Perfil</router-link
                >
              </li>

              <li class="menu_item">
                <router-link class="link" to="/AgregarProject">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/boton-agregar.svg"
                    alt="imagnen_perfil"
                  />Agregar un Proyecto</router-link
                >
              </li>
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
              <a href="/">Página Principal</a>

              <div @click.prevent="logout">
                <a class="logout">Cerrar Sesión</a>
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
              <div class="row">
                <div class="col">
                  <h3 class="label">NOMBRE</h3>
                  <input class="label_content" type="text" v-model="nombre" />
                  <h3 class="label">E-MAIL</h3>
                  <p class="label_content">{{ correo }}</p>

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
                </div>
                <div class="col">
                  <h3 class="label">ROL</h3>
                  <p class="label_content">Miembro</p>
                  <h3 class="label">CONTRASEÑA ACTUAL</h3>
                  <input
                    class="label_content"
                    type="text"
                    v-model="passworda"
                  />
                  <h3 class="label">CONTRASEÑA NUEVA</h3>
                  <input
                    class="label_content"
                    type="text"
                    v-model="passwordn"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    @click="edit = false"
                    type="button"
                    value="Cancelar"
                    class="btn btn-dark"
                  />
                </div>
                <div class="col">
                  <input
                    type="submit"
                    value=" Guardar"
                    class="btn btn-success"
                  />
                </div>
              </div>
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
      statuslogin: 1,
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
        .then(() => {});
      window.location.href = "/";
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

