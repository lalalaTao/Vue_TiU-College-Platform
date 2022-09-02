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
            <el-menu-item index="1" @click="changeCiStu(1)">个人资料
              <div class="right_mes" v-show="showMes1">
                <div class="leftMenuIcoDiv" >
                  <img :src="$imghost+'/accountManage/stuImg/stu.png'"><span class="font_mes3">姓名:</span>
                  <span class="font_mes2">{{realName}}</span>
                </div>
                <div class="leftMenuIcoDiv">
                  <img :src="$imghost+'/accountManage/stuImg/sex.png'"><span class="font_mes">性别:</span>
                  <span class="font_mes2">{{sex}}</span>
                </div>
                <div class="leftMenuIcoDiv">
                  <img :src="$imghost+'/accountManage/stuImg/xj.png'"><span class="font_mes">学籍号:</span>
                  <span class="font_mes4">{{studentCode}}</span>
                </div>
                <div class="leftMenuIcoDiv">
                  <img :src="$imghost+'/accountManage/stuImg/mobileIco.png'"><span class="font_mes">手机号:</span>
                  <span class="font_mes4">{{mobile}}</span>
                  <span class="font_mes5">更换手机号</span>
                </div>
                <div class="leftMenuIcoDiv">
                  <img :src="$imghost+'/accountManage/stuImg/fau.png'"><span class="font_mes">院系:</span>
                  <span class="font_mes2">{{facultyName}}</span>
                </div>
                <div class="leftMenuIcoDiv">
                  <img :src="$imghost+'/accountManage/stuImg/spe.png'"><span class="font_mes">专业:</span>
                  <span class="font_mes2">{{specialtyName}}</span>
                </div>
                <div class="leftMenuIcoDiv">
                  <img :src="$imghost+'/accountManage/stuImg/classIco.png'"><span class="font_mes">班级:</span>
                  <span class="font_mes2">{{className}}</span>
                </div>
                <div class="leftMenuIcoDiv">
                  <img :src="$imghost+'/accountManage/stuImg/state.png'"><span class="font_mes">状态:</span>
                  <span class="font_mes2">{{status}}</span>
                </div>
              </div>
            </el-menu-item>

            <el-menu-item index="2" @click="changeCiStu(2)">修改密码
              <div class="right_up" v-show="showMes">
                <div class="leftMenuIcoDiv2" >
                  <span class="font_up1">用户名:</span>
                </div>
                <!--<div class="input_div1">-->
                  <el-input class="codeStyle"
                    :placeholder="mobile"
                    v-model="input1"
                    :disabled="true">
                  </el-input>
                <!--</div>-->

                <div class="leftMenuIcoDiv2">
                  <span class="font_up1">旧密码:</span>

                </div>

                <!--<div class="input_div2">-->
                  <el-input  v-if="visible" type="password" ref="inputList.input2"   class="codeStyle2" placeholder="请输入" v-model="inputList.input2">
                    <i v-show="imgShow" slot="suffix"  class="el-icon-view" @click="changePass('show')"></i>
                  </el-input>
                <el-input v-else type="text"  placeholder="请输入" class="codeStyle2" v-model="inputList.input2" ref="inputList.input2">
                  <i v-show="imgShow" slot="suffix"  class="el-icon-view" @click="changePass('hide')"></i>
                </el-input>
                <!--</div>-->

                <div class="leftMenuIcoDiv2">
                  <span class="font_up1">新密码:</span>

                </div>

                <!--<div class="input_div3">-->
                  <el-input v-if="visible2" type="password" ref="inputList.input3" class="codeStyle3" placeholder="8-16位，字母/数字/符号至少两种" v-model="inputList.input3">
                    <i v-show="imgShow2" slot="suffix"  class="el-icon-view" @click="changePass2('show')"></i>
                  </el-input>
                <el-input v-else type="text" placeholder="8-16位，字母/数字/符号至少两种" class="codeStyle3" v-model="inputList.input3" ref="inputList.input3">
                  <i v-show="imgShow2" slot="suffix"  class="el-icon-view" @click="changePass2('hide')"></i>
                </el-input>

                <!--</div>-->
                <div class="leftMenuIcoDiv2">
                  <span class="font_up1">确认新密码:</span>

                </div>
                <!--<div class="input_div4">-->
                  <el-input v-if="visible3" type="password" ref="inputList.input4" class="codeStyle4" placeholder="请再次输入新密码" v-model="inputList.input4">
                    <i v-show="imgShow3" slot="suffix"  class="el-icon-view" @click="changePass3('show')"></i>
                  </el-input>
                <el-input v-else type="text" placeholder="请再次输入新密码" class="codeStyle4" v-model="inputList.input4" ref="inputList.input4">
                  <i v-show="imgShow3" slot="suffix"  class="el-icon-view" @click="changePass3('hide')"></i>
                </el-input>

                <!--</div>-->
                <!--<div class="sure_div">-->
                  <el-button class="codeStyle5" type="primary" :style="activeStyle" @click="sureForm()"><span class="fontStyle">确定</span></el-button>
                <!--</div>-->

              </div>
            </el-menu-item>

          </el-menu>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import API from '@/api'
  import pcMenu from "../personalCenter/pcMenu";
  export default {
    name: "accountManage",
    components: {
      pcMenu,
    },
    data () {
      return {
        scUserId: 0, // 学校用户id
        accountMenuIndex:"1",//资源类型标签  1、2、3
        realName:'',
        mobile:'',
        studentCode:'',
        facultyName:'',
        specialtyName:'',
        className:'',

        sex: '', // 性别（1男，2女）
        status:'', // 用户学校状态;（学生：1在册 2休学 3毕业 ； 教师：1在职 2退休 3离职）
        showMes:false,
        showMes1:true,
        /*输入框*/
        input1:'',
        inputList:{
          input2:'',
          input3:'',
          input4:''
        },
        activeStyle:{
          background: '#c5c5c5',
        },
        visible: true,// 初始化不显示密码
        imgShow:false,
        visible2: true,// 初始化不显示密码
        imgShow2:false,
        visible3: true,// 初始化不显示密码
        imgShow3:false,

      }
    },

    // 计算属性
    computed: {
      changeData() {
        const {input2}=this.inputList;
        const {input3}=this.inputList;
        const {input4}=this.inputList;
        return {input2,input3,input4}

      },
    },
    // 侦听器
    watch: {
      changeData: {
        handler(newValue, oldValue) {
          if (newValue.input2) {
            this.imgShow = true;
          }else {
            this.imgShow = false;
          }

          if (newValue.input3) {
            this.imgShow2 = true;
          }else {
            this.imgShow2 = false;
          }

          if (newValue.input4) {
            this.imgShow3 = true;
          }else {
            this.imgShow3 = false;
          }


          if (newValue.input2 && newValue.input3 && newValue.input4) {
            this.activeStyle.background = "#00BDA5";
          } else {
            this.activeStyle.background = "#c5c5c5";
          }
        },
      },
    },

    created(){ //created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
      this.getPersonalMes(); // 获取个人信息数据

    },
    methods: {

      changePass(value){
        this.visible = !(value === 'show'); //切换密码框的显示
        this.$nextTick(function() {//对焦密码框
          this.$refs['input2'].focus();
        })
      },

      changePass2(value){
        this.visible2 = !(value === 'show'); //切换密码框的显示
        this.$nextTick(function() {//对焦密码框
          this.$refs['input3'].focus();
        })
      },

      changePass3(value){
        this.visible3 = !(value === 'show'); //切换密码框的显示
        this.$nextTick(function() {//对焦密码框
          this.$refs['input4'].focus();
        })
      },

      // 获取个人信息
      getPersonalMes(){
        let params = {

        }
        API.accountManage.getPersonalMes(params).then(({data}) => {
          if (data && data.code === 0) {
            let accountObj = data.page;
            console.log(accountObj);
            // 获取id
            this.scUserId = accountObj.id;
            /*星号设置*/
            // this.mobileAsterisk = accountObj.mobile;
            // let strNum = this.mobileAsterisk;
            // let strNum2 = strNum.substr(0,3)+"****"+strNum.substr(7);
            // this.mobileAsterisk =strNum2;

            this.realName = accountObj.realName;

            this.mobile = accountObj.mobile;
            if (accountObj.gender == 1){ // 性别
              this.sex = '男';
            }else if (accountObj.gender == 2){
              this.sex = '女';
            }
            this.studentCode = accountObj.studentCode;
            this.facultyName = accountObj.facultyName;
            this.specialtyName = accountObj.specialtyName;
            this.className = accountObj.className;
            if (accountObj.userType == 1){ // 学生
              if (accountObj.schoolStatus == 1){
                this.status = '在册';
              }else if (accountObj.schoolStatus == 2){
                this.status = '休学';
              }else if (accountObj.schoolStatus == 3){
                this.status = '毕业';
              }
            }else if (accountObj.userType == 2){ // 老师
              if (accountObj.schoolStatus == 1){
                this.status = '在职';
              }else if (accountObj.schoolStatus == 2){
                this.status = '退休';
              }else if (accountObj.schoolStatus == 3){
                this.status = '离职';
              }
            }
          }else {
            this.$message.error({message:data.msg,center: false,duration:2000});
          }
        })
      },
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

      // 提交修改密码
      sureForm(){
        let params={
          "id": this.scUserId,
          "oldPwd":this.inputList.input2,
          "newPwd":this.inputList.input3,
          "confirmNewPwd":this.inputList.input4,
        }
        API.accountManage.sureForm(params).then(({data})=>{

          if (data.code==0){
            this.$message.success({message:'修改成功！',duration:3000})

            this.inputList.input2 = '';// 清除密码框
            this.visible=true; // 隐藏图标
            this.inputList.input3 = '';
            this.visible2=true;
            this.inputList.input4 = '';
            this.visible3=true;
            setTimeout(()=>{
              this.$router.push("/login"); //退出登录，让它回到登录页面
            },2000)
          }else {
            // 获取后端的错误信息 data.msg
            this.$message.error({message:data.msg,center: false,duration:3000})
          }
        })
      }

    }
  }
