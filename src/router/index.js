import { createRouter, createWebHistory } from 'vue-router'
import MovieDetail from "../views/MovieDetail.vue";

const routes = [
  {
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