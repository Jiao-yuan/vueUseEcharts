<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "same-term",
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
      var Name = ['收入', '支出', '利润'];
var data = {
    //['国家目标', '海南目标', '完成情况']
    "——2018年度——": [65, 60, 76.5],
    "——2019年度——": [93, 93, 93.4],
};

var xAxisData = [];
var data1 = [],
    data2 = [],
    data3 = [];
for (var i in data) {
    xAxisData.push(i);
    data1.push(data[i][0])
    data2.push(data[i][1])
    data3.push(data[i][2])
}

var option = {
       grid: {
         top: '25%',
        left: '2%',
        right: '2%',
        bottom: '6%',
        containLabel: true
        },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#363e83',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
        data: xAxisData
    }, {
        type: 'category',
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
    }, {
        type: 'category',
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
    }],
   yAxis: [
          {
            type: "value",
            name: "面积(㎡)",
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
    series: 
   [
            {
                name: '收入',
                type: 'bar',
                stack: '1',
                data: data1,
                  barGap:"100%",
                barWidth:20,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.06,
                            color: 'rgba(0, 72, 166, 0.19)'
                        }, {
                            offset: 0.35,
                            color: 'rgba(0, 80, 183, 0.23)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 96, 220, 0.6)'
                        }]),
                    }
                },
                z: 2
            },
            // 上
            {
                name: '收入',
                type: 'scatter',
                stack: '1',
                xAxisIndex: 0,
                data: [0, 0, 0, 0],
                label: {
                    normal: {
                        show: false,
                    }
                },
                xAxisIndex: 2,
                symbolSize: [20, 10],
                symbolOffset: [-40, 0],
                itemStyle: {
                    normal: {
                        color: "#0060DC"
                    }
                },
                z: 2
            },
             // 
            {
                name: '收入',
                type: 'scatter',
                hoverAnimation: false,
                data: [1.2, 1.2, 1.2, 1.2],
                xAxisIndex: 2,
                symbolOffset: [-40, 0], //相对于原本位置的偏移量
                symbolSize: [20, 10],
                itemStyle: {
                    normal: {
                        color: "#0060DC"
                    }
                },
                z: 2
            },

            {
                name: '支出',
                type: 'bar',
                stack: '2',
                data: data2,
                      barGap:"100%",
                // label: label,
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.06,
                            color: 'rgba(145, 248, 255, 0.19)'
                        }, {
                            offset: 1,
                            color: 'rgba(60, 179, 187, 0.6)'
                        },
                        ]),
                    }
                },
                z: 2
            },
            {
                name: '支出',
                type: 'scatter',
                stack: '2',
                xAxisIndex: 0,
                symbolOffset: [0, 0], //相对于原本位置的偏移量
                data: [0, 0, 0, 0],
                label: {
                    normal: {
                        show: false,
                    }
                },
                xAxisIndex: 2,
                symbolSize: [20, 10],
                itemStyle: {
                    normal: {
                      
                        color: "#4FECF7",
                        opacity: 1,
                    }
                },
                z: 2
            },
            {
                name: '支出',
                type: 'scatter',
                hoverAnimation: false,
                data: [1.2, 1.2, 1.2, 1.2],
                xAxisIndex: 2,
                symbolOffset: [0, 0], //相对于原本位置的偏移量
                symbolSize: [20, 10],
                itemStyle: {
                    normal: {
                        color: "#4FECF7",
                        opacity: 1,
                    }
                },
                z: 2
            },

            {
                name: '利润',
                type: 'bar',
                stack: '3',
                data: data3,
                       barGap:"100%",
                // label: label,
                barWidth:20,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.06,
                            color: 'rgba(122, 112, 17, 0.15)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 236, 63, 0.6)'
                        }]),
                        opacity: 0.8,
                    }
                },
                z: 2
            },
            {
                name: '利润',
                type: 'scatter',
                stack: '3',
                xAxisIndex: 0,
                symbolOffset: [40, 0], //相对于原本位置的偏移量
                data: [0, 0, 0, 0],
                label: {
                    normal: {
                        show: false,
                    }
                },
                symbolSize: [20, 10],
                itemStyle: {
                    normal: {
                        color: "#FFEC3F"
                    }
                },
                z: 2
            },
            {
                name: '利润',
                type: 'scatter',
                hoverAnimation: false,
                data: [1.2, 1.2, 1.2, 1.2],
                xAxisIndex: 2,
                symbolOffset: [40, 0], //相对于原本位置的偏移量
                symbolSize: [20, 10],
                itemStyle: {
                    normal: {
                        color: "#5E5720",
                        opacity: 1,
                    }
                },
                z: 2
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
