<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <transition name="demo">
      <h2 v-if="show">hello animation</h2>
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
  animation: bounce 1s;
}
.demo-leave-active {
  animation: bounce 1s reverse;
}
</style>
