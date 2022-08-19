<template>
  <div>
    <tab-control :titles="titles" @itemClick="tabItemClick"></tab-control>
    <div>{{showContent[currentIndex]}}</div>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue";
export default {
  data() {
    return {
      titles: ["上衣", "裤子", "鞋子"],
      currentIndex:0,
      showContent:['上衣页面','裤子页面','鞋子页面']
    };
  },
  methods:{
    tabItemClick(index){
        this.currentIndex=index
    }
  },
  components: {
    TabControl,
  },
};
</script>

<style scoped></style>
