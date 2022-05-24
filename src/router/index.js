import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

function page(path) {
  return () => import(`@/pages/${path}`).then((m) => m.default || m);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: page("Home.vue"),
  },
  {
    path: "/estate",
    name: "Estate",
    component: page("Estate.vue"),
  },
  {
    path: "/elder",
    name: "Elder",
    component: page("Elder.vue"),
  },
  {
    path: "/probate",
    name: "Probate",
    component: page("Probate.vue"),
  },
  {
    path: "/business",
    name: "Business",
    component: page("Business.vue"),
  },
  {
    path: "/gun",
    name: "Gun",
    component: page("Gun.vue"),
  },
  {
    path: "/bankruptcy",
    name: "Bankruptcy",
    component: page("Bankruptcy.vue"),
  },
  {
    path: "/real-estate",
    name: "RealEstate",
    component: page("RealEstate.vue"),
  },
  {
    path: "/veterans",
    name: "Veterans",
    component: page("Veterans.vue"),
  },
  {
    path: "/tax",
    name: "Tax",
    component: page("Tax.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
