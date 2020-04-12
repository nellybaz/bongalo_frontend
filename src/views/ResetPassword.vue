<template>
    <div class='reset-password'>
        <Navigation :showSearch="false"></Navigation>
        <div class="content">
            <h1>Reset your password</h1>
            <br>
            <small style="color:red">
                {{
                    errorMessage
                }}
            </small>
            <br>
            <StyledInput @sendInput="(val)=>{password = val}" label='NEW PASSWORD' placeholder='Enter new password' type='password'/>
            <StyledInput @sendInput="(val)=>{password2 = val}" label='CONFIRM PASSWORD' placeholder='Confirm new password' type='password'/>

            <br>
            <Button @handleClick="handleReset" label="Reset" :isFullWidth='false'/>
        </div>


    </div>
</template>


<script>
import StyledInput from '../components/StyledInput';
import Button from '../components/Button';
import Navigation from '../components/Blog/Navigation';


export default {
    name:'reset_password',
    components:{
         StyledInput,
         Button,
         Navigation
     },

    data:function(){
        return {
            password: '',
            password2:'',
            errorMessage:''
        }
    },
    methods:{
         handleReset(){
             this.errorMessage = ""
             if(!this.password || !this.password2){
                 this.errorMessage = "Both fields are required"
             }
             else{
                 if(this.password != this.password2){
                     this.errorMessage = "Both passwords must match"
                 }
                 else{
                     window.console.log(this.$route)
                     this.$store.dispatch('resetPassword',{
                         'email': this.$route.query['email'],
                         'token': this.$route.query['token'],
                         'password': this.password
                     })
                     .then(res => {})
                     .catch(err => {

                     })
                 }
             }
         }
     }
}
</script>


<style lang='scss' scoped>
    .reset-password {
        width:100%;
        .content{
            padding: 100px 30%;
        }
    }   
</style>