<template>
  <div>
    <div>{{ message }}</div>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";
export default {
  name: "app",
  mixins: [demoMixin],
  data() {
    return {
      message: "app message",
    };
  },
  created() {
    console.log("app created");
  },
  methods: {
    foo() {
      console.log("app foo");
    },
  },
};
</script>

<style scoped></style>
