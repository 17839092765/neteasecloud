<template>
  <div class="shipin">
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" @click="sou()" />

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
            <p class="bofang">
              <van-icon name="play-circle-o" />{{ item.likedCount }}
            </p>
            <!-- 点赞量 -->
            <p class="zan">
              <van-icon name="thumb-circle-o" />{{ item.replyCount }}
            </p>
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
</style>
