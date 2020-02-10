<template>
  <section class="post">
    <h2>Popular Post</h2>
    <div class="popular-posts">
      <div class="post-img">
        <img src="../../assets/images/p-post.png" alt />
        <h3>Why Rwanda Should Be ...</h3>
        <p>2 months ago</p>
      </div>
      <div class="post-img">
        <img src="../../assets/images/p-post.png" alt />
        <h3>Why Rwanda Should Be ...</h3>
        <p>2 months ago</p>
      </div>
      <div class="post-img">
        <img src="../../assets/images/p-post.png" alt />
        <h3>Why Rwanda Should Be ...</h3>
        <p>2 months ago</p>
      </div>
      <div class="post-img">
        <img src="../../assets/images/p-post.png" alt />
        <h3>Why Rwanda Should Be ...</h3>
        <p>2 months ago</p>
      </div>
    </div>
  </section>
</template>


<script>
export default {};
</script>



<style scoped>
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