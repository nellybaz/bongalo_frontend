<template>
    <div class='payment'>
       <div v-if="isPaymentProcess">
            <h1>Select payment method</h1>

            <br>
            <div class="payment-tab">
                <div @click="paymentMethod = 1" class="payment-tab-item" :class="{active_tab: paymentMethod==1}">
                Mobile Money
                </div>
                <div @click="paymentMethod = 2" class="payment-tab-item" :class="{active_tab: paymentMethod==2}">
                    Card payment
                </div>
            </div>
            <br>

            <div class="payment-details">
                <h2>Payment Details</h2>
                <br>
                <h3>
                    ${{$route.query.price}}
                </h3>
                <p>
                   {{$route.query.guest}} Guest(s) for {{$route.query.nights}} nights
                </p>
                
            </div>

            <br>
            <div class="payment-details-section">
                <div v-if="paymentMethod == 1">
                    <StyledInput type="text" placeholder="Enter mobile money number" label="MOMO NUMBER"/>
                </div>
                <div v-else>
                    <StyledInput type="text" placeholder="Enter full name" label="FULL NAME"/>
                    <StyledInput type="text" placeholder="Enter Card number" label="CARD NUMBER"/>
                    <StyledInput type="text" placeholder="Expiry date" label="EXPIRY DATE"/>
                    <StyledInput type="text" placeholder="CVV" label="CVV"/>
                    
                </div>
            </div>

            <br>
            <div class="payment-actions">
                <Button @handleClick="paymentHandler()" label="PAY" :isFullWidth="true"></Button>
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
           <!-- <i class="fas fa-clipboard-check"></i> -->
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


export default {
     name:'payment',
     components:{
         StyledInput,
         Button
     },
     data:function(){
         return {
             paymentMethod:2,
             isPaymentProcess: true
         }
     },
     methods:{
         paymentHandler(){
             this.isPaymentProcess = false
         }
     }
}
</script>


<style lang='scss' scoped>
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