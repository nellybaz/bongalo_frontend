<template>
  <div class="tag">
    <nav>
      <ul>
        <li>
          <strong>Tags:</strong>
        </li>
        <li @click="filterBlog('')" class="tag-item">Holiday Trip</li>
        <li @click="filterBlog('tourism')" class="tag-item">Tourism</li>
        <li @click="filterBlog('food')" class="tag-item">Food</li>
        <li @click="filterBlog('food')" class="tag-item">Night Life</li>
        <li @click="filterBlog('coffee')" class="tag-item">Coffee</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    filterBlog(tag) {
      var newBlog = [];
      var blogs = this.$store.getters.getAllBlogPost;
      for (var item in blogs) {
        if (blogs[item]["tag"].includes(tag)) {
          newBlog.push(blogs[item]);
        }
      }
      window.console.log(newBlog);
      this.$store.dispatch("setBlog", newBlog);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    max-width: 100% !important;
    margin: auto !important;
    padding: 0 !important;
  }

  .tag {
    position: absolute;
    top: 120px !important;

    li {
      float: left !important;
      padding: 5px 13px !important;
      text-align: left !important;
      font-size: 10px !important;
    }
  }
}
.tag {
  height: 64px;
  padding: 0 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom: 1px solid #f2f2f2;
}
li {
  color: #808080;
  font-size: 14px;
  line-height: 17px;
  margin-right: 50px;
  width: auto;
  list-style: none;
}
.tag-item {
  cursor: pointer;
}
ul {
  display: flex;
  width: 100%;
}
</style>
