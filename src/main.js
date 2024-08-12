import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import Vue2Editor from "vue2-editor";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.use(Vue2Editor);

const options = {
  // You can set your default options here
  timeout: 2000,

};

app.use(Toast, options);

app.mount("#app");
