<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand href="/">MEDIASIGHT</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <template v-if="user">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Usuario" right>
            <b-dropdown-item>
              <router-link to="/dashboard"
                ><a>{{ user.displayName || user.email }}</a>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item @click.prevent="logout">
              <router-link to="/"> Cerrar Sesion </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </template>
      <template v-else>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="SignUp/Login" right>
            <b-dropdown-item>
              <router-link to="/register"> Sign Up </router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/login"> Login </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </template>
    </b-collapse>
  </b-navbar>
</template>
<script>
import Firebase from "firebase";
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },
  created() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>