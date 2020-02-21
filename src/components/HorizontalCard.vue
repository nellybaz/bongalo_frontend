<template>
    <router-link to="/details" target="_blank">
        <div class='horizontal-card'>
            <div class="img-div">
                <img :src="require(`../assets/images/${apartment.image}`)" alt="">
            </div>

            <div class="details">
                <p class="location"><i class="fas fa-map-marker-alt"></i> {{apartment.location}} 
                    <span>
                        <i class="fas fa-bed"></i> 5 <i class="fas fa-shower"> 3 </i>
                    </span>
                </p>
                <p class="title"> {{apartment.title}} </p>
                <p class="amount"> <span>{{apartment.price}}</span> / night</p>
            </div>
        </div>
    </router-link>
</template>


<script>
export default {
     name:'horizontal-card',
     props:{
         apartment:{
             type:Object,
             required:true
         }
     }
}
</script>


<style lang='scss' scoped>
a{
    text-decoration: none;
}
    .horizontal-card {
        width:100%;
        height: 300px;
        cursor: pointer;
        // display: grid;
        // grid-template-rows: 4fr 1fr;
        .img-div{
            height: 70%;

            img{
            width:100%;
            height: 100%;
            object-fit: cover;
            border-radius: 7px;
        }
        }

        .details{
            width:100%;
            height: 30%;
            margin-top: 20px;
            .location{
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 17px;
                color: #6A6A6A;
                margin-bottom: 7px;
                i{
                    margin-right: 5px;
                }

                span{
                    float: right;
                    
                }
            }

            .title{
                font-style: normal;
                // font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                display: flex;
                align-items: center;

                color: #404040;

            }

            .amount{

                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 19px;
                margin-top: 10px;
                color: #404040;

                span{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 20px;
                    color: #404040;
                }

            }
        }
    }   
</style>