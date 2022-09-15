<template>
  <div>
    <div>{{ info.name }}-{{ info.age }}</div>
    <button @click="change">修改</button>
  </div>
</template>
<script>
import { reactive, ref, watch } from "vue";
export default {
  setup() {
    const info = reactive({ name: "jack", age: 18 });
    const name = ref("tom");

    // 1.侦听数据时，传入一个getter函数
    // watch(
    //   () => info.name,
    //   (newValue, oldValue) => {
    //     console.log("newValue", newValue, "oldValue", oldValue);
    //   }
    // );

    // 2.传入一个可响应式对象：reactive对象/ref对象
    // 2.1传入reactive对象，newValue和oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue", newValue, "oldValue", oldValue);
    // });
    // 如果希望newValue和oldValue是一个普通对象
    // watch(
    //   () => ({ ...info }),
    //   (newValue, oldValue) => {
    //     console.log("newValue", newValue, "oldValue", oldValue);
    //   }
    // );
    // 2.2传入ref对象，newValue和oldValue本身是value的值
    watch(name, (newValue, oldValue) => {
      console.log("newValue", newValue, "oldValue", oldValue);
    });

    const change = () => {
      info.name = "rose";
      name.value = "rose";
    };
    return {
      info,
      change,
    };
  },
};
</script>
<style scoped></style>
