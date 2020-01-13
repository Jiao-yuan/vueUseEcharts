<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "energy-users-number"
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
   translateColor(index) {
      if (index > 5) {
        return this.translateColor(index - 5);
      }
      return index;
    },
    echartsintit() {
      let dom = document.getElementById(this.id);
      dom.style.height = 270 + "px";
      this.chart = echarts.init(dom);
      let that = this
      var sourceBar = {
        itemData: [
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
          ],
        seriesData: [980, 302, 150, 57, 231, 300,200,344,511,298,435]
      };
      var itemData = sourceBar.itemData;
      var seriesData = sourceBar.seriesData;
      var tooltip = sourceBar.tooltip;
      // var backgroundList = ['#0068b7', '#8c97cb', '#aa89bd', '#f6b37f', '#e27e34'];
      var color = [
        "#00b9f6",
        "#38a97d",
        "#004eff",
        "#17c7e7",
        "#4e85ea",
        "#e49be9",
        "#078d9d",
        "#eca52a",
        "#ef9544",
        "#ea3b3b"
      ];

      var data = {};
      for (var k in itemData) {
        data[itemData[k]] = seriesData[k];
      }

      var xAxisData = [];
      var dataArr = [];
      for (var i in data) {
        xAxisData.push(i);
        dataArr.push(data[i]);
      }
      let option = {
        grid: {
          top: "15%",
          left: "2%",
          right: "2%",
          bottom: "6%",
          containLabel: true
        },
        tooltip: {
          show: "true",
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
              color: "rgba(112,112,112,0)"
            }
          },
          formatter: function(params) {
            var unit = params[0].name.substring(
              params[0].name.indexOf("(") + 1,
              params[0].name.indexOf(")")
            );
            return params[0].name + "：" + params[0].value + "条数据";
          },
          backgroundColor: "rgba(0,0,0,0.7)", // 背景
          padding: [8, 10], //内边距
          extraCssText: "box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);" //添加阴影
        },
        xAxis: [
          {
            show: true,
            type: "category",
            nameLocation: "end",
            nameGap: 8,
            axisLabel: {
              fontSize: 12,
              color: "#fff",
              interval: 0,
              formatter: function (value) {
        	        			//x轴的文字改为竖版显示
        	        			var str = value.split("");
        	        			return str.join("\n");
        	        		}
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#214470"
              }
            },
            axisTick: {
              show: false
            },
            data: xAxisData
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: xAxisData
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: xAxisData
          }
        ],
        yAxis: {
          type: "value",
          // name: "数量",
          nameTextStyle: {
            fontSize: 14,
            fontFamily: "Microsoft YaHei",
            color: "#fff"
          },
          minInterval: 1,
          nameLocation: "end",
          nameGap: 10,
          splitLine: {
            show: true
          },
          axisLabel: {
            show: false,
            fontSize: 12,
            fontFamily: "Arial",
            color: "#fff"
          },
          axisLine: {
            show: false,
            symbol: ["none", "arrow"],
            lineStyle: {
              color: "#05edfc"
            }
          }
        },
        series: [
        {
            type: 'bar',
            stack: 1,
            xAxisIndex: 0,
            barWidth: 2,
            barGap: 5,
            z: 2,
            data: function() {
                var itemArr = [];
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: dataArr[i - 1],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 50,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#2147EB"
                                }, {
                                    offset: 0.5,
                                    color: "#27E3FF"
                                },
                                {
                                    offset: 1,
                                    color: "#63EAFF"
                                }]),
                            }
                        }
                    };
                    itemArr.push(item);
                }
                return itemArr;
            }()
        },
    {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '60%',
            data: dataArr,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: '#0e2147'
                }
            },
            z: 1
        },
  {
            type: 'bar',
            xAxisIndex: 2,
            barWidth: 14,
            barGap: 1,
            z: 0,
            data: function() {
                var itemArr = [];
                for (var i = 1; i < (dataArr.length + 1); i++) {
                    var item = {
                        value: dataArr[i - 1],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 50,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#2147EB"
                                }, {
                                    offset: 0.5,
                                    color: "#27E3FF"
                                },
                                {
                                    offset: 1,
                                    color: "#63EAFF"
                                }]),
                            }
                        }
                    };
                    itemArr.push(item);
                }
                return itemArr;
            }()
        },
          {
            type: "scatter",
            stack: 1,
            symbolOffset: [0, 0], //相对于原本位置的偏移量
            label: {
              normal: {
                show: false
              }
            },
            xAxisIndex: 2,
            symbolSize: 10,
            z: 2,
            data: (function() {
              var itemArr = [];
              for (var i = 1; i < dataArr.length + 1; i++) {
                var item = {
                  value: 0,
                  itemStyle: {
                    normal: {
                      borderColor: "#fff",
                      borderWidth: 2,
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "#214BEB"
                        },
                        {
                          offset: 1,
                          color: "#78F2FF"
                        }
                      ])
                    }
                  }
                };
                itemArr.push(item);
              }
              return itemArr;
            })()
          },
         
          {
            type: "scatter",
            hoverAnimation: false,
            xAxisIndex: 2,
            symbolOffset: [0, 0], //相对于原本位置的偏移量
            symbolSize: 10,
            z: 2,
            data: (function() {
              var itemArr = [];
              for (var i = 1; i < dataArr.length + 1; i++) {
                var item = {
                  value: 0,
                  itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "rgba(33, 75, 235, 0.8)"
                        },
                        {
                          offset: 1,
                          color: "rgba(120, 242, 255, 0.8)"
                        }
                      ])
                    }
                  }
                };
                itemArr.push(item);
              }
              return itemArr;
            })()
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