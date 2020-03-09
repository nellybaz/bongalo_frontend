<template>
    <div v-if="getModalState != 0" class='login-modal'>
        <div class="modal-content">
            <i v-on:click=closeModal  class="far fa-times-circle"></i>

                <div v-if="isVerify" class="forgot-password">
                        <h3>Verify</h3>

                        <p>
                            Enter the pin received on your email
                        </p>

                        <br>
                        <Input @inputHandler="handleInput" step="pin_verify" hint="Enter PIN" type="text" :isFullWidth="true"/>
                        <br>

                        <Button @handleClick="verifyEmail" label="Verify" :isFullWidth="true"/>
                            <!-- <br><br> -->
                            <strong>
                                <!-- Forgot password ? -->
                            </strong>

                            <hr>
                        
                        <p>
                        Didn't get a pin ?
                            <span v-on:click=goto(1)>
                                Resend
                            </span>
                        </p>

                        <p>
                        Go back to
                            <span v-on:click=goto(1)>
                                Login
                            </span>
                        </p>


                </div>

                
                <div class="login-div" v-else-if="getModalState == 1">
                        <Input hint="Email address" step="" type="email" :isFullWidth="true"/>
                        <br>
                        <Input hint="Password" step="" type="password" :isFullWidth="true"/>
                        <br>
                        <br>

                        <Button v-on:handleClick="handleButton(2)" label="Login" :isFullWidth="true"/>
                        <!-- <br><br> -->
                        <strong v-on:click=goto(3)>
                            Forgot password ?
                        </strong>

                        <hr>
                        <SocialSignin @handleSocialSignup="handleSocialSignup"/>
                        
                    
                    <p>
                        Don't have an account ? 
                        <span v-on:click="goto(2)">
                            Register
                        </span>
                    </p>
                </div>

                <div v-else-if="getModalState == 2" class="signup-div">
                    <Input @inputHandler="handleInput" hint="Email address" step="email" type="email" :isFullWidth="true"/>
                        <br>
                        <Input @inputHandler="handleInput" hint="First name" step="first_name" type="text" :isFullWidth="true"/>
                        <br>
                        <Input @inputHandler="handleInput" hint="Last name" step="last_name" type="text" :isFullWidth="true"/>
                        <br>
                        <Input @inputHandler="handleInput" hint="Creaate Password" step="password" type="password" :isFullWidth="true"/>
                        <br>
                        <br>

                        <div class="terms-checkbox">
                            <input type="checkbox" v-model="termsCheckBox">
                            <p>I accept Bongalo's terms and condition</p>
                        </div>
                        <Button v-on:handleClick="handleButton(1)" label="Sign up" :isFullWidth="true"/>
                        <!-- <br><br> -->
                        <strong>
                            <!-- Forgot password ? -->
                        </strong>

                        <hr>

                        <SocialSignin @handleSocialSignup="handleSocialSignup"/>
                    
                    <p>
                       Already have an account ? 
                        <span v-on:click=goto(1)>
                            Login
                        </span>
                    </p>
                </div>

                <div v-else-if="getModalState == 3" class="forgot-password">
                    <h3>Reset Password</h3>

                    <p>
                        Enter the email address associated with your account, and we’ll email you a link to reset your password.
                    </p>

                    <br>
                    <Input hint="Email address" step="" type="email" :isFullWidth="true"/>
                    <br>

                      <Button label="Send reset link" :isFullWidth="true"/>
                        <!-- <br><br> -->
                        <strong>
                            <!-- Forgot password ? -->
                        </strong>

                        <hr>
                    
                    <p>
                       Or cancel and head back to 
                        <span v-on:click=goto(1)>
                            Login
                        </span>
                    </p>


                </div>


            

        </div>
    </div>
</template>


<script>

import { mapGetters, mapActions} from 'vuex';
import Input from '../components/TextInput';
import Button from '../components/Button';
import SocialSignin from './SocialSignin';


