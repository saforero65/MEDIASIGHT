<template>
  <div class="body">
    <Navigation></Navigation>
    <fondo2></fondo2>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/layout/Navigation";
import fondo2 from "@/components/layout/Fondo2";
export default {
  name: "Home",
  components: {
    Navigation,
    fondo2,
  },
};
</script>
<style>
.body {
  background: lightblue;
  height: 100vh;
}
</style>
