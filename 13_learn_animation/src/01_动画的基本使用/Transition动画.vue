<template>
  <div>
    <button @click="btnClick">显示/隐藏</button>
    <transition name="demo">
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
  methods: {
    btnClick() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
/* 进入动画的起始状态 */
.demo-enter-from,
/* 离开动画的结束状态*/
.demo-leave-to {
  opacity: 0;
}
/* 进入动画结束状态 */
.demo-enter-to,
/* 离开动画的起始状态 */
.demo-leave-from {
  opacity: 1;
}
/* 进入动画的生效状态 这个class用来被定义进入动画的持续时间，延迟与速度曲线类型 */
.demo-enter-active,
/* 离开动画的生效状态 这个class用来被定义离开动画的持续时间，延迟与速度曲线类型 */
.demo-leave-active {
  transition: opacity 1s ease;
}
</style>
