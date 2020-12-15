<template>
  <div class="mine">
    <div class="header">
      <div class="photo">
        <img src="../../assets/timg.jpg" alt="" />
        <p>1111111111</p>
        <p>
          <span>开通VIP</span>
          <span>Lv.7</span>
        </p>
      </div>
      <van-icon name="arrow" @click="person"/>
    </div>
    <el-row class="list">
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-upload"></i>
        <p>本地/下载</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-light-rain"></i>
        <p>云盘</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-success"></i>
        <p>已购</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-info"></i>
        <p>最近播放</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-user-solid"></i>
        <p>我的好友</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-star-on"></i>
        <p>收藏和赞</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-s-finance"></i>
        <p>我的播客</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao8" class="el-icon-circle-plus"></i>
        <p>音乐应用</p>
      </el-col>
    </el-row>
    <el-row class="like">
      <el-col class="like-left" :span="4">
        <img
          src="https://p2.music.126.net/RrIyxp5PZccPsHPbuIz2Yg==/109951165167277809.jpg?param=40y40"
          alt=""
        />
      </el-col>
      <el-col class="like-main" :span="12" >
        <p>我喜欢的音乐</p>
        <p>199首</p>
      </el-col>
      <el-col class="like-right" :span="8">
        <p>
          <i class="el-icon-star-off"></i>
          <span>心动模式</span>
        </p>
      </el-col>
    </el-row>
    <van-tabs v-model="activeName">
      <van-tab title="创建歌单" name="a">
        <ul v-for="item in musiclist" :key="item.id" class="musiclist">
          <img :src="item.coverImgUrl" alt="" />
          <li>{{ item.name }}</li>
          <li>{{ item.trackCount }}首</li>
        </ul>
      </van-tab>
      <van-tab title="收藏歌单" name="b">
        <ul v-for="item in musiclist" :key="item.id">
          <img :src="item.coverImgUrl" alt="" />
          <li></li>
        </ul>
      </van-tab>
      <van-tab title="歌单助手" name="c">内容 3</van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      activeName: "a",
      musiclist: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    getlist() {
      this.$request.get("/user/playlist?uid=1319804936").then((res) => {
        this.musiclist = res.playlist;
        console.log(this.musiclist);
      });
    },
    person(){
      this.$router.push("../mine/mylist/index.vue")
    }
  },
  created() {
    this.getlist();
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
.mine {
  img {
    width: 60px;
  }
  margin: 0 auto;
  background-color: #f7f7f7;
  .header {
    height: 100px;
    position: relative;
    .photo {
      margin-left: 30px;
      margin-top: 50px;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: block;
        float: left;
      }
      p {
        font-size: 14px;
        font-weight: 600;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
      }
      span:nth-child(1) {
        text-align: center;
        float: left;
        display: block;
        font-size: 14px;
        width: 60px;
        padding: 0 5px;
        height: 22px;
        line-height: 22px;
        background: #000;
        color: #fff;
        border-radius: 10px;
        position: absolute;
        left: 110px;
        bottom: 35px;
      }
      span:nth-child(2) {
        text-align: center;
        width: 40px;
        height: 20px;
        border-radius: 10px;
        background-color: #fff;
        position: absolute;
        left: 180px;
        bottom: 35px;
        padding: 0 5px;
        line-height: 20px;
      }
    }
  }
  .van-icon {
    font-size: 20px;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .list {
    height: 160px;
    width: 90%;
    background-color: #ffffff;
    margin: 0 auto;
    border-radius: 10px;
    .list-inner {
      height: 80px;
      text-align: center;
      #tubiao {
        font-size: 36px;
        margin-top: 10px;
        color: red;
      }
      #tubiao8 {
        font-size: 36px;
        margin-top: 10px;
        color: #a8a8a8;
      }
      p {
        height: 20px;
        line-height: 20px;
        margin-top: 5px;
        color: #5a5a5a;
      }
    }
  }
  .like {
    height: 80px;
    width: 90%;
    margin: 10px auto;
    background-color: #fff;
    padding: 10px 10px;
    position: relative;
    border-radius: 10px;
    .like-left {
      height: 100%;
      width: 60px;
      background-color: #000;
      opacity: 0.9;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .like-main {
      float: left;
      p:nth-child(1) {
        margin-left: 15px;
        margin-top: 5px;
        font-size: 16px;
      }
      p:nth-child(2) {
        margin-left: 15px;
        margin-top: 2px;
        color: #8d8d8d;
        font-size: 12px;
      }
    }
    .like-right {
      p {
        width: 60px;
        height: 13px;
        border-radius: 14px;
        padding: 5px 7px;
        line-height: 13px;
        border: 1px solid #8d8d8d;
        position: absolute;
        top: 27px;
        right: 20px;
        i {
          height: 100%;
        }
        span {
          height: 100%;
        }
      }
    }
  }
  .van-tabs {
    height: 50px;
    width: 90%;
    margin: 0 20px;
    p {
      font-size: 16px;
      text-align: center;
      line-height: 45px;
      color: #000;
    }
    .van-tab__pane {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      background: #fff;
    }
  }
  .musiclist{
    width: 90%;
  }
}
 


