import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerMap.js'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: new VueRouter({routes,})
})
