<script lang="ts" setup>
// import { ref } from "vue";
// import type { Ref } from "vue";
import { useCountStore } from "@/store/index";
const storeCounter = useCountStore();
// const counter: Ref<string | number> = ref(0);
const add = () => {
  storeCounter.increaseCount();
};

const minus = () => {
  storeCounter.decreaseCount();
};
</script>

<template>
  <div>
    {{ storeCounter.counter }}
  </div>
  <div>
    {{ storeCounter.doubleCount }}
  </div>
  <div>
    <button @click.prevent="add">add</button>
    <button @click.prevent="minus">minus</button>
  </div>
</template>
