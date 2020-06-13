<template>
  <div class="coming_soon">
    <div class="container">
      <ComingSoonCounter v-if="isMobile" />
      <div class="coming-soon-content">
        <div class="inner-texts">
          <a v-if="!isMobile" href="/">
            <img class="header" src="../assets/images/bongalo-logo.png" alt />
          </a>

          <h3>
            Our website is coming soon, follow us for update now!
          </h3>

          <div>
            <!-- <StyledInput
              type="text"
              placeholder="Enter your full name"
              label="Full Name"
            /> -->
            <StyledInput
              type="text"
              placeholder="Enter your email address"
              label="EMAIL"
            />
            <br />
            <Button
              @handleClick="updateUser"
              :isFullWidth="true"
              label="Subscribe"
            />
            <br /><br />
            <span
              >And don’t worry, we hate spam too! You can unsubcribe at
              anytime.</span
            >
          </div>
          <br />
          <br />

          <div class="social-medias">
            <i class="fab fa-facebook-f"></i>
            <i id="inner" class="fab fa-linkedin"></i>
            <i class="fab fa-twitter"></i>
            <i id="inner" class="fab fa-instagram"></i>
          </div>
        </div>

        <div v-if="!isMobile" class="countdown-container">
          <br />
          <div class="content">
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
      </div>
    </div>
  </div>
</template>

<script>
import StyledInput from "../components/StyledInput";
import Countdown from "vuejs-countdown";
import Button from "../components/Button";
import ComingSoonCounter from "../components/ComingSoonCounter";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "coming_soon",
  computed: mapGetters(["isMobile"]),
  components: {
    StyledInput,
    Button,
    ComingSoonCounter,
  },
  data: () => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }),

  // computed: {
  //   _seconds: () => 1000,
  //   _minutes() {
  //     return this._seconds * 60;
  //   },
  //   _hours() {
  //     return this._minutes * 60;
  //   },
  //   _days() {
  //     return this._hours * 24;
  //   },
  // },

  mounted() {
    this.showRemaining();
  },

  methods: {
    showRemaining() {
      var timer = setInterval(() => {
        var now = new Date();
        var end = new Date(2020, 4, 22, 10, 10, 10, 10);
        var distance = end.getTime() - now.getTime();
        if (distance < 0) {
          clearInterval(timer);
          return;
        }
        var days = Math.floor(distance / this.dayCount);
        var hours = Math.floor(distance % this.dayCount) / this.hourCount;
        var minutes =
          Math.floor(distance % this.minuteCount) / this.minuteCount;
        var seconds = Math.floor(distance % this._seconds) / this._seconds;
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayHour = hours < 10 ? "0" + hours : hours;
        this.displayDay = days < 10 ? "0" + days : days;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    font-family: "Inter", sans-serif;
  }
  .container {
    * {
      min-width: 100% !important;
      min-height: auto !important;
      margin: auto !important;
      display: block !important;
      img {
        min-width: auto !important;
        margin-left: 0 !important;
      }
      strong {
        width: 30% !important;
      }
    }
    br {
      display: none !important;
    }
    button {
      margin: 20px 0 !important;
    }
    span {
      margin: 20px 0 !important;
      text-align: center;
    }

    .social-medias {
      display: flex !important;

      i {
        min-width: 60px !important;
        line-height: 40px !important;
        text-align: center !important;
        height: 60px !important;
      }
    }
    .inner-texts {
      padding: 25px;
      min-width: 100% !important;
    }
  }
  .days {
    padding: 40px !important;
    margin: 15px 130px !important;
    min-width: 5px !important;
  }
}

.container {
  .inner-texts {
    color: #707070;
    line-height: 25px;
    font-size: 18px;
    width: 25%;
    margin: 0 70px;

    span {
      font-size: 15px;
      line-height: 18px;
    }

    strong {
      color: #505050;
      font-weight: bold;
      font-size: 25px;
    }

    .social-medias {
      cursor: pointer;
      i {
        padding: 10px;
        background: #3a85fc;
        color: #ffffff;
        border-radius: 50%;
      }
      i:hover {
        background: #1058cc;
        transition: 1s ease;
      }
      #inner {
        margin: 0 8px;
      }
    }
  }

  .coming-soon-content {
    display: flex;

    justify-content: space-between;
    width: 100%;

    .countdown-container {
      background: #3a85fc;
      width: 60%;

      .content {
        display: grid;
        margin: 15% 20%;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        height: auto;
      }

      .days {
        border: 1px solid white;
        color: white;
        padding: 50px;
        border-radius: 50%;
        font-size: 24px;
        width: 90%;
        margin: auto;
        text-align: center;
        span {
          font-size: 10px;
        }
      }
    }
  }
  .header {
    cursor: pointer;
    max-width: 1200px;
    padding: 40px 0;
    margin: auto;
  }
}
</style>
