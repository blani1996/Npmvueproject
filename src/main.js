import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);


Vue.directive('changecolor', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
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
  render: h => h(App)
})
