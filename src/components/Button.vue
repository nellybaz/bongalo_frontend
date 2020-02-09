<template>
        <button :class="{fullWidth: isFullWidth, halfWidth: !isFullWidth}"  class="main-button">{{ label }}</button>
</template>


<script>
export default {
     name:'main-button',
     props:{
         label:{
             type:String,
             required:true
         },

         isFullWidth:{
             type:Boolean,
             required:true
         }
     }
}
</script>


<style lang='scss' scoped>

    .fullWidth{
        width:100%;
    }

    .halfWidth{
        width:50%;
    }

    .main-button {
        cursor: pointer;
        height: 50px;
        background: #3A85FC;
        border-radius: 5px;
        border: none;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
    button:focus{
        outline: none;
    }
</style>