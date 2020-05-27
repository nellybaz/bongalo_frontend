<template>
  <div class="blog">
    <Navigation :showSearch="true" />
    <Tags />
    <div v-if="getAllBlogPost().length > 0">
      <PopularPosts />
      <RecentPosts />
    </div>
    <div v-else class="no-items-div">
      <h2>
        No active blog post
      </h2>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Blog/Navigation";
import Tags from "../components/Blog/Tags";
import PopularPosts from "../components/Blog/PopularPosts";
import RecentPosts from "../components/Blog/RecentPosts";
import { mapGetters } from "vuex";

export default {
  name: "blog",
  components: {
    Navigation,
    Tags,
    PopularPosts,
    RecentPosts,
  },
  methods: {
    ...mapGetters(["getAllBlogPost"]),
  },
  created() {
    this.$store.dispatch("getAllBlogPost");
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  *{
    // border: 1px solid red;
  }
}

.no-items-div {
  padding-left: 20%;
  display: flex;
  place-items: center;
  width: 100%;
  height: 200px;
}
</style>
