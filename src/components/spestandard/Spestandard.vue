<template>
  <div class="skill_main">
    <div class="skill_banner">
      <Banner  :height="'3.063rem'" :list="bannerlist"></Banner>
    </div>
    <div class="skill_search">
      <el-input class="search_input" v-model="input1" placeholder="请输入资源名称"></el-input>
      <el-button class="search_button" @click="getLibListByName()" icon="el-icon-search">搜索</el-button>
    </div>

    <div class="spe_content">
      <div class="spe_content_left">
        <el-menu
          unique-opened
          default-active="1-0"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          active-text-color="#24C1AB"
          :default-openeds="open_list">
          <el-submenu v-for="(item,index) in MenuList" :key="index" :index="(index+'')">
            <template slot="title">
              <!--<i class="el-icon-location"></i>-->
              <img class="img1" :src="$imghost+'/Spestandard/imgOne.png'"/>
              <span style="font-size: 16px;font-family:PingFang SC,PingFang SC-Medium;color: #282828;font-weight: 500;line-height: 48px;margin-left: 14px;">{{item.name}}</span>
            </template>
            <!--二级目录显示-->
            <el-menu-item-group   v-for="(item_s,index_s) in item.childList" :key="index_s" :index="(index_s+'')" >
              <el-menu-item  :default-openeds="['0']" :index="(index + index_s)" v-on:click="getLibListById(item_s.id)" style="font-size: 15px;font-family: PingFang SC, PingFang SC-Medium;
font-weight: 500;text-align: left;margin-left: 13px;">{{item_s.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <!--标准文件展示-->
      <div class="lib_content_mid_right" style="width:1124px;height:701px;margin-left:14px;margin-top:18px;float:left;background:rgba(255,255,255,1);
border-radius:4px;position: relative;">
        <div class="lib_content_mid_content" v-bind:style="lib_flag==0 ? 'display:block' : 'display:none'">
          <ul>
            <li v-for="(item,index) in LibList" :key="index" >
              <span class="bq pagination_left">{{item.resourceStandardName}}</span>
              <a @mouseover="hover_in($event)" @mouseout="hover_out($event)">
                <!--<i v-bind:class="item.flagNew==0 ? 'pagination_icon' : 'pagination_icon_new'" ></i>-->
                <span class="pagination_mid" >{{item.fileName}}</span>
              </a>
              <span class="pagination_right">{{item.createTime}}</span>
              <span class="pagination_right_down" style="cursor:pointer" @click="viewer(item)"><img class="img2" :src="$imghost+'/Spestandard/imgTwo.png'"/>下载</span>
            </li>
          </ul>
        </div>
        <div class="lib_page" style="cursor:pointer" v-bind:style="lib_flag!=0 ? 'display:none' : 'display:block'">
          <el-pagination
            class="pageView"
            background
            layout="prev, pager, next"
            :page-size='10'
            :total="totalCount"
            @current-change="handleCurrentChange" >
          </el-pagination>
        </div>
        <div class="no_resource" v-bind:style="lib_flag==0 ? 'display:none' : 'display:block'"><img class="image3" :src="$imghost+'/Spestandard/imgThree.png'"/></div>
        <span class="no_resource2" v-bind:style="lib_flag==0 ? 'display:none' : 'display:block'">暂无资源</span>
      </div>

    </div>
  </div>
</template>

<script>
import Banner from "../common/Banner";
import API from '@/api'


