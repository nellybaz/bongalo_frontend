<template>
   <div class="radio">
       <div v-for="item in options" :key="item.text" class="radio-item">
            <input v-on:change="$emit('radioChangeHandler', {data:model, step:step})" v-model="model" :value="item.value" id="1" class='radio' type="radio">
            <div>
                <p class="title">
                    {{
                        item.text
                    }}
                </p>
                <p class="desc">
                    {{
                        item.desc
                    }}
                </p>
            </div>
            
       </div>
   </div>
    
</template>


<script>
export default {
     name:'radio_btn',
     data:function(){
         return {
             model:"",
         }
     },
     props:{
         step:{
             type:String,
             required:true
         },
         options:{
             type:Array,
             required:true
         }
     },
     created(){
         let dataInStore = this.$store.getters.getListingState[this.step];
         window.console.log(dataInStore);
         if(dataInStore || dataInStore.length > 1 ){
             this.model = dataInStore;
         }
     }
}
</script>


<style lang='scss' scoped>
    .radio {
        padding: 0 !important;
        width:100%;
        // border:1px solid red;
        
        .radio-item{
            // border:1px solid red;
            display: grid;
            grid-template-columns: 1fr 20fr;
            margin-bottom: 30px;

            div{

                position: relative;
                top: -5px;
                 .title{
                     color:rgba(64, 64, 64, 0.7);
                    font-size: 16px;
                 }
                .desc{
                    color:rgba(64, 64, 64, 0.7);
                    font-size: 14px;
                }   
            }
        }
    }
</style>