<template>
  <div style="height: 100%;width: 100%;text-align: center;">

    <div style="width: 800px;height: 600px;border: 0px solid red;margin: 0px auto;">
      <el-input type='textarea' v-model="questionStr" clearable></el-input><el-button @click="subMitQuestionStr" style="float: left">提交</el-button>
      <el-button @click="downloadFile">下载</el-button>
    </div>

  </div>
</template>

<script>
  import API from '@/api'
  //import BMap from 'BMap'
    export default {
        name: "Home",
      data(){
          return {
            classtablevisible:false,
            ifamSrc:'',

            items:[
            ],
            hotLoans:[],
            adviserList:[],
            LocationCity:'无锡市',
            questionStr:'',
          }
      },
      created(){ //created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。

      },
      mounted(){ //mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。


        },
      methods:{
        doLoan(id,name){
          // this.$router.push({path: '/ApplyForLoan',query:{ id:id,empName:encodeURIComponent(name),type:3}});
        },
        openDialog(type){
          let src = '';
          if(type==1){
            src="http://114.55.101.39:8091/dh_college/video/test/a1.mp4";
            // this.classtablevisible=true
          }else if(type==2){
            src="http://114.55.101.39:8091/dh_college/video/test/a2.pdf";
          }else if(type==3){
            src="http://114.55.101.39:8091/dh_college/video/test/a3.xlsx";
          }else if(type==4){

            src="http://114.55.101.39:8091/dh_college/video/test/a4.docx";
          }else if(type==5){
            src="http://114.55.101.39:8091/dh_college/video/test/a5.pptx";
          }
          //pdf预览:word(doc，docx)，ppt(ppt，pptx),pdf

          src = "http://192.168.0.140:8012/onlinePreview?url="+encodeURIComponent(src)+"&officePreviewType=pdf";
          window.open(src, '_blank');


        },
        subMitQuestionStr(){
          let ids = [4,5];
          let params = { 'ids':ids.toString()};
          API.common.downloadTeacherData(params).then(({data})=>{
            console.log(data);
          });
        },
        downloadFile(){
            let ids= [5,6];
            window.location.href = API.loan.getUrl("/xqteacher/downloadTeacherFiles?ids="+ids);
        },

      }
    }
</script>

<style>

</style>
