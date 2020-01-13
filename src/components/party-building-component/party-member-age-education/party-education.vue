<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "party-education",
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: "0",
          itemWidth: 14,
          itemHeight: 8,
          textStyle: {
            fontSize: 12,
            color: "#fff"
          },
          top: "center",
          data: ["本科", "硕士", "博士", "专科", "无"]
        },
        calculable: false,
        series: (function() {
          var series = [];
          for (var i = 0; i < 15; i++) {
            series.push({
              name: "浏览器（数据纯属虚构）",
              type: "pie",
              itemStyle: {
                normal: {
                  label: {
                    show: i>=14,
                    formatter: "{d}"+"%"
                  },
                  labelLine: {
                    show: i>=14,
                    length: 20,
                    length2: 25
                  }
                }
              },
              silent: true,
              radius: [i * 4 + 20, i * 4 + 23],
              data: [
                {
                  value: i * 128 + 80,
                  name: "本科"
                },
                {
                  value: i * 64 + 160,
                  name: "硕士"
                },
                {
                  value: i * 32 + 320,
                  name: "博士"
                },
                {
                  value: i * 16 + 640,
                  name: "专科"
                },
                {
                  value: i * 8 + 1280,
                  name: "无"
                }
              ]
            });
          }
          return series;
        })()
      };
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
.menberSexContainer {
  height: 270px;
  position: relative;
  width: 100%;
  .sexleft {
    position: absolute;
    left: 45px;
    top: 230px;
    color: #fff;
    font-size: 20px;
  }
  .sexright {
    position: absolute;
    right: 30px;
    top: 230px;
    color: #fff;
    font-size: 20px;
  }
}
</style>