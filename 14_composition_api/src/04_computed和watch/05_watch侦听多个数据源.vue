<template>
  <div>
    <div>{{ info.name }}</div>
    <button @click="change">修改</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  setup() {
    // 定义响应式对象
    const info = reactive({ name: "jack", age: 18 });
    const name = ref("tom");

    // watch([info, name], (newValue, oldValue) => {
    //   console.log("newValue", newValue, "oldValue", oldValue);
    // });
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      }
    );

    const change = () => {
      info.name = "rose";
    };

    return {
      info,
      change,
    };
  },
};
</script>

<style scoped></style>
