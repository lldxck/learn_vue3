<template>
  <div>
    <span
      v-for="(item, index) in pages"
      :key="item"
      :class="{ active: currentTab == item }"
      @click="itemClick(item)"
    >
      {{ item }}
    </span>
    <keep-alive include="home,about" :max="2">
      <component
        :is="currentTab"
        name="jack"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Category from "./pages/Category.vue";
export default {
  name: "app",
  data() {
    return {
      pages: ["Home", "About", "Category"],
      currentTab: "Home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    pageClick() {
      console.log("pageClick被点击了");
    },
  },
  components: {
    Home,
    About,
    Category,
  },
};
</script>

<style scoped>
span {
  padding: 0 10px;
}
.active {
  color: red;
}
</style>
