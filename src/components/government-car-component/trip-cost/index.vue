<template>
    <div class="costContainner">
        <base-bg  titlename="车辆出行总览">
         <trip-overview></trip-overview>
        </base-bg>
         <base-bg  titlename="车辆费用总览">
         <cost-overview></cost-overview>
        </base-bg>
    </div>
</template>
<script>
import costOverview from "./cost-overview"
import baseBg from "../../../base/base-bg/index"
import tripOverview from "./trip-overview"
export default {
    name:"costContainner",
    components:{
        costOverview,
        baseBg,
        tripOverview
    }
}
</script>
<style lang="scss">
    .costContainner{
        float:left;
        height:100%;
        width:480px;
        h2{
            font-size:20px;
            color:#fff;
            text-align: center;
        }
    }
</style>