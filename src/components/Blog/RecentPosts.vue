<template>
  <div class="recentPost">
    <section class="recent-post-sec">
      <h2 class="post-heading">Recent Post</h2>
      <div v-for="item in blogs" :key=item.id class="sec-1">
        <div class="img1">
          <img :src="require(`../../assets/images/${item.image}`)" alt />
        </div>
        <div class="cap-1">
            <div class="div-inner">
                <h2>
                  {{
                    item.title
                  }}
              </h2>
              <p>
                  {{
                    item.text1
                  }}
              </p>
              <br>
              <p>
                {{
                    item.text2
                  }}
              </p>
            </div>

            <div class="read-more">
              <a href>Read More</a>
            </div>
        </div>
        
      </div>

    </section>
  </div>
</template>


<script>
export default {
  name:"recent_post",
  data: function(){
    return {
      blogs:[
        {
          id:1,
          title: "Why Kigali should be your next destination 1",
          image: "blog-img.png",
          text1:"Kigali which is Rwanda's capital is the safest and cleanest capital cities in Africa. The colorful environment, warmhearted people, attractive and beautiful culture with the amazing landscapes, makes it quite expedient for any adventurer.",
          text2:" The country has beautiful neighbourhoods in Kigali like; Nyarutarama, Gacuriro and Kiyovu which are safe both or vacationers and those relocating to the country."
        },
        {
          id:2,
          title: "Why Kigali should be your next destination 2",
          image: "blog-img.png",
          text1:"Kigali which is Rwanda's capital is the safest and cleanest capital cities in Africa. The colorful environment, warmhearted people, attractive and beautiful culture with the amazing landscapes, makes it quite expedient for any adventurer.",
          text2:" The country has beautiful neighbourhoods in Kigali like; Nyarutarama, Gacuriro and Kiyovu which are safe both for vacationers and those relocating to the country."
        },
        
      ]
    }
  }
};
</script>


<style lang='scss' scoped>

.recentPost {
  margin-bottom: 15%;
  margin-top: 8%;
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
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 85%;
  margin-left: 10%;

  .img1{
    width:100%;
    // border:1px solid red;
  }

  .cap-1{
    width:100%;
    // border:1px solid red;
    padding: 10px 40px;
    display: flex;  
    flex-direction: column;
  
    p{
      color: #6a6a6a;
      font-size: 14px;
      line-height: 22px;
      margin-top: 10px;
      text-align: justify;
      // font-family: "Inter", sans-serif;
    }

    h2{
      color: #404040;
      width:60%;
      // font-family: "Inter", sans-serif;
    }
    .div-inner{
      height: 90%;
    }
    .read-more{
      
      width:100%;
      
      display: flex;
      justify-content: flex-end;
      
      a{    
            width: 200px;
            border: 1px solid #6a6a6a;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            text-decoration: none;
            color: #404040;
            font-weight: bold;
            font-size: 14px;
      }
    }
  }
}

</style>