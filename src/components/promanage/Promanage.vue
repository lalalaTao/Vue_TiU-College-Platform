<template>
  <div class="skill_main">
    <div class="skill_banner">
      <Banner  :height="'3.063rem'" :list="bannerlist"></Banner>
    </div>
    <div class="skill_search">
      <el-input class="search_input" v-model="input" placeholder="请输入资源名称"></el-input>
      <el-button class="search_button" icon="el-icon-search">搜索</el-button>
    </div>

    <div class="skill_choose">
      <Check @school="school" @major="major"></Check>
    </div>
    <div class="skill_content">
      <SkillContent @toDetail="toDetail" :page="page" @pagechange="pagechange"></SkillContent>
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
import Check from "../skill/check/Check";
import SkillContent from "../skill/content/SkillContent";
import Detail from "../common/Detail";
import {listAllHyskillassessmenttype,listHyskillresources} from "../../api/modules/skill/skill";
import API from '@/api'
export default {
  name: 'Promanage',
  props: {},
  components: {
    Banner,
    Check,
    SkillContent,
    Detail
  },
  data () {
    return {
      input: '',
      bannerlist:[
        {
          urlImg:this.$imghost + '/banner/detail_banner1.png'
        },
        {
          urlImg:this.$imghost + '/banner/detail_banner2.png'
        }
      ],

      options: [],
      value: '',
      sourceObj:{
        "skillAssessmentTypeId": null,
        "facultyId": null,
        "specialtyId": null,
        "name": "",
        "page": 1,
        "limit": 10
      },
      page:{

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
  created() {
    this.listHyskillresources(this.sourceObj);//资源
  },
  methods: {
    //获取学院id
    school(val){
      this.sourceObj.facultyId = val;
      this.listHyskillresources(this.sourceObj);
    },
    //专业id
    major(val){
      this.sourceObj.specialtyId = val
      this.listHyskillresources(this.sourceObj);
    },

    //子页面调用方法
    toDetail(args){
      if(this.$route.name == "Promanage"){
        console.log(1)
        let routeUrl = this.$router.resolve({path: "/Newpro",})

        window.open(routeUrl.href, '_blank');
      }else{
        this.args = args
        this.dialogVisible = true
      }
    },
    closedig(){
      this.dialogVisible = false
    },

    //页数切换
    pagechange(page){
      this.sourceObj.page = page;
      this.listHyskillresources(this.sourceObj)
    },


    //获取资源数据    假数据
    async listHyskillresources(val){
      const {data} = await API.skill.listHyskillresources(val)
      console.log(data.page)
      this.page = data.page
    },
  },
}
</script>

<style scoped>
@import "../../assets/css/skill/skill.css";
@import "../../assets/css/Spestandard/spestandard.css";
</style>
