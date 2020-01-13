<template>
  <div class="mapContainner">
    <base-bg titlename="各地市土地总面积">
      <earth-area></earth-area>
    </base-bg>
    <base-bg titlename="各地市房产总面积">
      <house-area></house-area>
    </base-bg>
  
  </div>
</template>
<script>
import earthArea from "./earth-area";
import houseArea from "./house-area";
import baseBg from "../../../base/base-bg/index";
import {mapGetters} from "vuex"
export default {
  name: "provincialmap",
  computed:{
     ...mapGetters(["earthArea","houseArea"])
  },
  components: {
    earthArea,
    baseBg,
    houseArea
  }
};
</script>
<style lang="scss">
.mapContainner {
  float: left;
  height: 100%;
  width: 480px;
    margin-left:82px;
  h2 {
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
}
</style>