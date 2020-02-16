<template>
    <div class='book-card'>

        <h3>
            Travelling Africa, Trip for Business or Pleasure ? Book your stay with us.
        </h3>
        
        <!-- <br> -->

        <!-- <div class="item0">
            <p class="item-label">WHERE</p>
            <Input hint="Anywhere" :isFullWidth="true" type="text" />
        </div> -->

        <div class="item1">
            <p class="item-label">TYPE</p>
            <Input hint="Select" :isFullWidth="true" type="text" />
        </div>

        <div class="item2">
           <div class="inner1">
                 <p class="item-label">CHECKIN</p>
                <input class="card-date-input" type="date" >
           </div>

           <div class="inner2">
                 <p class="item-label">CHECKOUT</p>
               <input class="card-date-input" type="date" >
           </div>
        </div>

        <div class="item3">
            <p class="item-label">GUEST</p>
            <div class="content">
                <p class="guest-number-p">
                    {{
                        this.guestNumber
                    }}
                    guest(s)
                </p>
                <div class="btn-container">
                    <button v-on:click=handleGuestClick(1)>
                       <i class="fas fa-plus"></i>
                    </button>
                    <button v-on:click=handleGuestClick(0)>
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
        </div>
       
        <div class="btn-div">
            <Button v-on:handleClick="this.handleSearchClick" class="btn" label="Search" :isFullWidth="false"  ></Button>
        </div>
    </div>
</template>


<script>
import Input from '../components/TextInput';
import Button from '../components/Button';


export default {
     name:'home_book_card',
     components:{
        Input,
        Button,
     },
    data: function(){
        return {
            guestNumber:1,
        }
    },
     methods:{
         handleSearchClick(){
             this.$router.push("/search")
         },
         handleGuestClick(motive){
             if(motive == 1){
                 this.guestNumber += 1
             }
             else if(motive == 0 && this.guestNumber > 1){
                this.guestNumber -= 1
             }
         }
     }
}
</script>


<style lang='scss' scoped>

    @media only screen and (max-width: 900px){
        .book-card{
            margin-top: 1%;
            margin: 0 10% !important;
            padding: 20px !important;
            padding-bottom: 70px !important;
            h3{
                display: none !important;
            }

            .item2{
                grid-template-columns: 1fr !important;
                // .inner{
                //     // border:1px solid red;
                // }
                input{
                    width:100%;
                    background: #fff;
                    margin-bottom: 15px;
                }
            }

            .item3{
                .guest-number-p{
                width:50% !important;
                }
                button{
                    // width: 40px !important;
                    margin: 0px 5px !important;
                    background: #fff;
                }
            }
        }
    }


    .book-card {
        margin-top: 1%;
        margin-left: 15%;
        width: 100%;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.06);
        border-radius: 5px;
        padding: 40px 20px;
        padding-bottom: 70px;

        .card-date-input{
            height: 50px;
            border: 1px solid #C4C4C4;
            border-radius: 5px;
            padding: 10px 20px; 
            width:90%;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: rgba(106, 106, 106, 0.7);
        }
        .card-date-input:focus{
                outline: none;
            }
        ::-webkit-input-placeholder{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: rgba(106, 106, 106, 0.7);
        }
    
        h3{
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 30px;
            display: flex;
            align-items: center;

            color: #404040;
        }

        .item-label{
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            color: #6A6A6A;
            margin-bottom: 3px;
        }

        .item1, .item2, .item3{
            margin-top: 20px;
        }
        .item2{
            width:100%;
            // border:1px solid red;
            display: grid;
            grid-column-gap: 10px;
            grid-template-columns: 1fr 1fr;


            .inner1, .inner2{
                width:100%;
                // border:1px solid green;

                input{
                    width:92%;
                }
            
            }
        }
        .item3{
            margin-bottom: 20px;
            // border:1px solid red;

           .content{
               display: grid;
               grid-template-columns: 6fr 3fr;

                .guest-number-p{
                width:95%;
                height: 50px;
                border:1px solid #C4C4C4;
                display:flex;
                align-items:center;
                padding: 0 20px;
                border-radius: 5px;
                flex-direction: row;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                color: rgba(106, 106, 106, 0.7);

                
            }
            .btn-container{
                width:100%;
                // border:1px solid red;
                display:flex;
                justify-content:space-between;
                flex-direction: row;
                button{
                    height: 50px;
                    width:50px;
                    border-radius: 50%;
                    border: 2px solid #3A85FC;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    // margin: 0 10px;

                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 17px;
                    color: #3A85FC;
                    i{
                        color: #3A85FC;
                    }
                }
            }

            button:focus{
                outline: none;
            }
           }
        }

        .btn-div{
            width:100%;

            .btn{
                float: right;
            }
            
        }
    }
</style>