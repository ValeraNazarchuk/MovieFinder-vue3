import { defineStore } from "pinia";
import api from "@/plugins/axios";
import { useNotificationStore } from "@/stores/notifications";
const notification = useNotificationStore();

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
    loading: false,
  }),
  actions: {
    async getUsers() {
      this.loading = true;
      try {
        let { data } = await api.get("/character");
        this.users = data.results;
      } catch (error) {
        notification.failed(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
