<template>
  <div>
    <!-- <div class="flex">
      <div class="row justify-content-start fila_pestañas position-absolute">
        <a class="col-4 pestaña_signIn" v-on:click="mostrar = false"
          >Identificate
        </a>
        <a class="col-4 pestaña_signUp" v-on:click="mostrar = true"
          >Registrate</a
        >
      </div>
    </div> -->

    <registro v-show="!mostrar"></registro>
    <login v-show="mostrar"></login>
    <fondo2></fondo2>
  </div>
</template>
<script>
import registro from "@/views/Auth/Register";
import login from "@/views/Auth/Login";
import fondo2 from "@/components/layout/Fondo2";
// require("@/css/styles.css");
export default {
  data() {
    return {
      mostrar: true,
    };
  },
  components: {
    fondo2,
    registro,
    login,
  },
};
</script>
<style >
.flex {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 20;
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
.fila_pestañas {
  background: #ff4b46;
  /* min-width: 20rem; */
  /* width: 75vh; */
  font-weight: bold;
  font-size: 1.7vh;
  height: 4.6vh;
}
</style>