<template>
    <div class="ageEducationContainner">
        <base-bg  titlename="党员年龄分析">
        <party-age></party-age>
        </base-bg>
         <base-bg  titlename="党员学历" class="mgtop20">
             <party-education></party-education>
        </base-bg>
    </div>
</template>
<script>
import partyEducation from "./party-education"
import partyAge from "./party-age"
import baseBg from "../../../base/base-bg/index"
export default {
    name:"provincialmap",
    components:{
        baseBg,
        partyAge,
        partyEducation
    }
}
</script>
<style lang="scss">
    .ageEducationContainner{
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