<template>
    <div class="echart_wujiao" ref="myChart">

    </div>
</template>

<script>
export default {
  name: 'Wujiao',
  props: {},
  components: {

  },
  data () {
    return {
      imghost:this.$imghost + '/hx/cir.png'
    }
  },
  computed: {

  },
  created() {

  },
  watch: {

  },
  mounted() {
    window.addEventListener('resize', this.initechart, 20)
    this.initechart()
  },
  methods: {
    initechart(){
      let myChart = this.$echarts.init(this.$refs.myChart)
      myChart.resize()
      // 绘制图表
      myChart.setOption({
        legend: {
          data: ['']
        },
        center:['50%','50%'],
        radar: {
          // shape: 'circle',
          name: {
            color: "#737373"
          },
          indicator: [
            { name: '态度', max: 5 },
            { name: '专业建设', max: 5 },
            { name: '专业技能', max: 5 },
            { name: '专业技能', max: 5 },
            { name: '教科研', max: 5 },
          ],
          splitArea: {
            areaStyle: {
              color:"#fff",
            }
          },
          axisLine: {
            lineStyle: {
              color: "#E1E1E1",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#E1E1E1", // 设置网格的颜色
            },
          },
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            areaStyle: {
              color: '#E5FBF8'
            },
            symbolSize: 12,
            symbol:'image://' + this.imghost,
            data: [
              {
                value: [1, 2, 3, 4, 5, 1],
                name: 'Allocated Budget',
                lineStyle: {
                  color: "#00D7C2",
                  width: 5,
                },
              },
            ]
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
