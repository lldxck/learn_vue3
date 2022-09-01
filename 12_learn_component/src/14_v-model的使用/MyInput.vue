<template>
  <div>
    <!-- 方式一 -->
    <input type="text" :value="modelValue" @input="inputChange($event)" />
    <!-- 方式二 -->
    <input type="text" v-model="value" />
    <input type="text" v-model="titleValue" />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue", "update:title"],
  props: {
    modelValue: String,
    title: String,
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    titleValue: {
      get() {
        return this.title;
      },
      set(value) {
        this.$emit("update:title", value);
      },
    },
  },
  methods: {
    inputChange(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
