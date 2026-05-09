import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "products",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("@/views/OrdersView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
