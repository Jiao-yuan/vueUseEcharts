<template>
  <div class="landContainer">
    <h2><img src="../../../assets/images/gwyc.png" alt=""></h2>
    <base-bg titlename="基础数据">
      <base-data></base-data>
    </base-bg>
    <base-bg titlename="车辆数量" class="mgtop10">
     <car-number></car-number>
    </base-bg>
  </div>
</template>
<script>
import baseBg from "../../../base/base-bg/base-bg-two";
import baseData from "./base-data"
import carNumber from "./car-number";
export default {
  components: {
    baseData,
    carNumber,
    baseBg
  }
};
</script>
<style lang="scss">
.landContainer {
  float: left;
  margin-left:82px;
  height: 100%;
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
            margin-top:10px;
            padding-right:0;
        }
}
</style>