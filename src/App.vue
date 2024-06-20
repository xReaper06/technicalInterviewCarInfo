<script setup lang="ts">
import mainNav from "./components/navigations/mainNav.vue";
</script>

<template>
  <mainNav />
  <RouterView />
</template>

<style scoped>
body {
  width: 100%;
  height: 100%;
}
</style>
