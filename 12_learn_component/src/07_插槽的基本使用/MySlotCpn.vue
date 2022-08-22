<template>
  <div>
    <div>MySlotCpn组件</div>
    <slot>
      <!-- 设置默认的插槽内容，当没有插入对应的内容时，会显示默认的内容-->
      <span>我是默认的slot内容</span>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
