import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";
import requestParam2 from "../../requestParam2";

export function getlist () {
  return request({
    url: requestUrl('/sys/user/info'),
    method: 'get',
  })
}
export function gettea (params) {
  return request({
    url: requestUrl('/xqcourse/doGetTeacherOwnCourse'),
    method: 'post',
    data: requestParam(params)
  })
}
export function getclasslsit(params) {
  return request({
    url: requestUrl('/xqcertificateclass/list'),
    method:'post',
    data: requestParam(params)
  })
}
export function getpaperlsit() {
  return request({
    url: requestUrl('/xqpaper/doGetOwnPaper'),
    method:'get',
  })
}
export function getdepartlist() {
  return request({
    url: requestUrl('/xqfaculty/list'),
    method:'post',
  })
}
export function getspecialtylist(params) {
  return request({
    url: requestUrl('/xqspecialty/doGetSpecialties'),
    method:'post',
    data: requestParam(params)
  })
}
export function getsaveOrUpdate(params) {
  return request({
    url: requestUrl('/xqteacher/saveOrUpdate'),
    method:'post',
    data: requestParam(params)
  })
}
export function getstucourse() {
  return request({
    url: requestUrl('/xqcourse/doGetStudentOwnCourse'),
    method:'get',
  })
}
export function getstuclass(params) {
  return request({
    url:requestUrl('/xqstudentclass/list'),
    method:'post',
    data:requestParam(params)
  })
}
export function delstu(params) {
  return request({
    url:requestUrl('/xqstudentclass/deleteStudentFromClass'),
    method:'post',
    data:requestParam(params)
  })
}
export function getownscore(params) {
  return request({
    url:requestUrl('/xqscore/doGetOwnScore'),
    method:'post',
    data:requestParam(params)
  })
}
export function getuporsave_stu(params) {
  return request({
      url:requestUrl('/xqstudent/save'),
      method:'post',
      data:requestParam(params)
    })
}
export function delcourse(params) {
  return request({
    url:requestUrl('/xqcourse/delete'),
    method:'post',
    data:requestParam(params)
  })
}
export function delpaper(params) {
  return request({
    url:requestUrl('/xqpaper/delete'),
    method:'post',
    data:requestParam(params)
  })
}
export function getzhuanyelist() {
  return request({
    url: requestUrl('/xqspecialty/list'),
    method:'post',
  })
}
export function submitcourse(params) {
  return request({
    url:requestUrl('/xqcourse/submitCourse'),
    method:'post',
    data:requestParam(params)
  })
}
export function getcertificate() {
  return request({
    url:requestUrl('/xqcertificate/selectStudentCertificates2'),
    method:'post',
  })
}

//修改密码
export function updatapwd(params) {
  return request({
    url:requestUrl('/sys/user/password'),
    method:'post',
    data:requestParam(params)
  })
}

//修改手机号
export function updatephone(params) {
  return request({
    url:requestUrl('/sys/user/updateMobile'),
    method:'post',
    data:requestParam(params)
  })
}

//解散班级
export function delclass(params) {
  return request({
    url:requestUrl('/xqcertificateclass/delete'),
    method:'post',
    data:requestParam(params)
  })
}


export function getxiangmulist(params) {
  return request({
    url:requestUrl('/xqcjproject/doGetUserProjectList'),
    method:'post',
    data:requestParam(params)
  })
}

export function getchanjiaolist(params) {
  return request({
    url:requestUrl('/xqcjeducationalmode/doGetAllModes'),
    method:'post',
    // data:requestParam(params)
  })
}

export function uploadxiangmu(params) {
  return request({
    url:requestUrl('/xqcjproject/saveOrUpdate'),
    method:'post',
    data:requestParam(params)
  })
}

export function getxiangmude(params) {
  return request({
    url:requestUrl('/xqcjproject/info'),
    method:'post',
    data:requestParam(params)
  })
}

export function getuserlist(params) {
  return request({
    url:requestUrl('/xqcjprojuser/listNewUserByProjId'),
    method:'post',
    data:requestParam(params)
  })
}

export function uploadusers(params) {
  return request({
    url:requestUrl('/xqcjprojuser/updateProjUser'),
    method:'post',
    data:requestParam(params)
  })
}

