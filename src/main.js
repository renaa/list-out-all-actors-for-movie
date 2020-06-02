import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import axios from 'axios'
import {API_KEY} from './secret.js'

//https://rapidapi.com/hmerritt/api/imdb-internet-movie-database-unofficial?endpoint=apiendpoint_87760ea6-7bd8-4a18-9339-8a7f7dc681cc
axios.defaults.headers.common['x-rapidapi-host'] = 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
axios.defaults.headers.common['x-rapidapi-key'] = API_KEY
axios.defaults.headers.common['useQueryString'] = true

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')