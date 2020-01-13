<template>
  <div :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "house-area",
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
      // 指定图表的配置项和数据
      var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 14];
      var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20, 40];
      var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 60];
      var datacity = [
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
      ];
      var option = {
        color: ["#0060DC", "#1FBCFF", "#FFEC3F"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          textStyle: {
            color: "#fff",
            fontSize: 12
          },
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 16,
          borderRadius: [15, 15, 15, 15],
          right: 40,
          top: "4%",
          data: ["经济用房", "办公用房", "住宅用房"]
        },
        grid: {
          //图表的位置
          top: "15%",
          left: "2%",
          right: "2%",
          bottom: "6%",
          containLabel: true
        },
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
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#214470"
              }
            },
            axisLabel: {
              interval: 0,
              show: true,
              formatter: function(value) {
                //x轴的文字改为竖版显示
                var str = value.split("");
                return str.join("\n");
              },
              splitNumber: 15,
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            },
            data: datacity
          }
        ],
        series: [
          {
            name: "经济用房",
            type: "bar",
            stack: "sum",
            barCategoryGap: 23,
            barWidth: "12x",
            data: data1
          },
          {
            name: "办公用房",
            type: "bar",
            barWidth: "12px",
            stack: "sum",
            data: data2,
            barCategoryGap: 23
          },
          {
            name: "住宅用房",
            type: "bar",
            stack: "sum",
            barWidth: "12px",
            data: data3,
            barCategoryGap: 23
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