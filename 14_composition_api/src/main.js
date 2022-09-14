import { createApp } from "vue";
// import App from "./01_mixin和extends/01_mixin的基本使用.vue";
// import App from "./01_mixin和extends/02_extends的基本使用.vue";
// import App from "./02_compositionAPI基础/App.vue";
// import App from "./03_refAPI的补充/01_toRefs和toRef的使用.vue";
// import App from "./03_refAPI的补充/02_shallowRef和triggerRef的使用.vue";
import App from "./03_refAPI的补充/03_customRef的使用.vue";

const app = createApp(App);
// //  全局混入
// app.mixin({
//   data() {
//     return {};
//   },
//   created() {
//     console.log("全局mixin的created");
//   },
//   methods: {
//     bar() {
//       console.log("全局mixin的bar");
//     },
//   },
// });
app.mount("#app");
