<template>
  <div class="skillcontent_main">
    <div class="skillcontent_main_content">
      <div @click="toDetail(item)"  v-for="(item,index) in page.list" class="main_content_arg">
        <div class="main_content_logos">
          精品
        </div>
        <div class="main_content_img">
          <img  :src="item.coverImg"  @error="headError" alt="">
        </div>
        <div class="flag">1+x考证（初级）</div>
        <div class="main_content_info">

          <div :title="contentInfo" class="main_content_info_top">
            {{item.name==null ? "未录入":item.name}}
          </div>
          <div class="main_content_info_bottom">
            <div class="main_content_info_bottom_left">
              <div class="main_content_info_bottom_left_1">{{item.facultyName}}</div>
              <div class="shu" >|</div>
              <div class="main_content_info_bottom_left_2">{{item.specialtyName}}</div>
            </div>
            <div class="main_content_info_bottom_right"><i class="el-icon-view"></i> {{item.numberOfVisitors}}</div>
          </div>
        </div>
      </div>
    </div>
    <DetailTable></DetailTable>
  </div>
</template>

<script>
import Detail from "../common/Detail";
import DetailTable from "../common/DetailTable";


export default {
  name: "Content",
  components:{
    Detail,
    DetailTable
  },
  props:["page"],
  data(){
    return{

      //titleName:'专业资源库',
      contentInfo:'Java架构培优 实战基础训练题',
      school:'计算机工程学院',//学校
      subject:'信息工程',//专业
      viewnum:'1',//查看次数
      imghost:this.$imghost,

      // totalPage: 1, // 统共页数，默认为1
      currentPage: 1, //当前页数 ，默认为1
      pageSize: 15, // 每页显示数量
      currentPageData: [], //当前页显示内容
      headPage: 1
    }
  },
  mounted() {
    //console.log(this.page)
  },
  methods:{
    headError(e){
      e.target.src = this.$imghost + '/index/test.png'
    },
    //跳转当前页
    tocurrentpage(val){
      this.currentPage = val;
      //调用查询
      this.$emit("pagechange",val)
    },
    prevpage(val){
      if(this.currentPage >1 ){
        this.currentPage = this.currentPage -1;
      }
      this.$emit("pagechange",this.currentPage)
    },
    nextpage(val){
      if(this.currentPage < page.totalCount || this.currentPage == page.totalCount ){
        this.currentPage = this.currentPage + 1;
      }
      this.$emit("pagechange",this.currentPage)
    },
    //详情页
    toDetail(args){
      this.$emit("toDetail",args)
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/skill/skillcontent/skillcontent.css";
@import "../../assets/css/home/contentlist/ContentList.css";
</style>
