<template>
  <div class="tuijian">
    <van-sticky :offset-top="44">
      <van-tabs v-model="active">
        <van-tab title="视频" to="/cloud/tuijian/shipin"></van-tab>
        <van-tab title="演唱" to="/cloud/tuijian/yanchang"></van-tab>
        <van-tab title="音乐安利" to="/cloud/tuijian/anli"></van-tab>
      </van-tabs>
    </van-sticky>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return { active: 0 };
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
