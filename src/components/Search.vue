<script>
  const API_KEY = '17cdde2817ad9091721cd65fdeb37d58';
  const API_URL = 'https://api.themoviedb.org/3/';
  export default {
    data() {
      return {
        movieSearch: "",
        movies: []
      }
    },
    methods: {
      searchMovie() {
        fetch(API_URL + `search/movie?api_key=${API_KEY}&query=` + this.movieSearch)
        .then(res => res.json())
        .then(data => {
          this.movies = data.results;
        });
      },
      getImageUrl(path) {
        return `https://image.tmdb.org/t/p/w300${path}`;
      }
    }
  }
</script>

<template>
  <h1>The Movies App</h1>
  <div class="search-wrapper">
    <input type="text" v-model="movieSearch" />
    <button @click="searchMovie">SEARCH</button>
  </div>
  <main>
    <article v-for="movie in movies" :id="movie.id">
      <router-link :to="{ name: 'MovieDetail', params: { movieid: movie.id } }">
        <img :src="getImageUrl(movie.poster_path)" :alt="movie.title">
        <p>{{ movie.title }}</p>
      </router-link>
    </article>
  </main>

</template>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }
  .search-wrapper {
    display: flex;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  main {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  article {
    flex: 1;
    p {
      text-align: center;
      color: #ccc;
      font-variation-settings: 'wght' 600;
    }
  }
  img {
    width: 150px;
    height: 222px;
    object-fit: cover;
    display: block;
    margin: 1rem auto;
  }
  input, button {
    height: 40px;
    margin-bottom: 20px;
    display: block;
    width: 100%;
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
    font-weight: bold;
    @media (min-width: 768px) {
      margin-left: 1rem;
      max-width: 150px;
    }
  }
</style>
