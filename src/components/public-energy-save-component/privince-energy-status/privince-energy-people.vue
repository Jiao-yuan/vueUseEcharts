<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "privince-energy-people",
      timer: null
    };
  },
  mounted() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.chart.clear();
      this.echartsintit();
    }, 5000);
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
      let option = {
         legend: {
          textStyle: {
            color: "#90979c"
          },
          selected: {
            总用电: true,
            总用水: false,
            煤炭消费量: false,
            天然气消耗量: false,
            汽油消耗量: false,
            柴油消耗量: false,
          },
          show: true,
          left: "right", 
          top: "0",
          selectedMode: "single",
          itemGap:4,
          itemWidth:5,
          inactiveColor: "#2181EA",
          textStyle: {
            color: "#78F2FF",
            borderColor: "#2181EA",
            borderWidth: "1",
            padding: [5,6]
          },
           data: [
            {name:"总用电",icon:"none"},
            {name:"总用水",icon:"none"},
            {name:"煤炭消费量",icon:"none"},
            {name:"天然气消耗量",icon:"none"},
            {name:"汽油消耗量",icon:"none"},
            {name:"柴油消耗量",icon:"none"}
          ]
        },
        grid: {
          top: "25%",
          left: "2%",
          right: "2%",
          bottom: "6%",
          containLabel: true
        },
        xAxis: {
          boundaryGap: true, //默认，坐标轴留白策略
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          axisLabel: {
            color: "#fff"
          },
          data: [2015, 2016, 2017, 2018, 2019]
        },
        yAxis: {
          type: "value",
          name: "万千瓦时",
          nameTextStyle: {
            color: "#5C80B8",
            fontSize: "12px",
            padding: [0, 30, 0, 0]
          },
          axisLabel: {
            show: true,
            color: "#fff",
            interval: "auto",
            formatter: "{value} ",
            margin: 4
          },
          axisLine: {
            lineStyle: {
              color: "#214470"
            }
          },
          axisTick: {
            show: false
          },
          textStyle: {
            fontSize: 10,
            color: "#fff"
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: "solid",
              color: "#214470"
            }
          },
          show: true
        },
        series: [
          {
            // 背景色
            type: "pictorialBar",
            stack: "总量",
            symbol: "fixed",
            symbolSize: [24, 4],
            symbolMargin: 3,
            symbolRepeat: "repeat",
            symbolBoundingData: 600,
            z: -10,
            data: [600, 600, 600, 600, 600],
            itemStyle: {
              normal: {
                color: "#214470",
                barBorderRadius: [12, 12, 12, 12]
              }
            }
          },
          {
            // 替代颜色
            type: "pictorialBar",
            symbol: "fixed",
            stack: "总量",
            name: "总用电",
            symbolSize: [24, 4],
            symbolMargin: 3,
            symbolRepeat: "repeat",
            barCategoryGap: "40%",
            z: -1,
            data: [298, 388, 321, 211, 311],
            itemStyle: {
              normal: {
                barBorderRadius: [12, 12, 12, 12],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#66FFAC"
                  },
                  {
                    offset: 1,
                    color: "#18CECE"
                  }
                ])
              }
            }
          },
          {
            // 替代颜色
            type: "pictorialBar",
            symbol: "fixed",
            stack: "总量",
            name: "总用水",
            symbolSize: [24, 4],
            symbolMargin: 3,
            symbolRepeat: "repeat",
            barCategoryGap: "40%",
            z: -1,
            data: [298, 388, 321, 211, 311],
            itemStyle: {
              normal: {
                barBorderRadius: [12, 12, 12, 12],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#66FFAC"
                  },
                  {
                    offset: 1,
                    color: "#18CECE"
                  }
                ])
              }
            }
          },
          {
            // 替代颜色
            type: "pictorialBar",
            symbol: "fixed",
            stack: "总量",
            name: "煤炭消费量",
            symbolSize: [24, 4],
            symbolMargin: 3,
            symbolRepeat: "repeat",
            barCategoryGap: "40%",
            z: -1,
            data: [298, 388, 321, 211, 311],
            itemStyle: {
              normal: {
                barBorderRadius: [12, 12, 12, 12],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#66FFAC"
                  },
                  {
                    offset: 1,
                    color: "#18CECE"
                  }
                ])
              }
            }
          },
          {
            // 替代颜色
            type: "pictorialBar",
            symbol: "fixed",
            stack: "总量",
            name: "天然气消耗量",
            symbolSize: [24, 4],
            symbolMargin: 3,
            symbolRepeat: "repeat",
            barCategoryGap: "40%",
            z: -1,
            data: [298, 388, 321, 211, 311],
            itemStyle: {
              normal: {
                barBorderRadius: [12, 12, 12, 12],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#66FFAC"
                  },
                  {
                    offset: 1,
                    color: "#18CECE"
                  }
                ])
              }
            }
          },
          {
            // 替代颜色
            type: "pictorialBar",
            symbol: "fixed",
            stack: "总量",
            name: "汽油消耗量",
            symbolSize: [24, 4],
            symbolMargin: 3,
            symbolRepeat: "repeat",
            barCategoryGap: "40%",
            z: -1,
            data: [298, 388, 321, 211, 311],
            itemStyle: {
              normal: {
                barBorderRadius: [12, 12, 12, 12],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#66FFAC"
                  },
                  {
                    offset: 1,
                    color: "#18CECE"
                  }
                ])
              }
            }
          },
          {
            // 替代颜色
            type: "pictorialBar",
            symbol: "fixed",
            stack: "总量",
            name: "柴油消耗量",
            symbolSize: [24, 4],
            symbolMargin: 3,
            symbolRepeat: "repeat",
            barCategoryGap: "40%",
            z: -1,
            data: [298, 388, 321, 211, 311],
            itemStyle: {
              normal: {
                barBorderRadius: [12, 12, 12, 12],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#66FFAC"
                  },
                  {
                    offset: 1,
                    color: "#18CECE"
                  }
                ])
              }
            }
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