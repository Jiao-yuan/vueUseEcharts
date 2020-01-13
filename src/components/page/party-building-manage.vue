<template>
  <div class="party-building-manage">
      <year-management-condition></year-management-condition>
      <month-management-condition></month-management-condition>
      <city-map></city-map>
      <number-sex></number-sex>
      <age-education></age-education>
  </div>
</template>
<script>
import baseBg from "../../base/base-bg/index";
import yearManagementCondition from "../party-building-component/year-management-condition/index.vue";
import monthManagementCondition from "../party-building-component/month-management-condition/index";
import cityMap from "../party-building-component/mapSX/index"
import numberSex from "../party-building-component/party-member-number-sex/index"
import ageEducation from "../party-building-component/party-member-age-education/index"
export default {
  name: "home",
  components: {
    yearManagementCondition,
    monthManagementCondition,
    cityMap,
    numberSex,
    ageEducation
  }
};
</script>
<style lang="scss">
.party-building-manage {
  height: 100%;
  width: 100%;
}
</style>