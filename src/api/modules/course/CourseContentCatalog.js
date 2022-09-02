import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";



//获取我的，信用卡申请信息
// export function getDir (params) {
//   return request({
//     url: requestUrl('/xqcoursedir/list'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }



// 根据课程id获取单个课程信息
export function getOneCourseInfo (params) {
  return request({
    url: requestUrl('/xqcourse/getOneCourseInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getOneCourseDglistTree (params) {
  return request({
    url: requestUrl('/xqcoursedir/listTree'),
    method: 'post',
    data: requestParam(params)
  })
}


export function getStudentList (params) {
  return request({
    url: requestUrl('/xqcourse/doGetStudentList'),
    method: 'post',
    data: requestParam(params)
  })
}

//查看评论
export function getCommentData (params) {
  return request({
    url: requestUrl('/xqcoursecomment/doGetCommentData'),
    method: 'post',
    data: requestParam(params)
  })
}
//发表评论
export function saveCommentData (params) {
  return request({
    url: requestUrl('/xqcoursecomment/save'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getdetails (params) {
  return request({
    url: requestUrl('/xqcourse/doGetCourseData'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getxmcylist (params) {
  return request({
    url: requestUrl('/xqcourse/doGetTeacherTeam'),
    method: 'post',
    data: requestParam(params)
  })
}
