<template>
    <div class='incrementer'>
        <Paragraph class="label" :text="label" size="16" weight="bold" color="rgba(64, 64, 64, 0.7)"></Paragraph>

        <div class="controls">
            <button v-on:click=handleGuestClick(0)>
                <i class="fas fa-minus"></i>
            </button>
                    
            <!-- <Paragraph :text="value" size="16" weight="normal" color="rgba(64, 64, 64, 0.7)"></Paragraph> -->
            <p>
                {{
                    value
                }}
            </p>

            <button v-on:click=handleGuestClick(1)>
                <i class="fas fa-plus"></i>
            </button>
        </div>
    </div>
</template>


<script>

import Paragraph from './Paragraph';


export default {
     name:'incrementer',
     components:{
         Paragraph
     },
     data:function (){
         return {
             value: this.start ? this.start : 4,
         }
     },
     props: {
         label:{
             type: String,
             required:true,
         },
         start:{
             type:Number,
             required:false
         },
         step:{
             type:String,
             required:true
         },
          stop:{
             type:Number,
             required:false
         }
     },
     methods:{
         handleGuestClick(motive){
             if(motive == 1){
                 if(this.stop){
                     if(this.value < this.stop){
                         this.value += 1;
                     }
                 }
                 else{
                     this.value += 1
                 }
             }
             else if(motive == 0 && this.value > 1){
                this.value -= 1
             }

             this.$emit('incrementerChangeHandler', {step:this.step, data:this.value})
         }
     }
}
</script>


<style lang='scss' scoped>
    .incrementer {
        padding: 0 !important;
        // border:1px solid red;
        width:300px !important;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;

        .label{
            position: relative;
            top: 5px;
        }

        .controls{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction: row;
            // border:1px solid red;
            p{
                margin-right: 15px;
            }
            button{
                width: 30px;
                height: 30px;
                margin-right: 15px;
                border-radius: 50%;
                border:2px solid #3A85FC;
                font-weight: bold;
                background: #fff;
                cursor: pointer;

                i{
                    color: #3A85FC;
                }
            }

            button:focus{
                outline: none;
            }
        }
        
    }
</style>