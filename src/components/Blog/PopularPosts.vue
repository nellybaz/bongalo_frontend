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
  margin-left: 10%;
}
img {
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
}
.popular-posts {
  width: 100%;
  display: flex;
}

.popular-posts p {
  margin-top: 5px;
  margin-left: 10%;
}
.post {
  width: 100%;
  margin-top: 40px;
}

.post h2 {
  color: #404040;
  margin-left: 35px;
  margin-bottom: 22px;
}
</style>