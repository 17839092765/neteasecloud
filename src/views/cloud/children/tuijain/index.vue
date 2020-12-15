<template>
  <div class="tuijian">
    <van-tabs v-model="active">
      <van-tab title="视频" to="/cloud/tuijian/shipin"></van-tab>
      <van-tab title="演唱" to="/cloud/tuijian/yanchang"></van-tab>
      <van-tab title="音乐安利" to="/cloud/tuijian/anli"></van-tab>
      <van-tab title="演奏" to="/cloud/tuijian/yanzou"></van-tab>
      <van-tab title="MV" to="/cloud/tuijian/mv"></van-tab>
      <van-tab title="生活" to="/cloud/tuijian/shenghuo"></van-tab>
      <van-tab title="舞蹈" to="/cloud/tuijian/wudao"></van-tab>
      <van-tab title="混剪" to="/cloud/tuijian/hunjian"></van-tab>
    </van-tabs>
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
