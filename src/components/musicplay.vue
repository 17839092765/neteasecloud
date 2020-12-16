<template>
  <div class="Musicplay">
    <div @click.stop="goBig" class="box">关闭</div>
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
    methods: {
      goBig() {
        console.log(111);
        // this.$router.push("/audio");
        this.$store.state.music.playYON = false;
        // this.$store.state.footer = false;
      },
    },
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
    .box {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      width: 0.7rem;
      height: 0.5rem;
      text-align: center;
      line-height: 0.5rem;
      // background: #000;
      border: 1px solid #000;
      border-radius: 0.1rem;
      z-index: 10000;
    }
  }
</style>
