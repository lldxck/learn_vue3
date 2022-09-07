<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      message: "base message",
    };
  },
  created() {
    console.log("base created");
  },
  methods: {
    foo() {
      console.log("base foo");
    },
  },
};
</script>

<style scoped></style>
