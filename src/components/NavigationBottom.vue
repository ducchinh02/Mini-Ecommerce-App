<template>
  <router-link :to="{ name: 'Cart', params: {} }">
    <nav
      class="nav-bottom fixed w-full left-0 bottom-0 bg-black py-[30px] rounded-[38px] z-50"
    >
      <div class="container mx-auto px-10">
        <div class="flex justify-between items-center">
          <div
            class="total-count flex items-center justify-center font-bold w-[44px] h-[44px] bg-primary rounded-full text-black"
          >
            {{ cart.length }}
          </div>
          <div class="flex-1 pl-5">
            <p class="font-semibold text-white text-[24px]">Cart</p>
            <p class="total-items text-zinc-400 text-sm">
              {{
                cart.length > 1 ? cart.length + " Items" : cart.length + " Item"
              }}
            </p>
          </div>
          <div class="cart-item flex items-center">
            <div
              class="product-thumb"
              v-for="product in cart.length > 3
                ? cart.slice(cart.length - 3, cart.length)
                : cart.slice(0, 3)"
              :key="product.id"
            >
              <cart-item :product="product" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </router-link>
</template>

<script>
import { CART } from "@/constants/index";
import { reactive } from "vue";
import CartItem from "./CartItem.vue";
export default {
  components: { CartItem },
  setup() {
    const cart = reactive(CART);
    return { cart };
  },
};
</script>

<style lang="scss" scoped>
.product-thumb + .product-thumb {
  margin-left: -30px;
}
.nav-bottom {
  animation: slideBottom 0.5s 0.2s ease-in-out forwards;
  transform: translateY(100%);
  -webkit-transform: translateY(100%);
  &::before {
    // height: 100%;
    // width: 120px;
    // content: "";
    // display: block;
    // -webkit-transform: translateX(-50%);
    // @apply bg-white absolute -top-1 left-1/2 -translate-x-1/2;
    // pointer-events: none;
    // clip-path: polygon(25% 0%, 75% 0%, 100% 0, 85% 10%, 15% 10%, 0 0);
  }
}
@keyframes slideBottom {
  0% {
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}
</style>
