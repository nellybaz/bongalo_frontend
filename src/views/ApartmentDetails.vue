<template>
  <div class="apartment_details">
    <div v-if="!isImageShow" class="detials-content">
      <Navigation :showSearch="false"></Navigation>
      <ImageGrid
        v-on:updateImageShow="updateImageShowHandler"
        :showMoreImages="true"
      ></ImageGrid>

      <div class="apartment-details-content">
        <div class="details-div">
          <div class="tap-div">
            <ul>
              <li :class="{ border_bottom: borderItem == 1 }">
                <a href="#overview">Overview</a>
              </li>
              <li :class="{ border_bottom: borderItem == 2 }">
                <a href="#rules">Rules & Description</a>
              </li>
              <li :class="{ border_bottom: borderItem == 3 }">
                <a href="#amenities">Amenities</a>
              </li>
              <li v-if="review.length > 0"><a href="#">Review</a></li>
            </ul>
          </div>
          <div class="content-div">
            <div class="left" id="overview">
              <div @click="getUserUrl()" class="host-details">
                <div class="name">
                  <img
                    v-if="
                      getCurrentApartment.owner_details &&
                        getCurrentApartment.owner_details.profile_image.length >
                          5
                    "
                    :src="getCurrentApartment.owner_details.profile_image"
                    alt=""
                  />
                  <i v-else class="fas fa-user-circle"></i>
                  <span>
                    <p>Host</p>
                    <strong style="text-decoration:underline;">
                      {{ apartment.owner || $route.query.owner }}
                    </strong>
                  </span>
                </div>

                <div
                  v-if="
                    getCurrentApartment.owner_details &&
                      getCurrentApartment.owner_details.resident_country
                        .length > 1
                  "
                  class="country"
                >
                  <p>
                    Nationality:
                    <strong>
                      {{
                        getCurrentApartment.owner_details.resident_country || ""
                      }}
                    </strong>
                  </p>
                </div>
              </div>

              <h4>
                {{ apartment.title || $route.query.title }}
              </h4>
              <small>
                {{ apartment.city || $route.query.city }},
                {{ apartment.country || $route.query.country }}
              </small>

              <div class="more-info">
                <div class="more-info-left">
                  <p>
                    <i class="fas fa-user-friends"></i> Sleeps:
                    {{
                      apartment.available_rooms || $route.query.available_rooms
                    }}
                  </p>
                  <p>
                    <i class="fas fa-door-open"></i> Bedrooms:
                    {{
                      apartment.available_rooms || $route.query.available_rooms
                    }}
                  </p>
                  <p>
                    <i class="fas fa-shower"></i> Bathrooms:
                    {{
                      apartment.number_of_bathrooms ||
                        $route.query.number_of_bathrooms
                    }}
                  </p>
                </div>
                <div class="more-info-left second">
                  <p>
                    <i class="fas fa-moon"></i> Min Stay:
                    {{ apartment.min_nights || $route.query.min_nights }}
                    night(s)
                  </p>
                </div>

                <!-- <img src="../assets/images/map_placeholder.png" alt="" /> -->
              </div>

              <div id="rules" class="rules" ref="rulesRef">
                <h3>House Rules</h3>
                <div>
                  <p v-for="rule in rules" :key="rule">
                    {{ rule }}
                  </p>
                </div>
              </div>

              <div class="desc">
                <h3>
                  {{
                    apartment.available_rooms || $route.query.available_rooms
                  }}
                  Beedrooms,
                  {{
                    apartment.number_of_bathrooms ||
                      $route.query.number_of_bathrooms
                  }}
                  Bathrooms,
                  {{
                    apartment.available_rooms || $route.query.available_rooms
                  }}
                  Sleeps
                </h3>

                <p>
                  {{ apartment.description || $route.query.description }}
                </p>
              </div>

              <div id="amenities" class="amenities" ref="amenitiesDiv">
                <h4>Amenities</h4>

                <div>
                  <p v-for="amenity in amenities" :key="amenity">
                    <i :class="getAmenitiesIcon(amenity)"></i>
                    {{ capitalizeFirstLetter(amenity) }}
                  </p>
                </div>
              </div>

              <div v-if="review.length > 0" class="reviews">
                <h3>Reviews</h3>
                <h4>
                  267
                  <span>
                    reviews
                  </span>
                </h4>

                <div
                  class="review-div"
                  v-for="review in reviews"
                  :key="review.id"
                >
                  <div class="reviewer-info">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/419727a1-6cfc-4431-8464-b5f67207e2ce.jpg?aki_policy=profile_large"
                      alt=""
                    />

                    <div class="rv-info-right">
                      <p class="rv-name">Cynthia</p>
                      <p class="rv-date">February 2020</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit quam alias omnis eos dolores hic perferendis labore
                    saepe, tempora maiores consequatur vel ratione quasi. Id
                    inventore accusamus tempora. Aliquam, incidunt!
                  </p>
                  <a href="#">
                    Read more...
                  </a>
                </div>

                <div></div>
              </div>

              <div class="other-div">
                <h3>
                  Things to keep in mind
                </h3>

                <p>
                  Checkin:
                  <span>
                    {{
                      (apartment.check_in || $route.query.check_in) ==
                      "Flexible"
                        ? ""
                        : "After"
                    }}
                    {{ apartment.check_in || $route.query.check_in }}
                  </span>
                </p>
                <p>
                  Checkout:
                  <span>
                    {{
                      (apartment.check_out || $route.query.check_out) ==
                      "Flexible"
                        ? ""
                        : "Before"
                    }}
                    {{ apartment.check_out || $route.query.check_out }}
                  </span>
                </p>

                <h4>
                  Cancellations
                </h4>
                <p>
                  Free cancellation for 48 hours
                </p>
                <p v-if="checkin == 'Checkin'">
                  After that, cancel up to 24 hours before check-in and get a
                  full refund, minus the service fee.
                </p>
                <p v-if="checkin != 'Checkin'">
                  Cancel after
                  {{ apartment.check_in || $route.query.check_in }} on
                  {{ checkin.toString().slice(0, 10) }} and get a 50% refund,
                  minus the first night and service fee.
                </p>
              </div>
            </div>

            <div class="right">
              <div class="content">
                <div class="info">
                  <h4>
                    ${{ apartment.price || $route.query.price }}
                    <span>/ night</span>
                  </h4>
                </div>

                <div class="book">
                  <label for="">Dates</label>

                  <div class="dates">
                    <vc-date-picker
                      v-model="checkin"
                      :popover="{ placement: 'bottom', visibility: 'click' }"
                      :min-date="new Date()"
                    >
                      <div>
                        {{
                          getDateFormat(
                            checkin.toString(),
                            $route.query.checkin ? 3 : 1
                          )
                        }}
                      </div>
                    </vc-date-picker>
                    <vc-date-picker
                      v-model="checkout"
                      :popover="{ placement: 'bottom', visibility: 'click' }"
                      :min-date="checkin != 'Checkin' ? checkin : new Date()"
                      :disabled-dates="{ start: null, end: Date.now() }"
                    >
                      <div>
                        {{
                          getDateFormat(
                            checkout.toString(),
                            $route.query.checkin ? 4 : 2
                          )
                        }}
                      </div>
                    </vc-date-picker>
                  </div>
                  <small style="font-size:9px; color:red">
                    {{ dateErrorMessage }}
                  </small>
                  <br />
                  <br />
                  <div class="book-guest">
                    <p>{{ guestNumber }} Guest(s)</p>

                    <div class="btns">
                      <button @click="handleGuest(0)">
                        <i class="fas fa-minus"></i>
                      </button>
                      <button @click="handleGuest(1)">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <!-- <br> -->

                  <div v-if="checkout != 'Checkout'" class="price-info">
                    <div class="per-night">
                      <p>
                        ${{ apartment.price || $route.query.price }} x
                        {{ bookedNights }} nights
                      </p>
                      <p class="p">
                        ${{
                          (apartment.price || $route.query.price) * bookedNights
                        }}
                      </p>
                    </div>

                    <!-- <div class="cleaning-fee">
                      <p>Cleaning fee</p>
                      <p class="p">${{ cleaningFee }}</p>
                    </div> -->

                    <div class="service-fee">
                      <p>Service fee</p>
                      <p class="p">${{ 
                        (apartment.price || $route.query.price) * bookedNights /
                        100 
                        }}</p>
                    </div>

                    <div class="total">
                      <p>Total</p>
                      <p class="p">${{ getTotal() }}</p>
                    </div>
                  </div>

                  <br />
                  <br />
                  <Button
                    v-if="!reserveButtonClicked"
                    @handleClick="reserveButtonHandler()"
                    label="Reserve"
                    :isFullWidth="true"
                  ></Button>

                  <div class="loader-div" v-else>
                    <pulse-loader
                      class="loader"
                      color="#3A85FC"
                      size="10px"
                    ></pulse-loader>
                  </div>

                  <br />
                  <p class="small">
                    You won't be charged yet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="details-img-show">
      <p style="color:white">
        {{ Math.abs(galleryIndex) + 1 }}/{{ imagesArr.length }}
      </p>
      <span v-on:click="updateImageShowHandler(0)">X</span>

      <div class="img-showing-div">
        <div class="img-big">
          <i @click="handleGalleryIndex(0)" class="fas fa-chevron-left"></i>
          <img :src="galleryCurrentImage" alt="" />
          <i @click="handleGalleryIndex(1)" class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>

    <div v-if="apartmentIsAvailable != 1" class="apd-loader-div">
      <pulse-loader class="loader" color="#3A85FC" size="10px"></pulse-loader>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Blog/Navigation";
