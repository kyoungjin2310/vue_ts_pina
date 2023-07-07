<script setup lang="ts">
import { useProductStore } from "@/store/index";
const productStore = useProductStore();
productStore.fill();
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, idx) in productStore.productList" :key="idx">
        {{ item.name }}:{{ item.price }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
