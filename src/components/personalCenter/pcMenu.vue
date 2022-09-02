<template>

  <div class="main_pcMenu" >
      <div class="userInfo" style="width: 185px;">
        <div class="headImgDiv">
          <div class="headImg"></div>
        </div>
        <div class="realName">{{realName}}</div>
        <div class="userName">用户名：{{mobile}}</div>
        <div class="userInfoSplidLineDiv">
          <div class="userInfoSplidLine"></div>
        </div>
        <!--学生-->
      </div>
      <div class="leftMenu" style="width: 185px;" v-if="userType==1">
        <div class="leftMenuLine"  @click="changeCiStu(1)">
          <div class="leftMenuIcoDiv">
            <img v-if="checkIndex==1" :src="$imghost+'/personalCenter/pcMenu/12.png'"/>
            <img v-else :src="$imghost+'/personalCenter/pcMenu/11.png'" />
          </div>
          <div class="leftMenuIcoLink">课程中心</div>
        </div>

        <div class="leftMenuLine" @click="changeCiStu(2)">
          <div class="leftMenuIcoDiv" >
            <img v-if="checkIndex==2" :src="$imghost+'/accountManage/stuImg/sc2.png'" >
            <img  v-else :src="$imghost+'/accountManage/stuImg/sc1.png'">
          </div>
          <div class="leftMenuIcoLink">我的收藏</div>
        </div>

        <div  class="leftMenuLine" @click="changeCiStu(3)">
          <div class="leftMenuIcoDiv" >
            <img  v-if="checkIndex==3" :src="$imghost+'/personalCenter/pcMenu/52.png'" >
            <img v-else :src="$imghost+'/personalCenter/pcMenu/51.png'" >
          </div>
          <div class="leftMenuIcoLink">账号管理</div>
        </div>
      </div>
    <!--学生-->

      <div class="leftMenu" style="width: 185px;" v-if="userType==2">
        <div class="leftMenuLine"  @click="changeCi(1)">
          <div class="leftMenuIcoDiv">
            <img v-if="checkIndex==1" :src="$imghost+'/personalCenter/pcMenu/12.png'">
            <img v-else :src="$imghost+'/personalCenter/pcMenu/11.png'">
          </div>
          <div class="leftMenuIcoLink">专业资源管理</div>
        </div>
        <div class="leftMenuLine"  @click="changeCi(2)">
          <div class="leftMenuIcoDiv">
            <img v-if="checkIndex==2" :src="$imghost+'/personalCenter/pcMenu/22.png'" >
            <img v-else :src="$imghost+'/personalCenter/pcMenu/21.png'" >
          </div>
          <div class="leftMenuIcoLink">技能考核管理</div>
          
        </div>
        <div class="leftMenuLine" @click="changeCi(3)">
          <div class="leftMenuIcoDiv">
            <img v-if="checkIndex==3" :src="$imghost+'/personalCenter/pcMenu/32.png'" >
            <img v-else :src="$imghost+'/personalCenter/pcMenu/31.png'" >
          </div>
          <div class="leftMenuIcoLink">项目管理</div>
        </div>
        <div class="leftMenuLine" @click="changeCi(4)">
          <div class="leftMenuIcoDiv">
            <img v-if="checkIndex==4" :src="$imghost+'/personalCenter/pcMenu/42.png'" >
            <img v-else :src="$imghost+'/personalCenter/pcMenu/41.png'" >
          </div>
          <div class="leftMenuIcoLink">教学空间</div>
        </div>
        <div class="leftMenuLine" @click="changeCi(5)">
          <div class="leftMenuIcoDiv">
            <img v-if="checkIndex==5" :src="$imghost+'/personalCenter/pcMenu/52.png'" >
            <img v-else :src="$imghost+'/personalCenter/pcMenu/51.png'" >
          </div>
          <div class="leftMenuIcoLink">首页导航设置</div>
        </div>
        <div class="leftMenuLine" @click="changeCi(6)">
          <div class="leftMenuIcoDiv">
            <img v-if="checkIndex==6" :src="$imghost+'/personalCenter/pcMenu/62.png'" >
            <img v-else :src="$imghost+'/personalCenter/pcMenu/61.png'" >
          </div>
          <div class="leftMenuIcoLink">账号管理</div>
        </div>
      </div>
  </div>


</template>

<script>
  import API from '@/api'
  export default {
    name: 'pcMenu',
    props: {},
    components: {
    },
    data () {
      return {
        checkIndex:3,
        userType:0,//（1学生、2老师）
        realName:'',
        mobile:'',

      }
    },
    computed: {

    },
    watch: {

    },
    created() {//created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
      this.getPersonalMes();
      this.$router.push({path:'/accountManage'});
    },
    mounted() {//mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。


    },
    methods: {
      changeCi(num){
        this.checkIndex=num;
        if(num==1){//专业资源管理
          // this.$router.push({path:'/pcCourseSource'})
        }else if(num==2){//技能考核管理
          // this.$router.push({path:'/Spestandard'})
        }
      },
      changeCiStu(num){
        console.log(num,"===========");
        this.checkIndex=num;
        if(num==1){//专业资源管理
          // this.$router.push({path:'/pcCourseSource'})
        }else if(num==2){//我的收藏
          this.$router.push({path:'/myCollection'});
        }else if(num==3){//账号管理
          this.$router.push({path:'/accountManage'});
        }
      },

      // 获取个人信息
      getPersonalMes(){
        let params = {

        }
        API.accountManage.getPersonalMes(params).then(({data}) => {
          if (data && data.code === 0) {
            let accountObj = data.page;
            console.log(accountObj);
            this.userType = accountObj.userType;

            if (accountObj.userType == 1) { // 学生
              this.realName = accountObj.realName + '学生';
            }else if (accountObj.userType == 2) { // 老师
              this.realName = accountObj.realName + '老师';
            }

            this.mobile = accountObj.mobile;
          }else {
            this.$message.error({message:data.msg,center: false,duration:2000});
          }
        })
      }
    },
  }
</script>

<style scoped>
  @import "../../assets/css/personalCenter/pcMenu.css";
</style>
