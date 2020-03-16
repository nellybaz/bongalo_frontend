<template>
  <div class="home">
    <Jumbotron></Jumbotron>

    <section class="event-section">
      <EventCard v-if="!isMobile()" :events="events" label="Things to look out for" link="/event-details"></EventCard>
      <MobileEventCard v-else :events="events" label="Things to look out for"></MobileEventCard>

    </section>
      
    
    <section class="explore-section">
        <h3 class="h3">
          Explore Bongalo
        </h3>
        <div class="inner-content">
            <ExploreCard v-for="item in explores" :key=item.id :item=item></ExploreCard>
        </div>  
    </section>

    <section v-if="apartments.length > 0" class="apartment-section">
       <h3 class="h3">
          Places to stay in Kigali
        </h3>
        <div class="inner-content">
            <HorizontalCard v-for="item in apartments" :key=item.uuid :apartment=item></HorizontalCard>
        </div> 
    </section>


    <section class="experience-section">
      <EventCard v-if="!isMobile()" :events="events" label="Some amazing experiences" link="/experience"></EventCard>
      <MobileEventCard v-else :events="events" label="Some amazing experiences"></MobileEventCard>
    </section>

    
    <section class="why-section">
      <h3 class="h3">
        Why you should stay with us
      </h3>
       <div class="inner">
          <WhySectionCard v-for="item in whyContent" :key="item.id" :content=item></WhySectionCard>
       </div>
    </section>

    <section class="middle-banner-section">
        <p>List your property on Bongalo and open your doors to rental income.</p>
        <button @click="handleOpeningHostPage">List</button>
    </section>

    <section class="powered-section">
      <h3 class="h3">Powered By</h3>

      <div class="content">
        <img v-for="item in powered" :key=item.id :src="require(`../assets/images/${item.image}`)" alt="">
      </div>

    </section>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron';
import EventCard from '../components/EventCard';
import MobileEventCard from '../components/MobileEventCard';
import ExploreCard from '../components/ExploreCard';
import HorizontalCard from '../components/HorizontalCard';
import WhySectionCard from '../components/WhySectionCard';
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'home',
  components: {
    Jumbotron,
    EventCard,
    ExploreCard,
    HorizontalCard,
    WhySectionCard,
    MobileEventCard
  },
  methods:{
    ...mapGetters(['isMobile', 'getFeatured', 'isLoggedIn']),
    ...mapActions(['setModalState']),
    handleOpeningHostPage(){
             if(this.isLoggedIn()){
                this.$router.push("/become-a-host");
            }
            else{
              this.$router.push({query:{"next":"become-a-host"}})
              this.setModalState(1)
            }
        },

  },
  data:function(){
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
      explores:[
        {
          id:1,
          image:'item1.png',
          text:"Events to attend"
        },
        {
          id:2,
          image:'item2.png',
          text:"Places to stay"
        },
        {
          id:3,
          image:'item3.png',
          text:"Things to do"
        }
      ],

      apartments: [],
      whyContent:[
              {
                id:1,
                image:'why1.png',
                title: 'Availability',
                text:'We know how hard it can be finding a perfect home to rent, especially when moving to a new country; so we are available 24/7 for your inquiries about accommodation in Rwanda. We move families and individuals directly into their dream homes.'
              },

              {
                id:2,
                image:'why2.png',
                title: 'Client Satisfaction',
                text:'Whether you are on a budget, coming for a conference, seminar, vacation or relocating to Rwanda, we got you covered. Plus, you do not need your credit card to pay for your accommodation, all you need to do is send us your request and choose your payment method.'
              },
              {
                id:3,
                image:'why3.png',
                title: 'Consultancy',
                text:'We’re available to tell you the best neighbourhoods to live in Kigali. We’ve partnered with the preeminent guest houses, private homes and real estate agents in Kigali to provide you with the best vacation homes for your long or short stay in Rwanda.'
              }
          ],

      powered:[
        {
          id:1,
          image:'powered1.png',
        },
                {
          id:2,
          image:'powered2.png',
        },
                {
          id:3,
          image:'powered3.png',
        },
                {
          id:4,
          image:'powered4.png',
        },
                {
          id:5,
          image:'powered5.png',
        }
      ]
    }
  },
  created(){
   this.$store.dispatch('getFeaturedApartments', {})
   .then(res => {
     if(res == 1){
        this.apartments = this.getFeatured()
     }
   })
  }
}
</script>

<style lang="scss" scoped>

 @media only screen and (max-width: 900px){
   .explore-section, .event-section, .experience-section, .apartment-section, .why-section, .powered-section{
     padding: 20px !important;
   }

  .explore-section{
    .inner-content{
          grid-template-columns:1fr !important;
          grid-row-gap: 20px;
        }
  }

  .apartment-section{
     .inner-content{
          margin-top: 30px;
          display: grid;
          grid-template-columns:repeat(2, 1fr) !important;
          grid-column-gap: 20px;
          grid-row-gap: 70px !important;
        }
  }

  .why-section{
    .inner{
        width:100%;
        
        display: grid;
        grid-template-columns: 1fr !important;
        grid-row-gap: 30px;
      }
  }

  .powered-section{
    height: auto !important;
    .content{
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 10px;
      // border:1px solid red;
      img{
        width:100%;
        max-height: 100px !important;;
        // border:1px solid red;
        object-fit: contain;
      }
    }
  }

 }

   .h3{
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 30px;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            color: #404040;

      }
  .home{
    width:100%;

    .event-section, .experience-section{

      background: #fff;
      width:100%;
      padding: 20px 50px;
     
    }


.experience-section{
  margin-top: 70px;
}


    .explore-section{
      width:100%;
      padding: 20px 80px;
      background: #fff;

    // border:1px solid green;

        .inner-content{
          margin-top: 30px;
          display: grid;
          grid-template-columns:repeat(3, 1fr);
          grid-column-gap: 20px;
          
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
          grid-row-gap: 55px;
        }
    }

    .why-section{
        width:100%;
        margin-top: 20px;
        width:100%;
        padding: 20px 80px;
        background: #fff;

      .inner{
        width:100%;
        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
      }
    }

    .middle-banner-section{
      width:100%;
      height: 500px;
      width:100%;
      // border:1px solid red;
      margin-top: 50px;
      background: url(../assets/images/middle-banner.png);


      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction: column;

      p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        color: #FFFFFF;
        width: 464px;
      }

      button{
        border:none;
        height: 50px;
        width: 180px;
        margin-top: 30px;
        background: #3A85FC;
        border-radius: 5px;
        cursor: pointer;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
      }
    }

    .powered-section{
      width:100%;
      height: 260px;
      margin-top: 60px;
      width:100%;
      padding: 0 80px;
      h3{
        font-size: 35px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: row;
      }

      .content{
        // border:1px solid red;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        flex-direction: row;
      }
    }
  }
</style>
