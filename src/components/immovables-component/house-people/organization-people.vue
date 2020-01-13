/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
  <div :id='id' class="organizationPeople"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      id: 'organization-people',
      centerList: []
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
      dom.style.height = 300 + 'px'
      this.chart = echarts.init(dom)

      var dataAxis = [
        {
          name: '省厅正职',
          value: 0.01
        },
        {
          name: '省厅副职',
          value: 0.09
        },
        {
          name: '厅级正职',
          value: 0.85
        },
        {
          name: '厅级副职',
          value: 2.04
        },
        {
          name: '处级正职',
          value: 10.82
        },
        {
          name: '处级副职',
          value: 12.88
        },
        {
          name: '处级以下',
          value: 73.94
        }
      ]

      // let titleArr = []
      // let seriesArr = []
      // let colors = [
      //   ['#4149FD', '#4149FD'],
      //   ['#59F2FD', '#59F2FD'],
      //   ['#FF437B', '#FF437B'],
      //   ['#FFCE50', '#FFCE50'],
      //   ['#FF8D23', '#FF8D23'],
      //   ['#799BFE', '#799BFE'],
      //   ['#5441D0', '#5441D0']
      // ]
      // let centerList = [['15%', '30%'], ['38%', '30%'], ['62%', '30%'], ['85%', '30%'], ['25%', '75%'], ['50%', '75%'], ['75%', '75%']]
      // let positionList = [['38', '47%'], ['138', '47%'], ['244', '47%'], ['344', '47%'], ['83', '92%'], ['195', '92%'], ['305', '92%']]
      // data.forEach((item, index) => {
      //   titleArr.push({
      //     text: item.name,
      //     left: positionList[index][0],
      //     top: positionList[index][1],
      //     // textAlign: 'center',
      //     center: centerList[index],
      //     textStyle: {
      //       fontWeight: 'normal',
      //       fontSize: '12',
      //       color: '#fff'
      //       // textAlign: 'center'
      //     }
      //   })
      //   seriesArr.push({
      //     name: item.name,
      //     type: 'pie',
      //     clockWise: false,
      //     radius: [30, 40],
      //     itemStyle: {
      //       normal: {
      //         color: colors[index][0],
      //         shadowColor: colors[index][0],
      //         shadowBlur: 0,
      //         label: {
      //           show: false
      //         },
      //         labelLine: {
      //           show: false
      //         }
      //       }
      //     },
      //     hoverAnimation: false,
      //     center: centerList[index],
      //     data: [
      //       {
      //         value: item.value,
      //         label: {
      //           normal: {
      //             formatter: (params) => {
      //               return params.value + '%'
      //             },
      //             position: 'center',
      //             show: true,
      //             textStyle: {
      //               fontSize: '12',
      //               fontWeight: 'bold',
      //               color: '#fff'
      //             }
      //           }
      //         }
      //       },
      //       {
      //         value: 100 - item.value,
      //         name: 'invisible',
      //         itemStyle: {
      //           normal: {
      //             color: colors[index][1],
      //             opacity: 0.3
      //           },
      //           emphasis: {
      //             color: colors[index][1]
      //           }
      //         }
      //       }
      //     ]
      //   })
      // })
      // seriesArr.splice(4, 0, '\n')
      // let option = {
      //   // backgroundColor: '#fff',
      //   title: titleArr,
      //   series: seriesArr
      // }
      // var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放']
      var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
      dataAxis = dataAxis.map((item, index) => item = item.name)
      console.log(dataAxis)
      var yMax = 500
      var dataShadow = []

      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }
      let option = {
        title: {
          // text: '特性示例：渐变色 阴影 点击缩放',
          // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        },
        xAxis: {
          // eslint-disable-next-line no-return-assign
          data: dataAxis,
          axisLabel: {
            inside: true,
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          { // For shadow
            type: 'bar',
            itemStyle: {
              color: 'rgba(0,0,0,0.05)'
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
          },
          {
            type: 'bar',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#83bff6'},
                  {offset: 0.5, color: '#188df0'},
                  {offset: 1, color: '#188df0'}
                ]
              )
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2378f7'},
                    {offset: 0.7, color: '#2378f7'},
                    {offset: 1, color: '#83bff6'}
                  ]
                )
              }
            },
            data: data
          }
        ]
      }
      var zoomSize = 6
      this.chart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)])
        this.chart.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        })
      })
      this.chart.setOption(option)
    }
  }
}
</script>
<style lang="scss">
// .organizationPeople div canvas{
//   display: flex;
//   flex-wrap: wrap;
// }
</style>
