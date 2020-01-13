<template>
  <div class="energyContainer">
     <energy-water-consumption></energy-water-consumption>
     <privince-energy-status></privince-energy-status>
      <city-map></city-map>
      <institution-area></institution-area>
      <city-energy-status></city-energy-status>
  </div>
</template>
<script>
import baseBg from "../../base/base-bg/index";
import institutionArea from "../public-energy-save-component/Institution-area/index.vue";
import cityEnergyStatus from "../public-energy-save-component/city-energy-status/index";
import cityMap from "../public-energy-save-component/mapSX/index"
import privinceEnergyStatus from "../public-energy-save-component/privince-energy-status/index"
import energyWaterConsumption from "../public-energy-save-component/energy-water-consumption/index"
export default {
  name: "home",
  components: {
    institutionArea,
    cityEnergyStatus,
    cityMap,
    privinceEnergyStatus,
    energyWaterConsumption
  }
};
</script>
<style lang="scss">
.energyContainer {
  height: 100%;
  width: 100%;
}
</style>