<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <transition name="demo">
      <h2 v-if="show">hello transitionAndAnimation</h2>
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
