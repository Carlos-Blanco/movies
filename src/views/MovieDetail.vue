<script>
const API_KEY = 'k_79orqyvt';
const API_URL = `https://imdb-api.com/en/API`;
export default {
  name: "MovieDetail",
  props: ["id"],
  data() {
    return {
      movieInfo: "",
      poster: "",
      rating: "",
      wiki: ""
    }
  },
  methods: {
    movieDetail(id) {
      fetch(API_URL + `/Fullcast/${API_KEY}/` + id)
        .then(res => res.json())
        .then(cast => {
          this.movieInfo = cast;
        });
    },
    moviePoster(id) {
      fetch(API_URL + `/Posters/${API_KEY}/` + id)
        .then(res => res.json())
        .then(poster => {
          this.poster = poster;
          document.getElementById("posterWrapper").src = poster.posters[0].link;
        });
    },
    movieRating(id) {
      fetch(API_URL + `/Ratings/${API_KEY}/` + id)
        .then(res => res.json())
        .then(rating => {
          this.rating = rating;
        });
    },
    movieWiki(id) {
      fetch(API_URL + `/Wikipedia/${API_KEY}/` + id)
        .then(res => res.json())
        .then(wiki => {
          this.wiki = wiki;
          document.getElementById("descriptionWrapper").innerHTML = wiki.plotShort.html;
        });
    }
  },
  mounted() {
    this.movieDetail(this.id);
    this.moviePoster(this.id);
    this.movieRating(this.id);
    this.movieWiki(this.id);
  }
}
</script>

<template>
  <div class="poster-wrapper">
    <router-link :to="{ name: 'Home'}"></router-link>
    <img id="posterWrapper" :alt="movieInfo.title">
    <div class="movie__info">
      <h1>{{ movieInfo.title }}</h1>
      <div class="flex-wrapper">
        <div class="flex">
          <p class="rating">{{ rating.imDb }}</p>
        </div>
        <div class="flex">
          <p class="year">{{ movieInfo.year }}</p>
        </div>
      </div>
    </div>
  </div>
  <div id="descriptionWrapper"></div>
  <section class="flex">
    <div v-for="backdrop in poster.backdrops">
      <img :src="backdrop.link">
    </div>
  </section>
  <h3>Actors</h3>
  <section class="flex">
    <div v-for="actor in movieInfo.actors">
      <img :src="actor.image" :alt="actor.title">
      <p>{{ actor.name }} as {{actor.asCharacter}}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  & > div{
    flex: 1;
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
    height: 40vh;
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
    background: url(/src/assets/images/icons/arrow-left.svg) no-repeat;
    background-size: contain;
    z-index: 2;
  }
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
  }
  .movie__info {
    position: absolute;
    bottom: 0;
    left: 20px;
    z-index: 2;
    p {
      font-size: 0.9rem;
      color: #ccc;
      margin: 10px 0;
      &.rating {
        &:before {
          content: '';
          width: 20px;
          height: 20px;
          background: url(/src/assets/images/icons/star.svg) no-repeat;
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
          background: url(/src/assets/images/icons/calendar.svg) no-repeat;
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
</style>
