<template>
  <div class="about">
    <AboutHeader />
    <HeadCard />
    <section class="trending-section">
      <EventCard
        :events="events"
        label="What's Trending"
        link="/experience"
      ></EventCard>
    </section>
    <ListProperity />
  </div>
</template>

<script>
import AboutHeader from "../components/About/AboutHeader";
import HeadCard from "../components/About/HeadCard";
import ListProperity from "../components/About/ListProperity";
import EventCard from "../components/EventCard";
import MobileEventCard from "../components/MobileEventCard";

export default {
  name: "about",
  components: {
    AboutHeader,
    HeadCard,
    ListProperity,
    EventCard,
  },
  data: function() {
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
    };
  },
};
</script>

<style lang="scss" scoped>
.trending-section {
  padding: 0 50px;
}
</style>
