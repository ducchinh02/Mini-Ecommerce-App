<template>
  <div class="flex flex-wrap gap-y-[30px] py-8 justify-between">
    <product-card
      v-for="product in productFilter"
      :product="product"
      :key="product.id"
      class="w-full md:w-[48%] lg:w-[31%]"
      @ProductAdded="addToCart"
    />
  </div>
</template>

<script>
import { PRODUCTS } from "@/constants";
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: { ProductCard },
  setup(props, { emit }) {
    const route = useRoute();
    const products = reactive(PRODUCTS);
    const productFilter = computed(() => {
      if (route.params.name.toLowerCase() != "all") {
        return products.filter((product) =>
          product.type.toLowerCase().includes(route.params.name.toLowerCase())
        );
      } else {
        return products;
      }
    });
    const addToCart = () => {
      emit("ProductAdded");
    };
    return { products, productFilter, addToCart };
  },
};
</script>
