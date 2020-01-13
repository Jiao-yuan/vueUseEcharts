<template>
  <div class="chartContainer">
    <chart-one></chart-one>
    <chart-two></chart-two>
    <chart-three></chart-three>
    <chart-four></chart-four>
 </div>
</template>
<script>
import chartThree from "./chart/chart-three"
import chartOne from "./chart/chart-one"
import chartTwo from "./chart/chart-two"
import echarts from "echarts";
import chartFour from "./chart/chart-four"
export default {
  data() {
    return {
      id: "car-numbers",
      sumValue: ""
    };
  },
  components:{
     chartOne,
     chartTwo,
     chartThree,
     chartFour
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="scss">
.chartContainer{
    display:flex;
    flex-wrap: wrap
}
</style>
