import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

// Vue.directive('changecolor', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

// Vue.filter('Upperall', function(value){
//     return value.toUpperCase(); // Addd Uppercase By Global
// });

Vue.filter('limit', function(value){
    return value.slice(0,100) + '...';
});


Vue.directive('theme', {
  bind(el, binding, vnode) {
    console.log(binding);
    if(binding.value == 'theme') {
      el.style.maxWidth = '500px';
    } if (binding.arg == 'column') {
      el.style.background = 'red';
    }
  }
});


// Vue.component('Levan', Levan);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
