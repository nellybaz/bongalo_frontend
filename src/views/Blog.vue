<template>
  <div class="blog">
    <Navigation />
    <Tags />
    <PopularPosts />
    <RecentPosts />
  </div>
</template>


<script>
import Navigation from "../components/Blog/Navigation";
import Tags from "../components/Blog/Tags";
import PopularPosts from "../components/Blog/PopularPosts";
import RecentPosts from "../components/Blog/RecentPosts";

export default {
  name: "blog",
  components: {
    Navigation,
    Tags,
    PopularPosts,
    RecentPosts
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






