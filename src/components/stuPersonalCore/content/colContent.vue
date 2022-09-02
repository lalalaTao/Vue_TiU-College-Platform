<template>
  <div class="spe_source_main">
    <div class="spe_source_main_content">
      <div class="main_content_arg" v-for="(item,index) in page.list" :key="item" @click="toDetail(item)"
           :style="{marginRight: (index + 1) % 5 !== 0?'':''}">
        <div class="main_content_img">
          <img :src="item.coverImg" @error="headError" alt="">
        </div>
        <div class="main_content_info">
          <div class="course_type_container" :style="{background : getCourseTypeStyle(item.type).background}">
            <span class="course_type_span" :style="{color : getCourseTypeStyle(item.type).color}">{{getCourseTypeStyle(item.type).title}}</span>
          </div>
          <div :title="contentInfo" class="main_content_info_top">
            {{item.name==null ? "未录入":item.name}}
          </div>
          <div class="main_content_info_bottom">
            <div class="main_content_info_bottom_left">
              <div class="main_content_info_bottom_left_1">{{item.facultyName}}</div>
              <div span class="shu"></div>
              <div class="main_content_info_bottom_left_2">{{item.specialtyName}}</div>
            </div>

            <div class="main_content_info_bottom_right"><img class="seedIco" :src="$imghost+'/accountManage/stuImg/seedIco.png'"><span class="font_one">{{item.numberOfVisitors}}</span></div>
          </div>
        </div>

      </div>
    </div>


    <!--<div class="page" >-->
      <el-pagination
        background
        next-text="下一页"
        prev-text="上一页"
        layout="prev, pager, next"
        :page-size="8"
        @current-change="tocurrentpage"
        @prev-text="prevpage"
        @next-text="nextpage"
        :total="page.totalCount">
      </el-pagination>

    <DetailTable></DetailTable>
    <!--</div>-->
    <!--<div class="no_resource" v-bind:style="lib_flag==0 ? 'display:none' : 'display:block'"><img class="image3" :src="$imghost+'/Spestandard/imgThree.png'"/></div>-->
    <!--<span class="no_resource2" v-bind:style="lib_flag==0 ? 'display:none' : 'display:block'">暂无资源</span>-->
  </div>
</template>

<script>
  import Detail from "../../common/Detail";
  import DetailTable from "../../common/DetailTable";
  export default {
    name: "colContent",
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
          {type: 5, title: "技能考核管理", background: "#dff0df", color: "#38af2c"}  // 添加技能考核管理模块
        ],
        //titleName:'专业资源库',
        contentInfo: 'Java架构培优 实战基础训练题',
        school: '计算机工程学院',//学校
        subject: '信息工程',//专业
        viewnum: '1',//查看次数
        imghost: this.$imghost,

        // totalPage: 1, // 统共页数，默认为1
        currentPage: 0, //当前页数 ，默认为1
        pageSize: this.page.pageSize, // 每页显示数量
        currentPageData: [], //当前页显示内容
        headPage: 1,

      }
    },
    mounted() {
      // console.log(this.page,"我是page")
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
        this.$emit("pagechange", val);
        let listPage = this.page.list;
        if(listPage.length==0){
          this.lib_flag=1
        }else{
          this.lib_flag=0
        }
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
      },
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/stuPersonalCore/colContent.css";
  /deep/.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    width: 278px;
    height: 13px;
    font-size: 14px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    position: absolute;
    left: 882px;
    top: 506.1px;
  }
  /deep/.el-icon-view:before {
    content: "\E6CE";
    color: #ffffff;
    position: relative;
    top: 1px;
    /* width: 22%; */
    left: -6px;
  }
  .font_one{
    position: relative;
    left: 1px;
    top: 1px;
    /*left: -6px;*/

  }
  .seedIco{
    width: 14px;
    height: 12px;
    position: relative;
    top: 3px;
    left: -7px;
  }

</style>
