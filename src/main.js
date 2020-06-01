import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import VModal from "vue-js-modal";
import VueClipboard from "vue-clipboard2";
// import DisableAutocomplete from 'vue-disable-autocomplete';

import Notifications from "vue-notification";

const FIREBASE_API_KEY = process.env.VUE_APP_FIREBASE_API_KEY;

Vue.config.productionTip = false;

Vue.use(Notifications);
Vue.use(VModal);
Vue.use(VueClipboard);
// Vue.use(DisableAutocomplete);

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: FIREBASE_API_KEY,
      authDomain: "bongalo-37967.firebaseapp.com",
      databaseURL: "https://bongalo-37967.firebaseio.com",
      projectId: "bongalo-37967",
      storageBucket: "bongalo-37967.appspot.com",
      messagingSenderId: "697037792945",
      appId: "1:697037792945:web:da4a09300c30716f1e6490",
      measurementId: "G-T4L100Y5CZ",
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  },
}).$mount("#app");

// {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: "alushare.firebaseapp.com",
//   databaseURL: "https://alushare.firebaseio.com",
//   projectId: "alushare",
//   storageBucket: "alushare.appspot.com",
//   messagingSenderId: "175061569890",
//   appId: "1:175061569890:web:6b3f85867ee185ebba9c3b",
//   measurementId: "G-7KQMKMN749"
// };
