<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "house-areas",
      xData: [],
      xAxisArr: [],
      legendName: []
    };
  },
  props: {
    dataList: {
      type: Array,
      default: []
    }
  },
  mounted() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.chart.clear();
      this.echartsintit();
    }, 10000);
    this.resetData(this.dataList);
    this.$nextTick(() => {
      this.echartsintit();
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    resetData(val) {
      var xAxisArr = [];
      var legendName = [];
      var xData = [];
      val.forEach(element => {
        var legendObj = {};
        var xDataObj = {
          type: "bar",
          barWidth: 20,
          color: this.color16()
        };
        var xAxis = [];
        xDataObj.name = element.name;
        legendObj.name = element.name;
        var arr = [];
        element.dataList.forEach(el => {
          xAxis.push(el.cityName);
          arr.push(el.value);
        });
        xAxisArr.push(xAxis);
        xDataObj.data = arr;
        legendName.push(legendObj);
        xData.push(xDataObj);
      });
      this.xData = xData;
      this.legendName = legendName;
      this.xAxisArr = xAxisArr;
    },
    color16() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      return color;
    },
    echartsintit(val) {
      let dom = document.getElementById(this.id);
      dom.style.height = 270 + "px";
      this.chart = echarts.init(dom);

     var data = [{
    "name": "尖草坪区",
    "value": 80
}, {
    "name": "杏花岭区",
    "value": 87.8
}, {
    "name": "迎泽区",
    "value": 71
}, {
    "name": "小店区",
    "value": 80
}, {
    "name": "晋源区",
    "value": 66
}, {
    "name": "万柏林区",
    "value": 80
}];
var xData = [],
    yData = [];
var min = 0; 
data.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
let option = {
    backgroundColor:"#111c4e",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            if (prams[0].data === min) {
                return "合格率：0%"
            } else {
                return "合格率：" + prams[0].data + ""
            }
        }
    },
    // legend: {
    //     data: ['直接访问', '背景'],
    //     show: false
    // },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
             color: 'rgb(170,170,170)',
             fontSize:16
        }
    }],
    yAxis: [{
            type: 'value',
             name:'面积(m²)',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
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
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
      
    ]
};


      this.chart.setOption(option, true);
    }
  }
};
</script>
<style lang="scss">
</style>
