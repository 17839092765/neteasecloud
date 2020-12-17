<template>
  <div class="listen">
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="item in list1" :key="item">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span>{{ item }}</span>
      </van-grid-item>
    </van-grid>
    <div class="box">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          v-for="item in geshou"
          :key="item.id + Math.random() * 1000"
          class="geshou"
        >
          <van-image
            width="3rem"
            height="3rem"
            fit="contain"
            :src="item.img1v1Url"
          />
          <span>{{ item.name }}</span>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      list1: [
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
      offset: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    // getgeshou() {

    // },
    getgeshou1() {
      this.$request.get("/artist/list?type=-1&area=16").then((res) => {
        console.log(res);
        this.geshou1 = res.artists;
      });
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.$request
          .get(`/top/artists?offset=${this.offset}&limit=1`)
          .then((res) => {
            console.log(res);
            res.artists.forEach((item) => {
              console.log(item);
              this.geshou.push(item);
              console.log(this.geshou);
            });
            this.offset++;
            console.log(this.offset);
          });
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
        // }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.finished = true;
        // }
      }, 1000);
    },
  },
  created() {
    // this.getgeshou();
    // this.getgeshou1();
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
