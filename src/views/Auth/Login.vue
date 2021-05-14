<template>
  <div>
    <div v-show="mostrar" class="container">
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
              />
            </router-link>

            <div class="img_sup">
              <img
                class="img_logoBlanco"
                src="@/assets/img/logo_blanco.png"
                alt="imagen"
              />
            </div>
            <p class="content_sup">
              Al ingresar podrás publicar los proyectos que quieras que la
              comunidad de Ingenieros Multimedia de la UMNG vean.
            </p>
          </div>
        </div>
        <div class="row justify-content-start fila_pestañas">
          <a v-on:click="mostrar = true" class="col-3 pestaña_signIn">
            Identifícate
          </a>
          <a v-on:click="mostrar = false" class="col-3 pestaña_signUp">
            Regístrate</a
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
                  placeholder="CORREO ELECTRÓNICO"
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
                >¿Aún no tienes cuenta?
                <a v-on:click="mostrar = false" class="link_Registro"
                  >Regístrate</a
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

          <strong>¡Hey!</strong>{{ error }}
        </div>
      </div>
    </div>

    <!-- <fondo2></fondo2> -->
    <div v-show="!mostrar" class="container">
      <form
        class="col-4 position-absolute form"
        action="#"
        @submit.prevent="register"
      >
        <div class="row block_superior">
          <div class="col contenedor_img">
            <router-link to="/">
              <img
                class="img_cerrar"
                src="@/assets/img/icons/cerrar.svg"
                alt="imagnen"
              />
            </router-link>

            <div class="img_sup">
              <img
                class="img_logoBlanco"
                src="@/assets/img/logo_blanco.png"
                alt="imagen"
              />
            </div>
            <p class="content_sup">
              Este proyecto tiene como Grupo Objetivo solo la comunidad de
              Ingenieros Multimedia de la UMNG, por ende solo podrás registrarte
              con el Correo Institucional.
            </p>
          </div>
        </div>
        <div v-show="true" class="row justify-content-start fila_pestañas">
          <a v-on:click="mostrar = true" class="col-3 pestaña_signIn2"
            >Identifícate
          </a>
          <a v-on:click="mostrar = false" class="col-3 pestaña_signUp2"
            >Regístrate</a
          >
        </div>
        <div class="row block_inferior">
          <div class="col cont_inferior">
            <h2 class="text-center title">Registro</h2>
            <div class="form-group">
              <input
                type="text"
                class="input icon_usuario"
                placeholder="NOMBRE"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="input icon_email"
                aria-describedby="emailHelp"
                placeholder="E-MAIL"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <b-form-select
                class="input icon_tipo"
                v-model="type"
                :options="types"
                required
              ></b-form-select>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="input icon_pswrd"
                placeholder="CONTRASEÑA"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="input icon_pswrd"
                placeholder="REPITA LA CONTRASEÑA"
                v-model="password2"
              />
            </div>
            <div class="form-check">
              <input
                v-on:click="checked = true"
                v-model="checked"
                type="checkbox"
                class="form-check-input"
                required
              />
              <label class="form-check-label" for="exampleCheck1"
                >Acepto condiciones</label
              >
            </div>
            <button type="submit" class="boton">Registrar</button>
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
          <strong>¡Hey!</strong>{{ error }}
        </div>
      </div>
    </div>
    <video
      src="/fondologin/fondologin.mp4"
      type="video/mp4"
      autoplay="autoplay"
      loop="loop"
      id="video_background"
    ></video>
  </div>
</template>
<script>
import "@/firebase/init.js";
import firebase from "firebase/app";
import { db } from "@/firebase/init";

require("@/css/styles.css");
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      type: null,
      dominio: "@unimilitar.edu.co",
      checked: false,
      error: "",
      ver: true,
      mostrar: true,
      types: [
        { text: "TIPO", value: null },
        "Docente",
        "Egresado",
        "Estudiante",
      ],
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
    register() {
      this.error = "";
      if (this.email.includes(this.dominio)) {
        console.log(this.email);

        if (this.name && this.email && this.password === this.password2) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.$router.push({ name: "dashboard" });

              // window.location.href = "/#/dashboard";
              db.collection(this.email).add({
                nombre: this.name,
                correo: this.email,
                tipo: this.type,
                avatar:
                  "https://firebasestorage.googleapis.com/v0/b/mediasight-8eb8e.appspot.com/o/imagenes%2F1.jpg?alt=media&token=979045de-5341-4436-a83d-8dd31aa5f112",
              });
            })
            .catch((err) => {
              this.error = err.message;
              this.ver = true;
            });
        } else {
          if (this.password != this.password2) {
            this.error = "Las contraseñas no son iguales";
          } else {
            this.error = "Todos los campos son requeridos";
          }
          this.ver = true;
        }
      } else {
        this.email = "";
        this.error = "El dominio no es de la unimilitar";
        this.ver = true;
      }
    },
  },
  computed: {
    desactivar() {
      return (
        this.password === this.password2 &&
        this.password.trim() !== "" &&
        this.type &&
        this.checked == true
      );
    },
  },
};
</script>
<style scoped>
#video_background {
  position: absolute;
  bottom: 0px;
  right: 0px;
  /* min-width: 80%;
  min-height: 80%; */
  width: 100%;
  /* height: auto; */
  z-index: -1000;
  overflow: hidden;
}
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
.form {
  margin-top: 5vh;
}
.cont_inferior {
  height: initial;
}
.block_inferior {
  /* height: 70%; */
  padding: 1rem;
}
.pestaña_signIn2,
.pestaña_signUp2 {
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

.pestaña_signIn2:hover,
.pestaña_signUp2:hover {
  text-decoration: none;
}
.pestaña_signIn2:hover {
  background: white;
  color: black;
}
.pestaña_signUp2:hover {
  color: white;
}
.pestaña_signIn2 {
  background: #ff4b46;
}
.custom-select {
  appearance: revert;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .block_inferior {
    height: 20rem;
  }
}
</style>