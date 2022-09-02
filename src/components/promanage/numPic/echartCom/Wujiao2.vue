<template>
    <div class="echart_wujiao2" ref="myChart3">

    </div>
</template>

<script>
export default {
  name: 'Wujiao2',
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
      let myChart = this.$echarts.init(this.$refs.myChart3)
      myChart.resize()
      // 绘制图表
      myChart.setOption({
        legend: {
          right: '5%',
          itemHeight: 14,
          itemWidth: 14,
        },
        grid: {//控制图的大小，调整下面这些值就可以，
          x: 40,
          x2:100,
          y2:150//y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },

        radar: {
          // shape: 'circle',
          name: {
            color: "#737373"
          },
          center:['50%','60%'],
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
              width: 1,
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
            symbol:'none',
            data: [
              {
                value: [1, 2, 3, 4, 5, 1],
                name: '进入工作室',
                lineStyle: {
                  color: "#00D7C2",
                  width: 3,
                },
              },
              {
                value: [2, 2, 1, 4, 3, 1],
                name: '未进入工作室',
                lineStyle: {
                  color: "#FF7753",
                  width: 3,
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
