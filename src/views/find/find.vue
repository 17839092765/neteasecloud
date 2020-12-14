<template>
  <div class="find">
    <h1>find</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
      this.$request.get("/toplist/detail").then((res) => {
        console.log(res);
      });
    },
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    components: {},
  };
</script>

<style lang="scss" scoped></style>
