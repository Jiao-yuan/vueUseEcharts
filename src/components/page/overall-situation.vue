<template>
  <div class="homeTwoContainer">
    <im-movables></im-movables>
    <energy-conservation></energy-conservation>
    <city-map></city-map>
    <official-car></official-car>
    <operation-management></operation-management>
  </div>
</template>
<script>
import imMovables from "../overall-situation-component/immovables/index";
import energyConservation from "../overall-situation-component/energy-conservation/index";
import shanxiMap from "../shanxi-map/index";
import cityMap from "../overall-situation-component/mapSX/index";
import officialCar from "../overall-situation-component/official-car/index";
import OperationManagement from "../overall-situation-component/Operation-management/index";
export default {
  name: "home",
  components: {
    imMovables,
    energyConservation,
    shanxiMap,
    cityMap,
    OperationManagement,
    officialCar
  }
};
</script>
<style lang="scss">
.homeTwoContainer {
  height: 100%;
  width: 100%;
}
</style>