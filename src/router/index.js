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
    component: () => import("@/views/DetailedMovieView.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/FormView.vue"),
  },
  {
    path: "/result-movies",
    name: "movies",
    component: () => import("@/views/ResultMoviesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
