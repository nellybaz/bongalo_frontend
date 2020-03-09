<template>
  <div class="profile">
    <Navigation :showSearch="false" />
    <div class="content">
      <div class="left">
        <div class="d1 d">Profile</div>

        <div class="d2 d" @click="handleWhatShows(1)">
          <a href="#">
            <div></div>
            <p class="p-item">Dashboard</p>
          </a>
        </div>

        <div class="d3 d">
          <a href="#favourite-section">
            <div></div>
            <p class="p-item">Favourites</p>
          </a>
        </div>

        <div class="d3 d" @click="handleWhatShows(2)">
          <a href="#">
            <div></div>
            <p class="p-item">My Listings</p>
          </a>
        </div>

        <div class="d3 d" @click="handleWhatShows(3)">
          <a href="#">
            <div></div>
            <p class="p-item">Add Payment method</p>
          </a>
        </div>
      </div>

      <div class="right">
        <div v-if="showId == 1">
          <h2 id="dashboard">Profile</h2>
          <div class="top">
            <div :style="getProfileImage()" class="icon-div">
              <input @change="handleProfileSelect" :v-model="backgroundFile" id="p-pic" type="file" />
              <label for="p-pic">
                <i class="fas fa-camera" title="Update profile image"></i>
              </label>
            </div>
          </div>

          <div class="mid">
            <StyledInput @sendInput="handleFName" :value=" getUserInfo() != null ? getUserInfo().first_name: ''" type="text" placeholder="First name" label="FULL NAME" />
            <StyledInput @sendInput="handleLName" :value="getUserInfo().last_name" type="text" placeholder="Last name" label="LAST NAME" />
            <!-- <StyledInput type="text" placeholder="ichieuche@gmail.com" label="EMAIL ADDRESS" /> -->
            <!-- <StyledInput type="text" placeholder="Nigeria" label="NATIONALITY" /> -->
            <StyledInput @sendInput="handlePhone" :value="getUserInfo().phone_number" type="text" placeholder="Enter phone" label="PHONE NUMBER" />

            <!-- <div class="file-select">
              <label for="select-below">UPLOAD VERIFICATION</label>
              <br />
              <br />
              <input type="file" id="select-below" />
            </div> -->
          </div>

          <br />
          <div class="bottom">
            <StyledInput @sendInput="handleDesc" :value="getUserInfo().description" :isTextArea="true" type="text" placeholder label="DESCRIPTION" />
          </div>

          <br />
          <br />
          <br />
          <div class="btn-div">
            <Button @handleClick="updateUser" :isFullWidth="false" label="UPDATE PROFILE" />
          </div>

          <div id="favourite-section" class="fav-section">
            <h3>You dont have any favourite listings yet</h3>
            <br />
            <p class="hint">Places you save will appear hear</p>
          </div>
        </div>

        <div v-else-if="showId == 2">
            <h2>My Listings</h2>
            <br>
            <br>

            <div v-for="listing in getUserListing()" :key="listing.title" class="listing-card">
                <img :src="listing.main_image" alt="">
                <div>
                    <input class="aprtment-title" type="text" :value="listing.title">
                    <br>
                <textarea v-model="listing.description" cols="60" rows="10">
                    
                </textarea>
                    <br>
                    <label >Price</label>
                    <input class="aprtment-price" type="text" :value="listing.price">
                    <br>
                    <section>
                        <button @click="addImages('uuid')">
                        Update
                    </button>
                        <!-- <button @click="addImages('uuid')">
                        Add more images
                    </button> -->
                     <button @click="deleteListing(listing.uuid)">
                        Remove
                    </button>
                    </section>
                </div>
            </div>
        </div>

        <div v-else-if="showId == 3">
            <h2>Add payment method</h2>

            <br><br>
            <h3>Mobile Money Number</h3>
            <br><br>
            <strong>Current:</strong>
            <p>
              {{
                paymentNumber
              }}
            </p>
            <br>
            <StyledInput @sendInput="handleInput" :value="paymentNumber" type="text" placeholder="Enter mobile money number" label="MOBILE MONEY NUMBER" />
            <br>
            <Button @handleClick="addPaymentNumber" :isFullWidth="false" label="Save"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navigation from "../components/Blog/Navigation";
