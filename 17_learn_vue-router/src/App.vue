<template>
  <div id="app">
    <!-- <h2>我是app组件</h2> -->
    <!--
      1.to 要跳转的目标路由 string/object
      2.replace 设置replace的话，当点击，会调用router.replace()，导航不会留下历史记录
      3.active-class 链接激活时，应用于<a></a>渲染的class
      4.exact-active-class 链接精准激活时，应用于<a></a>渲染的class
    -->
    <router-link to="/home" replace active-class="active-code"
      >首页</router-link
    >
    <router-link :to="{ path: '/about' }" replace active-class="active-code"
      >关于</router-link
    >
    <router-link :to="{ path: '/user/tom/id/111' }" replace active-class="active-code"
      >用户</router-link
    >
    <router-view />
  </div>
</template>

<script setup></script>
<style scoped>
.active-code {
  color: green;
}
</style>
