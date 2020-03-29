<template>
  <div class="blog">
    <Navigation :showSearch="true"/>
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
  },
  created(){
    this.$store.dispatch('getAllBlogPost')
  }
};
</script>



<style scoped>

</style>






