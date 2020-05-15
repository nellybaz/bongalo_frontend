<template>
  <div class="blog-details">
    <Navigation :showSearch="true" />
    <Tags />
    <PopularPosts />

    <div class="details">
      <div class="left">
        <img src="../assets/images/blog_details.png" alt />
        <h4>Share</h4>
        <div class="social-media">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>

        <p><i class="fas fa-envelope"></i> Share via email</p>
        <p>
          <a @click.prevent.stop="onClick()">
            <i class="fas fa-copy"></i>Copy link</a
          >
        </p>
      </div>

      <div class="right">
        <h3>
          {{ getPostDetails()["title"] }}
        </h3>

        <p>
          {{ getPostDetails()["body"] }}
        </p>
        <input ref="hiddenText" type="text" hidden />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Blog/Navigation";
import Tags from "../components/Blog/Tags";
import PopularPosts from "../components/Blog/PopularPosts";

export default {
  name: "blog_details",
  data: function() {
    return {
      postDetails: {},
    };
  },
  methods: {
    getPostDetails() {
      var allPost = this.$store.getters["getAllBlogPost"];
      for (let i = 0; i < allPost.length; i++) {
        let post = allPost[i];
        if (post.uuid == this.$route.query.id) {
          return post;
        }
      }
      return {};
    },

    onClick() {
      var ref = this.$refs["hiddenText"];
      ref.value = window.location.href;
      ref.style.display = "block";
      ref.select();
      document.execCommand("copy");
      ref.style.display = "none";
    },
  },

  components: {
    Navigation,
    Tags,
    PopularPosts,
  },
};
</script>

<style lang="scss" scoped>
.blog-details {
  width: 100%;
  .details {
    padding: 0 80px;
    margin-top: 80px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 30px;

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;
      text-align: justify;
      color: #6a6a6a;
    }

    .left {
      img {
        width: 380px;
        height: 315px;
        border-radius: 5px;
        margin-bottom: 30px;
      }

      p {
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        cursor: pointer;
        text-align: justify;
        color: #6a6a6a;
        margin-bottom: 10px;

        i {
          margin-right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      }
      .social-media {
        width: 100%;
        margin: 15px 0;
        margin-bottom: 30px;
        cursor: pointer;

        i {
          color: #3a85fc;
          font-size: 30px;
          margin-right: 10px;
        }

        i:hover {
          color: #176df8;
        }
      }
    }
    .right {
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 35px;
        color: #404040;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
