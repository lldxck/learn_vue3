<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{ active: currentIndex == index }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["itemClick"],
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  align-items: center;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item.active {
  color: red;
}
.tab-control-item.active span {
  padding: 5px;
  border-bottom: 3px solid red;
}
</style>
