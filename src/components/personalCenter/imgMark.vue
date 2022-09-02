<template>

  <!--demo可行性验证【图片上做标记】2022年7月15日-->

  <div  id="divtest" style="position: relative;width:100%;margin-top: 10px;display: flex;justify-content: center">
    <el-button @click="hideShow" style="position: absolute;top:100px;right: 10px;">1隐藏显示canvas</el-button>
    <div id="imgParentDiv" class="test" style="background-color: burlywood;width:1020px;height:880px;position: relative;margin-left: 0px;margin-top: 110px;">
      <!--https://ossdevpublic.hyaedu.net/question_activities/video/video_img/08防冲击姿势.jpg-->
      <img  style="height: 800px;"
            src="https://hy-tiyou-file-img-public.oss-cn-beijing.aliyuncs.com/video_tiyou2/school_2/accessory_parse_img/%E6%95%B0%E5%AD%97%E5%AA%92%E4%BD%93%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E4%B8%93%E4%B8%9A%E4%BA%BA%E6%89%8D%E5%9F%B9%E5%85%BB%E6%96%B9%E6%A1%88_ca87c932251648b48f1de9553657633f/0.jpg"
            alt=""  id="seatImg">
      <div id="dynamicCreationDiv" style="width: 1920px;height: 1080px;position: absolute;z-index: 0;top: 0px;left: 0px;"
      >



      </div>
      <canvas v-show="showFlag" id="myCanvas" ref="myCanvas" style="position: absolute;z-index: 1;top: 0px;left: 0px;border:0px solid red;"
              width="1920" height="1080" @mousedown="mousedown" @mouseup="mouseup" @mousemove="mousemove">
      </canvas>
      <div id="tisi1" ref="tisi1" v-show="showFlag2" style="background-color:white;width: 300px;height: 300px;position: absolute;top: 100px;left: 100px;border:1px solid red;display: flex;flex-direction: column;z-index: 999;justify-content: center;">
        <el-button @click="close2" style="width: 200px;height: 40px;margin-top: 30px;">关闭</el-button>
        <el-button @click="msgtisi" style="width: 200px;height: 40px;margin-top: 30px;">关联视频</el-button>
        <el-button @click="msgtisi" style="width: 200px;height: 40px;margin-top: 30px;">输入介绍文字</el-button>
      </div>


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
      };

    },

    watch: {},
    computed: {},
    mounted(){
      let img = document.getElementById("seatImg");
      img.onload=function () {
        let imgW=img.offsetWidth;
        let imgH=img.offsetHeight;

        console.log("图片显示尺寸：",img.offsetWidth, img.offsetHeight,"-----------","图片原始尺寸：",img.naturalWidth,img.naturalHeight)
        let myCanvas = document.getElementById("myCanvas");
        myCanvas.style.width=imgW+'px';
        myCanvas.style.height=imgH+'px';
        myCanvas.width=imgW;
        myCanvas.height=imgH;

        let imgParentDiv = document.getElementById("imgParentDiv");
        imgParentDiv.style.width=imgW+'px';
        imgParentDiv.style.height=imgH+'px';

        let dynamicCreationDiv = document.getElementById("dynamicCreationDiv");
        dynamicCreationDiv.style.width=imgW+'px';
        dynamicCreationDiv.style.height=imgH+'px';
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

        let w=this.endX-this.x;
        let h=this.endY-this.y;
        let left = this.x
        let top = this.y
        console.log(w,h,left,top)

        // alert("生成dom")

        if(this.endX-this.x<0){
          return;
        }
        if(this.endY-this.y<0){
          return;
        }

        let num = document.querySelector('.locationdiv');
        let div = document.createElement('div');
        div.style="width: "+(this.endX-this.x)+"px;height:"+(this.endY-this.y)+"px;background-color: red;position: absolute;z-index: "+(num+10)+";top:"+(this.y)+"px;left:"+(this.x)+"px;opacity: 0.5;background-color:#00ff00;";
        div.id="test"+(num+1);
        div.classList.add('locationdiv')
        // div.addEventListener('click', function handleClick(event) {
        //  alert(111);
        // });

        // tisi

        document.getElementById("dynamicCreationDiv").appendChild(div);

        let tisi = document.getElementById("tisi1");
        // let tisi = this.$refs.tisi1;
        console.log(tisi)
        tisi.style.left=(this.endX)+'px';
        tisi.style.top=(this.endY)+'px';

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
          // console.log("---",e.offsetX,x)

          if((e.offsetX-x>0) && (e.offsetY-y>0)){
            ctx.strokeRect(x,y,e.offsetX-x,e.offsetY-y);
          }else{
            //TODO 这种情况不处理。
          }
          this.endX = e.offsetX;
          this.endY = e.offsetY;
        }

      }

    },

    created() {

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
