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
            <router-link to="/">
              <img
                class="img_cerrar"
                src="@/assets/img/icons/cerrar.svg"
                alt="imagnen"
            /></router-link>

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
        <div class="row justify-content-start fila_pestañas">
          <router-link class="col-3 pestaña_signIn" to="#"
            >Identificate
          </router-link>
          <router-link class="col-3 pestaña_signUp" to="/register"
            >Registrate</router-link
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
                  class="input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electrónico"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="input"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
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
          <!-- <h4 class="alert-heading">Hey!</h4> -->
          <strong>Hey! </strong>{{ error }}
        </div>
      </div>
    </div>
    <fondo2></fondo2>
  </div>
</template>
<script>
import "@/firebase/init.js";
import firebase from "firebase/app";
import fondo2 from "@/components/layout/Fondo2";
export default {
  components: {
    fondo2,
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
          .then((user) => {
            this.$router.push({ name: "dashboard" });
            console.log(user);
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
<style>
.container {
  font-family: "Roboto Mono", monospace;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}
.form {
  margin-top: 12vh;
  padding: 0;
  /* background: #243241; */
  color: white;
  height: 69%;
  border-radius: 0.5rem;
  min-width: 20rem;
  min-height: 30vh;
}
.block_superior {
  display: flex;
  background: #ff4b46;
  height: 35vh;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  min-width: 20rem;
  min-height: 10rem;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.493);
}
.contenedor_img {
  min-width: 20rem;
  min-height: 10rem;
}
.img_sup {
  width: 100%;
  display: flex;
  justify-content: center;
}
.img_cerrar {
  float: right;
  margin-top: 2vh;
  max-width: 3%;
  min-width: 1rem;
  object-fit: cover;
}
.img_cerrar:hover {
  filter: brightness(0);
}
.img_logoBlanco {
  margin-top: 2vh;
  max-width: 45%;
  min-width: 10rem;
  object-fit: cover;
}
.fila_pestañas {
  background: #ff4b46;
  min-width: 20rem;
  font-weight: bold;
  font-size: 1.7vh;
  height: 4.6vh;
}
.pestaña_signIn,
.pestaña_signUp {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: #243241;
  color: white;
}

.pestaña_signIn:hover,
.pestaña_signUp:hover {
  text-decoration: none;
}

.block_inferior {
  display: flex;
  align-items: center;
  height: 30vh;
  min-width: 20rem;
  min-height: 10rem;
  background: #243241;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.493);
}
.content_sup {
  padding: 1vh 2vh;
  margin: 1vh;
  font-size: 1.75vh;
  line-height: 2vh;
  text-transform: initial;
  text-align: center;
  font-weight: normal;
}
.cont_inferior {
  height: inherit;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.title {
  margin: 3vh 0;
  font-size: 1.125rem;
  font-weight: bold;
  min-width: 100%;
}
.input {
  display: block;
  margin: 0 auto;
  min-width: 60%;
  height: 3.5vh;
  border-radius: 15px;
  border: 1px solid #7f8c8d6b;
  background-color: #00000021;
  font-size: 1.5vh;
  text-transform: uppercase;
  text-align: center;
  color: #7f8c8d6b;
}
.boton {
  margin: 0 auto;
  border-radius: 25px;
  height: 3.5vh;
  width: 20%;
  background-color: #ff4b46;
  color: #243241;
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.5vh;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.493);
}
span {
  margin: 1.5vh;
  text-transform: initial;
  font-size: 1.2vh;
  text-align: center;
}
.link_Registro {
  color: #ff4b46;
}
.link_Registro:hover {
  color: #ff4b46;
}
.boton:hover {
  background-color: #fff;
  color: black;
}
.alert {
  width: 30%;
  min-width: 15rem;

  left: 0;
  right: 0;
  margin: 3vh auto;
}
</style>
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