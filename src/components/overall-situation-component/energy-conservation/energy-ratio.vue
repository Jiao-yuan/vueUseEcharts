<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "energy-ratio",
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
        tooltip: {
          trigger: "axis",
          show: true
        },
        legend: {
          data: ["2018", "2019"],
          right: 40,
          top: "center",
          orient: "vertical",
          icon: "roundRect",
          itemWidth: 14,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        radar: {
          indicator: [
            {
              name: "消防",
              max: 100
            },
            {
              name: "劳动",
              max: 100
            },
            {
              name: "非法",
              max: 100
            },
            {
              name: "环境",
              max: 100
            },
            {
              name: "安全",
              max: 100
            },
            {
              name: "过度",
              max: 100
            }
          ],
          radius: "70%",
          center: ["43%", "50%"],
          shape: "polygon",
          splitNumber: 4,
          name: {
            textStyle: {
              color: "#36F5FF",
              fontSize: 16
            }
          },
          splitArea: {
            areaStyle: {
              opacity: 0
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "#2253DA",
                "#2253DA",
                "#2253DA",
                "#2253DA",
                "#2253DA",
                "#2253DA"
              ].reverse(),
              width: 1
            }
          },
          axisLine: {
            lineStyle: {
              color: "#2253DA"
            }
          }
        },
        series: [
          {
            name: "2018",
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            data: [
              {
                value: [100, 90, 80, 66, 90, 70]
              }
            ],
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#FFFFFF",
                borderColor: "#3BA8EC",
                borderWidth: 1
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(0, 66, 107, 0)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(75, 180, 255, 0.38)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            lineStyle: {
              normal: {
                color: "rgba(13, 178, 255, 1)",
                width: 3
              }
            }
          },
          {
            name: "2019",
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            data: [
              {
                value: [34, 45, 86, 64, 86, 22]
              }
            ],
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#FFFFFF",
                borderColor: "#5EFFE2",
                borderWidth: 1
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(0, 66, 107, 0)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(75, 180, 255, 0.38)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            lineStyle: {
              normal: {
                color: "#42FFDD",
                width: 3
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