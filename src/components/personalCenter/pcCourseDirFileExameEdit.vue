<template>
  <div class="base_pcCourseDirFileExameEdit" >
    <div class="main_pcCourseDirFileExameEdit" style="">
      <personal-center-nav :navList="navList"  >
      </personal-center-nav>

      <div class="main_dir" style="margin-top: 10px;padding-bottom: 30px;">

        <div class="main_dir2">
          <div class="main_dir_add">
            <el-button type="primary" @click="addDirOne" style=" width: 110px;">添加一级目录</el-button>
          </div>
        </div>

        <div class="main_dir3" v-if="dirList.length>0">
          <div   v-for="(item1,index) in dirList">
            <!--  一级目录列表 -->
            <div class="main_dir_line" @mouseover="msover_dir(item1.id)" @mouseout="msout_dir(item1.id)">
              <div class="main_dir_line_icon">
                <div class="main_dir_line_icon1"></div>
                <div class="main_dir_line_split1"></div>
              </div>

              <div class="main_dir_line_right" :class="model_bgcolor_dirId==item1.id?model_bgcolor_class:''" v-show="model_rename_dir_cId=='' || model_rename_dir_cId!=item1.id">
                <div style="margin-left: 15px;">{{item1.nodeNum}}.{{item1.name}}</div>
                <div class="main_dir_line_right_operator" :class="model_bgcolor_dirId==item1.id?model_bgcolor_op_class:''" v-popover::ref="'popover_'+item1.id">操作
                  <el-popover
                    :ref="'popover_'+item1.id"
                    placement="bottom"
                    popper-class="course_dirfileexame_pccs"
                    trigger="hover"
                  >
                    <div style="width: 98px;min-height: 180px;border: 0px solid red;" @mouseover="msover_dir(item1.id)" @mouseout="msout_dir(item1.id)">
                      <div class="dirFileExame_pccs_col" @click="renameDirName_open(item1.id,item1.name)">重命名</div>
                      <div class="dirFileExame_pccs_col" @click="deleteSkillCourseDir(item1.id)">删除</div>
                      <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(item1.id,1)">上移</div>
                      <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(item1.id,2)">下移</div>
                      <div class="dirFileExame_pccs_col" @click="addSubDir_open(item1.id)">添加子目录</div>
                      <div class="dirFileExame_pccs_col" v-if="item1.typeHasSubDir==1">添加试卷</div>
                      <div class="dirFileExame_pccs_col" v-if="item1.typeHasSubDir==1" @click="addFileAndLinkOpen(item1.id)">添加附件</div>
                    </div>
                  </el-popover>
                </div>
              </div>
              <!--重命名一级目录 s-->
              <div class="main_dir_line_right main_dir_line_right_add1dir" v-show="model_rename_dir_cId==item1.id " style="margin-left: 20px;">
                <div style="" class="main_dir_add1dir_input">
                  <el-input  v-model="model_rename_dirName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
                </div>
                <div class="main_dir_line_right_add1dir_operator"  >
                  <div class="main_dir_line_right_add1dir_operator_cal" @click="renameDirName_cal">取消</div>
                  <div class="main_dir_line_right_add1dir_operator_add" @click="renameDirName_confirm">确定</div>
                </div>
              </div>
              <!--重命名一级目录 e-->

            </div>

            <!--  二级目录列表 -->
            <div    v-for="(item2,index) in item1.childList">
              <div class="main_dir_line"  @mouseover="msover_dir(item2.id)" @mouseout="msout_dir(item2.id)">
                <div class="main_dir_line_icon">
                  <div class="main_dir_line_icon1" style="visibility:hidden;"></div>
                  <div class="main_dir_line_split1"></div>
                </div>
                <div class="main_dir_line_right" :class="model_bgcolor_dirId==item2.id?model_bgcolor_class:''" v-show="model_rename_dir_cId=='' || model_rename_dir_cId!=item2.id">
                  <div style="margin-left: 15px;">{{item2.nodeNum}}.{{item2.name}}</div>
                  <div class="main_dir_line_right_operator" :class="model_bgcolor_dirId==item2.id?model_bgcolor_op_class:''"  v-popover::ref="'popover_'+item2.id">操作
                    <el-popover
                      :ref="'popover_'+item2.id"
                      placement="bottom"
                      popper-class="course_dirfileexame_pccs"
                      trigger="hover"
                    >
                      <div style="width: 98px;min-height: 180px;border: 0px solid red;" @mouseover="msover_dir(item2.id)" @mouseout="msout_dir(item2.id)">
                        <div class="dirFileExame_pccs_col" @click="renameDirName_open(item2.id,item2.name)">重命名</div>
                        <div class="dirFileExame_pccs_col" @click="deleteSkillCourseDir(item2.id)">删除</div>
                        <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(item2.id,1)">上移</div>
                        <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(item2.id,2)">下移</div>
                        <div class="dirFileExame_pccs_col"  @click="addSubDir_open(item2.id)">添加子目录</div>
                        <div class="dirFileExame_pccs_col" v-if="item2.typeHasSubDir==1">添加试卷</div>
                        <div class="dirFileExame_pccs_col" v-if="item2.typeHasSubDir==1" @click="addFileAndLinkOpen(item2.id)" >添加附件</div>
                      </div>
                    </el-popover>
                  </div>
                </div>
                <!--重命名二级目录 s-->
                <div class="main_dir_line_right main_dir_line_right_add1dir" v-show="model_rename_dir_cId==item2.id " style="margin-left: 20px;">
                  <div style="" class="main_dir_add1dir_input">
                    <el-input  v-model="model_rename_dirName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
                  </div>
                  <div class="main_dir_line_right_add1dir_operator"  >
                    <div class="main_dir_line_right_add1dir_operator_cal" @click="renameDirName_cal">取消</div>
                    <div class="main_dir_line_right_add1dir_operator_add" @click="renameDirName_confirm">确定</div>
                  </div>
                </div>
                <!--重命名二级目录 e-->

              </div>

              <!--二级目录下附件链接列表-->
              <div    v-for="(f2,index) in item2.fileList" >
                <div class="main_dir_line" @mouseover="msover_dir('file_'+f2.id)" @mouseout="msout_dir('file_'+f2.id)">
                  <div class="main_dir_line_icon">
                    <div class="main_dir_line_icon1" style="visibility:hidden;"></div>
                    <div class="main_dir_line_split1"></div>
                  </div>
                  <div class="main_dir_line_right" :class="model_bgcolor_dirId==('file_'+f2.id)?model_bgcolor_class:''" v-show="model_rename_file_id=='' || model_rename_file_id!=f2.id">
                    <div style="display: flex;align-items: center;">
                      <img :src="getFileLinkIconImgUrl(f2)" style="width: 18px;height: 23px;margin-left:37px;">
                      <div v-if="f2.fileType==1" style="margin-left: 24px;">{{f2.comAccessoryEntity.fileName}}</div>
                      <div v-if="f2.fileType==2" style="margin-left: 24px;">{{f2.urlName}}</div>
                    </div>
                    <div class="main_dir_line_right_operator" :class="model_bgcolor_dirId==('file_'+f2.id)?model_bgcolor_op_class:''"  v-popover::ref="'popover_filelink_'+f2.id">操作
                      <el-popover
                        :ref="'popover_filelink_'+f2.id"
                        placement="bottom"
                        popper-class="course_dirfileexame_pccs"
                        trigger="hover"
                      >
                        <div style="width: 98px;min-height: 100px;border: 0px solid red;" @mouseover="msover_dir(('file_'+f2.id))" @mouseout="msout_dir(('file_'+f2.id))">
                          <div class="dirFileExame_pccs_col" @click="renameFileName_open(f2.id,f2)">重命名</div>
                          <div class="dirFileExame_pccs_col" @click="deleteSkillCourseFile(f2.id)">删除</div>
                          <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(f2.id,1)">上移</div>
                          <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(f2.id,2)">下移</div>
                        </div>
                      </el-popover>
                    </div>

                  </div>

                  <!--重命名二级附件 s-->
                  <div class="main_dir_line_right main_dir_line_right_add1dir" v-show="model_rename_file_id==f2.id " style="margin-left: 20px;">
                    <div style="" class="main_dir_add1dir_input">
                      <el-input  v-model="model_rename_fileName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
                    </div>
                    <div class="main_dir_line_right_add1dir_operator"  >
                      <div class="main_dir_line_right_add1dir_operator_cal" @click="renameFileName_cal">取消</div>
                      <div class="main_dir_line_right_add1dir_operator_add" @click="renameFileName_confirm">确定</div>
                    </div>
                  </div>
                  <!--重命名二级附件 e-->

                </div>
              </div>

              <!--  三级目录列表 -->
              <div    v-for="(item3,index) in item2.childList">
                <div class="main_dir_line" @mouseover="msover_dir(item3.id)" @mouseout="msout_dir(item3.id)">
                  <div class="main_dir_line_icon">
                    <div class="main_dir_line_icon1" style="visibility:hidden;"></div>
                    <div class="main_dir_line_split1"></div>
                  </div>
                  <div class="main_dir_line_right" :class="model_bgcolor_dirId==item3.id?model_bgcolor_class:''" v-show="model_rename_dir_cId=='' || model_rename_dir_cId!=item3.id">
                    <div style="margin-left: 15px;">{{item3.nodeNum}}.{{item3.name}}</div>
                    <div class="main_dir_line_right_operator" :class="model_bgcolor_dirId==item3.id?model_bgcolor_op_class:''" v-popover::ref="'popover_'+item3.id">操作
                      <el-popover
                        :ref="'popover_'+item3.id"
                        placement="bottom"
                        popper-class="course_dirfileexame_pccs"
                        trigger="hover"
                      >
                        <div style="width: 98px;min-height: 180px;border: 0px solid red;" @mouseover="msover_dir(item3.id)" @mouseout="msout_dir(item3.id)">
                          <div class="dirFileExame_pccs_col" @click="renameDirName_open(item3.id,item3.name)">重命名</div>
                          <div class="dirFileExame_pccs_col" @click="deleteSkillCourseDir(item3.id)">删除</div>
                          <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(item3.id,1)">上移</div>
                          <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(item3.id,2)">下移</div>
                          <!--<div class="dirFileExame_pccs_col">添加子目录</div>-->
                          <div class="dirFileExame_pccs_col" >添加试卷</div>
                          <div class="dirFileExame_pccs_col" @click="addFileAndLinkOpen(item3.id)" >添加附件</div>
                        </div>
                      </el-popover>
                    </div>
                  </div>
                  <!--重命名二级目录 s-->
                  <div class="main_dir_line_right main_dir_line_right_add1dir" v-show="model_rename_dir_cId==item3.id " style="margin-left: 20px;">
                    <div style="" class="main_dir_add1dir_input">
                      <el-input  v-model="model_rename_dirName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
                    </div>
                    <div class="main_dir_line_right_add1dir_operator"  >
                      <div class="main_dir_line_right_add1dir_operator_cal" @click="renameDirName_cal">取消</div>
                      <div class="main_dir_line_right_add1dir_operator_add" @click="renameDirName_confirm">确定</div>
                    </div>
                  </div>
                  <!--重命名二级目录 e-->

                </div>

                <!--三级目录下附件链接列表-->
                <div    v-for="(f3,index) in item3.fileList" >
                  <div class="main_dir_line" @mouseover="msover_dir('file_'+f3.id)" @mouseout="msout_dir('file_'+f3.id)">
                    <div class="main_dir_line_icon">
                      <div class="main_dir_line_icon1" style="visibility:hidden;"></div>
                      <div class="main_dir_line_split1"></div>
                    </div>
                    <div class="main_dir_line_right" :class="model_bgcolor_dirId==('file_'+f3.id)?model_bgcolor_class:''"  v-show="model_rename_file_id=='' || model_rename_file_id!=f3.id" >
                      <div style="display: flex;align-items: center;">
                        <img :src="getFileLinkIconImgUrl(f3)" style="width: 18px;height: 23px;margin-left:37px;">
                        <div v-if="f3.fileType==1" style="margin-left: 24px;">{{f3.comAccessoryEntity.fileName}}</div>
                        <div v-if="f3.fileType==2" style="margin-left: 24px;">{{f3.urlName}}</div>
                      </div>
                      <div class="main_dir_line_right_operator" :class="model_bgcolor_dirId==('file_'+f3.id)?model_bgcolor_op_class:''"  v-popover::ref="'popover_filelink_'+f3.id">操作
                        <el-popover
                          :ref="'popover_filelink_'+f3.id"
                          placement="bottom"
                          popper-class="course_dirfileexame_pccs"
                          trigger="hover"
                        >
                          <div style="width: 98px;min-height: 100px;border: 0px solid red;" @mouseover="msover_dir(('file_'+f3.id))" @mouseout="msout_dir(('file_'+f3.id))">
                            <div class="dirFileExame_pccs_col" @click="renameFileName_open(f3.id,f3)">重命名</div>
                            <div class="dirFileExame_pccs_col" @click="deleteSkillCourseFile(f3.id)">删除</div>
                            <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(f3.id,1)">上移</div>
                            <div class="dirFileExame_pccs_col" @click="upOrDownSkillCourseDir(f3.id,2)">下移</div>
                          </div>
                        </el-popover>
                      </div>

                    </div>

                    <!--重命名三级附件 s-->
                    <div class="main_dir_line_right main_dir_line_right_add1dir" v-show="model_rename_file_id==f3.id " style="margin-left: 20px;">
                      <div style="" class="main_dir_add1dir_input">
                        <el-input  v-model="model_rename_fileName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
                      </div>
                      <div class="main_dir_line_right_add1dir_operator"  >
                        <div class="main_dir_line_right_add1dir_operator_cal" @click="renameFileName_cal">取消</div>
                        <div class="main_dir_line_right_add1dir_operator_add" @click="renameFileName_confirm">确定</div>
                      </div>
                    </div>
                    <!--重命名三级附件 e-->

                  </div>
                </div>

              </div>

              <!--  【新增修改目录-输入框】【三级目录】开始 -->
              <div class="main_dir_line2" v-if="model_sub_dir_pId == item2.id">
                <div class="main_dir_line_icon">
                  <div class="main_dir_line_icon1" style="visibility: hidden;"></div>
                  <div class="main_dir_line_split1"></div>
                </div>
                <div class="main_dir_line_right_add1dir" style="margin-left: 20px;">
                  <div style="" class="main_dir_add1dir_input">
                    <el-input  v-model="model_sub_dirName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
                  </div>
                  <div class="main_dir_line_right_add1dir_operator"  >
                    <div class="main_dir_line_right_add1dir_operator_cal" @click="addDirSub_cal">取消</div>
                    <div class="main_dir_line_right_add1dir_operator_add" @click="addDirSub_confirm">确定</div>
                  </div>
                </div>
              </div>
              <!--  【新增修改目录-输入框】【三级目录】结束 -->
            </div>

            <!--一级目录下附件链接列表-->
            <div    v-for="(f,index) in item1.fileList" >
              <div class="main_dir_line" @mouseover="msover_dir('file_'+f.id)" @mouseout="msout_dir('file_'+f.id)">
                <div class="main_dir_line_icon">
                  <div class="main_dir_line_icon1" style="visibility:hidden;"></div>
                  <div class="main_dir_line_split1"></div>
                </div>
                <div class="main_dir_line_right" :class="model_bgcolor_dirId==('file_'+f.id)?model_bgcolor_class:''"  v-show="model_rename_file_id=='' || model_rename_file_id!=f.id">
                  <div style="display: flex;align-items: center;">
                      <img :src="getFileLinkIconImgUrl(f)" style="width: 18px;height: 23px;margin-left:37px;">
                      <div v-if="f.fileType==1" style="margin-left: 24px;">{{f.comAccessoryEntity.fileName}}</div>
                      <div v-if="f.fileType==2" style="margin-left: 24px;">{{f.urlName}}</div>
                  </div>
                  <div class="main_dir_line_right_operator" :class="model_bgcolor_dirId==('file_'+f.id)?model_bgcolor_op_class:''"  v-popover::ref="'popover_filelink_'+f.id">操作
                    <el-popover
                      :ref="'popover_filelink_'+f.id"
                      placement="bottom"
                      popper-class="course_dirfileexame_pccs"
                      trigger="hover"
                    >
                      <div style="width: 98px;min-height: 100px;border: 0px solid red;" @mouseover="msover_dir(('file_'+f.id))" @mouseout="msout_dir(('file_'+f.id))">
                        <div class="dirFileExame_pccs_col" @click="renameFileName_open(f.id,f)">重命名</div>
                        <div class="dirFileExame_pccs_col" @click="deleteSkillCourseFile(f.id)">删除</div>
                        <div class="dirFileExame_pccs_col" @click="upOrDownFileOrLink(f.id,1)">上移</div>
                        <div class="dirFileExame_pccs_col" @click="upOrDownFileOrLink(f.id,2)">下移</div>
                      </div>
                    </el-popover>
                  </div>

                </div>

                <!--重命名一级附件 s-->
                <div class="main_dir_line_right main_dir_line_right_add1dir" v-show="model_rename_file_id==f.id " style="margin-left: 20px;">
                  <div style="" class="main_dir_add1dir_input">
                    <el-input  v-model="model_rename_fileName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
                  </div>
                  <div class="main_dir_line_right_add1dir_operator"  >
                    <div class="main_dir_line_right_add1dir_operator_cal" @click="renameFileName_cal">取消</div>
                    <div class="main_dir_line_right_add1dir_operator_add" @click="renameFileName_confirm">确定</div>
                  </div>
                </div>
                <!--重命名一级附件 e-->

              </div>
            </div>

            <!--  【新增修改目录-输入框】【二级目录】开始 -->
            <div class="main_dir_line2" v-if="model_sub_dir_pId == item1.id">
              <div class="main_dir_line_icon">
                <div class="main_dir_line_icon1" style="visibility: hidden;"></div>
                <div class="main_dir_line_split1"></div>
              </div>
              <div class="main_dir_line_right_add1dir" style="margin-left: 20px;">
                <div style="" class="main_dir_add1dir_input">
                  <el-input  v-model="model_sub_dirName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
                </div>
                <div class="main_dir_line_right_add1dir_operator"  >
                  <div class="main_dir_line_right_add1dir_operator_cal" @click="addDirSub_cal">取消</div>
                  <div class="main_dir_line_right_add1dir_operator_add" @click="addDirSub_confirm">确定</div>
                </div>
              </div>
            </div>
            <!--  【新增修改目录-输入框】【二级目录】结束 -->


          </div>
        </div>

        <div class="main_dir3" v-if="dirList.length==0" style="display: flex;align-items: center;min-height: 600px;">
          <no-data  :image-path="$imghost + '/spesource/no_data.png'"/>
        </div>


        <!--  【新增目录-输入框】开始 -->
        <div class="main_dir_line2" v-if="model_first_dirName_show_flag">
          <div class="main_dir_line_right_add1dir">
            <div style="" class="main_dir_add1dir_input">
              <el-input  v-model="model_first_dirName"   v-fo  placeholder="请输入目录名称" style="width: 100%;margin-left: -6px;" clearable></el-input>
            </div>
            <div class="main_dir_line_right_add1dir_operator"  >
              <div class="main_dir_line_right_add1dir_operator_cal" @click="addDirOne_cal">取消</div>
              <div class="main_dir_line_right_add1dir_operator_add" @click="addDirOne_confirm">确定</div>
            </div>
          </div>
        </div>
        <!--  【新增目录-输入框】结束 -->


      </div>


      <!--教师绑定-->
      <el-dialog title="添加附件" align="center" width="580px"  style="border-radius: 4px;" :visible.sync="addFileAndLinkVisible" top="31vh" :lock-scroll="false">
        <div style="width: 580px;border: 0px solid red;justify-content: center;padding-bottom: 20px;min-height:140px;"  >
          <div >
            <div class="afal_main" style="width: 500px;min-height: 140px;">
              <div class="afal_line1" style="margin-left: 20px;margin-top: 28px;">
                <div class="afal_title1"> <span>*</span>文件类型：</div>
                <div class="afal_content1">
                  <el-checkbox-group v-model="accessoryEntity.fileType">
                    <el-checkbox  false-label='null' true-label="1" name="state">附件</el-checkbox>
                    <el-checkbox  false-label='null' true-label="2" name="state">链接</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
              <div class="afal_line1" v-if="accessoryEntity.fileType==2" style="margin-left: 20px;margin-top: 24px;">
                <div class="afal_title1"><span>*</span>链接名称：</div>
                <div class="afal_content1 aus_content3">
                  <el-input v-model="accessoryEntity.urlName" placeholder="请输入链接名称" style="width: 346px;" clearable></el-input>
                </div>
              </div>
              <div class="afal_line1" v-if="accessoryEntity.fileType==2" style="margin-left: 20px;margin-top: 24px;">
                <div class="afal_title1"><span>*</span>URL：</div>
                <div class="afal_content1 aus_content3">
                  <el-input v-model="accessoryEntity.urlJump" placeholder="请输入" style="width: 346px;" clearable></el-input>
                </div>
              </div>

              <div class="afal_line1" v-if="accessoryEntity.fileType==1" style="margin-left: 20px;margin-top: 28px;">
                <div class="afal_title1" style="width: 120px;"> <span>*</span>是否支持下载：</div>
                <div class="afal_content1">
                  <el-checkbox-group v-model="accessoryEntity.fileDownFlag">
                    <el-checkbox  false-label='null' true-label="1" name="state">是</el-checkbox>
                    <el-checkbox  false-label='null' true-label="2" name="state">否</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>

              <div class="afal_line1" v-if="accessoryEntity.fileType==1" style="margin-top: 28px;">
                <el-upload
                  style="width: 162px;float: left;margin-left: 20px;"
                  class="avatar-uploader"
                  :action="uploadFileUrl"
                  name="file"
                  :data="uploadFileData"
                  :show-file-list="false"
                  :on-success="handleVideoSuccess"
                  :before-upload="beforeVideoUpload"
                  :headers="header"
                >
                  <!--<div v-if="param_hySkillResourcesEntity.courseVideoUrl==''" class="aus_upfile_bg" :style="{backgroundImage:'url(' + imghost + '/personalCenter/pcCourseSource/pcCourseSource_uploadFile_bg.png' + ')' }">
                    <div style="width: 100%;display: flex;justify-content: center;">
                      <div class="aus_upfile_jia" :style="{backgroundImage:'url(' + imghost + '/personalCenter/pcCourseSource/pcCourseSource_uploadFile_jia.png' + ')' }"></div>
                    </div>
                    <div class="aus_upfile_txt">添加视频</div>
                  </div>
                  <video v-if="param_hySkillResourcesEntity.courseVideoUrl!=''" class="aus_upfile_bg" style="object-fit:fill;"  :src="webUrl(param_hySkillResourcesEntity.courseVideoUrl)"  />-->
                  <div class="afal_line1_upfile_add">
                    <div style="color: #00BDA5;font-size: 20px;"><i class="el-icon-circle-plus"></i></div>
                    <div style="color: #252525;margin-left: 12px;">添加附件</div>
                  </div>
                </el-upload>

                <div class="afal_line1_upfile_txt">单个附件大小不超过600MB，附件命名时建议增加附件类型【电子书、课件等等】</div>
              </div>

              <div class="afal_line1" v-if="accessoryEntity.fileType==1" style="margin-top: 28px;flex-direction: column;margin-left: 20px;">
                <div v-for="(item,index) in fileAddList" class="hasUploadFileLine">
                  <div class="hasUploadFileLine_sub" style="width: 400px;">
                  <div style="width: 350px;display: flex;justify-content: flex-start;text-align: left;">{{item.fileNameHasSuffix}}</div>
                  <div style="margin-left:50px;color:#CACACA;font-size: 20px;cursor: pointer;" @click="delCacheFile(index)"><i class="el-icon-error"></i></div>
                  </div>
                </div>

              </div>

              <div class="afal_line1" style="margin-top: 28px;">
                <div class="afal_confirm_btn">
                  <el-button  class="afal_confirm_btn_cancel" style="height: 28px;" @click="addFileAndLinkCancel">取消</el-button>
                  <el-button type="primary" class="afal_confirm_btn_ok" style="height: 28px;margin-left: 18px;" @click="addFileAndLinkComfirm()">确定</el-button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </el-dialog>

      <!--删除目录确认-->
      <el-dialog title="删除目录" align="center" width="480px"  style="border-radius: 4px;" :visible.sync="deleteDirConfirmVisible" top="41vh" :lock-scroll="false">
        <div style="width: 480px;border: 0px solid red;justify-content: center;padding-bottom: 20px;min-height:110px;"  >
          <div >
            <div class="afal_main" style="width: 340px;min-height: 110px;">
              <div class="afal_line1" style="margin-top: 28px;width: 310px;">
                确定要删除该目录，删除后该目录下的所有子目录及文件将被同步删除？
              </div>

              <div class="afal_line1" style="margin-top: 28px;">
                <div class="afal_confirm_btn">
                  <el-button  class="afal_confirm_btn_cancel" style="height: 28px;" @click="deleteDirConfirmCancel">取消</el-button>
                  <el-button type="primary" class="afal_confirm_btn_ok" style="height: 28px;margin-left: 18px;" @click="deleteDirConfirm()">确定</el-button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </el-dialog>

      <!--删除附件确认-->
      <el-dialog title="删除附件" align="center" width="480px"  style="border-radius: 4px;" :visible.sync="deleteFileConfirmVisible" top="41vh" :lock-scroll="false">
        <div style="width: 480px;border: 0px solid red;justify-content: center;padding-bottom: 20px;min-height:80px;"  >
          <div >
            <div class="afal_main" style="width: 340px;min-height: 80px;">
              <div class="afal_line1" style="margin-top: 28px;width: 310px;display: flex;justify-content: center;">
                确定要删除该附件？
              </div>

              <div class="afal_line1" style="margin-top: 28px;">
                <div class="afal_confirm_btn">
                  <el-button  class="afal_confirm_btn_cancel" style="height: 28px;" @click="deleteFileConfirmCancel">取消</el-button>
                  <el-button type="primary" class="afal_confirm_btn_ok" style="height: 28px;margin-left: 18px;" @click="deleteFileConfirm()">确定</el-button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </el-dialog>


    </div>

  </div>
