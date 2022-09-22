import { createApp } from "vue";
// import App from "./01_render函数的使用/01_render函数的基本使用.vue";
// import App from "./01_render函数的使用/02_render函数实现计数器.vue";
// import App from "./01_render函数的使用/03_setup函数实现计数器.vue";
// import App from "./01_render函数的使用/04_函数组件以及插槽的使用.vue";
// import App from "./02_jsx的使用/01_jsx实现计数器.vue";
// import App from "./02_jsx的使用/02_组件以及插槽的使用.vue";
// import App from "./03_自定义指令/01_默认实现.vue";
// import App from "./03_自定义指令/02_局部自定义指令.vue";
// import App from "./03_自定义指令/03_自定义指令的生命周期.vue";
// import App from "./03_自定义指令/04_自定义指令的练习.vue";
import App from "./04_teleport内置组件/01_teleport的基本使用.vue";

import registerDirectives from "./03_自定义指令/directives";

const app = createApp(App);

registerDirectives(app);

// // 全局自定义指令
// app.directive("focus", {
//   mounted(el, bindings, vnode, preVnode) {
//     el.focus();
//   },
// });

app.mount("#app");
