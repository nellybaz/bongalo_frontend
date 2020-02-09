<template>
    <div class='jumbotron'>
        <header>
            <img src="../assets/images/bongalo-logo-white.png" alt="">

            <nav>
                <ul>
                    <li>EN</li>

                    <li>$ USD</li>

                    <li>Blog</li>

                    <li>Sign up</li>

                    <li>Login</li>
                </ul>
            </nav>
        </header>

         <div class="book-card-div">
                <BookCard></BookCard>
        </div>
    </div>
</template>


<script>

import BookCard from '../components/HomePageBookCard'

export default {
     name:'jumbotron',
     components:{
         BookCard,
     }
}
</script>

<style lang='scss' scoped>

    .jumbotron {
        width:100%;
        height: auto;
        padding-bottom: 10%;
        background: url(../assets/images/jumbotron-bg.png);

        header{
            height: 64px;
            padding: 0 60px;
            display:flex;
            align-items:center;
            justify-content:flex-start;
            flex-direction: row;

            img{
                // border:1px solid green;
            }
            nav{
                width:100%;
                margin-right: 2%;

                ul{
                    float: right;
                    width:400px;
                    display:flex;
                    align-items:center;
                    justify-content:flex-end;
                    flex-direction: row;
                    li{
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        width: 100px;
                        color: #FFFFFF;
                        list-style: none;
                    }
                }
            }
        }

        .book-card-div{
            width: 460px;
            position: relative;
            top: 12%;
            left:7%;
        }
    }
</style>