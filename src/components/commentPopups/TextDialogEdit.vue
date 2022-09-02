<template>
  <!--<div class="textDialogEdit_main">-->
    <base-dialog :dialog-display="dialogDisplay" :title="title" :foot-btn-display="footBtnDisplay"
                 @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick" :btn1-txt="btnTxt1" :btn2-txt="btnTxt2">
      <template #content>
        <div style="width: 480px;border: 0px solid red;justify-content: center;padding-bottom: 20px;min-height:140px;"  >
          <div>
            <div class="afal_main" style="width: 480px;min-height: 140px;">
              <div class="afal_line1" style="margin-left:35px;margin-top: 0px;">
                <div class="afal_title1" style="margin-top: 11px;"> <span>*</span>描述：</div>
                <div class="afal_content1" style="border:0px solid red;width: 330px;">
                  <editor-bar  ref="eb"  :isClear="isClear" @change="change" style="" class="el_tab1-txt" id="editor"  ></editor-bar>
                </div>
              </div>

              <div class="afal_line1" style="margin-left: 35px;margin-top: 28px;">
                <div class="afal_title1">链接：</div>
                <div class="afal_content1" style="border:0px solid red;width: 330px;">
                  <el-input v-model="obj.bubbleLink"   placeholder="请输入链接名称" style="width: 330px;" clearable></el-input>
                </div>
              </div>
            </div>

          </div>
        </div>
      </template>
    </base-dialog>
  <!--</div>-->
</template>

<script>
  import BaseDialog from "./BasePopups/BaseDialog";
  import EditorBar from '../../components/common/Editor'
  export default {
    name: "TextDialogEdit",
    components:{
      BaseDialog,
      EditorBar,
    },
    data() {
      return {
        detail: '',
        isClear:false,
        obj:{
          bubbleDescribe:'',
          bubbleLink:'',
          pageType:'',//1新增2编辑
          dtype:1,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
        },
        btnTxt1:'取消',
        btnTxt2:'确定',
        title:'',

      };
    },
    activated(){
      if(this.pageType==1){//1新增2编辑
        this.btnTxt1='取消';
        this.btnTxt2='确定';
        //:title="'添加气泡批注'"
        this.title="添加气泡批注";
      }else if(this.pageType==2){
        this.btnTxt1='删除';
        this.btnTxt2='编辑';
        this.title="编辑气泡批注";
      }
    },
    props: {
      //dtype 标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
      dtype: {
        type: Number,
        default: "",
        required: true
      },
      //1新增2编辑
      pageType: {
        type: Number,
        default: "",
        required: true
      },
      //头部标题，必传
      // title: {
      //   type: String,
      //   default: "",
      //   required: true
      // },
      //文本内容
      // content: {
      //   type: String,
      //   default: "",
      // },
      //弹框是否显示，必传
      dialogDisplay: {
        type: Boolean,
        default: false,
        required: true
      },
      //底部按钮是否显示，默认值：true，显示
      footBtnDisplay: {
        type: Boolean,
        default: true,
      }
    },
    methods:{
      //弹框关闭事件
      handleClose(val) {
        this.$emit("comment-close", this.obj);
      },
      //删除按钮事件 或取消事件
      deleteClick(){
        this.$emit("delete-click",this.obj);
      },
      //编辑按钮事件
      editClick(){
        // console.log("编辑按钮事件",this.obj)
        this.obj.pageType = this.pageType;
        if(this.pageType=="1"){//1新增 2编辑
          if(this.obj.bubbleDescribe==null || this.obj.bubbleDescribe==""){
            this.$message.error("描述必填")
            return;
          }
        }

        this.$emit("edit-click",this.obj);
      },

      change(val){
        this.obj.bubbleDescribe= val;
      },
      setbj(){

        // let params={
        //   "lessonAccessoryId":this.$route.query.nodeId,
        //   "courseId":this.$route.query.paramCourseId,
        //   "content":this.bjn,
        // }
        // API.course_study.setbj(params).then(({data})=>{
        //   if(data.code==0){
        //     // this.$message.success("成功")
        //     this.bjn=""
        //     this.getbj()
        //     // this.bjlist=data.data.list
        //   }
        // })
      },

    }
  }
</script>
<style scoped>
  .afal_content1 >>> .editor{
    overflow-y: unset;
}
.el_tab1-txt{
width: 339px;
height: 140px;
background: #FFFFFF;
/*border: 1px solid #E2E4E7;*/
    border-radius: 2px;
    margin: 17px 18px 0px 0px;
  }
  .el_tab1-txt>>>.w-e-menu{
    height: 20px;
    width: 20px;
  }
  .el_tab1-txt >>> .w-e-text-container{
    height: 120px!important;
  }
  .el_tab1-txt >>> .w-e-text{
    min-height: 120px!important;
  }
</style>
<style scoped lang="scss">
.text_content_main{
  padding: 20px 30px 20px 30px;
}

/*textDialogEdit_main*/

.afal_main{
  width: 400px;
  border: 0px solid red;
  min-height: 550px;
  margin-top: 4px;
  .afal_line1{
    display: flex;
    align-items: center;
    margin-top: 16px;
    .afal_title1{
      display: flex;
      align-items: center;
      width: 70px;
    }
    .afal_title1 span{
      display: flex;
      align-items: center;
      color: red;
      margin-top: 4px;
    }

    .afal_content1 /deep/ .el-input__inner{
      height: 32px;
    }
    .afal_content1 /deep/  .el-input__clear{
      display: flex;
      align-items: center;
    }
    .afal_content1 /deep/ .el-input__icon{
      line-height: 32px !important;
    }
    /*复选框改单选框，方框改圆框*/
    .afal_content1 /deep/ .el-checkbox__inner{
      border-radius: 8px;
      width:16px;
      height:16px;
    }
    .afal_content1 /deep/ .el-checkbox__inner:hover{
      border-color: #00BDA5;
    }
    /*复选框改单选框，改背景*/
    .afal_content1 /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
      background-color: #00BDA5;
      border-color: #00BDA5;
      border-radius: 8px;
    }
    /*复选框改单选框，字体样式*/
    .afal_content1 /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
      font-size: 14px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #252525;
    }
    .afal_content1 /deep/ .el-checkbox__label{
      font-size: 14px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #252525;
    }
    /*复选框改单选框，打钩位置*/
    .afal_content1 /deep/ .el-checkbox__inner::after{
      left: 5px;
      top: 2px;
    }

    .afal_line1_upfile_add{
      width: 160px;
      height: 64px;
      border: 1px dashed #efefef;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

    }
    .afal_line1_upfile_txt{
      margin-left: 24px;
      width: 267px;
      //height: 33px;
      font-size: 12px;
      font-family: PingFang SC, PingFang SC-Light;
      font-weight: 300;
      text-align: left;
      color: #9b9b9b;
    }

    .hasUploadFileLine{
      display: flex;
      width: 100%;
      flex-direction: column;
      .hasUploadFileLine_sub{
        width: 100%;
        min-height: 40px;
        display: flex;
      }
    }

  }

  .afal_confirm_btn{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    /*flex-direction: row-reverse;*/
  }
  .afal_confirm_btn >>> .el-button{
    height: 28px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding:0;
    width: 84px;
  }
  .afal_confirm_btn >>> .el-button--primary{
    background-color:#00BDA5;
    border-color: #00BDA5;
    height: 28px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding:0;
    width: 84px;
  }

}

</style>

