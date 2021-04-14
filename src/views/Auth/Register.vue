<template>
  <div>
    <div class="container">
      <form
        class="col-4 position-absolute form"
        action="#"
        @submit.prevent="register"
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
              Este proyecto tiene como Grupo Objetivo solo la comunidad de
              Ingenieros Multimedia de la UMNG por ende solo podrás registrarte
              con el Correo Institucional (_________@unimilitar.edu.co)
            </p>
          </div>
        </div>
        <div v-show="true" class="row justify-content-start fila_pestañas">
          <a class="col-3 pestaña_signIn" href="/#/login">Identificate </a>
          <a class="col-3 pestaña_signUp" href="/#/register">Registrate</a>
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
          <strong>Hey! </strong>{{ error }}
        </div>
      </div>
    </div>
    <!-- <fondo2></fondo2> -->
  </div>
</template>
<script>
import "@/firebase/init";
import firebase from "firebase";
import { db } from "@/firebase/init";
// import fondo2 from "@/components/layout/Fondo2";
// import { mapActions, mapState } from "vuex";
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
      types: [
        { text: "TIPO", value: null },
        "docente",
        "egresado",
        "estudiante",
      ],
    };
  },
  components: {
    // fondo2,
  },
  name: "Register",
  methods: {
    register() {
      this.error = "";
      if (this.email.includes(this.dominio)) {
        console.log(this.email);

        if (this.name && this.email && this.password === this.password2) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
              // this.$router.push({ name: "dashboard" });
              window.location.href = "/#/dashboard";
              db.collection(this.email).add({
                nombre: this.name,
                correo: this.email,
                tipo: this.type,
              });
            })
            .catch((err) => {
              this.error = err.message;
              this.ver = true;
            });
        } else {
          this.error = "Todos los campos son requeridos";
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
<style  scoped>
.form {
  margin-top: 5vh;
}
.cont_inferior {
  height: initial;
}
.block_inferior {
  height: 70%;
}
.pestaña_signIn:hover {
  background: white;
  color: black;
}
.pestaña_signUp:hover {
  color: white;
}
.pestaña_signIn {
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
