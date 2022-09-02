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

    <div class="line_time2">
      <div class="line_time_heng">
          <div class="agrs_father" style="margin-left: 123px" :style="{width: 224 * (oneyearList.length /2) + 'px'}" >
            <div class="line_time_heng_args" v-for="(item,index) in oneyearList" v-if="item.month % 2 == 1">
              <div class="line_time_heng_args_point"></div>
              <div class="line_time_heng_args_direc">
                <i class="el-icon-d-arrow-left" style="font-size: 20px;"></i>
              </div>
              <div class="line_time_heng_args_content">
                <div class="line_time_heng_args_content_month">{{ item.month }}月</div>
                <div>{{item.content}}</div>
                <div class="line_time_heng_args_content_video" ></div>
              </div>
            </div>
          </div>
          <div class="line_time_heng_middle" :style="{width: 224 * (oneyearList.length /2 +1) + 'px'}">
            <div class="line_time_heng_middle_year">{{year}} </div>
          </div>
          <div class="agrs_father" style="margin-left: 236px" :style="{width: 224 * (oneyearList.length /2) + 'px'}">
            <div class="line_time_heng_args line_time_heng_args_bottom" v-for="(item,index) in oneyearList" v-if="item.month % 2 == 0">
              <div class="line_time_heng_args_point_bottom"></div>
              <div class="line_time_heng_args_direc_bottom">
                <i class="el-icon-d-arrow-left" style="font-size: 20px;"></i>
              </div>
                <div class="line_time_heng_args_content">
                  <div class="line_time_heng_args_content_month">{{item.month}}月</div>
                  <div>{{item.content}}</div>
                  <div style="margin-bottom: 5px" class="line_time_heng_args_content_video" ></div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prostyle2',
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
  height: 6px;
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
