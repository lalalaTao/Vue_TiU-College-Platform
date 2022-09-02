<template>
    <div class="numpic_main">
      <HeadNewPro></HeadNewPro>
        <div class="umpic">
          <div class="umpic_first">
            <div class="title">
              <div class="hx">
                工作室画像
                <div style="background: #00bda5;
                bottom: 0;
                width: 0.585rem;
                height: 0.037rem;
                position: absolute;
                border-radius: 1.5px;"></div>
              </div>

              <div class="toroom">
                <div>进入工作室<i class="el-icon-arrow-right"></i></div>
              </div>
            </div>
            <div class="pic_title">
              <div class="xyzhsz" style="width: 50%">学员综合素质雷达图</div>
              <div class="xyzhsz" style="width: 50%">各年度学员综合素质指标对比</div>
            </div>
            <div class="ec_pic">
              <div class="ec_left">
                <Wujiao></Wujiao>
                <div class="wujiao_info">
                  <ul class="wujiao_info_args">
                    <li v-for="(item,index) in indicator">
                      <span class="name_cirle">{{item.name}}</span>
                      <span class="name_num">{{item.num}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="ec_right">
                <tiaoCom></tiaoCom>
              </div>
            </div>
          </div>

          <div class="umpic_sec">
            <div class="title">
              <div class="hx">
                学员画像
                <div style="background: #00bda5;
                bottom: 0;
                width: 0.585rem;
                height: 0.037rem;
                position: absolute;
                border-radius: 1.5px;"></div>
              </div>
              <div >
                <div>姓名 <i style="margin-left: 10px" class="el-icon-arrow-down"></i></div>
              </div>
            </div>
            <div class="ec_pic2">
              <div class="ec_left">
                <div style="margin-top: 0.329rem;width: 100%">
                  <div class="stu_info">
                    <div class="tx"></div>
                    <div class="stu_info_de">
                      <div>个人基本信息</div>
                      <div style="font-size: 0.165rem"> 姓名 <i class="el-icon-arrow-down"></i></div>
                    </div>
                  </div>
                  <div class="stu_info_sban" >
                      <div class="stu_info_sban_detail" v-for="i in 3">
                        <div style="width: 24px;
                          height: 24px;
                          background: #eafafa;
                          border-radius: 3px;">

                        </div>
                        <div style="height: 100%;font-size: 0.091rem;margin-left: 0.22rem">
                          <div style="color:#868686">学校</div>
                          <div>上海第二工业大学附属振华外经职业技术学校</div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="ec_right">
                <div class="xyzhsz" style="margin-top: 0.329rem">进入工作室前后各综合素质指标对比</div>
                <Wujiao2></Wujiao2>
              </div>
            </div>
            <div style="height: 1px;background-color:#F2F2F2;width: 93.5%"></div>
            <div class="zhexiandiv">
              <Zhexian></Zhexian>
              <div class="lengen" >
                <div v-for="( items,index) in orgs"
                     class="ccc">
                  <div class="ccc2" :style="{backgroundColor:items.color}"></div>  {{items.content}}
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
</template>

<script>
import Wujiao from "./echartCom/Wujiao";
import Wujiao2 from "./echartCom/Wujiao2";
import tiaoCom from "./echartCom/tiaoCom";
import Zhexian from "./echartCom/Zhexian";
import HeadNewPro from "../../common/HeadNewPro";

export default {
  name: 'NumPic',
  props: {},
  components: {
    Wujiao,
    Wujiao2,
    tiaoCom,
    Zhexian,
    HeadNewPro
  },
  data () {
    return {
      indicator: [
        { name: '态度', num: 5 },
        { name: '专业建设', num: 5 },
        { name: '专业技能', num: 5 },
        { name: '专业技能', num: 5 },
        { name: '教科研', num: 5 },
      ],
      orgs: [
        {color:'#FFF7F5',content:'2022年以后'},
        {color:'#F3FFFE',content:'进入工作室后'},
        {color:'#E6F6FF',content:'未进入工作室'},
      ]
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
@import "../../../assets/css/promanage/numPic/numpic.css";
</style>
<style>
body{
  min-width: 900px;
}
</style>
