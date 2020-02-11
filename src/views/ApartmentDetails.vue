<template>
    <div class='apartment_details'>
        <div class="image-div">
            <img class="img1" src="../assets/images/house4.png" alt="">
            <img class="img2" src="../assets/images/house5.png" alt="">
            <img class="img3" src="../assets/images/house6.png" alt="">
            <img class="img4" src="../assets/images/house7.png" alt="">

        </div>
    </div>
</template>


<script>
export default {
     name:'apartment_details'
}
</script>


<style lang='scss' scoped>
    .apartment_details {
        width:100%;

        .image-div{
            height: 500px;
            // border:1px solid red;
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            grid-template-rows:1fr 1fr;
            grid-gap: 3px;
            img{
                width:100%;
                height: 100%;
            }

            .img1{
                grid-column: 1/5;
                grid-row: 1/-1;
                // border:1px solid red;
            }

            .img2{
                grid-column: 5/7;
                grid-row: 1/2;
                // border:1px solid red;
            }

            .img3{
                grid-column: 5/7;
                grid-row: 2/-1;
                // border:1px solid red;
            }

            .img4{
                grid-column: 7/-1;
                grid-row: 1/-1;
                // border:1px solid red;
            }
        }
    }
</style>