<template>
  <div>
    <div>{{ info }}</div>
    <button @click="change">修改</button>
  </div>
</template>

<script>
import { shallowRef, triggerRef } from "vue";
export default {
  setup() {
    const info = shallowRef({ name: "jack" });
    const change = () => {
      //   此时数据不是响应式的--页面没有刷新
      info.value.name = "rose";
      console.log(info.value.name); //rose

      // 使用triggerRef()强制触发更新
      triggerRef(info);

      //   数据修改，页面刷新
      //   info.value = { name: "tom" };
    };
    return {
      info,
      change,
    };
  },
};
</script>

<style scoped></style>
