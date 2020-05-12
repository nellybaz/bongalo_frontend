<template>
  <div class="reset-password">
    <Navigation :showSearch="false"></Navigation>
    <div class="content">
      <h1>Reset your password</h1>
      <br />
      <small style="color:red">
        {{ errorMessage }}
      </small>
      <br />
      <StyledInput
        @sendInput="
          (val) => {
            password = val;
          }
        "
        label="NEW PASSWORD"
        placeholder="Enter new password"
        type="password"
      />
      <StyledInput
        @sendInput="
          (val) => {
            password2 = val;
          }
        "
        label="CONFIRM PASSWORD"
        placeholder="Confirm new password"
        type="password"
      />

      <br />
      <Button @handleClick="handleReset" label="Reset" :isFullWidth="false" />
    </div>
  </div>
</template>

<script>
import StyledInput from "../components/StyledInput";
import Button from "../components/Button";
import Navigation from "../components/Blog/Navigation";
import {mapActions } from 'vuex';

export default {
  name: "reset_password",
  components: {
    StyledInput,
    Button,
    Navigation,
  },

  data: function() {
    return {
      password: "",
      password2: "",
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(['setModalState']),
    handleReset() {
      this.errorMessage = "";
      if (!this.password || !this.password2) {
        this.errorMessage = "Both fields are required";
      } else {
        if (this.password != this.password2) {
          this.errorMessage = "Both passwords must match";
        } else {
            let message = this.$route.params.message
            let uid = message.split('-')[0]
            let data = {
              new_password1: this.password,
              new_password2: this.password,
              uid: uid,
              token: message.substring(uid.length+1, message.length),
              tokenToSend: "token",
              message: message
            }
            window.console.log(data)
          this.$store
            .dispatch("resetPassword", data)
            .then((res) => {
                this.$router.push('/').then((res) =>{
                    this.setModalState(1)
                })
            })
            .catch((err) => {
                window.alert('An error occured')
            });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  width: 100%;
  .content {
    padding: 100px 30%;
  }
}
</style>
