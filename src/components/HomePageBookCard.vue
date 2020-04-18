<template>
    <div class='book-card'>

        <h3>
            Travelling Africa, Trip for Business or Leisure? Book your stay with us.
        </h3>
        
        <!-- <br> -->

        <!-- <div class="item0">
            <p class="item-label">WHERE</p>
            <Input hint="Anywhere" :isFullWidth="true" type="text" />
        </div> -->

        <div class="item1">
            <p class="item-label">TYPE</p>
            <Select @selectChangeHandler="handleSelect" step="bookingCardTypes" :options="apartment_types" width="100%" :model="choosenType"></Select>
        </div>

        <div class="item2">
           <div class="inner1">
                 <p class="item-label">ARRIVAL</p>
                <vc-date-picker
                    v-model="checkin"
                    :popover="{ placement: 'bottom', visibility: 'click' }"
                    :min-date="new Date()"
                    >
                    <div class="date-picker">
                        {{
                            getDateFormat(checkin.toString(), 1)
                        }}
                    </div>
                </vc-date-picker>

           </div>

           <div class="inner2">
                 <p class="item-label">DEPARTURE</p>
                 <vc-date-picker
                    v-model="checkout"
                    :popover="{ placement: 'bottom', visibility: 'click' }"
                    :min-date="checkin != 'dd/mm/yyyy' ? checkin : new Date()"
                    :disabled-dates="{ start:null, end:Date.now()}"
                    >
                    <div class="date-picker">
                        {{
                            getDateFormat(checkout.toString(), 2)
                        }}
                    </div>
                </vc-date-picker>
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
                     <button v-on:click=handleGuestClick(0)>
                        <i class="fas fa-minus"></i>
                    </button>
                    
                    <button v-on:click=handleGuestClick(1)>
                       <i class="fas fa-plus"></i>
                    </button>
                   
                </div>
            </div>
        </div>
       
        <div class="btn-div">
            <Button 
                v-if="!isBtnClicked"
                v-on:handleClick="this.handleSearchClick" 
                class="btn" 
                label="Search" 
                :isFullWidth="false"  />

            <div class="loader-div" v-else>
                <pulse-loader class="loader" color="#3A85FC" size="10px"></pulse-loader>
            </div>
            
        </div>
    </div>
</template>


<script>
import Input from '../components/TextInput';
import Button from '../components/Button';
import Select from '../components/Select';
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import Vue from 'vue';
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />

});


export default {
     name:'home_book_card',
     components:{
        Button,
        Select,
        PulseLoader
     },
    data: function(){
        return {
            isBtnClicked: false,
            apartment_types:[
                {
                    value:"all",
                    text:"Any",
                },
                {
                    value:"private_room",
                    text:"Private Room",
                },
                {
                    value:"full_house",
                    text:"Full House",
                }
            ],
            monthMap:{
                "Jan":1,
                "Feb":2,
                "Mar":3,
                "Apr":4,
                "May":5,
                "Jun":6,
                "Jul":7,
                "Aug":8,
                "Sep":9,
                "Oct":10,
                "Nov":11,
                "Dec":12
            },
            choosenType:"all",
            checkin:"dd/mm/yyyy",
            checkout:"dd/mm/yyyy",
            guestNumber:1,
            attributes: [
                {
                    key: 'today',
                    highlight: true,
                    dates: new Date()
                }
                ]
            
        }
    },
     methods:{
         handleSelect(val){
             this.choosenType = val.data
         },
         getDateFormat(date, intent){
            if(date == "dd/mm/yyyy"){
                return date;
            }
            let splitted = date.split(" ")
            
            let new_date = splitted[2] + "/" + this.monthMap[splitted[1]] + "/"  +splitted[3]

            return new_date
        },
         handleSearchClick(){
             this.isBtnClicked = true;
             let urlToQuery = "apartment/search?type="+this.choosenType+"&guest="+this.guestNumber

             if(this.checkin != "dd/mm/yyyy" && this.checkout == "dd/mm/yyyy"){
                 this.isBtnClicked  = false;
                 // Checkout needed
                 this.$notify({
                    group: 'general',
                    title: 'Missing Info',
                    text: 'Checkout date is required !',
                    type:'error'
                    });
             }

             else if(this.checkout != "dd/mm/yyyy" && this.checkin == "dd/mm/yyyy"){
                 this.isBtnClicked  = false;
                 // Checkin neeeed
                 this.$notify({
                    group: 'general',
                    title: 'Missing Info',
                    text: 'Checkin date is required !'
                    });
             }
             else
             {
                 let searchUrl = "/search?type="+this.choosenType+"&guest="+this.guestNumber
                 if(this.checkin != "dd/mm/yyyy"){
                     searchUrl += "&checkin="+this.getDateFormat(this.checkin.toString(), 1)+"&checkout="+this.getDateFormat(this.checkout.toString(), 2)
                     urlToQuery += "&checkin="+this.getDateFormat(this.checkin.toString(), 1)+"&checkout="+this.getDateFormat(this.checkout.toString(), 2)
                 }
                
                this.$store.dispatch('searchApartment', {url:urlToQuery})
                .then(res => {
                    this.$router.push(searchUrl)
                })
             }
             
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

     .loader-div {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-direction: row;
            width: 80%;
            // border:1px solid red;

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
            height: 40px;
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
            grid-column-gap: 5px;
            grid-template-columns: 1fr 1fr;

            .date-picker{
                display:flex;
                align-items:flex-start;
                justify-content:center;
                flex-direction: column;
                height: 40px;
                border: 1px solid #C4C4C4;
                border-radius: 5px;
                padding: 10px 10px; 

                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                color: rgba(106, 106, 106, 0.7);
            }

            .inner1, .inner2{
                width:100%;
                // border:1px solid green;

                input{
                    width:100%;
                    padding: 0 5px;
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
                height: 40px;
                border:1px solid #C4C4C4;
                display:flex;
                align-items:center;
                padding: 0 10px;
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
                    height: 40px;
                    width:40px;
                    border-radius: 50%;
                    border: 2px solid #3A85FC;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    background: #fff;
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