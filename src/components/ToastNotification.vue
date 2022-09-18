<template>
  <div
    class="toast flex items-center gap-2 max-w-[60px] fixed top-10 w-100% z-[9999] left-1/2 overflow-hidden transition-all duration-300 -translate-x-1/2 px-4 py-3 bg-green text-white font-medium rounded-3xl leading-none whitespace-nowrap"
  >
    <div class="icon w-7 absolute">
      <img src="@/assets/images/cart.svg" alt="" />
    </div>
    <span class="pl-[36px] transition-all duration-300 opacity-0"
      >Product added to cart successfully
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.toast {
  animation: showToast 0.5s ease-in-out,
    fullWidth 0.5s ease-in-out 0.3s forwards;
  span {
    animation: showText 0.5s ease-in-out 0.5s forwards,
      showText 0.5s reverse 2s forwards;
  }
}
@keyframes showToast {
  0% {
    transform: translate(-50%, -100%);
    -webkit-transform: translate(-50%, -100%);
    opacity: 0;
    overflow: hidden;
  }
  100% {
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    opacity: 1;
  }
}
@keyframes fullWidth {
  0% {
    max-width: 60px;
  }
  100% {
    max-width: 350px;
  }
}
@keyframes showText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
