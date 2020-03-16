<template>
  <div v-if="getModalState != 0" class="login-modal">
    <div class="modal-content">
      <div class="i-div">
        <i v-on:click="closeModal" class="far fa-times-circle"></i>
      </div>
      <div v-if="isVerify" class="forgot-password">
        <h3>Verify</h3>

        <p>Enter the pin received on your email</p>

        <br />
        <!-- <Input @inputHandler="handleInput" step="pin_verify" hint="Enter PIN" type="text" value="PIN" :isFullWidth="true"/> -->
        <div class="pin-div">
          <input
            @keyup="handleInput({data:pinModel, step:'pin_verify'})"
            v-model="pinModel"
            type="text"
            placeholder="Enter PIN"
          />
        </div>
        <small v-if="pinErrorMessage">
          {{
          pinErrorMessage
          }}
        </small>
        <br />

        <br />

        <Button
          v-if="!isButtonClicked"
          @handleClick="verifyEmail"
          label="Verify"
          :isFullWidth="true"
        />
        <div class="loader-div" v-else>
          <pulse-loader class="loader" color="#3A85FC" size="10px"></pulse-loader>
        </div>
        <hr />

        <p>
          Didn't get a pin ?
          <span v-on:click="goto(1)">Resend</span>
        </p>

        <p>
          Go back to
          <span v-on:click="goto(1)">Login</span>
        </p>
      </div>

      <div class="login-div" v-else-if="getModalState == 1">
        <p class="login-error" v-if="signInError">
          {{
          signInError
          }}
        </p>
        <Input
          @inputHandler="handleInput"
          icon="fas fa-envelope"
          hint="Email address"
          step="email"
          type="email"
          :isFullWidth="true"
        />
        <small v-if="emailErrorMessage">{{emailErrorMessage}}</small>
        <br />
        <Input
          @inputHandler="handleInput"
          icon="fas fa-lock"
          hint="Password"
          step="password"
          type="password"
          :isFullWidth="true"
        />
        <small v-if="passwordErrorMessage">{{passwordErrorMessage}}</small>
        <br />
        <br />

        <Button
          v-if="!isButtonClicked"
          v-on:handleClick="handleButton(2)"
          label="Login"
          :isFullWidth="true"
        />
        <div class="loader-div" v-else>
          <pulse-loader class="loader" color="#3A85FC" size="10px"></pulse-loader>
        </div>

        <strong v-on:click="goto(3)">Forgot password ?</strong>

        <hr />
        <SocialSignin @handleSocialSignup="handleSocialSignup" />

        <p>
          Don't have an account ?
          <span v-on:click="goto(2)">Register</span>
        </p>
      </div>

      <div v-else-if="getModalState == 2" class="signup-div">
        <Input
          @inputHandler="handleInput"
          icon="fas fa-user"
          hint="First name"
          step="first_name"
          type="text"
          :isFullWidth="true"
        />
        <small v-if="fnameErrorMessage">{{fnameErrorMessage}}</small>
        <br />
        <Input
          @inputHandler="handleInput"
          icon="fas fa-user"
          hint="Last name"
          step="last_name"
          type="text"
          :isFullWidth="true"
        />
        <small v-if="lnameErrorMessage">{{lnameErrorMessage}}</small>
        <br />
        <Input
          @inputHandler="handleInput"
          icon="fas fa-envelope"
          hint="Email address"
          step="email"
          type="email"
          :isFullWidth="true"
        />
        <small v-if="emailErrorMessage">{{emailErrorMessage}}</small>
        <br />
        <Input
          @inputHandler="handleInput"
          icon="fas fa-lock"
          hint="Creaate Password"
          step="password"
          type="password"
          :isFullWidth="true"
        />
        <small v-if="passwordErrorMessage">{{passwordErrorMessage}}</small>
        <br />
        <br />
        <small class="terms-small">{{termsCheckBoxError}}</small>

        <div class="terms-checkbox">
          <input type="checkbox" v-model="termsCheckBox" />
          <p>
            I accept Bongalo's
            <span @click="handleTermsLink">Terms and Condition</span>
          </p>
        </div>

        <Button
          v-if="!isButtonClicked"
          v-on:handleClick="handleButton(1)"
          label="Sign up"
          :isFullWidth="true"
        />
        <div class="loader-div" v-else>
          <pulse-loader class="loader" color="#3A85FC" size="10px"></pulse-loader>
        </div>

        <hr />

        <SocialSignin @handleSocialSignup="handleSocialSignup" />

        <p>
          Already have an account ?
          <span v-on:click="goto(1)">Login</span>
        </p>
      </div>

      <div v-else-if="getModalState == 3" class="forgot-password">
        <h3>Reset Password</h3>

        <p>Enter the email address associated with your account, and we’ll email you a link to reset your password.</p>

        <br />
        <Input hint="Email address" icon="fas fa-envelope" step type="email" :isFullWidth="true" />
        <br />

        <Button label="Send reset link" :isFullWidth="true" />
        <!-- <br><br> -->
        <strong>
          <!-- Forgot password ? -->
        </strong>

        <hr />

        <p>
          Or cancel and head back to
          <span v-on:click="goto(1)">Login</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Input from "../components/TextInput";
