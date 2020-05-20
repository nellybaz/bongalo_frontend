<template>
  <div class="profile">
    <Navigation :showSearch="false" />
    <div class="content">
      <div class="left">
        <div class="d2 d" @click="handleWhatShows(1)">
          <a href="#">
            <div>
              <img
                style="margin:0.7rem 0.8rem"
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
                style="margin:0.7rem 0.8rem"
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
                style="margin:0.7rem 0.8rem"
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
                style="margin:0.7rem 0.8rem"
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
                style="margin:0.7rem 0.8rem"
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
                style="margin:0.7rem 0.8rem"
                src="../assets/images/vector.png"
                alt="bongalo-careers"
              />
            </div>
            <p class="p-item">Reviews</p>
          </a>
        </div>
      </div>

      <div class="right">
        <div v-if="showId == 1">
          <h2 id="dashboard">Hi, I am Kanneh {{ name }}</h2>
          <div class="top">
            <div :style="getProfileImage()" class="icon-div">
              <input
                @change="handleProfileSelect"
                :v-model="backgroundFile"
                id="p-pic"
                type="file"
              />
              <label for="p-pic">
                <i class="fas fa-camera" title="Update profile image"></i>
              </label>
            </div>

            <button
              class="p-primary-edit-profile"
              v-if="!editProfileBtnClicked"
              @click="editProfileBtnClicked = true"
            >
              Edit Profile
            </button>
          </div>

          <div v-if="editProfileBtnClicked" class="update-div">
            <h3>Tell us the basics</h3>
            <div class="mid">
              <StyledInput
                @sendInput="handleFName"
                :value="getUserInfo() != null ? getUserInfo().first_name : ''"
                type="text"
                placeholder="First name"
                label="FULL NAME"
              />
              <StyledInput
                @sendInput="handleLName"
                :value="getUserInfo().last_name"
                type="text"
                placeholder="Last name"
                label="LAST NAME"
              />
            </div>

            <br />
            <div class="bottom">
              <StyledInput
                @sendInput="handleDesc"
                :value="getUserInfo().description"
                :isTextArea="true"
                type="text"
                placeholder
                label="DESCRIPTION"
              />
            </div>
            <!-- <br /> -->

            <h3>Where are you located?</h3>
            <div class="mid">
              <StyledInput
                @sendInput="handleFName"
                :value="getUserInfo() != null ? getUserInfo().first_name : ''"
                type="text"
                placeholder="City"
                label="CITY, STATE"
              />
              <StyledInput
                @sendInput="handleLName"
                :value="getUserInfo().last_name"
                type="text"
                placeholder="Country"
                label="NATIONALITY"
              />
            </div>

            <h3>How can we contact you?</h3>
            <div class="mid">
              <StyledInput
                @sendInput="handleLName"
                :value="getUserInfo().last_name"
                type="text"
                placeholder="Last name"
                label="PHONE NUMBER"
              />
            </div>

            <br />
            <br />
            <div class="btn-div">
              <Button
                @handleClick="updateUser"
                :isFullWidth="false"
                label="Update Profile"
              />
            </div>
          </div>

          <div v-else class="profile-show">
            <p class="p-desc">
              {{ getUserInfo().description }}
            </p>
            <hr />
            <p class="p-lives">
              <i class="fas fa-home"></i>
              Lives in {{ "Kgali, Rwanda" }}
            </p>
            <p class="p-work">
              <i class="fas fa-briefcase"></i>
              Lives in {{ "Software Engineer" }}
            </p>
          </div>
        </div>

        <div v-else-if="showId == 2">
          <h2 class="title-listing">Listings</h2>
          <br />
          <h3 class="special-hts">Here are your listings</h3>
          <br />

          <div v-if="getUserListing().length > 0" class="listing-card-holder">
            <div
              v-for="listing in getUserListing()"
              :key="listing.title"
              class="listing-card"
            >
              <img :src="listing.main_image" alt />
              <div class="listing-title">
                <h3>
                  {{ listing.title }}
                  <span> ${{ listing.price }} </span>
                </h3>
                <br />
                <section class="action-section">
                  <button @click="addImages('uuid')" class="btn-update">
                    Update
                  </button>
                  <button
                    @click="deleteListing(listing.uuid)"
                    class="btn-remove"
                  >
                    Remove
                  </button>
                </section>
              </div>
            </div>
          </div>

          <div v-else>
            <h4 class="add-listing">
              You haven't added any listing. Add a listing to update a Payout
              Method
            </h4>
            <img src="../assets/images/pic.png" alt="bongalo-careers" />
          </div>

          <Button
            style="width:20%; margin:0 110px; height:40px"
            @handleClick="handleOpeningHostPage"
            :isFullWidth="false"
            label="Add a Listing"
          />
        </div>

        <div v-else-if="showId == 3" class="verifications">
          <div class="veri-sec-1">
            <h2>Verifications</h2>
            <p class="upload">UPLOAD VERFICATION</p>
          </div>

          <div class="veri-sec-1">
            <div class="">
              <P>You currently don’t have any verifications</P>
            </div>
            <div class="veri-sec-3">
              <label for="upload-photo">Choose file</label>
              <input type="file" name="photo" id="upload-photo" />
              <span>No file selected.</span>
            </div>
          </div>

          <div class="confirm-verification">
            <br />
            <h2>Verifications</h2>
            <div>
              <img
                style="width:auto; margin:2rem"
                src="../assets/images/v-icon.png"
                alt="bongalo-careers"
              />
            </div>
            <p>
              Your file has been recieved, sit back while we verify it. This
              process may take between 3 - 5 days, and we will
              <strong>send you an email once confirmed.</strong><br />
              Thank you!
            </p>
          </div>
        </div>

        <div v-else-if="showId == 4" class="Security">
          <h2>Security</h2>
          <br />
          <h3>Change your password</h3>

          <div class="mid">
            <StyledInput
              @sendInput="handleFName"
              :value="getUserInfo() != null ? getUserInfo().first_name : ''"
              type="text"
              placeholder=""
              label="OLD PASSWORD"
            />

            <br />
            <StyledInput
              @sendInput="handleLName"
              :value="getUserInfo().last_name"
              type="text"
              placeholder=""
              label="NEW PASSWORD"
            />
            <br />

            <StyledInput
              @sendInput="handleLName"
              :value="getUserInfo().last_name"
              type="text"
              placeholder=""
              label="CONFIRM PASSWORD"
            />

            <Button
              @handleClick="updateUser"
              :isFullWidth="false"
              style="margin-top:20px; height:45px"
              label="Update Password"
            />
          </div>
        </div>

        <div v-else-if="showId == 5" class="payout-details">
          <h2>Payout Methods</h2>
          <br />
          <h3>Bank</h3>

          <p>Bank Name: <span>Bank of Kigali</span></p>
          <p>
            Accouunt Details: <span>Uchechukwu Onyeka - 88484848484848848</span>
          </p>
          <p>SWIFT Code: <span>JIDNIODN4</span></p>
          <hr />
          <br />
          <h3>Mobile Wallet</h3>
          <img
            style="width:10%; margin:10px 0px"
            src="../assets/images/mtn.png"
            alt="bongalo-careers"
          />
          <p>
            Account Name: <span>{{ paymentName }}</span>
          </p>
          <p>
            Account Number: <span>{{ paymentNumber }}</span>
          </p>
          <br />

          <br />
          <Button
            @handleClick="addPaymentNumber"
            :isFullWidth="false"
            label="Save"
            style="width:25%; margin-top:20px0"
          />
          <br /><br />
          <hr />
          <br />

          <div class="payout-bank-sec"> 
            <p class="p-bank"  @click="showBankPayoutMethod = true"  :style="getActiveBorder(2, true)">
              Bank
            </p>
            <p @click="showBankPayoutMethod = false" :style="getActiveBorder(2, false)" >
              Mobile Money
            </p>
          </div>

          <div>
            <div v-if="showBankPayoutMethod" class="mid-payout">
              <StyledInput
                class="num-placeholder"
                @sendInput="handleInput"
                :value="paymentNumber"
                type="text"
                placeholder="Enter your Mobile Number"
                label="BANK NAME"
              />

              <StyledInput
                class="num-placeholder"
                @sendInput="handleInput"
                :value="paymentName"
                type="text"
                placeholder="Enter your Account Name"
                label="ACCOUNT NAME"
              />
              <StyledInput
                class="num-placeholder"
                @sendInput="handleInput"
                :value="paymentNumber"
                type="text"
                placeholder="Enter your Mobile Number"
                label="ACCOUNT NUMBER"
              />

              <StyledInput
                class="num-placeholder"
                @sendInput="handleInput"
                :value="paymentName"
                type="text"
                placeholder="Enter your Account Name"
                label="SWIFT CODE"
              />
            </div>

            <div v-else class="mid-payout">
              <StyledInput
                class="num-placeholder"
                @sendInput="handleInput"
                :value="paymentNumber"
                type="text"
                placeholder="Enter your Mobile Number"
                label="MOBILE NUMBER"
              />

              <StyledInput
                class="num-placeholder"
                @sendInput="handleInput"
                :value="paymentName"
                type="text"
                placeholder="Enter your Account Name"
                label="ACCOUNT NAME"
              />
            </div>
          </div>

          <br /><br />
          <Button
            @handleClick="addPaymentNumber"
            :isFullWidth="false"
            label="Update Payout Method"
            style="width:35%;"
          />
        </div>

        <div v-else-if="showId == 6" class="review">
          <h2>Review</h2>
          <br />

          <div class="rev-title">
            <p @click="showReviewedContent = true" :style="getActiveBorder(1, true)">
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
          <hr />
          <br />

          <div v-if="showReviewedContent">
            <div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum rutrum vel viverra leo. Etiam est sapien adipiscing
                maecenas eget. Morbi nec molestie massa felis augue et orci.
                Dignissim sapien, proin at felis urna, turpis ultrices.
              </p>
            </div>
            <br />
            <hr />
            <br />

            <div>
              <a href="#">
                <div class="rev-div"></div>
                <p>
                  <strong>Mike</strong> |
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum rutrum vel viverra leo. Etiam est sapien adipiscing
                maecenas eget. Morbi nec molestie massa felis augue et orci.
                Dignissim sapien, proin at felis urna, turpis ultrices.
              </p>
            </div>
          </div>

          <div v-else>
            <h1>Nothing to show</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Blog/Navigation";
