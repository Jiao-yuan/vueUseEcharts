<template>
    <div class="order-mileage-Containner">
        <base-bg  titlename="各市车辆调度订单">
           <dispatch-order></dispatch-order>
        </base-bg>
         <base-bg  titlename="各市车辆行驶里程" class="mgtop20">
           <trip-mileage></trip-mileage>
        </base-bg>
    </div>
</template>
<script>
import tripMileage from "./tirp-mileage"
import dispatchOrder from "./dispatch-order"
import baseBg from "../../../base/base-bg/index"
export default {
    name:"provincialmap",
    components:{
        baseBg,
         dispatchOrder,
          tripMileage
    }
}
</script>
<style lang="scss">
    .order-mileage-Containner{
        float:left;
        height:100%;

        width:480px;
        h2{
            font-size:20px;
            color:#fff;
            text-align: center;
        }
        .mgtop20{
            margin-top:20px;
        }
    }
</style>