<template>
    <div class='apply-page'>
        <Navigation :showSearch="false"></Navigation>

        <div class="content">
            <h1>
                Administrative Manager
            </h1>

            <p class="location">
                Location -  <strong>Rwanda</strong> 
            </p>
            <br>

            <h4 class="desc-title">Job Description</h4>

            <p class="desc-p">Elit ipsum nostrud id adipisicing eu eu nostrud ullamco incididunt commodo nisi cillum.
                 Aliquip esse deserunt ad incididunt veniam. Esse ea tempor consequat est proident officia 
                 dolor duis eiusmod. Mollit mollit laborum magna et Lorem proident sit pariatur consequat ex
                  qui laborum aute reprehenderit. Esse culpa duis ea cupidatat occaecat deserunt mollit est 
                  sunt commodo pariatur laborum dolore sunt.
            </p>


             <ApplySection />

        </div>


       
        
    </div>
</template>


<script>
import Navigation from '../components/Blog/Navigation';
import ApplySection from '../components/ApplySection';

export default {
     name:'apply',
     components:{
         Navigation,
         ApplySection
     }
     
}
</script>


<style lang='scss' scoped>
    .apply-page {
        width:100%;

        .content{
            margin: 0 150px;
            border-left: 1px solid rgb(228, 227, 227);
            border-right: 1px solid rgb(228, 227, 227);
            // border:1px solid red;

            padding: 50px 50px;

            h1{
                font-style: normal;
                font-weight: bold;
                font-size: 35px;
                line-height: 42px;

                color: #404040;
                margin-bottom: 30px;
            }

            .location{
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 30px;

                color: #404040;
            }

            .desc-title{
               
                font-style: normal;
                font-weight: bold;
                font-size: 25px;
                line-height: 30px;
                color: #404040;
            }

            .desc-p{
                width:80%;
                margin-top: 10px;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;

                color: #404040;
            }

           
            
        }
    }
</style>