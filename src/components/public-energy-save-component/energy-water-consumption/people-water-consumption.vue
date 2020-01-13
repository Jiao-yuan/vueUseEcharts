<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "five-year-status",
      sumValue: ""
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
      //对话框图片

      let option = {
        grid: {
          top: "25%",
          left: "2%",
          right: "2%",
          bottom: "6%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          label: {
            show: true
          }
        },
        // legend: {
        //   icon: "none",
        //   show: true,
        //   x: "right",
        //   y: "top",
        //   selectedMode: "single",
        //   itemGap: 4,
        //   itemWidth: 0.1 * 10,
        //   inactiveColor: "#2181EA",
        //   textStyle: {
        //     color: "#78F2FF",
        //     borderColor: "#78F2FF",
        //     borderWidth: "1",
        //     padding: [5, 7]
        //   },
        //   data: [
        //     "单位面积能耗",
        //     "总用水",
        //     "煤炭消费量",
        //     "天然气消耗量",
        //     "柴油消耗量"
        //   ]
        // },
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
          data: [
           "大同市", "太原市", "阳泉市", "长治市", "晋城市", "朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"
          ]
        },
        yAxis: {
          type: "value",
          name: "吨/人",
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
            show: true,
            lineStyle: {
              type: "solid",
              color: "#214470"
            }
          },
          show: true
        },
        series: [
           {
            name:"柴油消耗量",
            type: "line",
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: false,
              distance: 1,
              emphasis: {
                show: true,
                offset: [25, -2],
                color: "#FFF",
                padding: [8, 20, 8, 6],
                height: 36,
                formatter: function(params) {
                  var name = params.name;
                  var value = params.data;
                  var str = name + "\n数据量：" + value;
                  return str;
                }
              }
            },
            itemStyle: {
              color: "#799BFE"
            },
             areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0.35,
                  color: "rgba(121, 155, 254, 0.38)"
                },
                {
                  offset: 1,
                  color: "rgba(121, 155, 254, 0)"
                }
              ])
            },
            data: [
              2000,
              1800,
              2800,
              900,
              1600,
              2000,
              3000,
              2030,
              1356,
              1900,
              4000,
              3000,
              2000,
              3000,
              4200,
              3200,
              3800
            ]
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
