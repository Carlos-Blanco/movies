<script>
const API_KEY = '17cdde2817ad9091721cd65fdeb37d58';
const API_URL = 'https://api.themoviedb.org/3/';
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
      fetch(API_URL + `person/${actorid}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(person => {
          this.actor = person;
          console.log(this.actor);
        });
    },
    getImageUrl(path) {
      if(path) {
        return `https://image.tmdb.org/t/p/w500${path}`;
      } else {
        return `/src/assets/no-photo.jpg`;
      }
    }
  },
  mounted() {
    this.actorInfo(this.actorid);
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <router-link :to="{ name: 'MovieDetail', params: { movieid: movieid } }" class="btn-back"></router-link>
  <div class="actor-profile">
    <img :src="getImageUrl(actor.profile_path)" :alt="actor.name">
    <div>
      <h1>{{ actor.name }}</h1>
      <p><strong>Birth:</strong> {{ actor.birthday }} - {{ actor.place_of_birth }}</p>
      <p v-if="actor.deathday"><strong>Death:</strong> {{ actor.deathday }}</p>
    </div>
  </div>
  <article v-if="actor.biography">
    <h2>Bio</h2>
    <p>{{ actor.biography }}</p>
  </article>
</template>

<style scoped lang="scss">
article {
  padding: 20px;
  h2 {
    margin-bottom: 0.5rem;
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
  margin-top: 4.5rem;
  display: flex;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    margin: 0 1rem;
  }
  h1 {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    strong {
      font-variation-settings: 'wght' 600;
    }
  }
}
</style>
