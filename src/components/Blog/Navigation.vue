<template>
  <div class="Bolg-nav">
    <header class="tm-header">
      <div class="logo-blg">
        <img src="../../assets/images/bongalo-logo.png" alt />
        <ul class="blg">Blog</ul>
      </div>
       <!-- <i class="fa fa-search" aria-hidden="true"></i> -->

       <div class="search-div">
           <i class="fa fa-search" aria-hidden="true"></i>
            <input
        placeholder="Type for anything to search for tag or topics"
        type="text"
      />
       </div>
     
 
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


<style lang='scss' scoped>

.logo-blg {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.blg {
  width: 20px;
  color: #404040;
  font-size: 14px;
}

// input {
//   border: 1px solid #c4c4c4;
//   height: 45px;
//   width: 100%;
//   border-radius: 5px;
//   margin-left: 100px;
//   padding: 0 20px;
// }


header {
  margin-top: 5px;
  height: 64px;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
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
.search-div{
    width:100%;
    border:1px solid #C4C4C4;
    padding: 10px 15px;
    border-radius:5px;
    margin-left: 40px;
    display: flex;
    
    align-items: center;
    
    i{
        margin-right:  15px;
        color: #C4C4C4;
    }

    input{
        border:none;
        height: 100%;
        width:80%;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #6A6A6A;
        font-family: 'Inter', sans-serif;
    }
    input::placeholder{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #6A6A6A;
        font-family: 'Inter', sans-serif;
    }

    input:focus{
       outline: none;
    }
}
</style>