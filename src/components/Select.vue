<template>
    <select :style="style" class="select" v-model="model">
        <option v-for="item in options" :key="item.value" :value="item.value">
            {{
                item.text
            }}
        </option>
    </select>
</template>


<script>
export default {
     name:'',
     data: function(){
         return {
             style: "width:" + this.width
         }
     },
     props:{
         model:{
             type:String,
             required:true
         },
         width:{
             type:String,
             required:true
         },
         options:{
             type:Array,
             required:true
         }
     }
}
</script>


<style lang='scss' scoped>
    .select {
        border:1px solid #C4C4C4;
        height: 40px;
        font-size: 16px;
        color:#404040;
        opacity: 0.7;

    }
</style>