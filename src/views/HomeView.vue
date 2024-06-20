<script setup lang="ts">
import mainSwiper from "../components/swiper/mainSwiper.vue";
import { ref, type Ref, onMounted, watch } from "vue";
import { useProductStore } from "../stores/productStore";
import productCard from "../components/cards/productCard.vue";

const productStore = useProductStore();

type tReviews = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type tProducts = {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stocks: number;
  tags: Array<string>;
  brand: string;
  sku: string;
  weight: number;
  dimensions: Object;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<tReviews>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Object;
  images: Array<string>;
  thumbnail: string;
};

const productsData: Ref<tProducts[]> = ref([]); // Correct type

onMounted(async () => {
  if (productStore.products.length < 1) {
    await productStore.getProducts(); // Await getProducts to ensure it completes
  }
  console.log("Products after fetching:", productStore.products); // Debug log to check products value
  productsData.value = productStore.products; // Assign products to productsData after fetching
  console.log("ProductsData assigned:", productsData.value); // Log to check the assigned value
});
</script>

<template>
  <mainSwiper :products="productsData" />
  <div class="text-center"><h2>Products</h2></div>
  <main><productCard :products="productsData" /></main>
</template>
<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(5, 0.37fr);
  gap: 20px;
}
</style>
