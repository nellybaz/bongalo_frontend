<template>
    <div class='apartment_details'>
        <div v-if="!isImageShow" class="detials-content">
            <Navigation></Navigation>

            <div class="image-div">
                <img v-on:click="updateImageShow(1)" class="img1" src="../assets/images/house4.png" alt="">
                <img v-on:click="updateImageShow(1)" class="img2" src="../assets/images/house5.png" alt="">
                <img v-on:click="updateImageShow(1)" class="img3" src="../assets/images/house6.png" alt="">
                
                <div v-on:click="updateImageShow(1)" class="img4">
                    <img src="../assets/images/house7.png" alt="">
                    <router-link to="">
                            <p v-on:click="updateImageShow(1)">
                                View more photos
                            </p>
                    </router-link>
                </div>

            </div>

            <div class="apartment-details-content">
            <div class="details-div">
                <div class="tap-div">
                    <ul>
                        <li :class="{border_bottom: borderItem==1}">Overview</li>
                        <li>Amenities</li>
                        <li>Review</li>
                        <li>Other Info</li>

                    </ul>
                </div>
                <div class="content-div">
                    <div class="left">
                        <h4>Bella Apartments</h4>

                        <div class="host-details">
                            <img src="../assets/images/user1.png" alt="">
                            <div class="name">
                                <p>Host</p>
                                <strong>Frank Doechukwu</strong>
                            </div>

                            <div class="country">
                                <p>Country</p>
                                <strong>Nigeria</strong>
                            </div>

                        <strong class="contact-host">Contact Host</strong>
                        </div>

                        <div class="more-info">
                            <div class="more-info-left">
                                <p> <i class="fas fa-user-friends"></i> Sleeps: 6</p>
                                <p> <i class="fas fa-door-open"></i> Bedrooms: 3</p>
                                <p> <i class="fas fa-shower"></i> Bathrooms: 2</p>
                                <p><i class="fas fa-moon"></i> Min Stay: 1 night</p>
                            </div>

                            <img src="../assets/images/map_placeholder.png" alt="">

                        </div>

                        <div class="rules">
                            <p>No Smoking</p>
                        </div>

                        <div class="desc">
                            <h3>3 Beedrooms, 2 Bathrooms, 6 Sleeps</h3>

                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum necessitatibus laudantium illo accusantium, dicta, quae sint rem illum atque, aperiam consequuntur perferendis. Quae, officia voluptate tenetur sit amet ut fugiat.
                            </p>
                        </div>

                        <div class="amenities">
                            <h4>Amenities</h4>

                            <div>
                                <p> <i class="far fa-sun"></i> Air conditioning</p>

                                <p> <i class="far fa-sun"></i>Dryer</p>

                                <p> <i class="far fa-sun"></i> Cable TV</p>

                                <p> <i class="far fa-sun"></i> Essentials</p>
                            </div>
                        </div>


                        <div class="reviews">
                            <h3>Reviews</h3>
                            <h4>
                                267 <span>
                                    reviews
                                </span>
                            </h4>

                            <div class="review-div" v-for="review in reviews" :key="review.id">    
                                <div class="reviewer-info">
                                    <img src="https://a0.muscache.com/im/pictures/user/419727a1-6cfc-4431-8464-b5f67207e2ce.jpg?aki_policy=profile_large" alt="">

                                    <div class="rv-info-right">
                                        <p class="rv-name">Cynthia</p>
                                        <p class="rv-date">February 2020</p>
                                        
                                    </div>

                                    
                                </div>
                                <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam alias omnis eos dolores hic perferendis labore saepe, tempora maiores consequatur vel ratione quasi. Id inventore accusamus tempora. Aliquam, incidunt!
                                </p>
                                <router-link to="">
                                    Read more...
                                </router-link>

                            </div>

                            <div>

                            </div>
                        </div>

                        <div class="other-div">
                            <h3>
                                Things to keep in mind
                            </h3>

                            <p>
                                Checkin: 
                                <span>
                                    After 1:00PM
                                </span>
                            </p>
                            <p>
                                Checkout: 
                                <span>
                                    11 :00 AM
                                </span>
                            </p>

                            <h4>
                                Cacellations
                            </h4>

                            <p>Cancel before 1:00 PM on Feb 16 and get a full refund, minus the first night and service fee.</p>

                        </div>
                    </div>

                    <div class="right">
                        <div class="content">
                            <div class="info">
                                <h4>$20 <span>/ night</span></h4>
                                <small>Views: 204 times</small>
                            </div>

                            <div class="book">
                                <label for="">Dates</label>

                                <div class="dates">
                                    <input id="book-checkin" type="date" placeholder="Check in"/>
                                    <input id="book-checkout" type="date" placeholder="Check out"/>
                                </div>
                                <br>
                                <div class="book-guest">
                                    <p>
                                        1 Guest(s)
                                    </p>

                                    <div class="btns">
                                        <button>
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- <br> -->

                                <div class="price-info">
                                    <div class="per-night">
                                        <p>$65 x 9 nights</p>
                                        <p class="p">
                                            $583
                                        </p>
                                    </div>

                                    <div class="cleaning-fee">
                                        <p>Cleaning fee</p>
                                        <p class="p">
                                            $38
                                        </p>
                                    </div>


                                    <div class="service-fee">
                                        <p>Service fee</p>
                                        <p class="p">
                                            $53
                                        </p>
                                    </div>

                                    <div class="total">
                                        <p>Total</p>
                                        <p class="p">
                                            $647
                                        </p>
                                    </div>
                                </div>

                                <br>
                                <br>
                                <Button label="Reserve" :isFullWidth="true"></Button>

                                <br>
                                <p class="small">
                                    You won't be charged yet
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>

        <div v-else class="details-img-show">
            <i v-on:click="updateImageShow(0)"  class="far fa-times-circle"></i>

            <div class="img-showing-div">
                <img class="img-big" src="../assets/images/house8.jpg" alt="">
                <div>
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">
                    <img class="img" src="../assets/images/house1.png" alt="">

                </div>
            </div>
            
           
        </div>
    </div>
