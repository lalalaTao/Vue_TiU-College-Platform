<template>
  <base-dialog :dialog-display="dialogDisplay" :title="title" :foot-btn-display="footBtnDisplay" width="360px"
               @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick">
    <template #content>
      <div class="audio_content_main">
        <span class="audio_prompt_info">{{content}}</span>
        <div class="audio_content_container">
          <audio controls autoplay loop controlsList="nodownload" oncontextmenu="return false">
            <source :src="path" type="audio/mpeg">
            您的浏览器不支持 audio 元素。
          </audio>
        </div>
      </div>
    </template>
  </base-dialog>
</template>

<script>
  import BaseDialog from "./BasePopups/BaseDialog";

  export default {
    name: "AudioDialog",
    components: {
      BaseDialog
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
      //音频文件路径
      path: {
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
    methods: {
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
  .audio_content_main {
    width: auto;
    height: 100%;
    padding: 20px 30px 20px 30px;
    .audio_prompt_info {
      margin-left: 8px;
    }
    .audio_content_container {
      margin-top: 10px;
      // 这个方式兼容所有版本的谷歌浏览器
    }
  }
</style>
