<template>
    <select :style="style" v-on:change="$emit('selectChangeHandler', {step:step, data:data})" class="select" v-model="data">
        <option v-for="item in options" :key="item.value" :value="item.value">
            {{
                item.text
            }}
        </option>
    </select>
</template>


<script>
import { mapGetters } from 'vuex'; 

export default {
     name:'',
     data: function(){
         return {
             data: this.model ? this.model : "",
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
         step:{
             type:String,
             required:true
         },
         options:{
             type:Array,
             required:true
         }
     },
     methods:{
         ...mapGetters(['getListingState']),
        
     },
     
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