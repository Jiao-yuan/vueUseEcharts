<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "house-areas",
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
          name: "住宅用地",
          value: 18
        },
        {
          name: "经营用地",
          value: 16
        },
        {
          name: "办公用地",
          value: 15
        }
      ];
      var color = ["#E95757", "#FFCE50", "#5441D0"];
      var xdata = ["住宅用地", "经营用地", "办公用地"];
      let option = {
        title: {
          subtext: "9523㎡",
          text: "总数",
          textAlign: "center",
          textStyle: {
            color: "#78F2FF",
            fontSize: 12
          },
          subtextStyle: {
            fontSize: 24,
            color: "#78F2FF"
          },
          x: "39%",
          y: "40%"
        },
        color: color,
        legend: {
          orient: "vartical",
          textStyle: { color: "#fff", fontSize: 12 },
          top: "center",
          right: "40",
          data: xdata,
          itemWidth: 14,
          itemHeight: 8,
          itemGap: 10,
          formatter: function(name) {
            return "" + name;
          }
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "60%"],
            center: ["40%", "50%"],
            itemStyle: {
              //图形样式
            },
            label: {
              formatter: "{d}" + "%",
              textStyle: {
                fontSize: 18
              }
            },
            data: ydata
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