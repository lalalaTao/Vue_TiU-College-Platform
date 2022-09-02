<template>
  <div class="spe_source_introduction_main">
    <div class="source_Image_container">
      <div class="source_course_image_container">
        <div class="source_course_image" v-if="courseInfo.courseVideoUrl !=null && courseInfo.courseVideoUrl != ''">
          <common-video :src="getCourseeWebUrl(courseInfo.courseVideoUrl)" :controls="false" :auto-play="false"/>
        </div>
        <img v-else class="source_course_image" :src="imageUrl(courseInfo.coverImg)" @error="headError">
      </div>
    </div>
    <div class="source_introduction_container">
      <div class="source_introduction_content">
        <div class="introduction_and_collected">
          <div class="source_course_name">{{courseInfo.name}}</div>
          <div class="collected_container">
            <el-button class="collected_icon_btn"
                       :style="{backgroundImage:'url('+(courseInfo.isCollected?collected:notCollected)+')' }"
                       @click="collectCourse(courseInfo.id,courseInfo.isCollected)"/>
            <span class="collected_text">{{courseInfo.isCollected?'已':'未'}}收藏</span>
          </div>
        </div>
        <div class="faculty_specialty_nature_hour_container">
          <div class="faculty_specialty_container">
            <span class="faculty_text">{{courseInfo.facultyName}}</span>
            <span class="division_style"></span>
            <span class="specialty_text">{{courseInfo.specialtyName}}</span>
          </div>
          <span class="nature_text">课程性质：{{getCourseNatureByType(courseInfo)}}</span>
          <span class="hour_text">学时：{{courseInfo.courseHour}}</span>
        </div>
        <div class="visitor_container">
          <i class="el-icon-view" style="color: #bcbcbc;"></i>
          <span class="visitor_text">{{courseInfo.numberOfVisitors}}</span>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonVideo from "../../common/CommonVideo";
  import { isURL } from "../../../utils/validate";
  import API from "@/api";
  export default {
    name: "SpeSourceIntroduction",
    components:{
      CommonVideo
    },
    props: {
      courseInfo: {
        type: Object,
        default: null,
        required: true
      }
    },
    data() {
      return {
        courseNatureList: [
          {type: 1, title: '公共必修课'},
          {type: 2, title: '专业必修课'},
          {type: 3, title: '限定选修课'},
          {type: 4, title: '专业选修课'},
          {type: 5, title: '公共选修课'}
        ],
        collected: this.$imghost+ "/spesource/collected.png",
        notCollected: this.$imghost+ "/spesource/not_collected.png",
        courseVideoUrl: null,
        skillResourceType: this.$parent.skillResourceType,
      }
    },
    methods: {
      getCourseeWebUrl(url){
        return API.common.getUrl(url);
      },
      imageUrl(url){
        const imgUrl = this.$imghost + url;
        return isURL(imgUrl)?imgUrl:"";
      },
      headError(e) {
        e.target.src = this.$imghost + '/index/test.png'
      },
      getCourseNatureByType() {
        const courseNature = this.courseNatureList.find(item => item.type === this.courseInfo.courseNature);
        return courseNature?(courseNature.title || "无"):"";
      },
      async collectCourse(courseId,val){
        //this.courseInfo.isCollected = !val;
        const params = { "skillResourcesId": courseId };
        const { data:{code,msg} } = val? await API.spesource.cancelcCurseCollection(params):await API.spesource.collectSkillResource(params);
        if(code == 0){
          this.courseInfo.isCollected = !val;
          this.$message.success((!val?"收藏":"取消")+"成功")
        }else {
          this.$message.error(msg);
        }
      },
      jump_edit() {
        //1：进入专业-新增；2：课程列表-新增、3：课程列表-编辑、4：进入课程-编辑
        // this.$router.push({
        //   path: '/course_edit',
        //   query: {paramCourseId: this.paramCourseId, zyid: this.courseInfo.specialtyId, fromType: 4}
        // })
      },
      jump_study() {//立即学习
        // let routeData = this.$router.resolve({
        //   path: '/course_study',
        //   query: {
        //     specialtyId: this.courseInfo.specialtyId,
        //     paramCourseId: this.paramCourseId,
        //     dirId: 8,
        //     nodeName: '环境搭建'
        //   }
        // });
        // window.open(routeData.href, '_blank');
      },
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/spespurce/spesourceintroduction.css";
</style>