import StyledInput from "../components/StyledInput";
import Button from "../components/Button";
import { mapActions, mapGetters } from "vuex";
import Select from "../components/Select";
// import Listing from "../components/views/Listing";

export default {
  name: "",
  data: function() {
    return {
      editProfileBtnClicked: false,
      showBankPayoutMethod: true,
      showReviewedContent: true,
      Select,
      user_description: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
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
    getActiveBorder(section, intent) {
      var flip = section == 1 ? this.showReviewedContent : this.showBankPayoutMethod
      if (
        flip == intent
      ) {
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
    handleFName(val) {
      this.firstName = val;
    },
    handleLName(val) {
      this.lastName = val;
    },
    handleDesc(val) {
      this.user_description = val;
    },
    handlePhone(val) {
      this.phoneNumber = val;
    },

    handleInput(val) {
      this.paymentNumber = val;
    },
    updateUser() {
      this.$store
        .dispatch("updateUserInfo", {
          last_name: this.lastName,
          first_name: this.firstName,
          phone: this.phoneNumber,
          token: this.getToken(),
          user: this.getUuid(),
          description: this.user_description,
        })
        .then((res) => {
          if (res == 1) {
            this.$notify({
              group: "general",
              title: "Payment Info",
              text: "User profile updated successfully!",
              type: "success",
            });
            this.editProfileBtnClicked = false;
          }
        });
    },

    // switchPaymentMethod(){

    // },

    addPaymentNumber() {
      this.$store
        .dispatch("addPaymentMethod", {
          user: this.getUuid(),
          momo_number: this.paymentNumber,
        })
        .then((res) => {
          if (res == 1) {
            this.$notify({
              group: "general",
              title: "Payment Info",
              text: "Payment Method updated successfully!",
              type: "success",
            });

            // this.addPaymentNumber =I
          }
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
    ]),
    addImages(uuid) {
      // Add images to this apartment
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
    StyledInput,
    Button,
  },

  created() {
    this.$store.dispatch("getUserListing", {
      uuid: this.getUuid(),
      token: this.getToken(),
    });
    this.$store
      .dispatch("getPaymentMethod", {
        uuid: this.getUuid(),
        token: this.getToken(),
      })
      .then((res) => {
        if (res == 1) {
          this.paymentNumber = this.getUserPaymentNumber();
        }
      });

    this.$store
      .dispatch("getUserInfo", { uuid: this.getUuid(), token: this.getToken() })
      .then((res) => {
        if (res == 1) {
          this.firstName = this.getUserInfo().first_name;
          this.lastName = this.getUserInfo().last_name;
          this.user_description = this.getUserInfo().description;
          this.phoneNumber = this.getUserInfo().phone_number;
        }
      });
  },
};
</script>

<style lang="scss" scoped>
// reviews ==================================*

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
      // border-bottom: 1px solid red;
      width: auto;
      
      padding-bottom: 5px;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
    }
    // .p-review {
    //   width: 200px;
    //   margin-bottom: -205px;
    //   margin-left: 100px;
    //   font-size: 18px;
    //   line-height: 22px;
    //   color: #333333;
    // }
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

.verifications {
  .confirm-verification {
    width: 100%;
    text-align: center;
    border-radius: 15px;
    height: 50vh;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    margin: 4rem 0rem;

    p {
      font-size: 14px;
      width: 52%;
      margin-top: 20px;
      margin-left: 24%;
      line-height: 20px;
      color: #404040;
    }

    div {
      background: #50d75e;
      height: 110px;
      width: 110px;
      margin-top: 20px;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      margin-left: 42%;
    }
  }

  label {
    cursor: pointer;
    margin-left: 40px;
    font-size: 15px;
    padding: 6px 20px;
    background: #fdfdfd;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  #upload-photo {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  .veri-sec-1 {
    // border: 1px solid red;
    p {
      margin-top: 5px;
    }
    display: flex;
    color: #404040;
  }

  .veri-sec-3 {
    margin-top: 5px;
    span {
      margin-left: 33px;
      font-size: 14px;
      align-items: center;
      color: #6a6a6a;
    }
  }

  .upload {
    cursor: pointer;
    font-size: 14px;
    margin-top: 14px;
    margin-left: 200px;
    color: #3a85fc;
  }
}

.update-div {
  width: 80%;
  margin-bottom: 20px;

  h3 {
    font-weight: bold;
    margin-top: 34px;
    margin-bottom: 5px;
    width: 100%;
    font-size: 18px;
    color: #404040;
  }

  .btn-div {
    button {
      padding: 13px 45px;
      width: 35%;
      height: 44px;
      font-size: 15px;
      background: #3a85fc;
      border-radius: 5px;
    }
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

.payout-details {
  .payout-bank-sec {
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;

    .p-bank {
      margin-right: 150px !important;
    }

    p {
      text-align: center;
      padding-bottom: 5px;
      width: 150px;
      font-style: normal;
      // margin-left: 40px;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
    }
  }

  .num-placeholder {
    width: 250px;
  }

  hr {
    width: 500px;
    margin-top: 15px;
    border: 0.5px solid rgba(128, 128, 128, 0.26);
  }
  span {
    margin-left: 10px;
  }
  p {
    font-size: 14px;
    line-height: 28px;
    color: rgba(64, 64, 64, 0.75);
  }
  h3 {
    font-size: 18px;
    line-height: 22px;
    color: rgba(64, 64, 64, 0.75);
  }
}
.p-primary-edit-profile {
  padding: 13px 45px;
  border: transparent;
  position: absolute;
  height: 44px;
  left: 600px;
  color: #3a85fc;
  font-weight: bold;
  cursor: pointer;
  background: rgba(58, 133, 252, 0.1);
  border-radius: 5px;
}

.profile-show {
  hr {
    width: 490px;
    border: 1px solid rgba(51, 51, 51, 0.1);
    margin-bottom: 30px;
  }

  .p-desc {
    color: grey;
    margin-top: 30px;
    margin-bottom: 12px;
    width: 500px;
    font-size: 14px;
    line-height: 18px;
    color: rgba(51, 51, 51, 0.75);
  }

  .p-work,
  .p-lives {
    color: grey;
    margin-top: 20px;
    height: 18px;
    left: 534px;
    font-size: 14px;
    color: rgba(51, 51, 51, 0.75);
    i {
      margin-right: 15px;
      font-size: 20px;
    }
  }
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
        align-items: center;
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

      .add-listing {
        width: 393px;
        height: 50px;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #333333;
      }
      .listing-card-holder {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
      }
      .listing-card {
        margin-right: 10px;
        .action-section {
          button {
            margin: 0 10px 0 0 !important;
            padding: 0.9em 2.5em;
            cursor: pointer;
          }
        }
        margin-bottom: 20px;
        width: 400px;
        height: 350px;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        background-color: #ffffff;
        border-radius: 5px;
        cursor: pointer;

        img {
          width: 100%;
          border-radius: 5px;
          height: 60%;
          object-fit: cover;
        }

        div {
          height: 100%;
          padding: 20px;
          h3 {
            font-size: 18px;
            color: #404040;
            span {
              margin-left: 10px;
              padding: 0.1em 0.2em;
              color: #3a85fc;
              padding: 0.2em 1em;
              font-size: 14px;
              background: rgba(58, 133, 252, 0.1);
              border-radius: 1px;
            }
          }
          p {
            color: #777777;
          }
          .price-p {
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
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
          border: 2px solid black;
          height: 100px;
          width: 100px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: cover;
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
