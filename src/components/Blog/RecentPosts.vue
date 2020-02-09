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
            makes it quite expedient for any adventurer.<br />
            <br />The country has beautiful neighbourhoods in Kigali like; Nyarutarama, Gacuriro and Kiyovu which are safe both
            for vacationers and those relocating to the country.
          </p>
        </div>
      </div><br><br>
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
      </div>
    </section>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
img {
  /* border: 1px solid red;/ */
  margin-left: 10px;
  width: 100%;
  /* height: -100%; */
  /* width: 250%;
  height: 100%; */
}
.recent-post-sec {
  /* border: 1px solid green; */
  width: 100%;
  margin-top: 40px;
}

.post-heading {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
  color: #404040;
}

.sec-1 {
  display: flex;
  /* border: 1px solid red; */
  width: 80%;
  margin-left: 10%;
}

.cap-1 p {
  width: 613px;
  position: absolute;
  /* border: 1px solid red; */
  margin-left: 55px;
  color: #6a6a6a;
  margin-top: 8px;
  height: 182px;
  text-align: justify;
  font-size: 14px;
  line-height: 22px;
}

.cap-1 h2 {
  /* border: 1px solid red; */
  width: 479px;
  margin-left: 55px;
  color: #404040;
}
</style>