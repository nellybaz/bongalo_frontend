<template>
  <div class="about">
    <AboutHeader />
    <HeadCard />

    <!-- <br> -->
    <section class="event-section">
      <EventCard
        v-if="!isMobile()"
        :events="events"
        label="Wha's Trending"
        link="/event-details"
      ></EventCard>

      <MobileEventCard
        v-else
        :events="events"
        label="What's trending"
      ></MobileEventCard>
    </section>

    <section class="event-section">
      <EventCard
        v-if="!isMobile()"
        :events="events"
        label="Wha's Trending"
        link="/event-details"
      ></EventCard>

      <MobileEventCard v-else :events="events"> </MobileEventCard>
    </section>

    <ListProperity />

    <section class="powered-section">
      <div v-if="isMobile()" class="content">
        <h3 class="h3">Powered By</h3>
        <img
          v-for="item in powered"
          :key="item.id"
          :src="require(`../assets/images/${item.image}`)"
          alt=""
          :class="item.class"
        />
      </div>
    </section>
  </div>
</template>

<script>
import AboutHeader from "../components/About/AboutHeader";
import HeadCard from "../components/About/HeadCard";
import WhySectionCard from "../components/WhySectionCard";
import ListProperity from "../components/About/ListProperity";
import EventCard from "../components/EventCard";
import MobileEventCard from "../components/MobileEventCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "about",
  components: {
    AboutHeader,
    HeadCard,
    ListProperity,
    EventCard,
    MobileEventCard,
    // WhySectionCard
  },

  methods: {
    ...mapGetters(["isMobile", "getFeatured", "isLoggedIn"]),
    ...mapActions(["setModalState"]),
    handleOpeningHostPage() {
      if (this.isLoggedIn()) {
        this.$router.push("/become-a-host");
      } else {
        this.$router.push({ query: { next: "become-a-host" } });
        this.setModalState(1);
      }
    },

    makePoweredByImageClass(index) {
      return "powered_img_";
    },
  },
  data: function () {
    return {
      events: [
        {
          id: 1,
          location: "Kicukiru, Kigali, kigali",
          title: "Jidenna in the City",
          amount_text: "Tickects from",
          price: "$20",
          image: "event1.png",
        },
        {
          id: 2,
          location: "Kicukiru, Kigali, kigali",
          title: "Visit the gorillas with Remarkable Rwanda",
          amount_text: "Tickects from",
          price: "$20",
          image: "event2.png",
        },
        {
          id: 3,
          location: "Kicukiru, Kigali, kigali",
          title: "Visit Rwanda",
          amount_text: "Tickects from",
          price: "$20",
          image: "event2.png",
        },
        {
          id: 4,
          location: "Kicukiru, Kigali, kigali",
          title: "Attend Youth Connekt ..",
          amount_text: "Tickects from",
          price: "$20",
          image: "event3.png",
        },
        {
          id: 5,
          location: "Kicukiru, Kigali, kigali",
          title: "Global Health Summit",
          amount_text: "Tickects from",
          price: "$20",
          image: "event1.png",
        },
      ],

      powered: [
        {
          id: 1,
          image: "powered1.1.png",
          class: "powered_img_1",
        },
        {
          id: 2,
          image: "powered2.1.png",
          class: "powered_img_2",
        },
        {
          id: 3,
          image: "powered3.png",
          class: "powered_img_3",
        },
        {
          id: 4,
          image: "powered4.png",
          class: "powered_img_4",
        },
        {
          id: 5,
          image: "powered5.1.1.jpg",
          class: "powered_img_5",
        },
      ],
    };
  },

  created() {
    this.$store.dispatch("getFeaturedApartments", {}).then((res) => {
      if (res == 1) {
        this.apartments = this.getFeatured();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .event-section {
    height: auto !important;
    max-width: 100% !important;
    margin: auto !important;
  }

  .powered-section {
    h3 {
      font-size: 20px !important;
      text-align: center !important;
      margin: 30px 20px !important;
      color: #303030 !important;
    }

    height: auto !important;
    .content {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      grid-column-gap: 10px !important;
      grid-row-gap: 0px !important;
      padding: 1rem;

      img {
        margin: 0 2rem;
        width: 50% !important;
        max-height: 100px !important;
        object-fit: contain;
      }
    }
  }
}
.trending-section {
  padding: 0 50px;
}
</style>
