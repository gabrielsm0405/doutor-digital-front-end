import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";

import store from "../store";

Vue.use(VueRouter);

const requireAuthenticated = (to, from, next) => {
  store.dispatch("auth/initialize").then(() => {
    if (!store.getters["auth/isAuthenticated"]) next("/signin");
    else next();
  });
};

const requireUnauthenticated = (to, from, next) => {
  store.dispatch("auth/initialize").then(() => {
    if (!store.getters["auth/isAuthenticated"]) next();
    else next("/home");
  });
};

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: requireAuthenticated,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    beforeEnter: requireUnauthenticated,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
