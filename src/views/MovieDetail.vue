<script>
const API_KEY = 'k_79orqyvt';
const API_URL = `https://imdb-api.com/en/API`;
export default {
  name: "MovieDetail",
  props: ["id"],
  data() {
    return {
      movieInfo: ""
    }
  },
  methods: {
    movieDetail(id) {
      fetch(API_URL + `/Fullcast/${API_KEY}/` + id)
        .then(res => res.json())
        .then(data => {
          this.movie = data;
          console.log(data);
        });
    }
  },
  mounted() {
    this.movieDetail(this.id);
  }
}
</script>

<template>
  <router-link :to="{ name: 'Home'}">Home</router-link>
    <h1>Movie Detail</h1>
    {{ movieInfo }}
</template>

<style scoped>

</style>