export function deleteusers(params) {
  return request({
    url:requestUrl('/xqcjprojuser/delProjUser'),
    method:'post',
    data:requestParam(params)
  })
}


export function deletexiangmu(params) {
  return request({
    url:requestUrl('/xqcjproject/deleteOne?projId='+params),
    method:'post',
    // data:requestParam(params)
  })
}

export function getcxproject(params) {
  return request({
    url:requestUrl('/xqcxproject/doGetUserProjectList'),
    method:'post',
    data:requestParam(params)
  })
}

export function uploadcx(params) {
  return request({
    url:requestUrl('/xqcxproject/saveOrUpdate'),
    method:'post',
    data:requestParam(params)
  })
}


export function getcxxiangmude(params) {
  return request({
    url:requestUrl('/xqcxproject/info'),
    method:'post',
    data:requestParam(params)
  })
}

export function deletecxxiangmu(params) {
  return request({
    url:requestUrl('/xqcxproject/deleteOne?projId='+params),
    method:'post',
    // data:requestParam(params)
  })
}

export function getcxuserlist(params) {
  return request({
    url:requestUrl('/xqcxprojuser/listNewUserByProjId'),
    method:'post',
    data:requestParam(params)
  })
}

export function uploaduserscx(params) {
  return request({
    url:requestUrl('/xqcxprojuser/updateProjUser'),
    method:'post',
    data:requestParam(params)
  })
}

export function deleteuserscx(params) {
  return request({
    url:requestUrl('/xqcxprojuser/delProjUser'),
    method:'post',
    data:requestParam(params)
  })
}

export function getcertificateList() {
  return request({
    url:requestUrl('/xqcertificate/selectList'),
    method:'get',
  })
}

export function getcxalllist(params) {
  return request({
    url:requestUrl('/xqcjprojectbindcourse/getList'),
    method:'post',
    data:requestParam(params)
  })
}

export function getfxlist(params) {
  return request({
    url:requestUrl('/xqcjprojectbindcourse/save'),
    method:'post',
    data:requestParam(params)
  })
}

export function delfxlist(params) {
  return request({
    url:requestUrl('/xqcjprojectbindcourse/delete'),
    method:'post',
    data:requestParam(params)
  })
}

export function cxalllist(params) {
  return request({
    url:requestUrl('/xqcjprojectbindcourse/info'),
    method:'post',
    data:requestParam(params)
  })
}

export function getuserlist2(params) {
  return request({
    url:requestUrl('/xqcourseuser/listNewUserByProjId'),
    method:'post',
    data:requestParam(params)
  })
}

export function uploadusersc(params) {
  return request({
    url:requestUrl('/xqcourseuser/save'),
    method:'post',
    data:requestParam(params)
  })
}

export function deleteusersc(params) {
  return request({
    url:requestUrl('/xqcourseuser/delete'),
    method:'post',
    data:requestParam(params)
  })
}

export function getcxcykc(params) {
  return request({
    url:requestUrl('/xqcxproject/info2'),
    method:'post',
    data:requestParam(params)
  })
}

export function setcheck(params) {
  return request({
    url:requestUrl('/xqcxproject/submitProject'),
    method:'post',
    data:requestParam(params)
  })
}

export function submitepro(params) {
  return request({
    url:requestUrl('/xqcjproject/submitProject'),
    method:'post',
    data:requestParam(params)
  })
}
export function submiteprocx(params) {
  return request({
    url:requestUrl('/xqcxproject/submitProject'),
    method:'post',
    data:requestParam(params)
  })
}
export function getlistall() {
  return request({
    url:requestUrl('/xqhomenavig/selectMyModelsForMyCenter'),
    method:'post',
    // data:requestParam(params)
  })
}

export function setsubsave(params) {
  return request({
    url:requestUrl('/xqhomenavig/saveOrUpdate'),
    method:'post',
    data:requestParam(params)
  })
}
export function gethomelist() {
  return request({
    url:requestUrl('/xqhomenavig/selectMyModelsForHome'),
    method:'post',
    // data:requestParam(params)
  })
}
export function getcxkclist(params) {
  return request({
    url:requestUrl('/xqcxproject/list'),
    method:'post',
    data:requestParam(params)
  })
}