</template>

<script>
  import PersonalCenterNav from "../common/LocationNav/PersonalCenterNav";
  import Banner from "../common/Banner";
  import HeadNewPro from "../common/HeadNewPro";
  import API from '@/api'
  import NoData from "../common/NoData";

export default {
  name: 'pcCourseDirFileExameEdit',
  components: {
    Banner,HeadNewPro,PersonalCenterNav,NoData
  },
  data () {
    return {
      imghost:this.$imghost,
      navList:[
        {name:'老师工作台',url:'',flag:0},//0不变色，1变色
        {name:'专业资源管理',url:'',flag:0},//0不变色，1变色
        {name:'web前端开发',url:'',flag:0},//0不变色，1变色
        {name:'章节管理',url:'',flag:1},//0不变色，1变色
      ],

      skillResourcesId:156,
      dirList:[],//目录列表

      model_first_dirName:'',//新增一级目录
      model_first_dirName_show_flag:false,//新增一级目录，是否显示，true 显示，false不显示

      model_sub_dirName:'',//新增子目录
      model_sub_dir_pId:'',//新增子目录，父级目录id

      model_rename_dirName:'',//重命名目录名称
      model_rename_dir_cId:'',//重命名目录名称，目录id

      model_rename_file_id:'',//重命名文件名称
      model_rename_fileName:'',//重命名文件名称，目录id

      model_bgcolor_dirId:'',//当前悬浮的背景的目录id
      model_bgcolor_class:'',//目录背景样式
      model_bgcolor_op_class:'',//是否显示操作按钮样式

      //新增附件
      addFileAndLinkVisible:false,
      accessoryEntityCurDir:'',
      accessoryEntity: {
        skillResourcesId: this.skillResourcesId,
        sourceDirId: 0,
        fileType: '1',//关联文件类型：1附件、2链接
        fileDownFlag: '1',//附件是否可以下载（1可下载，2不可下载）。除了（excel 、 压缩包、txt），限制其他文件（在线预览的文件）的下载
        urlName: "",//链接名称1
        urlJump: ""//跳转链接88
      },
      comAccessoryEntityList: [],//附件列表
      uploadFileUrl: API.common.getUrl('/hyossfilelist/comUploadFile'),
      uploadFileData:{"fileFrom":12},
      header:{token:''},
      curSourceObj:{type:2},//资源类型 （2、专业资源库；3、仿真资源库；4、视频公开课）
      fileAddList:[
        {fileName:"9d4b72d2885ede18f30a82be4dd6c6f2",fileNameHasSuffix:"9d4b72d2885ede18f30a82be4dd6c6f2 （2、专业资源库；3、仿真资源库；4、视频公开课）可以下载（1可下载，2不可下载）。除了（excel 、 压缩包、txt），限制.jpg",fileNameNew:"9d4b72d2885ede18f30a82be4dd6c6f2_3e742513048348319d32ff65ce71958f.jpg",uuid:"3e742513048348319d32ff65ce71958f",fileSize:"0.13",fileSize3:0.132,fileType:6,fileSrc:"/video_tiyou2/school_2/accessory/skill_resources2/9d4b72d2885ede18f30a82be4dd6c6f2_3e742513048348319d32ff65ce71958f.jpg",fileSuffix:"jpg"},
        {fileName:"9d4b72d2885ede18f30a82be4dd6c6f2",fileNameHasSuffix:"9d4b72d2885ede18f30a82be4dd6c6f2.jpg",fileNameNew:"9d4b72d2885ede18f30a82be4dd6c6f2_3e742513048348319d32ff65ce71958f.jpg",uuid:"3e742513048348319d32ff65ce71958f",fileSize:"0.13",fileSize3:0.132,fileType:6,fileSrc:"/video_tiyou2/school_2/accessory/skill_resources2/9d4b72d2885ede18f30a82be4dd6c6f2_3e742513048348319d32ff65ce71958f.jpg",fileSuffix:"jpg"},
        {fileName:"9d4b72d2885ede18f30a82be4dd6c6f2",fileNameHasSuffix:"9d4b72d2885ede18f30a82be4dd6c6f2.jpg",fileNameNew:"9d4b72d2885ede18f30a82be4dd6c6f2_3e742513048348319d32ff65ce71958f.jpg",uuid:"3e742513048348319d32ff65ce71958f",fileSize:"0.13",fileSize3:0.132,fileType:6,fileSrc:"/video_tiyou2/school_2/accessory/skill_resources2/9d4b72d2885ede18f30a82be4dd6c6f2_3e742513048348319d32ff65ce71958f.jpg",fileSuffix:"jpg"},
        {fileName:"9d4b72d2885ede18f30a82be4dd6c6f2",fileNameHasSuffix:"9d4b72d2885ede18f30a82be4dd6c6f2.jpg",fileNameNew:"9d4b72d2885ede18f30a82be4dd6c6f2_3e742513048348319d32ff65ce71958f.jpg",uuid:"3e742513048348319d32ff65ce71958f",fileSize:"0.13",fileSize3:0.132,fileType:6,fileSrc:"/video_tiyou2/school_2/accessory/skill_resources2/9d4b72d2885ede18f30a82be4dd6c6f2_3e742513048348319d32ff65ce71958f.jpg",fileSuffix:"jpg"},
      ],//新增附件列表

      deleteDirConfirmVisible:false,//删除目录 确认框
      deleteDirConfirmId:'',

      deleteFileConfirmVisible:false,//删除附件确认框
      deleteFileConfirmId:'',


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
  activated() {
    // this.$store.state.footIsShow = false;

    // skillResourcesId
    //this.skillResourcesId = this.$route.query.skillResourcesId;

    let skillResourcesIdTmp = this.$route.query.skillResourcesId;
    if(typeof(skillResourcesIdTmp)!='undefined' && skillResourcesIdTmp!=null && skillResourcesIdTmp!=''){
      this.skillResourcesId =skillResourcesIdTmp;
    }

    this.listSkillCourseDirTree();
    this.listPersonCenterHySkillResourcesForOne();

  },
  created() {//created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。

  },
  mounted() { //mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
    this.header.token=this.$cookie.get('access_Token')
  },
  methods: {
    async listPersonCenterHySkillResourcesForOne(){
      let params = {
        id:this.skillResourcesId
      }
      const  { data } =  await API.pcCourseSource.listPersonCenterHySkillResources(params);
      if (data && data.code === 0 && data.page.list.length==1) {
        this.curSourceObj = data.page.list[0];

      }
    },

    async listSkillCourseDirTree(){
      let params = {
        skillResourcesId:this.skillResourcesId,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.listSkillCourseDirTree(params)
      console.log("data=",data);
      if (data && data.code === 0) {
        this.dirList = data.page;
        // for (let i = 0; i < this.tableData.length; i++) {
        //   this.tableData[i].coverImg = this.$apiImgHost + this.tableData[i].coverImg;
        // }
        // this.total_pie = data.page.totalCount
      }else{
        this.dirList = []
        // this.total_pie = 0
      }
    },
    addDirOne(){
      // this.$nextTick(() => {
      //   this.$refs.saveTagInput.focus1()
      // })
      // this.$nextTick(() => {
      //   this.$refs.saveTagInput[0].focus()
      // })

      this.model_first_dirName_show_flag=true;
    },
    addDirOne_cal(){
      this.model_first_dirName_show_flag=false;
      // model_first_dirName
    },
    async addDirOne_confirm(){
      if(this.model_first_dirName==null || this.model_first_dirName==""){
        this.$message.error('目录名称必填');
        return;
      }
      let params = {
        skillResourcesId:this.skillResourcesId,
        parentId: 0,
        name:this.model_first_dirName,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.saveOrUpdateSkillCourseDir(params)
      // console.log("data=",data);
      if (data && data.code === 0) {
        this.$message.success("添加成功");
        this.listSkillCourseDirTree();
        this.model_first_dirName_show_flag=false;
        this.model_first_dirName="";
      }else{
        this.$message.success("添加失败："+data.msg);
      }

    },

    addSubDir_open(id){
      this.model_sub_dir_pId=id;
    },
    addDirSub_cal(id){
      this.model_sub_dir_pId='';
    },
    async addDirSub_confirm(){
      if(this.model_sub_dirName==null || this.model_sub_dirName==""){
        this.$message.error('目录名称必填');
        return;
      }
      let params = {
        skillResourcesId:this.skillResourcesId,
        parentId:this.model_sub_dir_pId,
        name:this.model_sub_dirName,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.saveOrUpdateSkillCourseDir(params)
      // console.log("data=",data);
      if (data && data.code === 0) {
        this.$message.success("添加成功");
        this.listSkillCourseDirTree();
        this.model_sub_dir_pId='';
        this.model_sub_dirName="";
      }else{
        this.$message.success("添加失败："+data.msg);
      }
    },


    renameFileName_open(id,f){
      this.model_rename_file_id=id;
      if(f.fileType==2){//关联文件类型：1附件、2链接
        this.model_rename_fileName = f.urlName
      }else if(f.fileType==1){//关联文件类型：1附件、2链接
        this.model_rename_fileName = f.comAccessoryEntity.fileName
      }
      // this.model_rename_fileName = name;
    },
    renameFileName_cal(){
      this.model_rename_file_id='';
      this.model_rename_fileName = '';
    },
    async renameFileName_confirm(){
      if(this.model_rename_fileName==null || this.model_rename_fileName==""){
        this.$message.error('目录名称必填');
        return;
      }
      let params = {
        id:this.model_rename_file_id,
        name:this.model_rename_fileName,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.renameSkillCourseAccessory(params)
      // console.log("data=",data);
      if (data && data.code === 0) {
        this.$message.success("重命名成功");
        this.listSkillCourseDirTree();
        this.model_rename_file_id='';
        this.model_rename_fileName="";
      }else{
        this.$message.success("重命名失败："+data.msg);
      }
    },


    renameDirName_open(id,name){
      this.model_rename_dir_cId=id;
      this.model_rename_dirName = name;
    },
    renameDirName_cal(){
      this.model_rename_dir_cId='';
      this.model_rename_dirName = '';
    },
    async renameDirName_confirm(){
      if(this.model_rename_dirName==null || this.model_rename_dirName==""){
        this.$message.error('目录名称必填');
        return;
      }
      let params = {
        skillResourcesId:this.skillResourcesId,
        id:this.model_rename_dir_cId,
        name:this.model_rename_dirName,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.saveOrUpdateSkillCourseDir(params)
      // console.log("data=",data);
      if (data && data.code === 0) {
        this.$message.success("重命名成功");
        this.listSkillCourseDirTree();
        this.model_rename_dir_cId='';
        this.model_rename_dirName="";
      }else{
        this.$message.success("重命名失败："+data.msg);
      }
    },


    //课程目录-上移下移   upAndDownFlag:排序状态调整：1上移2下移
    async upOrDownSkillCourseDir(id,upAndDownFlag){
      let str= '';
      if(upAndDownFlag==1){
        str="上移";
      }else if(upAndDownFlag==1){
        str="下移";
      }
      let params = {
        id:id,
        upAndDownFlag:upAndDownFlag,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.upOrDownSkillCourseDir(params)
      // console.log("data=",data);
      if (data && data.code === 0) {
        this.$message.success(str+"成功");
        this.listSkillCourseDirTree();
      }else{
        this.$message.success(str+"失败："+data.msg);
      }
    },


    deleteSkillCourseDir(id){
      this.deleteDirConfirmVisible=true;
      this.deleteDirConfirmId=id;
    },
    deleteDirConfirmCancel(id){
      this.deleteDirConfirmVisible=false;
      this.deleteDirConfirmId='';
    },
    //目录-删除（子级所有数据都删除）
    async deleteDirConfirm(){
      let params = {
        id:this.deleteDirConfirmId,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.deleteSkillCourseDir(params)
      // console.log("data=",data);
      if (data && data.code === 0) {
        this.$message.success("删除成功");
        this.listSkillCourseDirTree();
        this.deleteDirConfirmCancel();
      }else{
        this.$message.success("删除失败："+data.msg);
      }
    },



    deleteSkillCourseFile(id){
      this.deleteFileConfirmVisible=true;
      this.deleteFileConfirmId=id;
    },
    deleteFileConfirmCancel(id){
      this.deleteFileConfirmVisible=false;
      this.deleteFileConfirmId='';
    },
    //附件-删除
    async deleteFileConfirm(){
      let params = {
        id:this.deleteFileConfirmId,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.deleteSkillCourseAccessory(params)
      // console.log("data=",data);
      if (data && data.code === 0) {
        this.$message.success("删除成功");
        this.listSkillCourseDirTree();
        this.deleteFileConfirmCancel();
      }else{
        this.$message.success("删除失败："+data.msg);
      }
    },



    msover_dir(id){
      this.model_bgcolor_dirId=id;
      this.model_bgcolor_class="bgcls";
      this.model_bgcolor_op_class="main_dir_line_right_operator_show";
    },
    msout_dir(id){
      this.model_bgcolor_dirId='';
      this.model_bgcolor_class="";
      this.model_bgcolor_op_class="";
    },

    //	关联文件类型：1附件、2链接
    //0链接
    //1、视频（mp4|flv|avi|rm|rmvb|wmv）；2、word（doc、docx）；3、ppt（ppt、pptx）；4、excel（xls、xlsx）；5、pdf；6、图片（jpg|gif|ico|jpeg|png）；7、压缩包（rar|zip|7z）；8、txt；9、mp3；10、markdown文件；
    getFileLinkIconImgUrl(f){
      //console.log("fff",f)
      //f.fileType,f.comAccessoryEntity.fileType
      let type1=f.fileType;
      let type=0;
      if(type1==2){
        type=0;
      }else if(type1==1){
        let type2=f.comAccessoryEntity.fileType;
        type=type2;
      }else{
        type=-1;
      }
      if(type==0){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/0link.png';
      }else if(type==1){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/1video.png';
      }else if(type==2){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/2word.png';
      }else if(type==3){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/3ppt.png';
      }else if(type==4){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/4excel.png';
      }else if(type==5){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/5pdf.png';
      }else if(type==6){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/6pic.png';
      }else if(type==7){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/7rar.png';
      }else if(type==8){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/8txt.png';
      }else if(type==9){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/9mp3.png';
      }else if(type==10){
        return this.$imghost+'/personalCenter/pcCourseDirFileExameEdit/fileIcon/10mark.png';
      }else{
        return '';
      }
    },


    getUploadFileTypeFun(){
      if(this.curSourceObj.type===2){
        return 12;
      }else if(this.curSourceObj.type===3){
        return 13;
      }else if(this.curSourceObj.type===4){
        return 14;
      }
    },
    handleVideoSuccess (res, file) {
      if (res.code === 0) {
        // this.param_hySkillResourcesEntity.courseVideoUrl = res.data.fileSrc;
        // this.ruleForm.pathVideo2Name = res.data.fileName;
        console.log(res.data)
        this.fileAddList.push(res.data);
        this.$forceUpdate();
        this.$message.success('附件上传成功')
      }else{
        this.$message.error('附件上传失败：'+res.msg)
      }
    },
    beforeVideoUpload (file,fileList) {
      console.log(file)
      // const isVideo = ['video/mp4'].includes(file.type);
      const isLt = file.size / 1024 / 1024 < 600;
      // if (!isVideo) {
      //   this.$message.error('上传附件格式不支持!');
      //   return false;
      // }
      if (!isLt) {
        this.$message.error('上传视频大小不能超过 600MB!');
        return false;
      }
      this.uploadFileData={"fileFrom":this.getUploadFileTypeFun()};
      //return isVideo && isLt;
      return true;
    },
    addFileAndLinkOpen(dirid){
      this.addFileAndLinkVisible=true;
      this.fileAddList=[];

      // this.accessoryEntity= {
      //     skillResourcesId: this.skillResourcesId,
      //     // sourceDirId: 0,
      //     fileType: '1',//关联文件类型：1附件、2链接
      //     fileDownFlag: '1',//附件是否可以下载（1可下载，2不可下载）。除了（excel 、 压缩包、txt），限制其他文件（在线预览的文件）的下载
      //     urlName: "",//链接名称1
      //     urlJump: ""//跳转链接88
      // };
      this.accessoryEntity.skillResourcesId=this.skillResourcesId;
      this.accessoryEntity.urlName="";
      this.accessoryEntity.urlJump="";
      this.accessoryEntity.sourceDirId=dirid;
      this.accessoryEntityCurDir=dirid;
    },
    addFileAndLinkCancel(){
      this.addFileAndLinkVisible=false;
      this.accessoryEntityCurDir='';
    },
    delCacheFile(index){
      // console.log('-------',index);
      this.fileAddList.splice(index,1)
    },
    async addFileAndLinkComfirm(){
      let objSE = this.accessoryEntity;

      if(objSE.sourceDirId==null || objSE.sourceDirId=="" || objSE.sourceDirId==0 ){
        this.$message.error('目录id不能为空');
        return;
      }

      if(objSE.fileType==null || objSE.fileType==""){
        this.$message.error('文件类型必选');
        return;
      }

      if(objSE.fileType=="1"){
        if(objSE.fileDownFlag==null || objSE.fileDownFlag==""){
          this.$message.error('附件是否可以下载必选');
          return;
        }


        // console.log(this.fileAddList)
        if(this.fileAddList==null || this.fileAddList.length==0){
          this.$message.error('附件必传');
          return;
        }

      }else if(objSE.fileType=="2"){
        if(objSE.urlName==null || objSE.urlName==""){
          this.$message.error('链接名称必填');
          return;
        }
        if(objSE.urlJump==null || objSE.urlJump==""){
          this.$message.error('URL必填');
          return;
        }
      }

      let params = {
        accessoryEntity:this.accessoryEntity,
        comAccessoryEntityList:this.fileAddList,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.saveOrUpdateSkillCourseAccessory(params)
      console.log("data=",data);
      if (data && data.code === 0) {
        this.listSkillCourseDirTree();
        this.$message.success("操作成功");
        this.addFileAndLinkVisible=false;
      }else{
        this.$message.success("操作失败"+data.msg);
      }


    },

    //附件-上移下移
    async upOrDownFileOrLink(id,upAndDownFlag){
      let str= '';
      if(upAndDownFlag==1){
        str="上移";
      }else if(upAndDownFlag==1){
        str="下移";
      }
      let params = {
        id:id,
        upAndDownFlag:upAndDownFlag,
      }
      const  { data } =  await API.pcCourseDirFileExameEdit.sortUpAndDownSkillCourseAccessory(params)
      // console.log("data=",data);
      if (data && data.code === 0) {
        this.$message.success(str+"成功");
        this.listSkillCourseDirTree();
      }else{
        this.$message.success(str+"失败："+data.msg);
      }
    },


  },
}
</script>

<style>
/*  .tisi_pccs{
    min-width: 98px;
    width: 98px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }*/
</style>

<style>
  .course_dirfileexame_pccs{
    min-width: 98px;
    width: 98px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .dirFileExame_pccs_col{
    height: 38px;
    display: flex;
    padding-left: 17px;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    /*border: 1px solid red;*/
  }
  .dirFileExame_pccs_col:hover{
    background-color: #F8F8F8;
  }
</style>
<style scoped lang="scss">
  @import "../../assets/css/personalCenter/pcCourseDirFileExameEdit.scss";
/*.base_pcCourseSource{*/
  /*width: 100%;*/
  /*height: auto;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*font-size: 12px;*/
  /*justify-content: center;*/
/*}*/


</style>
