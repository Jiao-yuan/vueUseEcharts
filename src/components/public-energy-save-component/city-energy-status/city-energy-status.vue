<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "city-energy-status",
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
          top: "15%",
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
        legend: {
          icon: "none",
          show: true,
          x: "right",
          y: "top",
          selectedMode: "single",
          itemGap: 4,
          itemWidth: 1,
          inactiveColor: "#2181EA",
          textStyle: {
            color: "#78F2FF",
            borderColor: "#2181EA",
            borderWidth: "1",
            padding: [8,17,6]
          },
          data: ["单位面积能耗", "人均能耗", "人均水耗"]
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
            color: "#fff",
            interval: 0,
            formatter: function(value) {
              //x轴的文字改为竖版显示
              var str = value.split("");
              return str.join("\n");
            }
          },
          data: [
            "大同市",
            "太原市",
            "阳泉市",
            "长治市",
            "晋城市",
            "朔州市",
            "晋中市",
            "运城市",
            "忻州市",
            "临汾市",
            "吕梁市"
          ]
        },
        yAxis: {
          type: "value",
          name: "千克标煤(㎡)",
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
            name: "人均水耗",
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
              color: "#FFEC3F"
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(255, 236, 63, 0.37)"
                },
                {
                  offset: 1,
                  color: "rgba(255, 236, 63, 0)"
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
              1698
            ]
          },
          {
            name: "单位面积能耗",
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
              color: "#FFEC3F"
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(255, 236, 63, 0.37)"
                },
                {
                  offset: 1,
                  color: "rgba(255, 236, 63, 0)"
                }
              ])
            },
            data: [
              200,
              1800,
              280,
              900,
              1600,
              200,
              3000,
              203,
              1356,
              190,
              400
            ]
          },
          {
            name: "人均能耗",
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
              color: "#FFEC3F"
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(255, 236, 63, 0.37)"
                },
                {
                  offset: 1,
                  color: "rgba(255, 236, 63, 0)"
                }
              ])
            },
            data: [
              200,
              100,
              28,
              900,
              160,
              200,
              300,
              203,
              135,
              190,
              200
            ]
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
