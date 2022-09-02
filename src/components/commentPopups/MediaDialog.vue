<template>
  <!--<div class="textDialogEdit_main">-->
    <base-dialog :dialog-display="dialogDisplay" :title="title" :foot-btn-display="footBtnDisplay"
                 @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick" :btn1-txt="btnTxt1" :btn2-txt="btnTxt2">
      <template #content>
        <div style="width: 480px;border: 0px solid red;justify-content: center;padding-bottom: 20px;min-height:140px;"  >
          <div>


            <div class="afal_main" style="width: 480px;min-height: 140px;">


              <div class="afal_line1" style="margin-left:35px;margin-top: 28px;width: 400px;">
                {{obj.multiMediaTitle}}
              </div>
              <div class="afal_line1"  v-if="obj.multiMediaType=='1'" style="margin-left:35px;margin-top: 28px;width: 400px;white-space: pre-line;" v-html="obj.multiMediaDescribe">
              </div>

              <div class="afal_line1" style="margin-left:35px;margin-top: 28px;width: 400px;margin-bottom: 30px;">
                <div v-if="obj.multiMediaType=='1' && obj.multiMediaImgUrl_comfile.length>0" style="margin-bottom: 20px;">
                  <div style="display: flex;align-items: center;justify-content:center;flex-direction: row;margin-bottom: 10px;"  v-for="(item,index) in obj.multiMediaImgUrl_comfile">
                    <img
                      :src="webUrl(item.markImg)" style="max-width:400px;"  class="aus_upfile_bg">
                  </div>

                </div>


                <audio v-if="obj.multiMediaType=='2' && obj.multiMediaImgUrlAudio!=''" controls  loop controlsList="nodownload" oncontextmenu="return false" style="width: 395px;">
                  <source :src="webUrl(obj.multiMediaImgUrlAudio)" type="audio/mpeg">
                  您的浏览器不支持 audio 元素。
                </audio>

                <video v-if="obj.multiMediaType=='3' && obj.multiMediaImgUrlVideo!=''" class="aus_upfile_bg" style="object-fit:fill;width: 400px;background-size: 99%;background-repeat: no-repeat;display: flex;justify-content: center;flex-direction: column;margin-top: 0px;"  :src="webUrl(obj.multiMediaImgUrlVideo)"
                       :controls="true" :play-btn="false"
                />


              </div>

              <!--<div class="afal_line1" style="margin-left: 35px;margin-top: 28px;">
                <div class="afal_title1">链接：</div>
                <div class="afal_content1" style="border:0px solid red;width: 400px;">
                  <el-input v-model="obj.bubbleLink"   placeholder="请输入链接名称" style="width: 400px;" clearable></el-input>
                </div>
              </div>-->
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
  import API from '@/api'
  export default {
    name: "MediaDialogEdit",
    components:{
      BaseDialog,
      EditorBar,
    },
    data() {
      return {
        imghost:this.$imghost,
        detail: '',
        isClear:false,
        obj:{
          bubbleDescribe:'',
          bubbleLink:'',
          pageType:3,//1新增2编辑 3查看
          dtype:2,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
          multiMediaType:"1",//多媒体批注类型（1：图片；2：音频；3：视频；）
          multiMediaTitle:'',//标题
          multiMediaDescribe:'',//批注描述
          // multiMediaImgUrl:'',
          multiMediaImgUrl_comfile:[],
          multiMediaImgUrlAudio:'',
          multiMediaImgUrlAudio_comfile:{fileName:"",fileNameHasSuffix:"",fileNameNew:"",uuid:"",fileSize:"0.13",fileSize3:0.132,fileType:6,fileSrc:"",fileSuffix:"jpg"},
          multiMediaImgUrlVideo:'',
          multiMediaImgUrlVideo_comfile:{fileName:"",fileNameHasSuffix:"",fileNameNew:"",uuid:"",fileSize:"0.13",fileSize3:0.132,fileType:6,fileSrc:"",fileSuffix:"jpg"},
          //附件其他信息?
        },
        btnTxt1:'取消',
        btnTxt2:'确定',
        title:'',
        uploadFileUrl: API.common.getUrl('/hyossfilelist/comUploadFile'),
        uploadFileData:{"fileFrom":12},
        header:{token:''},

      };
    },
    mounted() { //mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
      this.header.token=this.$cookie.get('access_Token')
    },
    activated(){
      // if(this.multiMediaType==1){//1新增2编辑
      //   this.btnTxt1='取消';
      //   this.btnTxt2='确定';
      //   //:title="'添加气泡批注'"
      //   this.title="添加多媒体批注";
      // }else if(this.pageType==2){
      //   this.btnTxt1='删除';
      //   this.btnTxt2='编辑';
      //   this.title="编辑多媒体批注";
      // }

      if(this.obj.multiMediaType=="1"){//多媒体批注类型（1：图片；2：音频；3：视频；）
        this.title="多媒体图片";
      }else if(this.obj.multiMediaType=="2"){
        this.title="多媒体音频";
      }else if(this.obj.multiMediaType=="3"){
        this.title="多媒体视频";
      }
      // console.log("")
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
        default: false,
      }
    },
    computed: {
      webUrl () {
        return function (name) {
          //return this.$http.webUrl('') + (encodeURI(name));
          return API.common.getUrl(encodeURI(name))
        }
      },
    },
    methods:{
      removeImg(index){
        // console.log(index,this.obj.multiMediaImgUrl_comfile)
        this.obj.multiMediaImgUrl_comfile.splice(index,1);
        // console.log(index,this.obj.multiMediaImgUrl_comfile)
      },
      handleVideoSuccess (res, file) {
        if (res.code === 0) {
          // this.param_hySkillResourcesEntity.courseVideoUrl = res.data.fileSrc;
          // this.ruleForm.pathVideo2Name = res.data.fileName;
          console.log("上传成功:",res.data)
          //this.fileAddList.push(res.data);
          this.$forceUpdate();
          if(this.obj.multiMediaType=='1'){
            //this.obj.multiMediaImgUrl = res.data.fileSrc;
            this.obj.multiMediaImgUrl_comfile.push(res.data);
          }else if(this.obj.multiMediaType=='2'){
            this.obj.multiMediaImgUrlAudio = res.data.fileSrc;
            this.obj.multiMediaImgUrlAudio_comfile = res.data;
          }else if(this.obj.multiMediaType=='3'){
            this.obj.multiMediaImgUrlVideo = res.data.fileSrc;
            this.obj.multiMediaImgUrlVideo_comfile = res.data;
          }

          this.$message.success('附件上传成功')
        }else{
          this.$message.error('附件上传失败：'+res.msg)
        }
      },
      beforeVideoUpload (file,fileList) {
        console.log(file)
        console.log("============>",file.type)

        let ft=file.type;
        if(this.obj.multiMediaType=='1'){
          if(ft=="image/jpeg" || ft=="image/png" || ft=="image/jpg" || ft=="image/gif" || ft=="image/ico"){

          }else{
            this.$message.error("只能上传图片");
            return false;
          }
        }else if(this.obj.multiMediaType=='2'){
          if(ft=="audio/mpeg"){
          }else{
            this.$message.error("只能上传mp3音频");
            return false;
          }
        }else if(this.obj.multiMediaType=='3'){
          if(ft=="video/mp4"){
          }else{
            this.$message.error("只能上传mp4视频");
            return false;
          }
        }

        // const isVideo = ['video/mp4'].includes(file.type);
        const isLt = file.size / 1024 / 1024 < 600;
        // if (!isVideo) {
        //   this.$message.error('上传附件格式不支持!');
        //   return false;
        // }
        if (!isLt) {
          this.$message.error('上传视频大小不能超过 600MB!');
          return false;
        }
        this.uploadFileData={"fileFrom":this.getUploadFileTypeFun()};
        //return isVideo && isLt;
        return true;
      },
      getUploadFileTypeFun(){
        return 12;
        // if(this.curSourceObj.type===2){
        //   return 12;
        // }else if(this.curSourceObj.type===3){
        //   return 13;
        // }else if(this.curSourceObj.type===4){
        //   return 14;
        // }
      },



      //弹框关闭事件
      handleClose(val) {
        this.$emit("comment-close", this.obj);
      },
      //删除按钮事件 或取消事件
      deleteClick(){
        console.log("---------deleteClick-----------")
        this.$emit("delete-click",this.obj);
      },
      //编辑按钮事件
      editClick(){
        // console.log("编辑按钮事件",this.obj)
        this.obj.pageType = this.pageType;
        if(this.pageType=="1"){//1新增 2编辑
        }
        if(this.obj.multiMediaTitle==null || this.obj.multiMediaTitle==""){
          this.$message.error("标题必填")
          return;
        }
        if(this.multiMediaType=="1"){//多媒体批注类型（1：图片；2：音频；3：视频；）
          if(this.obj.multiMediaImgUrl==null || this.obj.multiMediaImgUrl==""){
            this.$message.error("图片必传")
            return;
          }
        }else if(this.multiMediaType=="2"){
          if(this.obj.multiMediaImgUrlAudio==null || this.obj.multiMediaImgUrlAudio==""){
            this.$message.error("音频必传")
            return;
          }
        }else if(this.multiMediaType=="3"){
          if(this.obj.multiMediaImgUrlVideo==null || this.obj.multiMediaImgUrlVideo==""){
            this.$message.error("视频必传")
            return;
          }
        }
        console.log("--------------------")
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

