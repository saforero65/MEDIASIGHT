<template>
  <div class="body">
    <Navigation></Navigation>
    <div>Home</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/layout/Navigation";
export default {
  name: "Home",
  components: {
    Navigation,
  },
};
</script>
<style>
.body {
  background: lightblue;
  height: 100vh;
}
</style>
