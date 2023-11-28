import App from "./App.vue";
import router from "./router";

import { createApp } from "vue";
import { createPinia } from "pinia";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import components from "@/components/UI/index.js";

import "./assets/scss/main.scss";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// Для UI компонентів
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(createPinia());
app.use(router);

app.mount("#app");
