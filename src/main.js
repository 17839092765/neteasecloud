import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import rem from "./util/rem";
Vue.use(rem);

import Vant from "vant";
import "vant/lib/index.css";
import "element-ui/lib/theme-chalk/index.css";
import elementUI from "element-ui";
Vue.use(elementUI);
Vue.use(Vant);

import { Icon } from "vant";
Vue.use(Icon);

import { Toast } from "vant";
Vue.use(Toast);
import { Lazyload } from "vant";
Vue.use(Lazyload);
import request from "./util/request";
Vue.prototype.$request = request;

import cookie from "js-cookie";
Vue.prototype.$cookie = cookie;
Vue.config.productionTip = false;
new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");

// router.beforeEach((to, from, next) => {
//   let hasLogin = cookie.get("cookie") || "";
//   if (hasLogin) {
//     if (to.path == "/login") {
//       next("/");
//     } else {
//       next();
//     }
//   } else {
//     if (to.path == "/login" || to.path == "/xiupassword") {
//       next();
//     } else {
//       if (from.path != "/login") {
//         next("/login");
//       }
//     }
//   }
// });
