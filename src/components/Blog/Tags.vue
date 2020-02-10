<template>
  <div class="tag">
    <nav>
      <ul>
        <li><strong>Tags:</strong></li>

        <li>Holiday Trip</li>

        <li>Tourism</li>

        <li>Food</li>

        <li>Night Life</li>

        <li>Coffee</li>

        <li>Daylight Fun</li>

        <li>Rwanda's Law</li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {};

</script>




<style scoped>

.tag{
    /* border: 1px solid green; */
    height: 64px;
    padding: 0 60px;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction: row;
    border-bottom:1px solid #F2F2F2;
}
li {
  color: #808080;
  font-size: 14px;
  line-height: 17px;
  margin-right: 50px;
  width: auto;
  list-style: none;
}

ul {
  display: flex;
  width: 100%;
}
</style>