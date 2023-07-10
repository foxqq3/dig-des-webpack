import Vue from 'vue';
import App from './App.vue';
import '@/scss/index.scss';
import router from './router'

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount('#app');
