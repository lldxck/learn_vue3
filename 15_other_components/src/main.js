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
// import App from "./04_teleport内置组件/01_teleport的基本使用.vue";
import App from "./05_插件/App.vue";
// 自定义指令
import registerDirectives from "./03_自定义指令/directives";
// 插件
import pluginObject from "./05_插件/plugins/plugin_object";
import pluginFunction from "./05_插件/plugins/plugin_function";

const app = createApp(App);

registerDirectives(app);

// // 全局自定义指令
// app.directive("focus", {
//   mounted(el, bindings, vnode, preVnode) {
//     el.focus();
//   },
// });

app.use(pluginObject);
app.use(pluginFunction);

app.mount("#app");
