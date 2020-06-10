<template>
  <div class="jumbotron">
    <header>
      <div>
        <img src="../assets/images/bongalo-logo-white.png" alt />
      </div>

      <div v-if="isMobile()">
        <img
          style="height: 14px !important; margin-left: -5px !important;"
          @click="$modal.show('mobile-booking')"
          class="about-logo"
          src="../assets/images/home-vector.png"
          alt
        />
      </div>

      <NavLink :isDark="false"></NavLink>
    </header>

    <h3 v-if="isMobile()">
      Traveling Africa, Trip for Business or Pleasure? Book your stay with us.
    </h3>

    <div class="book-card-div">
      <BookCard></BookCard>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/HomePageBookCard";
import { mapGetters, mapActions } from "vuex";
import NavLink from "../components/NavLink";

export default {
  name: "jumbotron",
  components: {
    BookCard,
    NavLink,
    // FooterMobile,
  },

  methods: {
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
  .jumbotron {
    padding: 0 0 20px 0 !important;

    header {
      display: grid !important;
      grid-template-columns: repeat(9, 1fr);
      grid-gap: 80% !important;
      padding: 0 30px !important;
      img {
        margin: 10px 0 0 0 !important;
      }
    }
    .book-card-div {
      width: 85% !important;
      left: 0% !important;
    }
  }
}
.jumbotron {
  width: 100%;
  height: auto;
  padding-bottom: 8%;
  background: url(../assets/images/jumbotron-bg.png);

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    padding: 0 30px;
    margin: 10px 0 30px 0;
    color: #ffffff;
  }

  header {
    height: 64px;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .book-card-div {
    width: 26%;
    position: relative;
    top: 12%;
    left: 7%;
  }
}
</style>
