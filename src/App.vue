<template>
  <div id="app">
    <Header></Header>
    <div class="container"><router-view /></div>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header
  },
  mounted() {
    const HEIGHT = 960;
    const WIDTH = 1920;
    let HtmlScaleInit = () => {
      let app = document.getElementById("app");
      app.style = `transform:scale(${window.innerWidth /
        WIDTH},${window.innerHeight / HEIGHT})`;
    };
    HtmlScaleInit();
    window.onresize = () => {
      HtmlScaleInit();
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  font-size: 16px;
}
.container {
  padding: 12px 20px 0;
}
</style>
