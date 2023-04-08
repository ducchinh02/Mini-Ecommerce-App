<template>
  <div class="relative overflow-hidden rounded-[50px]">
    <router-link :to="{ name: 'ProductDetail', params: { name: product.id } }">
      <div
        class="product-card relative h-[420px] w-full flex flex-col justify-between"
        :style="{ backgroundColor: product.color }"
      >
        <div
          class="absolute top-12 h-full w-full right-0 translate-x-1/4 rotate-[27deg] z-1 pointer-events-none"
        >
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-info z-10">
          <div class="name w-1/2">{{ product.name }}</div>
          <div
            class="tag mt-4 px-4 py-2 rounded-[30px] capitalize text-sm text-black inline-block bg-white"
          >
            <span class="opacity-50">
              {{ product.type }}
            </span>
          </div>
        </div>
      </div>
    </router-link>
    <div
      @click="addToCart(product)"
      class="add-to-cart absolute bottom-5 left-5 right-5 rounded-[30px] p-2 pl-10 z-10 flex justify-between items-center"
    >
      <div class="price font-bold">
        {{
          product.price.USD >= 10
            ? "$" + product.price.USD.toFixed(2)
            : "$0" + product.price.USD.toFixed(2)
        }}
      </div>
      <div class="icon cursor-pointer px-8 py-5 bg-black rounded-[40px]">
        <img src="@/assets/images/cart.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { CART } from "@/constants";
import { reactive } from "vue";
export default {
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
  setup(props, { emit }) {
    const cart = reactive(CART);
    const addToCart = (product) => {
      const checkProduct = cart.find((prd) => prd.name === product.name);
      if (!checkProduct) {
        cart.push({
          ...product,
          quantity: 1,
        });
      } else {
        checkProduct.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      emit("ProductAdded");
    };
    return { cart, addToCart };
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  padding: 40px 30px 20px;
  .product-info {
    .name {
      font-weight: 700;
      font-size: 36px;
      text-transform: capitalize;
      @apply text-black;
      line-height: 37px;
    }
  }
}
.add-to-cart {
  background: linear-gradient(
    199.93deg,
    rgba(255, 255, 255, 0.6) 27.23%,
    rgba(255, 255, 255, 0.366) 96.87%
  );
  backdrop-filter: blur(28px);
}
</style>
