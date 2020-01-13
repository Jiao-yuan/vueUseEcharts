<template>
    <div class="privince-energy-mileage">
        <base-bg  titlename="省直车辆调度订单">
           <mock></mock>
        </base-bg>
         <base-bg  titlename="省直车辆行驶里程" class="mgtop20">
            <trip-mileage></trip-mileage>
        </base-bg>
    </div>
</template>
<script>
import mock from "./mock"
import baseBg from "../../../base/base-bg/index"
import tripMileage from "./trip-mileage-pinvice"
export default {
    name:"provincialmap",
    components:{
        baseBg,
        mock,
        tripMileage
    }
}
</script>
<style lang="scss">
    .privince-energy-mileage{
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