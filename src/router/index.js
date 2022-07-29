import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/movie/:id',
    name: "MovieDetail",
    props: true,
    component: MovieDetail
  }
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

export default router