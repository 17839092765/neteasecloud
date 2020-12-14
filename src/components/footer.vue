<template>
  <div class="footer">
    <router-link tag="div" to="/find">发现</router-link>
    <router-link tag="div" to="/podcast">播客</router-link>
    <router-link tag="div" to="/mine">我的</router-link>
    <router-link tag="div" to="/ksong">k歌</router-link>
    <router-link tag="div" to="/cloud">云村</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
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
  .footer {
    background: rgb(202, 185, 185);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
