<template>
    <div class='terms-condition'>
        <Navigation :showSearch="false"></Navigation>

        <div class="content">
            <h1>
                Our Terms and Condition
            </h1>


           <div class="side-nav">
                <p class="item-a">Book with Confidence Guarantee™</p>
                <p class="item-a">Book with Confidence Guarantee™</p>
                <p class="item-a">Book with Confidence Guarantee™</p>
           </div>


           <select>
               <option value="community">Community</option>
           </select>


           <p class="message">
               Cupidatat in cillum magna laboris reprehenderit fugiat amet. Ipsum consequat cillum non aliqua 
               proident aliquip magna aute reprehenderit do officia quis labore. Quis duis est nulla laborum 
               id sit nostrud exercitation labore reprehenderit commodo cillum. Magna anim ullamco non sit do. 
               Adipisicing exercitation qui ea Lorem. Tempor excepteur veniam anim veniam sint velit proident. 
               Elit irure ad eu velit reprehenderit non Lorem aute reprehenderit dolore adipisicing in occaecat 
               duis. Lorem duis in in eiusmod amet do in aute do aliquip veniam. Pariatur velit culpa id et est 
               sint adipisicing labore magna elit incididunt esse eiusmod duis. Amet velit anim dolor sit anim 
               officia. Laboris ad irure aute enim velit ullamco amet sunt. Occaecat ipsum commodo labore ipsum 
               sit consectetur. Fugiat ullamco deserunt ad qui elit consectetur ex non aliqua. Occaecat sunt 
               ipsum mollit officia Lorem ullamco. Exercitation ullamco cupidatat sit laboris mollit proident 
               esse pariatur non occaecat fugiat ea veniam. Nisi ut ad esse laboris nulla minim duis amet minim 
               Lorem. Est proident fugiat adipisicing non sunt tempor aliquip pariatur ut ipsum. Nostrud anim 
               elit magna nisi reprehenderit do non do Lorem culpa. Duis Lorem Lorem proident est reprehenderit 
               \ea. Est aliquip adipisicing sint pariatur aliqua duis ut labore.

               
                Cupidatat in cillum magna laboris reprehenderit fugiat amet. Ipsum consequat cillum non aliqua 
               proident aliquip magna aute reprehenderit do officia quis labore. Quis duis est nulla laborum 
               id sit nostrud exercitation labore reprehenderit commodo cillum. Magna anim ullamco non sit do. 
               Adipisicing exercitation qui ea Lorem. Tempor excepteur veniam anim veniam sint velit proident. 
               Elit irure ad eu velit reprehenderit non Lorem aute reprehenderit dolore adipisicing in occaecat 
               duis. Lorem duis in in eiusmod amet do in aute do aliquip veniam. Pariatur velit culpa id et est 
               sint adipisicing labore magna elit incididunt esse eiusmod duis. Amet velit anim dolor sit anim 
               officia. Laboris ad irure aute enim velit ullamco amet sunt. Occaecat ipsum commodo labore ipsum 
               sit consectetur. Fugiat ullamco deserunt ad qui elit consectetur ex non aliqua. Occaecat sunt 
               ipsum mollit officia Lorem ullamco. Exercitation ullamco cupidatat sit laboris mollit proident 
               esse pariatur non occaecat fugiat ea veniam. Nisi ut ad esse laboris nulla minim duis amet minim 
               Lorem. Est proident fugiat adipisicing non sunt tempor aliquip pariatur ut ipsum. Nostrud anim 
               elit magna nisi reprehenderit do non do Lorem culpa. Duis Lorem Lorem proident est reprehenderit 
               \ea. Est aliquip adipisicing sint pariatur aliqua duis ut labore.

                Cupidatat in cillum magna laboris reprehenderit fugiat amet. Ipsum consequat cillum non aliqua 
               proident aliquip magna aute reprehenderit do officia quis labore. Quis duis est nulla laborum 
               id sit nostrud exercitation labore reprehenderit commodo cillum. Magna anim ullamco non sit do. 
               Adipisicing exercitation qui ea Lorem. Tempor excepteur veniam anim veniam sint velit proident. 
               Elit irure ad eu velit reprehenderit non Lorem aute reprehenderit dolore adipisicing in occaecat 
               duis. Lorem duis in in eiusmod amet do in aute do aliquip veniam. Pariatur velit culpa id et est 
               sint adipisicing labore magna elit incididunt esse eiusmod duis. Amet velit anim dolor sit anim 
               officia. Laboris ad irure aute enim velit ullamco amet sunt. Occaecat ipsum commodo labore ipsum 
               sit consectetur. Fugiat ullamco deserunt ad qui elit consectetur ex non aliqua. Occaecat sunt 
               ipsum mollit officia Lorem ullamco. Exercitation ullamco cupidatat sit laboris mollit proident 
               esse pariatur non occaecat fugiat ea veniam. Nisi ut ad esse laboris nulla minim duis amet minim 
               Lorem. Est proident fugiat adipisicing non sunt tempor aliquip pariatur ut ipsum. Nostrud anim 
               elit magna nisi reprehenderit do non do Lorem culpa. Duis Lorem Lorem proident est reprehenderit 
               \ea. Est aliquip adipisicing sint pariatur aliqua duis ut labore.
           </p>


           <div class="side-nav">
                <p class="item-a">Book with Confidence Guarantee™</p>
                <p class="item-a">Book with Confidence Guarantee™</p>
                <p class="item-a">Book with Confidence Guarantee™</p>
           </div>

        </div>
        
    </div>
</template>


<script>
import Navigation from '../components/Blog/Navigation';

export default {
     name:'terms-condition',
     components:{
         Navigation,
     }
     
}
</script>


<style lang='scss' scoped>
    .terms-condition {
        width:100%;

        .content{
            margin: 0 150px;
            border-left: 1px solid rgb(228, 227, 227);
            border-right: 1px solid rgb(228, 227, 227);
            // border:1px solid red;

            padding: 50px 50px;

            h1{
                font-style: normal;
                font-weight: bold;
                font-size: 35px;
                line-height: 42px;

                color: #404040;
                margin-bottom: 30px;
            }

            .side-nav{
                width:100%;
                .item-a{
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 45px;
                /* or 225% */

                text-align: justify;

                color: #3A85FC;

            }

            }

            select{
                margin-top: 30px;
                border: none;
                padding: 0px;
                border:1px solid grey;

                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 45px;
                /* or 225% */

                text-align: justify;

                // color: #3A85FC;
            }
            select:focus{
                outline: none;
            }

            .message{
                width:80%;
                margin-top: 50px;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 35px;
                /* or 175% */

                text-align: justify;

                color: #404040;
            }
            
        }
    }
</style>