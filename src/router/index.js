import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/find",
  },

  {
    path: "/find",
    component: () => import("../views/find/find"),
  },
  {
    path: "/podcast",
    component: () => import("../views/podcast/podcast"),
  },
  {
    path: "/mine",
    component: () => import("../views/mine/mine"),
  },
  {
    path: "/ksong",
    component: () => import("../views/ksong/ksong"),
  },
  {
    path: "/cloud",
    component: () => import("../views/cloud/cloud"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
