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
        <div class="i-div">
          <i
            style="
              color: white !important;
              font-size: 20px !important;
              margin: 10px !important;
            "
            v-on:click="$modal.hide('security-sec')"
            class="far fa-times-circle"
          ></i>
        </div>
        <img
          @click="$modal.show('security-sec')"
          class="nav-modal"
          src="../../assets/images/home-vector.png"
          alt
          width="30px"
          style="margin: 10px !important;"
        />
      </div>

      <div v-if="isMobile" class="left">
        <div class="d3 d" @click="handleWhatShows(4)">
          <a href="#favourite-section">
            <div>
              <img
                class="profile-icons-mobile"
                style="margin: 0.7rem 0.8rem;"
                src="../../assets/images/vector.png"
                alt="bongalo-careers"
              />
            </div>
            <p class="p-item">Security</p>
          </a>
        </div>
      </div>

      <div v-if="isMobile" class="right">
        <div v-if="showId == 4" class="Security">
          <h2>Security</h2>
          <br />
          <div v-if="!changePasswordIsSuccessful">
            <h3>Change your password</h3>

            <div class="mid">
              <StyledInput
                @sendInput="(v) => (oldPassword = v)"
                :value="''"
                type="password"
                placeholder="Enter old password"
                label="OLD PASSWORD"
              />

              <br />
              <StyledInput
                @sendInput="(v) => (newPassword = v)"
                :value="''"
                type="password"
                placeholder="Enter new password"
                label="NEW PASSWORD"
                style="
                  border: 1px solid red !important;
                  min-width: 100% !important;
                "
              />
              <br />

              <StyledInput
                @sendInput="(v) => (newPasswordConfirm = v)"
                :value="''"
                type="password"
                placeholder="Confirm new password"
                label="CONFIRM PASSWORD"
                style="
                  border: 1px solid red !important;
                  min-width: 100% !important;
                "
              />
              <br />
              <Button
                v-if="!changePasswordButtonClicked"
                @handleClick="changePassword"
                :isFullWidth="false"
                style="margin-top: 20px; height: 45px;"
                label="Update Password"
              />

              <p v-else>
                <br />
                Changing your password, please wait...
              </p>
            </div>
          </div>
          <div v-else>
            <Verification
              title="Successful"
              text1="Your password has been changed successfully"
              text2="Thank you"
              strongText=""
              width="80%"
            />
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

    handleWhatShows(intent) {
      this.showId = intent;
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
    Button,
  },
};
</script>

<style lang="scss" scoped>
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

  .right {
    margin-top: 20px !important;
    padding: 20px !important;

    .top {
      .p-primary-edit-profile {
        width: 50% !important;
        margin: 10px 10px 20px 50px !important;
      }
    }
  }

  .Security {
    min-width: 100% !important;
    h3 {
      margin: 0 0px 10px 0 !important;
    }
    button {
      margin: 30px 10px 0 0 !important;
    }
  }
}

.profile {
  width: 100%;
  .content {
    .left {
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
  }
}
</style>
