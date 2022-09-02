<template>
  <div class="mnexam_logo tables">
      <router-link to="/mnexam/Examdo">
        <el-button class="ksks">
          开始模拟考
        </el-button>
      </router-link>


    <el-table :data="formInline.examList" class="mytable"  :row-style="{height:'50px'}" :header-cell-style="headpaddingspace" :cell-style="rowcellstyle">
      <el-table-column label="试卷名称" align="center" prop="examName"  :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="开始时间" align="center" prop="startTime"  :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="结束时间" align="center" prop="endTime"  :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="考试用时" align="center" prop="timeConsuming"   :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="得分" align="center" prop="fraction" width="50"  :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="操作" align="center" >
        <template slot-scope="scope">
          <span class="ahighlight" @click="showexam(scope.row.id)" style="cursor: pointer">查看试卷</span>
          <span  class="ahighlight del" @click="del">删除</span>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center;height: 50px;" class="pagediv">
      <div style="display: flex" v-show="formInline.pageshow" >
        <el-pagination :small="true"
                       @size-change="handleResourceCurrentChange"
                       @current-change="handleResourceCurrentChange"
                       :current-page="formInline.currPage"
                       :page-sizes="[10, 20, 30]"
                       :page-size="formInline.pageSize"
                       layout="prev,pager,next"
                       prev-text="上一页"
                       next-text="下一页"
                       :page-count="formInline.pagecount"

                       :total="formInline.total">
        </el-pagination>
      </div>

    </div>

  </div>
</template>

<script>
import {doGetMySkillResourcePaperList} from "../../../../api/modules/skill/exam/exam";
import API from '@/api'
export default {
  name: 'Examtable',
  props: {},
  components: {

  },
  data () {
    return {
      formInline: {
        pagecount:1,
        user: '',
        region: '',
        isIndeterminate: true,
        checkAll: false,
        currPage:1,
        pageSize:6,
        pageshow:true,
        examList:[
        ],
        total:0,frompage:0,topage:0,
        roleName:'',
        userType:1,
        userNo:'',
        registerStartTime:'',
        registerEndTime:'',
        loginStartTime:'',
        loginEndTime:'',

        registerDateEndPickerOptions:{
          disabledDate:(time)=>{
            if(this.registerEndTime!=''&&this.registerEndTime!=null){
              return time.getTime() > this.registerEndTime.getTime()
            }
          }
        },
        registerDateStartPickerOptions:{
          disabledDate:(time)=>{
            if(this.registerStartTime!=''&&this.registerStartTime!=null){
              return time.getTime() < this.registerStartTime.getTime()
            }
          }
        },
        loginDateEndPickerOptions:{
          disabledDate:(time)=>{
            if(this.loginEndTime!=''&&this.loginEndTime!=null){
              return time.getTime() > this.loginEndTime.getTime()
            }
          }
        },
        loginDateStartPickerOptions:{
          disabledDate:(time)=>{
            if(this.loginStartTime!=''&&this.loginStartTime!=null){
              return time.getTime()<this.loginStartTime.getTime()
            }
          }
        },
        value:'',
        courselist:[],
        cities:'',
        checkedCities:[],
        courseid:'',
        userId: '',activeName:'second',exurl:'',uploadurl:'',detailss:'',header:{token:''},
        active1:0,
        exportUnrealVisible:false,
        uploaddata:'',aaa:0,

        uploadImglogo:'',
        userImg:'',
        imageUrl: '',
        zsgccontent:'',
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created(){
    this.doGetMySkillResourcePaperList()
  },
  methods: {
    handleResourceCurrentChange(val){
      this.formInline.currPage = val;
      this.doGetMySkillResourcePaperList()
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    headpaddingspace({row, column, rowIndex, columnIndex}){
      if(columnIndex==0){
        return 'text-align:center;background-color:#F5F5F5;height:44px;font-size:12px;font-weight:bold;color:#8D8D8D'
      }else {
        return 'text-align:center;background-color:#F5F5F5;height:44px;font-size:12px;font-weight:bold;color:#8D8D8D'
      }

    },
    rowcellstyle({row, column, rowIndex, columnIndex}){
      if(columnIndex==0){
        return 'text-align:center;height:49px;'
      }else if(columnIndex==3){
        /*return 'color:red;height:50px;width:600px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-break: break-all;'*/
      }else {
        return 'height:49px;'
      }
    },

    //获取考试列表
    async doGetMySkillResourcePaperList(){
      let params = {
        page:this.formInline.currPage,
        limit:6
      }
      const  { data } =  await API.exam.doGetMySkillResourcePaperList(params)
      let {currPage,pageSize,totalCount,totalPage,list } = data.page
      this.formInline.currPage = currPage
      this.formInline.pageSize = pageSize
      this.formInline.examList = list
      this.formInline.total = totalCount
      this.formInline.pagecount = totalPage
      //console.log(data)
    },
    del(){

    },
    //跳转试卷页面
    showexam(val){
      this.$router.push({
        name:'Examresult',
        query:{
          id:val
        }

      })
    }
  },
}
</script>

<style scoped>
@import "../../../../assets/css/skill/practice/practice.css";
@import "../../../../assets/css/skill/mnexam/mnexam.css";
</style>
