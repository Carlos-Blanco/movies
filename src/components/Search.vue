<script>
  const API_KEY = 'k_79orqyvt';
  const API_URL = `https://imdb-api.com/en/API`;
  export default {
    data() {
      return {
        movie: "",
        movies: []
      }
    },
    methods: {
      searchMovie() {
        fetch(API_URL + `/SearchMovie/${API_KEY}/` + this.movie)
          .then(res => res.json())
          .then(data => {
            this.movies = data.results;
            console.log(data.results)
          });
      },
      movieDetail(id) {
        fetch(API_URL + `/Fullcast/` + id)
          .then(res => res.json())
          .then(data => {
            this.detail = data.results;
            console.log(data.results)
          });
      }

    }
  }
</script>

<template>
  <input type="text" v-model="movie" />
  <button @click="searchMovie">Search</button>

  <ul>
    <li v-for="movie in movies" :id="movie.id">
      <img :src="movie.image" alt="movie.title">
      <h3>{{ movie.title }} - {{movie.description}}</h3>
    </li>
  </ul>

</template>

<style scoped>
  img {
    width: 100px;
  }
  li {
    list-style: none;
  }
</style>