import Button from "../components/Button";
import SocialSignin from "./SocialSignin";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "login-modal",
  components: {
    Input,
    Button,
    SocialSignin,
    PulseLoader
  },
  methods: {
    handleTermsLink() {
      this.setModalState(0);
      this.$router.push("/terms-condition");
    },
    handleInput(val) {
      if (val.step == "pin_verify") {
        this.pinModel = val.data;
      }
      if (val.step == "email") {
        this.email = val.data;
      }
      if (val.step == "first_name") {
        this.first_name = val.data;
      }
      if (val.step == "last_name") {
        this.last_name = val.data;
      }
      if (val.step == "password") {
        this.password = val.data;
      }
    },
    ...mapActions(["setModalState"]),
    handleSocialSignup(provider) {
      this.$store.dispatch("socialSignin", { provider: provider }).then(res => {
        window.console.log(res);
        if (res == 1) {
          this.setModalState(0);
        }
      });
    },
    closeModal() {
      this.isButtonClicked = false;
      this.isVerify = false;
      this.setModalState(0);
    },

    goto(intent) {
      this.email = "";
      this.first_name = "";
      this.last_name = "";
      this.password = "";
      this.setModalState(intent);
    },
    validateFields(intent) {
      let res = true;

      if (!this.email) {
        this.emailErrorMessage = "Email is required";
        res = false;
      } else {
        if (!this.email.includes("@")) {
          this.emailErrorMessage = "Enter a valid email address";
          res = false;
        } else {
          let emailDomain = this.email.split("@")[1];
          if (!emailDomain.includes(".")) {
            this.emailErrorMessage = "Enter a valid email address";
          } else {
            this.emailErrorMessage = "";
          }
        }
      }

      if (intent == 1) {
        if (!this.first_name) {
          this.fnameErrorMessage = "First name is required";
          res = false;
        } else {
          this.fnameErrorMessage = "";
        }
        if (!this.last_name) {
          this.lnameErrorMessage = "Last name is required";
          res = false;
        } else {
          this.lnameErrorMessage = "";
        }
        if (!this.password) {
          this.passwordErrorMessage = "Password is required";
          res = false;
        } else {
          this.passwordErrorMessage = "";
        }
      } else {
        if (!this.password) {
          this.passwordErrorMessage = "Password is required";
          res = false;
        } else {
          this.passwordErrorMessage = "";
        }
      }

      return res;
    },
    handleButton(intent) {
      if (this.validateFields()) {
        if (intent == 1) {
          if (!this.termsCheckBox) {
            this.termsCheckBoxError = "Please accpet terms and condition";
            // this.$notify({
            // group: 'general',
            // title: 'Info !!',
            // text: 'You need to accept the terms and condition before registering',
            // type: 'error'
            // });
          } else {
            this.isButtonClicked = true;
            this.termsCheckBoxError = "";
            let data = {
              email: this.email,
              first_name: this.first_name,
              last_name: this.last_name,
              password: this.password,
              is_active: false,
              is_admin: false
            };
            this.$store.dispatch("register", data).then(res => {
              // this.email = ""
              this.first_name = "";
              this.last_name = "";
              this.password = "";
              this.isButtonClicked = false;
              this.isVerify = true;
            });
          }
        } else if (intent == 2) {
          let data = {
            username: this.email,
            password: this.password
          };

            this.isButtonClicked = true;
            this.$store.dispatch("login", data).then(res => {
            
            if (res == 1) {
              this.setModalState(0);
              let query = this.$route.query.next
              if (query){
                this.$router.push(query)
              }
            }
          })
          .catch(res => {
              this.isButtonClicked = false;
              this.signInError = res;
          })
        }
      }
    },

    verifyEmail() {
      if (!this.pinModel) {
        this.pinErrorMessage = "PIN is required";
      } else {
        this.isButtonClicked = true;
        let data = {
          email: this.email,
          pin: this.pinModel
        };
        this.$store
          .dispatch("verifyEmail", data)
          .then(res => {
            this.isButtonClicked = false;
            if (res == 1) {
              this.isVerify = false;
              this.setModalState(0);
              this.$notify({
                group: "general",
                title: "Congratulations !!",
                text: "You are now a user of bongalo, have fun in your travels",
                type: "success"
              });

              let query = this.$route.query.next
              if (query){
                this.$router.push(query)
              }
            }
          })
          .catch(res => {
            this.isButtonClicked = false;
            this.pinErrorMessage = res;
          });
      }
    }
  },

  data: function() {
    return {
      isButtonClicked: false,
      termsCheckBoxError: "",
      emailErrorMessage: "",
      fnameErrorMessage: "",
      lnameErrorMessage: "",
      passwordErrorMessage: "",
      pinErrorMessage: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      showModal: true,
      termsCheckBox: "",
      isVerify: false,
      pinModel: "",
      signInError: ""
    };
  },
  computed: mapGetters(["getModalState"])
};
</script>


