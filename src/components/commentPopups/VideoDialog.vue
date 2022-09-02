<template>
  <base-dialog :dialog-display="dialogDisplay" :title="title" :foot-btn-display="footBtnDisplay" width="670px"
               @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick">
    <template #content>
      <div class="video_content_container">
        <span class="video_prompt_info">{{content}}</span>
        <common-video :src="path" :controls="true" :play-btn="false" style="margin-top: 10px"/>
      </div>
    </template>
  </base-dialog>
</template>

<script>
  import BaseDialog from "./BasePopups/BaseDialog";
  import CommonVideo from "../common/CommonVideo";

  export default {
    name: "VideoDialog",
    components: {BaseDialog, CommonVideo},
    props: {
      //头部标题，必传
      title: {
        type: String,
        default: "",
        required: true
      },
      //视频内容相关说明
      content: {
        type: String,
        default: "",
      },
      //视频文件路径
      path:{
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
        default: true,
      }
    },
    methods:{
      //弹框关闭事件
      handleClose(val) {
        this.$emit("comment-close", val);
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
.video_content_container{
  padding: 10px 30px 10px 30px;
  .video_prompt_info{
    margin-left: 8px;
  }
}
</style>
