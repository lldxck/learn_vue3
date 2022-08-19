<template>
  <div>
    <show-message
      id="abc"
      class="why"
      title="呵呵呵"
      content="我是呵呵呵"
    ></show-message>
    <show-message title="哈哈哈" content="我是哈哈哈"></show-message>
    <!-- 动态绑定数据 -->
    <show-message :title="title" :content="content"></show-message>
    <!-- 绑定对象 -->
    <show-message
      :title="message.title"
      :content="message.content"
    ></show-message>
    <show-message v-bind="message"></show-message>
    <show-message title="哈哈哈" default-content="我是哈哈哈"></show-message>
    <!-- 多根节点 -->
    <multi-root-element id="aaa"></multi-root-element>
  </div>
</template>

<script>
import ShowMessage from "./showMessage.vue";
import MultiRootElement from "./MultiRootElement.vue";
export default {
  data() {
    return {
      title: "啦啦啦",
      content: "我是啦啦啦",
      message: {
        title: "嘻嘻嘻",
        content: "我是嘻嘻嘻",
      },
    };
  },
  components: {
    ShowMessage,
    MultiRootElement,
  },
};
</script>

<style scoped></style>
