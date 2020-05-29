<template>
  <div id="app">
    <Login></Login>
    <notifications :duration="5000" position="top right" group="general" />
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from './components/Footer';
import Login from './components/SignInModal';

export default {
  name:"main_app",
  components:{
    Footer,
    Login
  },
  computed: mapGetters(['getModalState']),
  watch: {
      '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Bongalo'
        },
         immediate: true
      }
    },
}
</script>

<style>

/* Import Inter fonts  */
@import url('https://rsms.me/inter/inter.css');

html{
  scroll-behavior: smooth;
}
*{
  box-sizing: border-box;
  margin: 0;

}
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
}

</style>
