import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('moviesStore', {
  state: () => ({
    title: 'The man who shot Liberty Valance'
  })
})