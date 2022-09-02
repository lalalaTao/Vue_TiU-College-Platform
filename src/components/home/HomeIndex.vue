<template>
  <div class="main">
    <Banner :height="'3.75rem'" :list="bannerlist"></Banner>
    <div class="home_content">
      <Contentlist @toDetail="toDetail" v-for="(item,index) in dataList" :title="item.title" :key="index"></Contentlist>
    </div>
    <Detail
      :dialogVisible="dialogVisible"
      @closedig="closedig"
    ></Detail>
  </div>

</template>

<script>
import Contentlist from "./contentlist/Contentlist";
import Banner from "../common/Banner";
import Detail from "../common/Detail";
import {listSettingBanner} from "../../api/modules/homeindex/homeindex";
import API from '@/api'
export default {
name: 'HomeIndex',
  props: {

  },
  components: {
    Contentlist,
    Banner,
    Detail
  },
  data () {
    return {
      dialogVisible: false,
      dataList:[
        {title:'专业资源库'},
        {title:'仿真资源库'},
        {title:'视频公开课'},
        {title:'技能考核'}
      ],
      bannerlist:[
        {
          urlImg:this.$imghost + '/banner/banner1.png'
        },
        {
          urlImg:this.$imghost + '/banner/banner2.png'
        }
      ]
    }
  },
  computed: {

  },
  created() {
    this.listSettingBanner();//获取banner数据
  },
  methods: {
    //子页面调用方法
    toDetail(){
      this.dialogVisible = true
    },
    closedig(){
      this.dialogVisible = false
    },
    //获取banner图
    async listSettingBanner(){
      let params = {
        position:1,
        limit:999,
      }
      const  { data } =  await API.homeindex.listSettingBanner(params)
      if(data.page.list.length > 0 && data.page.list[0].hasOwnProperty('urlImg')){
        this.bannerlist =  data.page.list
      }
    }
  },
}
</script>

<style scoped>
@import "../../assets/css/home/home.css";

</style>
