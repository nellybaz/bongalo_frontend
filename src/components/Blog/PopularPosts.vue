<template>
  <div class="post">
    <h2>Popular Post</h2>

     <!-- <section class="apartment-section">
       <h3 class="h3">
          Places to stay in Kigali
        </h3>
        <div class="inner-content">
            <HorizontalCard v-for="item in posts" :key=item.id :posts=item></HorizontalCard>
        </div> 
    </section> -->

  </div>
</template>


<script>
export default {
  data: function() {
    return {
      posts: [
        {
          id: 1,
          location: "Kicukiru, Kigali, kigali",
          title: "Bella Apartments",
          price: "$20",
          image: "house1.png"
        },
        {
          id: 2,
          location: "Kicukiru, Kigali, kigali",
          title: "Bella Apartments",
          price: "$20",
          image: "house2.png"
        },
        {
          id: 3,
          location: "Kicukiru, Kigali, kigali",
          title: "Visit Rwanda",
          price: "$20",
          image: "house3.png"
        },
        {
          id: 4,
          location: "Kicukiru, Kigali, kigali",
          title: "Attend Youth Connekt ..",
          price: "$20",
          image: "house1.png"
        }
      ]
    };
  }
};
</script>



<style scoped>
.post {
  width: 90%;
  margin-left: 5%;
  /* border: 1px solid red; */
}

.post h2 {
  color: #404040;
  margin-top: 40px;
}
</style>