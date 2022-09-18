<template>
  <div
    class="home transition-all duration-300"
    :class="{ 'pb-28': isAddToCart }"
  >
    <div class="container mx-auto">
      <products-slider @ProductAdded="addToCart" :array="products" />
    </div>
  </div>
</template>

// @ is an alias to /src
<script>
import { PRODUCTS } from "@/constants";
import { reactive } from "vue";
import ProductsSlider from "@/components/ProductsSlider.vue";

export default {
  props: {
    isAddToCart: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    ProductsSlider,
  },
  setup(props, { emit }) {
    const products = reactive(PRODUCTS);
    const addToCart = () => {
      emit("ProductAdded");
    };
    return { products, addToCart };
  },
};
</script>
