<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "earth-area",
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
      let option = {
        grid: {
         top: '25%',
        left: '2%',
        right: '2%',
        bottom: '6%',
        containLabel: true
        },
         legend: {
        textStyle:{
           color:"#fff",
           fontSize:12
        },

        width:390,
        itemWidth:7,
        itemHeight:7,
        itemGap:11,
        borderRadius:10,
        right:0,
        top: '2%',
        data: ["机关团体用地", "教育用地", "仓储用地", "科研用地", "机关住宅用地","商服用地","工业用地","住宅用地","其他用地"],
        },
        xAxis: [
          {
            type: 'category',
         axisTick:{
          show:false
        },
        axisLine:{
          lineStyle:{
            color:"#214470"
          }
        },
        axisLabel: {
            interval: 0,
            show: true,
            formatter: function (value) {
                    //x轴的文字改为竖版显示
                    var str = value.split("");
                    return str.join("\n");
                  },
            splitNumber: 15,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            },

        },
            data: ["大同市", "太原市", "阳泉市", "长治市", "晋城市", "朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"]
          }
        ],
       
        yAxis: [
         {
        type: 'value',
        name:"面积(㎡)",
        nameTextStyle:{
          color:"#5C80B8",
          fontSize:"12px",
           padding: [0, 30, 0, 0] ,
        },
        axisLabel: {
            show: true,
            color:"#fff",
            interval: 'auto',
            formatter: '{value} ',
             margin:4,
        },
        axisLine:{
          lineStyle:{
            color:"#214470"
          }
        },
        axisTick:{
          show:false
        },
       textStyle: {
                fontSize: 10,
                color: '#fff'
            },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color:"#214470"
            }
        },
        show: true

    }
        ],
        series: [
           {
            name: "教育用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
             lineStyle: {
              normal: {
                color: "#0F18E6" // 线条颜色
              },
            },
             itemStyle: {
              normal: {
                color: "#0F18E6"
              }
            },
             data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
          },
          {
            name: "其他用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
             lineStyle: {
              normal: {
                color: "#F16489" // 线条颜色
              },
            },
             itemStyle: {
              normal: {
                color: "#F16489"
              }
            },
             data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
          },
           {
            name: "住宅用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
             lineStyle: {
              normal: {
                color: "#00AE26" // 线条颜色
              },
            },
             itemStyle: {
              normal: {
                color: "#00AE26"
              }
            },
             data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
          },
           {
            name: "工业用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
             lineStyle: {
              normal: {
                color: "#A764F1" // 线条颜色
              },
            },
             itemStyle: {
              normal: {
                color: "#A764F1"
              }
            },
             data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
          },
             {
            name: "机关团体用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
             lineStyle: {
              normal: {
                color: "#1D93DE" // 线条颜色
              },
            },
             itemStyle: {
              normal: {
                color: "#1D93DE"
              }
            },
             data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
          },
          {
            name: "商服用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
             lineStyle: {
              normal: {
                color: "#3FE9C6" // 线条颜色
              },
            },
             itemStyle: {
              normal: {
                color: "#3FE9C6"
              }
            },
             data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
          },
           {
            name: "科研用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
             lineStyle: {
              normal: {
                color: "#FF8D23" // 线条颜色
              },
            },
             itemStyle: {
              normal: {
                color: "#FF8D23"
              }
            },
             data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
          },
          {
            name: "仓储用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
             lineStyle: {
              normal: {
                color: "#DDB859" // 线条颜色
              },
            },
             itemStyle: {
              normal: {
                color: "#DDB859"
              }
            },
             data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
          },
       
          {
            name: "机关住宅用地",
            type: "line",
           	symbol:'circle',   // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#F45B5B" // 线条颜色
              },
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                color: "#F45B5B"
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(244, 91, 91, 0.5)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 21, 68, 0)"
                    }
                  ],
                  false
                ),
              }
            },
            data: [150, 200, 259, 360, 378, 450, 450,780,365,888,999]
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