<template>
    <div class='listing'>
        <div class="listing-header">
           <img src="../assets/images/bongalo-logo.png" alt="bongalo-logo">
            <br>
            <br>
           <p>Step 1: Start with the type of house you want to list</p>
        </div>
        <div class="progress-bar-wrapper">
            <div :style="styles.bar_style" class="progress-bar"></div>
        </div>
    </div>
</template>


<script>
export default {
     name:'listing_page',
     
     data: function(){
         return {
             styles:{
                 bar_style: "width:40%"
             },
             stage:0,
             step: 0,
             stages:{
                 place_type:{
                     
                 }

             },
             title: "",
             numberOfRooms: 0,
             numberOfBathRoom: 0,

         }
     },

     methods:{

     }
}
</script>


<style lang='scss' scoped>
    .listing {
        width:100%;
        height: 100vh;

        .listing-header{
            width:100%;
            padding: 10px 30px;
        }

        .progress-bar-wrapper{
            width:100%;
            height: 15px;
            // border:1px solid red;
            background:#EDEFED;
            .progress-bar{
                height: 100%;
                background-color: navy;
                border-radius: 0 20px 20px 0;
            }
        }
    }
</style>