import { useAuthStore } from "@/stores/auth";

export default async function auth({ next }) {
  const authStore = useAuthStore();
  if (!localStorage.getItem("token")) {
    return next({
      name: "login",
    });
  } else {
    if (!authStore.user) {
      authStore.$patch((state) => {
        state.user = {
          role: "user",
        };
      });
    }
    return next();
  }
}
