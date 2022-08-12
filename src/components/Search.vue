<script>
  const API_KEY = '17cdde2817ad9091721cd65fdeb37d58';
  const API_URL = 'https://api.themoviedb.org/3/';
  export default {
    data() {
      return {
        movieSearch: "",
        movies: [],
        trendingMovies: []
      }
    },
    methods: {
      trending() {
        fetch(API_URL + `/trending/movie/week?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(trending => {
          this.trendingMovies = trending.results;
        });
      },
      searchMovie() {
        fetch(API_URL + `search/movie?api_key=${API_KEY}&query=` + this.movieSearch)
          .then(res => res.json())
          .then(data => {
            this.movies = data.results;
            document.getElementById("trendingMoviesWrapper").style.display = 'none';;
          });
      },
      getImageUrl(path) {
        return `https://image.tmdb.org/t/p/w500${path}`;
      }
    },
    mounted() {
      this.trending();
    }
  }
</script>

<template>
  <h1>The Movies App</h1>
  <div class="search-wrapper">
    <input type="text" v-model="movieSearch" />
    <button @click="searchMovie">SEARCH</button>
  </div>
  <div>
    <h2>Weekly Trending Movies</h2>
    <main id="trendingMoviesWrapper">
      <article v-for="trendingmovie in trendingMovies">
        <router-link :to="{ name: 'MovieDetail', params: { movieid: trendingmovie.id } }">
          <img :src="getImageUrl(trendingmovie.poster_path)" :alt="trendingmovie.title">
          <p>{{ trendingmovie.title }}</p>
        </router-link>
      </article>
    </main>
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
  h2 {
    font-size: 1.1rem;
    margin-left: 1rem;
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
      font-size: 0.8rem;
      margin-top: 0.5rem;
    }
  }
  img {
    width: 100px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
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
