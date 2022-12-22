<template>
  <div>
    <div>登录页面</div>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const login = () => {
  localStorage.setItem("token", "123");
  router.push({ path: "/home" });
};
</script>

<style lang="scss" scoped></style>
