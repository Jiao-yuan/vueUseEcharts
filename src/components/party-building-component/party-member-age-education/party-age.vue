<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "party-age",
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
      // var myColor=['#eb2100','#eb3600','#d0570e','#d0a00e','#34da62','#00e9db','#00c0e9','#0096f3'];
// var myData = [232, 212, 124, 102, 42];
var myData = [42, 102, 124, 212, 232];
var myColor = ['#fff100'];
let option = {
     grid: {
          top: "5%",
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
        data: ['≥56','46-55','36-45','26-35','≤25']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            // show: false,
            show: true,
            textStyle: {
                color: '#fff100',
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
            barWidth:6,
            itemStyle: {
                normal: {
                    color: '#fff100',
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [299.5, 299.5, 299.5, 299.5, 299.5],
            barWidth: 14,
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
            barWidth: 15,
            itemStyle: {
                normal: {
                    // color: function(params) {
                    //         var num=myColor.length;
                    //         return myColor[params.dataIndex%num]
                    // },
                    color: '#2c5eb9',
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
            symbolSize: 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
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
            symbolSize: 12,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth:2 ,
                    color: '#fff100',
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
.menberSexContainer{
    height:270px;
    position:relative;
    width:100%;
}
</style>