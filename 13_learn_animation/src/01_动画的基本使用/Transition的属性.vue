<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <!-- <transition name="demo" type="transition" :duration="1000"> -->
    <transition
      name="demo"
      type="transition"
      :duration="{ enter: 800, leave: 1000 }"
      appear
    >
      <h2 v-if="show">hello world</h2>
      <h2 v-else>啦啦啦</h2>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped>
.demo-enter-from,
.demo-leave-to {
  opacity: 0;
}
.demo-entre-to,
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
