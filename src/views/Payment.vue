<template>
  <div class="payment">
    <div v-if="isLoading && isSuccess">
      <h1 style="text-align:center">Confirming your payment <br> please wait!!</h1>
      <br />
      <br />
      <div class="loader-div">
        <pulse-loader class="loader" color="#3A85FC" size="10px"></pulse-loader>
      </div>
    </div>

    <div class="success" v-else-if="!isLoading && isSuccess">
      <h1 style="color:#3A85FC">Booking Successful</h1>
      <br />
      <br>
      <p>Thank you for booking with us.</p>
      <br />
      <p style="text-align:center">
        <span style="font-weight:bold">Note:</span> You will receieve an email
        of the booking details 
      </p>

      <br />
      <br />
       <div class="round-div">
        <img
          style="width:auto; margin:2rem"
          src="../assets/images/v-icon.png"
          alt="bongalo-careers"
        />
      </div>

      <div class="success-actions">
        <button @click="$router.push('/')">Go back home</button>
        <button @click="$router.push('/profile')">Go to profile</button>
      </div>
    </div>
    
    <div class="success" v-else>
      <h1 style="color:#3A85FC">Booking Failed</h1>
      <br />
      <br>
      <p>Your booking failed to complete.</p>
      <br />
      <p style="text-align:center">
        <span style="font-weight:bold">Note:</span> Please contact us if your account was debited
      </p>

      <br />
      <br />
       <div class="round-div-error">
        <!-- <img
          style="width:auto; margin:2rem"
          src="../assets/images/v-icon.png"
          alt="bongalo-careers"
        /> -->
        <i class="fas fa-times"></i>
      </div>

      <div class="success-actions">
        <button @click="$router.push('/')">Go back home</button>
        <a href="mailto:info@bongalo.co">Contact us</a>
      </div>
    </div>
  </div>
</template>

<script>
import StyledInput from "../components/StyledInput";
import Button from "../components/Button";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "payment",
  components: {
    //  StyledInput,
    //  Button,
    PulseLoader,
  },
  data: function() {
    return {
      isLoading: true,
      paymentMethod: 2,
      isPaymentProcess: true,
      isSuccess:true
    };
  },
  methods: {
    paymentHandler() {
      this.isPaymentProcess = false;
    },
  },
  created() {
    const data = {
      token: this.$store.getters.getToken,
      pay_token: this.$route.query["TransactionToken"],
      user: this.$store.getters.getUuid,
    };
    window.console.log(data);
     this.$store.dispatch('confirmBooking', data)
     .then((res) => {
         window.console.log(res)
         if(res['responseCode'] == 1){
             this.isLoading = false
         }
         else{
             this.isSuccess = false;
         }
     })
     .catch((err) =>{
         this.isSuccess = false;
         window.console.log(err)
     })
  },
};
</script>

<style lang="scss" scoped>

.round-div {
      background: #50d75e;
      height: 110px;
      width: 110px;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction: row;
      i{
          font-size: 55px !important;
          color: white !important;
      }
    }

    .round-div-error {
      background: red;
      height: 110px;
      width: 110px;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction: row;
      i{
          font-size: 55px !important;
          color: white !important;
      }
    }

.loader-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.active_tab {
  background-color: navy;
  color: #fff !important;
}
.payment {
  width: 100%;
  padding: 100px 30%;

  .payment-tab {
    border: 1px solid black;
    width: 100%;
    height: 50px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);

    .payment-tab-item {
      width: 100%;
      height: 100%;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-direction: row;
    }
  }

  .payment-details {
    h2,
    h3,
    p {
      color: grey;
    }
    p {
      line-height: 30px;
    }
  }

  .success {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: 40px;
    }
    i {
      font-size: 120px;
      color: green;
    }

    .success-actions {
      width: 100%;
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;

      button, a {
        margin-right: 5px;
        background: rgba(58, 133, 252, 0.1);;
        padding: 1em 2em;
        border: none;
        color:#3a85fc;
        cursor: pointer;
        text-decoration: underline;
        font-size: 15px;

      }
    }
  }
}
</style>
