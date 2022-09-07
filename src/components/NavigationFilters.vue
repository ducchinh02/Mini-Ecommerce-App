<template>
  <ul class="menu flex items-center gap-2 pt-9">
    <li
      class="menu-item p-5 rounded-[38px] bg-gray transition-all duration-300"
      :class="{ active: $route.params.name === btn.name }"
      v-for="btn in filtersBtn"
      :key="btn.name"
    >
      <router-link
        :to="{ name: 'Collections', params: { name: btn.name } }"
        class="flex items-center"
      >
        <div v-if="btn.icon" class="flex items-center gap-2">
          <img :src="btn.icon" :alt="btn.name" />
          <span class="filter-name">{{ btn.name }}</span>
        </div>
        <span v-else>{{ btn.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { filterBtn } from "@/constants/index";
import { reactive } from "vue";
export default {
  setup() {
    const filtersBtn = reactive(filterBtn);
    return { filtersBtn };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  &-item {
    .filter-name {
      transform: scale(0);
      transform-origin: left;
      -webkit-transform: scale(0);
      width: 0;
      overflow: hidden;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
    }
    &.active {
      img {
        filter: invert(1);
      }
      .filter-name {
        transform: scale(1);
        -webkit-transform: scale(1);
        width: max-content;
        overflow: visible;
      }
      @apply bg-black;
      a {
        @apply text-white;
      }
    }
  }
}
</style>
