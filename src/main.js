import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import rem from "./util/rem";
import Vant from "vant";
import "vant/lib/index.css";
import 'element-ui/lib/theme-chalk/index.css';
import elementUI from "element-ui";
Vue.use(elementUI);
Vue.use(Vant);
Vue.use(rem);
import { Icon } from "vant";

Vue.use(Icon);
import request from "./util/request";
Vue.prototype.$request = request;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");