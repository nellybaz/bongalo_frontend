<template>
    <p :style="font_style" class='paragraph'>
        {{
            text
        }}
    </p>
</template>


<script>
export default {
     name:'paragraph',
     props:{
         text:{
             type: String,
             required:true
         },
         size:{
             type: String,
             required:true
         },
         color:{
             type: String,
             required:true
         },
         weight:{
             type: String,
             required:true
         }
     },
     data: function(){
         return {
             font_style: "font-size:" + this.size + "px;" + "font-weight:"+this.weight+"; color:" + this.color 
         }
     }
}
</script>


<style lang='scss' scoped>
    .paragraph {
        margin-bottom: 10px;
    }
</style>