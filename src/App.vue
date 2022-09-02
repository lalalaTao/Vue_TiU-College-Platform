<template>
  <div id="app" style="overflow: hidden;min-width:900px" >
    <div style="width:100%;height: auto" v-show="this.$store.state.headIsShow">
      <HeadNew v-if="!this.$store.state.flagShowHead"></HeadNew>
    </div>
    <div style="width:100%;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div style="width:100%;height: auto" v-show="this.$store.state.footIsShow">
      <pc-foot v-show="!this.$store.state.flagShowHead || this.$store.state.flagshowFoot"></pc-foot>
    </div>
  </div>
</template>

<script>
  import DevicePixelRatio from "./assets/js/devicePixelRatio";
  import Foot from './components/common/foot'
  import $ from 'jquery'
  import HomeIndex from "./components/home/HomeIndex";
  import HeadNew from './components/common/HeadNew'
  export default {
  name: 'App',
  components:{
    // pcHead:Head,//创新平台非登陆页头部
    pcFoot:Foot,//创新平台非登陆页底部
    HomeIndex,
    HeadNew
  },
  data(){
    return {
      // currentPath:'/',
      // showHead:true,//true 则为登录页，false为非登录页
      screenWidth: '',
      screenHeight: ''
    }
  },
  created() {
    // new DevicePixelRatio().init();
  },
  mounted(){
    window.onload=()=>{
      this.screenWidth = document.body.clientWidth;
      if(this.screenWidth>1890){
        $('#app').css('overflowX','hidden')
        // document.getElementById('app').style.overflowX='hidden'
      }
      else{
        $('#app').css('overflowX','scroll')
        // document.getElementById('app').style.overflowX='scroll'
      }
    }
    window.addEventListener('resize', () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight=document.body.clientHeight
        if(this.screenWidth>1890){
          $('#app').css('overflowX','hidden')
          // document.getElementById('app').style.overflowX='hidden'
        }
        else{
          $('#app').css('overflowX','scroll')
          // document.getElementById('app').style.overflowX='scroll'
        }
        if(this.screenHeight>930){
          $('#app').css('overflowX','hidden')
          // document.getElementById('app').style.overflowY='hidden'
        }
        else{
          $('#app').css('overflowX','hidden')
          // document.getElementById('app').style.overflowY='hidden'
        }
      })();
    })
    // window.onscroll = function () {
    //   //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //   //scrollTop就是触发滚轮事件时滚轮的高度
    //   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //   console.log("滚动距离" + scrollTop);
    // }
  }
}
</script>

<style>
  .green_color{
    color: #00BDA5;
  }

  html{
    /*7.1vm == 100px*/
    /*font-size: 1.42vw!important;!* 100px *!*/
    /*80px*/
    font-size: 5.7vw;
    overflow-x: hidden;
  }
</style>
