<template >
  <div v-if="user">
    <template v-if="user.email == 'admin@unimilitar.edu.co'">
      <div>
        perfil admin

        <perfiladmin></perfiladmin>
      </div>
    </template>
    <template v-else>
      <div>
        perfil miembro

        <perfilmiembro></perfilmiembro>
      </div>
    </template>
  </div>
</template>
<script>
import Firebase from "firebase";
import perfiladmin from "@/components/PerfilAdmin";
import perfilmiembro from "@/components/PerfilMiembro";
export default {
  name: "dashboard",
  components: {
    perfiladmin,
    perfilmiembro,
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log("this.user");
        console.log(user);
        console.log(user);
      } else {
        this.user = null;
      }
    });
  },
};
</script>
<style>
</style>