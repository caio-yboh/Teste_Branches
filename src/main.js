import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store/store'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    if(binding.modifiers.blink) {
      setTimeout(() => {
        setInterval(() => {
          binding.value.currentColor === binding.value.secondColor ?
                                         binding.value.currentColor = binding.value.mainColor :
                                         binding.value.currentColor = binding.value.secondColor
          if(binding.arg === 'background') {
            el.style.backgroundColor = binding.value.currentColor
          } else{
            el.style.color = binding.value.currentColor
          }
        }, binding.value.delay)
      }, binding.value.delay)
    } else {
      setTimeout(() => {
        if(binding.arg === 'background') {
          el.style.backgroundColor = binding.value.mainColor
        } else{
          el.style.color = binding.value.mainColor
        }
      }, binding.value.delay)
    }
  }
})

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase()
})

/* Vue-Resource */
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejscourse-70eef.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  next(response => {
    response.json = () => {
      return response.body;
    }
  });
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
