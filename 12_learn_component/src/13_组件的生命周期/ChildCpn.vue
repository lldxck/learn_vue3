<template>
  <div>我是子组件</div>
  <div>{{ title }}</div>
  <button @click="update">修改</button>
</template>

<script>
export default {
  emits: ["update"],
  props: {
    title: String,
  },
  beforeCreate() {
    console.log("childCpn beforeCreate");
  },
  created() {
    console.log("childCpn created");
  },
  beforeMount() {
    console.log("childCpn beforeMount");
  },
  mounted() {
    console.log("childCpn mounted");
  },
  beforeUnmount() {
    console.log("childCpn beforeUnmount");
  },
  unmounted() {
    console.log("childCpn unmounted");
  },
  beforeUpdate() {
    console.log("childCpn beforeUpdate");
  },
  updated() {
    console.log("childCpn updated");
  },
  methods: {
    update() {
      this.$emit("update", "啦啦啦");
    },
  },
};
</script>

<style scoped></style>
