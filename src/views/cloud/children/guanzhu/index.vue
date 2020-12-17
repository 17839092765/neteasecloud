<template>
  <div class="guanzhu">
    <h2>我的云圈</h2>
    <ul>
      <li v-for="(item, index) in Lists" :key="item.id">
        <!-- avatarUrl 头像 -->
        <img :src="item.avatarUrl" alt="" class="touxiang" />
        <!-- nickname网名 -->
        <h5>{{ item.nickname }}</h5>
        <!-- backgroundUrl视频背景图 -->
        <img :src="item.backgroundUrl" alt="" class="beijing" @click="mvShow(index)" />
        <!-- 遮罩层 -->
        <!-- <van-button type="primary" text="显示遮罩层" @click="show = true" /> -->
        <!-- <van-overlay :show="show" @click="show = false"
          > -->

        <!-- </van-overlay> -->
        <!-- title 图片上的文字 -->
        <p class="p1">{{ item.title }}</p>
        <!-- commentCount 播放量 -->
        <nav class="p2">
          <van-icon name="play-circle-o" size="15px" />
          <p>{{ item.commentCount }}</p>
        </nav>

        <!-- 下边点赞评论转发的死数据 -->
        <nav class="xia">
          <van-icon name="share-o" size="20px" class="xia1" color="rgb(217, 212, 221)" />
          <van-icon name="chat-o" size="20px" class="xia2" color="rgb(217, 212, 221)" />
          <van-icon
            name="good-job-o"
            size="20px"
            class="xia3"
            color="rgb(217, 212, 221)"
          />
        </nav>
      </li>
    </ul>
    <!-- 遮罩层 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <!-- 视频 -->
        <video
          class="mp4show"
          autoplay="autoplay"
          width="100%"
          height="240"
          controls
          v-if="show"
          :src="mvUrl"
          z-index="1"
        ></video>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Lists: [],
      show: false,
      mvUrl: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    mvShow(index) {
      this.show = true;
      this.mvUrl = this.Lists[index].urlInfo;
    },
    getVideo() {
      this.$request
        .post("/video/timeline/recommend", {
          cookie: this.$cookie.get("cookie"),
        })
        .then((res) => {
          console.log(res);
          let lists = res.datas;
          for (let i = 0; i < lists.length; i++) {
            //id
            // let id = lists[i].data.urlInfo.id;
            // avatarUrl 头像
            let avatarUrl = lists[i].data.creator.avatarUrl;
            // nickname网名
            let nickname = lists[i].data.creator.nickname;
            // backgroundUrl视频背景图
            let backgroundUrl = lists[i].data.creator.backgroundUrl;
            // title 图片上的文字
            let title = lists[i].data.title;
            // commentCount 播放量
            let commentCount = lists[i].data.commentCount;
            //urlInfo 视频
            let urlInfo = lists[i].data.urlInfo.url;
            this.Lists.push({
              // id,
              avatarUrl,
              nickname,
              backgroundUrl,
              title,
              commentCount,
              urlInfo,
            });
          }
          console.log(this.Lists);
        });
    },
  },
  created() {
    this.getVideo();
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.guanzhu {
  position: fixed;
  top: 1rem;
  left: 0;
  bottom: 1rem;
  width: 100%;
  overflow-y: scroll;
}
h2 {
  width: 7rem;
  // margin-bottom: 1rem;
  height: 0.8rem;
  display: block;
  line-height: 0.8rem;
  text-align: center;
  border-bottom: 1px solid rgb(217, 212, 221);
  margin: 0 auto;
}
li {
  margin: 1rem auto;
  width: 90%;
  height: 5.7rem;
  border-bottom: 1px solid rgb(217, 212, 221);
  position: relative;
  .touxiang {
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    border-radius: 25px;
  }
  h5 {
    width: 50%;
    position: relative;
    top: -0.7rem;
    left: 1.3rem;
    display: block;
    font-size: 0.23rem;
  }
  .beijing {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 2.2rem;
    left: 1.5rem;
    border-radius: 0.2rem;
  }
  .p1 {
    display: flex;
    color: rgb(119, 96, 96);
    font-size: 0.25rem;
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    font-weight: 700;
  }
  .p2 {
    display: flex;
    color: rgb(212, 212, 212);
    font-size: 0.25rem;
    position: absolute;
    top: 4.7rem;
    left: 3.5rem;
    font-weight: 700;
  }

  .xia {
    display: flex;
    position: absolute;
    top: 5.1rem;
    left: 4.9rem;
    .xia1 {
      margin-right: 0.2rem;
    }
    .xia2 {
      margin-right: 0.5em;
    }
  }
}
</style>
