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
            placeholder="请输入搜索关键词,按下回车或确定"
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
    <!-- 推荐歌单 -->
    <div class="tuijiansonglist">
      <div class="top">
        <span>推 荐 歌 单</span>
        <span>更多></span>
      </div>
      <div class="main">
        <div
          v-for="item in gedanlist"
          :key="item.creativeId"
          @click="getsonglistcase(item.creativeId)"
          class="case"
        >
          <div class="pic">
            <img :src="item.uiElement.image.imageUrl" alt="" />
          </div>
          <div class="title">
            <div class="van-multi-ellipsis--l2">
              {{ item.uiElement.mainTitle.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <keep-alive><router-view></router-view></keep-alive>
    <!-- <Search v-show="onSearch1"></Search> -->
  </div>
</template>

<script>
  import Search from "./search/search";
  import { Toast } from "vant";
  export default {
    data() {
      return {
        value: "",
        showaction: false,
        banner: [],
        gedanlist: [],
        ids: String,
        ids1: String,
      };
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
      getsonglistcase(id) {
        this.$request
          .post("/playlist/detail", {
            cookie: this.$cookie.get("cookie"),
            id,
          })
          .then((res) => {
            this.ids = "";
            this.ids1 = "";
            // console.log(res.playlist.trackIds);

            res.playlist.trackIds.forEach((item) => {
              // console.log(item.id);
              this.ids += item.id + ",";
            });

            this.ids1 = this.ids.slice(0, this.ids.length - 1);
            // console.log(this.ids1);
            this.$request.get(`/song/detail?ids=${this.ids1}`).then((mon) => {
              console.log(1111111, mon.songs);
              this.$store.state.gedanSongsList = mon.songs;
            });
            this.$router.push("/find/gedanSongsList");
          });
      },
    },
    created() {
      // /login/assttu;
      this.$request
        .post("/login/refresh", {
          cookie: this.$cookie.get("cookie"),
        })
        .then((res) => {
          console.log(res);
          // console.log(11111111111, res.data.blocks[0].extInfo.banners);
          // this.banner = res.data.blocks[0].extInfo.banners;
        });
      this.$request.get("/homepage/block/page").then((res) => {
        // console.log(res);
        // console.log(11111111111, res.data.blocks[0].extInfo.banners);
        this.banner = res.data.blocks[0].extInfo.banners;
      });

      this.$request
        .post("/homepage/block/page", {
          refresh: true,
          cookie: this.$cookie.get("cookie"),
        })
        .then((res) => {
          // console.log(232323232323, res);
          // console.log(222222222222222, res.data.blocks[0].creatives);
          this.gedanlist = res.data.blocks[0].creatives;
          // console.log(11111111111, res.data.blocks[0].extInfo.banners);
          // this.banner = res.data.blocks[0].extInfo.banners;
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
    border-bottom: 1px solid #938181;
    margin: 0 auto;
    margin-top: 0.2rem;
    width: 98%;

    box-sizing: border-box;
    height: 1.5rem;
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
  .tuijiansonglist {
    // padding: 0 0.1rem;
    margin: 0 auto;
    margin-top: 0.1rem;
    // box-sizing: border-box;
    width: 98%;
    height: 3rem;
    // background: rgb(120, 67, 67);
    .top {
      width: 100%;
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-of-type(1) {
        display: inline-block;
        font-size: 0.27rem;
        font-weight: 600;
        width: 1.5rem;
        text-align: center;
      }
      span:nth-of-type(2) {
        display: inline-block;
        font-size: 0.1rem;
        width: 1rem;
        text-align: center;
      }
    }
    .main {
      display: flex;
      justify-content: space-between;
      // white-space: nowrap;
      overflow-y: hidden;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }

      .case {
        width: 2rem;
        height: 2.7rem;
        margin: 0.1rem;
        // border: 1px solid #f00;
        flex-shrink: 0;
        .pic {
          width: 100%;
          height: 2rem;
          img {
            width: 100%;
          }
        }
        .title {
          width: 2rem;
          height: 0.7rem;
          font-size: 0.1rem;
          // .van-multi-ellidivsis--l2 {
          //   white-space: wrap;
          //   height: 100%;
          //   width: 100%;
          // }
        }
      }
    }
  }
</style>
