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
  <router-link :to="{ name: 'MovieDetail', params: { movieid: movieid } }" class="back-button"></router-link>
  <div class="actor-profile">
    <img :src="actor.image" :alt="actor.name">
    <p>{{ actor.name }}</p>
  </div>
  <article>
    <p>{{ actor.summary }}</p>
    <h3>Best Movies</h3>
    <div class="knownfor-movies">
      <div v-for="movie in actor.knownFor">
        <router-link :to="{ name: 'MovieDetail', params: { movieid: movie.id } }">
          <img :src="movie.image" :alt="movie.title">
          <p>{{ movie.title }}</p>
        </router-link>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  background: url(/src/assets/images/icons/arrow-left.svg) no-repeat;
  background-size: contain;
  z-index: 2;
}
.knownfor-movies {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: row;
  div {
    flex: 1;
  }
  img {
    width: 150px;
    height: 222px;
    object-fit: cover;
    display: block;
    margin: 1rem auto;
  }
  p {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5rem auto;
  }
}
article {
  padding: 20px;
  p {
    font-size: 0.8rem;
    margin: 5px;
  }
  h3 {
    color: #fff;
    font-variation-settings: 'wght' 600;
    margin: 1rem 0 0.5rem;
  }
  img {
    height: auto;
    object-fit: cover;
    display: block;
  }
}
.actor-profile {
  margin-top: 2rem;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }

  p {
    text-align: center;
    font-size: 1rem;
    text-align: center;
  }
}
</style>
