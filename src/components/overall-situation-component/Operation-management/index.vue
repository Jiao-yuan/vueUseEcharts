<template>
  <div class="OperationContainer">
    <h2><img src="../../../assets/images/jygl.png" alt=""></h2>
    <base-bg titlename="本年度经营情况">
      <operation-management></operation-management>
    </base-bg>
    <h2><img src="../../../assets/images/zhdj.png" alt=""></h2>
    <base-bg titlename="党员性别及年龄" class="mgtop10">
        <party-building dataList="organizationNumber"></party-building>
    </base-bg>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
import baseBg from "../../../base/base-bg/base-bg-two";
import partyBuilding from "./party-building"
import OperationManagement from "./Operation-management"
export default {
  components: {
    baseBg,
    partyBuilding,
    OperationManagement 
  },
  mounted(){
    
  },
  computed:{
    ...mapGetters(["houseArea","organizationNumber"])
  }
};
</script>
<style lang="scss">
.OperationContainer {
  float: left;
  height: 100%;
  margin-left:10px;
  width: 480px;
   h2{
            margin-top:10px;
            font-size:28px;
            color:#51FFC1;
            text-align: center;
             img{
                height:22px;
                width:116px;
            }
        }
        .mgtop10{
            height:300px !important;
        }
}
</style>