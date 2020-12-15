<template>
  <div class="game">
    <van-sticky>
      <van-nav-bar
        title="每日推荐"
        left-text=""
        right-text="?"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </van-sticky>

    <h1>dayday</h1>
  </div>
</template>

<script>
  import { Toast } from "vant";
  export default {
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {
      onClickLeft() {
        Toast("返回");
        this.$router.push("/find");
      },
      onClickRight() {
        Toast("按钮");
      },
    },
    created() {},
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
  .game {
    position: fixed;
    width: 100%;
    top: 0rem;
    left: 0;
    bottom: 0;
    background: rgb(255, 255, 255);
    .header {
      height: 1rem;
      width: 100%;
      background: rgb(245, 245, 245);
    }
  }
</style>
