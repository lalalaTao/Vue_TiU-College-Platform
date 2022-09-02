<template>
  <div class="spe_source_main">
    <div class="spe_source_main_content">
      <div @click="toDetail(item)" v-for="(item,index) in page.list" class="main_content_arg"
           :style="{marginRight: (index + 1) % 5 !== 0?'':''}">
        <div class="main_content_img">
          <img :src="item.coverImg" @error="headError" alt="">
        </div>
        <div class="main_content_info">
          <div class="course_type_container" :style="{background : getCourseTypeStyle(item.type).background}">
            <span class="course_type_span" :style="{color : getCourseTypeStyle(item.type).color}">{{getCourseTypeStyle(item.type).title}}</span>
          </div>
          <div :title="contentInfo" class="main_content_info_top">
            {{item.skillResourcesName==null ? "未录入":item.skillResourcesName}}
          </div>
          <div class="main_content_info_bottom">
            <div class="main_content_info_bottom_left">
              <div class="main_content_info_bottom_left_1">{{item.facultyName}}</div>
              <div class="shu">|</div>
              <div class="main_content_info_bottom_left_2">{{item.specialtyName}}</div>
            </div>
            <div class="main_content_info_bottom_right"><i class="el-icon-view"></i> {{item.numberOfVisitors}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page">
      <el-pagination
        background
        next-text="下一页"
        prev-text="上一页"
        layout="prev, pager, next"
        :page-size="page.pageSize"
        @current-change="tocurrentpage"
        @prev-text="prevpage"
        @next-text="nextpage"
        :total="page.totalCount">
      </el-pagination>
    </div>

    <DetailTable></DetailTable>
  </div>
</template>

<script>
  import Detail from "../../common/Detail";
  import DetailTable from "../../common/DetailTable";

  export default {
    name: "SpeContent",
    components: {
      Detail,
      DetailTable
    },
    props: {
      page: {
        type: Object,
        default: {},
        required: true
      },
    },
    data() {

      return {

        courseTypeList: [
          {type: 2, title: "专业资源库", background: "#d8f8f4", color: "#1db3a0"},
          {type: 3, title: "仿真资源库", background: "#e1f2fa", color: "#2ea1db"},
          {type: 4, title: "视频公开课", background: "#dff0de", color: "#38af2c"},
          {type: 5, title: "技能考核管理", background: "#dff0de", color: "#38af2c"}   // 添加技能考核管理模块
        ],
        //titleName:'专业资源库',
        contentInfo: 'Java架构培优 实战基础训练题',
        school: '计算机工程学院',//学校
        subject: '信息工程',//专业
        viewnum: '1',//查看次数
        imghost: this.$imghost,

        // totalPage: 1, // 统共页数，默认为1
        currentPage: this.page.currPage, //当前页数 ，默认为1
        pageSize: this.page.pageSize, // 每页显示数量
        currentPageData: [], //当前页显示内容
        headPage: 1
      }
    },
    mounted() {
      //console.log(this.page)
    },
    methods: {
      getCourseTypeStyle(type) {
        return this.courseTypeList.find(item => item.type === type);
      },
      headError(e) {
        e.target.src = this.$imghost + '/index/test.png'
      },
      //跳转当前页
      tocurrentpage(val) {
        this.currentPage = val;
        //调用查询
        this.$emit("pagechange", val)
      },
      prevpage(val) {
        if (this.currentPage > 1) {
          this.currentPage = this.currentPage - 1;
        }
        this.$emit("pagechange", this.currentPage)
      },
      nextpage(val) {
        if (this.currentPage < page.totalCount || this.currentPage == page.totalCount) {
          this.currentPage = this.currentPage + 1;
        }
        this.$emit("pagechange", this.currentPage)
      },
      //详情页
      toDetail(args) {
        this.$emit("toDetail", args)
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/spespurce/specontent/specontent.css";
</style>
