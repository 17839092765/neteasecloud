import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import rem from "./util/rem";
Vue.use(rem);

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import { Icon } from "vant";
Vue.use(Icon);

import { Toast } from 'vant';
Vue.use(Toast);

import request from "./util/request";
Vue.prototype.$request = request;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");