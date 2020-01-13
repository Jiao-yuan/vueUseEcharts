<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "Operation-management",
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
        grid: {
          top: "25%",
          left: "2%",
          right: "2%",
          bottom: "6%",
          containLabel: true
        },
        legend: {
          textStyle: {
            color: "#fff",
            fontSize: 12
          },

          width: 390,
          itemWidth: 7,
          itemHeight: 7,
          itemGap: 11,
          borderRadius: 10,
          right: 0,
          top: "2%",
          data: ["收入", "支出", "利润"]
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#214470"
              }
            },
            axisLabel: {
              interval: 0,
              show: true,
              splitNumber: 15,
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],

        yAxis: [
          {
            type: "value",
            name: "万元",
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
          }
        ],
        series: [
          {
            name: "收入",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            lineStyle: {
              normal: {
                color: "#3FE9C6" // 线条颜色
              }
            },
            itemStyle: {
              normal: {
                color: "#3FE9C6"
              }
            },
            symbolSize:8,
             areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(52, 60, 240, 0.34)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 21, 68, 0)"
                    }
                  ],
                  false
                )
              }
            },
            data: [0, 150, 200, 259, 360, 378, 450, 450, 780, 365, 888, 999]
          },
          {
            name: "支出",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            lineStyle: {
              normal: {
                color: "#0F18E6" // 线条颜色
              }
            },
            itemStyle: {
              normal: {
                color: "#0F18E6"
              }
            },
            symbolSize:8,
             areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(52, 60, 240, 0.34)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 21, 68, 0)"
                    }
                  ],
                  false
                )
              }
            },
            data: [0, 311, 200, 543, 340, 568, 111, 450, 345, 567, 345, 123]
          },
          {
            name: "利润",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            lineStyle: {
              normal: {
                color: "#E34242" // 线条颜色
              }
            },
            symbolSize:8,
             areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(52, 60, 240, 0.34)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 21, 68, 0)"
                    }
                  ],
                  false
                )
              }
            },
            itemStyle: {
              normal: {
                color: "#E34242"
              }
            },
            data: [0, 120, 230, 289, 110, 258, 350, 309, 765, 313, 888, 877]
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