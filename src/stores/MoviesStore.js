import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('moviesStore', {
  state: () => ({
    movies: [
      {id: 1},
      {id: 256}
    ],
    name: 'Carlos'
  })
})