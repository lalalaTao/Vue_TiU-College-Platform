<template>
  <div class="main">
      <div class="main_title">
        <div class="main_title_left">
          <div class="main_title_left_title">{{title}}</div>
          <div class="main_title_left_bgc"></div>
        </div>
        <div class="main_title_right">
          查看更多 <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="main_content">
        
        <!-- <div @click="toDetail(item)" v-for="item in 5" class="main_content_arg"> -->
        <div @click="toDetail(item)" v-for="(item, index) in 5" :key="index" class="main_content_arg">
          <div class="main_content_logos">
            精品
          </div>
          <div class="main_content_img">
            <img  :src="imghost + '/index/test.png'" alt="">
          </div>
          <div class="main_content_info">
            <div :title="contentInfo" class="main_content_info_top">
              {{contentInfo}}
            </div>
            <div class="main_content_info_bottom">
              <div class="main_content_info_bottom_left">
                <div class="main_content_info_bottom_left_1">{{school}}</div>
                <div class="shu">|</div>
                <div class="main_content_info_bottom_left_2">{{subject}}</div>
              </div>
              <div class="main_content_info_bottom_right"><i class="el-icon-view"></i> {{viewnum}}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Contentlist",
  props: ['title'],
  data(){
    return{
      //titleName:'专业资源库',
      contentInfo:'Java架构培优 实战基础训练题',
      school:'计算机工程学院',//学校
      subject:'信息工程',//专业
      viewnum:'1',//查看次数
      imghost:this.$imghost,
    }
  },
  created() {
  },
  methods:{
    //详情页
    toDetail(args){
      console.log(2)
      this.$emit("toDetail",{})
    }
  }
}
</script>

<style  scoped>
@import "../../../assets/css/home/contentlist/ContentList.css";
</style>
