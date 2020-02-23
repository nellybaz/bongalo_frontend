<template>
    <div class='footer'>
        <img :src="require(`../assets/images/footer-logo.png`)" alt="">

        <div class="content">
            <div class="content-item">
                <h4>About us</h4>

                <ul>
                    <li>
                        <router-link to="/about">
                            Company
                        </router-link>
                    </li>
                    <li>Team</li>
                    <li>
                        <router-link to="/career">
                            Career
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="content-item">
                <h4>Links</h4>

                <ul>
                    <li>
                        <router-link to="/blog">
                            Blog
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/terms-condition">
                           Privacy Policy
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/terms-condition">
                            Terms and Conditions
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="content-item">
                <h4>Contact</h4>

                <ul>
                    <li>KG 622 St, Kigali</li>
                    <li>+250 730078410</li>
                    <li>info@bongalo.co</li>
                </ul>
            </div>

            <div class="subscribe-section">
                <p>Enter your email below to recieve updates on our Newletter</p>

                <input type="text" placeholder="Enter your email"/>
                <div class="payment-text-sub-btn">
                    <button>Subscribe</button>
                    <p>Payment Methods </p>
                    
                </div>
                <div class="payment-imgs">
                    <div>
                        <img src="../assets/images/pay1.png" alt="">
                        <img src="../assets/images/pay2.png" alt="">
                        <img src="../assets/images/pay3.png" alt="">
                        <img src="../assets/images/pay4.png" alt="">
                    </div>

                    <div class="social-media">
                        <p>
                            Connect with us
                        </p>

                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
        </div>
        <p>Bongalo © 2019  | All Rights Reserved</p>
    </div>
</template>


<script>
export default {
     name:'app_footer'
}
</script>


<style lang='scss' scoped>


@media only screen and (max-width: 900px){

    .footer{
        padding: 40px 10px !important;
        height: auto !important;
        background-color: #F6FAFF;
        .content{
            margin-bottom: 40px;
            height: auto !important;
            grid-template-columns: 1fr 1fr !important;
            grid-row-gap: 30px;
        }
    }

}
    .footer {
        width:100%;
        height: 431px;
        border-top:1px solid #F6FAFF;;
        padding: 40px 80px;
        background-color: #F6FAFF;
        margin-top: 60px;

        img{
            width: 106px;
            height: 55px;
        }

        .content{
            margin-top: 40px;
            height: 183px;
            // border:1px solid red;

            display: grid;
            grid-template-columns: 1fr 1fr 1fr 2fr;


            .content-item{
                h4{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 24px;
                    color: #404040;

                }

                ul{
                    margin-top: 20px;
                    padding: 0;
                    li{
                        list-style: none;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 30px;
                        color: #6A6A6A;

                        a{
                            text-decoration:  none;
                            color: #6A6A6A;
                        }
                    }
                }
            }

            .subscribe-section{
                width:100%;
                p{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 18px;
                    color: #404040;
                }

                input{
                    border:1px solid #686868;
                    height: 45px;
                    width:100%;
                    padding: 0 20px;
                    border-radius: 5px;
                    margin-top: 15px;
                }

                input:focus{
                    outline-color: #3A85FC;
                    outline-style: solid;
                    outline-width: 2px;
                }

                .payment-text-sub-btn{
                    margin-top: 15px;
                    // border:1px solid red;
                    width:100%;
                    // height: 50px;
                    float: left; 
                    
                    p{
                        width:100%;
                        align-self: left;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 15px;
                        line-height: 15px;
                        color: #404040;
                        position: relative;
                        top: 20px;
                    }

                    button{
                        float: right;
                        height:45px;
                        background: #3A85FC;
                        border: none;
                        color:#fff;
                        width: 166px;
                        border-radius: 5px;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 15px;
                        line-height: 18px;
                        cursor: pointer;

                    }
                }

                .payment-imgs{
                    display: grid;
                    grid-template-columns: 5fr 2fr;
                    margin-top: 15%;
                    width:100%;
                    // border:1px solid red;
                    // height: 190px;
                    div{
                        width:100%;
                        // border:1px solid red;

                        img{
                        width: 54px;
                        height: 25px;
                        object-fit: cover;
                        // border:1px solid red;
                        }

                    }

                    .social-media{
                        width:100%;

                        p{
                            margin: 15px 0;
                        }

                        i{
                            margin-right: 15px;
                            color: #3A85FC;
                            font-size: 16px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        p{
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #6A6A6A;
        }
    }
</style>