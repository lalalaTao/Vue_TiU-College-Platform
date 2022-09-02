<template>
  <div class="mnexam_logo">
    <div class="imgurl">
      <img :src="imgurl + '/skill/exam/exam.png'" alt="">
    </div>

    <div class="imgurl_info">
      <div class="imgurl_info1">
        <div class="imgurl_info1_img">
          <img :src="imgurl + '/skill/exam/logo.png'" alt="">
        </div>
        <div class="imgurl_info1_title">
          提优
        </div>
      </div>
      <div class="imgurl_info2">
        <span>按知识点分类组卷</span> <span style="margin-left: 0.098rem">在线模拟真实考试</span>
      </div>
      <router-link :to="{path:'/mnexam/Examdo',query: { id: id}}">
        <el-button>
          开始模拟考
        </el-button>
      </router-link>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Examenter',
  props: {},
  components: {

  },
  data () {
    return {
      imgurl:this.$imghost,
      id:this.$route.query.id
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
@import "../../../../assets/css/skill/practice/practice.css";
@import "../../../../assets/css/skill/mnexam/mnexam.css";
</style>
