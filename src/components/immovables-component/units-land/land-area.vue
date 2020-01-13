<template>
  <div :id="id"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      id: 'units'
    }
  },
  mounted () {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.chart.clear()
      this.echartsintit()
    }, 5000)
    this.echartsintit()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    echartsintit () {
      let dom = document.getElementById(this.id)
      dom.style.height = 270 + 'px'
      this.chart = echarts.init(dom)
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params) {
            return (
              params[0].seriesName +
              '<br/>' +
              params[0].name +
              ': ' +
              params[0].value
            )
          }
        },
        grid: {
          top: '15%',
          left: '2%',
          right: '2%',
          bottom: '6%',
          containLabel: true
        },
        xAxis: {
          data: [
            '大同市',
            '太原市',
            '阳泉市',
            '长治市',
            '晋城市',
            '朔州市',
            '晋中市',
            '运城市',
            '忻州市',
            '临汾市',
            '吕梁市'
          ],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#214470'
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            formatter: function (value) {
              // x轴的文字改为竖版显示
              var str = value.split('')
              return str.join('\n')
            },
            splitNumber: 15,
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '数量(个)',
          nameTextStyle: {
            color: '#5C80B8',
            fontSize: '12px',
            padding: [0, 30, 0, 0]
          },
          axisLabel: {
            show: true,
            color: '#fff',
            interval: 'auto',
            formatter: '{value} ',
            margin: 4
          },
          axisLine: {
            lineStyle: {
              color: '#214470'
            }
          },
          axisTick: {
            show: false
          },
          textStyle: {
            fontSize: 10,
            color: '#fff'
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#214470'
            }
          },
          show: true
        },
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#74EDFF'
          },
          {
            offset: 1,
            color: '#2141EA'
          }
        ]),
        series: [
          {
            name: '每年人数统计',
            type: 'pictorialBar',
            barCategoryGap: '-37',
            label: {
              normal: {
                show: true,
                opacity: 0.1,
                color: '#74EDFF',
                fontSize: '10px',
                position: 'top'
              },
              emphasis: {
                opacity: 1
              }
            },
            barWidth: 66,
            symbol:
              'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              normal: {
                opacity: 0.5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#74EDFF'
                  },
                  {
                    offset: 1,
                    color: '#2141EA'
                  }
                ])
              },
              emphasis: {
                opacity: 1
              }
            },
            data: [150, 160, 115, 170, 187, 188, 90, 170, 187, 188, 90],
            z: 10
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>
<style lang="scss">
</style>
