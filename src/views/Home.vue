<template>
  <div class="home">
    <Jumbotron></Jumbotron>

    <section class="event-section">
      <EventCard
        v-if="!isMobile()"
        :events="events"
        label="Things to look out for"
        link="/event-details"
      ></EventCard>

      <MobileEventCard
        v-else
        :events="events"
        label="Things to look out for"
      ></MobileEventCard>
    </section>

    <section class="explore-section">
      <h3 class="h3">
        Explore Bongalo
      </h3>
      <div class="inner-content">
        <ExploreCard
          v-for="item in explores"
          :key="item.id"
          :item="item"
        ></ExploreCard>
      </div>
    </section>

    <section v-if="apartments.length > 0" class="apartment-section">
      <h3 class="h3">
        Places to stay in Kigali
      </h3>
      <div class="inner-content">
        <HorizontalCard
          v-for="item in apartments"
          :key="item.uuid"
          :apartment="item"
        ></HorizontalCard>
      </div>
    </section>

    <section class="experience-section">
      <EventCard
        v-if="!isMobile()"
        :events="events"
        label="Some amazing experiences"
        link="/experience"
      ></EventCard>

      <MobileEventCard
        v-else
        :events="events"
        label="Some amazing experiences"
      ></MobileEventCard>
    </section>

    <section class="why-section">
      <h3 class="h3">
        Why you should book with us
      </h3>
      <div class="inner">
        <WhySectionCard
          v-for="item in whyContent"
          :key="item.id"
          :content="item"
        ></WhySectionCard>
      </div>
    </section>

    <section class="middle-banner-section">
      <p>List your property on Bongalo and open your doors to rental income.</p>
      <button @click="handleOpeningHostPage">List</button>
    </section>

    <section class="powered-section">
      <h3 class="h3">Powered By</h3>

      <div class="content">
        <img
          v-for="item in powered"
          :key="item.id"
          :src="require(`../assets/images/${item.image}`)"
          alt=""
          :class="item.class"
        />
      </div>
    </section>

    <section></section>
  </div>
</template>

<script>
// [9:59 AM, 3/20/2020] Epafred: Here's a list;

