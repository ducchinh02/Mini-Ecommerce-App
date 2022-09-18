<template>
  <transition name="hide-toast">
    <toast-notification v-if="isAddToCart" />
  </transition>
  <transition name="slide">
    <component :isAddToCart="isAddToCart" :is="layout">
      <router-view @ProductAdded="addToCart" :isAddToCart="isAddToCart" />
    </component>
  </transition>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "./constants";
import ToastNotification from "./components/ToastNotification.vue";
export default {
  components: {
    ToastNotification,
  },
  setup() {
    const isAddToCart = ref(false);
    const route = useRoute();
    const addToCart = () => {
      isAddToCart.value = true;
      setTimeout(() => {
        isAddToCart.value = false;
      }, 2000);
    };
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
      isAddToCart,
      addToCart,
    };
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
.hide-toast-leave-active {
  animation: hideToast 0.5s ease-in-out 0.3s, scaleWidth 0.5s ease-in-out;
}
@keyframes hideToast {
  0% {
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -100%);
    -webkit-transform: translate(-50%, -100%);
    opacity: 0;
    overflow: hidden;
  }
}
@keyframes scaleWidth {
  0% {
    max-width: 350px;
  }
  100% {
    max-width: 60px;
  }
}
</style>
