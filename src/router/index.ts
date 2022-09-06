import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  { name: "home", path: "/", component: () => import("@/views/home/home.vue") },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
