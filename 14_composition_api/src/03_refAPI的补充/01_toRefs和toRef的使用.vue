<template>
  <div>
    <!-- <div>{{ info.name }}-{{ info.age }}</div> -->
    <div>{{ name }}-{{ age }}</div>
    <button @click="change">修改age</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";
export default {
  setup() {
    const info = reactive({
      name: "jack",
      age: 18,
    });
    // name 和 age 不再是响应式数据
    // let { name, age } = info;

    // 使用toRefs()使数据变成响应式的
    // let { name, age } = toRefs(info);

    // 当我们只需要部分响应式时，可以使用toRef()
    let { name } = info;
    let age = toRef(info, "age");

    const change = () => {
      age.value++;
      console.log(age.value);
    };
    return {
      //   info,
      name,
      age,
      change,
    };
  },
};
</script>

<style scoped></style>
