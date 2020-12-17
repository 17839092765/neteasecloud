<template>
  <div class="ksong">
    <form action="/">
      <van-search
        v-if="showss"
        v-model="value"
        @input="oninput(value)"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <ul v-show="ulshow" class="ullist">
      <li
        class="lilist"
        v-for="(item, index) in arreylist"
        :key="index"
        @click="onclick(item)"
      >
        <van-icon name="search" size="0.3rem" />{{ item.keyword }}
      </li>
      <li
        v-for="(item, index) in arreylists"
        :key="index"
        @click="onclicks(item)"
      >
        <img :src="item.al.picUrl" /> {{ item.name }} {{ item.ar[0].name }}
      </li>
      <audio
        v-if="yinyue"
        class="yinyue"
        :src="mp3url"
        autoplay
        controls
      ></audio>
    </ul>
    <div v-if="shows">
      <h2>K歌</h2>
      <span class="tutu"
        ><van-icon name="search" size="0.6rem" @click="onbtn"
      /></span>
      <van-grid :border="true" :column-num="2">
        <van-grid-item icon="audio" text="点歌台" @click="hzuop" />
        <van-grid-item icon="music" text="我的K歌" @click="hzuop" />
      </van-grid>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
      <van-cell-group>
        <van-cell
          title="热门活动"
          value="赢房猫签名照"
          label="歌名造句挑战"
          is-link
        />
      </van-cell-group>
      <div class="videos">
        <van-grid :border="true" :column-num="2">
          <van-grid-item text="为你推荐" @click="mytj" />
          <van-grid-item text="好友作品" @click="hzuop" />
        </van-grid>
        <ul class="uuls">
          <li
            v-for="(item, index) in veideos"
            :key="index"
            @click="messgg(item)"
          >
            <h3>{{ item.data.title }}</h3>
            <!-- <img :src="item.data.coverUrl" alt=""> -->
            <van-image scale-down :src="item.data.coverUrl" />
            <!-- <img :src="item.data.creator.avatarUrl" alt="">
      <img :src="item.data.creator.backgroundUrl" alt=""> -->
            <van-grid
              direction="horizontal"
              :column-num="3"
              icon-size="16"
              :border="false"
            >
              <van-grid-item icon="share-o" :text="item.data.shareCount" />
              <van-grid-item icon="chat-o" :text="item.data.commentCount" />
              <van-grid-item
                icon="thumb-circle-o"
                :text="item.data.praisedCount"
              />
            </van-grid>

            <!-- <span>{{item.data.vid}}</span> -->
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      showss: false,
      shows: true,
      arreylist: [],
      ulshow: false,
      arreylists: [],
      yinyue: false,
      mp3url: "",
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
      veideos: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    hzuop() {
      Toast("此模块正在开发中,敬请期待！");
    },
    onSearch(val) {
      this.yinyue = false;
      this.ulshow = true;

      this.$request.post("/cloudsearch", { keywords: val }).then((res) => {
        console.log(res.result.songs);
        this.arreylists = res.result.songs;
      });
    },
    onCancel() {
      (this.shows = true), (this.showss = false), (this.ulshow = false);
      this.yinyue = false;
      console.log(this.ulshow);
    },
    onbtn() {
      this.yinyue = false;
      (this.showss = true), (this.shows = false);
    },
    oninput(value) {
      this.yinyue = false;
      this.arreylists = [];
      this.ulshow = true;
      this.arreylist = [];
      let times = Date.now();
      console.log(typeof value);
      console.log(value);
      if (value) {
        this.$request
          .post("/search/suggest", {
            timestamp: times,
            keywords: value,
            type: "mobile",
          })
          .then((res) => {
            console.log(res.result.allMatch);
            const list = res.result.allMatch;
            this.arreylist = list;
          });
      }
    },
    onclick(item) {
      console.log(item);
      this.value = item.keyword;
      this.ulshow = false;
      this.arreylist = [];
    },
    onclicks(item) {
      console.log(item.id);
      this.$request.post("/song/url", { id: item.id }).then((res) => {
        console.log(res);
        console.log(res.data[0].url);
        if (res.data[0].url) {
          this.yinyue = true;
          let url = res.data[0].url;
          console.log(url);
          this.mp3url = url;
        }
      });
    },
    mytj() {
      this.veideos = [];
      this.$cookie.get("cookie");
      this.$request
        .post("/video/timeline/recommend", {
          cookie: this.$cookie.get("cookie"),
        })
        .then((res) => {
          console.log(res);
          this.veideos = res.datas;
          Toast(res.msg);
        });
    },
    messgg(item) {
      // this.$request.post("/video/detail/info",{cookie:this.$cookie.get('cookie'),vid:item.data.vid}).then(res=>{
      //   console.log(res)
      // })
      // this.$store.state()
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
  components: {},
};
</script>

<style lang="scss">
h2 {
  position: absolute;
  top: 2%;
  left: 46%;
}
.tutu {
  position: absolute;
  top: 0.2rem;
  right: 0.1rem;
  // margin-top:0.2rem ;margin-right: 0.1rem;
}
.van-search {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
}
.ullist {
  position: absolute;
  top: 8%;
  left: 5%;
  img {
    width: 1rem;
  }
  .yinyue {
    position: fixed;
    bottom: 10%;
    left: 25%;
  }
}
.lilist {
  width: 4rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.28rem;
  .van-icon {
    margin-right: 0.2rem;
  }
}
.van-grid {
  margin: 0 auto;
  margin-top: 1rem;
  .van-grid-item__content:active {
    background-color: #f5f5f5;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe {
  width: 100%;
  img {
    margin-left: 10%;
    width: 80%;
  }
}
.grid-item1 {
  margin-right: 0;
  width: 50%;
  height: 100%;
}
.tubiaoimg {
  position: relative;
  left: 0;
  width: 1rem;
}
.videos {
  .van-grid-item__text {
    font-size: 0.32rem;
  }
  .van-grid-item__content:active {
    background-color: #f5f5f5;
  }
}
.uuls {
  margin: 0 auto;
  li {
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .van-grid-item__text {
      width: 1rem;
      font-size: 12px;
    }
    .van-grid {
      padding-top: 0;
      margin-top: 0;
    }
    h3 {
      margin: 0.3rem auto;
    }
  }

  img {
    width: 5rem;
  }
  li:last-child {
    height: 2rem;
  }
}
</style>
