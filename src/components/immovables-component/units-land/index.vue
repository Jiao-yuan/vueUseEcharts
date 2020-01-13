<template>
  <div class="ImlandContainer">
    <base-bg titlename="各省直单位数量">
      <units-number></units-number>
    </base-bg>
    <base-bg titlename="各省直土地面积">
      <land-area></land-area>
    </base-bg>
  </div>  
</template>
<script>
import baseBg from '../../../base/base-bg/index'
import unitsNumber from './units-number'
import landArea from './land-area'
import {mapGetters} from 'vuex'
export default {
  components: {
    unitsNumber,
    landArea,
    baseBg
  },
  computed: {
    ...mapGetters(['landArea', 'unitsNumber'])
  }
}
</script>
<style lang="scss">
.ImlandContainer {
  float: left;
  height: 100%;
  width: 480px;
}
</style>