export default {
     name:'login-modal',
     components:{
         Input,
         Button,
         SocialSignin
     },
     methods:{
         handleInput(val){
             if(val.step == "pin_verify"){
                 this.pinModel = val.data
             }
             if(val.step == "email"){
                 this.email = val.data
             }
             if(val.step == "first_name"){
                 this.first_name = val.data
             }
             if(val.step == "last_name"){
                 this.last_name = val.data
             }
             if(val.step == "password"){
                 this.password = val.data
             }
         },
         ...mapActions(['setModalState']),
         handleSocialSignup(provider){
             this.$store.dispatch('socialSignin', {provider:provider}).then(res => {
                 window.console.log(res)
                 if(res == 1){
                     this.setModalState(0);
                 }
             })
         },
         closeModal(){
             this.isVerify = false;
            this.setModalState(0);
         },

         goto(intent){
             this.setModalState(intent);
         },
         handleButton(intent){
           if(intent == 1){
                if(!this.termsCheckBox){
                    this.$notify({
                    group: 'general',
                    title: 'Info !!',
                    text: 'You need to accept the terms and condition before registering',
                    type: 'error'
                    });
                }else{
                    let data = {
                    email:this.email,
                    first_name:this.first_name,
                    last_name:this.last_name,
                    password:this.password,
                    is_active:false,
                    is_admin:false
                }
                    this.$store.dispatch('register', data)
                    .then(res => {
                        this.isVerify = true;
                    })
                }
           }
         },

         verifyEmail(){

             let data = {
                email:this.email,
                pin: this.pinModel
            }
             this.$store.dispatch('verifyEmail', data)
             .then(res => {
                 if(res == 1){
                    this.isVerify = false;
                    this.setModalState(0);
                    this.$notify({
                    group: 'general',
                    title: 'Congratulations !!',
                    text: 'You are now a user of bongalo, have fun in your travels',
                    type: 'success'
                    });
                 }
             })
             
           
         }
     },

     data:function(){
         return {
             email:'',
             first_name:'',
             last_name:'',
             password:'',
             showModal: true,
             termsCheckBox:"",
             isVerify: false,
             pinModel:''
         }
     }, 
     computed: mapGetters(['getModalState'])
}
</script>


<style lang='scss' scoped>

    .hide{
        display: none !important;
    }
    .login-modal {
        position: fixed;
        top: 0;
        z-index:9999999999;
        width:100%;
        background-color: rgba(0, 0, 0, .5);
        height: 100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: row;

        .modal-content{
            padding: 20px;
            width:30%;
            height: auto;
            background:#fff;
            display:flex;
            align-items:flex-start;
            justify-content:flex-start;
            flex-direction: column;

            i{
                font-size: 24px;
                cursor: pointer;
                color: #3A85FC;
                margin-bottom: 30px;
            }


            .signup-div{
                .terms-checkbox{
                    // border:1px solid red;
                    display:flex;
                    align-items:center;
                    justify-content:flex-start;
                    flex-direction: row;

                    input{
                        margin-right: 10px;
                        
                    }
                }
            }
            .login-div, .signup-div, .forgot-password{
                width:100%;

                strong{
                    margin: 20px 0;
                    // border:1px solid red;
                    text-align: center;
                    width:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction: row;
                    font-size: 14px;
                    cursor: pointer
                }

                hr{
                    height: 1px;
                    background:#6A6A6A;
                    opacity: 0.2;
                }
                p{
                    margin: 20px 0;
                    // border:1px solid red;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 17px;
                    display: flex;
                    align-items: center;

                    color: #6A6A6A;

                    span{
                        margin-left: 10px;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 17px;
                        /* identical to box height */

                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        color: #3A85FC; 
                    }
                }
            }

            .forgot-password{
                h3{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 25px;
                    line-height: 30px;
                    display: flex;
                    align-items: center;

                    color: #404040;
                }
            }
        }
    }
</style>