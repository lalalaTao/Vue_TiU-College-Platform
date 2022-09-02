<template>
  <div class="new_procontent">
    <!--      <div class="line_time_bottom"></div>-->
    <div class="new_procontent_title">
      工作室大事记
      <div style="width: 45px;
      height: 3.75px;
      background: #00bda5;
      border-radius: 2.25px;
      margin-top: 12.5px"></div>
    </div>

    <div class="new_procontent_dis">
      2021年工作室进展汇报 <i class="el-icon-arrow-right" style="color: #00bda5"></i>
    </div>

    <div class="line_time">
      <div class="top_year">{{year}}</div>
      <div style="display: flex;justify-content: center;position: relative;">
        <div class="line_time_line">
          <div v-for="(item,index) in oneyearList" v-if="item.month % 2 != 1" class="line_time_ke line_time_ke_left">
            <div class="line_time_items">
              <div class="line_time_items_video"></div>
              <div class="line_time_items_content">
                <div class="line_time_items_content_time"><span class="months">{{item.month}}月</span> <span class="years">{{ item.year }}</span> </div>
                <div class="line_time_items_content_info">{{item.content}}</div>
              </div>
              <div class="line_time_items_content_num">{{item.month}}</div>
              <div class="line_time_items_cir line_time_items_cir_lef"></div>
            </div>
          </div>
        </div>
        <div class="line_time_middle" :style="{height: (oneyearList.length /2) * 170 + 'px'}"> </div>
        <div class="line_time_top"></div>
        <div class="line_time_ke_right_f line_time_line">
          <div v-for="(item,index) in oneyearList" v-if="item.month % 2 == 1" class="line_time_ke line_time_ke_right">
            <div class="line_time_items">
              <div class="line_time_items_video"></div>
              <div class="line_time_items_content">
                <div class="line_time_items_content_time"><span class="months">{{item.month}}月</span> <span class="years">{{item.year}}</span> </div>
                <div class="line_time_items_content_info"> {{item.content}}</div>
              </div>
              <div class="line_time_items_content_num line_time_items_content_num_bottom" >{{item.month}}</div>
              <div class="line_time_items_cir line_time_items_cir_rig"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prostyle1',
  props: {},
  components: {

  },
  data () {
    return {
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
      ].reverse(),
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
