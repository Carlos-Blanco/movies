<script>
const API_KEY = '17cdde2817ad9091721cd65fdeb37d58';
const API_URL = 'https://api.themoviedb.org/3/';
export default {
  name: "MovieDetail",
  props: ["movieid"],
  data() {
    return {
      movie: "",
      cast: "",
      similarMovies: ""
    }
  },
  methods: {
    movieInfo(movieid) {
      fetch(API_URL + `movie/${movieid}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(movie => {
          this.movie = movie;
        });
      fetch(API_URL + `movie/${movieid}/credits?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(movieCredits => {
          this.cast = movieCredits.cast;
        });
      fetch(API_URL + `movie/${movieid}/similar?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(similar => {
          this.similarMovies = similar.results;
        });
    },
    getImageUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    getRate(rate) {
      return rate.toFixed(1);
    },
    getYear(date) {
      const year = date.substring(0, 4);
      return year;
    },
    getTime(time) {
      var num = time;
      var hours = (num / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + " h " + rminutes + " m";
    }
  },
  mounted() {
    this.movieInfo(this.movieid);
  }
}
</script>

<template>
  <div class="poster-wrapper" v-if="movie">
    <router-link :to="{ name: 'Home' }"></router-link>
    <img :src="getImageUrl(movie.poster_path)" :alt="movie.title">
    <p class="movie__content-rating" v-if="movie.contentRating">{{ movie.contentRating }}</p>
    <div class="movie__info">
      <h1>{{ movie.title }}</h1>
      <div class="flex-wrapper">
        <div>
          <p class="rating">{{ getRate(movie.vote_average) }}</p>
        </div>
        <div>
          <p class="runtime">{{ getTime(movie.runtime) }}</p>
        </div>
        <div>
          <p class="year">{{ getYear(movie.release_date) }}</p>
        </div>
      </div>
    </div>
  </div>
  <main>
    <p>{{ movie.overview }}</p>
    <h2>Top Cast</h2>
    <div class="actors">
      <div v-for="actor in cast.slice(0, 10)" :id="actor.id">
        <router-link :to="{ name: 'ActorDetail', params: { actorid: actor.id, movieid: movie.id } }">
          <img :src="getImageUrl(actor.profile_path)" :alt="actor.name">
          <p>{{ actor.name }}</p>
        </router-link>
      </div>
    </div>
    <h2>Similar Movies</h2>
    <div class="similar-movies">
      <article v-for="similarmovie in similarMovies">
        <router-link :to="{ name: 'MovieDetail', params: { movieid: similarmovie.id } }">
          <span>{{ getRate(similarmovie.vote_average) }}</span>
          <img :src="getImageUrl(similarmovie.poster_path)" :alt="similarmovie.title">
          <p>{{ similarmovie.title }}</p>
        </router-link>
      </article>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  & > p {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
.poster-wrapper {
  position: relative;
  &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40vh;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0), #242424);
  }
  img {
    width: 100vw;
    height: 50vh;
    object-fit: cover;
    object-position: 0 -15vh;
    display: block;
  }
  a {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 30px;
    height: 30px;
    background: url(/src/assets/arrow-left.svg) no-repeat;
    background-size: contain;
    z-index: 2;
  }
  h1 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    text-align: left;
  }

  .movie__info {
    position: absolute;
    bottom: 0;
    left: 20px;
    z-index: 2;
    & > .flex-wrapper {
      width: calc(100vw - 40px);
      gap: 3rem;
    }
    p {
      font-size: 1rem;
      color: #ccc;
      margin: 10px 0;
      &.rating {
        &:before {
          content: '';
          width: 20px;
          height: 20px;
          background: url(/src/assets/star.svg) no-repeat;
          background-size: contain;
          display: inline-block;
          position: relative;
          top: 4px;
          margin-right: 5px;
        }
      }
      &.year {
        &:before {
          content: '';
          width: 20px;
          height: 20px;
          background: url(/src/assets/calendar.svg) no-repeat;
          background-size: contain;
          display: inline-block;
          position: relative;
          top: 4px;
          margin-right: 5px;
        }
      }
      &.runtime {
        &:before {
          content: '';
          width: 20px;
          height: 20px;
          background: url(/src/assets/clock.svg) no-repeat;
          background-size: contain;
          display: inline-block;
          position: relative;
          top: 4px;
          margin-right: 5px;
        }
      }
    }
  }
}
.actors {
  gap: 10px;
  scroll-snap-type: x proximity;
  overflow-y: scroll;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
  div {
    flex: 1;
    width: 90px;
    scroll-snap-align: start;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50px;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 0.6rem;
      text-align: center;
      color: #ccc;
      margin-top: 0.3rem;
    }
  }
}
.similar-movies {
  display: flex;
  gap: 10px;
  scroll-snap-type: x proximity;
  overflow-y: scroll;
  flex-wrap: nowrap;
  margin-top: 1rem;
  article {
    flex: 1;
    position: relative;
    span {
      position: absolute;
      top: 10px;
      right: 0;
      display: inline-block;
      background: #f71432;
      color: white;
      border-radius: 10px 0 0 10px;
      padding: 5px;
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
    img {
      width: 140px;
      object-fit: cover;
      display: block;
      margin: 0 auto;
      border-radius: 20px;
    }
  }
}


</style>
