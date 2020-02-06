<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"main_app",
  watch: {
      '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Your Website'
        },
         immediate: true
      }
    },
}
</script>

<style>

/* Import Inter fonts  */
@import url('https://rsms.me/inter/inter.css');

*{
  box-sizing: border-box;
  margin: 0 auto;

}
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
