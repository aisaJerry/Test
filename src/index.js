import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './routerMap.js'
import store from './store/store.js'

Vue.use(VueRouter, Vuex);

new Vue({
  el: '#app',
  router: new VueRouter({routes,})
})
