import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
  app.component(
    "shop-layout",
    defineAsyncComponent(() => import("@/layouts/ShopLayout.vue"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue"))
  );
  app.component(
    "product-layout",
    defineAsyncComponent(() => import("@/layouts/ProductLayout.vue"))
  );
  app.component(
    "collection-layout",
    defineAsyncComponent(() => import("@/layouts/CollectionLayout.vue"))
  );
}
