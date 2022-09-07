<template>
  <div class="home pb-28">
    <div class="container mx-auto">
      <products-slider :array="products" />
    </div>
  </div>
</template>

// @ is an alias to /src
<script>
import { PRODUCTS } from "@/constants";
import { reactive } from "vue";
// import ProductCard from "./components/ProductCard.vue";
import ProductsSlider from "@/components/ProductsSlider.vue";

export default {
  components: {
    ProductsSlider,
  },
  setup() {
    const products = reactive(PRODUCTS);
    return { products };
  },
};
</script>
