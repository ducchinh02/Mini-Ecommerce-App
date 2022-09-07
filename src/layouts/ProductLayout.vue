<template>
  <div class="py-14 h-full overflow-scroll">
    <header-main>
      <h1 class="font-bold text-3xl text-black leading-[39px] capitalize">
        {{ product.name }}
      </h1>
      <template v-slot:icon>
        <router-link :to="{ name: 'Home', params: {} }">
          <div
            class="menu-icon w-6 h-5 text-3xl box-content px-3 py-6 border-4 border-[#f3f3f3] rounded-[38px] items-center flex"
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        </router-link>
      </template>
    </header-main>
    <div class="container mx-auto px-10">
      <transition name="slide">
        <slot />
      </transition>
    </div>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain.vue";
import { PRODUCTS } from "@/constants/index";
import { reactive, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  components: { HeaderMain },
  setup() {
    const listProducts = reactive(PRODUCTS);
    const product = ref(null);
    const route = useRoute();
    onBeforeMount(() => {
      product.value = listProducts.find(
        (product) => product.id === route.params.name
      );
    });
    return { product };
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  animation: slide 0.5s ease;
}
.slide-leave-active {
  animation: slide 0.3s reverse;
}
@keyframes slide {
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
