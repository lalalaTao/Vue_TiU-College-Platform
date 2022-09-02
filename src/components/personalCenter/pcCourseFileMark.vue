<template>
  <div style="width: 100%;height: 100%">
     <spe-source-study ref="speSourceStudyCfm" :catalog-show-flag="false" :comment-btn-flag="true" :catalog-btn-flag="false" @comment-btn-click="commentBtnClick()" @img-cvs-init="imgCvsInit" @img-cvs-init-load="imgCvsInitLoad" @cvs-show="cvsShow"  >
      <template>
        <canvas v-show="cvsShowFlag" id="myCanvas" ref="myCanvas" style="position: absolute;z-index: 1;top: 0px;left: 0px;border:0px solid #00ff00;"
                width="1920" height="1080" @mousedown="cvsMousedown" @mouseup="cvsMouseup" @mousemove="cvsMousemove">
        </canvas>
        <div id="dynamicCreationDiv" style="width: 1920px;height: 1080px;position: absolute;z-index: 0;top: 0px;left: 0px;">

          <div v-for="(item,index) in markList"  >
            <el-tooltip  popper-class="pcCourseFileMarkTp" placement="top">
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
        <div id="tisi1" class="markDivTooltipMain" ref="tisi1" v-show="tisiShowFlag" style="">
          <div class="subBtn" @click="showDialog(1)">气泡标注</div>
          <div class="subBtn" @click="showDialog(2)">多媒体</div>
          <div class="subBtn" @click="showDialog(3)">交互练习</div>
          <div class="subBtn" @click="showDialog(4)">交互测试</div>
        </div>
      </template>
    </spe-source-study>

    <text-dialog-edit ref="textDialogEdit"    :dialog-display="dialogDisplayTextDialogEdit" @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick" :dtype="1" :page-type="1"></text-dialog-edit>
    <text-dialog ref="textDialog" :title="'气泡批注'"   :dialog-display="dialogDisplayTextDialog" :foot-btn-display="false" @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick" :dtype="1" :page-type="1"></text-dialog>

    <media-dialog-edit ref="mediaDialogEdit"    :dialog-display="dialogDisplayMediaDialogEdit" @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick" :dtype="1" :page-type="1"></media-dialog-edit>
    <media-dialog ref="mediaDialog"    :dialog-display="dialogDisplayMediaDialog" @comment-close="handleClose" @delete-click="deleteClick" @edit-click="editClick" :dtype="1" :page-type="1"></media-dialog>


  </div>
</template>

