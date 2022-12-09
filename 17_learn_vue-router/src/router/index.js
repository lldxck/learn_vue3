import { createRouter, createWebHistory } from "vue-router";

// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";

// 配置路由映射关系
const routes = [
  // 配置路由重定向
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    // 路由懒加载
    component: () =>
      import(/* webpackChunkName:'home-chunk'*/ "../pages/Home.vue"),
    // meta 路由元信息
    meta: {
      name: "jack",
      age: 18,
      height: 1.88,
    },
    children: [
      {
        path: "",
        redirect: "/home/message",
      },
      {
        path: "message",
        component: () => import("../pages/HomeMessage.vue"),
      },
      {
        path: "shops",
        component: () => import("../pages/HomeShops.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: () =>
      import(/* webpackChunkName:'about-chunk'*/ "../pages/About.vue"),
  },
  // 动态路由匹配
  {
    path: "/user/:userName/id/:id",
    component: () => import("../pages/User.vue"),
  },
  // 捕获所有路由或404 Not Found路由
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/NotFound.vue"),
  },
];

// 创建一个路由对象
/**
 * createWebHistory：history模式
 * createWebHashHistory：hash模式
 */
const router = createRouter({
  routes,
  history: createWebHistory(),
});

// 动态添加路由
router.addRoute({
  path: "/category",
  name: "category",
  component: () => import("../pages/Category.vue"),
});
// 添加动态路由-二级路由
const homeRouter = router.addRoute("home", {
  path: "moment",
  component: () => import("../pages/HomeMoment.vue"),
});

// 删除路由
// removeRoute传入名称删除
router.removeRoute("category");
// 使用addRoute的返回值
homeRouter();

export default router;
