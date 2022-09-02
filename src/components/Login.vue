<template>
<div id="ym" style="width:100% !important;height: 100% !important;min-height: 969px;">
  <div class="bg_login" id="bg_login" :style="{backgroundImage:'url(' + imghost + '/login/bg_login1.png' + ')' }">
    <div class="login_panel" style="">
      <div class="login_header" >教学提优-TiU Solution</div>
      <div ref="account" class="login_item" style="margin-top:22px;">
        <img  ref="account_img" :src="imghost+ '/login/account.png'" style="margin-left:6px;margin-top:11px;float:left;">
        <input placeholder="请输入您的账号" v-model="dataForm.username" style="float:left;width: 337px;padding: 15px;outline: none;font-size: 16px;" v-on:focus="changeToAccount" v-on:blur="changeOutAccount"></input>
      </div>
      <div ref="password" class="login_item" style="margin-top:22px;">
        <img ref="password_img" :src="imghost+ '/login/password.png'" style="margin-left:6px;margin-top:11px;float:left;">
        <input type="password" placeholder="请输入您的密码" v-model="dataForm.password" style="float:left;width: 337px;padding: 15px;outline: none;" v-on:focus="changeToPassword" v-on:blur="changeOutPassword"></input>
      </div>
      <div class="btn">
      </div>
      <el-button type="primary" class="submit_btn" v-on:click="login">登录</el-button>
      <div style="position:absolute;font-size: 17px;color: #f1f1f1;display: flex;margin-top: 130%;">
        <div style="font-size: 12px;">版权所有：红亚教育科技(上海)有限公司</div>
        <div style="margin-left: 15px;font-size: 12px;"><a style="color: #f1f1f1;" href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2020031101号-1</a></div>
      </div>
    </div>
    <div class="top1_left">

    </div>
  </div>

</div>


</template>
<script>
  import API from '@/api'
  import $ from 'jquery'
  //import BMap from 'BMap'
  export default {
    name: "Login1",
    data(){
      return{
        imghost:this.$imghost,
        dataForm: {
          role:'',
          username:'',
          password: '',
          loginType:1,

        },
        logoname:104,
        default_color:'#5753F5',
        account_src:'/static/lazyimg/account.png',
        password_src:'/static/lazyimg/password.png',
        seen:true,
        pwdType: 'password', // 密码类型
        openeye: '/static/lazyimg/eye_01.png', //闭眼睛
        nopeneye: '/static/lazyimg/eye_02.png', //睁眼睛
        screenWidth: document.body.clientWidth,
      }
    },
    mounted () {
    },
    watch: {
      screenWidth (val) {
        if(val<1670){
          document.getElementById("app").style.overflowX='scroll'

        }else{
          document.getElementById("app").style.overflowX='hidden'
        }
      }
    },
    methods:{
      jmpMana(type) {
        let url  = API.index.getUrl('')+"";
        this.tmpUrl = url.replace("info_college",'')+'distm/#/login';
        window.open(this.tmpUrl);
      },
      jumpreg(){
        this.$router.push('regiester')
      },
      checkForm: function () {
        if(this.dataForm.loginType === 1 && !this.dataForm.username){
          this.$message.error({message:'请输入账号!',center: false,duration:2000});
          return false;
        }
        if(this.dataForm.loginType === 1 && !this.dataForm.password){
          this.$message.error({message:'请输入密码!',center: false,duration:2000});
          return false;
        }
        return true;
      },
      changeToAccount:function(){
        // console.log('changeToAccount')
        this.$refs.account.style.borderBottom="1px solid #1A8CFE"
        //this.$refs.role_xiala.style.display="block"
        this.$refs.account_img.src=this.imghost +"/login/account_hover.png"

      },
      changeToRole:function(){
        // console.log('changeToAccount')
        this.$refs.role.style.borderBottom="1px solid #1A8CFE"
        //this.$refs.role_xiala.style.display="block"
        this.$refs.role_img.src="/static/login/role_hover.png"

      },
      changeToPassword:function(){

        this.$refs.password.style.borderBottom="1px solid #1A8CFE"

        this.$refs.password_img.src=this.imghost + "/login/password_hover.png"
      },
      changeOutAccount:function(){
        // console.log('changeOutAccount')
        this.$refs.account.style.borderBottom="1px solid #D4D4D4"

        this.$refs.account_img.src=this.imghost +"/login/account.png"

      },
      changeOutRole:function(){
        // console.log('changeOutAccount')
        this.$refs.role.style.borderBottom="1px solid #D4D4D4"

        this.$refs.role_img.src="/static/login/role.png"

      },
      changeOutPassword:function(){

        this.$refs.password.style.borderBottom="1px solid #D4D4D4"

        this.$refs.password_img.src=this.imghost +"/login/password.png"
      },
      changeType() {
        this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
        this.seen = !this.seen;//小眼睛的变化
      },
      hasPercent(str){
        if(str.indexOf('%')==-1){
          return str;
        }else {
          return this.hasPercent(decodeURIComponent(str))
        }
      },
      login(){
        if(this.checkForm()){
          let params = {
            'userName': this.dataForm.username,
            'pwd': this.dataForm.password,
          }
          this.$store.commit('logOut')
          API.common.Login1(params).then(({data}) => {
            //debugger
            if (data && data.code === 0) {

              let epDataStr=data.effectiveTime;//过期时间
              let now=new Date();//当前时间

              if(typeof(epDataStr)!='undefined' && epDataStr!=null && epDataStr!=''){
                epDataStr = new Date(epDataStr);
                console.log(epDataStr.getTime(),now.getTime(),(epDataStr.getTime()>now.getTime()))

                if(now.getTime() > epDataStr.getTime()){//如果当前时间，大于，过期时间，则无法登陆
                  this.$message.error("授权过期，请联系销售更新秘钥")
                  return;
                }

              }


              this.$store.commit('login',data)
              console.log("aaa",this.$store.state,data)
              let outTime = 60*60*24*30;//cookie 30天有效
              // this.$cookieStore.setCookie('code',this.$store.state.code,outTime);
              this.$cookieStore.setCookie('user_Name',this.$store.state.userName,9999999);
              this.$cookieStore.setCookie('role_Type',data.data.roleType,9999999);
              this.$cookieStore.setCookie('role_Name',encodeURIComponent(this.$store.state.roleName,9999999));
              this.$cookieStore.setCookie('user_Type',this.$store.state.userType,9999999);
              this.$cookieStore.setCookie('access_Token',this.$store.state.accessToken,9999999);
              this.$cookieStore.setCookie('mobile',this.$store.state.mobile,9999999);
              this.$cookieStore.setCookie('headImage',this.$store.state.headImage,9999999);
              this.$cookieStore.setCookie('questionManage',this.$store.state.questionManage,9999999)

              let access_Token = data.token
              localStorage.setItem('access_Token', access_Token);
              if(data.code === 0){
                this.$router.push({name:'HomeIndex'})
                this.$message({
                  message: '恭喜你，登录成功',
                  type: 'success'
                });
              }else{
                this.$message.error('登陆失败');
              }

            } else {
              this.$message.error({message:data.msg,center: false,duration:2000});
              this.dataForm.password ='';
              console.log("333")
            }

          })
        }
      },
    }

  }