</template>


<script>

// document.getElementById("book-checkin").innerHTML = "Chech in";

import Navigation from '../components/Blog/Navigation';
// import vcalender from 'v-calendar';
import Button from '../components/Button';

export default {
     name:'apartment_details',
     components:{
         Navigation,
         Button
     },
     methods:{
         updateImageShow(intent){
             if(intent == 1){
                 this.isImageShow = true;
             }
             else{
                 this.isImageShow = false;
             }
         }
     },
     data: function(){
         return {
             reviews:[
                 {
                     id:1
                 },
                 {
                     id:2
                 },
                 {
                     id:3
                 },
                 {
                     id:4
                 },
                 {
                     id:5
                 },
                 {
                     id:6
                 },
                 {
                     id:7
                 }
             ],
             borderItem:1,
             isImageShow: false,
         }
     }
}
</script>


<style lang='scss' scoped>

    .border_bottom{
        border-bottom: 4px solid #3A85FC;
    }

    .details-img-show{
        width:100%;
        padding: 20px 50px;
        i{
            font-size: 44px;
            color: #3A85FC;
            cursor: pointer;
        }

        .img-showing-div{
            margin-top: 50px;
            width:100%;
            display: grid;
            grid-template-columns: 5fr 2fr;
            grid-gap: 40px;
            // border:1px solid red;

            img{
                object-fit: contain;
                border-radius: 10px;
                cursor: pointer;
            }
            .img{
                width:100%;
                
            }

            .img-big{
                max-width: 100%;
            }
            

            div{
                height: 70vh;
                overflow-y: scroll;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 20px;
            }
        }
    }
    .apartment_details {
        width:100%;

        .apartment-details-content{
            // padding: 0 2%;
            width:100%;
            // margin-bottom: 100px;
        }

        .image-div{
            height: 500px;
            // border:1px solid red;
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            grid-template-rows:1fr 1fr;
            grid-gap: 6px;
            img{
                width:100%;
                height: 100%;
                transition: all .4s ease-in-out; 
                cursor: pointer;
            }

            img:hover{
                transform: scale(1.02);
            }

            .img1{
                grid-column: 1/5;
                grid-row: 1/-1;
                // border:1px solid red;
            }

            .img2{
                grid-column: 5/7;
                grid-row: 1/2;
                // border:1px solid red;
            }

            .img3{
                grid-column: 5/7;
                grid-row: 2/-1;
                // border:1px solid red;
            }

            .img4{
                grid-column: 7/-1;
                grid-row: 1/-1;
                // img{
                //     // display: none;
                // }

                p{
                    background: black;
                    color:white;
                    padding: 5px 15px;
                    font-size: 12px;
                    border-radius: 5px;
                    position: relative;
                    float: right;
                    bottom: 10%;
                    // width: 100px;
                    margin-right: 20px;
                    z-index: 9999;
                }
            }
        }

        .details-div{
            width:100%;
            padding: 0 0px;

            .tap-div{
                background: #fff;
                box-shadow: 1px 2px 2px rgb(218, 217, 217);
                z-index: 999;
                padding: 0 70px;
                height: 50px;
                position: sticky;
                top: 0;
                ul{
                    height: 100%;
                    //  border:1px solid red;
                     padding: 0;
                     display: flex;
                     align-items: center;

                     li{
                        cursor: pointer;
                        height: 100%;
                        width:80px;
                        list-style: none;
                        margin-right: 10px;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        color: #6A6A6A;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        flex-direction: row;
                     }
                }
            }
        }

        .content-div{
            // height: 400px;
            display: grid;
            grid-template-columns: 9fr 4fr;
            grid-column-gap: 50px;
            .left{
                padding: 30px 70px;
                border-top: 1px solid #F2F2F2;
                h4{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 25px;
                    line-height: 24px;
                    color: #404040;

                }

                .host-details{
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    .contact-host{
                        font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 24px;
                        color: #3A85FC;
                        margin-top: 18px;
                    }

                    img{
                        margin-right: 20px;
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        object-fit: contain;
                    }
                    div{
                        margin-right: 40px;
                     p{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 18px;
                        color: #404040;
                    }

                    strong{
                        font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 24px;
                        color: #404040;
                    }
                   }
                }

                .more-info{
                    margin-top: 30px;
                    width:100%;
                    display: grid;
                    grid-template-columns: 2fr 3fr;
                    // border:1px solid red;

                    .more-info-left{
                        p{
                        // border:1px solid red;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 38px;
                        color: #404040;


                        i{
                            margin-right: 10px;
                            color:#404040;
                        }
                    }
                    }

                    img{
                        width:100%;
                        height: 200px;
                    }
                }

                .rules{
                    width:100%;
                    height: 50px;
                    margin-top: 50px;
                    padding: 20px;
                    display:flex;
                    align-items:center;
                    justify-content:flex-start;
                    flex-direction: row;
                    border-top: 1px solid #F2F2F2;
                    border-bottom: 1px solid #F2F2F2;


                    p{
                        padding: 7px;
                        border-radius: 5px;
                        background: #F2F2F2;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        color: #6A6A6A;
                    }
                }

                .desc{
                    margin-top: 30px;
                    width:100%;
                    h3{
                        margin-bottom: 20px;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 17px;
                        line-height: 24px;
                        color: #404040;
                    }

                    p{
                        font-style: normal;
                        font-size: 14px;
                        line-height: 24px;
                        text-align: justify;
                        color: #404040;
                    }
                }

                .amenities{
                    margin-top: 30px;
                    padding: 25px 0;
                    border-top: 1px solid #F2F2F2;
                    width:100%;

                    h4{
                        font-style: normal;
                        font-weight: bold;
                        font-size: 17px;
                        line-height: 24px;
                        color: #404040;
                    }

                    div{
                        margin-top: 20px;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        p{
                        font-style: normal;
                        // font-weight: bold;
                        font-size: 16px;
                        line-height: 24px;
                        margin-bottom: 15px;
                        color: #404040;

                        i{
                            margin-right: 10px;
                        }
                    }
                    }
                    

                    
                }

                .reviews{
                    width:100%;
                    // border:1px solid red;

                    h3{
                        margin: 20px 0;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 23px;
                        line-height: 24px;
                        color: #404040;
                    }

                    h4{
                        font-size: 14px;
                        font-style: normal;
                        font-weight: bold;
                        line-height: 24px;
                        color: #404040;
                        span{
                            font-weight: normal;
                        }
                    }

                    .review-div{
                        width:100%;
                        padding: 20px 0; 
                        height: auto;
                        // margin-bottom: 20px;
                        border-bottom:1px solid #EBEBEB;

                        .reviewer-info{
                            display: grid;
                            grid-template-columns: 1fr 12fr;
                            margin: 15px 0;
                            img{
                                height: 50px;
                                width: 50px;
                                border-radius: 50%;
                            }

                            .rv-info-right{
                               
                                .rv-name{
                                    font-weight: bold;
                                    font-style: normal;
                                    font-size: 16px;
                                    line-height: 28px;
                                    color: #404040;
                                }
                                .rv-date{
                                    font-style: normal;
                                    font-weight: normal;
                                    font-size: 15px;
                                    color: #404040;
                                }
                            }
                        }
                        p, a{
                            font-style: normal;
                            font-weight: normal;
                            font-size: 15px;
                            line-height: 28px;
                            color: #404040;
                            // font-family: Lato;
                        }
                        a{
                            color: #3A85FC;
                        }
                    }


                }
                .other-div{
                        width:100%;
                        // border:1px solid red;

                        h3{
                        margin: 20px 0;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 23px;
                        line-height: 24px;
                        color: #404040;
                    }

                    p{
                        font-size: 15px;
                        line-height: 28px;
                        color: #404040;

                        span{
                            font-weight: normal;
                        }
                    }

                    h4{
                       
                        margin: 20px 0;
                         margin-top: 50px;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 16px;
                        color: #404040;
                    }
                }
            }

            .right{
                width:100%;
                height: auto;
                // padding: 30px;
                padding-right: 70px;

                .content{
                    position: sticky;
                    top: 5%;
                    height: auto;
                    width:100%;
                    padding: 20px;
                    width:100%;
                    border:2px solid #F2F2F2;
                    border-radius: 3px;


                    .info{
                        width:100%;
                        border-bottom: 1px solid #F2F2F2;
                        padding-bottom: 20px;

                        h4{
                            font-style: normal;
                            font-weight: bold;
                            font-size: 20px;
                            line-height: 24px;
                            color: #404040;

                            span{
                                font-style: normal;
                                font-weight: normal;
                                font-size: 15px;
                                line-height: 18px;

                                color: #404040;
                            }
                        }
                        small{
                            font-style: normal;
                            font-weight: 500;
                            font-size: 10px;
                            line-height: 12px;
                            color: #404040;
                        }

                        

                    }

                    .book{
                        width:100%;
                        margin-top: 10px;
                        label{
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10px;
                            line-height: 12px;
                            color: #404040;
                        }

                        .dates{
                            width:100%;
                            height: 50px;
                            margin-top: 3px;
                            display: grid;
                            grid-template-columns: 1fr 1fr;

                            input{
                                height: 100%;
                                font-style: normal;
                                font-weight: normal;
                                font-size: 14px;
                                line-height: 18px;
                                padding: 0 10px;
                                border:1px solid rgba(106, 106, 106, 0.3);
                                color: rgba(64, 64, 64, 0.7);
                            }
                        }

                        .book-guest{
                            align-items: center;
                            // border:1px solid red;
                            display: grid;
                            grid-template-columns: 2fr 1fr;

                            p{
                                    font-style: normal;
                                    font-size: 14px;
                                    line-height: 12px;
                                    color: #797878;
                                    border:1px solid #d4d4d4;;
                                    height: 50px;
                                    padding: 0 10px;
                                    display: flex;
                                    align-items: center;
                                    margin-right: 10px;
                                }

                            .btns{
                                // border:1px solid red;
                                height: 100%;
                                display:flex;
                                align-items:center;
                                justify-content:space-between;
                                flex-direction: row;
                                
                                button{
                                    cursor: pointer;
                                    width: 40px;
                                    height: 40px;
                                    border: 1.5px solid #3A85FC;
                                    border-radius: 50%;
                                    margin-right: 10px;
                                    font-size: 12px;
                                    font-weight: bold;
                                    color: #3A85FC;
                                    i{
                                        color: #3A85FC;
                                    }
                                }
                                button:focus{
                                    outline: none;
                                }
                            }
                        }

                        .price-info{
                            width:100%;
                            margin-top: 20px;


                            div{
                                display: grid;
                                grid-template-columns: 3fr 1fr;
                                border-bottom:1px solid #d4d4d4;;
                                p{
                                    font-style: normal;
                                    font-size: 15px;
                                    line-height: 24px;
                                    text-align: justify;
                                    color: #404040;
                                    height: 30px;
                                    margin-right: 10px;
                                    margin-top: 10px;

                                }
                                .p{
                                    text-align: right;
                                }
                            }
                            .total{
                                p{
                                    font-weight: bold;
                                    // font-family: 'Roboto'
                                }
                            }
                        }

                        .small{
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10px;
                            width:100%;
                            line-height: 12px;
                            text-align: center;
                            color: #404040;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
</style>