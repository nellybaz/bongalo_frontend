<template>
  <div class="image_grid">
    <div class="image-div">
      <img
        v-on:click="$emit('updateImageShow', 1)"
        class="img1 img-item"
        :src="image1"
        alt=""
      />
      <img
        v-on:click="$emit('updateImageShow', 1)"
        class="img2 img-item"
        :src="image2"
        alt=""
      />
      <img
        v-on:click="$emit('updateImageShow', 1)"
        class="img3 img-item"
        :src="image3"
        alt=""
      />

      <div v-on:click="$emit('updateImageShow', 1)" class="img4 img-item">
        <img :src="image4" alt="" />
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
    handleImageLoad(id) {
      if(id == 1){
        this.image1 = this.getCurrentApartment.main_image
      }
      else{
        this.image2 = this.getImages(2)
        this.image3 = this.getImages(3)
        this.image4 = this.getImages(4)
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
  data: function() {
    return {
      image1: require("../assets/images/no-image2.png"),
      image2: require("../assets/images/no-image2.png"),
      image3: require("../assets/images/no-image2.png"),
      image4: require("../assets/images/no-image2.png"),
      apartment: {},
    };
  },
  watch: {
    getApartmentImages: function(newValue, oldValue) {
      this.handleImageLoad(2)
    },
    getCurrentApartment: function(newValue, oldValue) {
      window.console.log(this.getCurrentApartment)
      this.handleImageLoad(1)
    }
  },
  computed: mapGetters(["getApartmentImages", "getCurrentApartment"]),
  created() {
    this.apartment = this.getCurrentApartment;
    this.handleImageLoad(1)
    this.handleImageLoad(2)
  },
};
</script>

<style lang="scss" scoped>
.image_grid {
  height: 400px;
  width: 100%;
  .image-div {
    height: 400px !important;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 6px;

    img {
      width: 100%;
      object-fit: cover;
    }
    img:hover {
      transform: scale(1.02);
    }

    .img1 {
      grid-column: 1/5;
      grid-row: 1/-1;
      height: 400px;
    }

    .img2 {
      grid-column: 5/7;
      grid-row: 1/2;
      height: 200px;
    }

    .img3 {
      grid-column: 5/7;
      grid-row: 2/-1;
      height: 200px;
    }

    .img4 {
      grid-column: 7/-1;
      grid-row: 1/-1;
      
      img{
        height: 400px;
      }

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
      object-fit: cover;
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      img {
        transition: all 0.4s ease-in-out;
        width: 100%;
      }
    }
  }
}
</style>
