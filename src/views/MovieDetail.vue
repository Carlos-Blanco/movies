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
          this.movieInfo = data;
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
