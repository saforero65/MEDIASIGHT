<template>
  <div>
    <div class="container">
      <form
        class="col-4 position-absolute"
        action="#"
        @submit.prevent="register"
      >
        <h2 class="text-center">Registro</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>

          <input
            type="text"
            class="form-control"
            id="Pepito Perez"
            placeholder="Nombre"
            v-model="name"
          />
          <small id="emailHelp" class="form-text text-muted"
            >Este va a ser su username.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Acepto condiciones</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
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
import "@/firebase/init";
import firebase from "firebase";
import fondo2 from "../Fondo2";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  components: {
    fondo2,
  },
  name: "Register",
  methods: {
    register() {
      this.error = "";
      if (this.name && this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            //actualizar el usuario
            if (user) {
              user
                .updateProfile({
                  displayName: this.name,
                })
                .then(() => {
                  this.name = "";
                  this.email = "";
                  this.password = "";
                  this.$router.push({ name: "dashboard" });
                })
                .catch((err) => {
                  this.error = err.message;
                });
            }
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
