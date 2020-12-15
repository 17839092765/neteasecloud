<template>
  <div class="footer">
    <van-tabbar route="true" v-model="active">
      <van-tabbar-item icon="music" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="circle" to="/podcast">博客</van-tabbar-item>
      <van-tabbar-item icon="music-o" to="/mine">我的</van-tabbar-item>
      <van-tabbar-item icon="search" to="/ksong">K歌</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cloud">云村</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: "0",
      };
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