import StyledInput from "../components/StyledInput";
import Button from "../components/Button";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "",
  data: function() {
    return {
        user_description:'',
        firstName:'',
        lastName: '',
        phoneNumber: '',
        listing:{
        paymentNumber: '',
        title:'',
        description:''
      },

      showId: 1,
      backgroundUrl: "https://freesvg.org/img/abstract-user-flat-3.png",
      backgroundFile: null
    };
  },
  methods: {
    getUserValue(intent){
      return "ne"
        // if(intent == 1){
        //   this.phoneNumber = this.getUserInfo().phone_number
        //   return this.phoneNumber
        // }
    },
    handleFName(val){
      this.firstName = val
    },
    handleLName(val){
      this.lastName = val
    },
    handleDesc(val){
      this.user_description = val
    },
    handlePhone(val){
      this.phoneNumber = val
    },

    handleInput(val){
      this.paymentNumber = val
    },
    updateUser(){
      this.$store.dispatch('updateUserInfo', 
      {
      last_name:this.lastName, 
      first_name:this.firstName, 
      phone:this.phoneNumber, 
      token:this.getToken(), 
      user:this.getUuid(), 
      description:this.user_description
      })
      .then(res => {
        if(res == 1){
           this.$notify({
              group: 'general',
              title: 'Payment Info',
              text: 'User profile updated successfully!',
              type:'success'
              });
        }
      })
    },
    addPaymentNumber(){
      this.$store.dispatch('addPaymentMethod', {user:this.getUuid(), momo_number:this.paymentNumber})
      .then(res => {
        if(res == 1){
             this.$notify({
                group: 'general',
                title: 'Payment Info',
                text: 'Payment Method updated successfully!',
                type:'success'
                });

            // this.addPaymentNumber = 
        }
      })
    },
    deleteListing(apartmentUuid){
      window.console.log("delete clicked")
      this.$store.dispatch('deleteUserListing', {user:this.getUuid(), token:this.getToken(), apartment:apartmentUuid})
      .then(res => {
        this.$store.dispatch('getUserListing',{uuid:this.getUuid(), token:this.getToken()})
      })
    },
      ...mapGetters(['getUuid', 'getToken', 'getUserListing', 'getUserPaymentNumber', 'getUserInfo']),
      addImages(uuid){
          // Add images to this apartment
      },
    handleWhatShows(intent) {
      this.showId = intent;
    },
    handleProfileSelect(e) {
      //  window.console.log(e)
      this.backgroundUrl = URL.createObjectURL(e.target.files[0]);
      // TODO: Dispatch action to update profile picture

       // Data should have uuid, token and image object
      let data = {
          uuid: this.getUuid(),
          token: this.getToken(),
          imageObject: e.target.files[0]
      }
      this.$store.dispatch('updateImage', data)
      .then(res => {
          this.$notify({
            group: 'general',
            title: 'Info !!',
            text: 'Your image is uploaded successfully',
            type: 'success'
            });
            window.location.reload()
          
      })
    },
    getProfileImage() {
      return window.localStorage.getItem("profile_image") ? "background-image:" +"url("+ window.localStorage.getItem("profile_image") + ")": "background-image:" + "url(" + this.backgroundUrl + ")";
    }
  },
  components: {
    Navigation,
    StyledInput,
    Button
  },

  created(){
      this.$store.dispatch('getUserListing',{ uuid:this.getUuid(), token:this.getToken() })
      this.$store.dispatch('getPaymentMethod', { uuid:this.getUuid(),  token:this.getToken()})
      .then(res => {
        if(res == 1){
          this.paymentNumber = this.getUserPaymentNumber()
        }
      })

    this.$store.dispatch('getUserInfo', { uuid:this.getUuid(), token:this.getToken() })
    .then(res => {
      if (res == 1){
        window.console.log(this.getUserInfo())
        window.console.log("user info above")
        this.firstName = this.getUserInfo().first_name
        this.lastName = this.getUserInfo().last_name
        this.user_description = this.getUserInfo().description
        this.phoneNumber = this.getUserInfo().phone_number
      }
    })
    .catch(err => {
      window.console.log(err)
    })
  }
};
</script>


<style lang='scss' scoped>
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
    }

    .left {
      position: sticky;
      top: 20px;
      height: 450px;
      background: #ffffff;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

      .d {
        width: 100%;
        border-bottom: 1px solid #3a85fc;
        height: 80px;

        .p-item {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;

          color: #404040;
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

        color: #404040;
      }

      .d2,
      .d3 {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 0 30px;
        div {
          background: rgba(196, 196, 196, 0.2);
          height: 40px;
          width: 40px;
          border-radius: 50%;
          // border:1px solid red;
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
        .listing-card{
            margin-bottom: 20px;
            width:100%;
            height: 350px;
            box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
            background-color: #F6FAFF;
            border-radius: 5px;
            display: grid;
            grid-template-columns: 3fr 7fr;
            align-items: center;
            justify-content: center;
            padding: 20px;
            cursor: pointer;

            img{
                width:100%;
                border-radius: 5px;
                height: 100%;
                object-fit: cover

            }

            div{
                display:flex;
                align-items:flex-start;
                justify-content:flex-start;
                flex-direction: column;
                // border:1px solid red;
                height: 100%;
                padding: 20px;
                p{
                    color: #777777
                }
                .price-p{
                    font-size: 20px;
                    font-weight: bold
                }
            }
        }
      h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 42px;

        color: #404040;
      }

      .top {
        margin-top: 30px;
        width: 100%;
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

      .mid {
        display: grid;
        grid-gap: 40px;
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