<template>
  <div class="cloud">
    <van-sticky>
      <van-tabs animated swipeable v-model="active">
        <van-tab title="关注" to="/cloud/guanzhu"></van-tab>
        <van-tab title="推荐" to="/cloud/tuijian"></van-tab>
      </van-tabs>
    </van-sticky>

    <keep-alive> <router-view></router-view></keep-alive>
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

<style lang="scss" scoped>
  .cloud {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 1rem;
    width: 100%;
    overflow-y: scroll;
  }
</style>
