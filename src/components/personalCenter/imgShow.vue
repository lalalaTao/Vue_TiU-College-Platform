<template>

  <!--demo可行性验证【图片上做标记】2022年7月15日-->

  <div  id="divtest" style="position: relative;margin-top: 100px;width: 100%;display: flex;justify-content: center;">
    <!--<el-button @click="hideShow" style="position: absolute;top:100px;right: 10px;">1隐藏显示canvas</el-button>-->
    <div id="imgParentDiv" class="test" style="background-color: burlywood;width:1920px;height: 1080px;position: relative;margin-left: 0px;">
      <!--https://ossdevpublic.hyaedu.net/question_activities/video/video_img/08防冲击姿势.jpg-->
      <img    src="https://hy-tiyou-file-img-public.oss-cn-beijing.aliyuncs.com/video_tiyou2/school_2/accessory_parse_img/%E6%95%B0%E5%AD%97%E5%AA%92%E4%BD%93%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E4%B8%93%E4%B8%9A%E4%BA%BA%E6%89%8D%E5%9F%B9%E5%85%BB%E6%96%B9%E6%A1%88_ca87c932251648b48f1de9553657633f/0.jpg"
              alt="" style=""  id="seatImg"
              style="height:800px;"
      >
      <div id="dynamicCreationDiv" style="width: 1920px;height: 1080px;position: absolute;z-index: 0;top: 0px;left: 0px;">

        <!--绘图时：canvas边框1，有一半在里面，一半在外面：回显时，left top 减一，宽度高度+2  。对比测试基本和绘图时效果一致。-->
        <div v-for="(item,index) in signDivList" :id="'test'+index" class="locationdiv"
             style=" position: absolute;  opacity: 0.5; background-color: rgb(0, 255, 0);"
             :style="'width:'+ (item.w+2)+'px; height:' +(item.h+2)+'px;z-index: '+(index+100)+'; top: '+(item.top-1)+'px; left: '+(item.left-1)+'px;'"
        ></div>
      </div>
    <!--  <canvas v-if="showFlag" id="myCanvas" ref="myCanvas" style="position: absolute;z-index: 1;top: 0px;left: 0px;border:1px solid red;"
              width="1920" height="1080" @mousedown="mousedown" @mouseup="mouseup" @mousemove="mousemove">
      </canvas>-->

    </div>

    <div id="tisi1" ref="tisi1" v-show="showFlag2" style="background-color:white;width: 300px;height: 300px;position: absolute;top: 100px;left: 100px;border:1px solid red;display: flex;flex-direction: column;z-index: 999;justify-content: center;">
      <el-button @click="close2" style="width: 200px;height: 40px;margin-top: 30px;">关闭</el-button>
      <el-button @click="msgtisi" style="width: 200px;height: 40px;margin-top: 30px;">关联视频</el-button>
      <el-button @click="msgtisi" style="width: 200px;height: 40px;margin-top: 30px;">输入介绍文字</el-button>
    </div>

  </div>
</template>

