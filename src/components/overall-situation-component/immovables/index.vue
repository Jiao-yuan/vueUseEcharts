<template>
  <div class="immovablesContainner">
    <h2><img src="../../../assets/images/bgyfbdc.png" alt="" /></h2>
    <base-bg titlename="单位总数量">
      <unit-number></unit-number>
    </base-bg>
    <base-bg titlename="房产总面积" class="mgtop10">
      <house-area></house-area>
    </base-bg>
  </div>
</template>
<script>
import unitNumber from "./unit-number";
import houseArea from "./house-area";
import baseBg from "../../../base/base-bg/base-bg-two";
export default {
  name: "provincialmap",
  components: {
    unitNumber,
    baseBg,
    houseArea
  }
};
</script>
<style lang="scss">
.immovablesContainner {
  float: left;
  height: 100%;
  width: 480px;
  h2 {
    margin-top: 10px;
    font-size: 28px;
    color: #51ffc1;
    text-align: center;
    img {
      height: 22px;
      width: 236px;
    }
  }
  .mgtop10 {
    margin-top: 10px;
  }
}
</style>