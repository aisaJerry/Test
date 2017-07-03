import Vue from 'Vue';
import VueRouter from 'vue-router';
import routes from './router.js'

Vue.use(VueRouter)

new Vue({
  router:new VueRouter({routes}),
  el:'#app'
})