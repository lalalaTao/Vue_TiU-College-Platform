<template>
  <div class="skill_main" style="position: relative">
    <HeadNewPro></HeadNewPro>
    <div class="skill_banner">
      <Banner  :height="'3.063rem'" :list="bannerlist"></Banner>
    </div>

    <div class="room_dis">
      <div class="room_dis_img"></div>
      <div class="room_dis_img_bottom">
        <div class="room_dis_title">
          金莉萍电子商务名师培育工作室
        </div>
        <div class="room_dis_content">
          项目介绍：采用首轮名师培育工作室项目形成的企业导师一对一带教工作机制和“定期总结-反馈延伸-整合提升”工作模式，秉承“共学 同做 乐享”的工作室理念，运用丰富的企业导师和专家资源”搭平台、建桥梁”，开展一系列线上线下的专题讲座、专业研讨、联合竞赛，深化校企合作，打造电子商务领域的高素质师资队伍、共建人才培养机制。
        </div>
      </div>
    </div>

    <div class="room_result">
      <div class="room_result_left">
        <el-tabs v-model="activeName" >
          <el-tab-pane label="工作室活动" name="first">
            <el-timeline style="margin-left: 20px">
              <el-timeline-item
                :color="showactive == i ?'#0bbd87' : ''"
                v-for="i in 10"
                :key="i"
                timestamp="2018/4/12"
                :hide-timestamp="true">
                <div @click="showdetail(i)"  class="room_result_title">2020年3月 职业教育教学能力云上阅读交流</div>
                <div v-show="showactive == i"
                     @click="changebg(i,k)"
                     :class="active == (i+'-'+k) ? 'active':''"
                     class="room_result_content"
                     v-for="k in 4"
                     :key="k">
                  <div class="room_result_content_left">
                    <div class="hdcl">活动材料</div>
                    <div class="hdch">活动策划</div>
                    <div>云上阅读活动交流策划案.pdf</div>
                  </div>
                  <div class="room_result_content_right"> <i class="el-icon-download" style=" color:#00BDA5"></i> 下载</div>
                </div>
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
          <el-tab-pane label="工作室成果" name="second">
<!--            <RoomResult></RoomResult>-->
            <RoomResult2></RoomResult2>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="room_result_right">
        <div class="room_result_right_top">
          <div class="room_result_right_top_content">
            <div class="room_result_right_top_content_title">
              项目负责人
            </div>
            <div class="tx">
              <div class="tx_left"></div>
              <div class="tx_name">
                郁达夫
              </div>
            </div>
            <div class="tx_content" :class="showmore? 'tx_show_less':'tx_show_more'">
              市政工程专业教师，讲师，上海市“星光计划”第四届中等职业学校技能大赛优秀指导教师，任教《建筑工程测量》
              市政工程专业教师，讲师，上海市“星光计划”第四届中等职业学校技能大赛优秀指导教师，任教《建筑工程测量》
              市政工程专业教师，讲师，上海市“星光计划”第四届中等职业学校技能大赛优秀指导教师，任教《建筑工程测量》
            </div>
            <div class="tx_zhan" @click="showmore = !showmore">
              <div class="showmore" v-text="showmore ?'展开':'收起'">
              </div>
              <i  :class="showmore ? 'el-icon-arrow-down':'el-icon-arrow-up' "> </i>
            </div>

          </div>
        </div>
        <div class="room_result_right_bottom">
          <div class="room_result_right_top_content">
            <div class="room_result_right_top_content_title">
              工作室成员
            </div>
            <div v-for="i in 5">
              <div class="tx">
                <div class="tx_left"></div>
                <div class="tx_name">
                  吴磊
                </div>
              </div>
              <div class="tx_content" :class="pshowactive == i ? 'tx_show_more':'tx_show_less'">
                市政工程专业教师，讲师，上海市“星光计划”第四届中等职业学校技能大赛优秀指导教师，任教《建筑工程测量》
                市政工程专业教师，讲师，上海市“星光计划”第四届中等职业学校技能大赛优秀指导教师，任教《建筑工程测量》
                市政工程专业教师，讲师，上海市“星光计划”第四届中等职业学校技能大赛优秀指导教师，任教《建筑工程测量》
              </div>
              <div class="tx_zhan" @click="showpactive(i)">
                <div class="showmore" v-text="pshowactive == i ?'收起':'展开'">
                </div>
                <i  :class="pshowactive == i  ? 'el-icon-arrow-up':'el-icon-arrow-down' "> </i>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../common/Banner";
import HeadNewPro from "../../common/HeadNewPro";
import RoomResult from "./RoomResult";
import RoomResult2 from "./RoomResult2";


export default {
  name: 'TeacherRoom',
  props: {},
  components: {
    Banner,
    HeadNewPro,
    RoomResult,
    RoomResult2,
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
      activeName: 'first',
      active:null,
      showactive:1,
      oldnum: null,
      showmore:true,
      showmore2:true,
      pshowactive:0,
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    changebg(i,k){
      this.active = i + '-' + k
    },
    showdetail(val){
      this.oldnum = this.showactive
      this.showactive = val
    },
    showpactive(i){
      console.log(i)
      this.showmore2 = this.pshowactive
      if( this.showmore2 == i){
        this.pshowactive = 0
      }else {
        this.pshowactive = i
      }

    }

  },
}
</script>

<style scoped>
@import "../../../assets/css/skill/skill.css";
@import "../../../assets/css/Spestandard/spestandard.css";
@import "../../../assets/css/Spestandard/newpro/newpro.css";
@import "../../../assets/css/Spestandard/teacherroom/teacherroom.css";
*{
  font-size: 12px;
}

</style>
<style>
* {
margin: 0;
}
</style>
