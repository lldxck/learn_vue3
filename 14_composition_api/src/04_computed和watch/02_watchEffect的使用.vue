<template>
  <div>
    <div>{{ name }}-{{ age }}</div>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const name = ref("jack");
    const age = ref(18);

    // watchEffect默认会立即执行一次
    // 参数一：要执行的副作用函数，这个副作用函数的参数也是一个函数，用来注册清理回调
    // 返回值是一个用来停止该副作用的函数
    const stop = watchEffect((onInvalidate) => {
      // 清除副作用
      const timer = setTimeout(() => {
        console.log("请求成功～");
      }, 2000);
      onInvalidate(() => {
        clearTimeout(timer);
      });
      console.log("name", name.value, "age", age.value);
    });

    const changeName = () => (name.value = "rose");
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
