<template>
  <div class="listen">
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="item in list" :key="item">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span>{{ item }}</span>
      </van-grid-item>
    </van-grid>
    <div class="box">
      <div v-for="item in geshou" :key="item.picId" class="geshou">
        <van-image
          width="3rem"
          height="3rem"
          fit="contain"
          :src="item.img1v1Url"
        />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "华语",
        "欧美",
        "日本",
        "韩国",
        "其他",
        "全部",
        "男歌手",
        "女歌手",
        "乐队/组合",
        "更多",
      ],
      geshou: [],
      geshou1: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    getgeshou() {
      this.$request.get("/top/artists?offset=0&limit=8").then((res) => {
        console.log(res);
        this.geshou = res.artists;
      });
    },
    getgeshou1() {
      this.$request.get("/artist/list?type=-1&area=16").then((res) => {
        console.log(res);
        this.geshou1 = res.artists;
      });
    },
  },
  created() {
    this.getgeshou();
    this.getgeshou1();
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
.listen {
  padding: 0 0.2rem;
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  left: 0;
  width: 100%;
  overflow: scroll;
  box-sizing: border-box;
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // margin: 0 5%;
    text-align: center;
    .geshou {
      // width: 30%;
      margin: 10px;
      display: flex;
      flex-direction: column;
      // flex-direction: row;
    }
    span {
      font-size: 18px;
    }
  }
}
</style>
