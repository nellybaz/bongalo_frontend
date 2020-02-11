<template>
    <div class='apartment_details'>
        <Navigation></Navigation>
        <div class="image-div">
            <img class="img1" src="../assets/images/house4.png" alt="">
            <img class="img2" src="../assets/images/house5.png" alt="">
            <img class="img3" src="../assets/images/house6.png" alt="">
            <img class="img4" src="../assets/images/house7.png" alt="">

        </div>

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
                    </div>

                    <div class="more-info">
                        <p> <i class="fas fa-user-friends"></i> Sleeps: 3</p>
                        <p> <i class="fas fa-door-open"></i> Bedrooms</p>
                        <p> <i class="fas fa-shower"></i> Bathrooms</p>
                        <p><i class="fas fa-moon"></i> Min Stay: 1 night</p>

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
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>

import Navigation from '../components/Blog/Navigation';

export default {
     name:'apartment_details',
     components:{
         Navigation,
     }
}
</script>


<style lang='scss' scoped>
    .apartment_details {
        width:100%;

        .image-div{
            height: 500px;
            // border:1px solid red;
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            grid-template-rows:1fr 1fr;
            grid-gap: 3px;
            img{
                width:100%;
                height: 100%;
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
                padding: 0 70px;
                height: 50px;
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
            
            display: grid;
            grid-template-columns: 9fr 4fr;
            grid-column-gap: 50px;
            .left{
                padding: 30px 70px;
                border-top: 1px solid #F2F2F2;
                h4{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 24px;
                    color: #404040;

                }

                .host-details{
                    margin-top: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

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
                        margin-top: 10px;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        p{
                        font-style: normal;
                        // font-weight: bold;
                        font-size: 16px;
                        line-height: 24px;
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
                // border:1px solid red;
                height: 800px;
                // padding: 30px;
                padding-right: 70px;

                .content{
                    height: 100%;
                    width:100%;
                    padding: 20px;
                    width:100%;
                    border:1px solid rgba(106, 106, 106, 0.5);


                    .info{
                        width:100%;
                        border-bottom: 1px solid #F2F2F2;
                        padding-bottom: 20px;

                    }

                    .book{
                        width:100%;
                    }
                }
            }
        }
    }
</style>