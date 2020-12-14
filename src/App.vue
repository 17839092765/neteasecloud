<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/header";
  import Footer from "./components/footer";
  // import Home from "./views/home";
  export default {
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    components: { Header, Footer },
  };
</script>
<style lang="scss">
  html,
  body,
  #app {
    height: 100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
  }
  * {
    margin: 0;
    padding: 0;
  }
  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
