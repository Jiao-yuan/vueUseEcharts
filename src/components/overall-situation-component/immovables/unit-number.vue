<template>
  <div class="unitboxContianer">
    <img src="../../../assets/images/szdw.png" class="sheng" alt="" />
    <img src="../../../assets/images/dsdw.png" alt="" class="shi" />
    <div :id="id"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "unit-numbers",
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
      var uploadedDataURLm = "";
      var uploadedDataURLf = "";
      const barData = [36.4];
      const lineData = [100];
      let option = {
        grid: {
          top: "100%",
          left: "5%",
          right: "5%"
        },
        tooltip: {
          show: false
        },
        xAxis: {
          show: false
        },
        yAxis: {
          data: [],
          show: false
        },
        graphic: [
          {
            type: "text",
            id: "text1",
            left: "18%",
            top: "50%",
            z: 10,
            color: "#fff",
            bounding: "raw",
            style: {
              text: "36.4%",
              fill: "#fff",
              fontSize: 18
            }
          },
          {
            type: "text",
            id: "text2",
            right: "18%",
            top: "50%",
            z: 10,
            bounding: "raw",
            style: {
              text: "63.6%",
              fill: "#fff",
              fontSize: 18
            }
          }
        ],
        series: [
          {
            // 蓝柱下面方块
            name: "",
            type: "pictorialBar",
            symbol: "rect",
            barWidth: 10,
            symbolOffset: [0, -25],
            itemStyle: {
              normal: {
                color: "#05DEFF"
              }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: 10,
            data: lineData,
            animationEasing: "elasticOut",
            animationDelay: function(dataIndex, params) {
              return params.index * 30;
            }
          },
          {
            // 蓝柱
            name: "", // blue bar
            type: "pictorialBar",
            symbol: "rect",
            barWidth: "10",
            symbolOffset: [0, -25],
            symbolRepeat: true,
            symbolSize: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "#2181EA"
              }
            },
            // symbolClip: true,
            data: barData,
            label: {
              normal: {
                show: false
              }
            },
            animationEasing: "elasticOut",
            animationDelay: function(dataIndex, params) {
              return params.index * 30 * 1.1;
            }
          },
          {
            // 蓝柱下面方块
            name: "",
            type: "pictorialBar",
            symbol: "rect",
            barWidth: "10",
            symbolOffset: [0, -38],
            itemStyle: {
              normal: {
                color: "#05DEFF"
              }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: 10,
            data: lineData,
            animationEasing: "elasticOut",
            animationDelay: function(dataIndex, params) {
              return params.index * 30;
            }
          },
          {
            // 蓝柱
            name: "", // blue bar
            type: "pictorialBar",
            symbol: "rect",
            barWidth: "10",
            symbolOffset: [0, -38],
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "#1B87ED"
              }
            },
            symbolRepeat: true,
            symbolSize: 10,
            // symbolClip: true,
            data: barData,
            label: {
              normal: {
                show: false
              }
            },
            animationEasing: "elasticOut",
            animationDelay: function(dataIndex, params) {
              return params.index * 30 * 1.1;
            }
          },
          // {
          //   // 蓝柱
          //   name: "", // blue bar
          //   type: "pictorialBar",
          //   symbol: "rect",
          //   barWidth: 10,
          //   symbolOffset: [0, -12],
          //   itemStyle: {
          //     normal: {
          //       barBorderRadius: 5,
          //       color: "#05DEFF"
          //     }
          //   },
          //   symbolRepeat: true,
          //   symbolSize: 10,
          //   // symbolClip: true,
          //   data: barData,
          //   label: {
          //     normal: {
          //       show: false
          //     }
          //   },
          //   animationEasing: "elasticOut",
          //   animationDelay: function(dataIndex, params) {
          //     return params.index * 30 * 1.1;
          //   }
          // },
          {
            // 蓝柱下面方块
            name: "",
            type: "pictorialBar",
            symbol: "rect",
            barWidth: "10",
            symbolOffset: [0, -50],
            itemStyle: {
              normal: {
                color: "#05DEFF"
              }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: 10,
            data: lineData,
            animationEasing: "elasticOut",
            animationDelay: function(dataIndex, params) {
              return params.index * 30;
            }
          },
          {
            // 蓝柱
            name: "", // blue bar
            type: "pictorialBar",
            symbol: "rect",
            barWidth: "10",
            symbolOffset: [0, -50],
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "#2181EA"
              }
            },
            symbolRepeat: true,
            symbolSize: 10,
            // symbolClip: true,
            data: barData,
            label: {
              show: false
            },
            symbolClip: true,
            animationEasing: "elasticOut",
            animationDelay: function(dataIndex, params) {
              return params.index * 30 * 1.1;
            }
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
.unitboxContianer {
  position: relative;
  .sheng {
    height: 96px;
    width: 96px;
    position: absolute;
    top: 20px;
    left: 58px;
  }
  .shi {
    position: absolute;
    top: 20px;
    height: 96px;
    width: 96px;
    right: 58px;
  }
}
</style>