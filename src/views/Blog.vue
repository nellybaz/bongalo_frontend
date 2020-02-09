<template>
  <div class="blog">
    <Navigation />
    <Tags />
    <PopularPosts />
  </div>
</template>


<script>
import Navigation from "../components/Blog/Navigation";
import Tags from "../components/Blog/Tags";
import PopularPosts from "../components/Blog/PopularPosts";

export default {
  name: "blog",
  components: {
    Navigation,
    Tags,
    PopularPosts
  }
};
</script>



<style scoped>
@import url("https://rsms.me/inter/inter.css");

html {
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}
</style>






