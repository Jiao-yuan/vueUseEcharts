<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "mock",
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
var myData = [42, 102, 124, 212, 232];
var myColor = ['#fff100'];
let option = {
     grid: {
          top: "0%",
          left: "2%",
          right: "2%",
          bottom: "0%",
          containLabel: true
        },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b0}: {c0}"
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        name:"年龄",
        axisTick: 'none',
        axisLine: 'none',
        offset: '10',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12',
            }
        },
        data: ['万柏林区','小店区','迎泽区','杏花岭区','尖草坪区']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            // show: false,
            show: true,
            textStyle: {
                color: '#ffffff',
                fontSize: '12',
            },
            formatter: function (value, index) {
                return myData[index];
            }
        },
        data: ['300', '300', '300', '300', '300']
    }, {
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            // data: [232, 212, 124, 102, 42],
            data: myData,
            label: {
                normal: {
                    // show: true,
                    show: false,
                    position: 'right',
                    formatter: function(param) {
                        return param.value;
                    },
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth:4,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#34BE53" // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#27E3FF" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#63EAFF" // 100% 处的颜色
                    }
                  ],
                  false
                ),
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [299.5, 299.5, 299.5, 299.5, 299.5],
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 7,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [300, 300, 300, 300, 300],
            barWidth: 13,
            itemStyle: {
                normal: {
                    color: '#63EAFF',
                    barBorderRadius: 7,
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#34BE53" // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#27E3FF" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#63EAFF" // 100% 处的颜色
                    }
                  ],
                  false
                ),
                }
            },
            z: 2
        },
        {
            name: '内圆',
            type: 'scatter',
            stack:'圆',
            yAxisIndex: 0,
            data: myData,
            yAxisIndex: 2,
            symbolSize: 4,
            itemStyle: {
                normal: {
                    borderColor: '#F0F0F0',
                    borderWidth:2 ,
                      color: new echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#34BE53" // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#27E3FF" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#63EAFF" // 100% 处的颜色
                    }
                  ],
                  false
                ),
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
.mock{
    height:270px;
    position:relative;
    width:100%;
}
</style>