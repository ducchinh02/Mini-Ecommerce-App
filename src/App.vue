<template>
  <transition name="slide">
    <component :is="layout">
      <router-view />
    </component>
  </transition>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "./constants";
export default {
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>

<style lang="scss">
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
