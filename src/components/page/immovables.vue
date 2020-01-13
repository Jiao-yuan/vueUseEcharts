<template>
  <div class="homeContainer">
    <units-land></units-land>
    <house-people></house-people>
    <city-map></city-map>
    <all-area></all-area>
    <units-number></units-number>
  </div>
</template>
<script>
// import baseBg from '../../base/base-bg/index'
import allArea from '../immovables-component/all-area/index.vue'
import unitsNumber from '../immovables-component/units-number/index'
import shanxiMap from '../shanxi-map/index'
import cityMap from '../immovables-component/mapSX/index'
import unitsLand from '../immovables-component/units-land/index'
import housePeople from '../immovables-component/house-people/index'
export default {
  name: 'home',
  components: {
    allArea,
    unitsNumber,
    shanxiMap,
    cityMap,
    unitsLand,
    housePeople
  }
}
</script>
<style lang="scss">
.homeContainer {
  height: 100%;
  width: 100%;
}
</style>
