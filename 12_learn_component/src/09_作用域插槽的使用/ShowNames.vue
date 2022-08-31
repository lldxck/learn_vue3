<template>
  <div v-for="(item, index) in names" :key="item">
    <slot :item="item" :index="index" name="default"> </slot>
    <slot name="lll" :index="index"></slot>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped></style>
