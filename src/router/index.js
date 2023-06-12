import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";
import ActorDetail from "../views/ActorDetail.vue";
import Login from "../views/Login.vue";
import UserMovies from "../views/UserMovies.vue";

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
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/user-movies',
    name: "UserMovies",
    component: UserMovies
  }
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

export default router