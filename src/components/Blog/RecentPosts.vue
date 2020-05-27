<template>
  <div class="recentPost">
    <section class="recent-post-sec">
      <h2 class="post-heading">Recent Post</h2>
      <div v-for="item in getPosts()" :key="item.id" class="sec-1">
        <div class="img1">
          <a :href="getUrl(item)">
            <img :src="require(`../../assets/images/blog-img.png`)" alt />
          </a>
        </div>
        <div class="cap-1">
          <div class="div-inner">
            <h2>
              {{ item.title }}
            </h2>
            <p>{{ item.body.substring(0, 1000) }}...</p>
            <br />
          </div>
          <div class="read-more">
            <a :href="getUrl(item)">
              <p>
                Read More
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "recent_post",
  data: function () {
    return {
      blogs: [],
    };
  },
  methods: {
    getUrl(item) {
      return (
        "/blog-details/?uid" +
        item.uuid +
        "&title=" +
        item.title +
        "&body=" +
        item.body
      );
    },
    getPosts() {
      if (this.getAllBlogPost().length < 1) {
        this.$store.dispatch("getAllBlogPost");
      }

      return this.getAllBlogPost();
    },
    gotoBlogDetails(uuid) {
      this.$router.push({ path: "/blog-details/", query: { id: uuid } });
    },
    ...mapGetters(["getAllBlogPost"]),
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    display: block !important;
    padding: auto !important;
    margin: auto !important;
    width: auto !important;
  }

  h2,
  p {
    margin-left: -10px !important;
  }

  .recent-post-sec {
    .post-heading {
      margin: 30px 5px 10px 30px !important;
      width: 84% !important;
    }
    img {
      width: 88% !important ;
    }

    .read-more {
      margin: 0 !important;
      width: 50% !important;

      p {
        padding: 0.8rem !important;
        text-align: center !important;
      }
    }
  }
}

a {
  text-decoration: none;
}
.recentPost {
  margin-bottom: 15%;
  margin-top: 8%;
}
.recent-post-sec {
  width: 100%;
}
.post-heading {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
  color: #404040;
}
.sec-1 {
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 85%;
  margin-left: 10%;
  .img1 {
    width: 100%;
    cursor: pointer;
  }
  .cap-1 {
    width: 100%;
    padding: 10px 40px;
    display: flex;
    flex-direction: column;
    p {
      color: #6a6a6a;
      font-size: 14px;
      line-height: 22px;
      margin-top: 10px;
      text-align: justify;
    }
    h2 {
      color: #404040;
      width: 60%;
    }
    .div-inner {
      height: 90%;
    }
    .read-more {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      p {
        width: 200px;
        border: 1px solid #6a6a6a;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        text-decoration: none;
        color: #404040;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>
