<template>
  <section class="middle-banner-section">
    <p>List your property on Bongalo and open your doors to rental income.</p>
    <button @click="handleOpeningHostPage">List</button>
  </section>
</template>

<script>
export default {
  methods:{
    handleOpeningHostPage() {
      if (this.$store.getters.isLoggedIn) {
        this.$router.push("/become-a-host");
      } else {
        this.$router.push({ query: { next: "become-a-host" } });
        this.setModalState(1);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.middle-banner-section {
  width: 100%;
  height: 500px;
  width: 100%;
  margin-top: 50px;
  background: url(../../assets/images/middle-banner.png);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    width: 464px;
  }

  button {
    border: none;
    height: 50px;
    width: 180px;
    margin-top: 30px;
    background: #3a85fc;
    border-radius: 5px;
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
}
</style>
