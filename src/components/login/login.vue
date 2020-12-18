<template>
  <div class="login">
    <div class="box">
      <div class="pic">
        <img src="../../assets/img/huahuahua.webp" alt="" />
        <div class="ico">
          <van-icon name="service-o" />
        </div>
      </div>
    </div>

    <van-form autocomplete="off" label-width="1rem">
      <van-field
        v-model="username"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <van-field
        v-if="!flag"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <div style="margin: 16px;">
        <van-button
          v-if="!flag"
          @click="onSubmit"
          round
          block
          type="info"
          native-type="submit"
        >
          登录
        </van-button>
        <van-button
          style="marginTop: 16px;"
          round
          block
          @click="xiupassword"
          type="primary"
          >忘记密码?</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
  import { Toast } from "vant";

  import cookie from "js-cookie";
  export default {
    data() {
      return {
        flag1: false,
        flag: false,
        phoneMa: "",
        username: "",
        password: "",
      };
    },
    computed: {},
    watch: {},
    methods: {
      yanzhengma() {
        this.flag1 = true;
        console.log(111);
        this.flag = true;

        this.$request
          .get(`/captcha/sent?phone=${this.username}`)
          .then((res) => {
            console.log(res);
            if (res.code == 200) {
              this.flag1 = false;
            }
          });
      },

      onSubmit() {
        // console.log("submit", values);
        this.$request
          .get(
            `/login/cellphone?phone=${this.username}&password=${this.password}`
          )
          .then((res) => {
            console.log(res);
            if (res.code == 502) {
              Toast(res.message);
            } else if (res.code == 200) {
              this.$cookie.set("cookie", res.cookie);
              this.$cookie.set("uid", res.account.id);
              this.$router.push("/");
            }
          });
      },
      xiupassword() {
        this.$router.push("/xiupassword");
      },
    },
    created() {
      if (cookie.get("cookie")) {
        this.$router.push("/find");
      }
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
  .login {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #f00000;
    .van-form {
      width: 80%;
      margin: 0 auto;
      .van-field {
        margin: 0.2rem auto;
        border-radius: 0.2rem;
      }
      .van-button {
        width: 50%;
        margin: 0 auto;
      }
    }
    .box {
      width: 100%;
      height: 50%;
      //   border: 1px solid #cecece;
      display: flex;

      justify-content: space-around;
      align-items: center;
      .pic {
        width: 4rem;
        height: 4rem;
        img {
          width: 100%;
        }
      }
      .ico {
        width: 4rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .van-icon {
          font-size: 1rem;
        }
      }
    }
  }
</style>
