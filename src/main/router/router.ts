import { createRouter, createWebHistory } from "vue-router";

import HomeFactory from "../factories/pages/home/HomeFactory.vue";
import LoginFactory from "../factories/pages/login/LoginFactory.vue";
import BurgerFactory from "../factories/pages/burgers/BurgerFactory.vue";
import AppertizerFactory from "../factories/pages/appetizers/AppertizerFactory.vue";
import DessertFactory from "../factories/pages/desserts/DessertFactory.vue";
import BeveragesFactory from "../factories/pages/beverages/BeveragesFactory.vue";
import CartFactory from "../factories/pages/cart/CartFactory.vue";

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
  },
  {
    path: "/appetizers",
    name: "Appetizers",
    component: AppertizerFactory,
  },
  {
    path: "/beverages",
    name: "Beverages",
    component: BeveragesFactory,
  },
  {
    path: "/desserts",
    name: "Desserts",
    component: DessertFactory,
  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: CartFactory
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
