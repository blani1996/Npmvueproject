import Vue from 'vue'
import App from './App.vue'
import Levan from './Levan.vue'

Vue.component('Levan', Levan);

new Vue({
  el: '#app',
  render: h => h(App)
})
