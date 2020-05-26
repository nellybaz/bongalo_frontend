<template>
  <div class="event-card">
    <div class="inner-content">
      <div class="who-are-we">
        <h2>Who are we</h2>
        <p>
          We are a passionate and diverse team of young people from across
          multiple African countries, who understand the needs and wants of
          every traveller across the continent, looking for where to stay. Our
          team is a prove of our travel experience as each team member has
          travelled an average of two countries in Africa.
          <br />
          <br />
          We exist to grow together and cultivate Africa’s growing travel
          industry and experience, a place where people can find the best
          accommodation tailored to their needs, hosts profiles and shared
          interests Looking to book for a place to stay that influence your
          comfort and price? We are here for just that. With Bongalo, you can
          book rooms in apartments, and an entire apartment for either a long or
          short stay. We dedicate time to verify all listings before approving
          it on our platform, ensuring its authenticity and credibility. We get
          you the finest, comfortable and affordable homes on your trips at
          amazing prices.
        </p>
      </div>
      <div class="mission-and-mission">
        <h2>Our Vision</h2>
        <p>
          Empower Africans to travel across the continent and beyond.
        </p>
        <br />
        <div>
          <h2>Our Mission</h2>
          <p>
            Connect travellers to affordable, comfortable and most convenient
            accommodation options across Africa and beyond.
          </p>
        </div>
      </div>
    </div>

    <div class="core-values">
      <h2>Our core values</h2>
    </div>
    <div class="inner-content2">
      <div class="inner-content-div">
        <h2>Resilience</h2>
        <p>
          We are always of high-spirit. We stay strong no matter the situation.
          We fight till the very end.
        </p>
      </div>
      <div class="inner-content-div">
        <h2>Team work</h2>
        <p>
          Many hands do more. Alone we go fast, but together we go far. We
          support each other. We work together across multiple boundaries
          satisfy users and help our company grow.
        </p>
      </div>
      <div class="inner-content-div">
        <h2>Passion</h2>
        <p>
          We are focused and passionate at what we do. We strive to provide a
          high level of personalized service, whether you want to rent a place
          for a long or short stay
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "event-card",
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .event-card {
    border-radius: 0 !important;
    position: absolute;
    width: 100% !important;
    top: 0 !important;
    padding: 10px 28px !important;
    margin: auto !important;

    .inner-content {
      display: block !important;
      position: relative !important;
    }

    .inner-content2,
    .core-values,
    .inner-content-div {
      display: none;
    }

    br {
      display: none;
    }
  }

  .mission-and-mission {
    margin: 15px 0 !important;
  }
}

.core-values h2 {
  width: 393px;
  height: 30px;
  left: 110px;
  top: 1106px;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #404040;
}
.event-card {
  position: relative;
  top: -20vh;
  margin-left: 3%;
  width: 94%;
  background: #fff;
  height: 650px;
  border-radius: 20px 20px 0 0;
  padding: 3px 50px;
  margin-bottom: -80px;
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #404040;
  }
  .inner-content {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 62px;
    color: #6a6a6a;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    text-align: justify;
    margin-bottom: 60px;
  }
  .inner-content h2 {
    color: #404040;
    margin-bottom: 15px;
    width: 393px;
    height: 30px;
    left: 110px;
    top: 807px;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
  }
  .inner-content2 {
    margin-top: 30px;
    text-align: justify;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
  }
  .inner-content2 p {
    color: #6a6a6a;
    line-height: 20px;
    font-size: 14px;
  }
  .inner-content2 h2 {
    border: 1px solid #6a6a6a1c;
    padding: 27px 20px;
    border-radius: 10px;
    height: 20px;
    top: 1198px;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: justify;
    color: #404040;
  }
  .inner-content-div {
    width: 95%;
    h2 {
      background: #ffffff;
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      height: 65px;
      border: none;
      padding-left: 40px;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      text-align: justify;
      color: #404040;
    }
  }
}
</style>
