<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id:"units-number",
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
      let data = [
        {
          name: "尖草坪区",
          value: 354
        },
        {
          name: "杏花岭区",
          value: 411
        },
        {
          name: "鹰泽区",
          value: 250
        },
        {
          name: "小店区",
          value: 200
        },
        {
          name: "晋源区",
          value: 230
        },
        {
          name: "万柏林区",
          value: 500
        }
      ];
      let arrName = this.getArrayValue(data, "name");
      let arrValue = this.getArrayValue(data, "value");
      this.sumValue = eval(arrValue.join("+"));
      let objData = this.array2obj(data, "name");
      let optionData = this.getData(data);
      let option = {
        legend: {
          show: true,
          // icon: "circle",
          top: "30%",
          left: "70%",
          orient:"vertical",
          data: arrName,
          itemWidth: 14,
          itemHeight: 8,
          itemGap: 12,
          borderRadius:4,
          formatter: function(name) {
            return "{title|" + name + "}";
          },

          textStyle: {
            rich: {
              title: {
                fontSize: 12,

                color: "#fff"
              },
              value: {
                fontSize: 12,
                color: "#fff"
              }
            }
          }
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{a}<br>{b}:{c}({d}%)"
        },
        color: [
          "#FF8D23",
          "#FF437B",
          "#FFCE50",
          "#5441D0",
          "#799BFE",
          "#59F2FD"
        ],
        grid: {
          top: "16%",
          bottom: "53%",
          left: "30%",
          containLabel: false
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              inside: true,
              textStyle: {
                color: "#fff",
                fontSize: 16
              },
              show: true
            },
            data: optionData.yAxis
          }
        ],
        xAxis: [
          {
            show: false
          }
        ],
        series: optionData.series
      };
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
</style>
