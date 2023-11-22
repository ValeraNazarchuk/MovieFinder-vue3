import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useI18n } from "./locales/translations";

// styles
import "./assets/scss/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(useI18n);

app.mount("#app");
