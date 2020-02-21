import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication.js';
import header from './modules/header.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters:{
    isMobile: (state) => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
    isSafari: (state) => (navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1),
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
