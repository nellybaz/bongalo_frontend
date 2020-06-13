<template>
  <div class="header">
    <header>
      <a href="/">
        <img src="../../assets/images/bongalo-logo-white.png" alt />
      </a>

      <div>
        <img
          v-if="isMobile"
          style="height: 14px !important; margin-left: -5px !important;"
          @click="$modal.show('mobile-booking')"
          class="about-logo"
          src="../../assets/images/home-vector.png"
          alt
        />
      </div>

      <NavLink :isDark="true"></NavLink>
    </header>
  </div>
</template>

<script>
import NavLink from "../../components/NavLink";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    NavLink,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  header {
    display: grid !important;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 80% !important;
    padding: 0 30px !important;

    img {
      margin: 30px 0 0 0 !important;
    }
  }
  .header {
    padding: 0 !important;
    margin: 0 !important;
    object-fit: cover !important;
    height: 350px !important;
    width: 100% !important;
    background-repeat: no-repeat !important;
    background-size: 450px 350px !important;
  }
}
.header {
  width: 100%;
  height: auto;
  padding-bottom: 8%;
  background: url(../../assets/images/about-img.png);
  height: 100vh;

  header {
    height: 64px;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    nav {
      width: 100%;
      margin-right: 2%;
      ul {
        float: right;
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: row;
        li {
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          width: 100px;
          color: #ffffff;
          list-style: none;

          a {
            text-decoration: none;
            color: #ffffff;
          }
        }
      }
    }
  }

  .book-card-div {
    width: 35%;
    position: relative;
    top: 12%;
    left: 7%;
  }
}
</style>
