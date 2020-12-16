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
        children: [{
                path: "search",
                component: () =>
                    import ("../views/find/search/search"),
            },
            {
                path: "dayday",
                component: () =>
                    import ("../views/find/dayday/dayday"),
            },
            {
                path: "sirenfm",
                component: () =>
                    import ("../views/find/sirenfm/sirenfm"),
            },
            {
                path: "songlist",
                component: () =>
                    import ("../views/find/songlist/songlist"),
            },
            {
                path: "ranking",
                component: () =>
                    import ("../views/find/ranking/ranking"),
            },
            {
                path: "figure",
                component: () =>
                    import ("../views/find/figure/figure"),
            },
            {
                path: "choir",
                component: () =>
                    import ("../views/find/choir/choir"),
            },
            {
                path: "game",
                component: () =>
                    import ("../views/find/game/game"),
            },
        ],
    },
    // ----------------------^^find路由^^---------------------------------------


    {
        path: "/podcast",
        component: () =>
            import ("../views/podcast/podcast"),
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
            import ("../views/cloud/index.vue"),
        children: [{
                path: "/cloud/guanzhu",
                component: () =>
                    import ("../views/cloud/children/guanzhu/index.vue"),
            },
            {
                path: "/cloud/tuijian",
                component: () =>
                    import ("../views/cloud/children/tuijain/index.vue"),
                children: [{
                        path: "/cloud/tuijian/shipin",
                        component: () =>
                            import ("../views/cloud/children/tuijain/children/shipin.vue"),
                    },
                    {
                        path: "/cloud/tuijian/yanchang",
                        component: () =>
                            import ("../views/cloud/children/tuijain/children/yanchang.vue"),
                    },
                    {
                        path: "/cloud/tuijian/anli",
                        component: () =>
                            import ("../views/cloud/children/tuijain/children/anli.vue"),
                    },
                    {
                        path: "/cloud/tuijian/yanzou",
                        component: () =>
                            import ("../views/cloud/children/tuijain/children/yanzou.vue"),
                    },
                    {
                        path: "/cloud/tuijian/mv",
                        component: () =>
                            import ("../views/cloud/children/tuijain/children/mv.vue"),
                    },
                    {
                        path: "/cloud/tuijian/shenghuo",
                        component: () =>
                            import ("../views/cloud/children/tuijain/children/shenghuo.vue"),
                    },
                    {
                        path: "/cloud/tuijian/wudao",
                        component: () =>
                            import ("../views/cloud/children/tuijain/children/wudao.vue"),
                    },
                    {
                        path: "/cloud/tuijian/hunjian",
                        component: () =>
                            import ("../views/cloud/children/tuijain/children/hunjian.vue"),
                    },
                ],
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