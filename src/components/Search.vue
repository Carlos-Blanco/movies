<script>
  const URL = 'https://imdb-api.com/en/API/Search/k_79orqyvt/';
  export default {
    data() {
      return {
        movie: ""
      }
    },
    computed: {
      searchMovie() {
        fetch(URL + this.movie)
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
  <button @click="searchMovie">Search</button>
</template>

<style scoped>
</style>
