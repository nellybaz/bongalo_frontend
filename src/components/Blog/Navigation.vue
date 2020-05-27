<template>
  <div class="Blog-nav">
    <header class="tm-header">
      <div class="logo-blg">
        <a href="/">
          <img src="../../assets/images/bongalo-logo.png" alt />
        </a>
        <ul v-if="isBlog" class="blg">
          Blog
        </ul>
      </div>

      <div
        @click="showOutline = true"
        @mouseleave="showOutline = false"
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

      <SearchBlogMobile></SearchBlogMobile>
      <NavLink :isDark="true"></NavLink>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavLink from "../../components/NavLink";
import SearchBlogMobile from "../../components/SearchBlogMobile";

export default {
  components: {
    NavLink,
    SearchBlogMobile,
  },
  props: {
    isBlog: {
      type: Boolean,
    },
    showSearch: {
      type: Boolean,
    },
  },
  data: function () {
    return {
      showOutline: false,
      searchWord: "",
    };
  },

  methods: {
    searchBlog() {
      var newBlog = [];
      var blogs = this.$store.getters.getAllBlogPost;
      for (var item in blogs) {
        if (
          blogs[item]["title"]
            .toLowerCase()
            .includes(this.searchWord.toLowerCase()) ||
          blogs[item]["body"]
            .toLowerCase()
            .includes(this.searchWord.toLowerCase())
        ) {
          newBlog.push(blogs[item]);
        }
      }
      this.$store.dispatch("setBlog", newBlog);
    },
    getClass() {
      return this.showOutline ? "border: 1px solid #3A85FC !important;" : "";
    },
    ...mapGetters(["isMobile"]),
    ...mapActions(["setModalState"]),

    handleSignin(val) {
      this.setModalState(val);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    padding: 10px !important;
  }
  .search-div {
    height: 45px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 5px;
    width: 85% !important;
    position: absolute;
    margin: 5px 10px !important;
    top: 70px !important;
  }

  .search-input {
    color: gray !important;
  }
}
.logo-blg {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
.blg {
  width: 20px;
  color: #404040;
  font-size: 14px;
  margin-left: 10px;
}
header {
  margin-top: 5px;
  height: 64px;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}
img {
  margin-right: 40px;
  width: auto;
}
nav {
  width: 80%;
  margin-right: -4%;
}
ul {
  float: right;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
}
li {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  width: 100px;
  color: #404040;
  list-style: none;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #404040;
  }
}
.search-div {
  width: 100%;
  border: 1px solid #c4c4c4;
  padding: 10px 15px;
  border-radius: 5px;
  margin-left: 40px;
  margin-right: -20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  i {
    margin-right: 15px;
    color: #686868;
    font-size: 15px;
  }
  input {
    border: none;
    height: 100%;
    width: 80%;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #6a6a6a;
    font-family: "Inter", sans-serif;
  }
  input::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #6a6a6a;
    font-family: "Inter", sans-serif;
  }
  input:focus {
    outline: none;
  }
}
</style>
