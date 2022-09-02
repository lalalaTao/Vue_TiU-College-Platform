<template>
  <div class="examdo" style="position: relative;">
    <div class="examdo_left">
      <div class="datika">
        <div>答题卡</div>
        <div style="display: flex;margin-right: 0.122rem">
          <div class="zq">正确</div>
          <div class="cw">错误</div>
        </div>
      </div>
      <div class="jindu">
        <div>答题进度</div>
        <div class="tiao" style="width: 1.098rem;">
          <el-progress
            :show-text="false"
            :percentage="50" ></el-progress>
        </div>
        <div> 37 / 50</div>
      </div>
      <div class="dati">
        <div class="practice_content_menu_choose_args_p"
             style="width: 14.28%;display: flex;justify-content: center"
             v-for="(item,index) in questionList" :key="index">
          <div :class="(item.answerFlag == 1) ? 'practice_content_menu_choose_args':'practice_content_menu_choose_args2'" >
            {{index+1}}
          </div>
        </div>
      </div>

      <div class="score_detail">
        <div>考试得分</div> &nbsp;&nbsp;&nbsp;
        <div style="font-size: 0.195rem;font-family: PingFang SC, PingFang SC-Bold;
                    font-weight: 700;color: #00BDA5">{{ score }}</div>&nbsp;&nbsp;&nbsp;
        <div>分</div>
      </div>
      <div class="score">
        <div class="fen">{{score}}</div>
        <img :src="imgurl + '/skill/exam/score.png'" alt="">
      </div>
    </div>
    <div class="examdo_right">
      <div class="examdo_right_title">
        <div class="times"><span style="color: #9C9C9C">ID:{{id}}</span> &nbsp;&nbsp;&nbsp;<span style="color: #393939">{{papername}}</span></div>
      </div>
      <div>
        <div class="tm" v-for="(items,index) in questionList" :key="index">
          <div class="tm_content">
            <div class="xuhao">{{index+1}}.</div>
            <div class="tm_type">{{items.questionType == 1?'单选题':items.questionType == 2?'多选题':items.questionType == 3?'判断题':'填空题'}}</div>
            <div class="tm_content_detail">{{items.questionDescription}}</div>
          </div>
          <div class="tm_choose choo15" v-for="(itemso,index) in items.options" :key="index" :class="(ifclass(items.myAnswer ,itemso.questionOption,items.answer) != 0) ?'bgchoosed':''">
            <div style="margin-right: 0.22rem" class="choose_15"
                 :class="(ifclass(items.myAnswer ,itemso.questionOption,items.answer) == 1) ?'choosed':((ifclass(items.myAnswer ,itemso.questionOption,items.answer) == 0) ?'':'choosedfalse')">{{itemso.questionOption}}</div>
            <div>{{ itemso.optionContent }}</div>
          </div>
          <div class="answers">
            <div class="answer_title">
              试题详解：
            </div>
            <div class="answer_analysis">
              {{items.questionAnalysis}}
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {doGetSkillResourcePaperByScoreId} from "../../../../api/modules/skill/exam/exam";
import API from '@/api'
export default {
  name: 'Examresult',
  props: {},
  components: {

  },
  data () {
    return {
      score:87,
      total: 37,
      showcommit:false,
      imgurl:this.$imghost,
      timeout:false,
      id:this.$route.query.id,
      papername:'',
      questionList:[],
    }
  },
  computed: {

  },
  watch: {

  },
  created(){
    this.doGetSkillResourcePaperByScoreId()
  },
  methods: {
    format(percentage) {
      debugger
      return percentage = `${percentage} / ${this.total}`;
    },
    //选择答案
    chooseAns(event){
      console.log(event.currentTarget.className)
      event.currentTarget.className += ' choactived'
    },
    //获取考试信息
    async doGetSkillResourcePaperByScoreId(){
      let params = {
        id:this.$route.query.id
      }
      const  { data } =  await API.exam.doGetSkillResourcePaperByScoreId(params)
      const {paperInfo,questionList,fraction} = data.page;
      this.papername = paperInfo.name;
      this.score = fraction;
      this.questionList = questionList
    },
    //判断选择是否正确
    ifclass(val,val2,answer){
      let a = 0;
      let myanswer =  val.split(",")
      let realanswer = answer.split(",")
      myanswer.map(i => {
        if(!realanswer.includes(i) && (i == val2)){
          a = 2;//选择错误
        }else if (realanswer.includes(i) && i == val2){
          a = 1;//选择正确
        }else if(realanswer.includes(val2)){
          a = 1;//默认正确答案
        } else{
          a = 0;//未选择
        }
      });
      return a

    },
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
  background-color: #00BDA5 ;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.128rem;
}
.practice_content_menu_choose_args2{
  cursor: pointer;
  height: 0.22rem;
  width: 0.22rem;
  border-radius: 0.11rem;
  background-color: #FF6961 ;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.128rem;
}
</style>
