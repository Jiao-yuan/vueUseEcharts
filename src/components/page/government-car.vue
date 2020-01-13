<template>
  <div class="government-car-Container">
    <privice-mileage></privice-mileage>
    <order-mileage></order-mileage>
    <city-map></city-map>
    <order-alarm></order-alarm>
    <trip-cost></trip-cost>
  </div>
</template>
<script>
import baseBg from "../../base/base-bg/index";
import orderAlarm from "../government-car-component/order-alarm/index";
import tripCost from "../government-car-component/trip-cost/index";
import cityMap from "../government-car-component/mapSX/index";
import orderMileage from "../government-car-component/order-mileage/index";
import priviceMileage from "../government-car-component/privince-energy-mileage/index";
export default {
  name: "home",
  components: {
    orderAlarm,
    tripCost,
    cityMap,
    orderMileage,
    priviceMileage
  }
};
</script>
<style lang="scss">
.government-car-Container {
  height: 100%;
  width: 100%;
}
</style>