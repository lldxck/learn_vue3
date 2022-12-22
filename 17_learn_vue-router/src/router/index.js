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
  {
    path: "/login",
    component: () => import("../pages/Login.vue"),
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

/**
 * 路由前置守卫
 * 参数：
 * to:即将要进入的目标 Route对象
 * from:当前导航正要离开的路由 Route对象
 *
 * 返回值：
 * false:不进行导航
 * undefined、true或者不写返回值：进行默认导航
 * 字符串路由地址，或者路由对象：跳转到对应的路径中
 *
 */
router.beforeEach((to, form) => {
  const token = localStorage.getItem("token");
  if (to.path.indexOf("/home") !== -1 && !token) {
    return "/login";
  }
});

export default router;
