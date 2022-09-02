<!-- 右侧题目区域 -->
<template>
  <div class="practice_content_topic">
    <div style="height: auto;margin: 0.503rem 0.805rem 0.293rem 0.787rem">
      <div class="practice_status">
        <div style="display: flex;color:#888888"><span style="color: #FF6961">17</span><span style="margin: 0 5px">/</span>18<div style="background-color: #F8F8F8;color:#40C5B1;margin-left: 0.165rem;font-size: 0.128rem;padding: 0 5px">{{questiontype}}</div></div>
        <div style="display: flex;justify-content: center;align-items: center">
          <el-rate
            :max=1
            @change="changerate"
            v-model="value1">
          </el-rate>
          <span v-text="sctype == 0?'未收藏':'已收藏'"></span>
        </div>
      </div>
      <div class="practice_content_word">
        <div class="practice_content_word_content">
          {{word}}
        </div>
        <div class="practice_content_word_question">
          <div class="answer" v-for="(item,index) in answerlist" :key="index" :class="index == 1? 'bgcwrong': (index == 2? 'bgrightans' : '')">
            <div :class="index == 1?'worng' : (index == 2? 'rightans' : '')" class="answer_code">{{item.code}}</div>
            <div class="answer_text">{{item.text}}</div>
          </div>
        </div>
      </div>
      <div class="practice_content_ex">
        <div style="font-size: 0.146rem;
              font-family: PingFang SC, PingFang SC-Bold;
              font-weight: 700;
              text-align: left;
              color: #ff8a00;
              line-height: 27px;">
          试题解析:
        </div>
        <div class="practice_content_anysls">
          {{analysis}}
        </div>
      </div>
      <div class="practice_content_botton">
        <el-button style="height: 0.329rem;display: flex;align-items: center;background-color: #00BDA5; color: #ffffff;">上一题</el-button>
        <el-button style="height: 0.329rem;display: flex;align-items: center;background-color: #00BDA5; color: #ffffff;">下一题</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
name: 'Practicetopic',
props: {},
  components: {
  },
  data () {
    return {
      sctype:1,//是否收藏
      questiontype:'单选题',//选题类型
      value1:1,//rate
      analysis:'要判断数的最后四位是否都为了0，应该将最后四位与1进行逻辑与运算，其它数位与0做逻辑与运算，最后判定最终的结果是否为0；因此得出与a进行逻辑与运算的数：前12位为0最后4位为1，即0x000F逻辑或运算：0或0=0；1或0=1；0或1=1；1或1=1；逻辑与运算：0与0=0；1与0=0；0与1=0；1与1=1；',
      word:"以下代码执行结果？（ ） <?php mysql_connect(‘localhost’, ’root’, ‘’); $result = mysql_query(“SELECT id, name FROM tb1”); while($row = mysql_fetch_array($result, MYSQL_ASSOC)) { echo ’ID:’.$row[0].’Name:’.$row[]; } ?>",
      answerlist:[
        {code:'A',text:"A"},
        {code:'B',text:"B"},
        {code:'C',text:"C"},
        {code:'D',text:"D"},
      ]
    }
  },
  computed: {
    name () {
      return this.data
    }
  },
  watch: {

  },
  methods: {
    changerate(){
      console.log('点击前',this.value1)
      if(this.value1 == 1){
        this.value1 = null
      }else{
        this.value1 = 1
      }
      this.$forceUpdate()
      console.log('点击前',this.value1)
    }
  },
}
</script>

<style scoped>
@import "../../../assets/css/skill/practice/Practicetopic.css";
*{
  margin: 0;
}

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
  background: #ededed;
}
</style>
