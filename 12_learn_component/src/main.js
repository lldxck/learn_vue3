import { createApp } from "vue";
// import App from './01_组件的拆分和嵌套/App.vue'
// import App from './02_父组件传递给子组件/App.vue'
// import App from './03_子组件传递给父组件/App.vue'
// import App from './04_商品页面的切换/App.vue'
// import App from "./05_provide和inject的基本使用/App.vue";
// import App from "./06_事件总线mitt的使用/App.vue";
// import App from "./07_插槽的基本使用/App.vue";
// import App from "./08_具名插槽的使用/App.vue";
// import App from "./09_作用域插槽的使用/App.vue";
import App from "./10_动态组件的使用/App.vue";
// 通过import()函数导入的模块，后续webpack对其进行打包的时候就会进行分包的操作
import("./10_动态组件的使用/utils/math").then((res) => {
  console.log(res.sum(10, 20));
});

createApp(App).mount("#app");
