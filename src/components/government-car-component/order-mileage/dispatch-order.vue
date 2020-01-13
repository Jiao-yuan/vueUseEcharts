<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "dispatch-order"
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
      dom.style.height = 250 + "px";
      this.chart = echarts.init(dom);
      let option = {
        color: [
          "#FFCE50",
          "#00AE26",
          "#254BAE",
          "#FF8D23",
          "#FF437B",
          "#964CFE",
          "#5441D0",
          "#799BFE",
          "#59F2FD",
          "#B5FD59"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vartical",
          right: "20",
          itemWidth: 14,
          itemHeight: 8,
          itemGap: 10,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
            fontWeight: 0
          },
          data:["大同市", "太原市", "阳泉市", "长治市", "晋城市", "朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"]
        },
        polar: {
          center: ["35%", "50%"],
          radius: "80%"
        },
        angleAxis: {
          interval: 1,
          type: "category",
          data: [],
          z: 10,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#FFFFFF",
              width: 1,
              type: "solid",
              opacity: 0.5
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
          }
        },
        radiusAxis: {
          min: "0",
          max: "120",
          splitNumber: 5,
          interval: 20,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#FFFFFF",
              width: 1,
              type: "solid",
              opacity: 0.5
            }
          },
          axisLabel: {
            formatter: "{value} %",
            show: true,
            padding: [0, 0, 20, 0],
            color: "#254BAE",
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: "#FFFFFF",
              width: 1,
              type: "solid",
              opacity: 0.5
            }
          }
        },
        series: [
          {
            type: "pie",
            roseType: "area",
            radius: ["0%", "80%"],
            center: ["35%", "50%"],
            // roseType: "area",
            zlevel: 10,
            label: {
              normal: {
                show: true,
                formatter: "{b}",
                textStyle: {
                  fontSize: 12,
                  color: "#cccccc"
                },
                position: "outside"
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: false,
                length: 12,
                length2: 0
              },
              emphasis: {
                show: false
              }
            },
            data: [
              { name: "太原市", value: 199 },
              { name: "大同市", value: 39 },
              { name: "阳泉市", value: 152 },
              { name: "长治市", value: 299 },
              { name: "晋城市", value: 89 },
              { name: "朔州市", value: 52 },
              { name: "晋中市", value: 9 },
              { name: "运城市", value: 352 },
              { name: "忻州市", value: 99 },
              { name: "临汾市", value: 39 },
              { name: "吕梁市", value: 480 }
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