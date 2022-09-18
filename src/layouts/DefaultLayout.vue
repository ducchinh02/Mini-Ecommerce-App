<template>
  <div class="py-14 h-full overflow-scroll">
    <header-main>
      <h1 class="font-normal text-3xl text-black leading-[39px] capitalize">
        Order from the best of <span class="font-bold">snacks</span>
      </h1>
      <template v-slot:icon>
        <router-link :to="{ name: 'Cart', params: {} }">
          <div
            class="menu-icon w-6 h-5 box-content p-4 bg-primary rounded-[38px] items-center flex"
          >
            <img src="@/assets/images/cart.svg" class="invert" alt="" />
          </div>
        </router-link>
      </template>
    </header-main>
    <div class="container mx-auto px-10">
      <navigation-filters />
    </div>
    <transition name="slide">
      <slot />
    </transition>
  </div>
  <transition name="hide-bottom">
    <navigation-bottom v-if="isAddToCart" />
  </transition>
</template>

<script>
import HeaderMain from "../components/HeaderMain.vue";
import NavigationBottom from "../components/NavigationBottom.vue";
import NavigationFilters from "../components/NavigationFilters.vue";
export default {
  components: {
    HeaderMain,
    NavigationBottom,
    NavigationFilters,
  },
  props: {
    isAddToCart: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
// .menu-icon {
//   &::after,
//   &::before {
//     display: block;
//     content: "";
//     width: 75%;
//     height: 2px;
//     @apply bg-black;
//     border-radius: 6px;
//   }
// }
.slide-enter-active {
  animation: slide 0.5s ease;
}
.slide-leave-active {
  animation: slide 0.3s reverse;
}
@keyframes slide {
  0% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    opacity: 1;
  }
}
.hide-bottom-leave-active {
  animation: hideBottom 0.5s ease-in-out forwards;
}
@keyframes hideBottom {
  from {
    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
    opacity: 0;
  }
}
</style>
