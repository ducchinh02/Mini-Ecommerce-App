<template>
  <div class="product">
    <div class="product-desc capitalize font-medium pt-4 pb-6 text-zinc-400">
      {{ product.desc }}
    </div>
    <div class="flex flex-col md:flex-row justify-around">
      <div class="product-image">
        <img
          :src="product.image"
          class="w-4/5 md:w-full mx-auto"
          :alt="product.name"
        />
      </div>
      <div class="md:w-1/2">
        <div class="product-control pt-12 flex items-center justify-between">
          <button
            @click="descQuantity"
            class="shadow-xl desc-quantity flex items-center text-3xl p-4 cursor-pointer rounded-full"
          >
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <div class="product-info text-center">
            <div class="quantity font-bold text-4xl pb-2">
              {{ quantity >= 10 ? quantity : "0" + quantity }}
            </div>
            <div
              class="price bg-primary py-3 px-6 font-bold text-lg rounded-[40px]"
            >
              ${{
                product.price.USD * quantity > 10
                  ? (product.price.USD * quantity).toFixed(2)
                  : "0" + (product.price.USD * quantity).toFixed(2)
              }}
            </div>
          </div>
          <button
            @click="incrQuantity"
            class="shadow-xl incr-quantity flex items-center text-3xl p-4 cursor-pointer rounded-full"
          >
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
        <div
          class="font-bold cursor-pointer"
          @click="addToCart(product, quantity)"
        >
          <div
            class="add-to-cart relative my-8 bg-white flex items-center justify-between p-3 pl-10 rounded-[53px]"
          >
            <p class="font-bold">Add To Cart</p>

            <div class="icon p-5 bg-primary rounded-[inherit]">
              <img src="@/assets/images/cart.svg" class="invert" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PRODUCTS, CART } from "@/constants/index";
import { reactive, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  props: {
    isAddToCart: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    const listProducts = reactive(PRODUCTS);
    const product = ref(null);
    const route = useRoute();
    const quantity = ref(1);
    const cart = reactive(CART);
    onBeforeMount(() => {
      product.value = listProducts.find(
        (product) => product.id === route.params.name
      );
    });
    const addToCart = (pro, quant) => {
      const checkProduct = cart.find((prd) => prd.name === pro.name);
      if (!checkProduct) {
        cart.push({
          ...pro,
          quantity: quant,
        });
      } else {
        checkProduct.quantity += quant;
      }
      // localStorage.setItem("cart", JSON.stringify(cart));
      emit("ProductAdded");
    };
    const descQuantity = () => {
      quantity.value -= 1;
      if (quantity.value <= 0) {
        quantity.value = 0;
      }
    };
    const incrQuantity = () => {
      quantity.value += 1;
    };

    return { product, quantity, incrQuantity, descQuantity, addToCart };
  },
};
</script>

<style lang="scss" scoped>
.product {
  &-image {
    animation: scale 0.5s ease-in-out;
  }
}
@keyframes scale {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 1;
  }
}
</style>
