<template>
  <div class="">
    <div class="mobile-img-slider">
      <div class="details-img-show">
        <!-- <p style="color: red;"> -->
        <!-- {{ Math.abs(galleryIndex) + 1 }}/{{ imagesArr.length }} -->

        <!-- <span v-on:click="updateImageShowHandler(0)">X</span> -->

        <!-- <div class="img-showing-div"> -->
        <!-- <div class="img-big"> -->
        <i
          @click="handleGalleryIndex(0)"
          class="fas fa-chevron-left"
          id="gallery-icon-left"
        ></i>

        <img
          v-on:click="$emit('updateImageShow', 1)"
          :src="galleryCurrentImage"
          alt=""
        />
        <i
          @click="handleGalleryIndex(1)"
          class="fas fa-chevron-right"
          id="galleryIcon-right"
        ></i>
      </div>

      <!-- <img
        v-on:click="$emit('updateImageShow', 1)"
        class="img1 img-item"
        :src="image1"
        alt=""
      /> -->

      <div v-on:click="$emit('updateImageShow', 1)" class="img4 img-item">
        <p
          class="show-more-img-btn"
          v-if="showMoreImages"
          v-on:click="$emit('updateImageShow', 1)"
        >
          View more
        </p>
      </div>
    </div>

    <div class="host-section-cover">
      <div @click="getUserUrl()" class="host-details">
        <div class="apartment-title">
          <h4>
            {{ apartment.title || $route.query.title }}
          </h4>
          <small>
            {{ apartment.city || $route.query.city }},
            {{ apartment.country || $route.query.country }}
          </small>
        </div>

        <div class="name">
          <span>
            <p>Host</p>
            <strong style="text-decoration: underline;">
              {{ apartment.owner || $route.query.owner }}
            </strong>
          </span>
          <img
            class="profile-img"
            v-if="
              getCurrentApartment.owner_details &&
              getCurrentApartment.owner_details.profile_image.length > 5
            "
            :src="getCurrentApartment.owner_details.profile_image"
            alt=""
          />
          <i v-else class="fas fa-user-circle"></i>
        </div>

        <div
          v-if="
            getCurrentApartment.owner_details &&
            getCurrentApartment.owner_details.resident_country.length > 1
          "
          class="host-country"
        >
          <p>
            Country: <br />
            <strong>
              {{ getCurrentApartment.owner_details.resident_country || "" }}
            </strong>
          </p>
        </div>
      </div>

      <div class="more-info">
        <div class="more-info-left">
          <p>
            <i class="fas fa-user-friends"></i> Sleeps:
            {{ apartment.available_rooms || $route.query.available_rooms }}
          </p>
          <p>
            <i class="fas fa-door-open"></i> Bedrooms:
            {{ apartment.available_rooms || $route.query.available_rooms }}
          </p>
          <p>
            <i class="fas fa-shower"></i> Bathrooms:
            {{
              apartment.number_of_bathrooms || $route.query.number_of_bathrooms
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
      </div>

      <div class="info">
        <h4>
          ${{ apartment.price || $route.query.price }}
          <span>/ night</span>
        </h4>
        <button>Book</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "image_grid",
  props: {
    showMoreImages: {
      type: Boolean,
    },
  },

  methods: {
    handleImageLoad(id) {
      if (id == 1) {
        this.image1 = this.getCurrentApartment.main_image;
      } else {
        this.image2 = this.getImages(2);
        this.image3 = this.getImages(3);
        this.image4 = this.getImages(4);
      }
    },

    getImages(index) {
      if (this.getApartmentImages.length - 1 >= index) {
        return this.getApartmentImages[index].image;
      } else {
        return require("../assets/images/no-image2.png");
      }
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
  },

  data: function () {
    return {
      image1: require("../assets/images/no-image2.png"),
      image2: require("../assets/images/no-image2.png"),
      image3: require("../assets/images/no-image2.png"),
      image4: require("../assets/images/no-image2.png"),
      apartment: {},
      imagesArr: [],
      galleryIndex: 0,
      galleryCurrentImage: "",
    };
  },

  watch: {
    getApartmentImages: function (newValue, oldValue) {
      this.handleImageLoad(2);
    },
    getCurrentApartment: function (newValue, oldValue) {
      this.handleImageLoad(1);
    },
  },

  computed: mapGetters(["getApartmentImages", "getCurrentApartment"]),
  created() {
    this.apartment = this.getCurrentApartment;
    this.handleImageLoad(1);
    this.handleImageLoad(2);

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
        }
      });
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .details-img-show {
    img {
      border-radius: 0 !important;
      min-width: 100% !important;
      max-width: 100% !important;
    }
  }

  #gallery-icon-left {
    position: absolute;
    left: 20px !important;
    top: 200px !important;
    background: wheat;
    padding: 4px 7px;
    border-radius: 50px;
  }

  #galleryIcon-right {
    position: absolute;
    right: 20px !important;
    top: 200px !important;
    background: wheat;
    padding: 4px 7px;
    border-radius: 50px;
  }

  .img-item {
    height: auto !important;
    width: 100% !important;
  }

  .google-map-mobile {
    width: 100% !important;
    margin: 20px 0 !important;
  }

  .info {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    button {
      background: #3a85fc;
      border-radius: 5px;
      color: #ffffff;
      border: transparent;
      padding: 10px 50px;
    }
  }

  .host-section-cover {
    width: 100% !important;
    padding: 20px !important;

    p {
      color: gray !important;
    }

    .more-info {
      margin: 20px 0 0 0 !important;

      i {
        color: #303030 !important;
        font-size: 20px !important;
        margin-right: 10px;
      }

      p {
        font-size: 15px !important;
        margin: 10px 0 !important;
      }
    }

    .host-country {
      line-height: 25px;
    }

    .apartment-title {
      h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #404040;
      }
    }

    .name {
      display: flex !important;
      justify-content: space-between;
      margin: 10px 0;

      .profile-img {
        height: 50px !important;
        width: 50px !important;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  .show-more-img-btn {
    top: auto !important;
    float: right;
    margin: 0 20px !important;
    color: #ffffff;
    background: black;
    font-size: 14px;
    border-radius: 5px;
    padding: 5px 7px;
    z-index: 9999;
  }
}
</style>
