<template>
  <div class="cart-details flex-1 mt-14 bg-black">
    <div
      class="container h-full flex flex-col justify-between mx-auto px-10 relative"
    >
      <!-- product item -->
      <div class="text-white mt-[65px]">
        <div
          class="product-container flex flex-col gap-8 max-h-80 overflow-scroll"
          v-if="cart.length > 0"
        >
          <div class="product-item" v-for="product in cart" :key="product.id">
            <router-link
              class="flex items-center justify-between"
              :to="{ name: 'ProductDetail', params: { name: product.id } }"
            >
              <cart-item :product="product" />
              <div class="product-info flex-1 pl-3">
                <div class="product-name font-bold capitalize text-lg pb-1">
                  {{ product.name }}
                </div>
                <div class="product-desc text-sm text-zinc-400">
                  {{ product.desc }}
                </div>
              </div>
              <div
                class="price px-3 text-sm py-2 font-bold bg-white text-black rounded-[27px]"
              >
                ${{
                  product.quantity * product.price.USD >= 10
                    ? product.quantity * product.price.USD
                    : "0" + product.quantity * product.price.USD
                }}
              </div>
            </router-link>
          </div>
        </div>
        <div
          v-else
          class="font-bold text-xl flex justify-center items-center gap-1"
        >
          Nothing In Your Cart
          <ion-icon
            name="sad-outline"
            class="inline-flex items-center text-3xl"
          ></ion-icon>
        </div>
      </div>
      <!-- subtotal -->
      <div
        v-if="cart.length > 0"
        class="subtotal overflow-hidden p-[35px] rounded-[18px] bg-primary my-[50px] relative"
      >
        <!-- delivery amount -->
        <div
          class="delivery-amount flex justify-between pb-3 border-black border-b"
        >
          <div class="capitalize">Delivery Amount</div>
          <div class="price font-bold">
            ${{ amount > 10 ? amount.toFixed(2) : "0" + amount.toFixed(2) }}
          </div>
        </div>
        <!-- total price -->
        <div class="total pt-3 font-medium text-xl">
          <h1>Total Amount</h1>
          <div class="total-price font-bold text-2xl pt-3">
            USD {{ sum > 10 ? sum.toFixed(2) : "0" + sum.toFixed(2) }}
          </div>
        </div>
        <div class="product-image">
          <div
            class="absolute ab-product right-0 bottom-0 translate-y-5 w-20"
            v-for="product in cart.slice(0, 3)"
            :key="product.id"
          >
            <img :src="product.image" :alt="product.name" />
          </div>
        </div>
      </div>
      <!-- make payment -->
      <div v-if="cart.length > 0" class="font-bold">
        <div
          class="make-payment relative my-8 bg-white flex items-center justify-between p-3 pl-10 rounded-[53px]"
        >
          <p class="font-bold">Make Payment</p>

          <div class="icon p-5 bg-primary rounded-[inherit]">
            <img src="@/assets/images/arrows.svg" alt="" />
          </div>
        </div>
      </div>
      <router-link v-else class="font-bold" :to="{ name: 'Home', params: {} }">
        <div
          class="make-payment relative my-8 bg-white flex items-center justify-between p-3 pl-10 rounded-[53px]"
        >
          <p class="font-bold">Shopping</p>

          <div class="icon p-5 bg-primary rounded-[inherit]">
            <img src="@/assets/images/arrows.svg" alt="" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { CART } from "@/constants/index";
import { reactive, computed } from "vue";
import CartItem from "../components/CartItem.vue";
export default {
  components: { CartItem },
  setup() {
    const cart = reactive(CART);
    const amount = 4;
    let totalPrice = 0;
    const sum = computed(() => {
      cart.forEach(
        (product) => (totalPrice += product.quantity * product.price.USD)
      );
      return totalPrice + amount;
    });
    return { cart, amount, sum };
  },
};
</script>

<style lang="scss" scoped>
.cart-details {
  border-top-left-radius: 38px;
  border-top-right-radius: 38px;
  .product-container {
    animation: slideBottom 0.5s 0.2s ease;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .subtotal {
    animation: slideBottom 0.5s ease 0.4s forwards;
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
    opacity: 0;
    &::before,
    &::after {
      height: 100%;
      width: 120px;
      content: "";
      display: block;
      -webkit-transform: translateX(-50%);
      @apply bg-black absolute left-1/2 -translate-x-1/2;
      pointer-events: none;
      clip-path: polygon(25% 0%, 75% 0%, 100% 0, 85% 5%, 15% 5%, 0 0);
    }
    &::before {
      @apply -top-1;
    }
    &::after {
      @apply -bottom-1;
      transform: scaleY(-1) translateX(50%);
      -webkit-transform: scale(-1) translateX(50%);
    }
    .product-image {
      .ab-product:nth-child(1) {
        transform: translate(-10%, 0);
        -webkit-transform: translate(-10%, 0);
      }
      .ab-product:nth-child(2) {
        transform: translate(30%, 10%) rotate(22deg);
        -webkit-transform: translate(30%, 10%) rotate(22deg);
      }
      .ab-product:nth-child(3) {
        transform: rotate(-24deg) translate(-50%, 10%);
        -webkit-transform: rotate(-24deg) translate(-50%, 10%);
      }
    }
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
