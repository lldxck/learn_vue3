<template>
  <div>
    <button @click="update">修改</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from "vue";
export default {
  setup() {
    // 普通对象
    const info1 = { name: "哈哈哈" };
    const readonlyInfo1 = readonly(info1);

    // 响应式对象-reactive
    const info2 = reactive({ name: "啦啦啦" });
    const readonlyInfo2 = readonly(info2);

    // 响应式对象-ref
    const info3 = ref("嘿嘿嘿");
    const readonlyInfo3 = readonly(info3);
    const update = () => {
      //   readonlyInfo1.name = "111";
      //   readonlyInfo2.name = "123";
      readonlyInfo3.value = "222";
    };

    return {
      update,
    };
  },
};
</script>

<style scoped></style>
