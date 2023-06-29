import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.routes";
import axios from "axios";

const app = createApp(App);
app.use(router);
app.mount("#app");
