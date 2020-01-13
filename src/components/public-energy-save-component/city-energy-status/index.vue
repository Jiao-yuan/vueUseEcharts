<template>
    <div class="cityEnergyContainner">
        <base-bg  titlename="各市用能人数">
         <energy-users-number></energy-users-number>
        </base-bg>
         <base-bg  titlename="各市能耗情况">
         <city-energy-status></city-energy-status>
        </base-bg>
    </div>
</template>
<script>

import energyUsersNumber from "./energy-users-number"
import cityEnergyStatus from "./city-energy-status"
import baseBg from "../../../base/base-bg/index"
export default {
    name:"provincialmap",
    components:{
        energyUsersNumber,
        baseBg,
        cityEnergyStatus
    }
}
</script>
<style lang="scss">
    .cityEnergyContainner{
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