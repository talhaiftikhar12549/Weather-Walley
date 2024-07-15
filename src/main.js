// import './assets/style.css'
import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store/store"
const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(store)
app.mount('#app')
