<template>
  <div class="search">
    <div class="title">
      <div>歌曲</div>
      <div>歌手</div>
      <div>专辑</div>
    </div>
    <div class="box">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          offset="10"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            @click="
              goToSong(
                item.id,
                item.name,
                item.ar[0].name,
                item.al.picUrl,
                item
              )
            "
            v-for="item in list"
            :key="item.id + Math.random() * 1000000"
            class="case"
          >
            <div class="van-ellipsis">{{ item.name }}</div>
            <div class="van-ellipsis">{{ item.ar[0].name }}</div>
            <div class="van-ellipsis">{{ item.al.name }}</div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
        count: 0,
        num: 12,
      };
    },
    computed: {},
    watch: {
      "$store.state.search"() {
        this.onRefresh();
        this.onLoad();
      },
    },
    methods: {
      onRefresh() {
        // 清空列表数据
        this.finished = false;
        this.refreshing = true;
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
      onLoad() {
        if (this.$store.state.search) {
          setTimeout(() => {
            if (this.refreshing) {
              this.list = [];
              this.count = 0;
              this.num = 12;
              this.refreshing = false;
            }
            this.$request
              // .post(
              //   "/cloudsearch?keywords=" +
              //     this.$store.state.search +
              //     "&end=" +
              //     "&offset=" +
              //     this.count +
              //     "&limit=" +
              //     this.num
              // )
              .post("/cloudsearch", {
                keywords: this.$store.state.search,
                offset: this.count,
                limit: this.num,
              })
              .then((res) => {
                console.log(res);
                if (res.result.songs.length <= 0) {
                  this.finished = true;
                  console.log("33333333333333333333333333累了");
                }
                // console.log(res.data.data.films);
                for (let i = 0; i < res.result.songs.length; i++) {
                  this.list.push(res.result.songs[i]);
                }
                console.log(this.list);
                this.count++;
                this.num = 5;
                this.loading = false;
              });

            // 加载状态结束
            // this.loading = false;

            // 数据全部加载完成
            // if (this.list.length >= 45) {
            //   this.finished = true;
            //   // this.refreshing = false;
            // }
          }, 1000);
        }
      },
      goToSong(idd, title, artist, picUrl, item) {
        console.log(item);
        console.log(idd, title, artist);
        this.$store.state.music.playYON = false;
        let id = idd;
        console.log(id);
        this.$request
          .post("/song/url", {
            id,
            cookie: this.$cookie.get("cookie"),
          })
          .then((res) => {
            this.$store.state.music.songUrl = res.data[0].url;
            this.$store.state.music.title = title;
            this.$store.state.music.artist = artist;
            this.$store.state.music.songpicUrl = picUrl;
            console.log(res.data[0].url);
            console.log(picUrl);
            this.$store.state.music.playYON = true;
          });
      },
    },
    created() {
      // this.getplaylist();
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
  .search {
    position: fixed;
    top: 1rem;
    left: 0;
    // height: auto;
    // box-sizing: border-box;
    // padding-bottom: 1rem;
    width: 100%;
    bottom: 1rem;
    overflow: scroll;
    // z-index: 10;
    background: rgb(255, 255, 255);
  }
  .box {
    padding-top: 1rem;
  }
  .case {
    border-top: 1px solid rgba(198, 189, 189, 0.313);
    width: 95%;
    height: 1rem;
    margin: 0 auto;
    > div {
      font-size: 0.14rem;
      height: 100%;
      line-height: 1rem;
      float: left;
    }
    > div:nth-of-type(1) {
      width: 40%;
    }
    > div:nth-of-type(2) {
      width: 20%;
    }
    > div:nth-of-type(3) {
      width: 40%;
    }
  }
  .title {
    position: fixed;
    top: 1rem;

    border-top: 1px solid rgba(198, 189, 189, 0.313);
    width: 100%;
    height: 1rem;
    margin: 0 auto;
    background: floralwhite;
    z-index: 1;
    > div {
      font-size: 0.14rem;
      height: 100%;
      line-height: 1rem;
      //   text-align: center;
      float: left;
    }
    > div:nth-of-type(1) {
      text-indent: 0.2rem;
      width: 40%;
    }
    > div:nth-of-type(2) {
      width: 20%;
    }
    > div:nth-of-type(3) {
      width: 40%;
      //   text-align: center;
    }
  }
</style>
