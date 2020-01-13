<template>
  <div class="stituationmapContainner">
    <h2><img src="../../../assets/images/ggjgjn.png" alt="" /></h2>
    <base-bg titlename="概况">
      <survey></survey>
    </base-bg>
    <base-bg titlename="各类能源消费量占比" class="mgtop10">
      <energy-ratio></energy-ratio>
    </base-bg>
  </div>
</template>
<script>
import energyRatio from "./energy-ratio";
import baseBg from "../../../base/base-bg/base-bg-two";
import survey from "./survey";
export default {
  name: "provincialmap",
  components: {
    survey,
    baseBg,
    energyRatio
  }
};
</script>
<style lang="scss">
.stituationmapContainner {
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