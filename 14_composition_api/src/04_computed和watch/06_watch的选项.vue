<template>
  <div>
    <div>{{ info.friend.name }}</div>
    <button @click="change">修改</button>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  setup() {
    const info = reactive({ name: "jack", age: 18, friend: { name: "tom" } });

    //
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      {
        // 如果源是对象，强制深度遍历，以便在深层级变更时触发回调
        deep: true,
        // 在侦听器创建时立即触发回调。第一次调用时旧值undefined
        immediate: true,
      }
    );

    const change = () => {
      info.friend.name = "rose";
    };

    return {
      info,
      change,
    };
  },
};
</script>

<style scoped></style>
