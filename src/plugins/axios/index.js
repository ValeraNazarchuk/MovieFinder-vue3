import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${
    localStorage.getItem("token") || localStorage.getItem("anonymousToken")
  }`;
  config.headers["Accept-Language"] = localStorage.getItem("i18lang") || "uk";
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const authStore = useAuthStore();
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (["/token/refresh"].includes(originalRequest.url)) {
        return Promise.reject(error);
      }
      originalRequest._retry = true;
      const refresh = localStorage.getItem("refreshToken");
      let access_token;
      if (refresh) {
        access_token = await authStore.refreshToken({ refreshToken: refresh });
      } else {
        access_token = await authStore.anonymousToken();
      }
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
