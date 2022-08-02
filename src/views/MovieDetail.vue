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
  <router-link :to="{ name: 'Home'}">Home</router-link>
  <h1>Movie Detail</h1>
  <img id="posterWrapper" src="" :alt="movieInfo.title">
  <p>{{ movieInfo.title }}</p>
  <p>{{ movieInfo.year }}</p>
  <p>{{ rating.imDb }}</p>
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
img {
  width: 150px;
  height: 222px;
  object-fit: cover;
}
</style>
