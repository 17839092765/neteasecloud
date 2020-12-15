<template>
  <div class="shipin">
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- 单元格 -->
    <ul>
      <li>
        <div>
          <nav>
            <!--背景大图 -->
            <img :src="songCoverUrl" class="da" />
            <!-- 头像 -->
            <img :src="avatar" class="tou" />
          </nav>
          <nav>
            <!-- 简介 -->
            <h6>{{ content }}</h6>
            <!-- 播放量 -->
            <p class="bofang"><van-icon name="play-circle-o" />{{ likedCount }}</p>
            <!-- 点赞量 -->
            <p class="zan"><van-icon name="thumb-circle-o" />{{ replyCount }}</p>
            <!-- 姓名 -->
            <span class="feng">{{ nickname }}</span>
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
      value: "",
      songCoverUrl: "",
      avatar: "",
      content: "",
      likedCount: "",
      replyCount: "",
      nickname: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    //   调云村热评接口，头像+背景图
    this.$request.get("/comment/hotwall/list").then((res) => {
      console.log(res);
      this.songCoverUrl = res.data[0].simpleResourceInfo.songCoverUrl;
      this.avatar = res.data[0].simpleUserInfo.avatar;
      this.content = res.data[0].content;
      this.likedCount = res.data[0].likedCount;
      this.replyCount = res.data[0].replyCount;
      this.nickname = res.data[0].simpleUserInfo.nickname;
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
  components: {},
};
</script>

<style lang="scss" scoped>
li {
  width: 40%;
  height: 5rem;
  border: 1px solid #f0f0f0;
  position: relative;
  border-radius: 8% 8%;
  overflow: hidden;
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
}
.zan {
  float: left;
  margin-top: 0.9rem;
  color: #969595;
}

.feng {
  float: right;
  margin-top: 0.85rem;
  margin-right: 0.2rem;
  color: #969595;
}
</style>