export function gettaglist(params) {
  return request({
    url:requestUrl('/xqtagcoursespeciality/list'),
    method:'post',
    data:requestParam(params)
  })
}

export function addtaglist(params) {
  return request({
    url:requestUrl('/xqtagcoursespeciality/save'),
    method:'post',
    data:requestParam(params)
  })
}

export function gettaglists(params) {
  return request({
    url:requestUrl('/xqtagspecialty/list'),
    method:'post',
    data:requestParam(params)
  })
}

export function getclassstudents(params) {
  return request({
    url:requestUrl('/xqXzclassstudentController/queryXzUserList'),
    method:'post',
    data:requestParam(params)
  })
}

export function getzylist(params) {
  return request({
    url:requestUrl('/xqlessonpaper/getPaperClassByCreator'),
    method:'post',
    data:requestParam(params)
  })
}

export function getpapertudents(params) {
  return request({
    url:requestUrl('/xqlessonpaper/getPaperStudents'),
    method:'post',
    data:requestParam(params)
  })
}

export function getAllClassList(params) {
  return request({
    url:requestUrl('/xqlessoncourseclass/getClassesByCourse'),
    method:'post',
    data:requestParam(params)
  })
}

export function saveclasslist(params) {
  return request({
    url:requestUrl('/xqlessoncourseclass/saveCourseClassIds'),
    method:'post',
    data:requestParam(params)
  })
}

export function delectclasslist(params) {
  return request({
    url:requestUrl('/xqlessoncourseclass/deleteCourseClassId'),
    method:'post',
    data:requestParam(params)
  })
}

//获取个人中心的课程文件列表
export function getPaperList(params) {
  return request({
    url: requestUrl('/xqlessonaccessoryother/queryPageForMange'),
    method: 'post',
    data: requestParam(params)
  })
}

//新增课程文件
export function saveCoursefile(params) {
  return request({
    url: requestUrl('/xqlessonaccessoryother/save'),
    method: 'post',
    data: requestParam(params)
  })
}
//删除课件（包括批量删除）
export function deleteCoursefile(params) {
  return request({
    url: requestUrl('/xqlessonaccessoryother/delete'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取课程文件的接口
export function getCoursefileList(params) {
  return request({
    url: requestUrl('/xqlessonaccessoryother/queryOne?id='+params),
    method: 'post',
    data: requestParam(params)
  })
}


export function getCoursePaperByCreator(params) {
  return request({
    url:requestUrl('/xqlessonpaper/getCoursePaperByCreator'),
    method:'post',
    data:requestParam(params)
  })
}

export function getclassstudent(params) {
  return request({
    url:requestUrl('/xqcourseclassstudent/list'),
    method:'post',
    data:requestParam2(params)
  })
}

export function getclassstudentsave(params) {
  return request({
    url:requestUrl('/xqcourseclassstudent/save'),
    method:'post',
    data:requestParam(params)
  })
}

export function getclassstudentdelete(params) {
  return request({
    url:requestUrl('/xqcourseclassstudent/delete'),
    method:'post',
    data:requestParam(params)
  })
}

export function getbjnamelist(params) {
  return request({
    url:requestUrl('/xqXzclassController/doGetXzClassByParamsAll'),
    method:'post',
    data:requestParam(params)
  })
}

//试卷得分，获取老师评语
export function setteaRemark(params) {
  return request({
    url:requestUrl('/xqlessonscore/doCommentScore'),
    method:'post',
    data:requestParam(params)
  })
}


//试卷分析-整体数据分析
export function getAllAnalyseData(params) {
  return request({
    url:requestUrl('/xqlessonpaper/paperAnalysebaseInfo'),
    method:'post',
    data:requestParam(params)
  })
}

//试卷分析-单个题目分析
export function getOneQuestionData(params) {
  return request({
    url:requestUrl('/xqlessonpaper/paperAnalyseOneQuestionInfo'),
    method:'post',
    data:requestParam(params)
  })
}

//获取个人数据
export function getinfoData(params) {
  return request({
    url:requestUrl('/sys/user/info'),
    method:'get',
    //data:requestParam(params)
  })
}
