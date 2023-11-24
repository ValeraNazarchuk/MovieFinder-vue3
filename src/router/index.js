import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/detailed-movies",
    name: "detailed-movies",
    component: () => import("@/views/DetailedView.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/FormView.vue"),
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import("@/views/MoviesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
