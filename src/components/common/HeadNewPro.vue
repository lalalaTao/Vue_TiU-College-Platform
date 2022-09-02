<template>
  <div class="main" :style="{backgroundColor: bgcolor}" :class="!headstyle ? 'main_add':''">
    <div class="main2" :class="!headstyle ? 'main2_change':''" :style="{backgroundColor:moveBgcolor}"></div>
    <div class="main_content" :style="{color:fontcolor}">
      <div class="main_content_logo">
        <div class="main_content_logo_div">
          <img class="main_content_logo_img" :src="logosrc" alt="">
        </div>
<!--        <div class="main_content_logo_title" :style="{color:fontcolor}">-->
<!--          {{navtitle}}-->
<!--        </div>-->
      </div>
      <nav class="main_content_menu" v-if="navflag == 1">
        <div  class="main_content_menu_arg"
              v-for="(item,index) in navList" :key="index"
              :class="index == active?'active':''"
              @mousemove="active = index"
              @click="tonewpath(item.path,index)"
              @mouseout="mouseout(item.path,index)"
        >
          {{ item.name }}
        </div>
      </nav>

      <nav class="main_content_menu" v-if="navflag == 2">
        <div   class="main_content_menu_arg"
               v-for="(item,index) in navList" :key="index"
               :class="index == active?'active2':''"
               @mousemove="active = index"
               @click="tonewpath(item.path,index)"
               @mouseout="mouseout(item.path,index)"
        >{{ item.name }}
        </div>
      </nav>
      <div class="main_content_user">
        <el-avatar style="margin-right: 4px" :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

        <el-dropdown>
          <span class="el-dropdown-link">
            userinfo<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item> <span @click="logout">退出登录</span> </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadNewPro',
  props: {},
  components: {
  },
  data () {
    return {
      headstyle:this.$headstyle == 1,//透明
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      active: 0,
      bgcolor: this.$headstyle ==1? 'rgba(0,0,0,0)':'#fff',
      fontcolor:this.$headstyle ==1? '#fff':'black',
      logosrc: this.$imghost + '/head/logo.png',
      navList: [],

      navflag:this.$headstyle,
      moveBgcolor:'#00aa92',
      navtitle:"金丽萍电子商务名师培育工作室"
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.getnav()
  },
  mounted() {

  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //跳转新地址
    tonewpath(args,index){
      this.active = index
      this.$router.push({name:args})
    },
    logout(){
      window.sessionStorage.clear()
      window.localStorage.clear()
      // 跳转到登录页
      this.$router.push('/login')
    },
    mouseout(path,i){
      if(this.$route.name == path){
        this.active == i
      }else{
        this.active = null
      }
    },
    //初始化head
    getnav(){
      this.navList = [
        { name: '首页',path:"Newpro" },
        { name: '名师工作室',path:"TeacherRoom" },
        { name: '工作室成果',path:"Roomresult" },
        { name: '数字画像',path:"NumPic" },
      ]
    }
  },
}
</script>

<style scoped>
@import "../../assets/css/common/head.css";
</style>
