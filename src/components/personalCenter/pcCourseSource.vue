<template>
  <div class="base_pcCourseSource" >
    <!--<HeadNewPro></HeadNewPro>-->
    <div class="main" style="margin-top: 100px;margin-bottom: 50px">
      <pcMenu ></pcMenu>

      <div class="rt_main">
        <div class="rt_menu">
          <el-menu
            :default-active="sourceMenuIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSourceMenuSelect"
            text-color="#949494"
          >
            <el-menu-item index="1">专业资源库</el-menu-item>
            <el-menu-item index="2">仿真资源库</el-menu-item>
            <el-menu-item index="3">视频公开课</el-menu-item>
            <!-- 添加添加技能考核管理 -->
            <el-menu-item index="4">技能考核管理</el-menu-item> 
          </el-menu>

        </div>
        <div class="rt_search">
          <div class="rt_search_title">
            资源名称
          </div>
          <div class="rt_search_input">
            <el-input v-model="querySourceName" placeholder="请输入" style="width: 300px;" clearable></el-input>
            <img style="width: 20px;height: 20px;position: relative;top: 5px;right: 42px;cursor: pointer;" :src="$imghost+'/personalCenter/pcCourseSource/sourceSearch.png'" @click="listPersonCenterHySkillResources">
          </div>
          <div class="rt_search_btn">
            <el-button type="primary" @click="addOrUpdateOpenForAdd" >新增资源</el-button>
          </div>
        </div>
        <div class="rt_table">

          <el-table
            :data="tableData"
            style="width: 100%;" :header-cell-style="changeHeadCol_height" :cell-style="changeCol_height">
            <el-table-column :show-overflow-tooltip="true" prop="name" label="资源名称" width=""></el-table-column>
            <el-table-column prop="coverImg" label="封面" width="">
              <template slot-scope="scope">
                <img :src="scope.row.coverImg" height="36" width="64" style="margin-top: 5px"  />
              </template>
            </el-table-column>
            <el-table-column :show-overflow-tooltip="true" prop="facultyName"  label="院系" ></el-table-column>
            <el-table-column  :show-overflow-tooltip="true" prop="specialtyName"  label="专业"  ></el-table-column>
            <el-table-column :show-overflow-tooltip="true" prop="courseNature" label="课程性质"  >
              <template slot-scope="scope">
                <span v-if="scope.row.courseNature == 1">公共必修课</span>
                <span v-if="scope.row.courseNature == 2">专业必修课</span>
                <span v-if="scope.row.courseNature == 3">限定选修课</span>
                <span v-if="scope.row.courseNature == 4">专业选修课</span>
                <span v-if="scope.row.courseNature == 5">公共选修课</span>
              </template>
            </el-table-column>
            <el-table-column prop="courseHour" label="课时" ></el-table-column>
            <el-table-column prop="statusRelease" label="状态"  >
              <template slot-scope="scope">
                <div v-if="scope.row.statusRelease == 1" style="height: 30px;display: flex;align-items: center;justify-content: center;">
                  <div style="width: 6px;height: 6px;background: #c8c8c8;border-radius:3px"></div>
                  <div style="margin-left: 6px;">未发布</div>
                </div>
                <div v-if="scope.row.statusRelease == 2" style="height: 30px;display: flex;align-items: center;justify-content: center;">
                  <div style="width: 6px;height: 6px;background: #00bda5;border-radius:3px"></div>
                  <div style="margin-left: 6px;">已发布</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="personCharge" label="负责人"  ></el-table-column>
            <el-table-column prop="address" label="操作" >
              <template slot-scope="scope">
                <el-button type="text" size="small" class="tabListbtn001"  @click="junpToDirEdit(scope.row.id)" >章节管理</el-button>

                <el-button type="text" size="small" class="tabListbtn001"  v-popover::ref="'popover_'+scope.row.id">更多</el-button>
                <el-popover
                  :ref="'popover_'+scope.row.id"
                  placement="bottom"
                  popper-class="tisi_pccs"
                  trigger="hover"
                  >
                  <div style="width: 98px;height: 240px;border: 0px solid red;">
                    <div class="tisi_pccs_col" @click="unPublishPersonCenterHySkillResources(scope.row.id,scope.row.statusRelease)">发布</div>
                    <div class="tisi_pccs_col">题库管理</div>
                    <div class="tisi_pccs_col">试卷管理</div>
                    <div class="tisi_pccs_col" @click="addTeacherOpen(scope.row.id,scope.row.name)">添加老师</div>
                    <div class="tisi_pccs_col" @click="addOrUpdateOpenForUpdate(scope.row.id)">修改</div>
                    <div class="tisi_pccs_col" @click="deletePersonCenterHySkillResources(scope.row.id)">删除</div>
                    <!--<div class="tisi_pccs_col">{{scope.row.id}}</div>-->
                  </div>

                </el-popover>
              </template>
            </el-table-column>
          </el-table>

        </div>

        <div class="rt_table_page">
          <!--<div  @click="pagePervious">上一页</div>
          layout=" pager"
          -->
          <el-pagination
            style="margin-right: 51px;"
            layout="prev, pager, next"

            @size-change="sizeChangeHandle"
            @current-change="currentChangeHandle"
            :current-page="currentPage_pie"
            :page-size="pageSize_pie"
            :total="total_pie"
            ref="pageGroup"
          >
          </el-pagination>
          <!--<div @click="pageNext">下一页</div>-->
        </div>

      </div>
      <!--<Banner  :height="'3.063rem'" :list="bannerlist"></Banner>-->
    </div>


    <!--资源新增修改-->
    <el-dialog :title="addOrUpdateSourceTitle" align="center" width="540px"  style="border-radius: 4px;" :visible.sync="addOrUpdateSourceVisible">
      <!--={{tmpUserType}}=-->
      <div style="width: 540px;border: 0px solid red;justify-content: center;padding-bottom: 20px;"  >
        <div class="aus_main">
          <div class="aus_line1">
            <div class="aus_title1"> <span>*</span>资源名称：</div>
            <div class="aus_content1"><el-input v-model="param_hySkillResourcesEntity.name" placeholder="请输入" style="width: 346px;" clearable></el-input></div>
          </div>
          <div class="aus_line1">
            <div class="aus_title1"> <span>*</span>院系：</div>
            <div class="aus_content1">
              <el-select v-model="param_hySkillResourcesEntity.facultyId" placeholder="请选择" style="width: 346px;" clearable  @change="listHyschoolspecialty" @clear="listHyschoolspecialty">
                <el-option
                  v-for="item in facultyList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="aus_line1">
            <div class="aus_title1"> <span>*</span>专业：</div>
            <div class="aus_content1">
              <el-select v-model="param_hySkillResourcesEntity.specialtyId" :disabled="param_hySkillResourcesEntity.facultyId==''"  placeholder="请选择" style="width: 346px;" clearable @change="facultyChange">
                <el-option
                  v-for="item in specialtyList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="aus_line1">
            <div class="aus_title1"> <span>*</span>课程性质：</div>
            <div class="aus_content1">
              <el-select v-model="param_hySkillResourcesEntity.courseNature" placeholder="请选择" style="width: 346px;" clearable   >
                <el-option
                  v-for="item in courseNatureList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="aus_line1">
            <div class="aus_title1"> <span>*</span>学时：</div>
            <div class="aus_content1"><el-input v-model="param_hySkillResourcesEntity.courseHour" placeholder="请输入" style="width: 300px;" clearable></el-input></div>
            <div style="margin-left: 14px;">个</div>
          </div>
          <div class="aus_line1">
            <div class="aus_title1" style="width: 173px;"> <span>*</span>团队老师读取权限：</div>
            <div class="aus_content1">
              <el-checkbox-group v-model="param_hySkillResourcesEntity.permissionTeamTeaRw">
                <el-checkbox  false-label='null' true-label="1" name="state">只读</el-checkbox>
                <el-checkbox  false-label='null' true-label="2" name="state">读写</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="aus_line1">
            <div class="aus_title1" style="width: 87px;"> <span>*</span>开放权限：</div>
            <div class="aus_content1">
              <el-checkbox-group v-model="param_hySkillResourcesEntity.permissionOpen" @change="permissionOpenFun">
                <el-checkbox  false-label='null' true-label="1" name="state">校级</el-checkbox>
                <el-checkbox  false-label='null' true-label="2" name="state">院系</el-checkbox>
                <el-checkbox  false-label='null' true-label="3" name="state">专业</el-checkbox>
                <el-checkbox  false-label='null' true-label="4" name="state">班级</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="aus_line1" v-show="permissionOpenClassShowFlag">
            <div class="aus_title1" style="">
                <span>*</span>班级：
            </div>
            <div class="aus_content2" v-if="classData.length>0" style="width: 360px;">
              <div class="aus_cbx2_all">
                <el-checkbox :indeterminate="isIndeterminate" v-model="classCheckAll" @change="handleClassCheckAllChange">全部班级</el-checkbox>
              <!--<div style="margin: 15px 0;"></div>-->
              </div>
              <div class="aus_cbx2_body">
                <el-checkbox-group v-model="classChecked" @change="handleCheckedClassChange">
                  <el-checkbox v-for="cls in classData" :label="cls.id" :key="cls.id">{{cls.name}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div class="aus_content2 " v-if="classData.length==0" style="width: 360px;font-size: 12px;font-family: PingFang SC, PingFang SC-Regular;font-weight: 400;text-align: left;color: #9f9f9f;line-height: 16px;">
              当前选中专业下，暂无班级
            </div>
          </div>
          <div class="aus_line1">
            <div class="aus_title1" style="">
              <span>*</span>封面：
            </div>
            <div class="aus_content2" style="width: 360px;display:flex;justify-content: flex-start;">
              <!--<div class="aus_upfile_bg" :style="{backgroundImage:'url(' + imghost + '/personalCenter/pcCourseSource/pcCourseSource_uploadFile_bg.png' + ')' }">
                <div class="aus_upfile_jia" :style="{backgroundImage:'url(' + imghost + '/personalCenter/pcCourseSource/pcCourseSource_uploadFile_jia.png' + ')' }"></div>
                <div class="aus_upfile_txt">添加封面</div>
              </div>-->
              <div class="aus_upfile_bg"  >
                <el-upload
                  style="width: 100px;float: left;"
                  class="avatar-uploader"
                  :action="uploadImgUrl"
                  name="file"
                  :data="uploadFileData"
                  :show-file-list="false"
                  :on-success="handleImgSuccess"
                  :before-upload="beforeImgUpload"
                  :headers="header"
                >
                  <div v-if="param_hySkillResourcesEntity.coverImg==''" class="aus_upfile_bg" :style="{backgroundImage:'url(' + imghost + '/personalCenter/pcCourseSource/pcCourseSource_uploadFile_bg.png' + ')' }">
                    <div style="width: 100%;display: flex;justify-content: center;">
                      <div class="aus_upfile_jia" :style="{backgroundImage:'url(' + imghost + '/personalCenter/pcCourseSource/pcCourseSource_uploadFile_jia.png' + ')' }"></div>
                    </div>
                    <div class="aus_upfile_txt">添加封面</div>
                  </div>
                  <img v-if="param_hySkillResourcesEntity.coverImg!=''" :src="webUrl(param_hySkillResourcesEntity.coverImg)"  class="aus_upfile_bg">

                </el-upload>
              </div>
            </div>
          </div>
          <div class="aus_line1">
            <div class="aus_title1" style="">
              课程视频：
            </div>
            <div class="aus_content2" style="width: 360px;display:flex;justify-content: flex-start;">
              <el-upload
                style="width: 100px;float: left;"
                class="avatar-uploader"
                :action="uploadFileUrl"
                name="file"
                :data="uploadFileData"
                :show-file-list="false"
                :on-success="handleVideoSuccess"
                :before-upload="beforeVideoUpload"
                :headers="header"
              >
                <div v-if="param_hySkillResourcesEntity.courseVideoUrl==''" class="aus_upfile_bg" :style="{backgroundImage:'url(' + imghost + '/personalCenter/pcCourseSource/pcCourseSource_uploadFile_bg.png' + ')' }">
                  <div style="width: 100%;display: flex;justify-content: center;">
                    <div class="aus_upfile_jia" :style="{backgroundImage:'url(' + imghost + '/personalCenter/pcCourseSource/pcCourseSource_uploadFile_jia.png' + ')' }"></div>
                  </div>
                  <div class="aus_upfile_txt">添加视频</div>
                </div>
                <video v-if="param_hySkillResourcesEntity.courseVideoUrl!=''" class="aus_upfile_bg" style="object-fit:fill;"  :src="webUrl(param_hySkillResourcesEntity.courseVideoUrl)"  />
              </el-upload>
              <div class="aus_upfile_tp1">如果该课程仅有一个视频，请在此处上传， 分章节课程视频文件请在目录设置中上传</div>
            </div>
          </div>
          <div class="aus_line1">
            <div class="aus_confirm_btn">
              <el-button  class="aus_confirm_btn_cancel" style="height: 28px;" @click="addOrUpdateCancel">取消</el-button>
              <el-button type="primary" class="aus_confirm_btn_ok" style="height: 28px;margin-left: 18px;" @click="saveOrUpdateHySkillResources">确定</el-button>
            </div>
          </div>

        </div>

      </div>

    </el-dialog>


    <!--教师绑定-->
    <el-dialog title="添加教师" align="center" width="520px"  style="border-radius: 4px;" :visible.sync="addOrUpdateTeacherVisible" top="31vh">
      <div style="width: 520px;border: 0px solid red;justify-content: center;padding-bottom: 20px;min-height:140px;"  >
        <div >
          <div class="aus_main" style="width: 432px;min-height: 140px;">
            <div class="aus_line1" style="margin-left: 20px;margin-top: 28px;">
              <div class="aus_title1">资源名称：</div>
              <div class="aus_content1">{{sourceNameForTeacher}}</div>
            </div>
            <div class="aus_line1" style="margin-left: 20px;margin-top: 24px;">
              <div class="aus_title1">教师名称：</div>
              <div class="aus_content1 aus_content3">

                <el-select v-model="teacherChecked" placeholder="请选择" style="width: 300px;" filterable  :filter-method="teacherFilter"   v-loading="teaLoading" @change="teacherChangeFun">
                  <el-option
                    v-for="item in teacherList"
                    :key="item.teaUserId"
                    :label="item.realName"
                    :disabled="item.flagAddRes*1==1"
                    :value="item.teaUserId">
                    <div style="width: 100%;display: flex;justify-content: space-between;height: 40px;align-items: center;" class="cs_teaSel">
                      <div style="width: 150px;display: flex;justify-content: flex-start;">
                        <div style="width:40%">{{ item.realName }}</div>
                        <div>({{item.userNum}})</div>
                      </div>
                      <div v-if="item.flagAddRes*1==0" style="color:#00BDA5;">添加</div>
                      <div v-if="item.flagAddRes*1==1" style="">已添加</div>
                    </div>
                    <!--<span style="float: left">{{ item.realName }}({{item.userNum}})</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">添加</span>-->
                  </el-option>
                </el-select>

              </div>
            </div>
            <div class="aus_line1" style="margin-top: 18px;">
              <div class="aus_title1"></div>
              <div class="aus_content1">
                <div v-for="(item,index) in teacherList" v-if="item.flagAddRes*1==1" style="width: 100%;display: flex;justify-content: space-between;height: 40px;align-items: center;" class="cs_teaSel">
                  <div style="width: 150px;display: flex;justify-content: flex-start;font-size: 14px;font-family: PingFang SC, PingFang SC-Regular;font-weight: 400;text-align: left;color: #252525;margin-left: 22px;">
                    <div style="width:30%">{{item.realName}}</div>
                    <div>({{item.userNum}})</div>
                  </div>
                  <div style="font-size:16px;cursor: pointer;" @click="teacherDelFun(item.teaUserId)"><i class="el-icon-error"></i></div>
                </div>

              </div>
            </div>

            <div class="aus_line1" style="margin-top: 28px;">
              <div class="aus_confirm_btn">
                <el-button  class="aus_confirm_btn_cancel" style="height: 28px;" @click="addOrUpdateTeacherCancel">取消</el-button>
                <el-button type="primary" class="aus_confirm_btn_ok" style="height: 28px;margin-left: 18px;" @click="saveOrUpdatePersonCenterHySkillResources()">确定</el-button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  import Banner from "../common/Banner";
  import HeadNewPro from "../common/HeadNewPro";
  import pcMenu from "./pcMenu";
  import API from '@/api'
export default {
  name: 'pcCourseSource',
  components: {
    Banner,HeadNewPro,pcMenu
  },
  data () {
    return {
      imghost:this.$imghost,
      sourceMenuIndex:"1",//资源类型标签  1、2、3、4
      sourceType:2,//2 、3 、4、5
      querySourceName:'',//资源名称搜索框


      tableData: [],//资源列表
      currentPage_pie:1,pageSize_pie:8,total_pie:0,//资源分页
      changeHeadCol_height({row, column, rowIndex, columnIndex}){
        return 'text-align:center;border:none;background-color:#F5F5F5;font-size:14px;font-family:Microsoft YaHei;font-weight:bold;color:#515151;';
      },
      changeCol_height({row, column, rowIndex, columnIndex}){
        if(columnIndex==1){
          return 'text-align:center;color:#515151;font-weight:400;font-family:Microsoft YaHei;font-size:14px;padding-top:5px;padding-bottom:5px;';
        }else{
          return 'text-align:center;color:#515151;font-weight:400;font-family:Microsoft YaHei;font-size:14px;padding-top:5px;padding-bottom:5px;';
        }
      },


      addOrUpdateSourceVisible:false,
      addOrUpdateSourceTitle:'添加资源',
      param_hySkillResourcesEntity:{
        flag:1,//1新增，2修改
        id:'',
        name:'',//资源名称
        facultyId:'',//院系id
        specialtyId:'',//专业id
        courseHour:'',//课程学时
        courseNature:'',//课程性质 1公共必修课、2专业必修课、3限定选修课、4专业选修课、5公共选修课
        permissionTeamTeaRw:'',//团队老师读写权限;1、只读；2、读写；
        permissionOpen:'',//开放权限;（1、校级[完全开放]；2、院系[选择的院系]；3、专业[选择的专业]；4、班级[选择的班级]）
        coverImg:'',//封面图片
        courseVideoUrl:'',//课程视频地址
      },
      param_relationEntityList:[//
      ],
      facultyList:[],
      specialtyList:[],
      courseNatureList:[
        {id:1,name:'公共必修课'},
        {id:2,name:'专业必修课'},
        {id:3,name:'限定选修课'},
        {id:4,name:'专业选修课'},
        {id:5,name:'公共选修课'},
      ],
      classCheckAll: false,//全选标记
      // checkedCities: ['机器人2101', '机器人2102'],//已选中的checkbox
      // cities: ['机器人2101', '机器人2102', '机器人2106', '机器人2103', '机器人2104', '机器人2105'  , '机器人210311', '机器人21042222'],
      isIndeterminate: false,//全选框，是否半选
      permissionOpenClassShowFlag:false,
      classData: [
        // {id:0,name:""}
      ],//当前选中的院系专业下，班级列表
      classChecked:[],

      uploadFileUrl: API.common.getUrl('/hyossfilelist/comUploadFile'),
      uploadImgUrl: API.common.getUrl('/hyossfilelist/comUploadImage'),
      uploadFileData:{"fileFrom":12},
      header:{token:''},

      addOrUpdateTeacherVisible:false,
      sourceNameForTeacher:'',
      sourceIdForTeacher:'',
      teacherChecked:'',
      teacherList:[],
      teacherListCopy:[],
      teaLoading:true,

    }
  },
  computed: {
    webUrl () {
      return function (name) {
        //return this.$http.webUrl('') + (encodeURI(name));
        return API.common.getUrl(encodeURI(name))
      }
    },
  },
  watch: {

  },
  created() {//created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
    //初始化资源列表
    this.listPersonCenterHySkillResources();
    //初始化院系列表
    this.listHyschoolfaculty();
  },
  mounted() { //mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
    this.header.token=this.$cookie.get('access_Token')
  },
  methods: {
    sourceMenuIndexFun(){
      if(this.sourceType===2){
        return 12;
      }else if(this.sourceType===3){
        return 13;
      }else if(this.sourceType===4){
        return 14;
      }else if(this.sourceType===5){
        return 15;
      }
    },
    handleClassCheckAllChange(val) {//全选 控制
      this.isIndeterminate = false;

      if(this.classCheckAll==true){
        this.classChecked = [];
        for(let i=0;i<this.classData.length;i++){
          this.classData[i].state=true;
          this.classData[i].isIndeterminate=false;
          this.classChecked.push(this.classData[i].id)
        }

      }else{
        this.classChecked = [];
        for(let i=0;i<this.classData.length;i++){
          this.classData[i].state=false;
          this.classData[i].isIndeterminate=false;
        }
      }

    },
    handleCheckedClassChange(value) {//单选控制
// console.log("value:",value,"===",this.classChecked)
      if(this.classChecked.length==0){
        this.isIndeterminate = false;
        this.classCheckAll = false;
      }else if(this.classChecked.length==this.classData.length){
        this.isIndeterminate = false;
        this.classCheckAll = true;
      }else{
        this.isIndeterminate = true;
        this.classCheckAll = false;
      }
    },


    //获取资源列表
    async listPersonCenterHySkillResources(){
      let params = {
        type:this.sourceType,
        name:this.querySourceName,
        page:this.currentPage_pie,
        limit:this.pageSize_pie,
      }
      const  { data } =  await API.pcCourseSource.listPersonCenterHySkillResources(params)
      console.log("data=",data);
      if (data && data.code === 0) {
        this.tableData = data.page.list;
        for (let i = 0; i < this.tableData.length; i++) {
          this.tableData[i].coverImg = this.$apiImgHost + this.tableData[i].coverImg;
        }
        this.total_pie = data.page.totalCount
      }else{
        this.tableData = []
        this.total_pie = 0
      }
      // if(data.page.list.length > 0 && data.page.list[0].hasOwnProperty('urlImg')){
      //   this.bannerlist =  data.page.list
      // }
    },
    //获取资源列表
    async listPersonCenterHySkillResourcesForOne(id){
      // let params = {
      //   type:this.sourceType,
      //   id:id
      // }
      // const  { data } =  await API.pcCourseSource.listPersonCenterHySkillResources(params)
      // console.log("listPersonCenterHySkillResourcesForOne data=",data);
      // if (data && data.code === 0) {
      //   this.tableData = data.page.list;
      // }else{
      //   this.tableData = []
      // }
    },

    //院系列表
    async listHyschoolfaculty(){
      let params = {
      }
      const  { data } =  await API.pcCourseSource.listHyschoolfaculty(params)
      // console.log("listHyschoolfaculty data=",data);
      if (data && data.code === 0) {
        this.facultyList = data.list;
      }else{
        this.facultyList = []
      }
    },
    //专业列表
    async listHyschoolspecialty(){
      let fid = this.param_hySkillResourcesEntity.facultyId;
      this.param_hySkillResourcesEntity.specialtyId='';
      if(fid==null || fid == ""){
        // console.log("22222222222specialtyList data=",data);
        this.specialtyList = [];
        return;
      }
      let params = {
        facultyId:this.param_hySkillResourcesEntity.facultyId
      }
      const  { data } =  await API.pcCourseSource.listHyschoolspecialty(params)
      // console.log("1111111111specialtyList data=",data);
      if (data && data.code === 0) {
        this.specialtyList = data.list;
      }else{
        this.specialtyList = []
      }
    },
    addOrUpdateOpenForAdd(){
      this.addOrUpdateSourceTitle='添加资源';
      //TODO 如果资源id不为空，则重置参数
      if(this.param_hySkillResourcesEntity.id!=''){
        this.param_hySkillResourcesEntity={
          flag:1,//1新增，2修改
          id:'',
          name:'',//资源名称
          facultyId:'',//院系id
          specialtyId:'',//专业id
          courseHour:'',//课程学时
          courseNature:'',//课程性质 1公共必修课、2专业必修课、3限定选修课、4专业选修课、5公共选修课
          permissionTeamTeaRw:'',//团队老师读写权限;1、只读；2、读写；
          permissionOpen:'',//开放权限;（1、校级[完全开放]；2、院系[选择的院系]；3、专业[选择的专业]；4、班级[选择的班级]）
          coverImg:'',//封面图片
          courseVideoUrl:'',//课程视频地址
        }
        this.classChecked=[];
      }
      this.addOrUpdateSourceVisible=true;
      this.permissionOpenClassShowFlag=false;
      // this.classData = []

    },
    async addOrUpdateOpenForUpdate(id){
      this.addOrUpdateSourceTitle='修改资源';
      this.permissionOpenClassShowFlag=false;
      this.classChecked=[];

      let params = {
        type:this.sourceType,
        id:id
      }
      const  { data } =  await API.pcCourseSource.listPersonCenterHySkillResources(params)
      // console.log("listPersonCenterHySkillResourcesForOne data=",data);
      if (data && data.code === 0 && data.page.list.length==1) {
        // this.tableData = data.page.list;
        this.param_hySkillResourcesEntity = data.page.list[0];

        this.param_hySkillResourcesEntity.facultyId=this.param_hySkillResourcesEntity.facultyId*1;
        this.param_hySkillResourcesEntity.courseNature=this.param_hySkillResourcesEntity.courseNature*1;
        this.param_hySkillResourcesEntity.permissionTeamTeaRw=this.param_hySkillResourcesEntity.permissionTeamTeaRw+"";
        this.param_hySkillResourcesEntity.permissionOpen=this.param_hySkillResourcesEntity.permissionOpen+"";

        let params2 = {
          facultyId:this.param_hySkillResourcesEntity.facultyId
        }
        const  { data:specObj } =  await API.pcCourseSource.listHyschoolspecialty(params2)
        console.log("specialtyList data=",specObj);
        if (specObj && specObj.code === 0) {
          this.specialtyList = specObj.list;
          this.param_hySkillResourcesEntity.specialtyId=this.param_hySkillResourcesEntity.specialtyId*1;
        }else{
          this.specialtyList = []
        }


        let clsList = this.param_hySkillResourcesEntity.relationClassList;
        if(clsList!=null && clsList.length >0){
          this.classChecked = [];
           for (let i=0;i<clsList.length;i++){
             if(clsList[i].addSkillResourceFlag==1){
                this.classChecked.push(clsList[i].id);
             }
             this.classData=clsList;
           }
           if(this.classChecked.length>0){
              this.permissionOpenClassShowFlag=true;
              this.handleCheckedClassChange();
           }
        }


      }else{
        // this.tableData = []
      }
      //初始化院系、专业，课程性质、等


      this.addOrUpdateSourceVisible=true;
    },
    addOrUpdateCancel(){
      this.addOrUpdateSourceVisible=false;
    },
    async  permissionOpenFun(){
      console.log("this.param_hySkillResourcesEntity.permissionOpen="+this.param_hySkillResourcesEntity.permissionOpen+"=")
      if(this.param_hySkillResourcesEntity.permissionOpen==4){
        this.classData = []
        if(this.param_hySkillResourcesEntity.specialtyId!=null && this.param_hySkillResourcesEntity.specialtyId!=""){
          let params = {
            facultyId:this.param_hySkillResourcesEntity.facultyId,
            specialtyId:this.param_hySkillResourcesEntity.specialtyId
          }
          const  { data } =  await API.pcCourseSource.listHySchoolClass(params)
          console.log("listHySchoolClass data=",data);
          if (data && data.code === 0) {
            this.classData = data.list;
          }else{
            this.classData = []
          }
        }

        console.log("==this.classData",this.classData)

        this.permissionOpenClassShowFlag=true;
      }else{
        this.permissionOpenClassShowFlag=false;
      }
    },
    handleVideoSuccess (res, file) {
      if (res.code === 0) {
        this.param_hySkillResourcesEntity.courseVideoUrl = res.data.fileSrc;
        // this.ruleForm.pathVideo2Name = res.data.fileName;
        console.log(res)
        this.$forceUpdate();
        this.$message.success('上传视频成功')
      }
    },
    beforeVideoUpload (file,fileList) {
      console.log(file)
      const isVideo = ['video/mp4'].includes(file.type);
      const isLt = file.size / 1024 / 1024 < 200;
      if (!isVideo) {
        this.$message.error('上传视频只能是mp4格式!');
        return false;
      }
      if (!isLt) {
        this.$message.error('上传视频大小不能超过 200MB!');
        return false;
      }
      this.uploadFileData={"fileFrom":this.sourceMenuIndexFun()};
      //return isVideo && isLt;
      return true;
    },

    handleImgSuccess (res, file) {
      if (res.code === 0) {
        this.param_hySkillResourcesEntity.coverImg = res.data.fileSrc;
        this.$forceUpdate();
        // this.$message.success('上传图片成功',500)
        this.$message.success({message:'上传图片成功',duration:800});
      }
    },
    beforeImgUpload (file,fileList) {
      console.log(file)
      const isImg = ['image/jpg','image/gif','image/ico','image/jpeg','image/png'].includes(file.type);
      console.log("isImg",isImg)
      const isLt = file.size / 1024 / 1024 < 20;
      if (!isImg) {
        this.$message.error('上传图片格式错误!');
        return false;
      }
      if (!isLt) {
        this.$message.error('上传图片大小不能超过20MB!');
        return false;
      }
      this.uploadFileData={"fileFrom":this.sourceMenuIndexFun()};
      return true;
    },



    handleSourceMenuSelect(key, keyPath) {
      console.log(key, keyPath);
      this.sourceType=parseInt(key)+1;
      this.sourceMenuIndex=key+"";
      this.querySourceName="";
      this.currentPage_pie = 1
      this.listPersonCenterHySkillResources();
    },
    // 每页数
    sizeChangeHandle (val) {
      this.pageSize = val
      this.currentPage_pie = 1
      this.listPersonCenterHySkillResources();
    },
    // 当前页
    currentChangeHandle (val) {
      this.currentPage_pie = val
      this.listPersonCenterHySkillResources();
    },


    async facultyChange(){
      console.log("======",this.param_hySkillResourcesEntity.permissionOpen,this.param_hySkillResourcesEntity.specialtyId)
      if(this.param_hySkillResourcesEntity.permissionOpen*1==4
        && this.param_hySkillResourcesEntity.specialtyId!=null && this.param_hySkillResourcesEntity.specialtyId!=""
      ) {
        let params = {
          facultyId: this.param_hySkillResourcesEntity.facultyId,
          specialtyId: this.param_hySkillResourcesEntity.specialtyId
        }
        const {data} = await
        API.pcCourseSource.listHySchoolClass(params)
        console.log("======",data)
        if (data && data.code === 0) {
          this.classData = data.list;
        } else {
          this.classData = []
        }
      }
    },

    //资源管理-新增或修改
    async saveOrUpdateHySkillResources(){
      let objSE = this.param_hySkillResourcesEntity;

      if(objSE.name==null || objSE.name==""){
        this.$message.error('资源名称必填');
        return;
      }
      if(objSE.facultyId==null || objSE.facultyId==""){
        this.$message.error('院系必选');
        return;
      }
      if(objSE.specialtyId==null || objSE.specialtyId==""){
        this.$message.error('专业必选');
        return;
      }
      if(objSE.courseNature==null || objSE.courseNature==""){
        this.$message.error('课程性质必选');
        return;
      }
      if(objSE.courseHour==null || objSE.courseHour==""){
        this.$message.error('学时必填');
        return;
      }

      if(objSE.permissionTeamTeaRw==null || objSE.permissionTeamTeaRw==""){
        this.$message.error('团队老师读写权限必选');
        return;
      }
      if(objSE.permissionOpen==null || objSE.permissionOpen==""){
        this.$message.error('开放权限必选');
        return;
      }
        console.log("classChecked=",this.classChecked)
      if(objSE.permissionOpen==4 && this.classChecked.length==0){
        this.$message.error('开放权限[班级]必选');
        return;
      }

      if(objSE.coverImg==null || objSE.coverImg==""){
        this.$message.error('封面必传');
        return;
      }


      this.param_hySkillResourcesEntity.type=this.sourceType

      let params = {};
      if(objSE.permissionOpen!=4){
        params = {
          hySkillResourcesEntity:this.param_hySkillResourcesEntity
        }
      }else{
        let relationEntityList=[];
        if(objSE.permissionOpen==4){
          for(let i=0;i<this.classChecked.length;i++){
            let tmpCls = {classId:this.classChecked[i]}
            relationEntityList.push(tmpCls)
          }
        }
        params = {
          hySkillResourcesEntity:this.param_hySkillResourcesEntity,
          relationEntityList:relationEntityList
        }
      }

      const  { data } =  await API.pcCourseSource.saveOrUpdateHySkillResources(params)
      // console.log("listHyschoolfaculty data=",data);
      if (data && data.code === 0) {
        this.$message.success('操作成功');
        this.currentPage_pie = 1
        this.addOrUpdateSourceVisible=false;
        this.listPersonCenterHySkillResources();
        //this.facultyList = data.list;
      }else{
        this.$message.error('操作失败'+data.msg);
        //this.facultyList = []
      }
    },

    //发布，取消发布
    async  unPublishPersonCenterHySkillResources(id,statusRelease){
      //发布状态;1、未发布；2已发布。
      let params = {
        id:id
      }
      const  { data } =  await API.pcCourseSource.unPublishPersonCenterHySkillResources(params)
      if (data && data.code === 0) {
        if(statusRelease==1){
          this.$message.success('发布成功');
        }else{
          this.$message.success('取消发布成功');
        }
        this.listPersonCenterHySkillResources();
      }else{
        this.$message.error('操作失败'+data.msg);
      }
    },

    //资源删除
    async  deletePersonCenterHySkillResources(id){
      let params =[id]
      const  { data } =  await API.pcCourseSource.deletePersonCenterHySkillResources(params)
      if (data && data.code === 0) {
          this.$message.success('删除成功');
          this.listPersonCenterHySkillResources();
      }else{
        this.$message.error('删除失败'+data.msg);
      }
    },

    addTeacherOpen(id,name){

      let params = {
        // realName:realName,
        skillResourcesId:id
      }
      // const  { data } =   API.pcCourseSource.listSchoolUserTeacher(params)
      // if (data && data.code === 0) {
      //   console.log("--------data ",data.list)
      //   this.teacherList = data.list;
      // }else{
      //   // this.$message.error('操作失败'+data.msg);
      // }

      //此处不用同步，否则打开页面慢。
      this.teaLoading=true;
      API.pcCourseSource.listSchoolUserTeacher(params).then(({data}) =>{
        // console.log(data)
        if(data.code==0){
          this.teacherList = data.list;
          this.teaLoading=false;

          this.teacherListCopy=[];
          for(let i = 0; i <this.teacherList.length; i++) {
            this.teacherListCopy.push(this.teacherList[i])
          }
        }
        else{
          this.$message.error(data.msg)
        }
      })


      this.addOrUpdateTeacherVisible=true;
      this.sourceIdForTeacher=id;
      this.sourceNameForTeacher=name;

    },
    addOrUpdateTeacherCancel(){
      this.addOrUpdateTeacherVisible=false;
    },
    //教师模糊查询
    async  listSchoolUserTeacher(skillResourcesId,realName){
      let params = {
        realName:realName,
        skillResourcesId:skillResourcesId
      }
      const  { data } =  await API.pcCourseSource.listSchoolUserTeacher(params)
      if (data && data.code === 0) {
        // if(statusRelease==1){
        //   this.$message.success('发布成功');
        // }else{
        //   this.$message.success('取消发布成功');
        // }
        // this.listPersonCenterHySkillResources();
      }else{
        this.$message.error('操作失败'+data.msg);
      }
    },
    teacherChangeFun(){
      console.log("====teacherChecked=",this.teacherChecked)
      //遍历，并标记已选中。调接口存储。
      if(this.teacherChecked!=null && this.teacherChecked!=""){
        for(let i=0;i<this.teacherList.length;i++){
          console.log(this.teacherList[i].teaUserId*1==this.teacherChecked*1,this.teacherList[i].teaUserId*1,this.teacherChecked*1)
          if(this.teacherList[i].teaUserId*1==this.teacherChecked*1){
            this.teacherList[i].flagAddRes = 1;//0：未加入的用户，1：已加入用户;
            this.teacherChecked=null;
            break;
          }
        }
      }

      this.teacherList=[];
      for(let i = 0; i <this.teacherListCopy.length; i++) {
        this.teacherList.push(this.teacherListCopy[i])
      }

    },
    teacherDelFun(teaId){
      console.log("====teacherChecked=",this.teacherChecked)
      //遍历，并标记已选中。调接口存储。
      for(let i=0;i<this.teacherList.length;i++){
        console.log(this.teacherList[i].teaUserId*1==this.teacherChecked*1,this.teacherList[i].teaUserId*1,this.teacherChecked*1)
        if(this.teacherList[i].teaUserId*1==teaId*1){
          this.teacherList[i].flagAddRes = 0;//0：未加入的用户，1：已加入用户;
          break;
        }
      }
    },
    saveOrUpdatePersonCenterHySkillResources(){

      let resourcesTeaTeamEntityList=[];
      for(let i=0;i<this.teacherList.length;i++){
        console.log(this.teacherList[i].teaUserId*1==this.teacherChecked*1,this.teacherList[i].teaUserId*1,this.teacherChecked*1)
        if(this.teacherList[i].flagAddRes*1==1){//0：未加入的用户，1：已加入用户;
          let tmpObj = {teaUserId:this.teacherList[i].teaUserId}
          resourcesTeaTeamEntityList.push(tmpObj)
        }
      }

      let params = {
        skillResourcesId:this.sourceIdForTeacher,
        resourcesTeaTeamEntityList:resourcesTeaTeamEntityList
      }

      API.pcCourseSource.saveOrUpdatePersonCenterHySkillResources(params).then(({data}) =>{
        // console.log(data)
        if(data.code==0){
          this.$message.success("操作成功")
          this.addOrUpdateTeacherVisible=false;
        }
        else{
          this.$message.error(data.msg)
        }
      })
    },
    teacherFilter(val){
      console.log("val====",val);
      if(val){
          this.teacherList = this.teacherListCopy.filter((item) => {
          if (!!~item.realName.indexOf(val) || !!~item.realName.toUpperCase().indexOf(val.toUpperCase())
          || !!~item.userNum.indexOf(val) || !!~item.userNum.toUpperCase().indexOf(val.toUpperCase())) {
            if (item.flagAddRes == 0) {//0：未加入的用户，1：已加入用户;
              return true
            }
          }
        })
      }else { //val为空时，还原数组
        this.teacherList=[];
        for(let i = 0; i <this.teacherListCopy.length; i++) {
          this.teacherList.push(this.teacherListCopy[i])
        }
        // this.teacherList = this.teacherListCopy;
      }

      // console.log(this.teacherList , this.teacherListCopy)

    },

    junpToDirEdit(sourceId){
      const pcCourseDirFileExameEdit = this.$router.resolve({path: '/pcCourseDirFileExameEdit', query: {skillResourcesId: sourceId}});
      window.open(pcCourseDirFileExameEdit.href,'_blank');
    },


    // pagePervious(){
    //   this.$refs.pageGroup.prev()
    // },
    // pageNext(){
    //   this.$refs.pageGroup.next()
    // },

  },
}
</script>

<style>
  .tisi_pccs{
    min-width: 98px;
    width: 98px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
</style>

<style scoped>
  @import "../../assets/css/personalCenter/pcCourseSource.css";
.base_pcCourseSource{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  justify-content: center;
}


</style>
