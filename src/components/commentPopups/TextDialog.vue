<template>
  <base-dialog :dialog-display="dialogDisplay" :title="title" :foot-btn-display="footBtnDisplay"
               @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick" btn1-txt="取消" btn2-txt="确定">
    <template #content>
      <!--<div class="text_content_main" v-html="content"></div>-->
      <div style="width: 480px;border: 0px solid red;justify-content: center;padding-bottom: 20px;min-height:140px;margin-bottom: 30px;"  >
        <div>
          <div class="afal_main" style="width: 480px;min-height: 140px;">
            <div class="afal_line1" style="margin-left:35px;margin-top: 0px;">
              <div class="afal_content1" style="border:0px solid red;width:400px;">
                <div v-html="obj.bubbleDescribe"></div>
              </div>
            </div>

            <div v-if="obj.bubbleLink" class="afal_line1" style="margin-left: 35px;margin-top: 28px;">
              <div class="afal_content1" style="border:0px solid red;width: 400px;display: flex;">
                <img :src="imghost+'/personalCenter/pcCourseFileMark/icon/link.png'" style="width:16px;height: 16px;margin-top: 3px;">
                <a :href="obj.bubbleLink" target="_blank" style="font-size: 16px;font-family: PingFang SC, PingFang SC-Regular;font-weight: 400;text-decoration: underline;color: #00bda5;margin-left: 10px;">{{obj.bubbleLink}}</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </template>
  </base-dialog>
</template>

<script>
  import BaseDialog from "./BasePopups/BaseDialog";
  export default {
    name: "TextDialog",
    components:{
      BaseDialog
    },
    data() {
      return {
        imghost:this.$imghost,
        detail: '',
        obj:{
          bubbleDescribe:'',
          bubbleLink:'',
          pageType:3,//1新增2编辑 3查看
          dtype:1,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
        }
      };
    },
    props: {
      //头部标题，必传
      title: {
        type: String,
        default: "",
        required: true
      },
      //文本内容
      content: {
        type: String,
        default: "",
      },
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
      //删除按钮事件
      deleteClick(){
        this.$emit("delete-click");
      },
      //编辑按钮事件
      editClick(){
        this.$emit("edit-click");
      }
    }
  }
</script>

<style scoped lang="scss">
.text_content_main{
  padding: 20px 30px 20px 30px;
}
</style>
<style scoped>
  .afal_content1 >>> .editor{
    overflow-y: unset;
  }
  .el_tab1-txt{
    width: 439px;
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
    width: 500px;
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
