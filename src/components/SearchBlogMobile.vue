<template>
  <!-- <div>
  <h1>Nak</h1>
</div> -->
  <div
    @click="showOutline = true"
    @mouseleave="showOutline = true"
    :style="getClass()"
    v-if="showSearch == true"
    class="search-div"
  >
    <i class="fa fa-search" aria-hidden="true"></i>
    <input
      @keyup="searchBlog"
      placeholder="Type for anything to search for tag or topics"
      type="text"
      v-model="searchWord"
      class="search-input"
    />
  </div>
</template>

<script>
export default {
  //   name: "app_footer",
  data: function () {
    return {
      showOutline: false,
      email: "",
      emailErrorMessage: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .search-div {
    // border: 1px solid red !important;
    // display: none !important;
  }
  .search-input {
    border: 1px solid red !important;
  }
}

.content-item {
  h4 {
    font-weight: bold;
    font-size: 20px;
    margin-top: 30px;
    color: #404040;
  }

  ul {
    padding: 0;
    li {
      list-style: none;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 24px;
      color: #6a6a6a;

      a {
        text-decoration: none;
        color: #6a6a6a;
      }
    }
  }
}
</style>