</script>
<style scoped>
  @import '../assets/css/login/login.css';


  .bg_name_k{
    position: absolute;
    margin-top: 32px;
    margin-left: 100px;
    display: flex;
    flex-wrap: wrap;
  }
  .bg_name{
    color: white;
    font-size: 48px;
    font-family: 华文行楷;
  }
  .bg_engname{
    color: white;
    font-size: 21px;
    font-family: 华文新魏;
    margin-left: 19px;
    letter-spacing: -0.7px;
  }
  .label_title{
    position: absolute;
    color: rgb(33,94,145);
    font-weight: bold;
    font-size: 60px;
    right: 220px;
    top: 15%;

    font-family: "Microsoft YaHei";
  }
  .bg_login{
    width: 1920px;
    height: 1080px;
    min-height: 969px;
    background-color: #eeeeee;
    /*background-image: url("/static/login/bg_login.png");*/
    background-size: cover;
    background-repeat: no-repeat;
    position:fixed;
    top: 0;
    left: 0;
  }
  .reg_btn{
    color: #323232;
  }
  .reg_btn:hover{
    color: #1A8CFD;
  }
  .login_panel{
    background-color: #fff;
    width: 440px;
    height: 482px;
    position: fixed;
    top: 50%;
    margin-top: -241px;
    /*margin-top: 15%;*/
    /*margin-left: 1268px;*/
    right:20%;
    margin-right: -220px;
    border-radius: 10px;
  }
  .top1{
    width:1920px;
    height:80px;

    background: #FFFFFF;
    box-shadow: 0px 4px 14px 0px rgba(114, 122, 128, 0.2);
    font-size:0px;
  }
  .top1_left {
    font-size: 0;
    height:80px;
    /*margin-left:1255px;*/
    /*position: absolute;*/
    /*margin-top: 45px;*/
    /*display: flex;*/
    flex-direction: row;
    line-height: 80px;
    position: absolute;
    right: 260px;
    top: 36px;
  }
  .top1_left a,span{
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:#fff;
  }
  .top1_left span:hover{
    cursor: pointer;
    color:#1A8CFE;
  }

</style>
<style scoped>
  input::-webkit-input-placeholder {
    color: #C5C5C5 !important;
    font-size: 14px !important;
    font-family: Microsoft YaHei !important;
    font-weight: 400 !important;
  }
  input::-moz-placeholder {
    color: #C5C5C5 !important;
    font-size: 14px !important;
    font-family: Microsoft YaHei !important;
    font-weight: 400 !important;
  }
  input::-moz-placeholder {
    color: #C5C5C5 !important;
    font-size: 14px !important;
    font-family: Microsoft YaHei !important;
    font-weight: 400 !important;
  }
  input::-ms-input-placeholder {
    color: #C5C5C5 !important;
    font-size: 14px !important;
    font-family: Microsoft YaHei !important;
    font-weight: 400 !important;
  }
  input::-ms-clear{display:none;}
  input[type="password"]::-ms-reveal{display:none;}
  input {
    　　background-color: rgba(255, 255, 255, 0) !important;
  }

  input:-webkit-autofill {
    　　transition: background-color 5000s ease-in-out 0s;
  }

  input:-webkit-autofill:focus {
    　　-webkit-text-fill-color: #333 !important;
  }
  input:-webkit-autofill , el-input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset!important;
    /*border: 1px solid #CCC!important;*/
  }
</style>


