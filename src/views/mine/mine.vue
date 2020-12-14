<template>
  <div class="mine">
    <h1>
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit"
      />
      <van-icon name="chat-o" @click="get" />
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
    </h1>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :show-indicators="false"
    >
      <van-swipe-item>1111</van-swipe-item>
      <van-swipe-item>2222</van-swipe-item>
      <van-swipe-item>3333</van-swipe-item>
      <van-swipe-item>4444</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      currentContact: {
        name: "张三",
        tel: "13000000000",
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    onEdit() {
      Toast("编辑");
    },
    get() {
      alert(666);
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
