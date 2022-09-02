<template>
    <div class="tiao_main" ref="myChart2">

    </div>
</template>

<script>
export default {
  name: 'tiaoCom',
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
  created(){

  },
  mounted() {
    window.addEventListener('resize', this.initechart, 20)
    this.initechart()
  },
  methods: {
    initechart(){
      let myChart = this.$echarts.init(this.$refs.myChart2)
      myChart.resize()
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['态度', '教科研', '教学专业', '专业技能', '专业建设'],
          axisLabel: {//y轴文字的配置
            textStyle: {
              color: "#737373",//Y轴内容文字颜色
            },
          },
          axisLine: {//y轴线的配置
            show: false,//是否展示
          },
          axisTick: {//y轴线的配置
            show: false,//是否展示
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {//y轴文字的配置
            textStyle: {
              color: "#737373",//Y轴内容文字颜色
            },
          },
          axisLine: {//y轴线的配置
            show: false,//是否展示
          },
          axisTick: {//y轴线的配置
            show: false,//是否展示
          }
        },
        legend: {
          right: '10%',
          itemHeight: 14,
          itemWidth: 14,
        },
        series: [
          {
            name:2022+ '年度',
            barWidth:12,
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            color: '#6BC9FF',
          },
          {
            name: 2021+'年度',
            barWidth:12,
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            color: '#31DDD8'

          }
        ]
      },true);
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.initechart, 20)
  },
}
</script>

<style scoped>
@import "../../../../assets/css/promanage/numPic/echartCom/echartCom.css";
</style>
