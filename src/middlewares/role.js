import { useAuthStore } from "@/stores/auth";
import { ROLES_REDIRECT } from "@/plugins/const";
export default function roles({ to, next }) {
  const store = useAuthStore();
  if (store.user?.role !== to.meta.role) {
    return next({
      name: ROLES_REDIRECT[store.user?.role],
    });
  } else {
    return next();
  }
}
