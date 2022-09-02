<template>
  <div class="spe_source_study_main">
    <div class="spe_source_study_head" v-show="headShowFlag">
      <div class="directory_file_name_container">
        <img class="directory_btn" :src="catalogueIcon" @click="catalogAndThumbnailFlag = !catalogAndThumbnailFlag"/>
        <span class="file_name_span">{{fileName}}</span>
      </div>
      <div class="page_controller_container_main" v-show="checkFileType()">
        <div class="page_controller_container">
          <div class="page_info_text">
            第<span class="current_page_text">{{totalPage===0?0:(currentPage+1)}}</span>页/共{{totalPage}}页
          </div>
          <div class="controller_container">
            <div class="pre_page_controller" @click="prevPage">
              <img class="pre_page_icon" :src="preIcon"/><span>上一页</span>
            </div>
            <div class="next_page_controller" @click="nextPage">
              <span>下一页</span><img class="next_page_icon" :src="nextIcon"/>
            </div>
            <!--<el-button @click="addCatalogueNode('定积分及其应用',1,1)">添加电子书目录</el-button>-->
          </div>
        </div>
      </div>
      <div class="catalog_comment_btn_container">
        <el-button class="comment_btn" v-show="catalogBtnFlag" @click="catalogBtnClick"
                   @mouseover.native="catalogBtnMsover" @mouseout.native="catalogBtnMsout">
          <img :src="catalogIconTmp"/>添加目录
        </el-button>
        <el-button class="comment_btn" v-show="commentBtnFlag" @click="commentBtnClick"
                   @mouseover.native="commentBtnMsover" @mouseout.native="commentBtnMsout">
          <img :src="commentIconTmp"/>添加批注
        </el-button>
      </div>
    </div>
    <div class="spe_source_study_body">
      <!--课程目录组件-->
      <transition name="el-zoom-in-top">
        <div class="catalog_thumbnail_container" v-show="catalogAndThumbnailFlag">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="目录" name="first" v-if="catalogShowFlag">
              <!--目录组件-->
              <catalog-tree :course-catalog-list="courseCatalogList" @change-catalog="changeCatalog"
                            v-if="skillResourceType === '1'"/>
              <study-e-book-catalogue :catalogue-tree-list="courseCatalogList" @change-catalog="eBookChangeCatalog"
                                      v-else/>
            </el-tab-pane>
            <el-tab-pane label="缩略图" name="second">
              <!--缩略图组件-->
              <thumbnail :images="thumbnailImages" :current-page="currentPage" @change-image="changeImage"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </transition>
      <!--课件内容-->
      <div class="file_name_body_container">
        <no-data v-if="isHaveContentFlag" :image-path="$imghost + '/spesource/no_data.png'"/>
        <div id="imgParentDiv" style="position: relative;" class="file_name_body"
             :class="commentBtnFlag?'body_content_container':'image_body'" v-else>
          <div class="file_is_video" v-if="fileType === 1">
            <common-video class="video_player" :src="filePath" :video-data="videoData" :controls="true"
                          :play-btn="false" @video-study-time="videoStudyTime" @time-update="videoTimeUpdate"
                          @video-destroyed="videoDestroyed"/>
          </div>
          <div class="file_is_markdown" v-else-if="fileType === 10">
            <markdown :content="markdownContent"/>
          </div>
          <!--<img id="cvsImg" :class="commentBtnFlag?'body_content_container':'image_body'" v-show="imageUrlList && imageUrlList.length>0" :src="getImageUrl(currentPage)">-->
          <img id="cvsImg" :class="commentBtnFlag?'body_content_container':'body_content_container'" v-show="imageUrlList && imageUrlList.length>0" :src="getImageUrl(currentPage)">
          <slot></slot>

          <div id="dynamicCreationDiv2" ref="dynamicCreationDiv2" style="width: 1920px;height: 1080px;position: absolute;z-index: 1;top: 0px;left: 0px;">
            <div v-for="(item,index) in markList" :key="item" >
              <el-tooltip  popper-class="SpeSourceStudyTp" placement="top">
                <div slot="content" >
                  <div style="display:flex;flex-direction: row;cursor: pointer;" @click="qpDialogShowOpen(item)">
                    <img :src="getMarkIconImgUrl(item)" style="width: 16px;height:16px;margin-left:0px;">
                    <div style="color:black;font-size: 12px;font-family: PingFang SC, PingFang SC-Regular;font-weight: 400;margin-left: 6px;">点击查看批注</div>
                  </div>
                </div>
                <div :id="'test'+index" class="locationdiv"
                     style=" position: absolute;  opacity: 0.1;background: #00bda5;"
                     :style="'width:'+ (item.markDivWidth)+'px; height:' +(item.markDivHeight)+'px;z-index: '+(item.markDivZindex)+'; top: '+(item.markDivTop)+'px; left: '+(item.markDivLeft)+'px;'"
                >
                </div>
              </el-tooltip>
            </div>
          </div>

        </div>
      </div>
      <!--课程笔记留言窗口-->
      <transition name="el-zoom-in-top">
        <note-and-message v-if="noteAndMessageFlag" :accessory-id="parseInt(accessoryId)" :user="user"
                          :skill-resource-id="parseInt(skillResourceId)"
                          @close-note-message-btn="handleLeaveMessageClick"/>
      </transition>
    </div>
    <div class="spe_source_study_foot" v-show="footShowFlag">
      <div class="thumbnail_container" v-show="checkFileType()"></div>
      <div class="screen_style_container" v-show="checkFileType()">
        <img class="full_screen_icon" :src="fullScreenIcon" @click="handleFullScreenClick"/>
      </div>
      <img class="leave_message_btn" v-show="!noteAndMessageFlag" :src="leaveMessageIcon"
           @click="handleLeaveMessageClick"/>
    </div>

    <text-dialog ref="textDialog" :title="'气泡批注'"   :dialog-display="dialogDisplayTextDialog" :foot-btn-display="false" @comment-close="handleClose" :dtype="1" :page-type="1"></text-dialog>
    <media-dialog ref="mediaDialog"    :dialog-display="dialogDisplayMediaDialog" @comment-close="handleClose"   :dtype="1" :page-type="1"></media-dialog>

  </div>
