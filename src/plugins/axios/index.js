import axios from "axios";
const baseKEY = import.meta.env.VITE_API_KEY;

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
    const paramString = new URLSearchParams(config.params).toString();
    config.url += `${paramString}&${baseKEY}`;
    return config;
});

export default api;
