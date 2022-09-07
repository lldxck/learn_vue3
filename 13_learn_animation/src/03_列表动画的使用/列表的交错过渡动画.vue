<template>
  <input type="text" v-model="keyWord" />
  <transition-group
    tag="ul"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <li v-for="(item, index) in showList" :key="item" :data-index="index">
      {{ item }}
    </li>
  </transition-group>
</template>
<script>
import gsap from "gsap";
export default {
  data() {
    return {
      keyWord: "",
      list: ["abc", "cda", "aef", "fsw", "asc", "ced", "wsc", "aed", "sxz"],
    };
  },
  computed: {
    showList() {
      return this.list.filter((item) => item.indexOf(this.keyWord) !== -1);
    },
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        // 设置延迟
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
  },
};
</script>
<style scoped></style>
