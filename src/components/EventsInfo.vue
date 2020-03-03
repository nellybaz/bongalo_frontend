<template>
    <div class='events-info'>
        <div class="left">
            <h2>
                {{
                    label
                }}
            </h2>
            <small>
                145k views
            </small>
            

        </div>
        <div class="right">
            <div>
                <p><i class="fas fa-clock"></i> Duration</p><br>

                <p>
                    11:00 - 16:00
                </p>

                <p>
                    5 hours
                </p>

            </div>

            <div>
                <p><i class="far fa-calendar-alt"></i>  Date</p>
                <br>
                <p>
                    Thursday,
                </p>

                <p>
                   23rd Feb 2020
                </p>

            </div>

            <div>
                <p><i class="fas fa-map-marker-alt"></i> Location</p>
                <br>
                <p>
                    Kagugu, Kibovi
                </p>

                <p>
                   Rwanda
                </p>

            </div>
        </div>
    </div>
</template>


<script>
export default {
     name:'',
     props:{
         label:{
             type: String,

         }
     }

}
</script>


<style lang='scss' scoped>
    .events-info {
        background-color: #F6FAFF;
        // height: 120px;
        padding: 30px 120px;
        // border:1px solid red;
        width:100%;
        display: grid;
        grid-template-columns: 2fr 4fr;

        div{
            // border:1px solid red;
        }

        .left{
            h2{
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 36px;
                display: flex;
                align-items: center;

                color: #404040;
                width: 50%;
            }

            small{
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                display: flex;
                align-items: center;

                color: #6A6A6A;
                margin: 10px 0;

            }
        }

        .right{
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            div{
                display:flex;
                // align-items:center;
                justify-content:center;
                flex-direction: column;
                p{
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                display: flex;
                align-items: center;

                color: #424242;

                i{
                    // background:  #3A85FC;
                    color: #3A85FC;
                    margin-right: 5px;
                }
            }
            }
        }
        
    }
</style>