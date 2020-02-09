<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer';

export default {
  name:"main_app",
  components:{
    Footer,
  },
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

</style>
