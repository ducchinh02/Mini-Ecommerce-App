<template>
  <header>
    <div class="container mx-auto px-10">
      <div class="flex justify-between items-center">
        <slot />
        <slot name="icon" />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  animation: slideTop 0.5s ease-in-out;
}
@keyframes slideTop {
  0% {
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}
</style>
