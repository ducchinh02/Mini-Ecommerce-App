<template>
  <div class="min-h-screen flex flex-col">
    <!-- <div class="container h-full mx-auto px-10"> -->
    <header-main class="pt-14">
      <h1 class="font-normal text-3xl text-black leading-[39px] capitalize">
        <router-link :to="{ name: 'Home', params: {} }">
          <span class="font-bold header-text flex items-center gap-2"
            ><ion-icon
              class="inline-flex icon items-center transition-all duration-300"
              name="arrow-back-outline"
            ></ion-icon
            >Cart</span
          >
        </router-link>
      </h1>
      <template v-slot:icon>
        <div
          class="total-count flex items-center justify-center font-bold w-[44px] h-[44px] bg-primary rounded-full text-black"
        >
          {{ cart.length }}
        </div>
      </template>
    </header-main>
    <slot />
    <!-- </div> -->
  </div>
</template>
<script>
import HeaderMain from "../components/HeaderMain.vue";
import { CART } from "@/constants/index";
import { reactive } from "vue";
export default {
  components: { HeaderMain },
  setup() {
    const cart = reactive(CART);
    return { cart };
  },
};
</script>

<style lang="scss" scoped>
.header-text:hover {
  .icon {
    @apply -translate-x-1;
  }
}
</style>
