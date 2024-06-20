<script setup lang="ts"></script>
<template>
  <div class="q-pa-md">
    <q-bar class="bar">
      <router-link to="/" class="routes"> Home</router-link>
      <router-link to="/tech" class="routes"> Technical Interview</router-link>
    </q-bar>
  </div>
</template>
<style scope>
.bar {
  gap: 20px;
}
.routes {
  cursor: pointer;
  text-decoration: none;
  color: #f0f0f0;
}
.routes:hover {
  text-shadow: 0 0 5px #f0f0f0, 0 0 10px #f0f0f0, 0 0 15px #f0f0f0;
}
.router-link-exact-active {
  text-shadow: 0 0 5px #f0f0f0, 0 0 10px #f0f0f0, 0 0 15px #f0f0f0;
}
</style>
