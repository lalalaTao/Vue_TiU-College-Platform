<template>
  <div class="spe_source_detail_main">
    <div class="spe_source_detail_sub_main">
      <!--位置导航-->
      <location-nav :location="location" :path="locationPath" :course-name="courseName" style="margin-top: 40px;">
        <img class="location_icon_style" :src="locationImage"/>
      </location-nav>

      <!--课程基本信息-->
      <spe-source-introduction :course-info="courseInfo">
        <template>
          <div class="show_e_book_btn" v-show="skillResourceType === 2" @click="jumpToStudyPage">
            <span class="show_e_book_btn_text">打开电子书</span>
          </div>
        </template>
      </spe-source-introduction>

      <div class="catalog_and_card_container">
        <div class="spe_course_catalog_info_container">
          <!--课程目录信息-->
          <spe-course-catalog-info :course-catalog-list="courseCatalogList" v-if="skillResourceType===1"/>
          <detail-e-book-catalogue :catalogue-tree-list="courseCatalogList" v-else/>
        </div>

        <div class="character_card_container">
          <!--课程负责人卡片-->
          <character-card title="课程负责人" :members="personCharge"/>

          <div class="team_container">
            <!--教师团队成员卡片-->
            <character-card title="教师团队" :members="members"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LocationNav from "../common/LocationNav/LocationNav";
  import SpeSourceIntroduction from "./DetailComponents/SpeSourceIntroduction";
  import SpeCourseCatalogInfo from "./DetailComponents/SpeCourseCatalogInfo";
  import DetailEBookCatalogue from "./DetailComponents/DetailEBookCatalogue";
  import CharacterCard from "./DetailComponents/CharacterCard";
  import API from '@/api';

  export default {
    name: "SpeSourceDetail",
    components: {
      LocationNav,
      SpeSourceIntroduction,
      SpeCourseCatalogInfo,
      CharacterCard,
      DetailEBookCatalogue
    },
    data() {
      return {
        locationImage: this.$imghost + "/spesource/location_image.png",
        location: "资源库",
        locationPath: "SpeSource",
        courseName: '',
        courseInfo: {},
        courseCatalogList: [],
        personCharge: [],
        members: [],
        skillResourceId: null,
        skillResourceType: null,
      }
    },
    activated() {
      const {skillResourceId} = this.$route.query;
      this.skillResourceId = skillResourceId;
      this.findSpeSourceDetail(this.skillResourceId);
      console.log("spe source detail page");
    },
    methods: {
      async findSpeSourceDetail(id) {
        const params = {skillResourceId: id};
        const {data: {code, msg, result}} = await API.spesource.findHySkillResourceDetailsById(params);
        if (code === 0) {
          const {name, createUserId, personCharge, headImg, teaIntroduction, members, courseCatalogues, typeSourceOneFile} = result;
          this.skillResourceType = typeSourceOneFile;
          this.courseInfo = result;
          this.courseName = name || '';
          this.courseCatalogList = courseCatalogues;
          this.personCharge = [{
            "id": createUserId,
            "name": personCharge,
            "headImage": headImg,
            "introduction": teaIntroduction
          }];
          this.members = [];
          for (let i = 0; i < members.length; i++) {
            let member = members[i];
            const {id, headImg, realName, teaIntroduction} = member;
            this.members.push({"id": id, "name": realName, "headImage": headImg, "introduction": teaIntroduction})
          }
        } else {
          this.$message.error(msg);
        }
      },
      jumpToStudyPage() {
        if (this.courseCatalogList.length <= 0) {
          return;
        }
        const {fileComAccessoryId} = this.courseCatalogList[0];
        const query = {
          skillResourceId: this.skillResourceId,
          skillResourceType: this.skillResourceType,  //1:组合资源，2：电子书
          id: fileComAccessoryId,
          index: 0
        };
        const newPage = this.$router.resolve({path: '/SpeSourceStudy', query: query});
        window.open(newPage.href, '_blank');
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/spespurce/spesourcedetail.css";
</style>
