<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "party-building",
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
var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30,14];
var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20,40];
var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30,60];
var datacity = ["≤25", "26-35", "36-45", "46-55", "≥56"];
var option = {
    color: ['#083FCC','#E34242' ],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        textStyle:{
           color:"#fff",
           fontSize:12
        },
        itemWidth:10,
        itemHeight:10,
        itemGap:16,
        borderRadius:[15,15,15,15],
        right:40,
        top: '4%',
        data: [
          {"name":'男性',icon:"rect"}, 
        {"name":'女性',icon:"circle"}],
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
        name:"人数(万)",
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
            name: '女性',
            type: 'bar',
            stack: 'sum',
            barCategoryGap:23,
            barWidth: '12x',
            data: data1

        },
        {
            name: '男性',
            type: 'bar',
            barWidth: '12px',
            stack: 'sum',
            data: data2,
            barCategoryGap:23,

        },
    ]
};
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
</style>