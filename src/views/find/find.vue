<template>
  <div class="find">
    <div class="header">
      <form action="/">
        <van-search
          @click="onSearch1 = !onSearch1"
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <Search v-show="onSearch1"></Search>
  </div>
</template>

<script>
  import Search from "./search/search";
  import { Toast } from "vant";
  export default {
    data() {
      return { value: "", onSearch1: false };
    },
    computed: {},
    watch: {},
    methods: {
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast("取消");
        this.onSearch1 = false;
      },
    },
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
    components: { Search },
  };
</script>

<style lang="scss" scoped>
  .header {
    height: 1rem;
    width: 100%;
    padding-left: 0.5rem;
    box-sizing: border-box;
  }
</style>
