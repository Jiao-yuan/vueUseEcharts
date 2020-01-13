<template>
  <div class="month-management-condition">
    <base-bg titlename="本年各月度经营情况">
      <business-status></business-status>
    </base-bg>
    <base-bg titlename="各单位本年度累计目标完成情况">
    <ponit-status></ponit-status>
    </base-bg>
  </div>
</template>
<script>
import businessStatus from "./business-status";
import baseBg from "../../../base/base-bg/index";
import ponitStatus from "./point-status";
export default {
  name: "provincialmap",
  components: {
    baseBg,
    businessStatus,
    ponitStatus
  }
};
</script>
<style lang="scss">
.month-management-condition {
  float: left;
  height: 100%;
  width: 480px;
  h2 {
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
}
</style>