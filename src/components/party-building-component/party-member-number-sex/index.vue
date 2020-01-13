<template>
    <div class="numberSexContainner">
        <base-bg  titlename="党组织数量">
         <party-member-number></party-member-number>
        </base-bg>
         <base-bg  titlename="党员性别比例" class="mgtop20">
         <party-menber-sex></party-menber-sex>
        </base-bg>
    </div>
</template>
<script>
import partyMenberSex from "./party-menber-sex"
import partyMemberNumber from "./party-member-number"
import baseBg from "../../../base/base-bg/index"
export default {
    name:"provincialmap",
    components:{
        baseBg,
        partyMemberNumber,
        partyMenberSex
    }
}
</script>
<style lang="scss">
    .numberSexContainner{
        float:left;
        height:100%;
        margin-left: 82px;
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