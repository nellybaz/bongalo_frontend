<template>
  <div class="social-signin">
    <p class="p">Or</p>
    <div @click="$emit('handleSocialSignup', 'google')" class="icon-wrapper">
      <img
        class="icon"
        src="../assets/images/google.png"
        alt="sign in with google - bongalo"
      />
      <p>Contiue with Google</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "social_signin",
};
</script>

<style lang="scss" scoped>
.social-signin {
  width: 100%;
  padding: 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .p {
    margin-bottom: 20px;
    font-size: 12px;
  }

  .icon-wrapper {
    height: 50px;
    width: 100%;
    background: rgb(219, 218, 218);
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 5px;
    cursor: pointer;
    .icon {
      width: 30px;
      height: 30px;
    }
    p {
      color: #000;
      margin-left: 30px;
      font-size: 14px;
    }
  }

  i {
    cursor: pointer;
    margin-right: 30px;
    color: #3a85fc;
    font-size: 35px;
  }
}
</style>
