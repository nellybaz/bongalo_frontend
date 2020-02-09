<template>
    <div class='book-card'>

        <h3>
            Travelling Africa, Trip for Business or Pleasure ? Book your stay with us.
        </h3>
        
        <br>

        <div class="item0">
            <p class="item-label">WHERE</p>
            <Input hint="Anywhere" :isFullWidth="true" type="text" />
        </div>

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
            <Input hint="Number of guest" :isFullWidth="true" type="number" />
        </div>
       
        <div class="btn-div">
            <Button class="btn" label="Search" :isFullWidth="false"  ></Button>
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
     }
}
</script>


<style lang='scss' scoped>

    @media only screen and (max-width: 900px){
        .book-card{
            h3{
                display: none !important;
            }
        }
    }


    .book-card {
        width: 100%;
        height: 580px;
        background: #FFFFFF;
        box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.06);
        border-radius: 5px;
        padding: 40px;

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
            grid-column-gap: 1px;
            grid-template-columns: 1fr 1fr;


            .inner1, .inner2{
                width:100%;
                // border:1px solid green;
            }
        }
        .item3{
            margin-bottom: 20px;
        }

        .btn-div{
            width:100%;

            .btn{
                float: right;
            }
            
        }
    }
</style>