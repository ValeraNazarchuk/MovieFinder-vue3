import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/detailed-movies/:id",
        name: "detailed-movies",
        component: () => import("@/views/DetailedMovieView.vue"),
        props: true,
    },
    {
        path: "/form",
        name: "form",
        component: () => import("../views/FormView.vue"),
    },
    {
        path: "/list-movies",
        name: "list-movies",
        component: () => import("@/views/ListMoviesView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
