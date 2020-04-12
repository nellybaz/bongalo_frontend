<template>
    <router-link class='vertical-card' :to=link>
        <img :src="require(`../assets/images/${event.image}`)" alt="">
        <div class="vertical-card-info-section">
            <p class="location"><i class="fas fa-map-marker-alt"></i> {{event.location}}</p>
            <p class="title"> {{event.title}} </p>
            <p class="amount"> {{event.amount_text}}  <span class="price"> {{event.price}}</span></p>
        </div>
    </router-link>
</template>
 

<script>
export default {
     name:'vetical-card',
     props:{
         event:{
             type:Object,
             required:true,
         },
         link:{
             type:String,
             required:true
         }
     }
}
</script>


<style lang='scss' scoped>


@media only screen and (max-width: 900px){

    
}
    .vertical-card {
        text-decoration: none;
        cursor: pointer;
        float:left;
        width:220px;
        height: 450px;
        // border:1px solid red;
        margin-right: 10px;
        img{
            width:100%;
            height: 70%;
        }
        .vertical-card-info-section{
            width:100%;
            margin-top: 20px;
            .location{
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 17px;
                color: #6A6A6A;
                i{
                    margin-right: 5px;
                }
            }

            .title{
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 25px;
                margin-top: 10px;
                color: #404040;

            }

            .amount{

                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 19px;
                margin-top: 10px;
                color: #404040;

                .price{
                    font-weight: bold;
                }
            }
        }
    }
</style>