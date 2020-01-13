<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "cost-overview",
      timer:null
    };
  },
  mounted() {
    clearInterval(this.timer)
    this.timer = setInterval(()=>{
      this.chart.clear()
      this.echartsintit();
    },5000)
    this.echartsintit();
  },
    beforeDestroy() {
      clearInterval(this.timer);
  },
  methods: {
    echartsintit() {
      let dom = document.getElementById(this.id);
      dom.style.height = 270 + "px";
      this.chart = echarts.init(dom);
     // 指定图表的配置项和数据
var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20,40];
var datacity = ["加油费","维保费","保险费","其他费"];
var option = {
    color: ['#0060DC', '#1FBCFF', "#FFEC3F"],
    tooltip: {
        trigger: 'axis',
    },
    grid: { //图表的位置
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '6%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        name:"万人",
        nameTextStyle:{
          color:"#5C80B8",
          fontSize:"12px",
          padding: [0, 30, 0, 0] ,
        },
        axisLabel: {
            show: true,
            color:"#fff",
            interval: 'auto',
            formatter: '{value} ',
             margin:4,
        },
        axisLine:{
          lineStyle:{
            color:"#214470"
          }
        },
        axisTick:{
          show:false
        },
       textStyle: {
                fontSize: 10,
                color: '#fff'
            },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color:"#214470"
            }
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
         axisTick:{
          show:false
        },
        axisLine:{
          lineStyle:{
            color:"#214470"
          }
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            },

        },
        data: datacity,
    }],
    series: [
        {
            name: '办公用房',
            type: 'bar',
            barWidth: '24',
            data: data2,
            barCategoryGap:73,

        }
    ]
};
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
</style>