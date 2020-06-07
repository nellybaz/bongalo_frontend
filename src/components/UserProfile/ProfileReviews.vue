<template>
  <div class="profile">
    <Navigation :showSearch="false" />
    <div class="content">
      <div
        style="
          background: #3a85fc !important;
          display: flex !important;
          justify-content: space-between !important;
        "
      >
        <img
          @click="$modal.show('reviews-sec')"
          class="nav-modal"
          src="../../assets/images/home-vector.png"
          alt
          width="30px"
          style="margin: 10px !important;"
        />
        <div class="i-div">
          <i
            style="
              color: white !important;
              font-size: 20px !important;
              margin: 10px !important;
            "
            v-on:click="$modal.hide('reviews-sec')"
            class="far fa-times-circle"
          ></i>
        </div>
      </div>

      <div v-if="isMobile" class="left">
        <div class="d3 d" @click="handleWhatShows(6)">
          <a href="#">
            <div>
              <img
                class="profile-icons-mobile"
                style="margin: 0.7rem 0.8rem;"
                src="../../assets/images/vector.png"
                alt="bongalo-careers"
              />
            </div>
            <p class="p-item">Reviews</p>
          </a>
        </div>
      </div>

      <div v-if="isMobile" class="right">
        <div v-if="showId == 6" class="review">
          <h2>Review</h2>
          <br />

          <div v-if="!isMobile" class="rev-title">
            <p
              @click="showReviewedContent = true"
              :style="getActiveBorder(1, true)"
            >
              Reviews about you
            </p>

            <p
              @click="showReviewedContent = false"
              :style="getActiveBorder(1, false)"
              class="p-review"
            >
              Reviews you’ve left
            </p>
          </div>

          <div v-else class="dropdown-details">
            <div class="dropdown">
              <button style="" class="dropbtn">
                <p class="select-a-review">Select a review type</p>
              </button>
              <div class="dropdown-content">
                <a href="#">
                  <p
                    @click="showReviewedContent = true"
                    :style="getActiveBorder(1, true)"
                  >
                    Reviews about you
                  </p></a
                >
                <br />
                <a href="#">
                  <p
                    @click="showReviewedContent = false"
                    :style="getActiveBorder(1, false)"
                    class="p-review"
                  >
                    Reviews you’ve left
                  </p></a
                >
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div v-if="showReviewedContent">
            <div v-for="item in getReviewForMe()" :key="item.id">
              <a href="#">
                <div class="rev-div"></div>
                <p>
                  <strong>Benjamin</strong> |
                  <span class="rev-date">February 2020</span>
                  <br />
                  <span
                    ><i class="fas fa-star" title="Update profile image"></i>
                    <i class="fas fa-star" title="Update profile image"></i>
                    <i class="fas fa-star" title="Update profile image"></i
                    ><i class="fas fa-star" title="Update profile image"></i>
                  </span>
                </p>
              </a>
              <p>
                {{ item.review }}
              </p>
            </div>
            <br />
            <hr />
            <br />
          </div>

          <div v-else>
            <h1 v-if="getReviewFromMe().length < 1">Nothing to show</h1>

            <div v-else v-for="item in getReviewFromMe()" :key="item.id">
              <a href="#">
                <div class="rev-div"></div>
                <p>
                  <strong>Benjamin</strong> |
                  <span class="rev-date">February 2020</span>
                  <br />
                  <span
                    ><i class="fas fa-star" title="Update profile image"></i>
                    <i class="fas fa-star" title="Update profile image"></i>
                    <i class="fas fa-star" title="Update profile image"></i
                    ><i class="fas fa-star" title="Update profile image"></i>
                  </span>
                </p>
              </a>
              <p>
                {{ item.review }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/Blog/Navigation";
import StyledInput from "../../components/StyledInput";
import Button from "../../components/Button";
import { mapActions, mapGetters } from "vuex";
import Select from "../../components/Select";
import Verification from "../../components/verification";
import ProfileCardMobile from "../../components/ProfileCardMobile";

export default {
  name: "",
  data: function () {
    return {
      verificationTypeValue: "",
      verificationType: [
        {
          text: "National ID",
          value: "national_id",
        },
        {
          text: "Passport",
          value: "passport",
        },
      ],
      changePasswordIsSuccessful: false,
      momoNumber: "",
      momoName: "",
      bankName: "",
      accountName: "",
      accountNumber: "",
      swiftCode: "",
      changePasswordButtonClicked: false,
      newPassword: "",
      newPasswordConfirm: "",
      oldPassword: "",
      verificationStatus: "",
      verificationButtonClicked: false,
      editProfileBtnClicked: false,
      showBankPayoutMethod: true,
      showReviewedContent: true,
      userDescription: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      userCity: "",
      userCountry: "",
      verificationFile: "",
      listing: {
        paymentNumber: "",
        title: "",
        description: "",
      },

      showId: 1,
      backgroundUrl: "https://freesvg.org/img/abstract-user-flat-3.png",
      backgroundFile: null,
    };
  },
  methods: {
    modalControl() {},

    changePassword() {
      if (
        this.newPassword.length < 1 ||
        this.newPasswordConfirm.length < 1 ||
        this.oldPassword.length < 1
      ) {
        this.$notify({
          group: "general",
          title: "Passowrd Change",
          text: "Passwords cannot be empty",
          type: "error",
        });
      } else if (this.newPassword != this.newPasswordConfirm) {
        this.$notify({
          group: "general",
          title: "Passowrd Change",
          text: "Passwords don't match",
          type: "error",
        });
      } else {
        this.changePasswordButtonClicked = true;
        const data = {
          old_password: this.oldPassword,
          token: this.getToken(),
          password: this.newPassword,
        };
        this.$store
          .dispatch("changeUserPassword", data)
          .then((res) => {
            this.changePasswordButtonClicked = false;
            this.$notify({
              group: "general",
              title: "Passowrd Change",
              text: "Password changed successfully!!",
              type: "success",
            });
            this.changePasswordIsSuccessful = true;
            this.newPassword = "";
            this.newPasswordConfirm = "";
            this.password = "";
          })
          .catch((err) => {
            this.changePasswordButtonClicked = false;
            this.$notify({
              group: "general",
              title: "Passowrd Change",
              text: err,
              type: "error",
            });
          });
      }
    },
    handleVerification() {
      this.verificationButtonClicked = true;
      const data = {
        type: this.verificationTypeValue,
        image: this.verificationFile,
        token: this.getToken(),
      };

      this.$store
        .dispatch("verifyUser", data)
        .then((v) => {
          this.verificationButtonClicked = false;
          this.$notify({
            group: "general",
            title: "Verification Uploaded",
            text: "Wait patiently for your verification to be verified",
            type: "success",
          });
          this.getAndUpdateUserData();
        })
        .catch((err) => {
          this.verificationButtonClicked = false;
          this.$notify({
            group: "general",
            title: "Verification Upload",
            text: "Error occured",
            type: "error",
          });
        });
    },
    getAndUpdateUserData() {
      this.$store
        .dispatch("getUserInfo", {
          uuid: this.getUuid(),
          token: this.getToken(),
        })
        .then((res) => {
          if (res == 1) {
            this.firstName = this.getUserInfo().first_name;
            this.lastName = this.getUserInfo().last_name;
            this.userDescription = this.getUserInfo().description;
            this.phoneNumber = this.getUserInfo().phone_number;
            this.userCity = this.getUserInfo().city;
            this.userCountry = this.getUserInfo().country;
            this.verificationStatus = this.getUserInfo().verification_status;
            this.bankName = this.getUserInfo().bank_name;
            this.accountName = this.getUserInfo().account_name;
            this.accountNumber = this.getUserInfo().account_number;
            this.swiftCode = this.getUserInfo().swift_code;
            this.momoNumber = this.getUserInfo().momo_number;
            this.momoName = this.getUserInfo().momo_name;
          }
        });
    },
    getActiveBorder(section, intent) {
      var flip =
        section == 1 ? this.showReviewedContent : this.showBankPayoutMethod;
      if (flip == intent) {
        return " border-bottom: 3px solid #3a85fc !important;";
      }
      return "";
    },
    getUserValue(intent) {
      return "ne";
      // if(intent == 1){
      //   this.phoneNumber = this.getUserInfo().phone_number
      //   return this.phoneNumber
      // }
    },
    updateUser() {
      const updateInfo = {
        last_name: this.lastName,
        first_name: this.firstName,
        phone: this.phoneNumber,
        token: this.getToken(),
        user: this.getUuid(),
        description: this.userDescription,
        city: this.userCity,
        country: this.userCountry,
      };

      this.$store
        .dispatch("updateUserInfo", updateInfo)
        .then((res) => {
          if (res == 1) {
            this.$notify({
              group: "general",
              title: "Payment Info",
              text: "User profile updated successfully!",
              type: "success",
            });
            this.editProfileBtnClicked = false;

            return 3;
          }
        })
        .then((v) => {
          this.getAndUpdateUserData();
        });
    },

    addPaymentMethod() {
      const paymentMethodData = {
        token: this.getToken(),
        momo_number: this.momoNumber,
        momo_name: this.momoName,
        bank_name: this.bankName,
        account_name: this.accountName,
        account_number: this.accountNumber,
        swift_code: this.swiftCode,
      };

      this.$store
        .dispatch("addPaymentMethod", paymentMethodData)
        .then((res) => {
          if (res == 1) {
            this.$notify({
              group: "general",
              title: "Payment Info",
              text: "Payment Method updated successfully!",
              type: "success",
            });
            this.getAndUpdateUserData();
          }
        })
        .catch((err) => {
          this.$notify({
            group: "general",
            title: "Payment Info",
            text: err,
            type: "error",
          });
        });
    },
    deleteListing(apartmentUuid) {
      this.$store
        .dispatch("deleteUserListing", {
          user: this.getUuid(),
          token: this.getToken(),
          apartment: apartmentUuid,
        })
        .then((res) => {
          this.$store.dispatch("getUserListing", {
            uuid: this.getUuid(),
            token: this.getToken(),
          });
        });
    },
    ...mapGetters([
      "getUuid",
      "getToken",
      "getUserListing",
      "getUserPaymentNumber",
      "getUserInfo",
      "getReviewFromMe",
      "getReviewForMe",
      "getBankName",
      "getBankAccountNames",
    ]),
    updateListing(listing) {
      const listingData = {
        isUpdate: true,
        apartmentId: listing["uuid"],
        listing_type: listing["type"],
        what_guest_will_have: listing["space"],
        number_of_guest: listing["max_guest_number"],
        number_of_bedroom: listing["available_rooms"],
        number_of_bathroom: listing["number_of_bathrooms"],
        property_country: listing["country"],
        property_address: listing["address"],
        property_city: listing["city"],
        property_province: "",
        amenities: listing["amenities"].split(","),
        extras: listing["extras"].split(","),
        rules: listing["rules"].split(","),
        photos: [],
        description: listing["description"],
        title: listing["title"],
        mobile_number: "",
        will_update_calender_checkbox: "",
        checkin: listing["check_in"],
        checkout: listing["check_out"],
        min_nights: listing["min_nights"],
        max_nights: listing["max_nights"],
        blocked_dates: [],
        price: listing["price"],
        userListing: [],
      };

      window.console.log(listingData);
      for (var item in listingData) {
        let d = {
          key: item,
          value: listingData[item],
        };
        this.$store.dispatch("setValue", d);
      }
      this.$router.push({ path: "/become-a-host" });
    },
    handleWhatShows(intent) {
      this.showId = intent;
    },
    handleProfileSelect(e) {
      this.backgroundUrl = URL.createObjectURL(e.target.files[0]);
      // TODO: Dispatch action to update profile picture

      // Data should have uuid, token and image object
      let data = {
        uuid: this.getUuid(),
        token: this.getToken(),
        imageObject: e.target.files[0],
      };

      this.$store.dispatch("updateImage", data).then((res) => {
        this.$notify({
          group: "general",
          title: "Info !!",
          text: "Your image is uploaded successfully",
          type: "success",
        });
        window.location.reload();
      });
    },

    getProfileImage() {
      return window.localStorage.getItem("profile_image")
        ? "background-image:" +
            "url(" +
            window.localStorage.getItem("profile_image") +
            ")"
        : "background-image:" + "url(" + this.backgroundUrl + ")";
    },

    ...mapGetters(["isMobile", "getFeatured", "isLoggedIn"]),
    ...mapActions(["setModalState"]),
    handleOpeningHostPage() {
      if (this.isLoggedIn()) {
        this.$router.push("/become-a-host");
      } else {
        this.$router.push({ query: { next: "become-a-host" } });
        this.setModalState(1);
      }
    },
    makePoweredByImageClass(index) {
      return "powered_img_";
    },
  },

  components: {
    Navigation,
  },

  created() {
    this.$store.dispatch("getReviewsForMe", {
      token: this.getToken(),
    });
    this.$store.dispatch("getReviewsFromMe", {
      token: this.getToken(),
    });

    this.$store.dispatch("getUserListing", {
      uuid: this.getUuid(),
      token: this.getToken(),
    });

    this.getAndUpdateUserData();
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    margin: 0 !important;
    max-width: 100% !important;
  }

  .select-a-review {
    margin: 10px 0 !important;
    color: #ffffff !important;
  }

  .dropdown-details {
    hr {
      display: none !important;
    }
    * {
      height: auto !important;
    }
    .dropbtn {
      width: 100% !important;
      padding: 16px !important;
      border-radius: 5px !important;
      background-color: #3a85fc;
      color: white;
      font-size: 16px !important;
      border: none;
      cursor: pointer;
    }

    .dropdown {
      position: relative;
      height: auto !important;
    }

    .dropdown-content {
      height: auto !important;
      display: none;
      position: relative;
      min-width: 160px;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px !important;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown:hover .dropbtn {
      background-color: #3a85fc;
    }
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

      * {
        display: block !important;
      }

      .no-lising-card {
        width: 100% !important;
      }

      img {
        margin: 3rem 6rem !important;
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

.review {
  width: 80%;

  hr {
    position: relative;
    top: -13px;
    border: 2px solid rgba(51, 51, 51, 0.1);
  }

  .rev-date {
    color: #404040;
    font-size: 15px;
  }

  i {
    color: #3a85fc;
    letter-spacing: 5px;
    font-size: 12px;
  }

  strong {
    height: 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    align-items: center;
    color: #404040;
  }

  .rev-title {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    p {
      width: auto;
      padding-bottom: 5px;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
    }
  }

  .edit-review {
    margin-left: 200px;
    font-size: 14px;
    color: #3a85fc;
  }

  .rev-div {
    background: rgba(196, 196, 196, 0.2);
    height: 40px;
    width: 45px;
    margin: 10px 0;
    border-radius: 50%;
    margin-right: 20px;
  }

  a {
    width: 100%;
    text-decoration: none;
    display: flex;
  }

  img {
    width: 50%;
  }

  .review-div {
    width: 100%;
  }

  p {
    margin: 10px 0;
    width: 100%;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
  }
}

.action-section {
  .btn-update {
    border: transparent;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    background: #3a85fc;
    border-radius: 5px;
  }

  .btn-remove {
    background: transparent;
    border: transparent;
    font-weight: bold;
    color: red;
  }
}
.special-hts {
  color: #404040;
  font-size: 18px;
}

.profile {
  width: 100%;
  .content {
    .file-select {
      label {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.07em;
        color: #3a85fc;
      }
    }

    margin-top: 30px;
    padding: 0 130px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 65px;

    .left,
    .right {
      width: 100%;

      h2 {
        font-weight: bold;
        font-size: 24px;
        color: #404040;
      }
    }

    .left {
      position: sticky;
      top: 20px;
      height: 470px;
      background: #ffffff;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

      .d {
        width: 100%;
        border-bottom: 1px solid rgba(128, 128, 128, 0.294);
        height: 78px;

        .p-item {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: grey;
        }
      }

      .d1 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        padding: 0 30px;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        color: gray;
      }

      .d2,
      .d3 {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 0 30px;

        div {
          background: rgba(58, 133, 252, 0.05);
          height: 40px;
          width: 40px;
          border-radius: 50%;
          margin-right: 20px;
        }

        a {
          width: 100%;
          text-decoration: none;
          display: grid;
          grid-template-columns: 1fr 4fr;
        }
      }
    }

    .right {
      img {
        width: 35%;
        margin: 1rem 3rem;
      }

      .no-lising-card {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        .add-listing {
          height: 50px;
          font-weight: normal;
          font-size: 18px;
          line-height: 25px;
          text-align: center;
          color: #333333;
        }
      }

      //   .listing-card-holder {
      //     display: grid;
      //     grid-template-columns: repeat(2, 1fr);
      //   }

      //   .listing-card {
      //     margin-right: 20px;
      //     .action-section {
      //       button {
      //         margin: 0 10px 0 0 !important;
      //         padding: 0.9em 2.5em;
      //         cursor: pointer;
      //       }
      //     }

      //     margin-bottom: 20px;
      //     width: 400px;
      //     height: 350px;
      //     box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
      //     background-color: #ffffff;
      //     border-radius: 5px;
      //     cursor: pointer;

      //     img {
      //       margin: 0 !important;
      //       width: 100%;
      //       border-radius: 5px;
      //       height: 55%;
      //       object-fit: cover;
      //     }

      //     div {
      //       height: 100%;
      //       padding: 20px;

      //       h3 {
      //         font-size: 18px;
      //         color: #404040;

      //         span {
      //           margin-left: 10px;
      //           padding: 0.1em 0.2em;
      //           color: #3a85fc;
      //           padding: 0.2em 1em;
      //           font-size: 14px;
      //           background: rgba(58, 133, 252, 0.1);
      //           border-radius: 1px;
      //         }
      //       }

      //       p {
      //         color: #777777;
      //       }

      //       .price-p {
      //         font-size: 20px;
      //         font-weight: bold;
      //       }
      //     }
      //   }

      h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 42px;
        color: #404040;
      }

      .top {
        margin-top: 30px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;

        .icon-div {
          height: 100px;
          width: 100px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          margin-right: 50px;
          input {
            width: 0.1px;
            height: 0.1px;
            position: absolute;
          }

          i {
            position: relative;
            top: 80%;
            left: 80%;
            color: #3a85fc;
            cursor: pointer;
          }
        }

        .p-primary-edit-profile {
          padding: 13px 45px;
          border: none;
          height: 44px;
          color: #3a85fc;
          font-weight: bold;
          cursor: pointer;
          background: rgba(58, 133, 252, 0.1);
          border-radius: 5px;
        }
      }
      .mid-payout {
        display: grid;
        grid-gap: 15px;
        width: 80%;
        grid-template-columns: 1fr 1fr;
      }
      .rev-title-payout {
        cursor: pointer;
        display: flex;
        width: 80%;
        margin-top: 20px;
        p {
          color: #333333;
          font-size: 18px;
        }
        .p-review-payout {
          margin-left: 100px;
          font-size: 18px;
          line-height: 22px;
          color: #333333;
        }
      }

      .mid {
        display: grid;
        grid-gap: 40px;
        width: 100%;
        grid-template-columns: 1fr 1fr;
      }

      .bottom {
        width: 100%;
      }

      .fav-section {
        margin-top: 80px;
        h3 {
          width: 50%;
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 36px;

          color: #404040;
        }

        .hint {
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          color: #404040;
        }
      }
    }
  }
}
</style>
