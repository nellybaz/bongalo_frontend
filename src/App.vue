<template>
  <div id="app">
    <Login></Login>
    <notifications position="top left" group="general" />
    <router-view />
    <Footer v-if="!isMobile"></Footer>
    <FooterMobile v-else="isMobile"></FooterMobile>
  </div>  
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "./components/Footer";
import FooterMobile from "./components/Footer";
import Login from "./components/SignInModal";

export default {
  name: "main_app",
  components: {
    Footer,
    FooterMobile,
    Login,
  },
  computed: mapGetters(["getModalState", "isMobile"]),
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

<style>
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
</style>
