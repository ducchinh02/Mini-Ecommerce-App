import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/scss/style.scss";
import "@/assets/css/base.css";
import { registerGlobalComponent } from "@/utils/index";

const app = createApp(App);
registerGlobalComponent(app);
app.use(router);
app.mount("#app");
