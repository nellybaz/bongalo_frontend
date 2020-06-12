<template>
  <div class="countdown-container">
    <a href="/">
      <img class="header" src="../assets/images/bongalo-logo.png" alt />
    </a>

    <div class="content">
      <br />
      <div class="days">
        <h1>{{ days }}</h1>
        <span>DAYS</span>
      </div>
      <div class="days">
        <h1>{{ hours }}</h1>
        <span>HOURS</span>
      </div>
      <div class="days">
        <h1>{{ minutes }}</h1>
        <span>MINUTES</span>
      </div>
      <div class="days">
        <h1>{{ seconds }}</h1>
        <span>SECONDS</span>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "coming_soon",

  components: {},
  data: () => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }),

  methods: {
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
  },
  padTime: function (time) {
    return (time < 10 ? "0" : "") + time;
  },
  countdown: function () {
    if (this.totalTime >= 1) {
      this.totalTime--;
    } else {
      this.totalTime = 0;
    }
  },
  computed: {
    minutes: function () {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function () {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    font-family: "Inter", sans-serif;
    color: white;
  }
  .header {
    padding: 24px;
  }

  .content {
    background: #3a85fc;
    .days {
      padding: 28px 10px;
      border: 1px solid white;
      text-align: center;
      width: 30%;
      border-radius: 50%;
      margin: 10px auto;
      span {
        font-size: 10px;
      }
    }
  }
}
</style>
