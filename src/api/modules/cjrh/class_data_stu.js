import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

//获取学生信息
export function getxinxi() {
  return request({
    url: requestUrl('/sys/user/info'),
    method: 'get',
  })
}
//院系
export function getdescript () {
  return request({
    url: requestUrl('/xqfaculty/list'),
    method: 'post',
  })
}
//专业
export function getcourse () {
  return request({
    url: requestUrl('/xqspecialty/list'),
    method: 'post',
  })
}
//课程学习数量
export function getclassstudy(params) {
  return request({
    url: requestUrl('/xqstudent/doGetStudyCourseQuantity'),
    method: 'post',
    data: requestParam(params)
  })
}
//学习课节数
export function getclassstudy1(params) {
  return request({
    url: requestUrl('/xqstudent/doGetStudyClassQuantity'),
    method: 'post',
    data: requestParam(params)
  })
}
//首页课程列表
export function gethomecourses(params) {
  return request({
    url: requestUrl('/xqcourse/doGetHomeCourses'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取学习进度
export function getstu() {
  return request({
    url: requestUrl('/xqcourse/doGetStudentOwnCourse'),
    method: 'get',
  })
}
//近7日学习课节分析
export function getstudyclassQuantityAnalysis() {
  return request({
    url: requestUrl('/xqstudent/doGetStudyClassQuantityAnalysis'),
    method: 'post',
  })
}
//学生-课节学习数量图表 + 同比增长率
export function getStudentLearnedCourseCharts(params) {
  return request({
    url: requestUrl('/xqstudent/doGetStudentLearnedCharts'),
    method: 'post',
    data:requestParam(params)
  })
}
//学生-课程学习数量图表 + 同比增长率
export function getclassstudyed(params) {
  return request({
    url: requestUrl('/xqstudent/doGetStudentLearnedCourseCharts'),
    method: 'post',
    data:requestParam(params)
  })
}
//学生学习课节总数+课程课节总数量
export function getstudyzong() {
  return request({
    url: requestUrl('/xqstudent/doGetStudyClassTotal'),
    method: 'post',
  })
}
