<template>
  <div class="podcast">
    <div>
      <van-sticky>
        <van-tabs v-model="active" swipeable animated class="van-tabs1">
          <van-tab title="歌手" to="/podcast/listen"></van-tab>
          <van-tab title="推荐" to="/podcast/recommend"></van-tab>
          <van-tab title="分类" to="/podcast/classify"></van-tab>
        </van-tabs>
        <div class="search"><van-icon name="search" size="20px" /></div>
      </van-sticky>
    </div>
    <router-view></router-view>
    <van-overlay
      :show="show"
      @click="(show = false), ($store.state.mp4show = false)"
      lock-scroll:true
    >
      <div class="wrapper" @click.stop>
        <video
          class="mp4show"
          autoplay="autoplay"
          width="100%"
          height="300px"
          controls
          v-if="this.$store.state.mp4show"
          :src="videoUrl"
          z-index="99999999999"
        ></video>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      videoUrl: "",
      show: false,
      scroll: true,
    };
  },
  computed: {},
  watch: {
    "$store.state.videoUrl"() {
      this.getmv();
    },
  },
  methods: {
    getmv() {
      this.videoUrl = this.$store.state.videoUrl;
      this.show = true;
      this.$store.state.mp4show = true;
    },
    // show(event) {
    //   console.log(event);
    //   this.show = false;
    //   this.$store.state.mp4show = false;
    // },
  },
  created() {
    this.$store.state.sidebarBtn = true;
    console.log(this.videoUrl);
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
  height: 300px;
}
.van-sticky {
  display: flex;
  position: relative;

  .van-tabs1 {
    width: 80%;
    margin: 0 auto;
    // display: flex;
    flex-direction: row;
  }
  .search {
    position: absolute;
    top: 0.22rem;
    right: 0.3rem;
  }
}
</style>
