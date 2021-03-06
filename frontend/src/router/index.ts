import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Gallary from "../views/Gallary.vue";
import TodoList from "../views/TodoList.vue";
import NotFound from "../components/NotFound.vue";
import AppHome from "../views/AppHome.vue";
import Counter from "../views/Counter.vue";
import Tetorisu from "../views/Tetorisu.vue";
import PlayPage from "../views/PlayPage.vue";
import VuexTodoList from "../views/VuexTodoList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
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
    path: "/vuextodolist",
    name: "VuexTodoList",
    component: VuexTodoList,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/tetorisu",
    name: "Tetorisu",
    component: Tetorisu,
  },
  {
    path: "/playPage",
    name: "PlayPage",
    component: PlayPage,
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