<script>
  import SpeSourceStudy from "../spesource/SpeSourceStudy";
  import TextDialogEdit from "../commentPopups/TextDialogEdit";
  import TextDialog from "../commentPopups/TextDialog";
  import MediaDialogEdit from "../commentPopups/MediaDialogEdit";
  import MediaDialog from "../commentPopups/MediaDialog";
  import API from '@/api'

  export default {
    name: "pcCourseFileMark",
    components: {
      SpeSourceStudy,
      TextDialogEdit, TextDialog,
      MediaDialogEdit,MediaDialog,
    },
    data() {
      return {
        imghost:this.$imghost,
        flag: false,
        startX: 0,
        startY: 0,
        endX:0,
        endY:0,
        cvsShowFlag:false,
        tisiShowFlag:false,

        mkDivIds:"",//临时div的id，如果该div未保存，则删除该div

        dialogDisplayTextDialogEdit: false,
        dialogDisplayMediaDialogEdit: false,
        dialogDisplayMediaDialog: false,
        dialogDisplayTextDialog: false,//气泡批注回显查看

        paramId:'',//url传递过来的参数
        paramType:1,//url传递过来的参数  1普通附件，2电子书
        currentPage:0,//当前第一页
        paramObj:{
          skillResourcesId: 156,
          type: 1,
          sourceDirId: 0,
          accessoryId: 0,
          fileComAccessoryId: 0,
          fileMarkType: 2,
          fileImgIndex: 0,
          markType: 1,
          bubbleDescribe: "",
          bubbleLink: "",

          markImgOriginalWidth: 0,
          markImgOriginalHeight: 0,
          markDivStartPoint: 0,
          markDivEndPoint: 0,

          markImgRealWidth: 0,
          markImgRealHeight: 0,
          markDivWidth: 0,
          markDivHeight: 0,
          markDivLeft: 0,
          markDivTop: 0,
          markDivZindex: 0
        },

        markList:[],//回显当前附件已标记列表






      };

    },

    watch: {},
    computed: {},
    mounted(){
      // this.$refs.speSourceStudyCfm.catalogBtnFlag=false
      // this.$refs.speSourceStudyCfm.commentBtnFlag=true

      console.log("-111-->",this.$refs.speSourceStudyCfm.currentPage,this.$refs.speSourceStudyCfm)
    },
    activated(){
      let id=this.$route.query.id;
      let type=this.$route.query.type;
      this.paramId = id;
      if(typeof(type)!='undefined' && type!=null && type!='') {//
        this.paramType = type;
      }
      console.log(" this.paramType =", this.paramType )








    },
    methods: {

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


      async listCourseFileMarkByParam(id){
        //let params = this.paramObj;
        let params = {}

        // if(typeof(this.paramId)!='undefined' && this.paramId!=null && id!=''){
        //   if(typeof(this.paramType)!='undefined' && this.paramType!=null && this.paramType!='') {//
        //     this.paramObj.fileComAccessoryId=id;//电子书id
        //     this.paramObj.type=2;
        //   }else{
        //     this.paramObj.accessoryId=id;//附件id
        //     this.paramObj.type=1;//	标记类型：1资源课程目录附件；2资源电子书；
        //   }
        // }

        // console.log("id:",id,this.paramType,this.paramId)

        if(typeof(id)=="undefined" || id==null || id==""){
          if(this.paramType*1==1){
            params={
              accessoryId:this.paramId,
              fileImgIndex:this.currentPage
            }
          }else if(this.paramType*1==2){
            params= {
              fileComAccessoryId: this.paramId,
              fileImgIndex:this.currentPage
            }
          }
        }else{
          params= {
            id: this.paramId
          }
        }

        const  { data } =  await API.pcCourseFileMark.listCourseFileMarkByParam(params);
        this.markList = data.page;

      },
      dataInit(){
        //清空paramObj，删除dom
        this.paramObj={
          skillResourcesId: 156,
          type: 1,
          sourceDirId: 0,
          accessoryId: 0,
          fileComAccessoryId: 0,
          fileMarkType: 2,
          fileImgIndex: 0,
          markType: 1,
          bubbleDescribe: "",
          bubbleLink: "",

          markImgOriginalWidth: 0,
          markImgOriginalHeight: 0,
          markDivStartPoint: "",
          markDivEndPoint: "",

          markImgRealWidth: 0,
          markImgRealHeight: 0,
          markDivWidth: 0,
          markDivHeight: 0,
          markDivLeft: 0,
          markDivTop: 0,
          markDivZindex: 0
        };
        this.clearCvs();
      },
      dialogClose(type,pageType){//pageType:3,//1新增2编辑 3查看
        console.log("dialogClose(type)",type)


        this.clearCvs();
        if(type==1){
          this.dialogDisplayTextDialogEdit = false;
          this.dialogDisplayTextDialog = false;

          if(pageType!==3){
            this.$refs.textDialogEdit.$refs.eb.clearEditorText();//清空子组件的文本
            this.$refs.textDialogEdit.obj={
              bubbleDescribe:'',
              bubbleLink:'',
              pageType:'',//1新增2编辑
              dtype:1,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
            };
          }

        }else if(type==2){
          this.dialogDisplayMediaDialogEdit = false;
          this.dialogDisplayMediaDialog= false;

          if(pageType!==3) {
            this.$refs.mediaDialogEdit.obj = {
              bubbleDescribe: '',
              bubbleLink: '',
              pageType: 1,//1新增2编辑
              dtype: 2,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
              multiMediaType: "1",//多媒体批注类型（1：图片；2：音频；3：视频；）
              multiMediaTitle: '',//标题
              multiMediaDescribe: '',//批注描述
              // multiMediaImgUrl:'',
              multiMediaImgUrl_comfile: [],
              multiMediaImgUrlAudio: '',
              multiMediaImgUrlAudio_comfile: {
                fileName: "",
                fileNameHasSuffix: "",
                fileNameNew: "",
                uuid: "",
                fileSize: "0.13",
                fileSize3: 0.132,
                fileType: 6,
                fileSrc: "",
                fileSuffix: "jpg"
              },
              multiMediaImgUrlVideo: '',
              multiMediaImgUrlVideo_comfile: {
                fileName: "",
                fileNameHasSuffix: "",
                fileNameNew: "",
                uuid: "",
                fileSize: "0.13",
                fileSize3: 0.132,
                fileType: 6,
                fileSrc: "",
                fileSuffix: "jpg"
              },
              //附件其他信息?
            };
          }

        }
      },
      //删除按钮事件
      deleteClick(obj){
        this.dataInit();
        console.log("deleteClick---",obj)
        this.dialogClose(obj.dtype)
        //this.dialogDisplayTextDialogEdit = !this.dialogDisplayTextDialogEdit;
        // if(obj.dtype==1){
        //   this.dialogDisplayTextDialogEdit = false;
        //   this.$refs.textDialogEdit.$refs.eb.clearEditorText();//清空子组件的文本
        //   this.$refs.textDialogEdit.obj={
        //     bubbleDescribe:'',
        //     bubbleLink:'',
        //     pageType:'',//1新增2编辑
        //     dtype:1,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
        //   };
        // }else if(obj.dtype==2){
        //   this.dialogDisplayMediaDialogEdit = false;
        // }

        //this.$message.info("page test delete click");
      },
      //编辑按钮事件
      async editClick(obj){
        console.log("editClick:",obj)

        if(obj.dtype==1){//dtype:2,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
          this.paramObj.bubbleDescribe = obj.bubbleDescribe;
          this.paramObj.bubbleLink = obj.bubbleLink;
        }else if(obj.dtype==2){
          if(obj.multiMediaType=="1"){//多媒体批注类型（1：图片；2：音频；3：视频；）
            this.paramObj.multiMediaDescribe = obj.multiMediaDescribe;
            // this.paramObj.multiMediaImgUrl = obj.multiMediaImgUrl;
            this.paramObj.bindMultiMediaImgList = obj.multiMediaImgUrl_comfile;
          }else if(obj.multiMediaType=="2"){
            this.paramObj.multiMediaImgUrl = obj.multiMediaImgUrlAudio;
            this.paramObj.bindMultiMediaFile = obj.multiMediaImgUrlAudio_comfile;
          }else if(obj.multiMediaType=="3"){
            this.paramObj.multiMediaImgUrl = obj.multiMediaImgUrlVideo;
            this.paramObj.bindMultiMediaFile = obj.multiMediaImgUrlVideo_comfile;
          }
          this.paramObj.multiMediaType = obj.multiMediaType;
          this.paramObj.multiMediaTitle = obj.multiMediaTitle;
        }


        if(obj.dtype==1){//dtype:1,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）


        }

        this.paramObj.type=this.paramType;//	标记类型：1资源课程目录附件；2资源电子书；
        this.paramObj.markType = obj.dtype;
        if(typeof(this.paramId)!='undefined' && this.paramId!=null && this.paramId!=''){
          if(this.paramType==2) {//
            this.paramObj.fileComAccessoryId=this.paramId;//电子书id
          }else{
            this.paramObj.accessoryId=this.paramId;//附件id
          }
        }

        let params = this.paramObj;
        const  { data } =  await API.pcCourseFileMark.saveOrUpdateCourseFileMark(params);
        if(data.code==0){
          this.$message.success("操作成功！");
          // this.$refs.textDialogEdit.$refs.eb.clearEditorText();//清空子组件的文本
          // this.$refs.textDialogEdit.obj={
          //   bubbleDescribe:'',
          //   bubbleLink:'',
          //   pageType:'',//1新增2编辑
          //   dtype:1,//标注类型：批注类型（1：气泡批注；2：多媒体；3：交互练习；4：交互测试；）
          // };
          // this.dialogDisplayTextDialogEdit = !this.dialogDisplayTextDialogEdit;

          //this.deleteClick();
          this.dataInit();
          this.dialogClose(params.markType);

          this.listCourseFileMarkByParam();
        }else{
          this.$message.error("操作失败："+data.msg);
        }

        // this.$message.info("page test edit click");
      },
      //打开对话框
      showDialog(type){
        //显示气泡
        this.tisiShowFlag=false;
        //隐藏按钮弹框
        //this.dialogDisplayTextDialogEdit = !this.dialogDisplayTextDialogEdit;
        if(type==1){
          this.dialogDisplayTextDialogEdit = true;
        }else if(type==2){
          this.dialogDisplayMediaDialogEdit = true;
        }

        if(this.cvsShowFlag==true){
          this.cvsShowFlag=false;
        }else{
          this.cvsShowFlag=true;
        }
      },
      //关闭对话框
      handleClose(obj) {
        this.dialogClose(obj.dtype,obj.pageType);//pageType:3,//1新增2编辑 3查看
        // this.dialogDisplayTextDialogEdit = !val;
        // this.dialogDisplayTextDialogEdit = false;
        // this.dialogDisplayTextDialog = false;
        // this.deleteClick();
      },
      // cvsHide(){
      //   this.cvsShowFlag=false;
      //   this.clearCvs();
      //   this.handleClose();
      //   this.tisiShowFlag=false;
      // },
      cvsShow(){
        this.cvsShowFlag=true;
        console.log(1111111111)
        this.showCvsBorder();
      },
      imgCvsInit(){
        //this.$message.info("study page test comment btn click");
        //图片初始化完成
        let img = document.getElementById("cvsImg");
        console.log('图片初始化完成2',img)
        let that = this;
        img.onload=function () {
          that.imgCvsInitLoad();
        }
      },
      imgCvsInitLoad(){
        let img = document.getElementById("cvsImg");
        let that = this;
        let imgW=img.offsetWidth;
        let imgH=img.offsetHeight;

        console.log("imgCvsInit2=",imgW,imgH)

        //console.log("-222-->",that.$refs.speSourceStudyCfm.currentPage,that.$refs.speSourceStudyCfm)
        that.currentPage=that.$refs.speSourceStudyCfm.currentPage;
        //加载批注列表
        that.listCourseFileMarkByParam();

        that.paramObj.markImgOriginalWidth = img.naturalWidth;
        that.paramObj.markImgOriginalHeight = img.naturalHeight;
        that.paramObj.markImgRealWidth=imgW;
        that.paramObj.markImgRealHeight=imgH;

        // console.log("图片显示尺寸：",img.offsetWidth, img.offsetHeight,"-----------","图片原始尺寸：",img.naturalWidth,img.naturalHeight)
        let myCanvas = document.getElementById("myCanvas");
        myCanvas.style.width=imgW+'px';
        myCanvas.style.height=imgH+'px';
        myCanvas.width=imgW;
        myCanvas.height=imgH;

        let imgParentDiv = document.getElementById("imgParentDiv");
        imgParentDiv.style.width=imgW+'px';
        imgParentDiv.style.height=imgH+'px';

        //document.getElementById("dynamicCreationDiv").style.display="none";
        that.$refs.speSourceStudyCfm.$refs.dynamicCreationDiv2.style.display="none";
        // console.log("that.$refs.speSourceStudyCfm.dynamicCreationDiv2=",that.$refs.speSourceStudyCfm.$refs.dynamicCreationDiv2)

        let dynamicCreationDiv = document.getElementById("dynamicCreationDiv");
        dynamicCreationDiv.style.width=imgW+'px';
        dynamicCreationDiv.style.height=imgH+'px';

        // conosole.log("dynamicCreationDiv.style=",dynamicCreationDiv.style)

        that.listCourseFileMarkByParam();

      },
      commentBtnClick(){
        this.$message.info("study page test comment btn click");
      },
      // close2(){
      //   this.tisiShowFlag=false;
      // },
      // msgtisi(){
      //   alert("对应的操作")
      // },


      cvsMousedown(e){

        this.flag = true;
        this.startX = e.offsetX; // 鼠标落下时的X
        this.startY = e.offsetY; // 鼠标落下时的Y
        console.log("鼠标落下",this.startX,this.startY);
        this.clearCvs();
        if(this.tisiShowFlag==true){
          this.tisiShowFlag = false;
        }
      },
      cvsMouseup(e){

        console.log("鼠标抬起",this.endX,this.endY);
        this.flag = false;

        let w=this.endX-this.startX;
        let h=this.endY-this.startY;
        let left = this.startX
        let top = this.startY
        console.log(w,h,left,top)

        // alert("生成dom")

        if(this.endX-this.startX<0){
          return;
        }
        if(this.endY-this.startY<0){
          return;
        }

        let num = document.querySelectorAll('.locationdiv');
        console.log("num=",num,num.length);
        let div = document.createElement('div');
        div.style="width: "+(this.endX-this.startX)+"px;height:"+(this.endY-this.startY)+"px;position: absolute;z-index: "+(num.length+10)+";top:"+(this.startY)+"px;left:"+(this.startX)+"px;opacity: 0.1;background: #00bda5;";
        div.id="test"+(num+1);
        this.mkDivIds = div.id;
        div.classList.add('locationdiv')
        document.getElementById("dynamicCreationDiv").appendChild(div);

        this.paramObj.markDivStartPoint=this.startX+","+this.startY;
        this.paramObj.markDivEndPoint=this.endX+","+this.endY;

        this.paramObj.markDivWidth=(this.endX-this.startX);
        this.paramObj.markDivHeight=(this.endY-this.startY);
        this.paramObj.markDivLeft=this.startX;
        this.paramObj.markDivTop=this.startY;
        this.paramObj.markDivZindex=num.length+10;
        this.paramObj.fileImgIndex=this.currentPage;

        //清空画板
        const canvas = this.$refs.myCanvas;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'rgba(255, 255, 255, 0)';
        ctx.clearRect(0,0,canvas.width,canvas.height);
        this.showCvsBorder();

        // div.addEventListener('click', function handleClick(event) {
        //  alert(111);
        // });

        // tisi

        let tisi = document.getElementById("tisi1");
        // let tisi = this.$refs.tisi1;
        // console.log(tisi)
        tisi.style.left=(this.endX)+'px';
        tisi.style.top=(this.endY)+'px';
        this.tisiShowFlag=true;
      },
      cvsMousemove(e){
        // console.log("鼠标移动");
        this.drawRect(e);
      },
      drawRect(e){
        if(this.flag){
          // console.log("绘制图形");
          const canvas = this.$refs.myCanvas;
          var ctx = canvas.getContext("2d");
          ctx.fillStyle = 'rgba(255, 255, 255, 0)';
          let x = this.startX;
          let y = this.startY;
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.beginPath();

          this.showCvsBorder();
          //设置线条颜色，必须放在绘制之前

          if((e.offsetX-x>0) && (e.offsetY-y>0)){
            //实时绘制实心矩形
            ctx.rect(x,y,e.offsetX-x,e.offsetY-y);
            ctx.fillStyle =  'rgb(0,189,165,0.1)';
            ctx.fill();
          }else{
            //这种情况不处理。
          }
          this.endX = e.offsetX;
          this.endY = e.offsetY;
        }

      },
      showCvsBorder(){
        const canvas = this.$refs.myCanvas;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'rgba(255, 255, 255, 0)';
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 1;
        ctx.strokeRect(0,0,canvas.width,canvas.height);
        // ctx.clearRect(0,0,canvas.width,canvas.height);
      },
      clearCvs(){
        //清空画板
        // const canvas = this.$refs.myCanvas;
        // var ctx = canvas.getContext("2d");
        // ctx.fillStyle = 'rgba(255, 255, 255, 0)';
        // ctx.clearRect(0,0,canvas.width,canvas.height);

        // 清空临时div（最近一个未保存到数据库的div）
        if(this.mkDivIds!=null && this.mkDivIds!=''){
          let tmpDiv = document.getElementById(this.mkDivIds);
          tmpDiv.remove();
          this.mkDivIds='';
        }

      },


    },

    created() {

    },
  }
</script>

<style  >
  /* 自定义内容的区域的颜色 */
  .pcCourseFileMarkTp {
    background: #ffffff !important;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
  }
  /* 改变三角形颜色 */
  /* 朝上 */
  .pcCourseFileMarkTp[x-placement^="bottom"] .popper__arrow:after {
    border-bottom-color: #ffffff;
  }
  /* 朝下 */
  .pcCourseFileMarkTp[x-placement^="top"] .popper__arrow:after {
    border-top-color: #ffffff;
  }
  /* 改变三角形外边框 */
  /* 三角形朝下的时候 */
  .pcCourseFileMarkTp[x-placement^="bottom"] .popper__arrow {
    border-bottom-color: #ffffff !important;
  }
  /* 三角形朝上的时候 */
  .pcCourseFileMarkTp[x-placement^="top"] .popper__arrow {
    border-top-color: #ffffff !important;
  }
</style>

<style scoped lang="scss">
  @import "../../assets/css/personalCenter/pcCourseFileMark.scss";

</style>

