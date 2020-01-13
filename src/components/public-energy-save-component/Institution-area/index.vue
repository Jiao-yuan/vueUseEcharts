<template>
    <div class="insitutionContainner">
        <base-bg  titlename="公共机构个数">
         <public-organ-number></public-organ-number>
        </base-bg>
         <base-bg  titlename="各市建筑面积">
         <city-building-area></city-building-area>
        </base-bg>
    </div>
</template>
<script>

import cityBuildingArea from "./city-building-area"
import publicOrganNumber from "./public-organ-number"
import baseBg from "../../../base/base-bg/index"
export default {
    name:"provincialmap",
    components:{
        publicOrganNumber,
        baseBg,
        cityBuildingArea
    }
}
</script>
<style lang="scss">
    .insitutionContainner{
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