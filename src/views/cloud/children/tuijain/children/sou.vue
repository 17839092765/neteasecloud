<template>
  <div class="sou">
    <!-- 头部搜索 -->
    <div class="tou">
      <van-icon name="arrow-left" class="biao" @click="fan()" />
      <van-search v-model="value" placeholder="请输入搜索关键词" class="kuang" />
    </div>
    <!-- 热搜榜 -->
    <div class="re">
      <h6>热搜榜</h6>
      <ul>
        <li v-for="(item, index) in First" :key="index">
          <span class="sp1">{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="sp2">{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="kuai">
      <span>歌手分类</span>
      <span>听歌有奖</span>
      <span>电音专区</span>
      <span>古典专区</span>
      <span>ACG专区</span>
      <span>亲子专区</span>
      <span>说唱专区</span>
      <span>声之剧场</span>
      <span>浪姐团综</span>
      <span>火前留名</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { value: "", First: [] };
  },
  computed: {},
  watch: {},
  methods: {
    fan() {
      this.$router.push("/cloud/tuijian/shipin");
    },
    githot() {
      this.$request.get("/search/hot").then((res) => {
        let stars = res.result.hots;
        console.log(stars);
        for (let i = 0; i < stars.length; i++) {
          this.First.push(stars[i].first);
        }
        console.log(this.First);
      });
    },
  },
  created() {
    this.githot();
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
.sou {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 9;
}
.tou {
  position: relative;
}
.biao {
  font-size: 0.5rem;
  position: absolute;
  top: 0.3rem;
}
.kuang {
  width: 90%;
  margin-left: 0.5rem;
}
h6 {
  margin: 0 auto;
  display: block;
  width: 95%;
  height: 0.7rem;

  font-size: 0.3rem;
  line-height: 0.7rem;
  border-bottom: 1px solid #f1f1f1;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  li {
    width: 40%;
    height: 0.8rem;

    .sp1 {
      color: red;
      font-size: 0.3rem;
      line-height: 0.8rem;
    }
    .sp2 {
      color: #000;
      font-size: 0.25rem;
      line-height: 0.8rem;
      font-weight: 700;
    }
  }
}
.kuai {
  margin-top: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  span {
    // background: orange;
    border-radius: 0.2rem;
    display: block;
    width: 40%;
    height: 1rem;
    margin-top: 0.2rem;
    line-height: 1rem;
    font-size: 0.3rem;
    color: #fff;
    font-weight: 600;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608047918430&di=1aefbcd19d4db28f519ea10306007144&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190125%2F1fad8502421a4befa0b9e5c197d7649f.jpeg");
  }
}
</style>
