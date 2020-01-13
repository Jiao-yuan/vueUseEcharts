<template>
    <div class="privinceEnergyContainner">
        <base-bg  titlename="用电分项占比">
         <electricity-ratio></electricity-ratio>
        </base-bg>
         <base-bg  titlename="近五年各类能耗情况">
         <privince-energy-people></privince-energy-people>
        </base-bg>
    </div>
</template>
<script>

import electricityRatio from "./electricity-ratio"
import privinceEnergyPeople from "./privince-energy-people"
import baseBg from "../../../base/base-bg/index"
export default {
    name:"provincialmap",
    components:{
        electricityRatio,
        baseBg,
        privinceEnergyPeople
    }
}
</script>
<style lang="scss">
    .privinceEnergyContainner{
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