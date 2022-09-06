<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <!-- animate.css使用方式二：结合自定义过渡类 -->
    <transition
      name="demo"
      enter-active-class="animate__animated animate__backInUp"
      leave-active-class="animate__animated animate__backInUp animate_reverse"
    >
      <h2 v-if="show">hello world</h2>
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
/* animate.css使用方式一：结合name属性来使用库提供的keyframes */
/* .demo-enter-active {
  animation: backInRight 1s ease-in;
}
.demo-leave-active {
  animation: backInRight 1s ease-in reverse;
} */
.animate_reverse {
  animation-direction: reverse;
}
</style>
