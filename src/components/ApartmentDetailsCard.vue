<template>
  <div class="">
    <div class="mobile-img-slider">
      <img
        v-on:click="$emit('updateImageShow', 1)"
        class="img1 img-item"
        :src="image1"
        alt=""
      />
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
      <!-- <img
        class="google-map-mobile"
        src="../assets/images/google-map.png"
        alt=""
      /> -->
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
  },

  data: function () {
    return {
      image1: require("../assets/images/no-image2.png"),
      image2: require("../assets/images/no-image2.png"),
      image3: require("../assets/images/no-image2.png"),
      image4: require("../assets/images/no-image2.png"),
      apartment: {},
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
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
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
        font-size: 18px !important;
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
        height: 60px;
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
