import { createRouter, createWebHistory } from "vue-router";

import HomeFactory from "../factories/pages/home/HomeFactory.vue";
import LoginFactory from "../factories/pages/login/LoginFactory.vue";
import TestFactory from "../factories/pages/test/TestFactory.vue";

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
    path: "/test",
    name: "Test",
    component: TestFactory,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
