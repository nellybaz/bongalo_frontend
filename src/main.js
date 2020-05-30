import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import VModal from 'vue-js-modal'
import VueClipboard from 'vue-clipboard2'
// import DisableAutocomplete from 'vue-disable-autocomplete';


 


import Notifications from 'vue-notification'


const FIREBASE_API_KEY = process.env.VUE_APP_FIREBASE_API_KEY

Vue.config.productionTip = false

Vue.use(Notifications)
Vue.use(VModal)
Vue.use(VueClipboard)
// Vue.use(DisableAutocomplete);


new Vue({
  router,
  store,
  render: h => h(App),
  created(){
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: FIREBASE_API_KEY,
        authDomain: "alushare.firebaseapp.com",
        databaseURL: "https://alushare.firebaseio.com",
        projectId: "alushare",
        storageBucket: "alushare.appspot.com",
        messagingSenderId: "175061569890",
        appId: "1:175061569890:web:6b3f85867ee185ebba9c3b",
        measurementId: "G-7KQMKMN749"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
  }
}).$mount('#app')
