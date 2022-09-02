<!-- 顶栏横条 并未设置随不同的点击事件展示相应的内容 -->
<template>
  <div class="practice_main">
      <div class="rout_path">
        <div class="shui_logo"></div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item >技能考核</el-breadcrumb-item>
          <el-breadcrumb-item>技能考核管理</el-breadcrumb-item>
          <el-breadcrumb-item>Java基础试题库</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>专项练习</el-breadcrumb-item> -->
          <el-breadcrumb-item>Web前端开发(题库管理)</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="practice_content">
        <Practicemeun></Practicemeun>
        <Practicetopic></Practicetopic>
      </div>
  </div>
</template>

<script>
import Practicetopic from "./Practicetopic";
import Practicemeun from "./Practicemeun";
export default {
name: 'Practice',
props: {},
  components: {
    Practicetopic,
    Practicemeun
  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },

}
</script>

<style scoped>
@import "../../../assets/css/skill/practice/practice.css";
</style>
<style>
.router_name{
 margin : 10px;
  font-size: 12px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #737373;
}
.router_name_active{
  color : #00BDA5
}
</style>
