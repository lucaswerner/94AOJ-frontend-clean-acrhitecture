import { createRouter, createWebHistory } from "vue-router";

import HomeFactory from "../factories/pages/home/HomeFactory.vue";
import LoginFactory from "../factories/pages/login/LoginFactory.vue";
import BurgerFactory from "../factories/pages/burgers/BurgerFactory.vue";

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
  {
    path: "/burgers",
    name: "Burgers",
    component: BurgerFactory,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
