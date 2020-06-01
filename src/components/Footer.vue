<template>
  <div class="footer">
    <img :src="require(`../assets/images/bongalo_left_icon.png`)" alt="" />

    <div class="content">
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
          <li>KG 622 St, Kigali</li>
          <li>+250 730078410</li>
          <li>info@bongalo.co</li>
        </ul>
      </div>

      <div class="subscribe-section">
        <p>Enter your email below to recieve updates on our Newsletter</p>
        <small style="color: red;">
          {{ emailErrorMessage }}
        </small>

        <input
          @click="showOutline = true"
          @mouseleave="showOutline = false"
          @keyup="checkEmail()"
          :style="getClass()"
          type="text"
          v-model="email"
          placeholder="Enter your email"
        />
        <div class="payment-text-sub-btn">
          <button @click="handleSubscribe()">Subscribe</button>
          <p>Payment Methods</p>
        </div>
        <div class="payment-imgs">
          <div>
            <img src="../assets/images/pay1.png" alt="" />
            <img src="../assets/images/pay2.png" alt="" />
            <img src="../assets/images/pay3.png" alt="" />
            <img src="../assets/images/pay4.png" alt="" />
          </div>
          <div class="social-media">
            <p>
              Connect with us
            </p>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
    <p>Bongalo © 2020 | All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  name: "app_footer",
  data: function () {
    return {
      showOutline: false,
      email: "",
      emailErrorMessage: "",
    };
  },
  methods: {
    handleSubscribe() {
      if (!this.email.includes("@") || !this.email.includes(".")) {
        this.$notify({
          group: "general",
          title: "Info !!",
          text: "Email is not valid",
          type: "error",
        });
      } else {
        var data = {
          email: this.email,
        };
        this.$store
          .dispatch("subscribe", data)
          .then((res) => {
            if (res == 1) {
              this.email = "";
              this.$notify({
                group: "general",
                title: "Info !!",
                text: "Subscribed Successfully. Thanks!!",
                type: "success",
              });
            }
          })
          .catch((err) => {
            this.$notify({
              group: "general",
              title: "Info !!",
              text: err.data.message,
              type: "error",
            });
          });
      }
    },
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
    padding: 40px 10px !important;
    height: auto !important;
    background-color: #f6faff;

    .content {
      margin-bottom: 40px;
      height: auto !important;
      grid-template-columns: 1fr 1fr !important;
      grid-row-gap: 30px;
    }
  }
}
.footer {
  width: 100%;
  height: auto;
  border-top: 1px solid #f6faff;
  padding: 40px 80px;
  background-color: #f6faff;

  img {
    height: 30px;
  }

  .content {
    margin-top: 40px;
    height: 183px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;

    .content-item {
      h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #404040;
      }

      ul {
        margin-top: 20px;
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

    .subscribe-section {
      width: 100%;
      p {
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #404040;
      }

      input {
        border: 1px solid #686868;
        height: 45px;
        font-size: 14px;
        width: 100%;
        padding: 0 20px;
        border-radius: 5px;
        margin-top: 15px;
      }

      input:focus {
        outline: none;
      }

      .payment-text-sub-btn {
        margin-top: 15px;
        width: 100%;
        float: left;

        p {
          width: 100%;
          align-self: left;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 15px;
          color: #404040;
          position: relative;
          top: 20px;
        }

        button {
          float: right;
          height: 45px;
          background: #3a85fc;
          border: none;
          color: #fff;
          width: 166px;
          border-radius: 5px;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 18px;
          cursor: pointer;
        }
      }

      .payment-imgs {
        display: grid;
        grid-template-columns: 5fr 3fr;
        margin-top: 15%;
        width: 100%;
        div {
          width: 100%;

          img {
            width: 54px;
            height: 25px;
            object-fit: cover;
          }
        }

        .social-media {
          width: 100%;

          p {
            margin: 15px 0;
          }

          i {
            margin-right: 15px;
            color: #3a85fc;
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    color: #6a6a6a;
  }
}
</style>
