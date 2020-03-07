import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication.js';
import listing from './modules/listing.js';
import header from './modules/header.js';
import apartment from './modules/apartment';

// import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'

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
    header,
    listing,
    apartment
  },
})
