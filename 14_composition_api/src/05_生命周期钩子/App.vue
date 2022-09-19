<template>
  <div>
    <button @click="toggle">切换</button>
    <child-cpn v-if="show" message="hello"></child-cpn>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import ChildCpn from "./ChildCpn.vue";

export default {
  components: {
    ChildCpn,
  },
  setup() {
    onMounted(() => {
      console.log("App onMounted", onMounted);
    });

    onUnmounted(() => {
      console.log("App onUnMounted", onUnMounted);
    });
    const show = ref(true);

    const toggle = () => {
      show.value = !show.value;
    };

    return {
      show,
      toggle,
    };
  },
};
</script>

<style scoped></style>
