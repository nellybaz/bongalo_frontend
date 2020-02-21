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

</style>