import ImageGrid from "../components/ImageGrid";
import Button from "../components/Button";
import { mapGetters } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import Vue from "vue";
import VCalendar from "v-calendar";

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
});

export default {
  name: "apartment_details",
  components: {
    Navigation,
    Button,
    ImageGrid,
    PulseLoader,
  },

  methods: {
    getUserUrl() {
      this.$router.push({
        path: "user/",
        query: { ...this.getCurrentApartment.owner_details },
      });
    },
    handleGuest(intent) {
      if (intent == 0 && this.guestNumber > 1) {
        this.guestNumber -= 1;
      } else if (
        intent == 1 &&
        this.guestNumber < (this.$route.query["max_guest_number"] || 10)
      ) {
        this.guestNumber += 1;
      }
    },
    handleScroll(event) {
      let windowScrollPosition = event.target.scrollingElement.scrollTop;
      let amenitiesRef = this.$refs.amenitiesDiv;
      let rulesRef = this.$refs.rulesRef;

      if (windowScrollPosition <= rulesRef.offsetTop - 30) {
        this.borderItem = 1;
      }

      if (windowScrollPosition >= rulesRef.offsetTop - 30) {
        this.borderItem = 2;
      }

      if (windowScrollPosition >= amenitiesRef.offsetTop - 30) {
        this.borderItem = 3;
      }
    },

    getTotal() {
      return (
        (this.apartment.price || this.$route.query.price) * this.bookedNights +
        this.serviceFee
      );
    },

    reverseString(str) {
      let tmp = str.split("/");
      // '23/12/2020' => [23, 12, 2020] => 2020/12/23

      let newString = "";
      for (let i = tmp.length - 1; i >= 0; i--) {
        newString += tmp[i];
        if (i != 0) {
          newString += "/";
        }
      }

      return newString;
    },

    reserveButtonHandler() {
      let checkoutReverse = this.reverseString(
        this.getDateFormat(
          this.checkout.toString(),
          this.$route.query.checkin ? 4 : 2
        )
      );

      let checkinReverse = this.reverseString(
        this.getDateFormat(
          this.checkin.toString(),
          this.$route.query.checkin ? 3 : 1
        )
      );

      if (this.getTotal() > 0) {
        this.reserveButtonClicked = true;

        this.dateErrorMessage = "";
        if (window.localStorage.getItem("token")) {
          window.console.log(this.$route.query);
          let data = {
            token: this.$store.getters.getToken,
            apartment_id: this.$route.query["uuid"],
            // date_from: this.$route.query['checkin'] ||  checkinReverse,
            // date_to: this.$route.query['checkout'] || checkoutReverse,
            // check_in:this.$route.query['check_in'],
            // check_out: this.$route.query['check_out'],
            date_from: "2020-02-12",
            date_to: "2020-02-14",
            check_in: "03:45:00",
            check_out: "19:00:00",
            number_of_rooms: 1,
            number_of_guest: this.guestNumber,
            client: this.getUuid,
          };

          window.console.log(data);
          this.$store
            .dispatch("bookApartment", data)
            .then((res) => {
              window.console.log(res);
              try {
                window.location.href = res["redirect_url"];
              } catch (error) {
                // alert('')
                this.reserveButtonClicked = false;
              }
            })
            .catch((err) => {
              this.reserveButtonClicked = false;
            });
        } else {
          this.$store.dispatch("setModalState", 1);
        }
      } else if (this.checkin == "Checkin") {
        this.dateErrorMessage = "Checkin required";
      } else if (this.checkout == "Checkout") {
        this.dateErrorMessage = "Checkout required";
      }
    },
    getAmenitiesIcon(value) {
      return this.amenitiesIcon[value];
    },
    handleImageChange(index) {
      this.galleryIndex = index;
      this.galleryCurrentImage = this.getApartmentImages[
        this.galleryIndex
      ].image;
    },
    handleGalleryIndex(intent) {
      if (intent == 1 && this.galleryIndex < this.imagesArr.length - 1) {
        this.galleryIndex += 1;
      } else if (intent == 0 && this.galleryIndex > 0) {
        this.galleryIndex -= 1;
      }
      this.galleryCurrentImage = this.imagesArr[this.galleryIndex].image;
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    getDateFormat(date, intent) {
      if (date == "Checkin" || date == "Checkout") {
        return date;
      }

      if (this.$route.query.checkin) {
        if (date.includes("GMT")) {
          let splitted = date.split(" ");

          let new_date =
            splitted[2] + "/" + this.monthMap[splitted[1]] + "/" + splitted[3];
          if (intent == 4) {
            let seconds = Math.abs(this.checkin - this.checkout) / 1000;
            let days = seconds / 86400;
            this.bookedNights = days;
          }

          return new_date;
        } else {
          try {
            let new_checkin_d = new Date(
              this.checkin.split("/")[2],
              this.checkin.split("/")[1] - 1,
              this.checkin.split("/")[0]
            );
            let new_checkout_d = new Date(
              this.checkout.split("/")[2],
              this.checkout.split("/")[1] - 1,
              this.checkout.split("/")[0]
            );
            let seconds = Math.abs(new_checkin_d - new_checkout_d) / 1000;
            let days = seconds / 86400;
            this.bookedNights = days;
          } catch (error) {
            //pass
          }
        }
        return intent == 3 ? this.checkin : intent == 4 ? this.checkout : "";
      }
      let splitted = date.split(" ");

      let new_date =
        splitted[2] + "/" + this.monthMap[splitted[1]] + "/" + splitted[3];

      if (intent == 2) {
        let seconds = Math.abs(this.checkin - this.checkout) / 1000;
        let days = seconds / 86400;
        this.bookedNights = days;
      }
      return new_date;
    },
    updateImageShowHandler(intent) {
      if (intent == 1) {
        this.isImageShow = true;
      } else {
        this.isImageShow = false;
      }
    },
  },
  watch: {
    checkout: function(newValue, oldValue) {
      if (newValue != "Checkout") {
        this.dateErrorMessage = "";
      }
    },
    checkin: function(newValue, oldValue) {
      if (newValue != "Checkin") {
        this.dateErrorMessage = "";
      }
    },
  },
  data: function() {
    return {
      reserveButtonClicked: false,
      userUrl: "user/",
      dateErrorMessage: "",
      apartmentIsAvailable: 0,
      imagesArr: [],
      amenitiesIcon: {
        air_conditioner: "fas fa-fan",
        closet: "fas fa-copy",
        iron: "fas fa-tram",
        tv: "fas fa-tv",
        wifi: "fas fa-wifi",
        lock_bedroom: "fas fa-lock",
        desk: "fas fa-book-reader",
      },
      galleryIndex: 0,
      galleryCurrentImage: "",
      serviceFee: 0,
      // cleaningFee: 20,
      bookedNights: 0,
      review: [],
      apartment: {},
      images: [],
      monthMap: {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
      },
      guestNumber: 1,
      checkin: "Checkin",
      checkout: "Checkout",
      reviews: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
      ],
      borderItem: 1,
      isImageShow: false,
      amenities: [],
      rules: [],
    };
  },

  computed: mapGetters([
    "isSafari",
    "getApartmentImages",
    "getCurrentApartment",
    "getUuid",
  ]),
  created() {
    window.addEventListener("scroll", this.handleScroll);

    this.$store
      .dispatch("getApartmentDetails", {
        token: this.$store.getters.getToken,
        apartment: this.$route.query.uuid,
      })
      .then((res) => {
        // this.userUrl += "?"
        // var currentProp = this.getCurrentApartment.owner_details;
        // for (let k in currentProp){
        //   this.userUrl += k+"="+currentProp[k] + "&"
        // }
      })
      .catch((err) => {
        this.apartmentIsAvailable = -1;
      });

    this.$store
      .dispatch("fetchApartmentImages", {
        token: "",
        apartmentUuid: this.$route.query.apartment,
      })
      .then((res) => {
        if (res == 1) {
          this.apartmentIsAvailable = 1;
          this.galleryCurrentImage = this.getCurrentApartment.main_image;

          this.images = this.getApartmentImages;
          this.imagesArr = this.getApartmentImages;
          this.imagesArr.unshift({
            image: this.getCurrentApartment.main_image,
          });
          // End
        }
      });

    this.checkin =
      this.$route.query.checkin != null
        ? this.$route.query.checkin
        : this.checkin;
    this.checkout =
      this.$route.query.checkout != null
        ? this.$route.query.checkout
        : this.checkout;
    this.guestNumber =
      this.$route.query.guest != null
        ? parseInt(this.$route.query.guest)
        : this.guestNumber;
    this.apartment = this.getCurrentApartment;
    this.amenities = this.apartment.amenities
      ? this.apartment.amenities.split(",")
      : this.$route.query.amenities.split(",");
    this.rules = this.apartment.rules
      ? this.apartment.rules.split(",")
      : this.$route.query.rules.split(",");

    try {
      let new_checkin_d = new Date(
        this.checkin.split("/")[2],
        this.checkin.split("/")[1] - 1,
        this.checkin.split("/")[0]
      );
      let new_checkout_d = new Date(
        this.checkout.split("/")[2],
        this.checkout.split("/")[1] - 1,
        this.checkout.split("/")[0]
      );
      let seconds = Math.abs(new_checkin_d - new_checkout_d) / 1000;
      let days = seconds / 86400;
      this.bookedNights = days;
    } catch (error) {
      //pass
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.apd-loader-div,
.loader-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .loader {
    font-size: 45px;
  }
}
.activeImage {
  border: 1px solid #3a85fc !important;
  opacity: 0.3;
}
.border_bottom {
  border-bottom: 4px solid #3a85fc !important;
}

.details-img-show {
  background: #6b6b75;
  width: 100%;
  padding: 0px 20px;
  height: 100vh;
  //   border:1px solid red;

  i {
    font-size: 20px;
    color: #3a85fc;
    cursor: pointer;
  }

  span {
    float: right;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 0;
    position: relative;
    top: -20px;
  }

  .img-showing-div {
    width: 100%;

    .img-big {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      max-width: 100%;
      height: 100%;

      img {
        width: 90%;
        height: 95vh;
        object-fit: cover;
      }
    }

    .img-side {
      height: 70vh;
      overflow-y: scroll;
      border: 1px solid black;
      padding: 3px;
      padding-left: 10px;

      img {
        width: 48%;
        // border:1px solid red;
        height: 100px;
        margin: 0 1% 3px 0;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
}
.apartment_details {
  width: 100%;

  .apartment-details-content {
    // padding: 0 2%;
    width: 100%;
    // margin-bottom: 100px;
  }

  .image-div {
    height: 500px !important;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 6px;

    img:hover {
      transform: scale(1.02);
    }

    .img1 {
      grid-column: 1/5;
      grid-row: 1/-1;
      // border:1px solid red;
    }

    .img2 {
      grid-column: 5/7;
      grid-row: 1/2;
      // border:1px solid red;
    }

    .img3 {
      grid-column: 5/7;
      grid-row: 2/-1;
      // border:1px solid red;
    }

    .img4 {
      grid-column: 7/-1;
      grid-row: 1/-1;
      // img{
      //     // display: none;
      // }

      p {
        background: black;
        color: white;
        padding: 5px 15px;
        font-size: 12px;
        border-radius: 5px;
        position: relative;
        float: right;
        bottom: 10%;
        // width: 100px;
        margin-right: 20px;
        z-index: 9999;
      }
    }

    .img-item {
      // border:1px solid red;
      width: 100%;
      min-height: 100%;
      object-fit: cover;
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      img {
        transition: all 0.4s ease-in-out;
        width: 100%;
        height: 100%;
        // border:1px solid red;
      }
    }
  }

  .details-div {
    width: 100%;
    padding: 0 0px;

    .tap-div {
      background: #fff;
      box-shadow: 1px 2px 2px rgb(218, 217, 217);
      z-index: 1;
      padding: 0 70px;
      height: 50px;
      position: sticky;
      top: 0;
      ul {
        height: 100%;
        padding: 0;
        display: flex;
        align-items: center;

        li {
          cursor: pointer;
          height: 100%;
          width: auto;
          list-style: none;
          margin-right: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          border-bottom: 4px solid transparent;

          a {
            text-decoration: none;
            color: #6a6a6a;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
    }
  }

  .content-div {
    // height: 400px;
    display: grid;
    grid-template-columns: 8fr 4fr;
    grid-column-gap: 50px;
    .left {
      a {
        text-decoration: none;
      }
      width: 100%;
      padding: 30px 120px;
      border-top: 1px solid #f2f2f2;
      h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 24px;
        color: #404040;
      }

      .host-details {
        float: right;
        margin-bottom: 30px;
        cursor: pointer;

        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
        }

        .contact-host {
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          color: #3a85fc;
          margin-top: 18px;
        }

        img {
          margin-right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }
        i {
          margin-right: 20px;
          font-size: 50px;
          color: #3a85fc;
        }
        div {
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
            color: #404040;
          }

          strong {
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 24px;
            color: #404040;
          }
        }
      }

      .more-info {
        margin-top: 30px;
        width: 100%;
        // display: grid;
        // grid-template-columns: 2fr 3fr;
        // border:1px solid red;

        .second {
          margin-top: 10px;
        }
        .more-info-left {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          p {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            margin-right: 20px;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            // line-height: 38px;
            color: #404040;

            i {
              margin-right: 10px;
              color: #3986fc;
              font-size: 14px;
            }
          }
        }

        img {
          width: 100%;
          height: 200px;
        }
      }

      .rules {
        margin-top: 50px;
        width: 100%;

        h3 {
          margin-bottom: 10px;
          font-style: normal;
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #404040;
        }

        div {
          width: 100%;
          // height: 50px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          flex-wrap: wrap;
          border-top: 1px solid #f2f2f2;
          border-bottom: 1px solid #f2f2f2;
        }

        p {
          padding: 7px;
          border-radius: 5px;
          margin-right: 10px;
          background: #f2f2f2;
          font-style: normal;
          font-weight: normal;
          margin-bottom: 10px;
          font-size: 12px;
          color: #6a6a6a;
        }
      }

      .desc {
        margin-top: 30px;
        width: 100%;
        h3 {
          width: 100%;
          margin-bottom: 20px;
          font-style: normal;
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #404040;
        }

        p {
          width: 100%;
          font-style: normal;
          font-size: 14px;
          line-height: 24px;
          text-align: justify;
          color: #404040;
        }
      }

      .amenities {
        margin-top: 30px;
        padding: 25px 0;
        border-top: 1px solid #f2f2f2;
        width: 100%;

        h4 {
          font-style: normal;
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #404040;
        }

        div {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          p {
            font-style: normal;
            // font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 15px;
            color: #404040;

            i {
              margin-right: 10px;
              color: #3986fc;
            }
          }
        }
      }

      .reviews {
        width: 100%;
        // border:1px solid red;

        h3 {
          margin: 20px 0;
          font-style: normal;
          font-weight: bold;
          font-size: 23px;
          line-height: 24px;
          color: #404040;
        }

        h4 {
          font-size: 14px;
          font-style: normal;
          font-weight: bold;
          line-height: 24px;
          color: #404040;
          span {
            font-weight: normal;
          }
        }

        .review-div {
          width: 100%;
          padding: 20px 0;
          height: auto;
          // margin-bottom: 20px;
          border-bottom: 1px solid #ebebeb;

          .reviewer-info {
            display: grid;
            grid-template-columns: 1fr 12fr;
            margin: 15px 0;
            img {
              height: 50px;
              width: 50px;
              border-radius: 50%;
            }

            .rv-info-right {
              .rv-name {
                font-weight: bold;
                font-style: normal;
                font-size: 16px;
                line-height: 28px;
                color: #404040;
              }
              .rv-date {
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                color: #404040;
              }
            }
          }
          p,
          a {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 28px;
            color: #404040;
            // font-family: Lato;
          }
          a {
            color: #3a85fc;
          }
        }
      }
      .other-div {
        width: 100%;
        // border:1px solid red;

        h3 {
          margin: 20px 0;
          font-style: normal;
          font-weight: bold;
          font-size: 23px;
          line-height: 24px;
          color: #404040;
        }

        p {
          font-size: 15px;
          line-height: 28px;
          color: #404040;

          span {
            font-weight: normal;
          }
        }

        h4 {
          margin: 20px 0;
          margin-top: 50px;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 16px;
          color: #404040;
        }
      }
    }

    .right {
      width: 100%;
      height: auto;
      margin-top: 20px;
      padding-right: 120px;

      .content {
        position: sticky;
        top: 9%;
        height: auto;
        width: 100%;
        padding: 20px;
        width: 100%;
        border: 2px solid #f2f2f2;
        border-radius: 3px;

        .info {
          width: 100%;
          border-bottom: 1px solid #f2f2f2;
          padding-bottom: 20px;

          h4 {
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            color: #404040;

            span {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 18px;

              color: #404040;
            }
          }
          small {
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            color: #404040;
          }
        }

        .book {
          width: 100%;
          margin-top: 10px;
          label {
            font-style: normal;
            font-weight: bold;
            font-size: 10px;
            line-height: 12px;
            color: #404040;
          }

          .dates {
            width: 100%;
            height: 50px;
            margin-top: 3px;
            display: grid;
            grid-template-columns: 1fr 1fr;

            div {
              height: 100%;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 18px;
              padding: 0 10px;
              border: 1px solid rgba(106, 106, 106, 0.3);
              color: rgba(64, 64, 64, 0.7);

              display: flex;
              align-items: flex-start;
              justify-content: center;
              flex-direction: column;
            }
          }

          .book-guest {
            align-items: center;
            // border:1px solid red;
            display: grid;
            grid-template-columns: 2fr 1fr;

            p {
              font-style: normal;
              font-size: 14px;
              line-height: 12px;
              color: #797878;
              border: 1px solid #d4d4d4;
              height: 50px;
              padding: 0 10px;
              display: flex;
              align-items: center;
              margin-right: 10px;
            }

            .btns {
              // border:1px solid red;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-direction: row;

              button {
                cursor: pointer;
                width: 40px;
                height: 40px;
                border: 1.5px solid #3a85fc;
                border-radius: 50%;
                background: #fff;
                margin-right: 10px;
                font-size: 12px;
                font-weight: bold;
                color: #3a85fc;
                i {
                  color: #3a85fc;
                }
              }
              button:focus {
                outline: none;
              }
            }
          }

          .price-info {
            width: 100%;
            margin-top: 20px;

            div {
              display: grid;
              grid-template-columns: 3fr 1fr;
              border-bottom: 1px solid #d4d4d4;
              p {
                font-style: normal;
                font-size: 15px;
                line-height: 24px;
                text-align: justify;
                color: #404040;
                height: 30px;
                margin-right: 10px;
                margin-top: 10px;
              }
              .p {
                text-align: right;
              }
            }
            .total {
              p {
                font-weight: bold;
                // font-family: 'Roboto'
              }
            }
          }

          .small {
            font-style: normal;
            font-weight: bold;
            font-size: 10px;
            width: 100%;
            line-height: 12px;
            text-align: center;
            color: #404040;
            margin-top: 10px;
          }
        }
      }
    }
  }
}

.safari-img-fit {
  min-height: 100%;
  max-width: 100%;
}
</style>
