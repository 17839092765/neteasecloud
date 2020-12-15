<template>
  <div class="find">
    <van-sticky>
      <div class="header">
        <form action="/">
          <van-search
            shape="round"
            @click="onSearch1"
            v-model="value"
            :show-action="showaction"
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
    </van-sticky>
    <!-- //轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="witle">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img class="pic" :src="item.pic" alt="" />
      </van-swipe-item>
    </van-swipe>
    111111111
    <router-view></router-view>
    <!-- <Search v-show="onSearch1"></Search> -->
  </div>
</template>

<script>
  import Search from "./search/search";
  import { Toast } from "vant";
  export default {
    data() {
      return { value: "", showaction: false, banner: [] };
    },
    computed: {},
    watch: {
      // "$route.path": function(newVal, oldVal) {
      //   console.log(newVal + "---" + oldVal);
      //   if (newVal === "/find/search") {
      //     console.log("asdasdasdasd");
      //     this.showaction = true;
      //   }
      // },
    },
    methods: {
      onSearch1() {
        if (this.$route.path == "/find") {
          this.showaction = true;
          this.$router.push("/find/search");
        } else if (this.$route.path == "/find/search") {
          this.showaction = true;
        }
      },
      onSearch(val) {
        Toast(val);
        this.$store.state.search = val;
        console.log(this.$store.state.search);
      },
      onCancel() {
        Toast("取消");
        console.log(this.$route.path);
        this.showaction = false;
        if (this.$route.path == "/find/search") {
          this.$router.push("/find");
        }
      },
    },
    created() {
      this.$request.get("/homepage/block/page").then((res) => {
        console.log(11111111111, res.data.blocks[0].extInfo.banners);
        this.banner = res.data.blocks[0].extInfo.banners;
      });
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
  .my-swipe .van-swipe-item {
    .pic {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
</style>
