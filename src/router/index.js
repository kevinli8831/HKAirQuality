import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RealTimeStat"),
  },
  {
    path: "/ESG",
    name: "ESG",
    component: () => import(/* webpackChunkName: "about" */ "../views/ESG"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "about" */ "../views/test"),

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
