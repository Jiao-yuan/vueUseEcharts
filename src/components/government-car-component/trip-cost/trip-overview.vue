<template>
  <div class="trip-pie-containner">
     <pie-one></pie-one>
     <pie-two></pie-two>
  </div>
</template>
<script>
import echarts from "echarts";
import pieOne from "./tirp-pie/trip-pie-one"
import pieTwo from "./tirp-pie/trip-pie-two"
export default {
  data() {
    return {
      id: "trip-pie-containner",
      timer: null
    };
  },
  components:{
    pieOne,
    pieTwo
  },
  mounted() {

  },
  beforeDestroy() {
    
  },
  methods: {

  }
};
</script>
<style lang="scss">
.trip-pie-containner{
    height:270px;
    width:100%;
    display:flex;
}
</style>