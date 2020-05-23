<template>
  <div class="footer">
    <!-- <div>

      <h1>Enter your email below to recieve updates on our Newletter</h1>
    </div> -->
    <!-- <div> -->

    <!-- <div>
      <h1>Enter your email below to recieve updates on our Newletter</h1>
    </div> -->
    <div class="subscribe-section">
      <p>Enter your email below to recieve updates on our Newsletter</p>
      <small style="color:red">
        {{ emailErrorMessage }}
      </small>

      <input
        @click="showOutline = true"
        @mouseleave="showOutline = false"
        @keyup="checkEmail()"
        :style="getClass()"
        type="text"
        v-model="email"
        placeholder=""
      />
      <div class="payment-text-sub-btn">
        <button>Subscribe</button>
      </div>
    </div>

    <div class="content">
      <div>
        <img :src="require(`../assets/images/footer-logo.png`)" alt="" />
      </div>

      <div class="content-item">
        <h4>About us</h4>

        <ul>
          <li>
            <a href="/about">
              Company
            </a>
          </li>
          <li>
            <a href="/about">
              Team
            </a>
          </li>
          <li>
            <a href="/career">
              Career
            </a>
          </li>
        </ul>
      </div>
      <div class="content-item">
        <h4>Links</h4>

        <ul>
          <li>
            <a href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a href="/privacy-policy">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-condition">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>

      <div class="content-item">
        <h4>Contact</h4>
        <ul>
          <li>KG 622 St, <br> Kigali</li>
          <li>+250 730078410</li>
          <li>info@bongalo.co</li>
        </ul>
      </div>
      <br />

      <h4>
        Connect with us
      </h4>

      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-youtube"></i>
    </div>
    <p>Bongalo © 2020 | All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  name: "app_footer",
  data: function() {
    return {
      showOutline: false,
      email: "",
      emailErrorMessage: "",
    };
  },
  methods: {
    getClass() {
      return this.showOutline ? "border: 1px solid #3A85FC !important;" : "";
    },
    checkEmail() {
      if (!this.email) {
        this.emailErrorMessage = "";
      } else if (!this.email.includes(".") || !this.email.includes("@")) {
        this.emailErrorMessage = "Email is not valid";
      } else {
        this.emailErrorMessage = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .footer {
    text-align: center;
    padding: 40px 10px !important;
    height: auto !important;
    background-color: #f6faff;
    p{
      color: rgba(106, 106, 106, 0.7);
      font-size: 15px;
    }
    i {
      color: #3a85fc;
      padding: 0.6rem;
    }
    img {
      margin: 30px 0;
    }
    .subscribe-section {
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #404040;
      }
      input {
        border: 1px solid #686868;
        box-sizing: border-box;
        background-color: #f6faff;
        padding: 1rem 7rem;
        margin: 10px 0;
        border-radius: 5px;
      }
      button {
        padding: 0.5rem 2rem;
        border: transparent;
        background: #3a85fc;
        border-radius: 5px;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        align-items: center;
        color: #ffffff;
      }
    }

    .content {
      margin-bottom: 40px;
      height: auto !important;
      grid-template-columns: 1fr 1fr !important;
      grid-row-gap: 30px;
    }
  }

  .content-item {
    h4 {
      font-weight: bold;
      font-size: 20px;
      margin-top: 30px;
      color: #404040;
    }

    ul {
      padding: 0;
      li {
        list-style: none;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 24px;
        color: #6a6a6a;

        a {
          text-decoration: none;
          color: #6a6a6a;
        }
      }
    }
  }
}
</style>
