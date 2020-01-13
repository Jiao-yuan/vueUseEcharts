<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "trip-pie-two",
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
      var ydata = [
        {
          name: "小轿车",
          value: 18
        },
        {
          name: "商务车",
          value: 16
        },
        {
          name: "SUV",
          value: 15
        }
      ];
      let ydatas = [{
          name: "小轿车",
          value: 18,
         
           itemStyle:{
                          normal: {
                color: new echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#FFCE50" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#3DDDFF" // 100% 处的颜色
                    }
                  ],
                  false
                ),
              }
          }
        },
        {
          name: "商务车",
          value: 16,
            itemStyle:{
                          normal: {
                color: new echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#3C8851" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#E95757" // 100% 处的颜色
                    }
                  ],
                  false
                ),
              }
          }
          
        },
        {
          name: "SUV",
          value: 15,
           itemStyle:{
                          normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#799BFE" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#5441D0" // 100% 处的颜色
                    }
                  ],
                  false
                ),
              }
          }
         
        }]
      var color = ["#FF8D23", "#00AE26", "#799BFE"];
      var xdata = ["小轿车", "商务车", "SUV"];
      let option = {
         title: {
          subtext:"9523",
          text: '里程统计',
          textAlign:"center",
          textStyle: {
              color: '#78F2FF',
              fontSize: 12,
            

          },
          subtextStyle: {
              fontSize: 24,
              color: "#78F2FF",
          },
           x: '48%',
          y: '40%',
    },
        color: color,
        series: [
          {
            type: "pie",
            radius: ["40%", "50%"],
            center: ["50%", "50%"],
            itemStyle: {
              //图形样式
            },
            label: {
              formatter: "{b}" +"\n"+"{c}",
              textStyle: {
                fontSize: 14
              }
            },
            labelLine:{
               length:10,
               length2:10
            },
            data: ydata
          },
          {
            type: "pie",
            radius: ["49%", "60%"],
            center: ["50%", "50%"],
            label: {
              show:false,
              formatter: "{b}" +"\n"+"{c}",
              textStyle: {
                fontSize: 14
              }
            },
            labelLine:{
               show:false,
               length:15,
               length2:15
            },
            data: ydatas
          },
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
#trip-pie-two{
    width:50%;
}
</style>