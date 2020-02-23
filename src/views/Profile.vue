<template>
    <div class='profile'>
        <Navigation  :showSearch="false"/>
        <div class="content">
            <div class="left">
                <div class="d1 d">
                    Profile
                </div>

                <div class="d2 d">
                   <a href="#dashboard">
                        <div>

                        </div>
                        <p class="p-item">Dashboard</p>
                    </a>

                </div>

                <div class="d3 d">
                    <a href="#favourite-section">
                        <div>

                        </div>
                        <p class="p-item">Favourites</p>
                    </a>

                </div>

            </div>

            <div class="right">
                <h2 id="dashboard">Profile</h2>
                <div class="top">
                    <div class="icon-div">

                    </div>
                </div>

                <div class="mid">
                    <StyledInput type="text" placeholder="Uchechuckwu" label="FULL NAME" />
                    <StyledInput type="text" placeholder="Tadius" label="LAST NAME" />
                    <StyledInput type="text" placeholder="ichieuche@gmail.com" label="EMAIL ADDRESS" />
                    <StyledInput type="text" placeholder="Nigeria" label="NATIONALITY" />
                    <StyledInput type="text" placeholder="0784650455" label="PHONE NUMBER" />

                     <div class="file-select">
                        <label for="select-below">UPLOAD VERIFICATION</label>
                        <br>
                        <br>
                        <input type="file" id="select-below">
                    </div>
                    
                    
                </div>

                <br>
                <div class="bottom">
                    <StyledInput :isTextArea="true" type="text" placeholder="" label="DESCRIPTION"/>
                </div>


                <br>
                <br>
                <br>
                <div class="btn-div">
                   
                    <Button label="UPDATE PROFILE"/>
                </div>

                <div id="favourite-section" class="fav-section">
                    <h3>
                        You dont have any favourite listings yet
                    </h3>
                    <br>
                    <p class="hint">
                        Places you save will appear hear
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
import Navigation from '../components/Blog/Navigation'; 
import StyledInput from '../components/StyledInput';
import Button from '../components/Button';

export default {
     name:'',
     components:{
         Navigation,
         StyledInput,
         Button
     }
}
</script>


<style lang='scss' scoped>
    .profile {
        width:100%;

       .content{

            .file-select{
                label{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 17px;
                    letter-spacing: 0.07em;
                    color: #3A85FC;
                }

            }


            margin-top: 30px;
            padding: 0 130px;
            display: grid;
            grid-template-columns: 1fr 3fr;
            grid-gap: 65px;


            .left, .right{
                width:100%;
            }

            .left{
                position:sticky;
                top: 20px;
                height: 300px;
                background: #FFFFFF;
                box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

                .d{
                    width:100%;
                    border-bottom:1px solid #3A85FC;
                    height: 80px;

                    .p-item{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 24px;
                        display: flex;
                        align-items: center;

                        color: #404040;
                    }
                }

                .d1{
                    display:flex;
                    align-items:center;
                    justify-content:flex-start;
                    flex-direction: row;
                    padding: 0 30px;

                    font-style: normal;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 24px;
                    display: flex;
                    align-items: center;

                    color: #404040;
                }

                

                .d2, .d3{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction: row;
                    padding: 0 30px;
                    div{
                        background: rgba(196, 196, 196, 0.2);
                        height: 40px;
                        width: 40px;
                        border-radius: 50%;
                        // border:1px solid red;
                        margin-right: 20px;
                    
                    }

                    a{
                    width:100%;
                    text-decoration: none;
                    display: grid;
                    grid-template-columns: 1fr 4fr;
                    }
                    

                }

                
            }

            .right{
                h2{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 35px;
                    line-height: 42px;

                    color: #404040;
                }

                .top{
                    margin-top: 30px;
                    width:100%;
                    .icon-div{
                        height: 100px;
                        width: 100px;
                        background: #C4C4C4;
                        border-radius: 50%;
                    }
                }

                .mid{
                    display: grid;
                    grid-gap: 40px;
                    grid-template-columns: 1fr 1fr;
                }

                .bottom{
                    width:100%;

                }

                .fav-section{
                    margin-top: 80px;
                    h3{
                        width:50%;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 30px;
                        line-height: 36px;

                        color: #404040;
                    }

                    .hint{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 20px;
                        color: #404040;

                    }
                }
            }
       }
    }
</style>