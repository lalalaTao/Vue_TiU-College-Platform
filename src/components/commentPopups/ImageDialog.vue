<template>
  <base-dialog :dialog-display="dialogDisplay" :title="title" :foot-btn-display="footBtnDisplay"
               @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick">
    <template #content>
      <div class="image_content_main">
        <span class="image_prompt_info">{{content}}</span>
        <div class="image_content_container">
          <img :src="path"/>
        </div>
      </div>
    </template>
  </base-dialog>
</template>

<script>
  import BaseDialog from "./BasePopups/BaseDialog";

  export default {
    name: "ImageDialog",
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
      //图片文件路径
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
  .image_content_main {
    width: auto;
    height: 100%;
    padding: 20px 30px 20px 30px;
    .image_prompt_info {
      margin-left: 8px;
    }
    .image_content_container {
      border: 1px solid #e6e6e6;
      margin-top: 10px;
      height: 164px;
      background: #e6e6e6;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
