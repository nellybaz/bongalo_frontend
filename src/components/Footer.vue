<template>
    <div class='footer'>
        <img :src="require(`../assets/images/footer-logo.png`)" alt="">

        <div class="content">
            <div class="content-item">
                <h4>About us</h4>

                <ul>
                    <li>Company</li>
                    <li>Team</li>
                    <li>Career</li>
                </ul>
            </div>
            <div class="content-item">
                <h4>Links</h4>

                <ul>
                    <li>Blog</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div class="content-item">
                <h4>Contact</h4>

                <ul>
                    <li>KG 622 St Kigali</li>
                    <li>+250 730078410</li>
                    <li>info@bongalo.com</li>
                </ul>
            </div>

            <div class="subscribe-section">
                <p>Enter your email below to recieve updates on our Newletter</p>

                <input type="text" />
                <div class="payment-text-sub-btn">
                    <button>Subscribe</button>
                    <p>Payment Methods </p>
                    
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
    .footer {
        width:100%;
        height: 431px;
        border-top:1px solid #F2F2F2;
        padding: 40px 80px;

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
                    outline-style: dotted;
                    outline-width: 2px;
                }

                .payment-text-sub-btn{
                    margin-top: 15px;
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