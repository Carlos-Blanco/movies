import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Is71HrYECt5NiCeV0l4ZN-JSV5g1j60",
  authDomain: "movies-b204a.firebaseapp.com",
  projectId: "movies-b204a",
  storageBucket: "movies-b204a.appspot.com",
  messagingSenderId: "125022152651",
  appId: "1:125022152651:web:5b00b3a099206757e0784e",
  measurementId: "G-8G495CWB2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createApp(App).use(createPinia()).use(router).mount('#app')