</template>

<script>
  import CommonVideo from "../common/CommonVideo";
  import Markdown from "../common/Markdown";
  import Thumbnail from "./StudyComponents/Thumbnail";
  import NoteAndMessage from "./StudyComponents/NoteAndMessage";
  import CatalogTree from "./StudyComponents/CatalogTree";
  import NoData from "../common/NoData";
  import {doGetUUID} from "../../utils/validate";
  import API from "@/api";
  import 'element-ui/lib/theme-chalk/base.css';
  import StudyEBookCatalogue from "./StudyComponents/StudyEBookCatalogue";

  import TextDialog from "../commentPopups/TextDialog";
  import MediaDialog from "../commentPopups/MediaDialog";

  export default {
    name: "SpeSourceStudy",
    components: {
      StudyEBookCatalogue,
      CatalogTree,
      Thumbnail,
      NoteAndMessage,
      NoData,
      CommonVideo,
      Markdown,

      TextDialog, MediaDialog,
    },
    props: {
      //是否展示目录
      catalogShowFlag: {
        type: Boolean,
        default: true
      },
      //是否显示批注按钮
      commentBtnFlag: {
        type: Boolean,
        default: false
      },
      //是否显示目录按钮
      catalogBtnFlag: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        activeName: "second",
        catalogAndThumbnailFlag: false,
        catalogIconTmp: this.$imghost + "/spesource/catalog_icon.png",
        catalogIcon: this.$imghost + "/spesource/catalog_icon.png",
        catalogIconHover: this.$imghost + "/spesource/catalog_icon_hover.png",
        commentIconTmp: this.$imghost + "/spesource/comment_icon.png",
        commentIcon: this.$imghost + "/spesource/comment_icon.png",
        commentIconHover: this.$imghost + "/spesource/comment_icon_hover.png",
        catalogueIcon: this.$imghost + "/spesource/catalogue_icon.png",
        thumbnailIcon: this.$imghost + "/spesource/thumbnail_icon.png",
        webPageFullScreenIcon: this.$imghost + "/spesource/web_page_full_screen.png",
        fullScreenIcon: this.$imghost + "/spesource/full_screen.png",
        preIcon: this.$imghost + "/spesource/previous_page.png",
        nextIcon: this.$imghost + "/spesource/next_page.png",
        leaveMessageIcon: this.$imghost + "/spesource/leave_message_icon.png",
        accessoryId: null,
        skillResourceId: null,
        skillResourceType: null,//1:组合资源，2：电子书
        skillResourceObj: {},//资源详情
        accessoryDetails: {},
        fileType: null,
        fileName: "自我认知与自我激励（一）",
        filePath: null,//文件存放路径
        currentPage: 0,
        totalPage: 0,
        thumbnailFlag: false,//控制缩略图开关
        catalogFlag: false,//控制目录开关
        noteAndMessageFlag: false,//课程笔记留言窗口开关
        showContentFlag: false,
        courseCatalogList: [],
        imageUrlList: [],//缓存图片地址
        thumbnailImages: [],//缓存缩略图地址
        uuid: null,
        progress: 0,//学习进度（视频观看了多少秒，文件观看了几页）
        videoData: {},//视频学习记录
        user: null,//用户信息
        markdownContent: "",
        headShowFlag: true,
        bodyShowFlag: true,
        footShowFlag: true,
        fullScreenFlag: false,
        isHaveContentFlag: false,
        eBookIndex: null,
        selectedNode: null,

        markList:[],//回显当前附件已标记列表
        dialogDisplayMediaDialog: false,
        dialogDisplayTextDialog: false,//气泡批注回显查看

      }
    },
    mounted() {
      this.$store.state.headIsShow = false;
      this.$store.state.footIsShow = false;
      this.uuid = doGetUUID();
      const {id, skillResourceId, skillResourceType, index} = this.$route.query;
      this.accessoryId = id;
      this.skillResourceId = skillResourceId;
      this.skillResourceType = skillResourceType;
      this.eBookIndex = parseInt(index) + 1;
      console.log("Spe Source Study Page,", this.skillResourceId, this.accessoryId);
      this.listPersonCenterHySkillResources();//根据资源id，加载资源详情
      this.findAccessoryDetails(this.accessoryId);
      if (skillResourceType === '2') {
        this.findEbookMarkCatalogueList();
      } else {
        this.doGetSourceCatalogList();
      }
      this.getCurUser();
      //监听键盘Esc按键事件
      let self = this;
      this.$nextTick(function () {
        document.addEventListener('keydown', function (e) {
          //此处填写你的业务逻辑即可
          if (e.keyCode === 27) {
            self.fullScreenFlag = !self.fullScreenFlag;
          }
          //右
          if (e.keyCode === 39) {
            self.nextPage();
          }
          //左
          if (e.keyCode === 37) {
            self.prevPage();
          }
          //上
          if (e.keyCode === 38) {
            self.prevPage();
          }
          //下
          if (e.keyCode === 40) {
            self.nextPage();
          }
        });
      });
    },
    methods: {
      handleClick() {
      },
      async listCourseFileMarkByParam(id){
        let params = {}
        if(typeof(id)=="undefined" || id==null || id==""){
          if(this.skillResourceType*1==1){
            params={
              accessoryId:this.accessoryId,
              fileImgIndex:this.currentPage
            }
          }else if(this.skillResourceType*1==2){
            params= {
              fileComAccessoryId: this.accessoryId,
              fileImgIndex:this.currentPage
            }
          }
        }else{
          params= {
            id: id
          }
        }
        const  { data } =  await API.pcCourseFileMark.listCourseFileMarkByParam(params);
        this.markList = data.page;
      },
      getMarkIconImgUrl(item){
        //return this.$imghost+'/personalCenter/pcCourseFileMark/1.png';
        if(item.markType==1){//批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
          return this.$imghost+'/personalCenter/pcCourseFileMark/icon/1.png';
        }else if(item.markType==2){
          if(item.multiMediaType==1){//多媒体批注类型（1：图片；2：音频；3：视频；）
            return this.$imghost+'/personalCenter/pcCourseFileMark/icon/21.png';
          }else if(item.multiMediaType==2){
            return this.$imghost+'/personalCenter/pcCourseFileMark/icon/22.png';
          }else if(item.multiMediaType==3){
            return this.$imghost+'/personalCenter/pcCourseFileMark/icon/23.png';
          }
        }else if(item.markType==3){
          return this.$imghost+'/personalCenter/pcCourseFileMark/icon/3.png';
        }else if(item.markType==4){
          return this.$imghost+'/personalCenter/pcCourseFileMark/icon/4.png';
        }
        return this.$imghost+'/personalCenter/pcCourseFileMark/icon/1.png';
      },
      imgCvsInit(){
        //this.$message.info("study page test comment btn click");
        //图片初始化完成
        let img = document.getElementById("cvsImg");
        console.log('图片初始化完成',img)
        let that = this;
        img.onload=function () {
          let imgW=img.offsetWidth;
          let imgH=img.offsetHeight;
          console.log("imgCvsInit=",imgW,imgH)

          //console.log("-222-->",that.$refs.speSourceStudyCfm.currentPage,that.$refs.speSourceStudyCfm)
          //that.currentPage=that.$refs.speSourceStudyCfm.currentPage;
          //加载批注列表
          that.listCourseFileMarkByParam();

          // that.paramObj.markImgOriginalWidth = img.naturalWidth;
          // that.paramObj.markImgOriginalHeight = img.naturalHeight;
          // that.paramObj.markImgRealWidth=imgW;
          // that.paramObj.markImgRealHeight=imgH;

          // console.log("图片显示尺寸：",img.offsetWidth, img.offsetHeight,"-----------","图片原始尺寸：",img.naturalWidth,img.naturalHeight)
          // let myCanvas = document.getElementById("myCanvas");
          // myCanvas.style.width=imgW+'px';
          // myCanvas.style.height=imgH+'px';
          // myCanvas.width=imgW;
          // myCanvas.height=imgH;
          //
          let imgParentDiv = document.getElementById("imgParentDiv");
          imgParentDiv.style.width=imgW+'px';
          imgParentDiv.style.height=imgH+'px';

          let dynamicCreationDiv = document.getElementById("dynamicCreationDiv2");
          dynamicCreationDiv.style.width=imgW+'px';
          dynamicCreationDiv.style.height=imgH+'px';

          that.$emit("img-cvs-init-load");

          //that.listCourseFileMarkByParam();
        }
      },
      async qpDialogShowOpen(item){

        let pageType=3;//pageType:3,//1新增2编辑 3查看

        let params= {
          id: item.id
        }
        const  { data } =  await API.pcCourseFileMark.listCourseFileMarkByParam(params);
        let obj = data.page[0];

        if(item.markType==1){//批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
          this.dialogDisplayTextDialog=true;
          this.$refs.textDialog.obj={
            bubbleDescribe:obj.bubbleDescribe,
            bubbleLink:obj.bubbleLink,
            pageType:pageType,//1新增2编辑
            dtype:obj.markType,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
          };
        }else if(item.markType==2){
          this.$refs.mediaDialog.obj={
            multiMediaType:obj.multiMediaType+"",
            multiMediaTitle:obj.multiMediaTitle,
            multiMediaDescribe:obj.multiMediaDescribe,
            multiMediaImgUrl_comfile:obj.bindMultiMediaImgList,
            multiMediaImgUrlAudio:obj.multiMediaImgUrl,
            multiMediaImgUrlVideo:obj.multiMediaImgUrl,

            pageType:pageType,//1新增2编辑
            dtype:obj.markType,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
          };

          if(item.multiMediaType==1){//多媒体批注类型（1：图片；2：音频；3：视频；）

          }else if(item.multiMediaType==2){
          }else if(item.multiMediaType==3){
          }

          this.dialogDisplayMediaDialog=true;

        }else if(item.markType==3){
        }else if(item.markType==4){
        }
      },
      //关闭对话框
      handleClose(obj) {
        this.dialogClose(obj.dtype,obj.pageType);//pageType:3,//1新增 2编辑 3查看
      },
      dialogClose(type,pageType){//pageType:3,//1新增2编辑 3查看
        console.log("dialogClose(type)",type)
        if(type==1){
          this.dialogDisplayTextDialog = false;
        }else if(type==2){
          this.dialogDisplayMediaDialog= false;
        }
      },

      async listPersonCenterHySkillResources() {
        let params = {
          id: this.skillResourceId
        }
        const {data} = await API.pcCourseSource.listPersonCenterHySkillResources(params)
        // console.log("listPersonCenterHySkillResourcesForOne data=",data);
        if (data && data.code === 0 && data.page.list.length == 1) {
          // this.tableData = data.page.list;
          this.skillResourceObj = data.page.list[0];
        }
      },
      async getCurUser() {
        const {data: {code, msg, data}} = await API.spesourcestudy.findCurrentUser();
        if (code === 0) {
          this.user = data;
        } else {
          this.$message.error(msg);
        }
      },
      async doGetSourceCatalogList() {
        const params = {
          skillResourcesId: this.skillResourceId,
        };
        const {data: {code, msg, page}} = await API.pcCourseDirFileExameEdit.listSkillCourseDirTree(params);
        if (code === 0) {
          this.courseCatalogList = page;
        } else {
          this.courseCatalogList = [];
          this.$message.warning(msg);
        }
      },
      async findEbookMarkCatalogueList() {
        const params = {skillResourcesId: this.skillResourceId};
        const {data: {code, msg, list}} = await API.spesourcestudy.getEbookMarkDirList(params);
        if (code === 0) {
          this.courseCatalogList = list;
        } else {
          this.$message.error(msg);
          this.courseCatalogList = [];
        }
      },
      async findAccessoryDetails(id) {
        if (!id) {
          id = this.accessoryId;
        }
        let result;
        if (this.skillResourceType === "1") {
          result = await API.spesourcestudy.findAccessoryDetailById(id);
        } else {
          result = await API.spesourcestudy.findComAccessoryDetailById(id);
        }
        const {code, msg, data} = result.data;
        if (code === 0) {
          if (this.skillResourceType === "1") {
            this.accessoryDetails = data;
          } else {
            this.accessoryDetails = {comAccessoryEntity: {...data}};
          }
          const {comAccessoryEntity: {fileName, fileType, filePath}} = this.accessoryDetails;
          this.fileName = fileName;
          this.fileType = fileType;
          this.filePath = this.$ossFileHost + filePath;
          if (fileType === 10) {
            const {data} = await API.common.getMarkDownText(filePath);
            this.markdownContent = data;
          }
          this.formatImageUrl();//格式化阅读内容和缩略图
          if (this.skillResourceType === "1") {
            await this.doGetStudyProgress();//查询用户附件学习进度
          } else {
            this.progress = this.eBookIndex;
          }
          if (fileType === 1) {
            this.videoData = {
              currentTime: this.progress,
              accessoryId: this.accessoryId,
            };
          } else {
            const studyProgress = parseInt(this.progress + "");
            this.currentPage = studyProgress <= 0 ? studyProgress : studyProgress - 1;
          }
          this.isHaveContent();
        } else {
          this.accessoryDetails = {};
          this.$message.warning(msg);
        }
      },
      formatImageUrl() {
        const {comAccessoryEntity: {cacheFilePathJpg, cacheFilePathJpgSmall, cacheJpgNum}} = this.accessoryDetails;
        this.imageUrlList = [];
        this.thumbnailImages = [];
        if (cacheFilePathJpg && cacheJpgNum) {
          for (let i = 0; i < cacheJpgNum; i++) {
            this.imageUrlList.push({
              id: i, path: this.$ossFileHost + cacheFilePathJpg + i + '.jpg'
            });
          }
        }
        if (cacheFilePathJpgSmall && cacheJpgNum) {
          for (let i = 0; i < cacheJpgNum; i++) {
            this.thumbnailImages.push({
              id: i, path: this.$ossFileHost + cacheFilePathJpgSmall + i + '.jpg'
            });
          }
        }
        this.totalPage = this.thumbnailImages.length;
      },
      checkFileType(type) {
        if (!type) {
          type = this.fileType;
          if (type === 1 || type === 10) return false;
        }
        return true;
      },
      getImageUrl(index) {
        const imageObj = this.imageUrlList[index];
        if (imageObj) {
          return imageObj.path;
        }
      },
      changeCatalog(data) {
        const {id, fileType, urlJump} = data;
        if (fileType === 2) {
          window.open(urlJump, '_blank');
        } else {
          this.accessoryId = id;
          const query = {skillResourceId: this.skillResourceId, id: id, skillResourceType: this.skillResourceType};
          this.$router.push({path: '/SpeSourceStudy', query: query});
          this.findAccessoryDetails(id);
        }
      },
      eBookChangeCatalog(node, data) {
        // console.log("node", node);
        const {children, fileImgIndex} = node;
        if (children == null || children.length <= 0) {
          this.currentPage = fileImgIndex;
        }
        this.selectedNode = node;
      },
      /**
       * 添加电子书目录节点
       * @param name 目录名称
       * @param markId 标注ID
       * @param type 添加的目录类型，1：添加子级目录；2：添加同级目录
       */
      async addCatalogueNode(name, markId, type) {
        let selectedId = 0;
        if (this.selectedNode) {
          const {id, parentId} = this.selectedNode;
          selectedId = type === 1 ? id : parentId;
        }
        if (name == null || name == '') {
          this.$message.error("请输入目录名称");
          return;
        }
        const params = {
          skillResourcesId: this.skillResourceId,
          fileComAccessoryId: this.accessoryId,
          fileImgIndex: this.currentPage,
          markId: markId,
          name: name,
          parentId: selectedId
        };
        const {data: {code, msg}} = await API.spesourcestudy.saveEbookMarkDir(params);
        if (code !== 0) {
          this.$message.error(msg);
          return;
        }
        this.findEbookMarkCatalogueList();
      },
      isHaveContent() {
        let result = false;
        if (this.fileType === 1 || this.fileType === 10) {
          if (this.filePath == null || this.filePath == "") {
            //result = true;
            this.isHaveContentFlag = true;
          }
        } else {
          if (this.imageUrlList.length <= 0) {
            //result = true;
            this.isHaveContentFlag = true;
          }
        }
        let that = this;
        this.$nextTick(() => {//获取图片对象，初始化图片及canvas尺寸
          let cvsImg = document.getElementById("cvsImg");
          if (cvsImg != null) {
            that.$emit("img-cvs-init")
          }
          that.imgCvsInit();
          that.listCourseFileMarkByParam();//加载标记信息
        });
        this.isHaveContentFlag = result;
        // return result;
      },
      handleFullScreenClick() {
        this.getFullScreen();
      },
      handleLeaveMessageClick() {
        this.noteAndMessageFlag = !this.noteAndMessageFlag;
      },
      //上一页
      prevPage() {
        if (this.currentPage == 0) {
          this.$message.warning({message: '当前为第一页！', duration: 500});
        } else {
          this.currentPage--;
        }
      },
      //下一页
      nextPage() {
        if (this.currentPage == this.totalPage - 1) {
          this.$message.warning({message: '当前为最后一页！', duration: 500});
          return;
        } else {
          this.currentPage++;
        }
        const studyTime = {
          currentTime: this.currentPage + 1,
          duration: this.totalPage
        };
        //记录学习进度
        this.saveStudyProgress(studyTime);
      },
      changeImage(index) {
        this.currentPage = index;
        const studyTime = {
          currentTime: this.currentPage + 1,
          duration: this.totalPage
        };
        //记录学习进度
        this.saveStudyProgress(studyTime);
      },
      videoStudyTime(studyTime) {//监听视频文件暂时事件
        // const { currentTime, duration } = studyTime;
        // console.log("video is stop",currentTime,duration);
      },
      videoTimeUpdate(studyTime) {//监听视频文件播放进度
        // const { currentTime, duration } = studyTime;
        // console.log("video is playing",currentTime,duration);
      },
      async videoDestroyed(studyTime, id) {
        //console.log("video is destroyed",currentTime,duration,id);
        //记录学习进度
        await this.saveStudyProgress(studyTime, id);
      },
      async saveStudyProgress(studyTime, id) {
        const {currentTime, duration} = studyTime;
        if (!id) {
          id = this.accessoryId;
        }
        const params = {
          "skillResourcesId": this.skillResourceId,
          "accessoryId": id,
          "uuid": this.uuid,
          "studySec": parseInt(currentTime),
          "videoTotalSec": parseInt(duration)
        };
        const {data: {code, msg}} = await API.spesourcestudy.saveOrUpdateStudyTime(params);
        if (code !== 0) {
          this.$message.error(msg);
        }
      },
      async doGetStudyProgress() {
        const params = {
          "skillResourcesId": this.skillResourceId,
          "accessoryId": this.accessoryId,
        };
        const {data: {code, msg, data}} = await API.spesourcestudy.findStudyTimeByParams(params);
        if (code === 0) {
          if (data) {
            const {studySec} = data;
            this.progress = studySec;
          } else {
            this.progress = 0;
          }
        } else {
          this.$message.error(msg);
        }
      },
      catalogBtnClick() {
        this.$emit("catalog-btn-click");
      },
      commentBtnClick() {
        //this.$emit("comment-btn-click");
        this.$emit("cvs-show");
      },
      catalogBtnMsover() {
        this.catalogIconTmp = this.catalogIconHover
      },
      catalogBtnMsout() {
        this.catalogIconTmp = this.catalogIcon
      },
      commentBtnMsover() {
        this.commentIconTmp = this.commentIconHover
      },
      commentBtnMsout() {
        this.commentIconTmp = this.commentIcon
      },
      inFullScreen(element) {
        let el = element;
        let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
          el.mozRequestFullScreen || el.msRequestFullScreen;
        if (typeof rfs != "undefined" && rfs) {
          rfs.call(el);
        } else if (typeof window.ActiveXObject != "undefined") {
          let wscript = new ActiveXObject("WScript.Shell");
          if (wscript != null) {
            wscript.SendKeys("{F11}");
          }
        } else {
          let element = document.documentElement;
          if (element.requestFullscreen) {
            element.requestFullscreen();
            return true
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
            return true
          } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
            return true
          } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
            return true
          }
        }
      },
      outFullScreen(element) {
        let el = element;
        let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
          el.mozCancelFullScreen || el.exitFullScreen;
        if (typeof cfs != "undefined" && cfs) {
          cfs.call(el);
        } else if (typeof window.ActiveXObject != "undefined") {
          let wscript = new ActiveXObject("WScript.Shell");
          if (wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }
      },
      getFullScreen() {
        this.fullScreenFlag = !this.fullScreenFlag;
        this.fullScreenFlag ? this.inFullScreen(document.documentElement) : this.outFullScreen(document)
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/spespurce/spesourcestudy.css";
</style>
<style  >
  /* 自定义内容的区域的颜色 */
  .SpeSourceStudyTp {
    background: #ffffff !important;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
  }
  /* 改变三角形颜色 */
  /* 朝上 */
  .SpeSourceStudyTp[x-placement^="bottom"] .popper__arrow:after {
    border-bottom-color: #ffffff;
  }
  /* 朝下 */
  .SpeSourceStudyTp[x-placement^="top"] .popper__arrow:after {
    border-top-color: #ffffff;
  }
  /* 改变三角形外边框 */
  /* 三角形朝下的时候 */
  .SpeSourceStudyTp[x-placement^="bottom"] .popper__arrow {
    border-bottom-color: #ffffff !important;
  }
  /* 三角形朝上的时候 */
  .SpeSourceStudyTp[x-placement^="top"] .popper__arrow {
    border-top-color: #ffffff !important;
  }
</style>
