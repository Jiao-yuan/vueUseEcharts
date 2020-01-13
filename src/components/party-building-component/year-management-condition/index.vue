<template>
  <div class="year-management-condition">
    <base-bg titlename="本年度经营状况">
      <year-status></year-status>
    </base-bg>
    <base-bg titlename="经营情况同期占比">
      <same-term></same-term>
    </base-bg>
  </div>
</template>
<script>
import yearStatus from "./year-status";
import baseBg from "../../../base/base-bg/index";
import sameTerm from "./same-term";
export default {
  name: "provincialmap",
  components: {
    baseBg,
    sameTerm,
    yearStatus
  }
};
</script>
<style lang="scss">
.year-management-condition {
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