<template>
  <div class="skill_main">
    <div class="skill_banner">
      <Banner :height="'3.063rem'" :list="bannerlist"></Banner>
    </div>

    <div class="skill_search">
      <div class="skill_type_container">
        <span class="skill_type_btn" @click="selectType(item.type)" v-for="item in typeList">{{item.title}}</span>
      </div>
      <el-input class="search_input" v-model="skillResourcesName" clearable placeholder="请输入资源名称"></el-input>
      <el-button class="search_button" icon="el-icon-search" @click="listHyskillresources(sourceObj)">搜索</el-button>
    </div>

    <div class="skill_choose">
      <Check @school="school" @major="major"/>
    </div>
    <div class="skill_content">
      <spe-content @toDetail="toDetail" :page="page" @pagechange="pagechange"/>
    </div>
  </div>
</template>

<script>
  import Banner from "../common/Banner";
  import Check from "./check/Check";
  import SpeContent from "./content/SpeContent";
  import Detail from "../common/Detail";
  import API from '@/api'

  export default {
    name: 'SpeSource',
    props: {},
    components: {
      Banner,
      Check,
      SpeContent,
      Detail
    },
    data() {
      return {
        skillResourcesName: '',
        typeList: [
          {type: null, title: "全部"},
          {type: 2, title: "专业资源库"},
          {type: 3, title: "仿真资源库"},
          {type: 4, title: "视频公开课"},
          {type: 5, title: "技能考核管理"}  // 添加技能考核管理模块

        ],
        bannerlist: [
          {
            urlImg: this.$imghost + '/banner/detail_banner1.png'
          },
          {
            urlImg: this.$imghost + '/banner/detail_banner2.png'
          }
        ],

        options: [],
        value: '',
        sourceObj: {
          "facultyId": null,
          "specialtyId": null,
          "skillResourcesName": "",
          "type": null,
          "page": 1,
          "limit": 10
        },
        page: {},
        dialogVisible: false,
        args: {},
      }
    },
    computed: {},
    watch: {
      skillResourcesName(val) {
        this.sourceObj.skillResourcesName = val;
        validate.validate.isAuth()
      },
    },
    created() {
      this.listHyskillresources(this.sourceObj);//资源
    },
    methods: {

      //获取学院id
      school(val, id) {
        this.sourceObj.facultyId = id;
        this.listHyskillresources(this.sourceObj);
      },

      //专业id
      major(val, id) {
        this.sourceObj.specialtyId = id;
        this.listHyskillresources(this.sourceObj);
      },

      //子页面调用方法
      toDetail(args) {
        this.$router.push({path: '/SpeSourceDetail', query: {skillResourceId: args.id}});
      },
      closedig() {
        this.dialogVisible = false;
      },

      //页数切换
      pagechange(page) {
        this.sourceObj.page = page;
        this.listHyskillresources(this.sourceObj);
      },

      //获取资源数据  假数据
      async listHyskillresources(val) {
        const {data} = await API.spesource.listHyskillresources(val);
        this.page = data.page
      },

      selectType(type) {
        this.sourceObj.type = type;
        this.listHyskillresources(this.sourceObj);
      },
    },
  }
</script>

<style scoped>
  @import "../../assets/css/spespurce/spesource.css";
</style>
