import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

// export function gettea (params) {
//   return request({
//     url: requestUrl(''),
//     method: 'post',
//     data: requestParam(params)
//   })
// }

//获取用户数据
export function getteadata () {
  return request({
    url: requestUrl('/sys/user/info'),
    method: 'get'
  })
}

//获取课程学习人数
export function getxuexi_count (params) {
  return request({
    url: requestUrl('/xqteacher/doGetStudyPeoples'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取课程互动次数
// export function gethudong_count (params) {
//   return request({
//     url: requestUrl('/xqstudent/doGetStudyCourseQuantity'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }

//获取课程
export function getcoueselist (params) {
  return request({
    url: requestUrl('/xqcourse/doGetHomeCourses'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取教师列表
export function gettealist () {
  return request({
    url: requestUrl('/xqteacher/doGetFamousTeachers'),
    method: 'get'
  })
}

//获取学习人数图表数据与同比
export function getxuexi_data (params) {
  return request({
    url: requestUrl('/xqteacher/doGetTeacherLearnedCharts'),
    method: 'post',
    data: requestParam(params)
  })
}
// {headImage:"/video/teacher_headImg/20201012140702084ce718.png",specialtyName:"计算机网络技术",reasons:"专注于协同管理，提供管理、业务、财务一体化解决方案；专注于集团管理，提供集团企...",teacherName:"王大锤",sex:0,id:7},
// {headImage:"/video/teacher_headImg/20201012140702084ce718.png",specialtyName:"计算机网络技术",reasons:"专注于协同管理，提供管理、业务、财务一体化解决方案；专注于集团管理，提供集团企...",teacherName:"王大锤",sex:0,id:7},
// {headImage:"/video/teacher_headImg/20201012140702084ce718.png",specialtyName:"计算机网络技术",reasons:"专注于协同管理，提供管理、业务、财务一体化解决方案；专注于集团管理，提供集团企...",teacherName:"王大锤",sex:0,id:7},

//获取我的课程列表
export function getmycourselist (params) {
  return request({
    url: requestUrl('/xqcourse/doGetTeacherOwnCourse'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取7天课节数
export function get7ddata () {
  return request({
    url: requestUrl('/xqteacher/doGetCourseStudyAnalysis'),
    method: 'post',
    // data: requestParam(params)
  })
}

//获取7天课节数
export function getxxdata () {
  return request({
    url: requestUrl('/xqteacher/doGetCourseStudyTotal'),
    method: 'post',
    // data: requestParam(params)
  })
}