export default {
name: 'spestandard',
props: {},
  components: {
    Banner
  },
  data () {
    return {
      MenuList:[],
      resourceStandardId:'',
      lib_flag:0,
      LibList:[],
      totalCount:0,
      pageSize:0,
      totalPage:0,
      currPage:0,
      input1:"",
      // image1: "static/tuImg/imgOne.png",
      // image2: "static/tuImg/imgTwo.png",
      // image3: "static/tuImg/imgThree.png",
      open_list:['0'],
      bannerlist:[
        {
          urlImg:this.$imghost + '/banner/detail_banner1.png'
        },
        {
          urlImg:this.$imghost + '/banner/detail_banner2.png'
        }
      ],
      input: '',
    }
  },
  computed: {

  },
  watch: {

  },
  created(){ //created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
    this.getMenuList()//获取左侧菜单导航列表

  },
  mounted() {
    let params={
      "resourceStandardId":'',
      "fileName":'',
    }
    this.resourceStandardId=''
    this.getLibList(params);//获取默认标准库文档列表
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },


    //鼠标hover移入事件
    hover_in(event){
      event.currentTarget.getElementsByClassName('pagination_mid')[0].style.color="#009A86"
    },
    //鼠标hover移出事件
    hover_out(event){
      event.currentTarget.getElementsByClassName('pagination_mid')[0].style.color="#323232"
      // console.log(event.currentTarget.getElementsByClassName('pagination_mid')[0].style.color)
    },
    // 下载文件
    viewer(url){
      console.log(url,"====")
      url = url.filePath;
      console.log(url.split('/')[url.split('/').length-1])
      API.common.downloadFile(url,url.split('/')[url.split('/').length-1])
    },

    //顶部查询
    getLibListByName(){
      // console.log(this.input1)
      let params={
        fileName:this.input1
      }
      this.getLibList(params)
    },

    //根据左侧菜单导航ID，获取右侧信息
    getLibListById(id){
      let params={
        resourceStandardId:id
      }
      this.resourceStandardId=id
      this.getLibList(params)
    },

    //获取标准库左侧菜单导航树
    getMenuList(){
      let params = {

      }
      API.spestandard.getMenuList(params).then(({data}) => {
        if (data && data.code === 0) {
          let menus = data.page
          menus.forEach(
            menu =>{
              let menuTemp ={
                'id':menu.id,
                'parentId':menu.parentId,
                'name':menu.name,
                'type':menu.type,
                'childList':menu.childList
              }
              this.MenuList.push(menuTemp)
            })
        } else {
          this.$message.error({message:data.msg,center: false,duration:2000});
        }
      })
    },

    //获取标准库查询值
    getLibList(params){
      params['limit']=10
      API.spestandard.getLibList(params).then(({data}) => {
        console.log(data)
        if (data && data.code === 0) {
          this.LibList=[];

          let liblists = data.page.list
          if(liblists.length==0){
            this.lib_flag=1
          }else{
            this.lib_flag=0
          }
          this.totalCount=data.page.totalCount
          this.pageSize=data.page.pageSize
          this.totalPage=data.page.totalPage
          this.currPage=data.page.currPage
          liblists.forEach(
            liblist =>{

              let libTemp ={
                'id':liblist.id,
                'resourceStandardName':liblist.resourceStandardName,
                'name':liblist.name,
                'fileName':liblist.fileName,
                'filePath':liblist.filePath,
                'createTime':liblist.createTime.split(' ')[0],
                'totalCount':liblist.totalCount,
                'pageSize':liblist.pageSize,
                'totalPage':liblist.totalPage,
                'currPage':liblist.currPage,
                'flagNew':liblist.flagNew,
              }
              this.LibList.push(libTemp)


            })
          console.log(this.LibList)
        } else {
          this.$message.error({message:data.msg,center: false,duration:2000});
        }
      })
    },
    //分页触发事件
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage) // 点击第几页
      let params={
        "page":this.currentPage,
        resourceStandardId:this.resourceStandardId
      }
      this.getLibList(params)
    }
  },
  filters: {

  }
}
</script>

<style scoped>
@import "../../assets/css/skill/skill.css";
@import "../../assets/css/Spestandard/spestandard.css";
.no_resource{
  text-align: center;
  margin-top:188px;
}
.no_resource2{
  font-size:14px;
  text-align: center;
  margin-top: -6px;
  font-family: PingFang SC, PingFang SC-Regular;
  margin-left: 7px;
  font-weight: 400;
  color: #393939;
}

</style>
