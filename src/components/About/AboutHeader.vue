<template>
  <div class="header">
    <header>
      <img src="../../assets/images/bongalo-logo-white.png" alt />
      <nav>
        <ul>
          <li>EN</li>
          <li>$ USD</li>
          <li>Blog</li>
          <li>Sign up</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  </div>
</template>


<script>
export default {
  //    name:'header',
  //    components:{
  //    }
};
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: auto;
  padding-bottom: 8%;
  background: url(../../assets/images/jumbotron-bg.png);
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