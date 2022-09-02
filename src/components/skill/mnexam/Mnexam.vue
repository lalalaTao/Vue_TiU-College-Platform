<template>
  <div class="practice_main">
    <div class="rout_path">
      <div class="shui_logo"></div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >技能考核</el-breadcrumb-item>
        <el-breadcrumb-item>1+X考证</el-breadcrumb-item>
        <el-breadcrumb-item>Java基础试题库</el-breadcrumb-item>
        <el-breadcrumb-item>模拟考试</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import Examenter from "./examenter/Examenter";


export default {
  name: 'mnexam',
  props: {},
  components: {
    Examenter
  },
  data () {
    return {
      imgurl:this.$imghost,
    }
  },
  computed: {

  },
  watch: {

  },
  created(){

  },
  methods: {

  },
}
</script>

<style scoped>
@import "../../../assets/css/skill/practice/practice.css";
@import "../../../assets/css/skill/mnexam/mnexam.css";
</style>
