<template>
  <div class="unitsContainner">
    <base-bg titlename="各地市单位数量">
      <units></units>
    </base-bg>
    <base-bg titlename="土地规划用途占比">
      <land-plan></land-plan>
    </base-bg>
  </div>
</template>
<script>
import landPlan from "./land-plan";
import baseBg from "../../../base/base-bg/index";
import units from "./units";
import {mapGetters} from "vuex"
export default {
  name: "provincialmap",
  components: {
    baseBg,
    units,
    landPlan
  },
  computed: {
    ...mapGetters(["landPlan","units"])
  },
};
</script>
<style lang="scss">
.unitsContainner {
  float: left;
  margin-left:10px;
  height: 100%;
  width: 480px;
}
</style>