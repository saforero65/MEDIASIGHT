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
          <router-link class="col-3 pestaña_signIn" to="/login"
            >Identificate
          </router-link>
          <router-link class="col-3 pestaña_signUp" to="#"
            >Registrate</router-link
          >
        </div>
        <div class="row block_inferior">
          <div class="col">
            <div class="cont_inferior">
              <h2 class="text-center title">Registro</h2>
              <div class="form-group">
                <input
                  type="text"
                  class="input"
                  placeholder="Nombre"
                  v-model="name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="input"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="input"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label" for="exampleCheck1"
                  >Acepto condiciones</label
                >
              </div>
              <button type="submit" class="boton">Submit</button>
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
import "@/firebase/init";
import firebase from "firebase";
import fondo2 from "@/components/layout/Fondo2";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      ver: true,
      dominio: "@unimilitar.edu.co",
    };
  },
  components: {
    fondo2,
  },
  name: "Register",
  methods: {
    register() {
      this.error = "";
      if (this.email.includes(this.dominio)) {
        console.log(this.email);

        if (this.name && this.email && this.password) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
              this.$router.push({ name: "dashboard" });
              if (user) {
                user
                  .updateProfile({
                    displayName: this.name,
                  })
                  .then(() => {
                    this.name = "";
                    this.email = "";
                    this.password = "";
                  })
                  .catch((err) => {
                    this.error = err.message;
                    this.ver = true;
                  });
              }
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
};
</script>
<style  scoped>
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
</style>
