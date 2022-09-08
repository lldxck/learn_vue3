<template>
  <div>
    <div>{{ title }}</div>
    <div>当前计数：{{ counter }}</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 此时数据不是响应式的
    let counter = 100;
    const increment = () => {
      counter++;
      console.log(counter);
    };
    return {
      title: "hello world",
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
