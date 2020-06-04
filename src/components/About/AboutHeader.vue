<template>
  <div class="header">
    <header>
      <a href="/">
        <img src="../../assets/images/bongalo-logo-white.png" alt />
      </a>

      <div>
        <img
          style="height: 20px !important;"
          @click="$modal.show('mobile-booking')"
          class="about-logo"
          src="../../assets/images/home-logo.png"
          alt
        />
      </div>

      <NavLink :isDark="false"></NavLink>
    </header>
  </div>
</template>

<script>
import NavLink from "../../components/NavLink";

export default {
  components: {},
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
    // .about-logo {
    //   max-width: 100% !important;
    //   height: 20px !important;
    // }
  }
  .header {
    border: 1px solid red !important;
    object-fit: contain !important;
    width: 100% !important;
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