<style lang='scss' scoped>

.login-error{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    width:100%;
    color: red !important;
    font-size: 12px;
}
.loader-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
}
.pin-div {
  width: 100%;
  // height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  input {
    width: 92%;
    height: 40px;
    padding: 10px 10px;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: rgba(106, 106, 106, 0.7);
    border-radius: 5px 0 0 5px;
  }

  i {
    font-size: 20px !important;
    padding: 0 10px;
    color: #3a85fc;
  }
  input:focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: rgba(106, 106, 106, 0.7);
  }
}
// .border{
//     border: 1px solid #3A85FC !important;
// }

small {
  font-size: 10px;
  color: red;
}
.terms-small {
  font-size: 12px !important;
}

.hide {
  display: none !important;
}
.login-modal {
  position: fixed;
  top: 0;
  z-index: 9999999999;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .modal-content {
    padding: 20px;
    width: 30%;
    height: auto;
    background: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .i-div {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: row;

      i {
        font-size: 20px;
        cursor: pointer;
        color: #3a85fc;
        margin-bottom: 30px;
        float: right;
        // border:1px solid red;
      }
    }

    .signup-div {
      .terms-checkbox {
        // margin: 0;
        // padding: 0px !important;
        // border:1px solid red;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;

        input {
          margin-right: 10px;
        }
      }
    }
    .login-div,
    .signup-div,
    .forgot-password {
      width: 100%;

      strong {
        margin: 20px 0;
        // border:1px solid red;
        text-align: center;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 14px;
        cursor: pointer;
      }

      hr {
        height: 1px;
        background: #6a6a6a;
        opacity: 0.2;
      }
      p {
        margin: 20px 0;
        // border:1px solid red;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;

        color: #6a6a6a;

        span {
          margin-left: 10px;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          /* identical to box height */

          display: flex;
          align-items: center;
          cursor: pointer;
          color: #3a85fc;
        }
      }
    }

    .forgot-password {
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        display: flex;
        align-items: center;

        color: #404040;
      }
    }
  }
}
</style>