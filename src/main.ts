import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/router";
import "@/assets/scss/style.scss";
import VCalendar from "v-calendar";

const app = createApp(App);
const pinia = createPinia();

declare global {
  interface Window {
    app?: unknown;
  }
}

window.app = app.use(VCalendar).use(router).use(pinia).mount("#app");
