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
      id: 'organization-peoples',
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

      var data = [
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

      let titleArr = []
      let seriesArr = []
      let colors = [
        ['#4149FD', '#4149FD'],
        ['#59F2FD', '#59F2FD'],
        ['#FF437B', '#FF437B'],
        ['#FFCE50', '#FFCE50'],
        ['#FF8D23', '#FF8D23'],
        ['#799BFE', '#799BFE'],
        ['#5441D0', '#5441D0']
      ]
      let centerList = [['15%', '30%'], ['38%', '30%'], ['62%', '30%'], ['85%', '30%'], ['25%', '75%'], ['50%', '75%'], ['75%', '75%']]
      let positionList = [['38', '47%'], ['138', '47%'], ['244', '47%'], ['344', '47%'], ['83', '92%'], ['195', '92%'], ['305', '92%']]
      data.forEach((item, index) => {
        titleArr.push({
          text: item.name,
          left: positionList[index][0],
          top: positionList[index][1],
          // textAlign: 'center',
          center: centerList[index],
          textStyle: {
            fontWeight: 'normal',
            fontSize: '12',
            color: '#fff'
            // textAlign: 'center'
          }
        })
        seriesArr.push({
          name: item.name,
          type: 'pie',
          clockWise: false,
          radius: [30, 40],
          itemStyle: {
            normal: {
              color: colors[index][0],
              shadowColor: colors[index][0],
              shadowBlur: 0,
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          center: centerList[index],
          data: [
            {
              value: item.value,
              label: {
                normal: {
                  formatter: (params) => {
                    return params.value + '%'
                  },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold',
                    color: '#fff'
                  }
                }
              }
            },
            {
              value: 100 - item.value,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: colors[index][1],
                  opacity: 0.3
                },
                emphasis: {
                  color: colors[index][1]
                }
              }
            }
          ]
        })
      })
      seriesArr.splice(4, 0, '\n')
      let option = {
        // backgroundColor: '#fff',
        title: titleArr,
        series: seriesArr
      }
   
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
