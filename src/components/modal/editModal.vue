<template>
  <div>
    <q-input
      v-model="formdata.sku"
      dense
      outlined
      class="q-mb-sm"
      label="SKU"
    ></q-input>
    <q-input
      v-model="formdata.title"
      dense
      outlined
      class="q-mb-sm"
      label="Title"
    ></q-input>
    <q-input
      v-model="formdata.description"
      dense
      outlined
      class="q-mb-sm"
      label="Description"
      type="textarea"
      autogrow
    ></q-input>
    <q-input
      v-model="formdata.category"
      dense
      outlined
      class="q-mb-sm"
      label="Category"
    ></q-input>
    <q-input
      v-model="formdata.price"
      dense
      outlined
      class="q-mb-sm"
      label="Price"
      type="number"
    ></q-input>
  </div>
</template>

<script setup lang="ts">
defineProps({
  formdata: Object,
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
