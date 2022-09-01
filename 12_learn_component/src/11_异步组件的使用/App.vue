<template>
  <div>
    <home></home>
    <Suspense>
      <template #default>
        <async-cpn></async-cpn>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Home from "./Home.vue";
import Loading from "./Loading.vue";
import Error from "./Error.vue";
// const AsyncCpn = defineAsyncComponent(() => import("./AsyncCpn.vue"));
const AsyncCpn = defineAsyncComponent({
  // 加载函数
  loader: () => import("./AsyncCpn.vue"),
  //   加载异步组件时使用的组件
  loadingComponent: Loading,
  //   展示加载组件前的延迟时间,默认200ms
  delay: 200,
  //   加载失败后展示的组件
  errorComponent: Error,
  // timeout超时时间，如果超时会显示配置的错误组件，默认是Infinity
  timeout: 3000,
});
export default {
  name: "app",
  components: {
    Home,
    AsyncCpn,
    Loading,
  },
};
</script>

<style scoped></style>
