<template>
  <div :id="id" class="chart2"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "chart-two",
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
      dom.style.height = 135 + "px";
      this.chart = echarts.init(dom);
let option = {
     legend: {
            orient: "vartical",
            textStyle: { color: "#fff", fontSize: 12 },
            top: "center",
            data:["SUV","商务车","小轿车"],
            right: "30",
            itemWidth: 14,
            itemHeight: 8,
            itemGap: 10,
            formatter: function(name) {
                return "" + name;
            }
            },
    series: [
        {
            type:'pie',
            radius: ['20', '50'],
           center:[60,66],
            // itemStyle: {
            //     borderColor: '#04192b',
            //     borderWidth: 1
            // },
            labelLine:{
              show:false
            },
            label:false,
            data:[
                {
                    value:100, name:'SUV',
                    itemStyle: {
                        color:"#34BE53"
                    },
                },
                {
                    value:30, name:'商务车',
                    itemStyle: {
                        color: "#964CFE"
                    },
                },
                {
                    value:30, name:'小轿车',
                    itemStyle: {
                        color: "#254BAE"
                    },
                },
            ]
        },
    ]
};
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
.chart2{
    width:50%;
}
</style>
