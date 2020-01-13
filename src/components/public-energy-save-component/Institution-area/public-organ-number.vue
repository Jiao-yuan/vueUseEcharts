<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "public-organ-number"
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
      var myColor = [
        "#eb2100",
        "#eb3600",
        "#d0570e",
        "#d0a00e",
        "#34da62",
        "#00e9db",
        "#00c0e9",
        "#0096f3"
      ];
      let option = {
        grid: {
          left: "11%",
          top: "12%",
          right: "0%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "10",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "12"
              }
            },
            data: [
              "其他",
              "团组织",
              "体育事业",
              "卫生事业",
              "文化事业",
              "科技事业",
              "教育事业",
              "国家机关"
            ]
          },
          {
            axisTick: "none",
            axisLine: "none",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "12"
              }
            },
            data: [83, 32, 44, 52, 60, 22, 33, 44]
          },
          {
            name: "单位：件",
            nameGap: "50",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: "16"
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)"
              }
            },
            data: []
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: [83, 32, 44, 52, 60, 22, 33, 44, 78, 59, 15],
            label: {
              normal: {
                show: false,
                position: "right",
                formatter: function(param) {
                  return param.value + "%";
                },
                textStyle: {
                  color: "#ffffff",
                  fontSize: "16"
                }
              }
            },
            barWidth: 6,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#34BE53"
                  },
                  {
                    offset: 0.5,
                    color: "#FFCE50"
                  },
                  {
                    offset: 1,
                    color: "#071D5A"
                  }
                ])
              }
            },
            z: 2
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [
              99.5,
              99.5,
              99.5,
              99.5,
              99.5,
              99.5,
              99.5,
              99.5,
              99.5,
              99.5,
              99.5
            ],
            barWidth: 10,
            itemStyle: {
              normal: {
                color: "#0e2147"
              }
            },
            z: 1
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