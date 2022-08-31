<template>
  <div>
    <show-names :names="names">
      <template v-slot:default="slotProps">
        <span>{{ slotProps.item }}-{{ slotProps.index }}</span></template
      >
      <template v-slot:lll="slotProps">
        <button>{{ slotProps.index }}</button>
      </template>
    </show-names>
    <!-- 独占默认插槽 -->
    <!-- <show-names :names="names" v-slot="slotProps">
      <button>{{ slotProps.item }}</button>
    </show-names> -->
  </div>
</template>

<script>
import ShowNames from "./ShowNames.vue";
export default {
  data() {
    return {
      names: ["jack", "rose", "tom"],
    };
  },
  components: {
    ShowNames,
  },
};
</script>

<style scoped></style>
