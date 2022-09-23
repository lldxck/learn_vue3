<template>
  <div>
    <!-- 在template中获取全局注册的$name -->
    <div>{{ $name }}</div>
    <div>{{ $age }}</div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

export default {
  setup() {
    // 在setup中获取$name
    const instance = getCurrentInstance();
    console.log(instance.appContext.config.globalProperties.$name);
    console.log(instance.appContext.config.globalProperties.$age);
  },
  mounted() {
    // 在选项式的生命周期中获取$name
    console.log(this.$name);
    console.log(this.$age);
  },
};
</script>

<style scoped></style>
