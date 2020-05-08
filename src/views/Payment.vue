<template>
    <div class='payment'>
       <div v-if="isLoading">
           <h1>Confirming your payment, please wait!!</h1>
           <br>
           <br>
            <div class="loader-div">
                <pulse-loader class="loader" color="#3A85FC" size="10px"></pulse-loader>
            </div>
       </div>

       <div class="success" v-else>
           <h1 style="color:green">Booking Successful</h1>
           <br>
           <h3>Thanks for staying with us</h3>
           <br>
           <p>Note:</p>
           <small>You will receieve an email of the booking details plus contact of the house owner</small>
           <br>
           <br>
           <i class="far fa-check-circle"></i>


           <div class="success-actions">
               <button @click="$router.push('/')" >Go back home</button>
               <button @click="$router.push('/profile')" >Go to profile</button>

           </div>
       </div>
    </div>
</template>


<script>
import StyledInput from '../components/StyledInput';
import Button from '../components/Button';
import PulseLoader from "vue-spinner/src/PulseLoader.vue";


export default {
     name:'payment',
     components:{
        //  StyledInput,
        //  Button,
          PulseLoader
     },
     data:function(){
         return {
             isLoading:true,
             paymentMethod:2,
             isPaymentProcess: true
         }
     },
     methods:{
         paymentHandler(){
             this.isPaymentProcess = false
         }
     },
     created(){
         const data = {
             token: this.$store.getters.getToken,
             pay_token: this.$route.query['TransactionToken'],
             user:  this.$store.getters.getUuid
         }
         this.$store.dispatch('confirmBooking', data)
         .then((res) => {
             window.console.log(res)
             if(res['responseCode'] == 1){
                 this.isLoading = false
             }
         })
         .catch((err) =>{
             window.console.log(err)
         })
     }
}
</script>


<style lang='scss' scoped>

.loader-div{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;
}
    .active_tab{
        background-color: navy;
        color: #fff !important;
        
    }
    .payment {
        width:100%;
        padding: 100px 30%;

        .payment-tab{
            border:1px solid black;
            width:100%;
            height: 50px;
            display: grid;
            place-items: center;
            grid-template-columns: repeat(2, 1fr);

            .payment-tab-item{
                width:100%;
                height: 100%;
                color: #000;
                display:flex;
                align-items:center;
                justify-content:center;
                cursor: pointer;
                flex-direction: row;
            }
        }

        .payment-details{
            h2, h3, p{
                color: grey;
            }
            p{
                line-height: 30px;
            }
        }

        .success{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction: column;
            h1{
                font-size: 40px;
            }
            i{
                font-size: 120px;
                color: green;
            }

            .success-actions{
                width:100%;
                margin-top: 50px;
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction: row;

                button{
                    margin-right: 5px;
                    background: #fff;
                    padding: 1em 2em;
                    border:none;
                    cursor: pointer;
                    text-decoration: underline;
                    font-size: 15px;
                }
            }
        }
    }
</style>