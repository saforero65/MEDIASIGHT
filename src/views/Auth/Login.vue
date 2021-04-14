<template>
  <div>
    <div class="container">
      <form
        class="position-absolute col-4 form"
        action="#"
        @submit.prevent="login"
      >
        <div class="row block_superior">
          <div class="col contenedor_img">
            <a href="/">
              <img
                class="img_cerrar"
                src="@/assets/img/icons/cerrar.svg"
                alt="imagnen"
            /></a>

            <div class="img_sup">
              <img
                class="img_logoBlanco"
                src="@/assets/img/logo_blanco.png"
                alt="imagen"
              />
            </div>
            <p class="content_sup">
              Al ingresar podrás enviarnos los proyectos que quieras que la
              comunidad de Ingenieros Multimedia de la UMNG podrían ser
              publicados en la Pagina Principal.
            </p>
          </div>
        </div>
        <div v-show="true" class="row justify-content-start fila_pestañas">
          <a class="col-3 pestaña_signIn" v-on:click="mostrar = false"
            >Identificate
          </a>
          <a class="col-3 pestaña_signUp" v-on:click="mostrar = true"
            >Registrate</a
          >
        </div>
        <div class="row block_inferior">
          <div class="col">
            <div class="cont_inferior">
              <h2 class="text-center title">Iniciar Sesión</h2>

              <div class="form-group">
                <!-- <img src="@/assets/img/logo_blanco.png" alt="" /> -->

                <input
                  type="email"
                  class="input icon_email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="CORREO ELECTRONICO"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="input icon_pswrd"
                  id="exampleInputPassword1"
                  placeholder="CONTRASEÑA"
                  v-model="password"
                />
              </div>

              <button type="submit" class="boton">Iniciar</button>
              <span
                >Aun no tienes cuenta?
                <router-link class="link_Registro" to="/register"
                  >Registrate</router-link
                >
              </span>
            </div>
          </div>
        </div>
      </form>

      <div v-if="error">
        <div v-show="ver" class="alert alert-danger position-absolute">
          <button
            v-on:click="ver = !ver"
            type="button"
            class="close"
            data-dismiss="alert"
          >
            &times;
          </button>

          <strong>Hey! </strong>{{ error }}
        </div>
      </div>
    </div>
    <!-- <fondo2></fondo2> -->
  </div>
</template>
<script>
import "@/firebase/init.js";
import firebase from "firebase/app";
// import fondo2 from "@/components/layout/Fondo2";
require("@/css/styles.css");
export default {
  components: {
    // fondo2,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      ver: true,
    };
  },
  name: "Login",
  methods: {
    login() {
      this.error = "";
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log(this.email);

            this.$router.push({ name: "dashboard" });
          })
          .catch((err) => {
            this.error = err.message;
            this.ver = true;
          });
      } else {
        this.error = "Todos los campos son requeridos";
        this.ver = true;
      }
    },
  },
};
</script>
<style scoped>
.pestaña_signUp:hover {
  background: white;
  color: black;
}

.pestaña_signIn:hover {
  color: white;
}

.pestaña_signUp {
  background: #ff4b46;
}
</style>