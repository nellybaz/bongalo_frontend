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
            <h3>
                {{
                    getPostDetails()['title']
                }}
            </h3>

            <p>
               {{
                   getPostDetails()['body']
               }}
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
  data: function(){
      return {
          postDetails:{}
      }
  },
  methods:{
      getPostDetails(){
           var allPost = this.$store.getters['getAllBlogPost'];
            for(let i=0; i < allPost.length; i++){
                let post = allPost[i]
                if(post.uuid == this.$route.query.id){
                    return post
                }
            }
            return {}
      }
  },
  components: {
    Navigation,
    Tags,
    PopularPosts,

  },
  
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






