<template>
  <div class="cloud">
    <van-sticky>
      <van-tabs v-model="active">
        <van-tab title="关注" to="/cloud/guanzhu"></van-tab>
        <van-tab title="推荐" to="/cloud/tuijian"></van-tab>
      </van-tabs>
    </van-sticky>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return { active: 2 };
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

<style lang="scss" scoped></style>
