<template>
    <div class='reset-password'>
        <Navigation :showSearch="false"></Navigation>
        <div class="content">
            <h1>Reset your password</h1>
            <br>
            <br>
            <StyledInput label='NEW PASSWORD' placeholder='Enter new password' type='text'/>
            <StyledInput label='CONFIRM PASSWORD' placeholder='Confirm new password' type='text'/>

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

    methods:{
         handleReset(){}
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