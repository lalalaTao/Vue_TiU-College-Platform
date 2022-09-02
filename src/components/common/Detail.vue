<template>
  <el-dialog
    :modal="false"
    style="font-size: 0.146rem"
    :title="title"
    :visible.sync="dialogVisible"
    width="8.598rem"
    :destroy-on-close="true"
    :before-close="handleClose">
    <div style="width: 37.5px;
      height: 3px;
      margin-left: 0.366rem;
      background: #00bda5;
      border-radius: 1.5px;"></div>
    <div class="detail_info">
      <div class="detail_info_left">
        <img :src="args.coverImg" alt="">
      </div>
      <div class="detail_info_right">
        <div class="detail_info_right_bq">
          <div class="detail_info_right_bq1">
            {{ args.assessmentTypeName==null? '暂无':args.assessmentTypeName  }}({{ args.assessmentTypeLevelName==null? '暂无':args.assessmentTypeLevelName }})
          </div>
          <div class="detail_info_right_bq2">
            {{args.name}}
          </div>
          <div class="detail_info_right_bq3">
            <span>{{args.facultyName}}</span>  <span style="margin: 0 0.061rem ">|</span> <span>{{ args.specialtyName }}</span>  <i class="el-icon-view"></i> &nbsp;{{args.numberOfVisitors}}
          </div>
        </div>

        <el-button @click="showTable" class="elbutton_detail">
          实训课程
        </el-button>
      </div>
    </div>

    <div style="height: 0.75px;width:100%;background: #f4f7fa;"></div>

    <div class="detail_but">
      <div @click="topractice(item.path,args.id)" v-for="(item,index) in titleList" :key="index" class="detail_but_arg" :style="{background:item.background}">
          <img  :src="item.imgsrc" alt="">  {{item.name}}
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "Detail",
  props:{
    title: {
      type: String,
      default: "资源详情"
    },
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    args:{
      type:Object,
      default:{
        assessmentTypeName:null,
        coverImg:null,
        assessmentTypeLevelName:null,
        facultyName:null,
        specialtyName:null,
        numberOfVisitors:null,
      }
    }
  },
  
  data(){
    return{
      imghost:this.$imghost,
      titleList:[
        {
          name:'顺序练习',
          path:'Practice',
          imgsrc:this.$imghost + '/skill/1.png',
          background:'linear-gradient(14deg,#3b6fff 0%, #4091ff 37%, #97d7ff 100%)'
        },
        {
          name:'随机练习',
          path:'Practice',
          imgsrc: this.$imghost + '/skill/2.png',
          background: 'linear-gradient(14deg,#495aff 0%, #718fff 47%, #d7d5ff 100%)'
        },
        {
          name:'专项练习',
          path:'Practice',
          imgsrc: this.$imghost + '/skill/3.png',
          background: 'linear-gradient(14deg,#ff9d46 0%, #ffc96c 51%, #fff5c5 100%)'
        },
        {
          name:'易错练习',
          path:'Practice',
          imgsrc: this.$imghost + '/skill/4.png',
          background: 'linear-gradient(14deg,#fd706d 0%, #fe997a 47%, #ffed99 100%)'
        },
        {
          name:'模拟考试',
          path:'mnexam/Examenter',
          imgsrc: this.$imghost + '/skill/5.png',
          background: 'linear-gradient(14deg,#2e8adb 0%, #53b2e8 37%, #b9fdff 100%)',
        },
        {
          name:'题库管理',
          path:'Practice',
          imgsrc: this.$imghost + '/skill/1.png',
          background: 'linear-gradient(14deg,#2e8adb 0%, #53b2e8 37%, #b9fdff 100%)',
        },
      ]
    }
  },
  mounted() {
  },
  methods:{
    handleClose(){
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     this.dialogVisible = false
      //   })
      //   .catch(_ => {});
      this.$emit("closedig",{})
    },
    //实训课程
    showTable(){
      //this.$emit('showTable',)
    },
    topractice(val,id){
      this.$router.push({path:'/'+val+'',query:{id:id}})
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/common/Detail.css";
</style>
