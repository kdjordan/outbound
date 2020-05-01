import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import store from './store/store.js'

import LandingPage from './components/LandingPage.vue'
import Welcome from './components/Welcome.vue'
import Home1 from './components/homes/home1.vue'
import Home2 from './components/homes/home2.vue'
import Home3 from './components/homes/home3.vue'
import Home4 from './components/homes/home4.vue'


Vue.use(Vuerouter)
Vue.use(store)

const routes = [
  {path: '/', component: LandingPage},
  {path: '/welcome', component: Welcome},
  {path: '/home1', component: Home1},
  {path: '/home2', component: Home2},
  {path: '/home3', component: Home3},
  {path: '/home4', component: Home4}
]

const router = new Vuerouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
