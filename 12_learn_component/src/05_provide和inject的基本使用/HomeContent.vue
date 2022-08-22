<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <div>{{ length.value }}</div>
  </div>
</template>

<script>
export default {
  inject: ["name", "age", "length"],
};
</script>

<style scoped></style>
