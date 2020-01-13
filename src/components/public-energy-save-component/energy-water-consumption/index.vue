<template>
    <div class="privincefiveContainner">
        <base-bg  titlename="人均能耗">
         <people-energy-consumption></people-energy-consumption>
        </base-bg>
         <base-bg  titlename="人均水耗">
         <people-water-consumption></people-water-consumption>
        </base-bg>
    </div>
</template>
<script>

import peopleEnergyConsumption from "./people-energy-consumption"
import peopleWaterConsumption from "./people-water-consumption"
import baseBg from "../../../base/base-bg/index"
export default {
    name:"provincialmap",
    components:{
        peopleEnergyConsumption,
        baseBg,
        peopleWaterConsumption
    }
}
</script>
<style lang="scss">
    .privincefiveContainner{
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