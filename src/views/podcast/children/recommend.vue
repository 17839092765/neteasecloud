<template>
  <div class="recommend">
    <!-- 组件使用 -->
    <!-- <Clist :allmv="allmv"></Clist> -->
    <!-- 我的播客 -->
    <div class="boke">
      <span>
        <van-icon
          name="volume"
          size="20px"
          style="margin:0 5px"
        />我的播客</span
      ><van-icon name="arrow" size="18px" />
    </div>
    <!-- 精选MV -->
    <Clist :allmv="allmv"></Clist>
    <!-- 最新MV -->
    <div class="bodan">
      <div class="bodan-top">
        <p>最新MV|这有一个人陪你听歌</p>
        <van-tag plain type="primary">更多></van-tag>
      </div>
      <div class="bodan-bottom">
        <figure
          v-for="item in allmv1"
          :key="item.artistId"
          @click="postid1(item.id)"
        >
          <img :src="item.picUrl" alt="" />
          <figcaption>{{ item.name }}</figcaption>
        </figure>
      </div>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="item in allmv3" :key="item.id">
        <img :src="item.cover" class="picurl" />
      </van-swipe-item>
    </van-swipe>
    <!-- 网易出品MV -->
    <div class="bodan">
      <div class="bodan-top">
        <p>网易出品MV</p>
        <van-tag plain type="primary">更多></van-tag>
      </div>
      <div class="bodan-bottom">
        <figure
          v-for="item in allmv2"
          :key="item.artistId"
          @click="postid(item.id)"
        >
          <img :src="item.cover" alt="" />
          <figcaption>{{ item.name }}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import Figure from "../../find/figure/figure.vue";
import Clist from "./components/list";
export default {
  data() {
    return {
      allmv: {},
      allmv1: {},
      allmv2: {},
      allmv3: {},
    };
  },
  computed: {},
  watch: {},
  methods: {
    getmv() {
      this.$request
        .post("/mv/all", {
          area: "内地",
          limit: 6,
        })
        .then((res) => {
          console.log(res);
          this.allmv = res.data;
        });
    },
    getmv1() {
      this.$request
        .post("/personalized/mv", {
          // area: "内地",
          // limit: 6,
        })
        .then((res) => {
          console.log(res.result);
          this.allmv1 = res.result;
        });
    },
    getmv2() {
      this.$request
        .post("/mv/exclusive/rcmd", {
          limit: 6,
        })
        .then((res) => {
          // console.log(res.data);
          this.allmv2 = res.data;
        });
    },
    getmv3() {
      this.$request.get("/mv/first").then((res) => {
        console.log(res);
        console.log(res.data[0].cover);
        this.allmv3 = res.data;
      });
    },
    postid(id1) {
      // console.log(111);
      // console.log(id);
      let id = id1;
      this.$request.get("/mv/url?id=" + id).then((res) => {
        // console.log(res);
        if (res.data.code === 200) {
          // console.log(res.data.url);
          this.$store.state.videoUrl = res.data.url;
          this.$store.state.mp4show = true;
        }
      });
    },
    postid1(id1) {
      console.log(111);
      let id = id1;
      // console.log(id);
      this.$request.get("/mv/url?id=" + id).then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          console.log(res.data.url);
          this.$store.state.videoUrl = res.data.url;
          this.$store.state.mp4show = true;
        }
      });
    },
  },
  created() {
    this.getmv();
    this.getmv1();
    this.getmv2();
    this.getmv3();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: { Figure, Clist },
};
</script>

<style lang="scss" scoped>
.recommend {
  padding: 0 0.2rem;
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  left: 0;
  width: 100%;
  overflow: scroll;
  box-sizing: border-box;
  .boke {
    padding: 0.2rem;
    border: 1px solid #000;
    border-radius: 0.4rem;
    margin: 0.4rem 0.2rem;
    display: flex;
    justify-content: space-between;
    // background: pink;
    span {
      font-size: 0.32rem;
      vertical-align: middle;
      line-height: 0.4rem;
      i {
        vertical-align: middle;
      }
    }
  }
  .bodan {
    .bodan-top {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 0.32rem;
        font-weight: 600;
      }
      span {
        font-size: 0.24rem;
        padding: 0.06rem 0.12rem;
        border-radius: 10px;
      }
    }
    .bodan-bottom {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      figure {
        margin-top: 0.2rem;
        width: 30%;
        // height: 4rem;
        // background: pink;
        figcaption {
          font-size: 0.26rem;
          margin: 0.2rem 0.1rem;
        }
      }
    }
    img {
      width: 100%;
      height: 120px;
      border-radius: 10px;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    // text-align: center;
    // background-color: #39a9ed;
    border-radius: 20px;
    margin: 10px 0;
    width: 100%;
    height: 250px;
    .picurl {
      width: 100%;
      height: 250px;
    }
  }
}
</style>
