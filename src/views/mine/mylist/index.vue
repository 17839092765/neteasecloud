<!-- 组件说明 -->
<template>
  <div class="index">
    <van-nav-bar
      left-text="返回"
      right-text="退出"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="header">
      <div class="photo"><img src="../../../assets/timg.jpg" alt="" /></div>
      <div class="txt">
        <p>1111</p>
        <span>开通VIP</span>
        <p>5关注 5粉丝</p>
        <span>Lv.7</span>
        <p>点击添加个人简介</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from "vant";
  export default {
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {
      onClickLeft() {
        Toast("返回");
        this.$router.push("/mine");
      },
      onClickRight() {
        Toast("已退出");
        this.$cookie.remove("cookie");
        this.$cookie.remove("uid");
        this.$router.push("/");
      },
    },
    created() {},
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>

<style lang="scss" scoped>
  .index {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #f7f7f7;
    z-index: 1;
  }
  .header {
    width: 90%;
    height: 130px;
    background: #fff;
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    margin-top: 100px;
    img {
      width: 80px;
      height: 80px;
      border: 1px solid #cecece;
      border-radius: 50%;
      position: fixed;
      top: 100px;
      left: 45%;
    }
    .txt {
      float: left;
      margin-top: 50px;
      margin-left: 45%;
    }
    p:nth-child(1) {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
    }
    span:nth-child(1) {
      display: block;
      font-size: 14px;
      width: 60px;
      padding: 0 5px;
      height: 22px;
      line-height: 22px;
      background: #000;
      color: #fff;
      border-radius: 10px;
      position: absolute;
      left: 110px;
      bottom: 35px;
    }
  }
</style>
