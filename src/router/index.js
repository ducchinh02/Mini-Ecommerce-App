import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/collections/:name",
    name: "Collections",
    meta: {
      layout: "collection",
    },
    component: () =>
      import(/* webpackChunkName: "collections" */ "../views/Collections.vue"),
  },
  {
    path: "/product-detail/:name",
    name: "ProductDetail",
    meta: {
      layout: "product",
    },
    component: () =>
      import(
        /* webpackChunkName: "product-detail" */ "../views/ProductDetails.vue"
      ),
  },
  {
    path: "/cart",
    name: "Cart",
    meta: {
      layout: "shop",
    },
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
