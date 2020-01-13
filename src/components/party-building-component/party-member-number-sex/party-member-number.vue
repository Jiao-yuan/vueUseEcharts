<template>
    <div class="party-member-number">
         <div class="party-middle">
             <img src="../../../assets/images/dzz.png" alt="">
             <p>党组织数量</p>
             <span>57<i>人</i></span>
         </div>
         <div class="party-middle left">
             <img src="../../../assets/images/dy.png" alt="">
             <p>党员数量</p>
             <span>37<i>人</i></span>
         </div>
         <div class="party-middle right">
             <img src="../../../assets/images/ybdy.png" alt="">
             <p>预备党员数量</p>
             <span>26<i>人</i></span>
         </div>
    </div>
</template>
<style lang="scss" scoped>
   .party-member-number{
       height:270px;
       width:100%;
       position:relative;
       .party-middle{
           position:absolute;
           display:flex;
           flex-direction: column;
           top:30px;
           left:184px;
           img{
               height:87px;
               width:72px;
           }
           p{
             font-size:14px;
             text-align:center;
             color:#fff;
             margin-top:16px;
           }
           span{
               display:block;
               text-align:center;
               font-size:32px;
               color:#fff;
               margin-top:6px;
               i{
                   font-size:12px;
               }
           }
       }
       .left{
           top:110px;
           left:30px;
       }
       .right{
           top:110px;
           left:332px;
       }
   } 
</style>