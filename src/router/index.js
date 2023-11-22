import { createRouter, createWebHistory } from "vue-router";
import middlewarePipeline from "@/middlewares/index";
import { ROLES } from "@/plugins/const";
import auth from "@/middlewares/auth";
import role from "@/middlewares/role";
import anonymous from "@/middlewares/anonymous";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      meta: { layout: "default", middleware: [anonymous] },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/",
      name: "home",
      meta: {
        layout: "main",
        role: ROLES.user,
        middleware: [auth, role],
      },
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
