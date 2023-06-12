<script>

import { useMoviesStore } from '../stores/MoviesStore'

export default {
  setup () {
    const movieStore = useMoviesStore()

    return { movieStore }
  }
}
</script>

<template>
  <h1>Watchlist Movies</h1>
  <p>{{ movieStore.title }}</p>
</template>

<style scoped lang="scss">

</style>
