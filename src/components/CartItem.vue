<template>
  <div
    class="w-[70px] border-4 border-black h-[70px] bg-white rounded-full overflow-hidden"
  >
    <img
      class="w-1/2 mx-auto object-contain"
      :src="product.image"
      :alt="product.name"
    />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style></style>
