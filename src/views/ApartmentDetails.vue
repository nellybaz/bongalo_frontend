<template>
    <div class='apartment_details'>
        <Navigation></Navigation>

        <div class="image-div">
            <img class="img1" src="../assets/images/house4.png" alt="">
            <img class="img2" src="../assets/images/house5.png" alt="">
            <img class="img3" src="../assets/images/house6.png" alt="">
            <img class="img4" src="../assets/images/house7.png" alt="">

        </div>

        <div class="apartment-details-content">
        <div class="details-div">
            <div class="tap-div">
                <ul>
                    <li>Overview</li>
                    <li>Amenities</li>
                    <li>Review</li>
                    <li>Rates & Availability</li>

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


                    <!-- <div class="availability">
                        <h3>Availability</h3>

                        <div>

                        </div>
                    </div> -->
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
                                        $583
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
     }
}
</script>


<style lang='scss' scoped>
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
                // border:1px solid red;
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
                        list-style: none;
                        margin-right: 30px;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        color: #6A6A6A;
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

                .availability{
                    border-top: 1px solid #F2F2F2;
                    width:100%;
                    padding: 25px 0;

                    h3{
                        
                        font-style: normal;
                        font-weight: bold;
                        font-size: 19px;
                        line-height: 24px;
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