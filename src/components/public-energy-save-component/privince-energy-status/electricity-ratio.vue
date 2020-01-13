<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id:"privince-orgnazition-number",
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
    array2obj(array, key) {
      var resObj = {};
      for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
      }
      return resObj;
    },
    getData(data) {
      var res = {
        series: [],
        yAxis: []
      };
      for (let i = 0; i < data.length; i++) {
        // console.log([70 - i * 15 + '%', 67 - i * 15 + '%']);
        res.series.push({
          name: "",
          type: "pie",
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [87 - i * 15 + "%", 77 - i * 15 + "%"],
          center: ["30%", "55%"],
          label: {
            show: false
          },
          itemStyle: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            borderWidth: 5
          },
          data: [
            {
              value: data[i].value,
              name: data[i].name
            },
            {
              value: this.sumValue - data[i].value,
              name: "",
              itemStyle: {
                color: [
                  "#FF8D23",
                  "#FF437B",
                  "#FFCE50",
                  "#5441D0",
                  "#799BFE",
                  "#59F2FD"
                ],
                borderWidth: 0,
                opacity: 0.3
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }
          ]
        });
        res.series.push({
          name: "",
          type: "pie",
          silent: true,
          z: 1,
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [87 - i * 15 + "%", 77 - i * 15 + "%"],
          center: ["30%", "55%"],
          label: {
            show: false
          },
          itemStyle: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            borderWidth: 5
          },
          data: [
            {
              value: 7.5,
              itemStyle: {
                color: "rgb(3, 31, 62)",
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            },
            {
              value: 2.5,
              name: "",
              itemStyle: {
                color: "rgba(0,0,0,0)",
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }
          ]
        });
        res.yAxis.push(data[i].value);
      }
      return res;
    },
    getArrayValue(array, key) {
      var key = key || "value";
      var res = [];
      if (array) {
        array.forEach(function(t) {
          res.push(t[key]);
        });
      }
      return res;
    },
    echartsintit() {
      let dom = document.getElementById(this.id);
      dom.style.height = 270 + "px";
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
          "#59F2FD"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vartical",
          top:"center",
          right: "20",
          itemWidth: 14,
          itemHeight: 8,
          itemGap: 16,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
            fontWeight: 0
          },
          data: [
           "空调",
           "用电",
           "照明",
           "其他"
          ]
        },
        series: [
           {
            type: "pie",
            radius: ["70%", "71%"],
            center: ["35%", "50%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#fff",
                    opacity: 0.5
                  }
                }
              }
            ]
          },
           {
            type: "pie",
            radius: ["60%", "61%"],
            center: ["35%", "50%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#fff",
                    opacity: 0.5
                  }
                }
              }
            ]
          },
          {
            type: "pie",
            radius: ["15%", "16%"],
            center: ["35%", "50%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#fff",
                    opacity: 0.5
                  }
                }
              }
            ]
          },
          {
            type: "pie",
            radius: ["30%", "50%"],
            center: ["35%", "50%"],
            // roseType: "area",
            zlevel: 10,
            label: {
              normal: {
                show: true,
                formatter: "{d}"+"%",
                textStyle: {
                  fontSize: 18
                },
                position: "outside"
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 25
              },
              emphasis: {
                show: false
              }
            },
            data: [
              { name: "空调", value: 39 },
              { name: "用电", value: 152 },
              { name: "照明", value: 299 },
              { name: "其他", value: 89 },
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
