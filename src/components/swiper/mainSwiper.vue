<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      thumbnails
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="prod in props.products"
        :name="prod.title"
        :img-src="prod.images[0]"
        class="image-contain"
      />
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Second stop</div>
        <div class="text-subtitle1">Famous City</div>
      </div>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
const props = defineProps({
  products: Array,
});

const slide: Ref<number> = ref(1);
const autoplay: Ref<boolean> = ref(true);
</script>
<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

.no-wrap {
  width: 50dvh;
  height: 50dvh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-contain {
  object-fit: contain;
  width: 100%;
  height: 100%;
  object-position: center;
}
</style>
