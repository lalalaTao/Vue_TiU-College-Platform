<!-- 左侧区域 -->
<template>
    <div class="practice_content_menu" >
      <!-- <div class="practice_content_left_top"> -->
      <div style="width: 93%;margin-top:10px;">
            <el-button class="set-other-btn" size="mini" icon="el-icon-plus">专项类型</el-button>
            <el-button class="set-other-btn" size="mini" icon="el-icon-plus">子专项</el-button>
            <i class="el-icon-top" size="small"></i>
            <i class="el-icon-bottom" size="small"></i>
      </div><br>
      <hr style="border-color:#f3eaea;width: 308px;">
      <div class="practice_content_menu_top">
        <div style="font-size: 0.128rem;margin-top:0.183rem">专项练习</div>
        <el-tree default-expand-all :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div style="width: 2.726rem;
            height: 0.018rem;
            background: #f8f8f8;
            border-radius: 0.009rem;"></div>
      <div class="practice_content_menu_buttom">
        <div class="practice_content_menu_zhunque">
          <div>答题卡</div>
          <div>准确率 <span class="green_color">{{zhunque}}</span></div>
        </div>
        <div class="practice_content_menu_yeno">
            <div class="point"></div>
            <div >正确</div>
            <div class="point2"></div>
            <div class="">错误</div>
          </div>
        <div class="practice_content_menu_choose">
          <div class="practice_content_menu_choose_args_p"
               style="width: 14.28%;display: flex;justify-content: center"
               v-for="(item,index) in 60" :key="index">
            <div class="practice_content_menu_choose_args" >
              {{i}}
            </div>
          </div>
        </div>
        <div style="width: 2.726rem;
            height: 0.018rem;
            background: #f8f8f8;
            border-radius: 0.009rem;"></div>

        <div class="practice_content_menu_buttom_next">
            <div>答对自动下一条</div>
            <div style="margin-right: 0.366rem">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </div>
        </div>

        <div class="practice_content_menu_buttom_reset">
          <div>重新答题</div>
          <i class="el-icon-refresh-right green_color refresh"></i>
        </div>
      </div>
    </div >
</template>

<script>


import {listSkillQuestionKnowledgeTree} from "../../../api/modules/practice/practice";
import API from '@/api'
export default {
name: 'Practicemeun',
props: {},
  components: {
  },
  data() {
    return {
      value:true,
      zhunque:'56%',
      data: [],
      defaultProps: {
        children: 'childList',
        label: 'name'
      },
      meanuList:[
        {
          "id": 2,
          "schoolId": 1,
          "skillResourcesId": 1,
          "parentId": 0,
          "parentName": null,
          "type": 0,
          "name": "2",
          "orderNum": 1,
          "nodeNum": "2",
          "orderId": null,
          "remark": null,
          "createTime": "2022-05-16 16:24:39",
          "createUserId": 2,
          "modifiedTime": "2022-05-16 16:24:51",
          "modifiedUserId": 2,
          "childList": [
            {
              "id": 4,
              "schoolId": 1,
              "skillResourcesId": 1,
              "parentId": 2,
              "parentName": "2",
              "type": 0,
              "name": "2",
              "orderNum": 2,
              "nodeNum": "2",
              "orderId": null,
              "remark": null,
              "createTime": "2022-05-16 16:33:05",
              "createUserId": 2,
              "modifiedTime": null,
              "modifiedUserId": null,
              "childList": [
                {
                  "id": 5,
                  "schoolId": 1,
                  "skillResourcesId": 1,
                  "parentId": 4,
                  "parentName": "2",
                  "type": 0,
                  "name": "2",
                  "orderNum": 2,
                  "nodeNum": "2",
                  "orderId": null,
                  "remark": null,
                  "createTime": "2022-05-16 16:33:06",
                  "createUserId": 2,
                  "modifiedTime": null,
                  "modifiedUserId": null,
                  "childList": []
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.listSkillQuestionKnowledgeTree()
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    //获取树状的试题目录
    listSkillQuestionKnowledgeTree(){
        let params = {
          "skillResourcesId":1
        }
        const {data} = API.practice.listSkillQuestionKnowledgeTree(params)
     // console.log(data)
      this.data = this.meanuList

    }
  },
}
</script>

<style scoped>
@import "../../../assets/css/skill/practice/Practicemeun.css";
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
</style>
