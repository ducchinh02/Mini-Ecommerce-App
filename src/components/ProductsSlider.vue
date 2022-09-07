<template>
  <swiper
    grab-cursor
    :slides-per-view="1"
    :loop="true"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
      '576': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      '991': {
        slidesPerView: 3,
      },
    }"
  >
    <swiper-slide
      class="slide-item rounded-2xl"
      v-for="product in array"
      :key="product.name"
    >
      <product-card :product="product" />
    </swiper-slide>
  </swiper>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import {} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/scss";
export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCard,
  },
  props: {
    array: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  padding: 50px 40px;
  .swiper-slide {
    transform: rotate(-22.2deg);
    -webkit-transform: rotate(-22.2deg);
    transform-origin: left;
    transition: all 0.3s ease;
    @media screen and (min-width: 768px) {
      & {
        transform: rotate(0);
        -webkit-transform: rotate(0);
        opacity: 1;
      }
    }
  }
  .swiper-slide-active {
    transform: rotate(0);
    -webkit-transform: rotate(0);
    opacity: 1;
  }
}
</style>
