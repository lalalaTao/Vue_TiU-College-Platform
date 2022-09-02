<template>
  <div class="main" :style="{height:height}">
    <div class="swiper-container bannerswiper" ref="swp">
      <div class="swiper-wrapper">
          <img class="swiper-slide lunbopic"
               :list="list"
               v-for="item in list"
               :src="item.urlImg" alt="" />
        </div>
      <!-- 如果需要分页器 -->
      <!--          <div class="swiper-pagination"></div>-->
      <!-- 如果需要滚动条 -->
<!--          <div class="swiper-scrollbar"></div>-->
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
export default {
  name: "Banner",
  components: {
    Swiper
  },
  props:['height','list'],
  data(){
    return{
      speeds:4000,
    }
  },
  created() {
    this.initpic()
  },
  mounted(){
    setTimeout(()=>{
      this.swiper()//防止第一张图闪过
    },500)
  },
  methods:{
    //获取banner图  地址
    initpic(){

    },
    swiper(){
      this.myswiper =  new Swiper('.bannerswiper', {
        slidesPerView: 1,
        spaceBetween : 0,
        loop: true,
// 如果需要分页器
        pagination: '.swiper-pagination',
// 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        // 如果需要自动切换海报
        speed:this.speeds,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      })
    },
  }

}
</script>

<style scoped>
@import "../../assets/css/common/Banner.css";
</style>
