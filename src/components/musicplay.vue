<template>
  <div class="Musicplay">
    <aplayer
      autoplay
      :music="{
        title: $store.state.music.title,
        artist: $store.state.music.artist,
        src: $store.state.music.songUrl,
        pic: $store.state.music.songpicUrl,
      }"
    />
  </div>
</template>

<script>
  import Aplayer from "vue-aplayer";

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
    components: { Aplayer },
  };
</script>

<style lang="scss" scoped>
  .Musicplay {
    position: fixed;
    width: 100%;
    bottom: 1rem;
    left: 0;
    height: 1.4rem;
  }
</style>
