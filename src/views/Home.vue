<template>
  <div class="body">
    <Navigation></Navigation>
    <Projects></Projects>
    <Profesores></Profesores>
    <fondo2></fondo2>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/layout/Navigation";
import fondo2 from "@/components/layout/Fondo2";
import Projects from "@/components/layout/Projects"
import Profesores from "@/components/layout/Profesores";
export default {
  name: "Home",
  components: {
    Navigation,
    Projects,
    Profesores,
    fondo2
  },
};
</script>
<style>
.body {
  background: lightblue;
  height: 100vh;
}
</style>
