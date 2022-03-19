import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import AboutUs from "../views/AboutUs.vue";

import store from "../store";

Vue.use(VueRouter);

const requireAuthenticated = (to, from, next) => {
  if (!store.getters["auth/isAuthenticated"]) next("/signin");
  else next();
};

const requireUnauthenticated = (to, from, next) => {
  if (!store.getters["auth/isAuthenticated"]) next();
  else next("/home");
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
  {
    path: "/aboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
