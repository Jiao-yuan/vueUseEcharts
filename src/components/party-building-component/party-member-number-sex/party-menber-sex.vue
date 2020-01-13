<template>
<div class="menberSexContainer">
  <div :id="id"></div>
  <div class="sexleft">男性:347人</div>
  <div class="sexright">女性:347人</div>
</div>  
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      id: "party-menber-sex",
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
    series: [
        {
            center: [
                "20%",
                "50%",
            ],
            radius: [
                "50%",
                "51%"
            ],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 28,
                            color:'#ffffff',
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#13b5b1",
                    borderColor: "#13b5b1",
                    borderWidth: 15
                },
            },
            data: [
                {
                    value: 52.7,
                    name: "52.7%"
                },
                {
                    name: " ",
                    value: 47.3,
                    itemStyle: {
                        normal: {
                            label: {
                                "show": false
                            },
                            labelLine: {
                                "show": false
                            },
                            color: "#13b5b1",
                            borderColor: "#13b5b1",
                            borderWidth: 0
                        },
                    }
                }
            ]
        },
        {
            center: [
                "80%",
                "50%"
                
            ],
            radius: [
                "50%",
                "51%"
            ],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 28,
                            color:'#ffffff',
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#00a0e9",
                    borderColor: "#00a0e9",
                    borderWidth: 15
                },
            },
            data: [
                {
                    value: 47.3,
                    name: "47.3%",
                     itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: "#00a0e9",
                            borderColor: "#00a0e9",
                            borderWidth: 0
                        },
                    }
                },
                {
                    name: " ",
                    value: 52.7,
                }
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
.menberSexContainer{
    height:270px;
    position:relative;
    width:100%;
    .sexleft{
        position:absolute;
        left:45px;
        top:230px;
        color:#fff;
        font-size:20px;
    }
    .sexright{
        position:absolute;
        right:30px;
        top:230px;
        color:#fff;
        font-size:20px;
    }
}
</style>