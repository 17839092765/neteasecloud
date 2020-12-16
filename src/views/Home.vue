<template>
  <div class="home">
    <Footer></Footer>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
  import Footer from "../components/footer";
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
    components: {
      Footer,
    },
  };
</script>

<style lang="scss" scoped></style>
