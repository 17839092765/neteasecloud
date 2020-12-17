<template>
  <div class="bodan">
    <div class="bodan-top">
      <p>精选视频</p>
      <van-tag plain type="primary">更多></van-tag>
    </div>
    <div class="bodan-bottom">
      <figure
        v-for="item in allmv"
        :key="item.artistId"
        @click="postid(item.id)"
      >
        <img :src="item.cover" alt="" />
        <figcaption>{{ item.name }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["allmv"],
  computed: {},
  watch: {},
  methods: {
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
  },
  created() {},
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
</style>
