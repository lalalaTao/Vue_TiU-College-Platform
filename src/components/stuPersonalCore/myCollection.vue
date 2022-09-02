<template>
  <div class="base_accountManage" >
    <div class="main" style="margin-top: 100px;margin-bottom: 50px">
      <!--左侧公共组件-->
      <pcMenu ></pcMenu>
      <!--右侧信息展示-->
      <div class="rt_main">
        <div class="rt_menu">
          <el-menu
            :default-active="accountMenuIndex"
            class="el-menu-demo"
            mode="horizontal"
            text-color="#949494"
          >
            <el-menu-item index="1" @click="changeCiStu(1)">专业资源
              <div class="right_mes" v-show="showMes1">

                <span class="font_up1">资源名称：</span>
                <el-input class="search_input" v-model="name" clearable placeholder="请输入"></el-input>
                <span class="font_up2">资源类型：</span>
                <el-select v-model="type" filterable placeholder="请选择"  clearable class="choiceInput">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-button type="primary" class="buttonDiv" @click="getListResourcesCollection(sourceObj)"><span class="searchFont" >搜索</span></el-button>


              </div>


            </el-menu-item>

            <el-menu-item index="2" @click="changeCiStu(2)">技能考核
              <div class="right_up" v-show="showMes">

              </div>
            </el-menu-item>

          </el-menu>
        </div>
      </div>

    </div>
    <colContent v-show="showMes1" :page="page" @pagechange="pagechange" @toDetail="toDetail"></colContent>

    <!--<div class="no_resource" v-bind:style="lib_flag==0 ? 'display:none' : 'display:block'"><img class="image3" :src="$imghost+'/Spestandard/imgThree.png'"/></div>-->
    <!--<span class="no_resource2" v-bind:style="lib_flag==0 ? 'display:none' : 'display:block'">暂无资源</span>-->
  </div>

</template>

<script>
  import API from '@/api'
  import pcMenu from "../personalCenter/pcMenu";
  import colContent from "./content/colContent";
  import Detail from "../common/Detail";
  export default {
    name: "myCollection",
    components: {
      pcMenu,
      colContent,
      Detail
    },
    data () {
      return{
        accountMenuIndex:"1",//资源类型标签  1、2、3、
        name:'', // 资源名称
        showMes1:true,
        showMes:false,
        /*下拉值  添加技能考核管理*/
        options: [{
          value: '2',
          label: '专业资源库'
        }, {
          value: '3',
          label: '仿真资源库'
        }, {
          value: '4',
          label: '视频公开课'
        }, {
          value: '5',
          label: '技能考核管理'
        }],
        value: '',
        /*下拉值*/
        sourceObj: {
          "name": '',
          "type": null,
          "page": 1,
          "limit": 8
        },
        page: {},
        type:null,
        lib_flag:1,
      }
    },

    watch: {
      name(val) {
        this.sourceObj.name = val;

        // validate.validate.isAuth()
      },
      type(val) {
        this.sourceObj.type = val;

        // validate.validate.isAuth()
      },
    },

    created(){
      this.getListResourcesCollection(this.sourceObj);
      // console.log("oooo",this.options[0]);
    },
    mounted(){
      let params={
        "name":'',
        "type":null,
      };
      this.getListResourcesCollection(params);

    },
    methods:{
      // 点击不同的按钮显示不同的页面
      changeCiStu(num){

        if(num==1){//个人资料
          this.showMes= false;
          this.showMes1 = true;

        }
        if (num==2){
          this.showMes1 = false;
          this.showMes = true;
        }
      },

      // 获取收藏列表数据
      getListResourcesCollection(params){
        params['limit']=8

        API.myCollection.getListResourcesCollection(params).then(({data}) => {
          this.page = data.page

          // console.log("ddddd",data);
        })
      },


      //页数切换
      pagechange(page) {
        // console.log("pppp",page);
        let params = {
          "page":page,
        }
        // this.sourceObj.page = page;
        this.getListResourcesCollection(params);

      },
      //子页面调用方法
      toDetail(args) {
        this.$router.push({path: '/SpeSourceDetail', query: {skillResourceId: args.id}});
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/stuPersonalCore/myCollection.css";
  .base_accountManage{
    width: 100%;
    height: 752px;
    position: relative;
    left: 2.57rem;
    /*display: flex;*/
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    justify-content: center;
  }
  .search_input>>>.el-input__inner{
    width: 200px;
    height: 28px;
    position: relative;
    right: 14px;
    top: -25px;
    border-radius: 4px;
    border-color: #F8F8F8;
  }
  /*选择框*/
  .choiceInput{
    position: relative;
    top: -25px;
    right: 284px;
    background: #ffffff;

  }
  /deep/.el-select .el-input__inner {
    height: 28px;
    border-color: #F8F8F8;
  }
  .buttonDiv{
    width: 72px;
    height: 28px;
    background: #00bda5;
    border-radius: 4px;
    position: relative;
    right: 268px;
    top: -25px;
  }
  .searchFont{
    position: relative;
    top: -17px;
    font-size: 14px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #ffffff;
    line-height: 36px;
  }

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
