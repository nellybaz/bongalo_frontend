<template>
  <div id="app">
    <modal
      name="login"
      height="570"
      width="30%"
      @before-close="beforeClose"
      :clickToClose="false"
    >
      <div class="modal-content">
        <div class="i-div">
          <i v-on:click="$modal.hide('login')" class="far fa-times-circle"></i>
        </div>
        <div class="login-div">
          <p class="login-error" v-if="signInError">{{ signInError }}</p>
          <Input
            @inputHandler="handleInput"
            icon="fas fa-envelope"
            hint="Email address"
            step="email"
            type="email"
            :isFullWidth="true"
          />
          <small v-if="emailErrorMessage">{{ emailErrorMessage }}</small>
          <br />
          <Input
            @inputHandler="handleInput"
            icon="fas fa-lock"
            hint="Password"
            step="password"
            type="password"
            :isFullWidth="true"
          />
          <small v-if="passwordErrorMessage">{{ passwordErrorMessage }}</small>
          <br />
          <br />

          <Button
            v-if="!isButtonClicked"
            v-on:handleClick="handleButton(2)"
            label="Login"
            :isFullWidth="true"
          />
          <div class="loader-div" v-else>
            <pulse-loader
              class="loader"
              color="#3A85FC"
              size="10px"
            ></pulse-loader>
          </div>

          <strong
            v-on:click="
              () => {
                this.$modal.hide('login');
                this.$modal.show('forgot-password');
              }
            "
            >Forgot password ?</strong
          >

          <hr />
          <SocialSignin @handleSocialSignup="handleSocialSignup" />

          <p>
            Don't have an account ?
            <span
              v-on:click="
                () => {
                  this.$modal.hide('login');
                  this.$modal.show('register');
                }
              "
              >Register</span
            >
          </p>
        </div>
      </div>
    </modal>
    <modal
      name="register"
      height="650"
      width="30%"
      @before-close="beforeClose"
      :clickToClose="false"
    >
      <div class="modal-content">
        <div class="i-div">
          <i
            v-on:click="$modal.hide('register')"
            class="far fa-times-circle"
          ></i>
        </div>

        <div class="signup-div">
          <Input
            @inputHandler="handleInput"
            icon="fas fa-user"
            hint="First name"
            step="first_name"
            type="text"
            :isFullWidth="true"
          />
          <small v-if="fnameErrorMessage">{{ fnameErrorMessage }}</small>
          <br />
          <Input
            @inputHandler="handleInput"
            icon="fas fa-user"
            hint="Last name"
            step="last_name"
            type="text"
            :isFullWidth="true"
          />
          <small v-if="lnameErrorMessage">{{ lnameErrorMessage }}</small>
          <br />
          <Input
            ref="emailAddressRef"
            @inputHandler="handleInput"
            icon="fas fa-envelope"
            hint="Email address"
            step="email"
            type="email"
            :isFullWidth="true"
          />
          <small v-if="registerEmailErrorMessage">
            {{ registerEmailErrorMessage }}
          </small>
          <br />
          <Input
            ref="passwordRef"
            @inputHandler="handleInput"
            icon="fas fa-lock"
            hint="Create Password"
            step="password"
            type="password"
            :isFullWidth="true"
          />
          <small v-if="registerPasswordErrorMessage">
            {{ registerPasswordErrorMessage }}
          </small>
          <br />
          <br />
          <small class="terms-small">{{ termsCheckBoxError }}</small>

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
            <pulse-loader
              class="loader"
              color="#3A85FC"
              size="10px"
            ></pulse-loader>
          </div>

          <hr />

          <SocialSignin @handleSocialSignup="handleSocialSignup" />

          <p>
            Already have an account ?
            <span
              v-on:click="
                () => {
                  this.$modal.hide('register');
                  this.$modal.show('login');
                }
              "
              >Login</span
            >
          </p>
        </div>
      </div>
    </modal>
    <modal
      name="forgot-password"
      height="450"
      width="30%"
      @before-close="beforeClose"
      :clickToClose="false"
    >
      <div class="modal-content">
        <div class="i-div">
          <i
            v-on:click="$modal.hide('forgot-password')"
            class="far fa-times-circle"
          ></i>
        </div>
        <div class="forgot-password">
         <div v-if="successMessage.length < 1">
            <h3>Reset Password</h3>

          <p>
            Enter the email address associated with your account, and we’ll
            email you a link to reset your password.
          </p>

          <br />
          <small class="terms-small">{{ emailErrorMessage }}</small>
          <small class="success-mes">{{ successMessage }}</small>
          <br />
          <br />

          <Input
            @inputHandler="handleInput"
            hint="Email address"
            icon="fas fa-envelope"
            step="email"
            type="email"
            :isFullWidth="true"
          />
          <br />

          <Button
            v-if="!isButtonClicked"
            v-on:handleClick="handleButton(3)"
            label="Send reset link"
            :isFullWidth="true"
          />

          <div
            class="loader-div"
            v-else-if="isButtonClicked"
          >
            <pulse-loader
              class="loader"
              color="#3A85FC"
              size="10px"
            ></pulse-loader>
          </div>

          <hr />

          <p >
            Or cancel and head back to
            <span
              v-on:click="
                () => {
                  $modal.hide('forgot-password');
                  $modal.show('login');
                }
              "
              >Login</span
            >
          </p>
         </div>
         <div v-else class="success-container">
            <h3>We've sent you an email</h3>
            <br>
            <br>

            <img
          style="width:auto; margin:2rem"
          src="./assets/images/s-icon.png"
          alt="bongalo-careers"
        />
        <br>
            <p class="reset-success-text">Please check</p>
            <strong>{{"nellybaz10@gmail.com"}}</strong>
            <p class="reset-success-text"> to reset your password using the link we just sent</p>

            <!-- <br> -->
            <!-- <p v-if="!isButtonClicked">Didn't get the email? <span @click="handleButton(3)">Resend</span></p>

          <div
            class="loader-div"
            v-else-if="isButtonClicked"
          >
            <pulse-loader
              class="loader"
              color="#3A85FC"
              size="10px"
            ></pulse-loader>
          </div> -->
            <hr>



            <br>
            <p>Go back to  <span @click="()=>{
              $modal.hide('forgot-password');
              $modal.show('login');
              }">Login</span></p>
            <hr>


         </div>
        </div>
      </div>
    </modal>

    <modal
      name="verify-pin"
      height="570"
      width="30%"
      @before-close="beforeClose"
      :clickToClose="false"
    >
      <div class="modal-content">
        <div class="i-div">
          <i
            v-on:click="$modal.hide('verify-pin')"
            class="far fa-times-circle"
          ></i>
        </div>
        <div class="forgot-password">
          <h3>Verify</h3>
          <small class="terms-small">{{ termsCheckBoxError }}</small>

          <p>Enter the pin received on your email</p>

          <br />
          <div class="pin-div">
            <input
              @keyup="handleInput({ data: pinModel, step: 'pin_verify' })"
              v-model="pinModel"
              type="text"
              placeholder="Enter PIN"
            />
          </div>
          <small v-if="pinErrorMessage">
            {{ pinErrorMessage }}
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
            <pulse-loader
              class="loader"
              color="#3A85FC"
              size="10px"
            ></pulse-loader>
          </div>
          <hr />

          <p v-if="!isButtonResendVerifyPinClicked">
            Didn't get a pin ?
            <span v-on:click="resendPin()">Resend</span>
          </p>
          <div class="loader-div" v-else>
            <pulse-loader
              class="loader"
              color="#3A85FC"
              size="10px"
            ></pulse-loader>
          </div>

          <p>
            Go back to
            <span v-on:click="goto(2)">Register</span>
          </p>
        </div>
      </div>
    </modal>
    <Login></Login>
    <notifications :duration="5000" position="top right" group="general" />
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Footer from "./components/Footer";
import Login from "./components/SignInModal";

