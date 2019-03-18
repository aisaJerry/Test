import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    pageCount:0,
    viewHistory: [],
  },
  mutations:{
    increment:state => state.pageCount ++,
    decrement:state => state.pageCount --,
    addHistory: (state, path) => {
      state.viewHistory.push(path);
    }
  }
})