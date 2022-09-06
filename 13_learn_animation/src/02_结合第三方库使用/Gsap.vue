<template>
  <div>
    <button @click="show = !show">显式/隐藏</button>
    <transition name="demo" @enter="onEnter" @leave="onLeave">
      <h2 v-if="show">hello world</h2>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    onEnter(el, done) {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        duration: 1,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        y: 100,
        duration: 1,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped></style>
