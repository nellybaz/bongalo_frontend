<template>
  <section class="post">
    <h2>Featured Post</h2>
    <div class="popular-posts">
      <div v-for="item in getPopular()" :key="item.uuid" class="post-img">
        <a @click="gotoDetails(item.uuid)">
          <img src="../../assets/images/p-post.png" alt />
          <h3>
            {{
              item.title
            }}
          </h3>
          <p>
            {{
              getDate(item.created_at)
             }}
          </p>
        </a>
      </div> 
    </div>
  </section>
</template>


<script>
import { mapGetters } from 'vuex';


export default {
  data: function(){
    return {
      popular:"",
      
    }
  },

  methods:{
    gotoDetails(uuid){
      this.$router.push({path: '/blog-details', query:{id:uuid}})

    },
    getDate(date){
      return Date(date).substring(0,15)
    },
    
    ...mapGetters(['getAllBlogPost']),
    getPopular(){
      let tmpPopular = [];
      for(let i=0; i < this.getAllBlogPost().length; i++){
        let post = this.getAllBlogPost()[i];
          if(post.is_featured){
            tmpPopular.push(post)
          }
      }
      return tmpPopular.slice(0, 5)
    },
  },
};
</script>



<style scoped>

a{
  text-decoration: none;
}
.post-img {
  width: 25%;
}

.post-img h3 {
  margin-left: 10px;
  color: #404040;
}

img {
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
}

.popular-posts {
  width: 100%;
  display: flex;
  /* border: 1px solid green; */
  margin-bottom: -20px;
}

.popular-posts p {
  margin-top: 5px;
  font-size: 14px;
  margin-left: 10px;
  color: #6A6A6A;
}

.post {
  width: 90%;
  margin-top: 40px;
  /* border: 1px solid red; */
  margin-left: 5%;
}

.post h2 {
  color: #404040;
  margin-left: 10px;
  margin-bottom: 22px;
}
</style>