// 1. Add icons for all Amenities >>
// 2. Activate tags on the blog page to work
// 3. Insert the various social media icons on the blog page >>
// 4. Enable sharing of blog content to social media and ensure link captures a title and image of the particular blog posts(preview)
// 5. Make every input field to have the same font family >>
// 6. Make all input fields(forms) to carry the same border-colour on-mouse click >>
// 7. Make the listing form to retain data as they're filled and proceeding
// 8. Add user experience to the navigation on listing form. The user should feel an action is being performed.
// 9. Redesign the <Back button >>
// 10. Make number of guest(s) value to be defualt 1
// 11. Add State/Region to Province on the listing form.
// 12. Reduce form size of City and Province forms.  >>
// 13
// [10:02 AM, 3/20/2020] Epafred: 13. Put all time check-in and Checkout box. That is, from Flexible being default, to 12:00 am. Use the time format of 00:00 >>
// 14. Remember to make all input fields to bear the same font family. Especially the description form. >>
import Jumbotron from "../components/Jumbotron";
import EventCard from "../components/EventCard";
import MobileEventCard from "../components/MobileEventCard";
import ExploreCard from "../components/ExploreCard";
import HorizontalCard from "../components/HorizontalCard";
import WhySectionCard from "../components/WhySectionCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    Jumbotron,
    EventCard,
    ExploreCard,
    HorizontalCard,
    WhySectionCard,
    MobileEventCard,
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
        {
          id: 6,
          location: "Kicukiru, Kigali, kigali",
          title: "Jidenna in the City",
          amount_text: "Tickects from",
          price: "$20",
          image: "event1.png",
        },
        {
          id: 7,
          location: "Kicukiru, Kigali, kigali",
          title: "Visit the gorillas with Remarkable Rwanda",
          amount_text: "Tickects from",
          price: "$20",
          image: "event2.png",
        },
        {
          id: 8,
          location: "Kicukiru, Kigali, kigali",
          title: "Visit Rwanda",
          amount_text: "Tickects from",
          price: "$20",
          image: "event2.png",
        },
        {
          id: 9,
          location: "Kicukiru, Kigali, kigali",
          title: "Attend Youth Connekt ..",
          amount_text: "Tickects from",
          price: "$20",
          image: "event3.png",
        },
        {
          id: 10,
          location: "Kicukiru, Kigali, kigali",
          title: "Global Health Summit",
          amount_text: "Tickects from",
          price: "$20",
          image: "event1.png",
        },
      ],
      explores: [
        {
          id: 1,
          image: "item1.png",
          text: "Events to attend",
        },
        {
          id: 2,
          image: "item2.png",
          text: "Places to stay",
        },
        {
          id: 3,
          image: "item3.png",
          text: "Things to do",
        },
      ],

      apartments: [],
      whyContent: [
        {
          id: 1,
          image: "why1.png",
          title: "Availability",
          text:
            "We know how hard it can be finding a perfect home to rent, especially when moving to a new country; so we are available 24/7 for your inquiries about the best places to stay. You’ll find the best places to stay on our platform without stress.",
        },

        {
          id: 2,
          image: "why2.png",
          title: "Client Satisfaction",
          text:
            "Whether you are on a budget or travelling for a; conference, seminar, vacation, we got you covered. Plus, you can pay easily with your mobile wallet from any country in Africa in addition to the other payment methods available on our system.",
        },
        {
          id: 3,
          image: "why3.png",
          title: "Support",
          text:
            "We’re available to support you as you book and set out on your trip across the continent. Our experienced support team ensures your experience stays awesome all the way on your trip and even beyond. Count on us for our 24/7 support service.",
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
        {
          id: 6,
          image: "ibm_cloud.png",
          class: "powered_img_6",
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
  .middle-banner-section {
    height: 369px !important;
    p {
      font-size: 20px;
      width: 314px !important;
    }
  }
  .explore-section,
  .event-section,
  .experience-section,
  .apartment-section,
  .why-section,
  .powered-section {
    padding: 20px !important;
  }

  .explore-section {
    .inner-content {
      grid-template-columns: 1fr !important;
      grid-row-gap: 20px;
    }
  }

  .apartment-section {
    .inner-content {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(2, 1fr) !important;
      grid-column-gap: 20px;
      grid-row-gap: 70px !important;
    }
  }

  .why-section {
    height: auto !important;
    margin-top: auto !important;
    .inner {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr !important;

      grid-row-gap: 30px;
    }
  }

  .experience-section {
    margin-top: 0px !important;
    height: auto !important;
  }

  .powered-section {
    h3 {
      font-size: 20px !important;
      margin-bottom: 20px;
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
        width: 60% !important;
        max-height: 100px !important;
        object-fit: contain;
      }
    }
  }
}

.h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: #404040;
}
.home {
  width: 100%;

  .event-section,
  .experience-section {
    background: #fff;
    width: 100%;
    padding: 0px 50px;
    height: 450px;
  }

  .experience-section {
    margin-top: 50px;
  }

  .explore-section {
    width: 100%;
    padding: 20px 80px;
    background: #fff;

    .inner-content {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 20px;
    }
  }

  .apartment-section {
    margin-top: 10px;
    width: 100%;
    padding: 20px 80px;
    background: #fff;

    .inner-content {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      row-gap: 15px;
    }
  }

  .why-section {
    width: 100%;
    margin-top: 5px;

    width: 100%;
    padding: 20px 80px;
    background: #fff;

    .inner {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
    }
  }

  .middle-banner-section {
    width: 100%;
    height: 500px;
    width: 100%;
    margin-top: 50px;
    background: url(../assets/images/middle-banner.png);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
      width: 464px;
    }

    button {
      border: none;
      height: 50px;
      width: 180px;
      margin-top: 30px;
      background: #3a85fc;
      border-radius: 5px;
      cursor: pointer;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #ffffff;
    }
  }

  .powered-section {
    width: 100%;
    height: 260px;
    margin-top: 30px;
    width: 100%;
    padding: 0 80px;
    h3 {
      font-size: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .content {
      margin-top: -20px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 55px;

      img {
        width: 100%;
        height: 200px;
        object-fit: contain;
      }

      .powered_img_1,
      .powered_img_2 {
        width: 120px;
      }
    }
  }
}
</style>