<script>

  export default {

    name:"hello-world",

    data() {

      return {
        flag: false,
        x: 0,
        y: 0,

        endX:0,
        endY:0,

        showFlag:true,
        showFlag2:false,


        // imgInfo:{
        //   imgOriginalWidth:1654,//图片原始宽度
        //   imgOriginalHeight:2339,//图片原始高度
        // },
        // signDivList:[
        //   {
        //     divOriginalWidth:735,//图片原始宽度
        //     divOriginalHeight:78,//图片原始高度
        //     divOriginalLeft:464,//
        //     divOriginalTop:200,//
        //     w:0,
        //     h:0,
        //     left:0,
        //     top:0,
        //     zIndex:0,
        //   },
        //   {
        //     divOriginalWidth:123,//图片原始宽度
        //     divOriginalHeight:45,//图片原始高度
        //     divOriginalLeft:320,//
        //     divOriginalTop:1566,//
        //     w:0,
        //     h:0,
        //     left:0,
        //     top:0,
        //     zIndex:0,
        //   }
        // ],

        imgInfo:{
          imgOriginalWidth:566,//图片原始宽度
          imgOriginalHeight:800,//图片原始高度
        },
        signDivList:[
          // {
          //   divOriginalWidth:49,//图片原始宽度
          //   divOriginalHeight:15,//图片原始高度
          //   divOriginalLeft:339,//
          //   divOriginalTop:679,//
          //   w:0,
          //   h:0,
          //   left:0,
          //   top:0,
          //   zIndex:0,
          // },
          // {
          //   divOriginalWidth:307,//图片原始宽度
          //   divOriginalHeight:12,//图片原始高度
          //   divOriginalLeft:173,//
          //   divOriginalTop:595,//
          //   w:0,
          //   h:0,
          //   left:0,
          //   top:0,
          //   zIndex:0,
          // },
          {
            divOriginalWidth:404,//图片原始宽度
            divOriginalHeight:347,//图片原始高度
            divOriginalLeft:81,//
            divOriginalTop:379,//
            w:0,
            h:0,
            left:0,
            top:0,
            zIndex:0,
          },
        ],

      };

    },

    watch: {},
    computed: {},
    mounted(){

      // 标记区域实际宽度=当前宽度*图片总高度/图片总宽度
      // 标记区域实际高度=当前高度*图片总宽度/图片总高度
      //
      // left左侧距离=当前left值*标记区域实际宽度/图片总宽度
      // top顶部距离=当前left值*标记区域实际宽度/图片总宽度


      let that = this;
      let img = document.getElementById("seatImg");
      img.onload=function () {
        let imgW=img.offsetWidth;
        let imgH=img.offsetHeight;

        console.log("图片现在的尺寸：",img.offsetWidth, img.offsetHeight,"-----------")
        // let myCanvas = document.getElementById("myCanvas");
        // myCanvas.style.width=imgW+'px';
        // myCanvas.style.height=imgH+'px';
        // myCanvas.width=imgW;
        // myCanvas.height=imgH;

        let imgParentDiv = document.getElementById("imgParentDiv");
        imgParentDiv.style.width=imgW+'px';
        imgParentDiv.style.height=imgH+'px';

        let dynamicCreationDiv = document.getElementById("dynamicCreationDiv");
        dynamicCreationDiv.style.width=imgW+'px';
        dynamicCreationDiv.style.height=imgH+'px';



        // 标记区域实际宽度=当前宽度*图片总高度/图片总宽度
        // 标记区域实际高度=当前高度*图片总宽度/图片总高度
        //
        // left左侧距离=当前left值*标记区域实际宽度/图片总宽度
        // top顶部距离=当前left值*标记区域实际宽度/图片总宽度

        //计算缩放比例
        let imgInfo=that.imgInfo;
        let percent = imgW/imgInfo.imgOriginalWidth;
        console.log("percent:",percent)

        for(let i=0;i<that.signDivList.length;i++){
          let tmpObj = that.signDivList[i];
          // tmpObj.w = tmpObj.divOriginalWidth * imgInfo.imgOriginalHeight / imgInfo.imgOriginalWidth;
          // tmpObj.h = tmpObj.divOriginalHeight * imgInfo.imgOriginalWidth / imgInfo.imgOriginalHeight;
          //
          // tmpObj.left = tmpObj.divOriginalLeft * imgInfo.divOriginalWidth / imgInfo.imgOriginalWidth;
          // tmpObj.top = tmpObj.divOriginalTop * imgInfo.divOriginalWidth / imgInfo.imgOriginalWidth;

          tmpObj.w = tmpObj.divOriginalWidth * percent;
          tmpObj.h = tmpObj.divOriginalHeight * percent;

          tmpObj.left = tmpObj.divOriginalLeft * percent;
          tmpObj.top = tmpObj.divOriginalTop * percent
            console.log("tmpObj",tmpObj)
        }


      }
    },
    methods: {
      close2(){
        this.showFlag2=false;
      },
      msgtisi(){
        alert("对应的操作")
      },

      hideShow(){
        if(this.showFlag==true){
          this.showFlag=false;
        }else{
          this.showFlag=true;
        }
      },

      mousedown(e){
        this.flag = true;
        this.x = e.offsetX; // 鼠标落下时的X
        this.y = e.offsetY; // 鼠标落下时的Y
        console.log("鼠标落下",this.x,this.y);
      },

      mouseup(e){
        console.log("鼠标抬起",this.endX,this.endY);
        this.flag = false;
        // alert("生成dom")

        let num = document.querySelector('.locationdiv');
        let div = document.createElement('div');
        div.style="width: "+(this.endX-this.x)+"px;height:"+(this.endY-this.y)+"px;background-color: red;position: absolute;z-index: "+(num+10)+";top:"+(this.y)+"px;left:"+(this.x)+"px;opacity: 0.5;background-color:#00ff00;";
        div.id="test"+(num+1);
        div.classList.add('locationdiv')
        // div.addEventListener('click', function handleClick(event) {
        //  alert(111);
        // });

        // tisi

        document.getElementById("divtest").appendChild(div);

        let tisi = document.getElementById("tisi1");
        // let tisi = this.$refs.tisi1;
        console.log(tisi)
        tisi.style.left=(this.endX-50)+'px';
        tisi.style.top=(this.endY-50)+'px';
        this.showFlag2=true;

      },

      mousemove(e){
        // console.log("鼠标移动");
        this.drawRect(e);
      },

      drawRect(e){

        if(this.flag){

          // console.log("绘制图形");

          const canvas = this.$refs.myCanvas;

          var ctx = canvas.getContext("2d");
          ctx.fillStyle = 'rgba(255, 255, 255, 0)';

          let x = this.x;
          let y = this.y;

          ctx.clearRect(0,0,canvas.width,canvas.height);

          ctx.beginPath();

          //设置线条颜色，必须放在绘制之前

          ctx.strokeStyle = '#00ff00';

          // 线宽设置，必须放在绘制之前

          ctx.lineWidth = 1;

          ctx.strokeRect(x,y,e.offsetX-x,e.offsetY-y);
          this.endX = e.offsetX;
          this.endY = e.offsetY;
        }

      }

    },

    created() {
      // let imgInfo=this.imgInfo;
      // for(let i=0;i<this.signDivList.length;i++){
      //   let tmpObj = this.signDivList[i];
      //   tmpObj.w = tmpObj.divOriginalWidth * imgInfo.imgOriginalHeight / imgInfo.imgOriginalWidth;
      //   tmpObj.h = tmpObj.divOriginalHeight * imgInfo.imgOriginalWidth / imgInfo.imgOriginalHeight;
      //
      //   tmpObj.left = tmpObj.divOriginalLeft * imgInfo.divOriginalWidth / imgInfo.imgOriginalWidth;
      //   tmpObj.top = tmpObj.divOriginalTop * imgInfo.divOriginalWidth / imgInfo.imgOriginalWidth;
      //   console.log("tmpObj",tmpObj)
      // }
    },

    // mounted() {
    //
    // }

  };

</script>

<style scoped>

  #myCanvas{

    /*background-color: forestgreen;*/

    /*background-image:url('../bg.jpg');*/

  }

</style>
