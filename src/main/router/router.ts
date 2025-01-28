import { createRouter, createWebHistory } from "vue-router";

import HomeFactory from "../factories/pages/home/HomeFactory.vue";
import LoginFactory from "../factories/pages/login/LoginFactory.vue";
import BurgerFactory from "../factories/pages/burgers/BurgerFactory.vue";
import AuthenticatedApp from "../app/AuthenticatedApp.vue";
import AppertizerFactory from "../factories/pages/appetizers/AppertizerFactory.vue";
import DessertFactory from "../factories/pages/desserts/DessertFactory.vue";
import BeveragesFactory from "../factories/pages/beverages/BeveragesFactory.vue";
import ShoppingCartFactory from "../factories/pages/cart/ShoppingCartFactory.vue";

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: "/login",
    name: "Login",
    component: LoginFactory,
  },
  {
    path: '/',
    component: AuthenticatedApp,
    children: [
      {
        path: "/home",
        name: "Home",
        component: HomeFactory,
        meta: { requiresAuth: true }
      },
      {
        path: "/burgers",
        name: "Burgers",
        component: BurgerFactory,
        meta: { requiresAuth: true }
      },
      {
        path: "/appetizers",
        name: "Appetizers",
        component: AppertizerFactory,
        meta: { requiresAuth: true }
      },
      {
        path: "/beverages",
        name: "Beverages",
        component: BeveragesFactory,
        meta: { requiresAuth: true }
      },
      {
        path: "/desserts",
        name: "Desserts",
        component: DessertFactory,
        meta: { requiresAuth: true }
      },
      {
        path: "/shopping-cart",
        name: "ShoppingCart",
        component: ShoppingCartFactory,
        meta: { requiresAuth: true }
      },

    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const account = sessionStorage.getItem('account');
    if (!account) {
      return next('/login');
    }
  }
  next();
});

export default router;
