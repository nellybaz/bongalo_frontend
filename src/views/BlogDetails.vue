<template>
  <div class="blog-details">
    <Navigation :showSearch="true"/>
    <Tags />
    <PopularPosts />


    <div class="details">
        <div class="left">
            <img src="../assets/images/blog_details.png" alt />
            <h4>Share</h4>
            <div class="social-media">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i>


            </div>

            <p> <i class="fas fa-envelope"></i> Share via email</p>
            <p><i class="fas fa-copy"></i> Copy link</p>

        </div>

        <div class="right">
            <h3>Why Kigali should be your next destination</h3>

            <p>
                Are you still trying to figure out your next vacation destination? Then you have to visit Rwanda. Wondering why you should visit this lovely country? Will tell you why; Rwanda is well known for its incredible touristic sites that you will not forget in a long while when you eventually visit. Rwanda offers amazing and intriguing experiences for every budget, making it a top choice for anyone who wants to enjoy a very affordable yet one in a lifetime experience while on vacation. The country is endowed with lots of adventurous pursuits, diverse cuisine, and rich arts and culture, to name a few. Read on to find out why Rwanda should be your next tourist destination.

                Rwanda is a country that has a lot of natural endowments; the country has a good climate with clean and safe environments which will make you feel at home. There are also lots of fun outdoor activities which will make your stay worthwhile. It is one of the most expedient tourist destinations which every vacationer will categorically fall in love with. Here are some reasons why this amazing country should be top on your list as your next tourist destination.
                <br>
                <br>
                <strong>
                    Abundance of wildlife 
                </strong>
                <br>
                Enjoy biodiversity, have fun and the craziest of adventures by getting to see one of the biggest wildlife species that Rwanda has to offer. Get to see a herd of elephants, lions, leopards, buffaloes, monkeys, chimpanzees, hippos and giraffes in the Volcanoes National Park in Ruhengiri, the Nyungwe forest in Musanze. Did you know that there are over 530 species of birds in Rwanda? Well visit the Akagera National Park in Kigali and find out for yourself.
                <br>
                 <br>
                <strong>
                    Water safari experience
                </strong>
                <br>
                Are you a water lover? Then Lake Kivu in Gisenyi is just the right place where you should be while on vacation in Rwanda. Apart from it being one of the great Lakes in Africa, you can exploit the underwater world, have a boat tour, and enjoy the stunning scenery while taking pictures. If you are great at swimming, you can as well dive in and have refreshing swimming experience.
                <br>
                 <br>
                <strong>
                    Culture and food
                </strong>
                <br>
                From the African wears to their cultural festivals, there is always so much to enjoy and partake. Rwanda has a rich culture and one the best cuisines in the world; they have fantastic meals ranging from African to European dishes that you can try out if you are a food lover. To have a great cultural experience and the best meals in Rwanda, you can visit Kigali and Gisenyi.

                Rwanda is one of the African countries that tell its own story. Are you eager to learn how this beautiful country came to existence? Then you can visit the Ntamara church and the Gisozi Genocide Memorial Centre or Kigali Memorial Centre all located in Kigali to learn more about the history of the Rwandans

                <br>
                 <br>
                <strong>
                    Landscape tour
                </strong>
                <br>
                Fondly described as the “land of a thousand hills”, Rwanda has one of the biggest landscapes in Africa. If you are a fan of walking or mountain climbing and camping, then the Virunga Mountains and the Virunga volcanoes are ideal for you. 

                <br>
                 <br>
                <strong>
                    Remarkable romantic locations
                </strong>
                <br>
                Have a memorable and quiet time with your partner. You can always have the chance of spending quality time with your loved one; there are so many romantic getaways for newlyweds and couples seeking for luxurious vacations. While on vacation, you can enjoy having dinner by the beachside. 
            </p>
            

        </div>

    </div>

  </div>
</template>


<script>
import Navigation from "../components/Blog/Navigation";
import Tags from "../components/Blog/Tags";
import PopularPosts from "../components/Blog/PopularPosts";


export default {
  name: "blog_details",
  components: {
    Navigation,
    Tags,
    PopularPosts,

  }
};
</script>



<style lang="scss" scoped>
    .blog-details{
        width:100%;

        .details{
            padding: 0 80px;
            margin-top: 80px;
            width:100%;
            // border:1px solid red;
            display: grid;
            grid-template-columns: 1fr 3fr;
            grid-gap: 30px;

            p{
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                /* or 133% */

                text-align: justify;

                color: #6A6A6A;
                
            }

            .left{
                img{
                    width: 380px;
                    height: 315px;
                    border-radius: 5px;
                    margin-bottom: 30px;
                }

                p{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 20px;
                    /* identical to box height, or 133% */
                    text-align: justify;
                    color: #6A6A6A;
                    margin-bottom: 10px;

                    i{
                        margin-right: 10px;
                        font-size: 20px;
                    }
                }
                .social-media{
                    width:100%;
                    // border:1px solid red;
                    margin: 15px 0;
                    margin-bottom: 30px;

                    i{
                        color: #3A85FC;
                        font-size: 30px;
                        margin-right: 10px;
                    }
                }
            }
            .right{
                h3{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 25px;
                    line-height: 35px;
                    color: #404040;
                    margin-bottom: 20px;
                }
            }
        }
    }

</style>






