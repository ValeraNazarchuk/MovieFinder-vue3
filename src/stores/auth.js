import { defineStore } from "pinia";
import api from "@/plugins/axios";
import router from "../router";
import { useNotificationStore } from "@/stores/notifications";
import {
  setTokenData,
  setAnonymousTokenData,
  removeTokenData,
} from "@/services/auth";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    loading: false,
    user: null,
  }),
  actions: {
    async fetchUser() {
      try {
        const { data } = await api.get("/users/me");
        this.user = data;
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        await api.post("/logout");
        router.push("/login");
        removeTokenData();
        this.user = null;
      } catch (error) {
        useNotificationStore().failed(error);
      }
    },
    async anonymousToken() {
      try {
        const { data } = await api.get("/token");
        setAnonymousTokenData(data);
        return data.token;
      } catch (error) {
        useNotificationStore().failed(error);
      }
    },
    async refreshToken(refreshToken) {
      try {
        const { data } = await api.post("/token/refresh", refreshToken);
        setTokenData(data);
        return data.token;
      } catch (error) {
        useNotificationStore().failed(error);
        removeTokenData();
        router.push("/login");
      }
    },
  },
});
