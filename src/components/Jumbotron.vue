<template>
  <div class="jumbotron">
    <header>
      <img src="../assets/images/bongalo-logo-white.png" alt />
    <NavLink :isDark="false"></NavLink>
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
import NavLink from '../components/NavLink';

export default {
  name: "jumbotron",
  components: {
    BookCard,
    NavLink
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
  }

  .book-card-div {
    width: 26%;
    position: relative;
    top: 12%;
    left: 7%;
  }
}
</style>