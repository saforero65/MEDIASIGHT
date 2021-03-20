<template>
  <div class="container">
    <form action="#" @submit.prevent="login">
      <h2 class="text-center">Iniciar Sesion</h2>

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
</template>
<script>
import "@/firebase/init.js";
import firebase from "firebase/app";

export default {
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