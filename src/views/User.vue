<template>
  <div class="uses">
    <Navigation :showSearch="false"></Navigation>
    <div class="content">
      <div class="details-section">
        <img v-if="$route.query.profile_image" :src="getUrl()" alt="" />
        <img
          v-else
          src="https://freesvg.org/img/abstract-user-flat-3.png"
          alt=""
        />
        <p class="section-title">Hi I'm Nelson</p>
      </div>
      <p>
        Joined in {{ $route.query.created_at.substring(0, 4) }}
        <span style="margin-left: 40px;">
          Lives in {{ $route.query.resident_country }}
        </span>
      </p>

      <br /><br />
      <div style="margin-top: 0px;">
        <span class="quote">&quot;</span>
        <p class="desc">
          {{ $route.query.description }}
        </p>
      </div>

      <div class="review-sectiom">
        <p class="section-title">
          Reviews
        </p>
        <small>
          No reviews
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Blog/Navigation";

export default {
  name: "users",
  components: {
    Navigation,
  },
  methods: {
    getUrl() {
      return (
        this.$route.query.profile_image + "&token=" + this.$route.query.token
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.uses {
  width: 100%;
  .content {
    .details-section {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      margin-bottom: 10px;

      img {
        height: 80px;
        width: 80px;
        margin-right: 20px;
        border-radius: 50%;
      }
    }
    * {
      color: #6a6a6a;
      font-family: "Lato", sans-serif;
    }
    padding: 20px 30%;
    .section-title {
      font-size: 44px;
      color: #6a6a6a;
    }

    .quote {
      font-size: 40px;
      font-family: cursive;
    }

    .desc {
      margin-left: 30px;
      line-height: 24px;
      position: relative;
      top: -30px;
    }
  }
}
</style>
