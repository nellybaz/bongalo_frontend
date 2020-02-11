<template>
    <div v-on:click=closeModal :class={hide:!showModal} class='login-modal'>
        <div class="modal-content">

        </div>
    </div>
</template>


<script>
export default {
     name:'login-modal',
     methods:{
         closeModal(){
             this.showModal = false;
         },
     },

     data:function(){
         return {
             showModal: true
         }
     }
}
</script>


<style lang='scss' scoped>
    .hide{
        display: none !important;
    }
    .login-modal {
        position: absolute;
        top: 0;
        z-index: 1;
        width:100%;
        background-color: rgba(0, 0, 0, .5);
        height: 100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: row;

        .modal-content{
            width:40%;
            height: 500px;
            background:#fff
        }
    }
</style>