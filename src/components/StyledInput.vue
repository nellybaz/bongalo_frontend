<template>
      <div class="input-styled">
            <label>
                {{
                    label
                }}
            </label> <br>
            <input v-if="!isTextArea" :type="type" :placeholder="placeholder">
            <textarea rows="10" v-else>

            </textarea>

    </div>
</template>


<script>
export default {
     name:'',
     props:{
         label:{
             type:String,
             required:true,
         },

         placeholder:{
             type:String,
             required:true,
         },
         type:{
             type:String,
             required:true
         },
         isTextArea:{
             type:Boolean,
             required:false,
         }

     }
}
</script>


<style lang='scss' scoped>
           .input-styled{
            label{
                position: relative;
                top: 10px;
                left: 20px;
                background: #fff;
                padding:  0 10px;
                border-radius: 3px;
                z-index: 10;


                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.07em;

                color: #3A85FC;
            }
            input{
                width:100%;
                height: 45px;
                border: 1px solid rgba(106, 106, 106, 0.5);
                border-radius: 5px;
                padding: 0 25px;
                color:rgb(106, 106, 106);
                font-size: 13px;

            }

            input:focus{
                outline: none;
            }

            textarea{
                width:100%;
                border: 1px solid rgba(106, 106, 106, 0.5);
                border-radius: 5px;
                padding: 20px 25px;
                color:rgb(106, 106, 106);
                font-size: 13px;
            }

             textarea:focus{
                outline: none;
            }

        }
</style>