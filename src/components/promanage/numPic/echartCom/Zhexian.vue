<template>
  <div class="echart_zhenxian">
    <div class="zhengxian_title xyzhsz">个人综合能力指标变化</div>
    <div style="width: 100%;height: 95%" ref="myChart4">

    </div>
  </div>

</template>

<script>
export default {
  name: 'Zhexian',
  props: {},
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  mounted() {
    window.addEventListener('resize', this.initechart, 20)
    this.initechart()
  },
  created(){

  },
  methods: {
    initechart(){
      let myChart = this.$echarts.init(this.$refs.myChart4)
      myChart.resize()
      // 绘制图表
      myChart.setOption({
        grid: {
          x: 50,
          y: 25,
          x2: 30,
          y2: 35
        },
        legend: {
          show:true,
          right: '5%',
        },
        xAxis: {
          boundaryGap: false,
          type: 'category',
          data: [
            '2021/1', '2021/2', '2021/3', '2021/4', '2021/5', '2021/6', '2021/7',
            '2022/1', '2022/2', '2022/3', '2022/4', '2022/5', '2022/6', '2022/7',
          ],
          axisLabel:{
            rotate : 60,
            textStyle: {
              color:'#737373'
            }
          }
        },

        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'教职研',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            itemStyle : {
              normal : {
                color:'#47D6C4', //改变折线点的颜色
                lineStyle:{
                  color:'#47D6C4' //改变折线颜色
                }
              }
            },
            markArea: {
              data: [
                [
                  {
                    xAxis: '2021/1',
                    itemStyle: {  color: '#FFF7F5',opacity:0.8  }
                  },
                  {
                    xAxis: '2021/5'
                  }
                ],
                [
                  {
                    xAxis: '2021/5',
                    itemStyle: {  color: '#F3FFFE' ,opacity:0.8 }
                  },
                  {
                    xAxis: '2022/5'
                  }
                ],
                [
                  {
                    xAxis: '2022/5',
                    itemStyle: {  color: '#E6F6FF',opacity:0.8  }
                  },
                  {
                    xAxis: '2022/7'
                  }
                ]
              ]
            },
            type: 'line',
            smooth: true
          }
        ]
      })
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.initechart, 20)
  },
}
</script>

<style scoped>
@import "../../../../assets/css/promanage/numPic/echartCom/echartCom.css";
@import "../../../../assets/css/promanage/numPic/numpic.css";

</style>
