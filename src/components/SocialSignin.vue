<template>
    <div class="social-signin">
                            
        <i @click="$emit('handleSocialSignup', 'google')" class="fab fa-google"></i> 
        <i @click="$emit('handleSocialSignup', 'facebook')" class="fab fa-facebook"></i>
    </div>
</template>


<script>
export default {
     name:'social_signin'
}
</script>


<style lang='scss' scoped>
    .social-signin{
        width:100%;
        padding: 20px 30px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: row;
        i{
            cursor: pointer;
            margin-right: 30px;
            color: #3A85FC;
            font-size: 35px;

        }
    }
</style>