<script>
const API_KEY = 'k_79orqyvt';
const API_URL = `https://imdb-api.com/en/API`;
export default {
  name: "ActorDetail",
  props: ["actorid", "movieid"],
  data() {
    return {
      actor: "",
      movieid: this.movieid
    }
  },
  methods: {
    actorInfo(actorid) {
      fetch(API_URL + `/Name/${API_KEY}/` + actorid)
        .then(res => res.json())
        .then(actor => {
          this.actor = actor;
        });
    }
  },
  mounted() {
    this.actorInfo(this.actorid);
  }
}
</script>

<template>
  <router-link :to="{ name: 'MovieDetail', params: { movieid: movieid } }"></router-link>
  <img :src="actor.image" :alt="actor.name">
  <p>{{ actor.name }}</p>
  <p>{{ actor.summary }}</p>
</template>

<style scoped lang="scss">
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
</style>
