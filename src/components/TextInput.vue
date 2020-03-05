<template>
    <div class='textinput'>
        <input @keyup="$emit('inputHandler', {data:model, step:step})" v-model="model" :class="{fullWidth: isFullWidth, halfWidth: !isFullWidth}" :type=type :placeholder=hint>
    </div>
</template>


<script>
export default {
    name:'text_input',
    data: function(){
        return {
            model:""
        }
    },
    props:{
        hint:{
            type:String,
            required:true
        },
        isFullWidth:{
            type:Boolean,
            required: true
        },
        type:{
            type:String,
            required:true
        },
        step:{
            type:String,
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

    .textinput {
        width:100%;
        input{
            height: 50px;
            border: 1px solid #C4C4C4;
            border-radius: 5px;
            padding: 10px 10px; 

            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: rgba(106, 106, 106, 0.7);
        }
        input:focus{
                outline-color: #3A85FC;
                outline-width: 2px;
                outline-style: solid;

            }
        ::-webkit-input-placeholder{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: rgba(106, 106, 106, 0.7);
        }
    }
</style>