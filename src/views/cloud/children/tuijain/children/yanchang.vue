<template>
  <div class="shipin">
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" @click="sou()" />

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1253947176,1983525255&fm=26&gp=0.jpg"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1792496916,1960231435&fm=26&gp=0.jpg"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608031907012&di=156071adfa7c87b0aff24f88f1a80373&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-bb674782a8a7b2d833cedc99a78ef1d2_1200x500.jpg"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1169053395,3877050080&fm=26&gp=0.jpg"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608031995802&di=9f4c2e201f053ac18e345492a3c97bbd&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-bb674782a8a7b2d833cedc99a78ef1d2_1200x500.jpg"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 单元格 -->
    <ul>
      <li v-for="item in Lists" :key="item.id">
        <div>
          <nav>
            <!--背景大图 -->
            <img :src="item.songCoverUrl" class="da" />
            <!-- 头像 -->
            <img :src="item.avatar" class="tou" />
          </nav>
          <nav>
            <!-- 简介 -->
            <h6>{{ item.content }}</h6>
            <!-- 播放量 -->
            <p class="bofang"><van-icon name="play-circle-o" />{{ item.likedCount }}</p>
            <!-- 点赞量 -->
            <p class="zan"><van-icon name="thumb-circle-o" />{{ item.replyCount }}</p>
            <!-- 姓名 -->
            <span class="feng">{{ item.nickname }}</span>
          </nav>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Lists: [],
      value: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    getlists() {
      // 循环将需要的数组重新组合拿到
      this.$request.get("/comment/hotwall/list").then((res) => {
        // console.log(res);
        let lists = res.data;
        for (let i = 0; i < lists.length; i++) {
          let id = lists[i].id;
          let songCoverUrl = lists[i].simpleResourceInfo.songCoverUrl;
          let avatar = lists[i].simpleUserInfo.avatar;
          let content = lists[i].content;
          let likedCount = lists[i].likedCount;
          let replyCount = lists[i].replyCount;
          let nickname = lists[i].simpleUserInfo.nickname;
          this.Lists.push({
            id,
            songCoverUrl,
            avatar,
            content,
            likedCount,
            replyCount,
            nickname,
          });
        }

        // console.log(this.Lists);
      });
    },

    sou() {
      this.$router.push("/cloud/tuijian/sou");
    },
  },
  created() {
    this.getlists();
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
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  width: 40%;
  height: 5rem;
  border: 1px solid #f0f0f0;
  position: relative;
  border-radius: 8% 8%;
  overflow: hidden;
  margin-top: 0.3rem;
}
.da {
  width: 100%;
  height: 100%;
}
.tou {
  width: 18%;
  height: 12%;
  border-radius: 50%;
  position: absolute;
  top: 2.3rem;
  left: 0;
  border: 2px solid #fff;
}

h6 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 0.2rem;
}
.bofang {
  float: left;
  margin-top: 0.9rem;
  margin-right: 0.3rem;
  color: #969595;
  font-size: 0.2rem;
}
.zan {
  float: left;
  margin-top: 0.9rem;
  color: #969595;
  font-size: 0.2rem;
}

.feng {
  float: right;
  margin-top: 0.85rem;
  margin-right: 0.2rem;
  color: #720000;
}
.my-swipe .van-swipe-item {
  width: 100%;
  height: 4rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
