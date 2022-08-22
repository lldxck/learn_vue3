<template>
  <div>
    <nav-bar>
      <!--动态插槽名 -->
      <!-- <template v-slot:[name]>
        <div>左边</div>
      </template>
      <template v-slot:center>
        <div>中间</div>
      </template>
      <template v-slot:right>
        <div>右边</div>
      </template> -->
      <!-- 简写 -->
      <!-- 动态插槽名 -->
      <template #[name]>
        <div>左边</div>
      </template>
      <template #center>
        <div>中间</div>
      </template>
      <template #right>
        <div>右边</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  data() {
    return {
      name: "left",
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
