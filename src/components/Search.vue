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
            console.log(data.results);
            this.movies = data.results;
          });
      },
      movieDetail(id) {
        fetch(API_URL + `/Fullcast/${API_KEY}/` + id)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          });
      }
    }
  }
</script>

<template>
  <input type="text" v-model="movie" />
  <button @click="searchMovie">SEARCH</button>

  <main>
    <article v-for="movie in movies" :id="movie.id">
      <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
        <img :src="movie.image" :alt="movie.title">
        <p>{{ movie.title }} - {{movie.description}}</p>
      </router-link>
    </article>
  </main>

</template>

<style scoped>
  main {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  article {
    flex: 1;
  }
  img {
    width: 150px;
    height: 222px;
    object-fit: cover;
  }
  input, button {
    height: 40px;
    margin-bottom: 40px;
  }
  input[type="text"] {
    border-radius: 3px;
    background: white;
    color: #595959;
    padding: 0 1rem;
    border: none;
    font-size: 1rem;
  }
  button {
    margin-left: 1rem;
    font-weight: bold;
  };
</style>
