<template>
  <a
    :href="makeUrl()"
    target="_blank"
    class="horizontal-card"
    :title="apartment.title"
  >
    <div class="img-div">
      <img :src="getThumbnail(apartment.main_image)" alt />
    </div>

    <div class="details">
      <p class="location">
        <i class="fas fa-map-marker-alt"></i>
        {{ apartment.city }}
        <span>
          <i class="fas fa-bed"></i>
          {{ apartment.available_rooms }}
          <i class="fas fa-shower">{{ apartment.number_of_bathrooms }}</i>
        </span>
      </p>
      <p class="title">
        {{
          apartment.title.length > 25
            ? apartment.title.substring(0, 25) + "..."
            : apartment.title
        }}
      </p>
      <p class="amount">
        <span>${{ apartment.price }}</span> / night
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "horizontal-card",
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },

  methods: {
    makeUrl() {
      let url = "/details?apartment=" + this.apartment.uuid;
      for (let key in this.apartment) {
        url += "&" + key + "=" + this.apartment[key];
      }
      for (let key2 in this.$route.query) {
        url += "&" + key2 + "=" + this.apartment[key2];
      }
      return url;
    },
    handleCardClick() {
      this.$store
        .dispatch("setCurrentApartment", { apartment: this.apartment })
      let route = this.$router.resolve({
            path: "/details?apartment=" + this.apartment.uuid,
            query: { ...this.apartment, ...this.$route.query },
          });
      window.open(route.href, '_blank')
    },
    getThumbnail(img) {
      try {
        //  https://firebasestorage.googleapis.com/v0/b/alushare.appspot.com/o/property%2Fimages%2Fneldon1.jpg?alt=media&token=d955d9c1-482f-4a43-878a-802a3052809a
        let split = img.split("--bongalo_img--");
        let left = split[0] + "thumbnails%2F--bongalo_img--";
        let right = split[1];
        let rightsplit = right.split("-bongalo_img-");
        let tmp = rightsplit[0] + "-bongalo_img-_200x200" + rightsplit[1];
        let thumbnail = left + tmp;
        return img;
      } catch (error) {
        return img;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.horizontal-card {
  width: 100%;
  height: 300px;
  cursor: pointer;

  .img-div {
    height: 70%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .details {
    width: 100%;
    height: 30%;
    margin-top: 10px;
    .location {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 17px;
      color: #6a6a6a;
      margin-bottom: 7px;
      i {
        margin-right: 5px;
      }

      span {
        float: right;
      }
    }

    .title {
      font-style: normal;
      // font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      display: flex;
      align-items: center;

      color: #404040;
    }

    .amount {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      margin-top: 5px;
      color: #404040;

      span {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #404040;
      }
    }
  }
}
</style>
