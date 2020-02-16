<template>
  <div class="jumbotron">
    <header>
      <img src="../assets/images/bongalo-logo-white.png" alt />

      <nav v-if="!isMobile()">
        <ul>
          <li>EN</li>

          <li>$ USD</li>

          <li>
            <router-link to="/blog">
              Blog
            </router-link>
          </li>

          <li v-on:click="handleSignin(2)">Sign up</li>

          <li v-on:click="handleSignin(1)">Login</li>
        </ul>
      </nav>
    </header>


     <h3 v-if="isMobile()">
            Travelling Africa, Trip for Business or Pleasure ? Book your stay with us.
    </h3>

    <div class="book-card-div">
      <BookCard></BookCard>
    </div>
  </div>
</template>


<script>
import BookCard from "../components/HomePageBookCard";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "jumbotron",
  components: {
    BookCard
  },

  methods:{
    ...mapGetters(['isMobile']),
    ...mapActions(['setModalState']),

    handleSignin(val){
      this.setModalState(val)
    }
  }
};
</script>

<style lang='scss' scoped>

 @media only screen and (max-width: 900px){


   .jumbotron {
     padding: 0 0 20px 0 !important;

      header {
        padding: 0 30px !important;
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

  h3{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    padding: 0 30px;
    margin: 10px 0 30px 0;
    color: #FFFFFF;

  }

  header {
    height: 64px;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    // img{
    //     // border:1px solid green;
    // }
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
          cursor: pointer;

          a{
            text-decoration: none;
            color: #ffffff;
          }
        }
      }
    }
  }

  .book-card-div {
    width: 30%;
    position: relative;
    top: 12%;
    left: 7%;
  }
}
</style>