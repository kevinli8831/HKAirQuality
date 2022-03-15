import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mapxus"),
  },
  {
    path: "/ESG",
    name: "ESG",
    component: () => import(/* webpackChunkName: "about" */ "../views/ESG"),
  },
  {
    path: "/google",
    name: "Google",
    component: () => import(/* webpackChunkName: "about" */ "../views/RealTimeStat"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
