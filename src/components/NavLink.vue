<template>
  <div :class="{ dark_links: isDark }" class="nav-link">
    <nav v-if="!isMobile()">
      <ul>
        <li>
          <a href="/">
            EN
          </a>
        </li>

        <li @click="handleOpeningHostPage">
          List a property
        </li>

        <li>
          <a href="/blog">
            Blog
          </a>
        </li>

        <li v-if="!isLoggedIn" v-on:click="$modal.show('register')">Sign up</li>
        <li class="profile-li" v-else>
          <a href="/profile">
            <img :src="getProfile()" />
            Welcome {{ getFirstName }}
          </a>
        </li>

        <li v-if="!isLoggedIn" v-on:click="$modal.show('login')">Login</li>
        <li v-else v-on:click="logout">Logout</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "nav_link",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    getProfile() {
      return window.localStorage.getItem("profile_image")
        ? window.localStorage.getItem("profile_image")
        : "https://freesvg.org/img/abstract-user-flat-3.png";
    },
    ...mapGetters(["isMobile"]),
    ...mapActions(["setModalState"]),

    handleOpeningHostPage() {
      if (this.isLoggedIn) {
        this.$router.push("/become-a-host");
      } else {
        this.$modal.show("login");
      }
    },


    logout() {
      this.$store.dispatch("logout").then((res) => {
        window.location.reload();
      });
    },
  },

  computed: {
    ...mapGetters(["getToken", "getFirstName", "isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  width: 100%;
  nav {
    width: 100%;
    margin-right: 2%;

    ul {
      float: right;
      // width: 400px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;

      .profile-li {
        // border:1px solid red;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
        }
        img {
          width: 30px;
          height: 30px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
      li {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        padding: 0 10px;
        margin-left: 20px;
        // border:1px solid red;
        // width: 100px;
        color: #ffffff;
        list-style: none;
        cursor: pointer;

        a {
          text-decoration: none;
          color: #ffffff;
        }
      }
    }
  }
}
.dark_links {
  li,
  a {
    color: black !important;
  }
}
</style>
