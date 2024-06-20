<script setup lang="ts">
import productTables from "@/components/tables/productTables.vue";
import { useProductStore } from "../stores/productStore";
import { onMounted } from "vue";

let productStore = useProductStore();

onMounted(async () => {
  if (productStore.newDataProducts.length < 1) {
    await productStore.getSpecificDataInProducts(); // Await getProducts to ensure it completes
  }
});
</script>
<template>
  <div class="text-center">
    <h1>Products Table</h1>
  </div>
  <productTables />
</template>

<style scoped>
.text-center {
  text-align: center;
}
</style>
