import { createRouter, createWebHistory } from "vue-router";

//comp

import Landing from "../views/Landing.vue";
import Loggin from "../views/Loggin.vue";
import Admin from "../views/Admin.vue";
import Main from "../views/Main.vue";

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/Main", name: "Main", component: Main },
  { path: "/Admin", name: "Admin", component: Admin },
  { path: "/Loggin", name: "Loggin", component: Loggin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
