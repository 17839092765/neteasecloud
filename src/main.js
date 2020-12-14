import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
<<<<<<< HEAD

import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
=======
import request from "./util/request";
Vue.prototype.$request = request;
>>>>>>> dev
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
