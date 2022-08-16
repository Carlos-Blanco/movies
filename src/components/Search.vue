<script>
  const API_KEY = '17cdde2817ad9091721cd65fdeb37d58';
  const API_URL = 'https://api.themoviedb.org/3/';
  export default {
    data() {
      return {
        movieSearch: "",
        movies: [],
        trendingMovies: [],
        nowPlayingMovies: []
      }
    },
    methods: {
      trending() {
        fetch(API_URL + `trending/movie/week?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(trending => {
          this.trendingMovies = trending.results;
        });
      },
      nowPlaying() {
        fetch(API_URL + `movie/now_playing?api_key=${API_KEY}`)
          .then(res => res.json())
          .then(nowPlaying => {
            this.nowPlayingMovies = nowPlaying.results;
          });
      },
      searchMovie() {
        fetch(API_URL + `search/movie?api_key=${API_KEY}&query=` + this.movieSearch)
          .then(res => res.json())
          .then(data => {
            this.movies = data.results;
            document.getElementById("trendingMoviesWrapper").style.display = 'none';
            document.getElementById("playingMoviesWrapper").style.display = 'none';
          });
      },
      getImageUrl(path) {
        return `https://image.tmdb.org/t/p/w500${path}`;
      },
      getRate(rate) {
        return rate.toFixed(1);
      }
    },
    mounted() {
      this.trending();
      this.nowPlaying();
      window.scrollTo(0, 0);
    }
  }
</script>

<template>
  <div class="search-wrapper">
    <input type="text" v-model="movieSearch" @change="searchMovie()" />
  </div>
  <div id="trendingMoviesWrapper">
    <h2>Popular Movies</h2>
    <main class="search__home-movies">
      <article v-for="trendingmovie in trendingMovies">
        <router-link :to="{ name: 'MovieDetail', params: { movieid: trendingmovie.id } }">
          <span>{{ getRate(trendingmovie.vote_average) }}</span>
          <img :src="getImageUrl(trendingmovie.poster_path)" :alt="trendingmovie.title">
          <p>{{ trendingmovie.title }}</p>
        </router-link>
      </article>
    </main>
  </div>
  <div id="playingMoviesWrapper">
    <h2>On Cinemas</h2>
    <main class="search__home-movies">
      <article v-for="nowPlayingMovie in nowPlayingMovies">
        <router-link :to="{ name: 'MovieDetail', params: { movieid: nowPlayingMovie.id } }">
          <span>{{ getRate(nowPlayingMovie.vote_average) }}</span>
          <img :src="getImageUrl(nowPlayingMovie.poster_path)" :alt="nowPlayingMovie.title">
          <p>{{ nowPlayingMovie.title }}</p>
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
  .search-wrapper {
    display: flex;
    max-width: 500px;
    margin: 30px auto 0;
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
  .search__home-movies {
    display: flex;
    gap: 10px;
    scroll-snap-type: x proximity;
    overflow-y: scroll;
    flex-wrap: nowrap;
  }
  article {
    flex: 1;
    position: relative;
    span {
      position: absolute;
      top: 20px;
      right: 0;
      display: inline-block;
      background: #f71432;
      color: white;
      border-radius: 10px 0 0 10px;
      padding: 5px 5px 5px 8px;
      font-size: 0.8rem;
    }
    p {
      text-align: center;
      color: #ccc;
      font-variation-settings: 'wght' 600;
      font-size: 0.9rem;
      margin-top: 0.7rem;
    }
  }
  img {
    width: 140px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    border-radius: 20px;
  }
  input {
    height: 50px;
    margin-bottom: 20px;
    display: block;
    width: 100%;
  }
  input[type="text"] {
    border-radius: var(--border-radius);
    background: white;
    color: #595959;
    padding: 0 1rem;
    border: none;
    font-size: 1rem;
  }

</style>
