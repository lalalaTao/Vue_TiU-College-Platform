<template>
  <div class="skill_main">
    <div class="skill_banner">
      <Banner  :height="'3.063rem'" :list="bannerlist"></Banner>
    </div>
    <div class="skill_search">
      <el-select  v-model="value" placeholder="全部分类">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>

      <el-input class="search_input" v-model="input" placeholder="请输入内容"></el-input>
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
import Check from "./check/Check";
import SkillContent from "./content/SkillContent";
import {listAllHyskillassessmenttype,listHyskillresources} from "../../api/modules/skill/skill";
import API from '@/api'

import Detail from "../common/Detail";
export default {
  name: 'Skill',
  props: {},
  components: {
    Banner,
    Check,
    SkillContent,
    Detail
  },
  data () {
    return {
      input3: '',
      select: '',
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
      input: '',
      sourceObj:{
        "skillAssessmentTypeId": null,
        "facultyId": null,
        "specialtyId": null,
        "name": "",
        "page": 1,
        "limit": 15
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
    this.listAllHyskillassessmenttype();//技能考核类型
    this.listHyskillresources(this.sourceObj);//资源
  },
  methods: {
    async listAllHyskillassessmenttype(){
      const {data} = await API.skill.listAllHyskillassessmenttype({})
      this.options = data.page
    },
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
    //获取资源数据
    async listHyskillresources(val){
      const {data} = await API.skill.listHyskillresources(val)
      console.log(data.page)
      this.page = data.page
    },
    //页数切换
    pagechange(page){
      this.sourceObj.page = page;
      this.listHyskillresources(this.sourceObj)
    },
    //子页面调用方法
    toDetail(args){
      this.args = args
      this.dialogVisible = true
    },
    closedig(){
      this.dialogVisible = false
    },
  },

}
</script>

<style scoped>
@import "../../assets/css/skill/skill.css";


::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #78b4b4;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background: #ededed;
}
</style>
