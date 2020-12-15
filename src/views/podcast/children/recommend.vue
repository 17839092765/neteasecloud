<template>
  <div class="">
    <div class="boke">
      <span>
        <van-icon
          name="volume"
          size="20px"
          style="margin:0 5px"
        />我的播客</span
      ><van-icon name="arrow" size="18px" />
    </div>
    <div class="bodan">
      <span>精选播单</span>
      <van-tag plain type="primary">更多></van-tag>
      <figure>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608028894775&di=62ecf81776ddcdf0fef9aed3bf7c7b91&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F07%2F10%2F3e4575f9df9afb8c4d49883b2f5cfce6.jpg"
          alt=""
        />
        <figcaption>你一定会爱上的惊艳男生翻唱</figcaption>
      </figure>
    </div>
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
.boke {
  padding: 10px;
  border: 1px solid red;
  border-radius: 20px;
  margin: 20px 10px;
  display: flex;
  justify-content: space-between;
  // background: pink;
  span {
    font-size: 16px;
    vertical-align: middle;
    line-height: 20px;
    i {
      vertical-align: middle;
    }
  }
}
.bodan {
  img {
    width: 50px;
  }
}
</style>
