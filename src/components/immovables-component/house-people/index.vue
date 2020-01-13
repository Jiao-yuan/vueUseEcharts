<template>
  <div class="organizationContainer">
    <base-bg titlename="各省直房产面积">
      <huose-area :dataList="houseArea"></huose-area>
    </base-bg>
    <base-bg titlename="编制人数">
        <organization-people dataList="organizationNumber"></organization-people>
    </base-bg>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import baseBg from '../../../base/base-bg/index'
import huoseArea from './house-area'
import organizationPeople from './organization-people'
export default {
  components: {
    baseBg,
    huoseArea,
    organizationPeople
  },
  mounted () {

  },
  computed: {
    ...mapGetters(['houseArea', 'organizationNumber'])
  }
}
</script>
<style lang="scss">
.organizationContainer {
  float: left;
  height: 100%;
  margin-left:10px;
  width: 480px;
}
</style>
