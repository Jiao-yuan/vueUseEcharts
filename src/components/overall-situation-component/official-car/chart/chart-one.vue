<template>
  <div :id="id" class="chart1"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "chart-one",
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
            data:["燃油","新能源"],
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
                    value:100, name:'燃油',
                    itemStyle: {
                        color:"#34BE53"
                    },
                },
                {
                    value:30, name:'新能源',
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
.chart1{
    width:50%;
}
</style>
