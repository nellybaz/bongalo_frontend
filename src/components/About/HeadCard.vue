<template>
  <div class="event-card">
    <div class="inner-content">
      <div>
        <h2>Who are we</h2>
        <p>Bongalo Rwanda is Rwanda’s premier company in accommodation, property management, and consultation. We are a passionate and diverse team of young people who understand the needs and wants of every traveller visiting Rwanda and looking for where to stay. Looking to book for a place to stay in Rwanda, that influence your comfort and price, we are here for just that. We know that your residential home or vacation home plays a vital role in your life; it is where you build memories. With Bongalo Rwanda, you can book rooms in apartments, and an entire apartment for either a long or short stay. We dedicate time to find the apartments and list on our platform, ensuring its authenticity and credibility. We get you the finest and luxurious homes at amazing prices.</p>
      </div>
      <div>
        <h2>Our Vision</h2>
        <p>Our vision is to ensure every travellers across Africa finds a place to stay at affordable cost by</p>
        <br />
        <div>
          <h2>Our Mission</h2>
          <p>Contribute to the growth of Rwanda through our service delivery in the real estate</p>
        </div>
      </div>
    </div>

    <div class="core-values">
      <h2>Our core values</h2>
    </div>
    <div class="inner-content2">
      <div class="inner-content-div">
        <h2>Intergrity</h2>
        <p>Our team will always provide you with authentic and carefully deliberated advice. We will ensure you are in the best auspicious position to make clear choices because your success is our main goal.</p>
      </div>
      <div class="inner-content-div">
        <h2>Proffesionalsim</h2>
        <p>We are focused and passionate at what we do. We strive to provide a high level of personalized service, whether you want to rent a place for long or short stay.</p>
      </div>
      <div class="inner-content-div">
        <h2>Expertise</h2>
        <p>Apart from our professionalism and integrity, we have in-depth knowledge eye for potential opportunities and deals..</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "event-card",
  components: {}
};
</script>


<style lang='scss' scoped>
.core-values h2 {
  width: 393px;
  height: 30px;
  left: 110px;
  top: 1106px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #404040;
}
.event-card {
  position: relative;
  top: -60px;
  // border: 1px solid green;
  margin-left: 3%;
  width: 94%;
  background: #fff;
  height: 650px;
  border-radius: 20px 20px 0 0;
  padding: 30px;
  margin-bottom: 5%;
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
    grid-column-gap: 32px;
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
  }
}
</style>