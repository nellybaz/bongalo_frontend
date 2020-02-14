import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication.js';
import header from './modules/header.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters:{
    isMobile: (state) => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  },
  actions: {
  },
  mutations: {
  },
  modules: {
    authentication,
    header
  }
})
