<template>
    <div class='careers'>
        <Navigation :showSearch="false"></Navigation>

        <div class="content">
           <div class="top">
               <div class="left">
                    <h1>
                        Come work with us
                    </h1>

                    <p class="with-us">
                        At Bongalo, we aim to grow together and cultivate Africa’s growing travel experience, a place where people can find the best accommodation tailored to their needs, hosts profiles and shared interests. This is driven by the passion to help others find perfect homes on their trips, stress-free within minutes, and connect culturally using technology. 
                        We are always on the lookout for rock stars to join our awesome team of diverse young people. We are happy to have you join our team if you're passionate about helping others to find their perfect homes and accommodation using technology. 
                        We have coffee at our office!
                    </p>
               </div>
               <div class="right">
                   <img src="../assets/images/careers_img.png" alt="bongalo-careers">
               </div>
           </div>

            <div class="bottom">
                <h2>These are the current job listings we have open. </h2>
            </div>

            <div class="careers-list">
                <div v-for="item in positions" :key=item class="list-item">
                    <p class="name">
                        Administrative Director
                    </p>
                    <p class="location">
                        Location -  Rwanda
                    </p>
                    <router-link to="/apply" class="action">
                        Apply here
                    </router-link>
                </div>
            </div>

            <br>
            <br>

            <h2>
                Didn’t find something you’re intrested in but would like to remain in our career network? 
            </h2>

            <ApplySection></ApplySection>

        </div>
        
    </div>
</template>


<script>
import Navigation from '../components/Blog/Navigation';
import ApplySection from '../components/ApplySection';


export default {
     name:'terms-condition',
     components:{
         Navigation,
         ApplySection
     },
     data: function(){
         return {
             positions:"abcde"
             }
     }
     
}
</script>


<style lang='scss' scoped>
    .careers {

        h2{
            width:60%;
            font-style: normal;
            font-weight: bold;
            font-size: 35px;
            line-height: 42px;

            color: #404040;
               }

        width:100%;

        .content{
            margin: 0 150px;
            border-left: 1px solid rgb(228, 227, 227);
            border-right: 1px solid rgb(228, 227, 227);
            // border:1px solid red;

            padding: 50px 50px;

           .top{
               display: grid;
               grid-template-columns: 1fr 1fr;
               .left{
                    h1{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 35px;
                    line-height: 42px;

                    color: #404040;
                    margin-bottom: 30px;
                    }
                    .with-us{
                        width:90%;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 18px;

                        color: #404040;
                    }
               }
           }

           .bottom{
               margin-top: 30px;
               
           }

           .careers-list{
               width:100%;
            //    border:1px solid red;
               display:flex;
               align-items:center;
               justify-content:center;
               flex-direction: column;

               .list-item{
                //    width:40%;
                //    border:1px solid red;
                   display:flex;
                   align-items:center;
                   justify-content:center;
                   flex-direction: column;
                   padding: 20px;


                   .name{
                        font-style: normal;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 24px;
                        text-align: center;

                        color: #404040;

                   }

                   .location{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 24px;
                        text-align: center;

                        color: #404040;
                   }

                   .action{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 24px;
                        text-align: center;

                        color: #3A85FC;
                   }
               }
           }

        }
           
    }
</style>