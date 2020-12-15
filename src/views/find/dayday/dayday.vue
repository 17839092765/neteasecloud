<template>
  <div class="dayday">
    <van-sticky>
      <van-nav-bar
        title="每日推荐"
        left-text=""
        right-text="?"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </van-sticky>

    <div class="box">
      <div
        @click="goToSong(item.id)"
        v-for="item in songs"
        :key="item.id"
        class="case"
      >
        <div class="pic">
          <img :src="item.al.picUrl" alt="" />
        </div>
        <div class="title">
          <p>
            <span>
              {{ item.name }}
            </span>
            <span v-if="item.id == hot[0].songId">{{ hot[0].reason }}</span>
          </p>
          <p>{{ item.ar[0].name }}-{{ item.al.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from "vant";
  export default {
    data() {
      return {
        songs: [],
        hot: [],
      };
    },
    computed: {},
    watch: {},
    methods: {
      onClickLeft() {
        Toast("返回");
        this.$router.push("/find");
      },
      onClickRight() {
        Toast("按钮");
      },
      goToSong(idd) {
        this.$store.state.music.playYON = false;
        let id = idd;
        console.log(id);
        this.$request
          .post("/song/url", {
            id,
          })
          .then((res) => {
            this.$store.state.music.songUrl = res.data[0].url;
            console.log(res.data[0].url);
            this.$store.state.music.playYON = true;
          });
      },
    },
    created() {
      let cookie = this.$cookie.get("cookie");
      console.log(cookie);
      this.$request
        .post("/recommend/songs", {
          cookie,
        })
        .then((res) => {
          this.hot = res.data.recommendReasons;
          console.log(this.hot);
          this.songs = res.data.dailySongs;
          console.log(res);
          console.log(22222222222222, res.data.dailySongs);
        });
    },
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
  .dayday {
    position: fixed;
    width: 100%;
    top: 0rem;
    left: 0;
    bottom: 0;
    overflow: scroll;
    background: rgb(255, 255, 255);
    .header {
      height: 1rem;
      width: 100%;
      background: rgb(245, 245, 245);
    }
    .box {
      // padding-top: 1rem;
      width: 100%;
      padding: 0 0.2rem;
      box-sizing: border-box;
      // height: 100%;
      .case {
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0.1rem 0;
        .pic {
          width: 20%;
          height: 1rem;
          overflow: hidden;
          img {
            width: 80%;
            // height: 1rem;
          }
        }
        .title {
          width: 80%;
          height: 100%;
          // background: rgb(218, 177, 177);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          p:nth-of-type(1) {
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.3rem;
            > span:nth-of-type(2) {
              color: red;
              font-size: 0.1rem;
              // line-height: 0.4rem;
              // vertical-align: top;
            }
          }
          // p:nth-of-type(2) {
          // }
        }
      }
    }
  }
</style>
