<template>
  <div class="about">
      <!-- <Jumbotron></Jumbotron> -->
    <AboutHeader />
    <headCard />
  </div>
</template>


<script>
import AboutHeader from "../components/About/AboutHeader"
import HeadCard from '../components/About/HeadCard'
import Jumbotron from '../components/Jumbotron'

export default {
  name: "about",
  components: {
    //   Jumbotron,
    AboutHeader,
    HeadCard
  }
};
</script>


<style lang="scss" scoped>
</style>