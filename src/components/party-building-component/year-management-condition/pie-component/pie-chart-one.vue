<template>
  <div :id="id" class="pie-chart-one"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "pie-chart-one",
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
     title:{
        text:"本年收入完成情况",
        textStyle:{
          color:"#78F2FF",
          fontSize:14
        },
        left:"0"
     },
     legend: {
            orient: "vartical",
            textStyle: { color: "#fff", fontSize: 12 },
            top: "center",
            data:["已完成","未完成"],
            right: "20",
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
            radius: ['15', '40'],
            center:[70,76],
            itemStyle: {
                borderColor: '#04192b',
                borderWidth: 1
            },
            labelLine:{
              show:false
            },
            label:false,
            data:[
                {
                    value:100, name:'已完成',
                    itemStyle: {
                        color:"#34BE53"
                    },
                },
                {
                    value:30, name:'未完成',
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
.pie-chart-one{
    width:50%;
}
</style>
