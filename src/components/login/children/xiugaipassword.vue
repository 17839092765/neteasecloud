<template>
  <div class="xiupassword">
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field
      :autofocus="dianji"
      :clickable="dianji"
      v-model="tel"
      type="number"
      label="手机号"
      placeholder="请输入手机号"
    />
    <van-field
      @blur="yanzheng"
      v-model="sms"
      :clickable="dianji"
      center
      clearable
      type="number"
      label="短信验证码"
      placeholder="请输入短信验证码"
    >
      <template #button>
        <van-button @click.stop="sendMa" size="small" type="primary"
          >发送验证码</van-button
        >
      </template>
    </van-field>
    <!-- 输入密码 -->
    <van-field
      :clickable="dianji"
      v-model="password"
      type="password"
      label="设置密码"
      placeholder="请输入密码"
    />
    <van-field
      :clickable="dianji"
      v-model="password1"
      type="password"
      label="重复密码"
      placeholder="重复密码"
    />
    <van-button
      style="marginTop: 16px;"
      round
      block
      @click="xiugaimima"
      type="primary"
      >修改密码</van-button
    >
    <van-button
      style="marginTop: 16px;"
      round
      block
      @click="gologin"
      type="primary"
      >回到登录</van-button
    >
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        dianji: true,
        tel: "",
        password: "",
        password1: "",
        sms: "",
        aaa: { phone: 17839092765 },
      };
    },
    computed: {},
    watch: {},
    methods: {
      xiugaimima() {
        if (this.password == this.password1) {
          this.$request
            .post("/register/cellphone", {
              captcha: Number(this.sms),
              phone: Number(this.tel),
              password: this.password,
            })
            .then((res) => {
              console.log(res);
            });
        } else {
          alert("两次密码不一样");
        }
      },
      yanzheng() {
        console.log(this.sms);
        this.$request
          .post("/captcha/verify", {
            captcha: Number(this.sms),
            phone: Number(this.tel),
          })
          .then((res) => {
            console.log(res);
          });
      },
      sendMa() {
        this.$request
          .post("/captcha/sent", {
            phone: this.tel,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            alert("每日只能发送5次");
            console.log(err);
          });
      },
      gologin() {
        this.$router.push("/login");
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

<style lang="scss" scoped></style>
