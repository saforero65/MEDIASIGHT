<template>
  <div class="block">
    <div class="container">
      <form
        class="position-absolute col-4 form"
        action="#"
        @submit.prevent="login"
      >
        <div class="row block_superior">
          <div class="col contenedor_img">
            <a href="/"
              ><img
                class="img_cerrar"
                src="@/assets/img/icons/cerrar.svg"
                alt="imagnen"
            /></a>

            <div class="img_sup">
              <img
                class="img_logoBlanco"
                src="@/assets/img/logo_blanco.png"
                alt="imagnen"
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
          <div class="col-3 pestaña_signIn">Iniciar Sesión</div>
          <div class="col-3 pestaña_signUp">Registro</div>
          <div class="col-6 pestraña_restante"></div>
        </div>
        <div class="row block_inferior">
          <div class="col">
            <div class="cont_inferior">
              <h2 class="text-center title">Iniciar Sesión</h2>

              <div class="form-group">
                <!-- <img src="@/assets/img/logo_blanco.png" alt="" /> -->

                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electrónico"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                  v-model="password"
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>

      <div v-if="error">
        <b-alert show variant="danger">
          <h4 class="alert-heading">Hey!</h4>
          <p>
            {{ error }}
          </p>
        </b-alert>
      </div>
    </div>
    <fondo2></fondo2>
  </div>
</template>
<script>
import "@/firebase/init.js";
import firebase from "firebase/app";
import fondo2 from "../Fondo2";
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
          });
      } else {
        this.error = "Todos los campos son requeridos";
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
  background: #243241;
  color: white;
  height: 70%;
  border-radius: 0.5rem;
  min-width: 15rem;
  min-height: 20rem;
}
.block_superior {
  display: flex;
  background: #ff4b46;
  height: 30vh;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  min-width: 15rem;
  min-height: 10rem;
}
.contenedor_img {
  min-width: 10rem;
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
.img_logoBlanco {
  margin-top: 2vh;
  max-width: 45%;
  min-width: 10rem;

  object-fit: cover;
}
.fila_pestañas {
  background: #ff4b46;
  min-width: 15rem;
  font-weight: bold;
  font-size: 1.6vh;
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
}
.pestaña_signUp {
  background: #ff4b46;
}

.block_inferior {
  height: 33vh;
  min-width: 15rem;
  min-height: 10rem;
}
.content_sup {
  padding: 1vh 5vh;
  margin: 1vh;
  font-size: 1.35vh;
  line-height: 1.5vh;
  text-transform: initial;
  text-align: center;
  font-weight: normal;
}
.cont_inferior {
  min-height: 10rem;
}
.title {
  margin: 2vh 0;
  font-size: 1.125rem;
  font-weight: bold;
}
</style>