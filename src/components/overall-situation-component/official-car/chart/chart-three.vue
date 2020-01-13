<template>
  <div :id="id" class="chart3"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "chart-three",
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
            data:["五年以下","5-8年","8-10年","超过10年"],
            right: "5",
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
            center:[70,66],
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
                    value:100, name:'五年以下',
                    itemStyle: {
                        color:"#34BE53"
                    },
                },
                {
                    value:30, name:'5-8年',
                    itemStyle: {
                        color: "#254BAE"
                    },
                },
                {
                    value:30, name:'8-10年',
                    itemStyle: {
                        color: "#E95757"
                    },
                },
                 {
                    value:30, name:'超过10年',
                    itemStyle: {
                        color: "#964CFE"
                    },
                },
            ]
        }
    ]
};
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
.chart3{
    width:50%;
}
</style>
