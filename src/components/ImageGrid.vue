<template>
  <div class="image_grid">
    <div class="image-div">
      <img
        v-on:click="$emit('updateImageShow', 1)"
        class="img1 img-item"
        :src="apartment.main_image || $route.query.main_image"
        alt=""
      />
      <img
        v-on:click="$emit('updateImageShow', 1)"
        class="img2 img-item"
        :src="getImages(0)"
        alt=""
      />
      <img
        v-on:click="$emit('updateImageShow', 1)"
        class="img3 img-item"
        :src="getImages(1)"
        alt=""
      />

      <div v-on:click="$emit('updateImageShow', 1)" class="img4 img-item">
        <img :src="getImages(2)" alt="" />
        <p v-if="showMoreImages" v-on:click="$emit('updateImageShow', 1)">
          View more
        </p>
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
    getImages(index) {
      if (this.getApartmentImages.length - 1 >= index) {
        return this.getApartmentImages[index].image;
      } else {
        return require("../assets/images/no-image2.png");
      }
    },
  },
  data: function() {
    return {
      apartment: {},
    };
  },
  computed: mapGetters(["getApartmentImages", "getCurrentApartment"]),
  created() {
    this.apartment = this.getCurrentApartment;
  },
};
</script>

<style lang="scss" scoped>
.image_grid {
  height: 500px;
  width: 100%;
  .image-div {
    height: 500px !important;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 6px;

    img {
      // border:1px solid red;
      width: 100%;
      height: 100%;
      object-fit: cover;
      // border-radius: 8px;
    }
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
        padding: 10px 20px;
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
        // border-radius: 8px;
      }
    }
  }
}
</style>
