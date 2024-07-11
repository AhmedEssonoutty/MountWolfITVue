// Sass main styles
import "./assets/main.scss";

// motion
import { MotionPlugin } from "@vueuse/motion";

import { createApp } from "vue";
import { createPinia } from "pinia";

// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
