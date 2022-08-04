import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";
import ActorDetail from "../views/ActorDetail.vue";

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/movie/:movieid',
    name: "MovieDetail",
    props: true,
    component: MovieDetail
  },
  {
    path: '/actor/:actorid',
    name: "ActorDetail",
    props: true,
    component: ActorDetail
  }

];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

export default router