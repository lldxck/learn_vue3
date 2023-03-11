<template>
  <div>Getters: {{ $store.getters.totalPrice }}</div>
  <div>Getters:{{ $store.getters.totalPriceCountGreaterN(3) }}</div>
  <div>{{ $store.getters.nameInfo }}</div>
  <div>{{ $store.getters.ageInfo }}</div>
  <div>{{ $store.getters.heightInfo }}</div>
  <hr />
  <div>{{ nameInfo }}</div>
  <div>{{ ageInfo }}</div>
  <div>{{ heightInfo }}</div>
  <hr />
  <div>{{ storeGettersObj.sNameInfo }}</div>
  <div>{{ storeGettersObj.sAgeInfo }}</div>

  <div>{{ storeGetters.nameInfo }}</div>
  <div>{{ storeGetters.ageInfo }}</div>
  <div>{{ storeGetters.heightInfo }}</div>
</template>

<!-- <script>
import { mapGetters } from "vuex";

export default {
  name: "getters",
  computed: {
    ...mapGetters(["nameInfo", "ageInfo", "heightInfo"]),
    ...mapGetters({
      sNameInfo: "nameInfo",
      sAgeInfo: "ageInfo",
    }),
  },
};
</script> -->

<script setup name="getters">
import { computed } from "vue";
import { useStore } from "vuex";
import { useGetters } from "../hooks/useGetters";

const store = useStore();
const nameInfo = computed(() => store.getters.nameInfo);
const ageInfo = computed(() => store.getters.ageInfo);
const heightInfo = computed(() => store.getters.heightInfo);

const storeGetters = useGetters(["nameInfo", "ageInfo", "heightInfo"]);
const storeGettersObj = useGetters({
    sNameInfo:'nameInfo',
    sAgeInfo:'ageInfo'
});
</script>
