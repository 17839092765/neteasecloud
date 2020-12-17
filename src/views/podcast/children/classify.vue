<template>
  <div class="">
    <!-- http://121.4.58.185:3000/playlist/catlist -->
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="item in dtname" :key="item.pic56x56Id">
        <van-image :src="item.picIPadUrl" style="width:50px" />
        <span>{{ item.name }}</span>
      </van-grid-item>
    </van-grid>
    <!-- 精选MV -->
    <div class="bodan">
      <div
        class="bodan-top"
        v-for="item in dtname"
        :key="item.pic56x56Id"
        @click="postId(item.id)"
      >
        <div class="bodan-tit">
          <p>{{ item.name }}</p>
          <van-tag plain type="primary">更多></van-tag>
        </div>
        <div class="bodan-bottom">
          <figure v-for="item in alllist" :key="item.artistId">
            <img :src="item.picUrl" alt="" />
            <figcaption>{{ item.name }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // postId: "",
      alllist: [],
      dtname: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    getdiantai() {
      this.$request.get("/dj/catelist").then((res) => {
        console.log(res.categories);
        this.dtname = res.categories;
      });
    },
    postId(id1) {
      let id = id1;
      console.log(id);
      this.dtname.forEach((element) => {
        console.log(element.id);
      });
      this.$request
        .post("/dj/recommend/type?", {
          type: id,
        })
        .then((res) => {
          console.log(res.djRadios);
          this.alllist = res.djRadios;
        });
    },
  },
  created() {
    this.getdiantai();
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
img {
  width: 20px;
}
.bodan {
  .bodan-top {
    // display: flex;
    // justify-content: space-between;
    .bodan-tit {
      display: flex;
      justify-content: space-between;
    }
    p {
      font-size: 0.32rem;
      font-weight: 600;
    }
    span {
      font-size: 0.24rem;
      padding: 0.06rem 0.12rem;
      border-radius: 10px;
    }
  }
  .bodan-bottom {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    figure {
      margin-top: 0.2rem;
      width: 30%;
      // height: 4rem;
      // background: pink;
      figcaption {
        font-size: 0.26rem;
        margin: 0.2rem 0.1rem;
      }
    }
  }
  img {
    width: 100%;
    height: 120px;
    border-radius: 10px;
  }
}
</style>
