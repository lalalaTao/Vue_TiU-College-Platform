<template>
  <div class="page_test_main">
    <el-button type="primary" round @click="showDialog">主要按钮</el-button>
    <!--<text-dialog :title="'气泡批注'" :content="'本章节需掌握以下内容：1.集合的含义及其表示；2.集合间的基本关系；3.集合的基本运算 ；'" :dialog-display="dialogDisplay" @comment-close="handleClose"></text-dialog>-->
    <!--<video-dialog :title="'多媒体视频'" :dialog-display="dialogDisplay" :path="videoPath" @comment-close="handleClose"></video-dialog>-->
    <!--<image-dialog :title="title" :dialog-display="dialogDisplay" :content="content" :path="imagePath" @comment-close="handleClose"></image-dialog>-->
    <!--<audio-dialog :title="title" :dialog-display="dialogDisplay" :content="content" :path="audioPath" @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick"></audio-dialog>-->

    <!--<text-dialog-edit :title="'气泡批注'" :content="'本章节需掌握以下内容：1.集合的含义及其表示；2.集合间的基本关系；3.集合的基本运算 ；'" :dialog-display="dialogDisplay" @comment-close="handleClose" ></text-dialog-edit>-->

    <media-dialog-edit    :dialog-display="dialogDisplay" @comment-close="handleClose" :dtype="2" :page-type="1"></media-dialog-edit>

  </div>
</template>

<script>
  import TextDialog from "../components/commentPopups/TextDialog";
  import VideoDialog from "../components/commentPopups/VideoDialog";
  import ImageDialog from "../components/commentPopups/ImageDialog";
  import AudioDialog from "../components/commentPopups/AudioDialog";

  import TextDialogEdit from "../components/commentPopups/TextDialogEdit";
  import MediaDialogEdit from "../components/commentPopups/MediaDialogEdit";
  export default {
    name: "PageTest",
    components: {TextDialog,VideoDialog,ImageDialog,AudioDialog,TextDialogEdit,
      MediaDialogEdit
    },
    data() {
      return {
        dialogDisplay: false,
        title: "多媒体音频",
        content: "集合的含义及其表示讲解",
        videoPath: "",
        imagePath: "",
        audioPath: "https://hy-tiyou-file-img-public.oss-cn-beijing.aliyuncs.com/video_tiyou2/school_2/accessory/skill_resources2/2022-02-23%2009.01.21%E7%A7%91%E5%AD%A6%E5%8F%B7%E9%A3%9E%E8%88%B9_%E4%BA%BA%E7%94%9F%E7%9A%84%E6%84%8F%E4%B9%89%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%8C%E7%9C%8B%E5%AE%8C%E8%BF%99%E4%B8%AA%E8%A7%86%E9%A2%91%E4%BD%A0%E4%BC%9A%E6%9C%89%E4%B8%80%E4%B8%AA%E5%85%A8%E6%96%B0%E7%9A%84%E8%AE%A4%E7%9F%A5%23%E7%A7%91%E6%99%AE%23%E4%BA%BA%E7%94%9F%E7%9A%84%E6%84%8F%E4%B9%89%20.mp3",
        audioList: [""],
      }
    },
    methods: {
      showDialog(){
        this.dialogDisplay = !this.dialogDisplay;
      },
      handleClose(val) {
        this.$message.info("page test handle close");
        this.dialogDisplay = !val;
      },
      //删除按钮事件
      deleteClick(){
        this.$message.info("page test delete click");
      },
      //编辑按钮事件
      editClick(){
        this.$message.info("page test edit click");
      }
    }
  }
</script>

<style scoped lang="scss">
  .page_test_main {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
