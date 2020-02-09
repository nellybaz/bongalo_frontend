<template>
  <div class="Bolg-nav">
    <header class="tm-header">
      <div class="logo-blg">
        <img src="../../assets/images/bongalo-logo.png" alt />
        <ul class="blg">Blog</ul>
      </div>

      <input type="text" />

      <nav>
        <ul>
          <li>EN</li>

          <li>$ USD</li>

          <li>Blog</li>

          <li>Sign up</li>

          <li>Login</li>
        </ul>
      </nav>
    </header>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>

.logo-blg {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.blg {
  width: 20px;
}

input {
  border: 1px solid #c4c4c4;
  height: 45px;
  width: 100%;
  padding: 0 100px;
  border-radius: 5px;
  margin-left: 100px;
}

header {
  margin-top: 5px;
  height: 64px;
  width: 100%;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  /* border: 1px solid red; */
}

img {
  margin-right: 40px;
  width: auto;
}

nav {
  width: 80%;
  margin-right: -4%;
}

ul {
  float: right;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
}

li {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  width: 100px;
  color: #404040;
  list-style: none;
}
</style>