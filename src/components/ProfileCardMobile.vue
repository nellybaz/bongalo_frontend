<template>
<div>
  <div v-if="!isMobile" class="left">
    <div class="d2 d clicked-prof-sec" @click="handleWhatShows(1)">
      <a href="#">
        <div>
          <img
            class="profile-icons-mobile"
            style="margin: 0.7rem 0.8rem;"
            src="../assets/images/vector.png"
            alt="bongalo-careers"
          />
        </div>
        <p class="p-item">Profile</p>
      </a>
    </div>

    <div class="d3 d" @click="handleWhatShows(2)">
      <a href="#">
        <div>
          <img
            class="profile-icons-mobile"
            style="margin: 0.7rem 0.8rem;"
            src="../assets/images/vector.png"
            alt="bongalo-careers"
          />
        </div>
        <p class="p-item">Listings</p>
      </a>
    </div>
    <div class="d2 d" @click="handleWhatShows(3)">
      <a href="#">
        <div>
          <img
            class="profile-icons-mobile"
            style="margin: 0.7rem 0.8rem;"
            src="../assets/images/vector.png"
            alt="bongalo-careers"
          />
        </div>
        <p class="p-item">Verifications</p>
      </a>
    </div>

    <div class="d3 d" @click="handleWhatShows(4)">
      <a href="#favourite-section">
        <div>
          <img
            class="profile-icons-mobile"
            style="margin: 0.7rem 0.8rem;"
            src="../assets/images/vector.png"
            alt="bongalo-careers"
          />
        </div>
        <p class="p-item">Security</p>
      </a>
    </div>

    <div class="d3 d" @click="handleWhatShows(5)">
      <a href="#">
        <div>
          <img
            class="profile-icons-mobile"
            style="margin: 0.7rem 0.8rem;"
            src="../assets/images/vector.png"
            alt="bongalo-careers"
          />
        </div>
        <p class="p-item">Payout Methods</p>
      </a>
    </div>

    <div class="d3 d" @click="handleWhatShows(6)">
      <a href="#">
        <div>
          <img
            class="profile-icons-mobile"
            style="margin: 0.7rem 0.8rem;"
            src="../assets/images/vector.png"
            alt="bongalo-careers"
          />
        </div>
        <p class="p-item">Reviews</p>
      </a>
    </div>
  </div>

  
</div>

  
</template>

<script>
import Profile from "../views/Profile";
import {mapGetters, mapActions} from "vuex";
export default {
  components: {
    //   Profile,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    margin: 0 !important;
    max-width: 100% !important;
  }
  .content {
    padding: 20px !important;
  }
  .profile {
    max-width: 100% !important;

    .profile-icons-mobile {
      margin: 0.8rem !important;
      padding: 0 !important;
    }

    .listing-container {
      width: 100% !important;

      .no-lising-card {
        width: 100% !important;
      }

      img {
        margin: 30px 0 0 0 !important;
      }

      button {
        width: 100% !important;
      }
    }
    .right {
      margin-top: 20px !important;
      padding: 20px !important;

      .top {
        .p-primary-edit-profile {
          width: 50% !important;
          margin: 10px 10px 20px 50px !important;
        }
      }

      .profile-show {
        p {
          padding: 0 !important;
          margin: 10px 0 !important;
        }
        height: auto !important;
        hr {
          display: none !important;
        }
      }
    }

    .verifications {
      * {
        display: block !important;
        margin: 10px 0 !important;
        padding: 15px 15px 10px 0 !important;
      }
      .upload {
        margin: -30px 0 -30px !important;
      }
      .choose-file {
        text-align: center !important;
      }

      .veri-sec-1-mobile {
        margin: 0px 0 -30px !important;
      }

      br {
        display: none !important;
      }

      .veri-sec-3 {
        label {
          height: 100% !important;
        }
      }

      button {
        width: 50% !important;
      }
    }

    .Security {
      * {
        display: block !important;
        padding: 0 !important;
      }
      h3 {
        margin: 0 0px 10px 0 !important;
      }
      button {
        margin: 30px 10px 0 0 !important;
      }
    }

    .payout-details {
      * {
        width: 100% !important;
      }

      img {
        width: auto !important;
      }
      h3 {
        font-size: 24px !important;
      }
      p {
        font-size: 15px !important;
      }

      hr {
        display: none !important;
      }

      .mid-payout {
        display: block !important;
      }
    }

    .review {
      * {
        max-width: 100% !important;
        padding: 0 !important;
      }
      width: 100% !important;

      hr {
        margin: 10px 0 0 0 !important;
      }

      .rev-div {
        margin: 0 10px 0 0 !important;
      }
      .rev-div-mobile {
        margin: 0 0 30px 0 !important;
      }
    }
  }

  .update-div {
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    .mid {
      padding: 0 !important;
      display: block !important;
    }

    .btn-div {
      button {
        width: 50% !important;
      }
    }
  }

  .content {
    display: block !important;
  }

  .left {
    height: auto !important;
    display: fixed !important;
  }
}
</style>
