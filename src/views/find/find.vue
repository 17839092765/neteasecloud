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
    <div class="nav">
      <router-link tag="div" to="/find/dayday">
        <div class="box"><van-icon name="calendar-o" /></div>
        <p>每日推荐</p>
      </router-link>
      <router-link tag="div" to="/find/sirenfm">
        <div class="box"><van-icon name="gem-o" /></div>
        <p>私人FM</p>
      </router-link>
      <router-link tag="div" to="/find/songlist">
        <div class="box"><van-icon name="service-o" /></div>
        <p>歌单</p>
      </router-link>
      <router-link tag="div" to="/find/ranking">
        <div class="box"><van-icon name="bar-chart-o" /></div>
        <p>排行榜</p>
      </router-link>
      <router-link tag="div" to="/find/figure">
        <div class="box"><van-icon name="pending-payment" /></div>
        <p>数字专辑</p>
      </router-link>
      <router-link tag="div" to="/find/choir">
        <div class="box"><van-icon name="cash-on-deliver" /></div>
        <p>唱聊</p>
      </router-link>
      <router-link tag="div" to="/find/game">
        <div class="box"><van-icon name="records" /></div>
        <p>游戏专区</p>
      </router-link>
    </div>
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
          this.$store.state.footer = false;
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
        this.$store.state.footer = true;

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
  .nav {
    margin-top: 0.2rem;
    width: 100%;
    // width: 5rem;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      // float: left;
      display: inline-block;
      width: 19%;
      height: 1.4rem;
      // border: 1px solid #000;
      flex-shrink: 0; //不影响li宽度
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin-top: 0.1rem;
      }
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;

        background: #ffffcc;
        .van-icon {
          font-size: 0.6rem;
          color: #ff0033;
        }
      }
    }
  }
</style>
