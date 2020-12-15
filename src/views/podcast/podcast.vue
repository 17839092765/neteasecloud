<template>
  <div class="podcast">
    <div class="xiding1">
      <van-sticky>
        <van-tabs v-model="active" swipeable animated class="van-tabs1">
          <van-tab title="听听" to="/podcast/listen"></van-tab>
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
.van-tabs1 {
  width: 80%;
  // display: flex;
  flex-direction: row;
}
.search {
  // position: fixed;
  // top: 0.2rem;
  // right: 0.2rem;
}
</style>
