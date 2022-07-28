import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const URL = 'https://imdb-api.com/en/API/Search/k_79orqyvt/Rear Window';

fetch(URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  });
