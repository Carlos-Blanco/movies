<script>
const API_KEY = 'k_79orqyvt';
const API_URL = `https://imdb-api.com/en/API`;
export default {
  name: "MovieDetail",
  props: ["id"],
  data() {
    return {
      movie: ""
    }
  },
  methods: {
    movieInfo(id) {
      fetch(API_URL + `/Title/${API_KEY}/` + id)
        .then(res => res.json())
        .then(movie => {
          this.movie = movie;
        });
    }
  },
  mounted() {
    this.movieInfo(this.id);
  }
}
</script>

<template>
  <div class="poster-wrapper">
    <router-link :to="{ name: 'Home' }"></router-link>
    <img :src="movie.image" :alt="movie.title">
    <p class="movie__content-rating">{{ movie.contentRating }}</p>
    <div class="movie__info">
      <h1>{{ movie.title }}</h1>
      <div class="flex-wrapper">
        <div>
          <p class="rating">{{ movie.imDbRating }}</p>
        </div>
        <div>
          <p class="runtime">{{ movie.runtimeStr }}</p>
        </div>
        <div>
          <p class="year">{{ movie.year }}</p>
        </div>
      </div>
    </div>
  </div>
  <article>
    <p>{{ movie.plot }}</p>
    <p class="title">DIRECTOR</p>
    <p>{{ movie.directors }}</p>
    <p class="title">AWARDS</p>
    <p>{{ movie.awards }}</p>
    <h3>Movie Cast</h3>
    <section class="actors">
      <div v-for="actor in movie.actorList">
        <router-link :to="{ name: 'ActorDetail', params: { id: actor.id } }">
          <img :src="actor.image" :alt="actor.name">
          <p>{{ actor.name }}</p>
        </router-link>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
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
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
    text-align: left;
  }
  .movie__content-rating {
    position: absolute;
    top: 20px;
    right: 0;
    padding: 5px;
    border-radius: 5px 0 0 5px;
    z-index: 2;
    background: #bd0d2e;
    font-size: 0.8rem;
  }
  .movie__info {
    position: absolute;
    bottom: 0;
    left: 20px;
    z-index: 2;
    & > .flex-wrapper {
      width: calc(100vw - 40px);
      gap: 2rem;
    }
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
      &.runtime {
        &:before {
          content: '';
          width: 20px;
          height: 20px;
          background: url(/src/assets/images/icons/clock.svg) no-repeat;
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
article {
  padding: 20px;
  p {
    font-size: 0.8rem;
    margin: 5px;
    &.title {
      font-size: 0.6rem;
      margin-bottom: 0;
      margin-top: 10px;
      color: #fff;
      font-variation-settings: 'wght' 600;
    }
  }
  h3 {
    color:#fff;
    font-variation-settings: 'wght' 600;
    margin: 1rem 0 0.5rem;
  }
}
.actors {
  gap: 10px;
  scroll-snap-type: x proximity;
  overflow-y: scroll;
  display: flex;
  div {
    flex: 1;
    width: 70px;
    scroll-snap-align: start;
    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 50px;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 0.6rem;
      text-align: center;
    }
  }
}
</style>
