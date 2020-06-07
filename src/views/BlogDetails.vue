<template>
  <div class="blog-details">
    <Navigation :showSearch="true" />
    <div class="details">
      <div class="left">
        <img src="../assets/images/blog_details.png" alt />
        <h4>Share</h4>
        <div class="social-media">
          <div
            class="fb-share-button"
            data-href="https://bongalo-frontend.herokuapp.com/"
            data-layout="button_count"
            data-size="small"
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbongalo-frontend.herokuapp.com%2F&amp;src=sdkpreparse"
              class="fb-xfbml-parse-ignore"
              >Share</a
            >
          </div>
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/intent/tweet?url=https://bongalo-frontend.herokuapp.com/"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://bongalo-frontend.herokuapp.com&title=Bongalo&summary=Bongalo%20blog%20story%20just%20for%20you&source=LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div class="social-media-share">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:?subject=Bongalo Website is amazing&amp;body=Check out this site https://bongalo-frontend.herokuapp.com."
          >
            <p><i class="fas fa-envelope"></i> Share via email</p>
          </a>

          <p><i class="fas fa-copy"></i> Copy link</p>
        </div>
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
  data: function () {
    return {
      postDetails: {},
    };
  },
  methods: {
    socialShare(intent) {
      switch (intent) {
        case 2:
          window.location.href =
            "https://twitter.com/intent/tweet?url=https://bongalo-frontend.herokuapp.com/";

          break;

        default:
          break;
      }
    },
    getPostDetails() {
      var allPost = this.$store.getters["getAllBlogPost"];
      for (let i = 0; i < allPost.length; i++) {
        let post = allPost[i];
        if (post.uuid == this.$route.query.id) {
          return post;
        }
      }
      return {
        title: this.$route.query.title,
        body: this.$route.query.body,
      };
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
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    margin: auto !important;
    display: block !important;
  }

  p {
    font-size: 15px !important;
    margin-top: 10px !important;
    text-align: left !important;
  }

  input {
    display: none !important;
  }

  .details {
    padding: 20px !important;
    margin: 30px 0 !important;

    img {
      max-width: 100% !important;
      border-radius: 5px !important;
    }
    .left {
      margin: 20px 0 20px 0 !important;
      h4 {
        margin: 20px 0 -5px 0 !important;
      }
    }

    .social-media,
    .social-media-share {
      p,
      i {
        display: flex !important;
        font-size: 15px !important;
        padding: 0 5px !important;
      }
      width: 100% !important;
      display: flex !important;
      margin: 8px 0 !important;
      border: 1px solid rgba(128, 128, 128, 0.39);
      padding: 5px !important;
      border-radius: 5px;
    }
  }
}

a {
  text-decoration: none;
}

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
        }
      }
      .social-media {
        * {
          margin-right: 20px;
        }
        width: 100%;
        margin: 15px 0;
        margin-bottom: 30px;

        i {
          color: #3a85fc;
          font-size: 24px;
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
