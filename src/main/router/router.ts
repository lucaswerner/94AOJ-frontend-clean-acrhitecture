import { createRouter, createWebHistory } from "vue-router";

import HomeFactory from "../factories/pages/home/HomeFactory.vue";
import LoginFactory from "../factories/pages/login/LoginFactory.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeFactory,
    alias: "/home",
  },
  {
    path: "/login",
    name: "Login",
    component: LoginFactory,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
