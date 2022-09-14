<template>
  <div>
    <input type="text" v-model="text" />
    <div>{{ text }}</div>
  </div>
</template>

<script>
import useDebounceRef from "./hooks/useDebounce";
export default {
  setup() {
    let text = useDebounceRef("hello");
    return {
      text,
    };
  },
};
</script>

<style scoped></style>
