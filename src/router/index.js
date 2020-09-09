import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
function getAbsolutePath() {
  let path = location.pathname;
  return path.substring(0, path.lastIndexOf("/") + 1);
}
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/fjrect",
    name: "FjRect",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "fjrect" */ "../views/FjRect.vue")
  },
  {
    path: "/fjlist",
    name: "FjList",
    component: () =>
      import(/* webpackChunkName: "fjList" */ "../views/FjList.vue")
  },
  {
    path: "/fjlist/detail",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  },
  {
    path: "/fjlist/bolt",
    name: "Bolt",
    component: () => import(/* webpackChunkName: "bolt" */ "../views/Bolt.vue")
  },
  {
    path: "/fjlist/monitor",
    name: "Monitor",
    component: () =>
      import(/* webpackChunkName: "monitor" */ "../views/Monitor.vue")
  },
  {
    path: "/fjlist/listdetail",
    name: "ListDetail",
    component: () =>
      import(/* webpackChunkName: "list" */ "../views/ListDetail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base:
    process.env.NODE_ENV === "production"
      ? getAbsolutePath()
      : process.env.BASE_URL,
  routes
});

export default router;
