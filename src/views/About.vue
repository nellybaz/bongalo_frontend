<template>
  <div class="about">
      <!-- <Jumbotron></Jumbotron> -->
    <AboutHeader />
    <headCard />
    <ListProperity />
  </div>
</template>


<script>
import AboutHeader from "../components/About/AboutHeader"
import HeadCard from '../components/About/HeadCard'
import ListProperity from '../components/About/ListProperity'
// import Jumbotron from '../components/Jumbotron'

export default {
  name: "about",
  components: {
    //   Jumbotron,
    AboutHeader,
    HeadCard,
    ListProperity,
  }
};
</script>


<style lang="scss" scoped>
</style>