<template>
  <div class="podcast">
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="听听" to="/podcast/listen"></van-tab>
      <van-tab title="推荐" to="/podcast/recommend"></van-tab>
      <van-tab title="分类" to="/podcast/classify"></van-tab>
    </van-tabs>
    <router-view></router-view>
    <div class="search"><van-icon name="search" size="20px" /></div>
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
.podcast {
  // margin: 0 50px;
}
.search {
  position: fixed;
  top: 0.2rem;
  right: 0.2rem;
}
</style>
