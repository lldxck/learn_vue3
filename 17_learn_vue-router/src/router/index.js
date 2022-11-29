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
    // 路由懒加载
    component: () =>
      import(/* webpackChunkName:'home-chunk'*/ "../pages/Home.vue"),
    // meta 路由元信息
    meta: {
      name: "jack",
      age: 18,
      height: 1.88,
    },
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

export default router;
