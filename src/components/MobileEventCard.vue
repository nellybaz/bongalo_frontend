<template>
  <div class="mobile-event-card">
    <h3>
      {{ label }}
    </h3>

    <div class="inner-content">
      <router-link
        v-for="event in events"
        :key="event.id"
        class="vertical-card"
        to="/details"
      >
        <img :src="require(`../assets/images/${event.image}`)" alt="" />
        <div class="vertical-card-info-section">
          <p class="location">
            <i class="fas fa-map-marker-alt"></i> {{ event.location }}
          </p>
          <p class="title">{{ event.title }}</p>
          <p class="amount">
            {{ event.amount_text }}
            <span class="price"> {{ event.price }}</span>
          </p>
        </div>
      </router-link>
      <!-- <VerticalCard class="vertical-card" 
      v-for="event in events" 
      :key=event.id 
      :event=event></VerticalCard> -->
    </div>
  </div>
</template>

<script>
// import VerticalCard from '../components/VerticalCard';

export default {
  name: "mobile_event_card",
  components: {
    //  VerticalCard,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    events: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-event-card {
  width: 100%;

  h3 {
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    color: #404040;
  }

  .inner-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow-x: scroll;
    .vertical-card {
      text-decoration: none;
      cursor: pointer;
      width: 250px !important;
      height: 400px;
      img {
        width: 250px;
        height: 70%;
        object-fit: contain;
      }
      .vertical-card-info-section {
        width: 100%;
        margin-top: 20px;
        .location {
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 17px;
          color: #6a6a6a;
          i {
            margin-right: 5px;
          }
        }

        .title {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 25px;
          margin-top: 10px;
          color: #404040;
        }

        .amount {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 19px;
          margin-top: 10px;
          color: #404040;

          .price {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
