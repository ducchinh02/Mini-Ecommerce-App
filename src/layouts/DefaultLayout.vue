<template>
  <div class="py-14 h-full overflow-scroll">
    <header-main>
      <h1 class="font-normal text-3xl text-black leading-[39px] capitalize">
        Order from the best of <span class="font-bold">snacks</span>
      </h1>
      <template v-slot:icon>
        <div
          class="menu-icon w-6 h-5 box-content px-3 py-6 border-4 border-[#f3f3f3] rounded-[38px] items-center flex justify-around flex-col"
        >
          <span class="h-[2px] w-full rounded-md bg-black"></span>
        </div>
      </template>
    </header-main>
    <div class="container mx-auto px-10">
      <navigation-filters />
    </div>
    <transition name="slide">
      <slot />
    </transition>
  </div>
  <navigation-bottom />
</template>

<script>
import HeaderMain from "../components/HeaderMain.vue";
import NavigationBottom from "../components/NavigationBottom.vue";
import NavigationFilters from "../components/NavigationFilters.vue";
export default {
  components: { HeaderMain, NavigationBottom, NavigationFilters },
};
</script>

<style lang="scss" scoped>
.menu-icon {
  &::after,
  &::before {
    display: block;
    content: "";
    width: 75%;
    height: 2px;
    @apply bg-black;
    border-radius: 6px;
  }
}
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
</style>
