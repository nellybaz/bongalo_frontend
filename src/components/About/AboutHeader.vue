<template>
  <div class="header">
    <header>
      <a href="/">
        <img src="../../assets/images/bongalo-logo-white.png" alt />
      </a>

      <div>
        <img src="../../assets/images/mobile-nav-shape.png" alt />
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
