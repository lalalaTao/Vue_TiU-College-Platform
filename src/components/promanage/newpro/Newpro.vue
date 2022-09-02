<template>
  <div class="skill_main">
    <HeadNewPro></HeadNewPro>
    <div class="skill_banner">
      <Banner  :height="'3.063rem'" :list="bannerlist"></Banner>
    </div>
    <prostyle2></prostyle2>
  </div>
</template>

<script>
import Banner from "../../common/Banner";
import HeadNewPro from "../../common/HeadNewPro";
import prostyle1 from "./prostyle1";
import prostyle2 from "./prostyle2";
export default {
  name: 'Newpro',
  props: {},
  components: {
    Banner,
    HeadNewPro,
    prostyle1,
    prostyle2
  },
  data () {
    return {
      bannerlist:[
        {
          urlImg:this.$imghost + '/banner/detail_banner1.png'
        },
        {
          urlImg:this.$imghost + '/banner/detail_banner2.png'
        }
      ],
      input: '',
      oneyearList:[
        {month:1,year:2021,content:"工作室网络启动会议1"},
        {month:2,year:2021,content:"工作室网络启动会议2"},
        {month:3,year:2021,content:"工作室网络启动会议3"},
        {month:4,year:2021,content:"工作室网络启动会议4"},
        {month:5,year:2021,content:"工作室网络启动会议5"},
        {month:6,year:2021,content:"工作室网络启动会议6"},
        {month:7,year:2021,content:"工作室网络启动会议7"},
        {month:8,year:2021,content:"工作室网络启动会议8"},
        {month:9,year:2021,content:"工作室网络启动会议9"},
        {month:10,year:2021,content:"工作室网络启动会议10"},
        {month:11,year:2021,content:"工作室网络启动会议11"},
        {month:12,year:2021,content:"工作室网络启动会议12"},
      ],
      year:2022,
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
}
</script>

<style scoped>
@import "../../../assets/css/skill/skill.css";
@import "../../../assets/css/Spestandard/spestandard.css";
@import "../../../assets/css/Spestandard/newpro/newpro.css";
*{
  font-size: 12px;
  margin: 0;
}

.el-timeline-item-left {
  top: -80px;
}

.el-timeline-item-right {
  top: -80px;
}
.el-timeline-item-left /deep/ .el-timeline-item__wrapper {
  right: 90%;
}
.el-timeline-item-right /deep/ .el-timeline-item__wrapper {
  margin-left: 16%;
  padding: 0;
}

.el-timeline-item /deep/ .el-timeline-item__tail{
  height: 200%;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #e0e0e0;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background:white;
}
</style>
