<template>
    <div class="apply-section">
        <StyledInput type="text" placeholder="Enter your full name" label="NAME"/>

        <br>
        <StyledInput type="text" placeholder="Enter your email address" label="EMAIL"/>
        <br>

        <StyledInput type="text" placeholder="Enter your phone number" label="PHONE NUMBER"/>

        <br>

        <div class="file-select">
            <label for="select-below">UPLOAD YOUR RESUME</label>
            <br>
            <br>
            <input type="file" id="select-below">
        </div>

        <br>
        <br>

        <StyledInput :isTextArea="true" type="text" placeholder="" label="MESSAGE"/>

        <br>

        <Button label="SUBMIT APPLICATION"></Button>

    </div>
</template>


<script>
import Button from '../components/Button';
import StyledInput from '../components/StyledInput';

export default {
     name:'apply-section',
     components:{
         Button,
         StyledInput
     }
}
</script>


<style lang='scss' scoped>
     .apply-section{
            margin-top: 50px;
            width:50%;

            // border:1px solid red;

            .file-select{
                label{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 17px;
                    letter-spacing: 0.07em;
                    color: #3A85FC;
                }

            }
        }
</style>