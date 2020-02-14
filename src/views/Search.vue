<template>
    <div class='search'>
        <Navigation></Navigation>
        <section class="filter">
            <p>Date</p>
            <p>Guest</p>
            <p>Type</p>
            <p>Price</p>
        </section>


        <section class="apartment-section">
            <h3 class="h3">
                Places to stay in Kigali
            </h3>
            <div class="inner-content">
                <HorizontalCard v-for="item in apartments" :key=item.id :apartment=item></HorizontalCard>
            </div> 
        </section>
    </div>
</template>


<script>
import Navigation from "../components/Blog/Navigation";
import HorizontalCard from '../components/HorizontalCard';

export default {
     name:'search',
     components:{
         Navigation,
         HorizontalCard

     },
     data: function(){
         return {
             apartments:[
                 {
                     id:1,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Bella Apartments",
                     price:"$20",
                     image:"house1.png"
                 },
                 {
                     id:2,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Bella Apartments",
                     price:"$20",
                     image:"house2.png"
                 },
                 {
                     id:3,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Visit Rwanda",
                     price:"$20",
                     image:"house3.png"
                 },
                 {
                     id:4,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Attend Youth Connekt ..",
                     price:"$20",
                     image:"house1.png"
                 },
                 {
                     id:5,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Global Health Summit",
                     price:"$20",
                     image:"house2.png"
                 },
                 {
                     id:6,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Bella Apartments",
                     price:"$20",
                     image:"house1.png"
                 },
                 {
                     id:7,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Bella Apartments",
                     price:"$20",
                     image:"house2.png"
                 },
                 {
                     id:8,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Visit Rwanda",
                     price:"$20",
                     image:"house3.png"
                 },
             ],
         }
     }
}
</script>


<style lang='scss' scoped>
    .search {
        width:100%;

        .filter{
            width:100%;
            height: 50px;
            border:1px solid #F2F2F2;
            display: flex;
            padding: 0 193px;
            align-items: center;

            p{
                border:1px solid rgba(106, 106, 106, 0.65);
                padding: 5px 18px;
                height: 30px;
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius: 5px;
                margin-right: 15px;
                flex-direction: row;

                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 14px;

                color: #6A6A6A;
            }
        }

        .apartment-section{
        margin-top: 50px;
        width:100%;
        padding: 20px 80px;
        background: #fff;

            .inner-content{
            margin-top: 30px;
            display: grid;
            grid-template-columns:repeat(4, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 30px;
            }
        }
    }
</style>