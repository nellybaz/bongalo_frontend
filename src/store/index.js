import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication.js';
import header from './modules/header.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication,
  }
})
