<template>
  <div class="coming_soon">
    <div class="container">
      <div class="coming-soon-content">
        <div class="inner-texts">
          <a href="/">
            <img class="header" src="../assets/images/bongalo-logo.png" alt />
          </a>
          <h3>
            Our website is <strong>Coming Soon</strong>, follow us for update
            now!
          </h3>

          <div>
            <StyledInput
              type="text"
              placeholder="Enter your full name"
              label="Full Name"
            />
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

        <!-- <ComingSoonCounter v-if="isMobile" /> -->
        <div class="countdown-container">
          <br />
          <div class="content">
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
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StyledInput from "../components/StyledInput";
import Button from "../components/Button";
import ComingSoonCounter from "../components/ComingSoonCounter";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "coming_soon",

  components: {
    StyledInput,
    Button,
  },

  data() {
    return {
      countDown: 10,
    };
  },
  method: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
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

    .social-medias {
      display: flex !important;
      justify-content: space-around !important;
      i {
        min-width: 60px !important;
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
        width: auto;
        height: auto;
      }

      .days {
        border: 1px solid white;
        color: white;
        padding: 60px;
        border-radius: 50%;
        font-size: 24px;
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
