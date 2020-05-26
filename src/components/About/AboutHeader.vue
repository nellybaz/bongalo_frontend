<template>
  <div class="header">
    <header>
      <a href="/">
        <img src="../../assets/images/bongalo-logo-white.png" alt />
      </a>
      <NavLink :isDark="false"></NavLink>
    </header>
  </div>
</template>

<script>
import NavLink from "../../components/NavLink";

export default {
  components: {
    NavLink,
  },
};
</script>

<style lang="scss" scoped>
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
