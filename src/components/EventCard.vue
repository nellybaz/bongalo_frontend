<template>
  <div class="event-card">
    <h3>
      {{ label }}
    </h3>

    <div class="inner-content">
      <div @click="handleIcons(0)" class="icon-div icon-div-left">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="images-content">
        <div class="content" :style="getContentStyle()">
          <EventCard
            v-if="!isMobile()"
            :events="events"
            link="/event-details"
          ></EventCard>
          <MobileEventCard v-else :events="events"></MobileEventCard>
        </div>
      </div>

      <div @click="handleIcons(1)" class="icon-div icon-div-right">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalCard from "../components/VerticalCard";
import MobileEventCard from "../components/MobileEventCard";
import { mapGetters, mapActions } from "vuex";
import EventCard from "../components/EventCard";
export default {
  name: "event-card",
  props: {
    events: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
  },
  components: {
    // VerticalCard,
    EventCard,
    // MobileEventCard,
  },
  data: function () {
    return {
      left: 0,
      length: 5,
    };
  },

  methods: {
    ...mapGetters(["isMobile", "getFeatured", "isLoggedIn"]),
    handleIcons(intent) {
      let width = window.innerWidth * 0.167;
      if (intent == 1) {
        // Right arrow

        if (this.left > -(width + 10) * this.length) {
          this.left -= (width + 10) * this.length;
        }
      } else {
        if (this.left < 0) {
          this.left += (width + 10) * this.length;
        }
      }
    },
    getContentStyle() {
      return "left:" + this.left + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    padding: 0 !important;
    max-width: 100% !important;
  }
  .icon-div {
    display: none !important;
  }
  .event-card {
    top: 25px !important;

    .inner-content {
      .images-content {
        height: auto !important;
        grid-template-columns: repeat(1, 1fr) !important;
      }
    }
  }
}

.event-card {
  position: relative;
  top: -60px;
  width: 100%;
  background: #fff;
  height: auto;
  border-radius: 20px 20px 0 0;
  padding: 30px 30px;
  padding-bottom: 0;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 20px;
    display: flex;
    align-items: center;

    color: #404040;
  }

  .inner-content {
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    height: 450px;

    .icon-div {
      border: 1px solid grey;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      margin: 10px;
      cursor: pointer;
      position: absolute;
      top: 37%;
      background: #fff;

      -webkit-transition: border 0.4s;
      -moz-transition: border 0.4s;
      -o-transition: border 0.4s;
      transition: border 0.4s;
      i {
        color: grey;
      }
    }
    .icon-div:hover {
      i {
        color: #3a85fc;
      }
      border: 2px solid #3a85fc;
    }
    .icon-div-left {
      left: -3%;
      z-index: 1;
    }

    .icon-div-right {
      right: -3%;
    }
    .images-content {
      overflow: hidden;
      position: relative;
      height: 450px;
      .content {
        width: 500%;
        position: relative;
        overflow: hidden;
        height: 450px;

        -webkit-transition: left 1s;
        -moz-transition: left 1s;
        -o-transition: left 1s;
        transition: left 1s;
      }
    }
  }
}
</style>
