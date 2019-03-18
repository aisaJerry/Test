import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './routerMap.js'
import store from './store/store.js'

Vue.use(VueRouter, Vuex);

const router = new VueRouter({routes,});

router.beforeEach((to, from, next) => {
  store.commit('addHistory', to.path)
  next();
})

new Vue({
  el: '#app',
  router,
})
