<template>
    <div class='experience'>
        <Navigation></Navigation>
        <ImageGrid></ImageGrid>
        <EventsInfo label="Tour with Visit Rwanda"></EventsInfo>


        <div class="what-you-do">
            <h3>What you’ll do</h3>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum rutrum vel viverra leo. Etiam est sapien adipiscing maecenas eget. Morbi nec molestie massa felis augue et orci. Dignissim sapien, proin at felis urna, turpis ultrices. Morbi nec molestie massa felis augue et orci. Dignissim sapien, proin at felis urna, turpis ultrices.
            </p>
        </div>



        <div class="host">

             <h3>Your Host</h3>

           <div>
                <div class="l-top">
                    <img src="../assets/images/house7.png" alt="">
                    <small> Visit Rwanda</small>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum rutrum vel viverra leo. Etiam est sapien adipiscing maecenas eget. Morbi nec molestie massa felis augue et orci. Dignissim sapien, proin at felis urna, turpis ultrices. Morbi nec molestie massa felis augue et orci. Dignissim sapien, proin at felis urna, turpis ultrices.
                </p>

                <button class="btn-contact">
                    Contact host
                </button>
           </div>

        </div>


        <br>
        <div class="similar">
            <EventCard :events="events" label="Similar Experiences" link="/experience"></EventCard>

        </div>

        <div class="pay-div">
            <div class="left">
                <img src="../assets/images/house7.png" alt="">
                <h4>
                    Tour with Visit Rwanda
                </h4>
                <p>23 views</p>
            </div>
            <div class="right">
                <Button class="btn-pay" label="From $20/Day"></Button>
            </div>

        </div>


    </div>
</template>


<script>

import Navigation from '../components/Blog/Navigation';
import ImageGrid from '../components/ImageGrid';
import EventsInfo from '../components/EventsInfo';
import Button from '../components/Button';
import EventCard from '../components/EventCard';

export default {
     name:'experience',
     components:{
         ImageGrid,
         EventsInfo,
         Button,
         Navigation,
         EventCard
     },
     data: function(){
         return {
             events:[
                 {
                     id:1,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Jidenna in the City",
                     amount_text:"Tickects from",
                     price:"$20",
                     image:"event1.png"
                 },
                 {
                     id:2,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Visit the gorillas with Remarkable Rwanda",
                     amount_text:"Tickects from",
                     price:"$20",
                     image:"event2.png"
                 },
                 {
                     id:3,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Visit Rwanda",
                     amount_text:"Tickects from",
                     price:"$20",
                     image:"event2.png"
                 },{
                     id:4,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Attend Youth Connekt ..",
                     amount_text:"Tickects from",
                     price:"$20",
                     image:"event3.png"
                 },
                 {
                     id:5,
                     location:'Kicukiru, Kigali, kigali',
                     title:"Global Health Summit",
                     amount_text:"Tickects from",
                     price:"$20",
                     image:"event1.png"
                 }
             ],
         }
     }
}
</script>


<style lang='scss' scoped>
    .experience {
        width:100%;
    

    .what-you-do, .host{
        // width:100%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 50px 0px;
        margin: 0 120px;
        border-bottom:1px solid rgba(0, 0, 0, 0.15);



         h3{
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 36px;
            display: flex;
            align-items: center;

            color: #404040;
        }


        p{
            width: 80%;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 25px;
            /* or 125% */


            color: #424242;
        }


    }

    .host{
         .btn-contact{
                border: 1px solid #3A85FC;
                border-radius: 5px;
                font-style: normal;
                font-weight: bold;
                font-size: 15px;
                line-height: 18px;
                display: flex;
                align-items: center;
                margin: 20px 0;
                padding: 10px 20px;
                color: #3A85FC;
            }

        .l-top{
            display:flex;
            align-items:center;
            justify-content:flex-start;
            flex-direction: row;
            margin: 15px 0;
            small{
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                display: flex;
                align-items: center;

                color: #404040;

            }

            img{
                height: 60px;
                width: 60px;
                border-radius: 50%;
                margin-right: 20px;
            }
            
        }

        
    }

    .similar{
        width:100%;
        padding: 0 30px;
    }

    .pay-div{
        position: fixed;
        z-index: 99999;
        bottom: 0px;
        padding: 10px 100px;
        width:100%;
        display: grid;
        grid-template-columns: 8fr 4fr;

        background: #FFFFFF;
        box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.05);

        .left{
            display:flex;
            align-items:center;
            justify-content:flex-start;
            flex-direction: row;
            h4{
                margin:0 10px;
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 20px;
                /* identical to box height, or 100% */

                display: flex;
                align-items: center;

                color: #404040;
            }

            p{
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                display: flex;
                align-items: center;

                color: #6A6A6A;
            }
            img{
                height: 40px;
                width: 40px;
                border-radius: 50%;
            }
        }

        .right{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            flex-direction: row;
            .btn-pay{
            align-self: right;
        }
        }

    }
    }
</style>