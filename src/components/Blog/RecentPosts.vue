<template>
  <div class="recentPost">
    <section class="recent-post-sec">
      <h2 class="post-heading">Recent Post</h2>
      <div class="sec-1">
        <div class="img1">
          <img src="../../assets/images/blog-img.png" alt />
        </div>
        <div class="cap-1">
          <h2>
            Why Kigali should be your next
            <br />destination
          </h2>
          <p>
            Kigali which is Rwanda's capital is the safest and cleanest capital cities in Africa. The colorful
            environment, warmhearted people, attractive and beautiful culture with the amazing landscapes,
            makes it quite expedient for any adventurer.
            <br />
            <br />The country has beautiful neighbourhoods in Kigali like; Nyarutarama, Gacuriro and Kiyovu which are safe both
            for vacationers and those relocating to the country.
          </p>
        </div>
        <div class="read-more">
          <a href>Read More</a>
        </div>
      </div>
      <br />
      <br />
      <div class="sec-1">
        <div class="img1">
          <img src="../../assets/images/blog-img.png" alt />
        </div>
        <div class="cap-1">
          <h2>
            Why Kigali should be your next
            <br />destination
          </h2>
          <p>
            Kigali which is Rwanda's capital is the safest and cleanest capital cities in Africa. The colorful environment, warmhearted people,
            attractive and beautiful culture with the amazing landscapes, makes it quite expedient for any adventurer.
            <br />
            <br />The country has beautiful neighbourhoods in Kigali like; Nyarutarama, Gacuriro and Kiyovu which are safe both for vacationers and those relocating to the country.
          </p>
        </div>
        <div class="read-more">
          <a href>Read More</a>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
.read-more {
  width: 100%;
  height: 5vh;
  margin-top: 290px;
  padding: 20 40px;
}

.read-more a {
  text-decoration: none;
  border-radius: 5px;
  margin-left: -29px;
  border: 1px solid #6a6a6a;
  padding: 10px 40px;
  color: #404040;
  font-weight: bold;
  font-size: 14px;
}

.recentPost {
  margin-bottom: 15%;
  margin-top: 8%;
}

img {
  margin-left: 10px;
}
.recent-post-sec {
  width: 100%;
}

.post-heading {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
  color: #404040;
}

.sec-1 {
  display: flex;
  width: 85%;
  margin-left: 10%;
}

.cap-1 p {
  width: 613px;
  position: absolute;
  margin-left: 55px;
  color: #6a6a6a;
  margin-top: 8px;
  height: 182px;
  text-align: justify;
  font-size: 14px;
  line-height: 22px;
}

.cap-1 h2 {
  width: 479px;
  margin-left: 55px;
  line-height: 35px;
  color: #404040;
}
</style>