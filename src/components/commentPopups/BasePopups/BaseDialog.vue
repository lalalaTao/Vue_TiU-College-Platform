<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" :before-close="handleClose" :lock-scroll="false">
    <slot name="content"></slot>

    <div slot="footer" class="dialog-footer" v-if="footBtnDisplay">
      <el-button @click="deleteClick">{{btn1Txt}}</el-button>
      <el-button type="primary" @click="editClick" style="margin-left: 20px;">{{btn2Txt}}</el-button>
    </div>
    <!--<div slot="footer" class="dialog-footer" v-if="footBtnDisplay">
      <el-button @click="deleteClick">删除</el-button>
      <el-button type="primary" @click="editClick" style="margin-left: 20px;">编辑</el-button>
    </div>-->
   <!-- <div slot="footer2" class="dialog-footer" v-if="footBtnDisplay2">
      <el-button @click="deleteClick">取消</el-button>
      <el-button type="primary" @click="editClick" style="margin-left: 20px;">确定</el-button>
    </div>-->
  </el-dialog>
</template>

<script>
  export default {
    name: "CommentBox",
    props: {
      //弹框默认宽度
      width:{
        type: String,
        default: '480px'
      },
      //头部标题，必传
      title: {
        type: String,
        default: "",
        required: true
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
        default: false,
      },
      footBtnDisplay2: {
        type: Boolean,
        default: true,
      },
      btn1Txt: {
        type: String,
        default: "",
        required: true
      },
      btn2Txt: {
        type: String,
        default: "",
        required: true
      },

    },
    watch: {
      dialogDisplay(val) {
        this.dialogVisible = val;
      }
    },
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      //弹框关闭事件
      handleClose() {
        this.$emit("comment-close", this.dialogDisplay);
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
<style>
  /*el-button 高度修改未生效*/
/*  .dialog-footer >>> .el-button{
    height: 30px!important;
    border: 1px solid #d8d8d8;
  }*/
</style>
<style scoped lang="scss">
  /*/deep/ .el-dialog .el-dialog__header {
    border-bottom: 0px solid #00bda5;
  }
  /deep/  .el-dialog .el-dialog__footer .dialog-footer {
    border-top: 0px solid #00bda5;
  }*/

  /deep/  .el-dialog{
    display: flex;
    display: -ms-flex; /* 兼容IE */
    flex-direction: column;
    -ms-flex-direction: column; /* 兼容IE */
    margin:0 !important;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    max-height:calc(100% - 30px);
    max-width:calc(100% - 30px);
  }
  /deep/  .el-dialog .el-dialog__body{
    max-height: 100%;
    flex: 1;
    -ms-flex: 1 1 auto; /* 兼容IE */
    overflow-y: auto;
    overflow-x: hidden;
  }

  /deep/  .el-dialog__wrapper {
    /*隐藏ie和edge中遮罩的滚动条*/
    overflow: hidden;
  }


  /deep/ .el-dialog {
    .el-dialog__header {
      display: flex;
      border-bottom: 0px solid #00bda5;
      .el-dialog__title {
        border-bottom: 4px solid #00bda5;
        padding-bottom: 12px;
        font-size: 16px;
        font-family: PingFang SC, PingFang SC-Medium;
        font-weight: 500;
        text-align: left;
        color: #3f3f3f;
      }
    }


    .el-dialog__body{
      padding: 0;
    }
    .el-dialog__footer {
      height: auto;
      display: flex;
      justify-content: center;
      padding: 0;
      .dialog-footer {
        width: 100%;
        height: 60px;
        border-top: 0px solid #00bda5;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .el-button{
          height: 30px;
          border: 1px solid #d8d8d8;
          display: flex;
          align-items: center;
        }


      }



    }

    /*/deep/ .el-button{*/
      /*height: 32px;*/
    /*}*/
  }
</style>
