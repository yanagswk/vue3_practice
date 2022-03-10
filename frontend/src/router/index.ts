import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Gallary from "../views/Gallary.vue";
import TodoList from "../views/TodoList.vue";
import NotFound from "../components/NotFound.vue";
import AppHome from "../views/AppHome.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // name: "Home",
    // component: Home,
    component: AppHome,
  },
  {
    path: "/gallary",
    name: "Gallary",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Gallary.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: TodoList,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