import Input from "./components/TextInput";
import Button from "./components/Button";
import SocialSignin from "./components/SocialSignin";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "main_app",
  components: {
    Footer,
    Login,
    Input,
    Button,
    SocialSignin,
    PulseLoader,
  },
  data: function() {
    return {
      successMessage: "",
      isButtonResendVerifyPinClicked: false,
      isButtonClicked: false,
      registerEmailErrorMessage: "",
      registerPasswordErrorMessage: "",
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
      pinModel: "",
      signInError: "",
    };
  },
  computed: mapGetters(["getModalState"]),
  methods: {
    beforeClose(event) {
      this.emailErrorMessage = "";
      this.emailErrorMessage = "";
      this.registerEmailErrorMessage = "";
      this.registerPasswordErrorMessage = "";
      this.termsCheckBoxError = "";
      this.fnameErrorMessage = "";
      this.lnameErrorMessage = "";
      this.passwordErrorMessage = "";
      this.signInError = "";
      this.email = "";
      this.password = "";
      this.first_name = "";
      this.last_name = "";
      this.termsCheckBox = false;
      this.pinModel = "";
    },
    resendPin() {
      this.isButtonResendVerifyPinClicked = true;
      this.termsCheckBoxError = "";
      this.pinErrorMessage = "";
      this.$store
        .dispatch("resendVerificationPin", { email: this.email })
        .then((res) => {
          this.termsCheckBoxError =
            "Pin resent to your email, enter it here to verify";
          this.isButtonResendVerifyPinClicked = false;
        })
        .catch((err) => {
          this.isButtonResendVerifyPinClicked = false;
          this.termsCheckBox = "Error occured. Please try again";
        });
    },
    handleTermsLink() {
      this.$modal.hide("register");
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
      this.$store
        .dispatch("socialSignin", { provider: provider })
        .then((res) => {
          if (res == 1) {
            this.$modal.hide("register");
            this.$modal.hide("login");
          }
        });
    },
    validateFields(intent) {
      let res = true;

      if (this.email.length < 1) {
        if (intent == 1) {
          this.registerEmailErrorMessage = "Email is required";
        } else {
          this.emailErrorMessage = "Email is required";
        }
        res = false;
      } else {
        if (!this.email.includes("@")) {
          if (intent == 1) {
            this.registerEmailErrorMessage = "Enter a valid email address";
          } else {
            this.emailErrorMessage = "Enter a valid email address";
          }
          res = false;
        } else {
          let emailDomain = this.email.split("@")[1];
          if (!emailDomain.includes(".")) {
            if (intent == 1) {
              this.registerEmailErrorMessage = "Enter a valid email address";
            } else {
              this.emailErrorMessage = "Enter a valid email address";
            }
          } else {
            this.emailErrorMessage = "";
            this.registerEmailErrorMessage = "";
          }
        }
      }

      if (intent == 1) {
        if (this.first_name.length < 1) {
          this.fnameErrorMessage = "First name is required";
          res = false;
        } else {
          this.fnameErrorMessage = "";
        }
        if (this.last_name.length < 1) {
          this.lnameErrorMessage = "Last name is required";
          res = false;
        } else {
          this.lnameErrorMessage = "";
        }
        if (this.password.length < 1) {
          this.registerPasswordErrorMessage = "Password is required";
          res = false;
        } else {
          this.registerPasswordErrorMessage = "";
        }
      } else if (intent == 2) {
        if (this.password.length < 1) {
          this.passwordErrorMessage = "Password is required";
          res = false;
        } else {
          this.passwordErrorMessage = "";
        }
      }
      // else if(intent == 3){

      // }

      return res;
    },
    handleButton(intent) {
      if (intent == 1) {
        if (this.validateFields(1)) {
          if (!this.termsCheckBox) {
            this.termsCheckBoxError = "Please accpet terms and condition";
          } else {
            this.isButtonClicked = true;
            this.termsCheckBoxError = "";
            let data = {
              email: this.email,
              first_name: this.first_name,
              last_name: this.last_name,
              password: this.password,
              is_active: false,
              is_admin: false,
            };
            this.$store
              .dispatch("register", data)
              .then((res) => {
                // this.email = ""
                this.first_name = "";
                this.last_name = "";
                this.password = "";
                this.isButtonClicked = false;
                this.$modal.hide("register");
                this.$modal.show("verify-pin");
              })
              .catch((err) => {
                this.isButtonClicked = false;
                this.termsCheckBoxError = err.data.message;
                for (var key in err.data.data) {
                  this.termsCheckBoxError = err.data.data[key][0] + "\n";
                }
              });
          }
        }
      } else if (intent == 2) {
        if (this.validateFields(2)) {
          let data = {
            username: this.email,
            password: this.password,
          };

          this.isButtonClicked = true;
          this.$store
            .dispatch("login", data)
            .then((res) => {
              if (res == 1) {
                this.$modal.hide("login");
                let query = this.$route.query.next;
                if (query) {
                  this.$router.push(query);
                }
              }
            })
            .catch((res) => {
              this.isButtonClicked = false;
              this.signInError = res.data.message;
            });
        }
      } else if (intent == 3) {
        if (this.validateFields(3)) {
          this.emailErrorMessage = "";
          this.isButtonClicked = true;
          this.$store
            .dispatch("sendForgetPasswordLink", { email: this.email })
            .then((res) => {
              this.isButtonClicked = false;
              this.successMessage = res.message;
            })
            .catch((err) => {
              window.console.log(err);
              this.isButtonClicked = false;
              this.emailErrorMessage = err.data.message;
              this.signInError = err.data.message;
            });
        }
      }
    },

    verifyEmail() {
      this.pinErrorMessage = "";
      if (!this.pinModel) {
        this.pinErrorMessage = "PIN is required";
      } else {
        this.isButtonClicked = true;
        let data = {
          email: this.email,
          pin: this.pinModel,
        };
        this.$store
          .dispatch("verifyEmail", data)
          .then((res) => {
            this.isButtonClicked = false;
            if (res == 1) {
              this.$modal.hide("verify-pin");
              this.$notify({
                group: "general",
                title: "Congratulations !!",
                text: "You are now a user of bongalo, have fun in your travels",
                type: "success",
              });

              let query = this.$route.query.next;
              if (query) {
                this.$router.push(query);
              }
            }
          })
          .catch((err) => {
            this.isButtonClicked = false;
            this.pinErrorMessage = err.data.data;
          });
      }
    },
  },
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title || "Bongalo";
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
/* Import Inter fonts  */
@import url("https://rsms.me/inter/inter.css");

html {
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.success-mes {
  color: green;
  font-size: 14px !important;
}

.hidden {
  height: 0.1px;
  width: 0.1px;
  position: absolute;
  top: -100000px;
}

.login-error {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
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
.modal-content {
  padding: 3em 2em;
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

    .success-container{
      padding: 0 !important;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction: column;

      img, p, strong{
        margin: 0 !important;
      }

      .reset-success-text{

        span{
          font-weight: bold;
        }
}

    }

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
</style>
