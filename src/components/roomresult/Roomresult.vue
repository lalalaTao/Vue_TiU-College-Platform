<template>
    <div class="roomresult">
      <HeadNewPro></HeadNewPro>
      <div class="skill_banner">
        <Banner  :height="'3.063rem'" :list="bannerlist"></Banner>
      </div>
      <div class="roomresult_first">
        <div class="roomresult_first_title">计划方案</div>

        <div class="swiper-container swiper2" >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide lunbodiv"
              :list="list"
              v-for="item in list"
            >
              <div class="lunbodiv_to">
                <div class="lunbodiv_to_top">
                  <div style="font-size: 0.183rem">
                    {{item.title}}
                  <div style="width: 40.5px;
                    margin-top: 0.073rem;
                    height: 3px;
                    background: #00bda5;
                    border-radius: 1.5px;">
                  </div>
                  </div>

                  <div class="toleft">
                    <i class="el-icon-right"></i>
                  </div>

                </div>
                <div>

                </div>
                <div class="toleft_content">
                  为每位学员制定个性化带教方案，以满足学员的个性特色以及专业发展需求
                </div>
              </div>

          </div>

          </div>
          <div class="swiper-pagination"></div>
      </div>
      </div>

      <div class="roomresult_sec">
        <div class="roomresult_first_title">比赛详情</div>
        <div class="sec_detail">

        </div>
      </div>
      <div class="roomresult_thi">
        <div class="roomresult_first_title">成果成效</div>
        <div class="thi_detail">
          <div class="thi_img">

          </div>
          <div class="thi_content">
            随着电子商务名师工作室的开展，各学员的教学能力显示提升，校企已合作开展开发8个课程标准，3套数字化教材（内含校本教材、课件资源、教学设计、微课视频以及实操视频）以及3套实训手册及考核方案，且各学员在培育的三年时间里，综合教学素质显著提升。
          </div>
        </div>
      </div>

      <div class="roomresult_for">
        <div class="roomresult_first_title">课程资源</div>
          <Content @toDetail="toDetail" :page="page" ></Content>
      </div>
      <Detail
        :args="args"
        :dialogVisible="dialogVisible"
        @closedig="closedig"
      ></Detail>
    </div>
</template>

<script>
import Banner from "../common/Banner";
import SkillContent from "../skill/content/SkillContent";
import Detail from "../common/Detail";
import Content from "./Content";
import HeadNewPro from "../common/HeadNewPro";
import colContent from "../stuPersonalCore/content/colContent";



export default {
  name: 'Roomresult',
  props: {},
  components: {
    Banner,
    SkillContent,
    Detail,
    Content,
    HeadNewPro,
    colContent
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
      list:[
        {title:'带教方案'},
        {title:'学员发展规划'},
        {title:'活动计划'},
        {title:'工作总结'},
        {title:'带教方案'},
        {title:'学员发展规划'},
      ],
      page:{
        list:[{assessmentTypeLevelName: "初级",
          assessmentTypeName: "1+X考证",
          boutiqueFlag: 1,
          classId: null,
          className: null,
          coverImg: "图片9",
          createTime: null,
          createUserId: null,
          facultyId: null,
          facultyName: "机械工程学院",
          id: 152,
          levelId: null,
          modifiedTime: null,
          modifiedUserId: null,
          name: null,
          numberOfVisitors: 1,
          permissionOpen: null,
          permissionTeamTeaRw: null,
          personCharge: null,
          relationClassList: null,
          remark: null,
          rw: null,
          schoolId: null,
          skillAssessmentTypeId: null,
          skillAssessmentTypeLevelId: null,
          specialtyId: null,
          specialtyName: "机电一体化",
          statusDelete: null,
          statusRelease: null}]
      },
      dialogVisible: false,
      args:{

      },
    }
  },
  computed: {

  },
  watch: {

  },
  mounted() {
    /* eslint-disable no-new */
    setTimeout(()=>{
      this.swiper()//防止第一张图闪过
    },500)
  },
  created(){

  },
  methods: {
    swiper(){
      new Swiper('.swiper2', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
        spaceBetween : 36,
        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        autoplay: false,
        speed:4000,
        slidesPerView : 4,
        autoplayDisableOnInteraction: false,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      })
    },
    //子页面调用方法
    toDetail(args){
      this.args = args
      this.dialogVisible = true
    },
    closedig(){
      this.dialogVisible = false
    },

  }
}
</script>

<style scoped>
@import "../../assets/css/skill/skill.css";
@import "../../assets/css/roomresult/roomresult.css";
.swiper-container{
  position: relative;
  width: 100%;
  height: 100%;
  /*display: flex;*/
}
.swiper-pagination-bullet-active {
  background-color: #00BDA5
}
</style>

