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
  </div>
</template>

<script>
export default {
  data() {
    return { active: 1 };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.$store.state.sidebarBtn = true;
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
