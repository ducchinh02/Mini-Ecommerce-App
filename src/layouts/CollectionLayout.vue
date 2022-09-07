<template>
  <div class="py-14 h-full overflow-scroll">
    <header-main>
      <h1 class="font-bold text-3xl text-black leading-[39px] capitalize">
        {{ $route.params.name }}<span class="font-normal"> Collections</span>
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
      <navigation-filters />
      <slot />
    </div>
  </div>
</template>

<script>
import HeaderMain from "../components/HeaderMain.vue";
import NavigationFilters from "../components/NavigationFilters.vue";
export default {
  components: { NavigationFilters, HeaderMain },
};
</script>
HeaderMain

<style></style>
