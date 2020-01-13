<template>
  <div id="sxmap"></div>
</template>
<script>
import echarts from "echarts";
import $ from "jquery";
export default {
  name: "sxmap",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsMapClick(params) {
      console.log(params, 3333);
    },
    echartsInit() {
      let that = this;
      let dom = document.getElementById("sxmap");
      dom.style.height=308+"px"
      this.chart = echarts.init(dom);
      that.showProvince();
    },
    showProvince() {
      let that = this;
      $.get(that.$filePrefix + "shanxi.json", function(shanxiJson) {
        echarts.registerMap("sxmap", shanxiJson);
        that.chart.setOption(that.optionMap(shanxiJson));
      });
    },
    optionMap(val) {
      var geoCoordMap = {};
      val.features.forEach(el => {
        let obj = {};
        (obj.name = el.properties.name), (obj.center = el.properties.center);
        Object.assign(geoCoordMap, {
          [el.properties.name]: el.properties.center
        });
      });
      var defaultP = [
        [
          {
            name: "太原市",
            value: 199,
            selected: true
          }
        ]
      ];
      var data = [
        { name: "太原市", value: 199 },
        { name: "大同市", value: 39 },
        { name: "阳泉市", value: 152 },
        { name: "长治市", value: 299 },
        { name: "晋城市", value: 89 },
        { name: "朔州市", value: 52 },
        { name: "晋中市", value: 9 },
        { name: "运城市", value: 352 },
        { name: "忻州市", value: 99 },
        { name: "临汾市", value: 39 },
        { name: "吕梁市", value: 480 }
      ];
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      this.chart.on("click", params => {
        this.$store.commit("SET_PARAMSNAME", params.name);
        if (params.seriesType === "map") {
          // 如果不存在，则不能选中
          let selectData = convertData([
            {
              name: params.name,
              value: params.data.value
            }
          ]);
          option.geo.regions = [
            {
              name: params.name,
              value: params.data.value,
              selected: true
            }
          ];
          // 显示光圈
          option.series[1].data = selectData;
          option.series[2].data = selectData;
          option.series[3].data = selectData;
          this.chart.setOption(option);
        }
      });
      var option = {
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              return params.name + " : " + params.value;
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        geo: {
          show: true,
          top: "17%",
          map: "sxmap",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          regions: defaultP[0],
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#112C5A",
              borderColor: "#85EFFF"
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          }
        },
        series: [
          {
            type: "map",
            map: "sxmap",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#112C5A",
                borderColor: "#85EFFF"
              },
              emphasis: {
                areaColor: "#05DEFF"
              }
            },
            animation: false,
            data: data
          },
          {
            name: "credit_pm2.5",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(defaultP[0]),
            symbolSize: 25,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false,
                
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#05C3F9"
              }
            }
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize:45,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#F62157" //标志颜色
              }
            },
            zlevel: 6,
            data: convertData(defaultP[0]),
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(defaultP[0]),
            symbolSize: 25,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#05C3F9",
                shadowBlur: 10,
                shadowColor: "#05C3F9"
              }
            },
            zlevel: 1
          }
        ]
      };
      return option;
    }
  }
};
</script>
<style lang="scss">
#sxmap {
  position:absolute;
  bottom:0;
  left:0;
  width:180px;
}
</style>
