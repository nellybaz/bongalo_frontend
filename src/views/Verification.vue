<template>
    <div class='verification'>
        <Navigation :showSearch="true"></Navigation>
        <div class="content">
            <h3>
                Hi Uchechukwu,
            </h3>
            <h4>
                Welcome to Bongalo, 
                we’ve sent you an email.
                You are one step closer to relaxing an the perfect stay.  
            </h4>

            <div class="verify-card">

            </div>
        </div>
    </div>
</template>


<script>
import Navigation from '../components/Blog/Navigation';

export default {
     name:'verification',
     components:{
         Navigation,
     }
}
</script>


<style lang='scss' scoped>
    .verification {
        width:100%;

        .content{
            padding: 50px 80px;
            width:100%;


        h3{
            font-style: normal;
            font-weight: normal;
            font-size: 25px;
            line-height: 30px;

            color: #404040;

        }
        h4{
            font-style: normal;
            font-weight: bold;
            font-size: 35px;
            line-height: 42px;
            width:40%;
            color: #404040;
            margin-top: 20px;
        }

        .verify-card{
            background: #FFFFFF;
            box-shadow: 0px 4px 70px rgba(104, 104, 104, 0.1);
            height: 572px;
        }
        }

    }
</style>