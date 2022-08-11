<script>
const API_KEY = '17cdde2817ad9091721cd65fdeb37d58';
const API_URL = 'https://api.themoviedb.org/3/';
export default {
  name: "ActorDetail",
  props: ["actorid"],
  data() {
    return {
      actor: ""
    }
  },
  methods: {
    actorInfo(actorid) {
      fetch(API_URL + `person/${actorid}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(person => {
          this.actor = person;
        });
    },
    getImageUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    }
  },
  mounted() {
    this.actorInfo(this.actorid);
  }
}
</script>

<template>
  <div class="actor-profile">
    <img :src="getImageUrl(actor.profile_path)" :alt="actor.name">
    <p>{{ actor.name }}</p>
  </div>
  <article>
    <p>{{ actor.biography }}</p>
    <h3>Best Movies</h3>
    <div class="knownfor-movies">

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
  background: url(/src/assets/arrow-left.svg) no-repeat;
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
