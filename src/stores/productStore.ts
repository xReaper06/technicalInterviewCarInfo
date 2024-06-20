import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { getAllProducts } from '../service/api';

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
  description: string;
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

type newTDataProduct = {
  id: number;
  sku: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
};

export const useProductStore = defineStore('products', () => {
  const products: Ref<tProducts[]> = ref([]);
  const newDataProducts: Ref<newTDataProduct[]> = ref([]);

  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      if (response) {
        products.value = response.data.products;
        console.log("Products fetched:", products.value); // Debug log to check fetched data
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getSpecificDataInProducts = async () => {
    try {
      const response = await getAllProducts();
      if (response) {
        products.value = response.data.products;
        const extractedData = products.value.map((prod) => ({
          id: prod.id,
          sku: prod.sku,
          title: prod.title,
          description: prod.description,
          category: prod.category,
          price: prod.price,
          rating: prod.rating
        }));
        newDataProducts.value = extractedData;
        console.log("New data products:", newDataProducts.value); // Debug log to check extracted data
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return {
    products,
    getProducts,
    newDataProducts,
    getSpecificDataInProducts
  };
});
