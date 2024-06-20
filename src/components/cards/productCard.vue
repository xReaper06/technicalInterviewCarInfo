<template>
  <q-card class="my-card" v-for="prod in props.products" :key="products.id">
    <q-img :src="prod.thumbnail">
      <div class="absolute-bottom text-h6">
        {{ prod.title }}
      </div>
    </q-img>

    <q-card-section class="truncate">
      {{ prod.description }}
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
const props = defineProps({
  products: Array,
});
</script>

<style scoped>
.truncate {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
}
.my-card {
  cursor: pointer;
}
.my-card:is(:hover) {
  box-shadow: 0 0 5px #f0f0f0, 0 0 10px #f0f0f0, 0 0 15px #f0f0f0;
  scale: 0.8;
}
</style>
