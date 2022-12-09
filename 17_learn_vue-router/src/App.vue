<template>
  <div id="app">
    <!-- <h2>我是app组件</h2> -->
    <!--
      1.to 要跳转的目标路由 string/object
      2.replace 设置replace的话，当点击，会调用router.replace()，导航不会留下历史记录
      3.active-class 链接激活时，应用于<a></a>渲染的class
      4.exact-active-class 链接精准激活时，应用于<a></a>渲染的class
    -->
    <!-- <router-link to="/home" active-class="active-code">
      <strong>首页</strong>
    </router-link> -->
    <!-- 
      custom：改变默认的a标签，自定义包裹标签
      href：解析后的URL；
      route：解析后的规范化的route对象；
      navigate：触发导航的函数；
      isActive：是否匹配的状态；
      isExactActive：是否是精准匹配的状态；
     -->
    <router-link
      to="/home"
      custom=""
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <button @click="navigate">首页</button>
      <div>{{ href }}</div>
      <div>{{ route }}</div>
      <div :class="{ active: isActive }">{{ isActive }}</div>
      <div :class="{ active: isActive }">{{ isExactActive }}</div>
    </router-link>
    <router-link :to="{ path: '/about' }" active-class="active-code"
      >关于</router-link
    >
    <router-link :to="{ path: '/category' }" active-class="active-code"
      >分类</router-link
    >
    <router-link
      :to="{ path: '/user/tom/id/111' }"
      replace
      active-class="active-code"
      >用户</router-link
    >
    <button type="primary" @click="jumpToAbout">关于</button>

    <button type="primary" @click="forwardStep">前进</button>
    <button type="primary" @click="backStep">后退</button>

    <router-view v-slot="{ Component }">
      <transition name="demo">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const jumpToAbout = () => {
  // router.push("/about");
  // router.push({
  //   path: "/about",
  //   query: {
  //     name: "章三",
  //     age: 18,
  //   },
  // });
  router.replace("/about");
};
const forwardStep = () => {
  // 前进一步
  // router.go(1);
  // 前进三步
  // router.go(3)
  // 后退一步
  // router.go(-1);
  // 后退三步
  // router.go(-3);
  // 前进一步，相当于go(1)
  router.forward();
};
const backStep = () => {
  // 返回上一步，相当于go(-1)
  router.back();
};
</script>
<style scoped>
.active-code {
  color: green;
}
.active {
  color: red;
}

.demo-enter-from,
.demo-leave-to {
  opacity: 0;
}
.demo-enter-active,
.demo-leave-active {
  transition: opacity 1s ease;
}
</style>
