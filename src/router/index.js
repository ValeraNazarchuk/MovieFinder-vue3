import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/list-movies",
        name: "list-movies",
        component: () => import("@/views/ListMoviesView.vue"),
    },
    {
        path: "/detailed-movies/:id",
        name: "detailed-movies",
        component: () => import("@/views/DetailedMovieView.vue"),
        props: true,
    },
    {
        path: "/favorite-movies",
        name: "favorite-movies",
        component: () => import("@/views/FavoriteMoviesView.vue"),
    },
    {
        path: "/form",
        name: "form",
        component: () => import("../views/FormView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