</script>

<style scoped>
  @import "../../assets/css/stuPersonalCore/accountManage.css";
  .base_accountManage{
    width: 100%;
    height: 752px;
    /* display: -webkit-box; */
    display: -ms-flexbox;
    /* display: flex; */
    position: relative;
    left: 2.57rem;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    justify-content: center;
  }
  .codeStyle>>>.el-input__inner{
    width: 240px;
    height: 28px;
    position: absolute;
    right: -148px;
    top: -39px;
  }

  .codeStyle2>>>.el-input__inner{
    width: 240px;
    height: 28px;
    position: absolute;
    right: -148px;
    top: -39px;
    border-color: #F8F8F8;
    padding-right: 10px;
  }
  .codeStyle3>>>.el-input__inner{
    width: 240px;
    height: 28px;
    position: absolute;
    right: -148px;
    top: -39px;
    border-color: #F8F8F8;
    padding-right: 10px;
  }
  .codeStyle4>>>.el-input__inner{
    width: 240px;
    height: 28px;
    position: absolute;
    right: -148px;
    top: -39px;
    border-color: #F8F8F8;
    padding-right: 10px;
  }
  .codeStyle2>>>.el-input__inner:focus {
    border-color: #00BDA5;
  }
  .codeStyle3>>>.el-input__inner:focus {
    border-color: #00BDA5;
  }
  .codeStyle4>>>.el-input__inner:focus {
    border-color: #00BDA5;
  }

  .codeStyle5{
    position: absolute;
    right: 19px;
    top: 281px;
    width: 72px;
    height: 28px;
  }

  .fontStyle{
    position: relative;
    top: -8px;
  }
  /deep/.el-icon-view:before {
    content: "\E6CE";
    position: relative;
    top: -57px;
    left: 156px;
  }


</style>
