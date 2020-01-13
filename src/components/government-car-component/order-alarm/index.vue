<template>
    <div class="alarmContainner">
        <base-bg  titlename="实时订单">
         <real-order></real-order>
        </base-bg>
         <base-bg  titlename="告警信息">
         <alarm-info></alarm-info>
        </base-bg>
    </div>
</template>
<script>
import realOrder from "./real-time-order"
import baseBg from "../../../base/base-bg/index"
import alarmInfo from "./alarm-info"
export default {
    name:"alarmContainner",
    components:{
        realOrder,
        baseBg,
        alarmInfo
    }
}
</script>
<style lang="scss">
    .alarmContainner{
        float:left;
        height:100%;
        width:480px;
                margin-left: 82px;
        h2{
            font-size:20px;
            color:#fff;
            text-align: center;
        }
    }
</style>