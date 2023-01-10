import { createApp } from "vue";
import App from "./App.vue";
// 集成Router pinia
import router from "./router";
import pinia from "./stores";
// 样式重置
import "normalize.css";
import "@/assets/style/index.less";
import "./utils/router/permission-routes";
// WindiCSS
import "virtual:windi.css";
import "virtual:windi-devtools";

createApp(App).use(router).use(pinia).mount("#app");
