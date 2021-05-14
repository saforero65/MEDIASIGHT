<template>
  <div class="body">
    <!-- <PreLoader /> -->
    <Navigation></Navigation>
    <!-- <FondoMain /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import PreLoader from "@/components/PreLoader";
import Navigation from "@/components/layout/Navigation";
// import FondoMain from "@/components/layout/FondoMain";
export default {
  name: "Home",
  data() {
    return {
      empezemos: false,
    };
  },
  components: {
    Navigation,
    // FondoMain,
    // PreLoader,
  },
};
</script>
<style  scoped>
html {
  overflow: scroll;
}
.body {
  background: lightblue;
  height: 100vh;
}
</style>>
