<template>
  <div id="app">
    <div id="nav">
      <Navigation></Navigation>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/layout/Navigation";
export default {
  components: {
    Navigation,
  },
};
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  margin: 0px;
}
/* canvas {
 width: ;
} */
#app {
  height: 100%;
}
</style>