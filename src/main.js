import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#0a4b74',
    secondary: '#3e6bef'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
