<template>
  <div class="search" @click="filterCodeHandler(0)">
    <Navigation :showSearch="false"></Navigation>
    <section class="filter">
      <p @click="filterCode = 1">Date</p>
      <p @click="filterCode = 1">Guest</p>
      <p @click="filterCode = 2">Price</p>
      <p @click="filterCode = 3">More Filter</p>
    </section>

    <section class="filter-dropdown">
      <div v-if="filterCode == 1" class="dropdown-item">
        <div class="btn-container">
          <button v-on:click="handleGuestClick(0)">
            <i class="fas fa-minus"></i>
          </button>
          <p>
            {{ guestNumber }}
          </p>
          <button v-on:click="handleGuestClick(1)">
            <i class="fas fa-plus"></i>
          </button>
        </div>

        <button class="btn-save">
          Save
        </button>
      </div>
    </section>

    <section class="apartment-section">
      <h3 class="h3">
        Places to stay in Kigali
      </h3>
      <div class="inner-content">
        <HorizontalCard
          v-for="apartment in getSearchedApartment"
          :key="apartment.uuid"
          :apartment="apartment"
        ></HorizontalCard>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "../components/Blog/Navigation";
import HorizontalCard from "../components/HorizontalCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "search",
  components: {
    Navigation,
    HorizontalCard,
  },

  methods: {
    filterCodeHandler(intent) {
      if (intent == 0) {
        this.filterCode = 0;
      } else {
        this.filterCode = intent;
      }
    },

    handleGuestClick(intent) {
      if (intent == 1) {
        this.guestNumber += 1;
      } else {
        this.guestNumber -= 1;
      }
    },
  },

  data: function () {
    return {
      filterCode: 0,
      guestNumber: 0,
      apartments: [],
    };
  },

  computed: mapGetters(["getSearchedApartment"]),
  created() {
    this.guestNumber = parseInt(this.$route.query["guest"]);
  },
};
</script>

<style lang="scss" scoped>
@media only screen and(max-width: 900px) {
  * {
    margin: auto !important;
    padding: 10px !important;
    width: 100% !important;
  }

  .filter {
    border: transparent !important;
    p {
      margin: 0 5px !important;
      font-size: 10px !important;
    }
  }
}

.filter-dropdown {
  .dropdown-item {
    width: 200px;
    position: relative;
    left: 193px;

    .btn-save {
      padding: 1em 2em;
      float: right;
      background: #000;
      color: white;
      border-radius: 5px;
      margin-top: 5px;
      cursor: pointer;
    }
    .btn-save:focus {
      outline: none;
    }
  }

  .btn-container {
    border-radius: 3px;
    box-shadow: 1px 1px 2px 2px rgb(209, 209, 209);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;

    button {
      border-radius: 50%;
      height: 40px;
      width: 40px;
      border: 2px solid #3a85fc;
      cursor: pointer;

      i {
        color: #3a85fc;
      }
    }
    button:focus {
      outline: none;
    }
  }
}
.search {
  width: 100%;

  .filter {
    width: 100%;
    height: 50px;
    border: 1px solid #f2f2f2;
    display: flex;
    padding: 0 193px;
    align-items: center;

    p {
      border: 1px solid rgba(106, 106, 106, 0.65);
      padding: 5px 18px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      margin-right: 15px;
      flex-direction: row;
      cursor: pointer;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;

      color: #6a6a6a;
    }
  }

  .apartment-section {
    margin-top: 50px;
    width: 100%;
    padding: 20px 80px;
    background: #fff;

    .inner-content {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 30px;
    }
  }
}
</style>
