import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/find",
    },

    {
        path: "/find",
        component: () =>
            import ("../views/find/find"),
    },
    {
        path: "/podcast",
        redirect: "/podcast/recommend",
        component: () =>
            import ("../views/podcast/podcast"),
        children: [{
                path: "listen",
                component: () =>
                    import ("../views/podcast/children/listen.vue"),
            },
            {
                path: "recommend",
                component: () =>
                    import ("../views/podcast/children/recommend.vue"),
            },
            {
                path: "classify",
                component: () =>
                    import ("../views/podcast/children/classify.vue"),
            },
        ],
    },
    {
        path: "/mine",
        component: () =>
            import ("../views/mine/mine"),
    },
    {
        path: "/ksong",
        component: () =>
            import ("../views/ksong/ksong"),
    },
    {
        path: "/cloud",
        component: () =>
            import ("../views/cloud/cloud"),
        children: [{
                path: "guanzhu",
                component: () =>
                    import ("../views/cloud/children/guanzhu.vue"),
            },
            {
                path: "tuijian",
                component: () =>
                    import ("../views/cloud/children/tuijian.vue"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;