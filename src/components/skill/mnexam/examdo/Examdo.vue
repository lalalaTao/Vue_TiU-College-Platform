<template>
    <div class="examdo" style="position: relative;">
      <div class="examdo_left">
        <div class="datika">
          <div>答题卡</div>
          <div class="yida">已答</div>
        </div>
        <div class="jindu">
          <div>答题进度</div>
          <div class="tiao" style="width: 1.098rem;">
            <el-progress
              :show-text="false"
              :percentage="((listlength()/questionList.length) * 100)"
              v-if="!isNaN(parseInt((listlength()/questionList.length) * 100))"></el-progress>
          </div>
          <div>{{listlength()}}  / {{questionList.length}}</div>
        </div>
        <div class="dati">
          <div class="practice_content_menu_choose_args_p"
               style="width: 14.28%;display: flex;justify-content: center"
               v-for="(items,indexx) in questionList">
            <div :class="((items.myAnswer == '') && !(items.myAnswerFillBlank.length == items.options.length)) ? 'practice_content_menu_choose_args' :  'practice_content_menu_choose_args_yd'" >
              {{indexx+1}}
            </div>
          </div>
        </div>
      </div>
      <div class="examdo_right">
        <div class="examdo_right_title">
          <div class="times"><span style="color: #9C9C9C">ID：{{exam.id}}</span> &nbsp;&nbsp;&nbsp;<span style="color: #393939">{{ exam.name }}</span></div>
          <div class="tij"><span> 考试时间：{{hr}}:{{min}}:{{sec}}</span> &nbsp;&nbsp;&nbsp; <el-button @click="commitexam">提交</el-button> </div>
        </div>
        <div>
          <div class="tm" v-for="(item,index) in questionList">
            <div class="tm_content">
              <div class="xuhao">{{index+1}}.</div>
              <div class="tm_type">{{item.questionType == 1?'单选题':item.questionType == 2?'多选题':item.questionType == 3?'判断题':'填空题'}}</div>
              <div style="flex: 1">{{item.questionDescription}}</div>
            </div>
            <div class="tm_choose_par">
              <div @click="chooseAns($event,item.id,index,itemopttion.questionOption,index2,item.questionType)" class="tm_choose" :class="`cho${index+1}`" v-for="(itemopttion,index2) in item.options">
                <div style="margin-right: 0.22rem" class="choose_15">{{itemopttion.questionOption}}</div>
                <div class="input_exam" v-if="item.questionType == 4"><input @blur="txtblur($event,index,itemopttion.questionOption)" class="input_exam_input" type="text"> </div>
                <div v-else>{{ itemopttion.optionContent }}</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <el-dialog
        title="提交试卷"
        :visible.sync="showcommit"
        width="30%"
        >
        <div data-v-6b7ffeb5="" style="width: 37.5px; height: 3px;  background: rgb(0, 189, 165); border-radius: 1.5px;"></div>
        <div style="display: flex;align-items: center;justify-content: center;margin-top: 0.244rem">
          <div style="height: 0.488rem;width: 0.488rem;margin-right: 0.244rem">
            <img :src="imgurl + '/skill/exam/jj.png'" alt="">
          </div>
          确认提交试卷吗?
        </div>
        <span slot="footer" class="dialog-footer footerdia">
          <el-button class="cancle" @click="showcommit = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog
        title="提交试卷"
        :visible.sync="timeout"
        width="30%"
      >
        <div data-v-6b7ffeb5="" style="width: 37.5px; height: 3px;  background: rgb(0, 189, 165); border-radius: 1.5px;"></div>
        <div style="display: flex;align-items: center;justify-content: center;margin-top: 0.244rem">
          <div style="height: 0.488rem;width: 0.488rem;margin-right: 0.244rem">
            <img :src="imgurl + '/skill/exam/timeout.png'" alt="">
          </div>
          答题时间已到，试卷已自动提交！
        </div>
        <span slot="footer" class="dialog-footer footerdia">
          <el-button  @click="timeout = false">知道了</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
