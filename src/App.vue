<template>
  <div id="app">
    <van-overlay
      :show="$store.state.sidebar"
      @click="$store.state.sidebar = false"
    />

    <div
      v-if="$store.state.sidebarBtn"
      @click="$store.state.sidebar = true"
      class="daohang"
    >
      <van-icon name="orders-o" />
    </div>
    <Sidebar v-show="$store.state.sidebar"></Sidebar>
    <div class="main">
      <router-view />
    </div>
    <Footer v-if="$store.state.footer"></Footer>
  </div>
</template>

<script>
  import Sidebar from "./components/sidebar";
  // import Header from "./components/header";
  import Footer from "./components/footer";
  // import Home from "./views/home";
  export default {
    data() {
      return { show: false };
    },
    computed: {},
    watch: {
      "$route.path": function(newVal, oldVal) {
        console.log(newVal + "---" + oldVal);
        if (
          newVal === "/find/dayday" ||
          "/find/sirenfm" ||
          "/find/songlist" ||
          "/find/ranking" ||
          "/find/figure" ||
          "/find/choir" ||
          "/find/game"
        ) {
          console.log("asdasdasdasd");
          // this.showaction = true;
          this.$store.state.sidebarBtn = false;
        } else {
          this.$store.state.sidebarBtn = true;
        }
        if (newVal === "/find") {
          this.$store.state.sidebarBtn = true;
        }
      },
    },
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
    components: { Sidebar, Footer },
  };
</script>
<style lang="scss">
  html,
  body,
  #app {
    height: 100%;
  }

  .daohang {
    width: 0.5rem;
    height: 0.5rem;
    // background: rgb(199, 189, 189);
    position: fixed;
    top: 0.2rem;
    left: 0.1rem;
    z-index: 20;
    .van-icon {
      font-size: 0.5rem;
      color: darkgray;
    }
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
</style>
