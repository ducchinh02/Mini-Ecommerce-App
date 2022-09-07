<template>
  <navigation-filters />
  <div class="container mx-auto text-center">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
  <div class="text-center">
    <button
      v-for="btn in filtersBtn"
      :key="btn.name"
      @click="filter(btn.filter)"
      :class="{ active: btn.active }"
      class="inline-flex gap-1 ml-3 items-center"
    >
      <div class="icon"><img :src="btn.icon" alt="" /></div>
      <span>
        {{ btn.name }}
      </span>
    </button>
  </div>
  <div class="flex flex-wrap justify-between">
    <div class="container mx-auto">
      <products-slider :array="filterProducts" />
    </div>
  </div>

  <!-- <div>
      {{ cart }}
    </div> -->
</template>

<script>
import NavigationFilters from "./components/NavigationFilters.vue";
import { PRODUCTS, CART, filterBtn } from "./constants";
import { computed, reactive, ref, onMounted } from "vue";
// import ProductCard from "./components/ProductCard.vue";
import ProductsSlider from "./components/ProductsSlider.vue";

export default {
  components: {
    NavigationFilters,
    ProductsSlider,
  },
  setup() {
    const products = reactive(PRODUCTS);
    const cart = reactive(CART);
    const filtersBtn = reactive(filterBtn);
    const filters = ref("");
    const addToCart = (product) => {
      const checkProduct = cart.find((prd) => prd.name === product.name);
      if (!checkProduct) {
        cart.push({
          ...product,
          quantity: 1,
        });
      } else {
        checkProduct.quantity += 1;
      }
    };
    const filter = (type) => {
      filters.value = type;
    };
    const filterProducts = computed(() => {
      return products.filter((prd) =>
        prd.type.toLowerCase().includes(filters.value.toLowerCase())
      );
    });

    onMounted(() => {
      const btn = document.querySelectorAll("button");
      btn.forEach((item) => {
        item.addEventListener("click", () => {
          btn.forEach((item) => {
            item.classList.remove("active");
          });
          item.classList.add("active");
        });
      });
    });
    return { products, cart, addToCart, filterProducts, filter, filtersBtn };
  },
};
</script>

<style lang="scss">
nav {
  padding: 3rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
}
button.active {
  color: #42b983;
}
h1 {
  font-weight: 600;
}
</style>