import {
  doGetSkillResourceExamQuestions,
  doGetTime,
  doSubmitSkillResourcePaper
} from "../../../../api/modules/skill/exam/exam";
import API from '@/api'
export default {
  name: 'Examdo',
  props: {},
  components: {

  },
  data () {
    return {
      total: 37,
      showcommit:false,
      imgurl:this.$imghost,
      timeout:false,
      questionList:[],
      exam:{
        // id:0,
        // name:'暂无',
        // exameDuration:0
      },
      day:"0",
      hr:"0",
      min:"0",
      sec:"0",
      answerlength: 0,
      startTime:'',
      endTime:'',
      commitpararm:{},
    }
  },
  computed: {

  },
  watch: {

  },
  created(){
    this.doGetTime(1)//获取系统时间
    this.doGetSkillResourceExamQuestions()
  },
  mounted() {

  },
  methods: {
    format(percentage) {
      if(percentage == null || percentage == 0 || percentage==''){
        return percentage = 0
      }else{
        return percentage = `${percentage} / ${this.total}`;
      }
    },
    //选择答案
    chooseAns(event,id,index,answer,index2,questionType){
      let a = event.currentTarget.className
      let newa = a.split(" ")

      if(questionType == 1){//单选题
        if(newa.indexOf('choactived') > -1){
          return
        }
        let chooselist =  document.getElementsByClassName(newa[1])
        let arr = Array.prototype.slice.call( chooselist )

        arr.map((e)=>{
          e.className = a
          e.children[0].className = "choose_15"
        })

        event.currentTarget.className += ' choactived'
        event.currentTarget.children[0].className += ' choosed'

        //获取题目id，myAnswer赋值
        //多选  获取题目id myAnswerList赋值
        this.questionList[index].myAnswer = answer

      }else if(questionType == 2){//多选题
        if(newa.indexOf('choactived') > -1){
          event.currentTarget.className =event.currentTarget.className.replace(' choactived',"")
          event.currentTarget.children[0].className = event.currentTarget.children[0].className.replace(' choosed',"");
          //this.questionList[index].myAnswerList = this.questionList[index].myAnswerList.filter(item => item != answer)
          this.questionList[index].myAnswer.replace(answer,"")
        }else{
          event.currentTarget.className += ' choactived'
          event.currentTarget.children[0].className += ' choosed'
          this.questionList[index].myAnswer += (answer + ",")
        }
      }
    },

    //获取系统时间
    async doGetTime(flag){
      const  { data } =  await API.exam.doGetTime({})
      if(flag == 1){
        this.startTime = data.data
      }else{
        this.endTime = data.data
      }

    },

    //获取题目数据
    async  doGetSkillResourceExamQuestions(){
      let params = {
        skillResourcesId : this.$route.query.id
      }
       const  { data } =  await API.exam.doGetSkillResourceExamQuestions(params)
       const {resourceMockExamRolueEntity,skillQuestionList} = data.page

       skillQuestionList.map(e=>{
         if(!e.myAnswerList){
           e.myAnswerList = []
         }
         if(!e.myAnswer){
           e.myAnswer = ""
         }
         e["myAnswerFillBlank"] = []
       })

       this.questionList = skillQuestionList//问题列表
       this.exam = resourceMockExamRolueEntity//试卷名称
       //console.log(skillQuestionList)
       if(this.exam.exameDuration > 0 ){
         this.countdown(this.exam.exameDuration * 60)
       }
    },

    //倒计时
    countdown (msec) {
      //计算秒
      // let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec  / 60 / 60 % 24)
      let min = parseInt(msec  / 60 % 60)
      let sec = parseInt(msec  % 60)
      // this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      if(min>=0 && sec>=0){
        //倒计时结束关闭订单
        if(min==0 && sec==0){
          clearInterval()
          return
        }
        setTimeout(function () {
          //clearTimeout()
          that.countdown(msec-1)
        }, 1000)
      }
    },



    //失去焦点事件
    txtblur(e,index,id){
      if(e.target.value == ""){
        this.$message.warning("不可以为空")
        return
      }
      let obj = {
        id:id,
        myAnswer:e.target.value
      }
      this.$set(this.questionList[index].myAnswerFillBlank,id -1,obj)//触发响应式添加
    },
    //提交
    async  commitexam(){
      //判断是否投提交了
      //console.log(this.questionList)
      for (let i = 0; i < this.questionList.length; i++) {
        let e = this.questionList[i]
        if((e.myAnswer == "" && e.myAnswerFillBlank.length == 0 && e.myAnswerList == 0) ){
          this.$message.error("还有题目未答！")
          return
        }
        if((e.questionType  == 4) && (e.myAnswerFillBlank.length < e.options.length) ){
          this.$message.error("还有题目未答！")
          return
        }
      }
      let questionResults = [];

      this.questionList.map(e=>{
        if(e.myAnswer != ""){
          questionResults.push({
            skillQuestionId:e.id,
            myAnswer:e.myAnswer,
            optionInfo:e.optionInfo
          })
        }else if(e.myAnswerFillBlank.length > 0){
          questionResults.push({
            skillQuestionId:e.id,
            myAnswerFillBlank:e.myAnswerFillBlank,
            optionInfo:e.optionInfo
          })
        }

      })

      await this.doGetTime(2);
      //提交的参数
      this.commitpararm = {
        skillResourcesId:this.$route.query.id,
        skillResourceMockExamRolueId:this.exam.id,
        startTime:this.startTime,
        endTime: this.endTime,
        questionResults:questionResults
      }
      console.log(this.commitpararm)
      this.showcommit = true//显示是否提交
    },
    //监听数组长度
    listlength (){
      let list =  this.questionList.filter((item) => {
        return (item.myAnswer != "" || (item.myAnswerFillBlank.length == item.options.length))//
      })
      return list.length
    },

    async  submit(){
      this.showcommit = false
      const  { data } =  await API.exam.doSubmitSkillResourcePaper(this.commitpararm)
      const { code,msg,fraction } = data
      if(code == 0){
        this.$message.success(`已提交！考试成绩是${fraction}`)
      }else{
        this.$message.error(msg)
      }
    }
  },
}
</script>

<style scoped>
@import "../../../../assets/css/skill/practice/practice.css";
@import "../../../../assets/css/skill/practice/Practicemeun.css";
@import "../../../../assets/css/skill/mnexam/mnexam.css";

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #e0e0e0;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background:white;
}

.practice_content_menu_choose_args{
  cursor: pointer;
  height: 0.22rem;
  width: 0.22rem;
  border-radius: 0.11rem;
  background-color: #fff ;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #AFAFAF;
  font-size: 0.128rem;
  box-shadow: 0px 1.5px 4.5px 0px rgba(78,78,78,0.20);
}


.practice_content_menu_choose_args_yd{
  cursor: pointer;
  height: 0.22rem;
  width: 0.22rem;
  border-radius: 0.11rem;
  background-color: #00BDA5 ;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.128rem;
}
</style>
