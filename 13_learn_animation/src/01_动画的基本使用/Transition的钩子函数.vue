<template>
  <button @click="show = !show">显示/隐藏</button>
  <transition
    name="demo"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @enter-cancelled="onEnterCancelled"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
    @leave-cancelled="onLeaveCancelled"
    :css="false"
    ><h2 v-if="show">hello world</h2></transition
  >
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    // 在元素被插入到 DOM 之前被调用--用这个来设置元素的 "enter-from" 状态
    onBeforeEnter(el) {
      console.log("onBeforeEnter");
    },
    // 在元素被插入到 DOM 之后的下一帧被调用--用这个来开始进入动画
    onEnter(el, done) {
      console.log("onEnter");
      // 调用回调函数 done 表示过渡结束--如果与 CSS 结合使用，则这个回调是可选参数
      done();
    },
    // 当进入过渡完成时调用
    onAfterEnter(el) {
      console.log("onAfterEnter");
    },
    onEnterCancelled(el) {
      console.log("onEnterCancelled");
    },
    // 在 leave 钩子之前调用--大多数时候，你应该只会用到 leave 钩子
    onBeforeLeave(el) {
      console.log("onBeforeLeave");
    },
    // 在离开过渡开始时调用--用这个来开始离开动画
    onLeave(el, done) {
      console.log("onLeave");
      // 调用回调函数 done 表示过渡结束--如果与 CSS 结合使用，则这个回调是可选参数
      done();
    },
    // 在离开过渡完成--且元素已从 DOM 中移除时调用
    onAfterLeave(el) {
      console.log("onAfterLeave");
    },
    // 仅在 v-show 过渡中可用
    onLeaveCancelled(el) {
      console.log("onLeaveCancelled");
    },
  },
};
</script>

<style scoped>
.demo-enter-from,
.demo-leave-to {
  opacity: 0;
}

.demo-enter-to,
.dmo-leave-from {
  opacity: 1;
}
.demo-enter-active,
.demo-leave-active {
  transition: opacity 1s ease-in;
}
</style>
