<template>
  <div class="find">
    <div class="header">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return { value: "" };
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

<style lang="scss" scoped>
  .header {
    height: 1rem;
    width: 100%;
    padding-left: 0.5rem;
  }
</style>
