<template>
  <div class="coming_soon">
    <div v-if="isMobile" class="container">
      <div class="coming-soon-content">
        <div class="countdown-container">
          <div class="days">
            <h1>35</h1>
            <span>DAYS</span>
          </div>
          <div class="days">
            <h1>17</h1>
            <span>HOURS</span>
          </div>
          <div class="days">
            <h1>06</h1>
            <span>MINUTES</span>
          </div>
          <div class="days">
            <h1>40</h1>
            <span>SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coming_soon",

  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    font-family: "Inter", sans-serif;
    border: 1px solid red !important;
  }
//   .container {
//     * {
//       min-width: 100% !important;
//       min-height: auto !important;
//       margin: auto !important;
//       display: block !important;
//     }
//     .inner-texts {
//       padding: 10px;
//       border: 1px solid red;
//     }
//   }
//   .days {
//     padding: 50px !important;
//     margin: 0 70px !important;
//     min-width: 20px !important;
//     border: 1px solid red !important;
//   }
}
</style>
