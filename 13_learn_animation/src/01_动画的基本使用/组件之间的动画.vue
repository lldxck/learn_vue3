<template>
  <button @click="show = !show">切换</button>
  <transition name="demo" mode="out-in" appear>
    <component :is="show ? 'home' : 'about'"></component>
  </transition>
</template>
<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
export default {
  data() {
    return {
      show: true,
    };
  },
  components: {
    Home,
    About,
  },
};
</script>
<style scoped>
.demo-enter-from,
.demo-leave-to {
  opacity: 0;
}
.demo-enter-to,
.demo-leave-from {
  opacity: 1;
}
.demo-enter-active,
.demo-leave-active {
  transition: opacity 1s ease;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.demo-enter-active {
  animation: bounce 1s ease;
}
.demo-leave-active {
  animation: bounce 1s ease reverse;
}
</style>
