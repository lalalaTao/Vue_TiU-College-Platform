//班级列表（教师）
import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function classmanagetea (params) {
  return request({
    url: requestUrl('/xqcertificateclass/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//添加班级
export function newClass (params) {
  return request({
    url: requestUrl('/xqcertificateclass/save'),
    method: 'post',
    data: requestParam(params)
  })
}
//学生列表
export function stulist (params) {
  return request({
    url: requestUrl('/xqstudentclass/doGetStudentList'),
    method: 'post',
    data: requestParam(params)
  })
}
//删除学生
export function delstulist (params) {
  return request({
    url: requestUrl('/xqstudentclass/deleteStudentFromClass'),
    method: 'post',
    data: requestParam(params)
  })
}
//修改班级
export function upclasslist (params) {
  return request({
    url: requestUrl('/xqcertificateclass/update'),
    method: 'post',
    data: requestParam(params)
  })
}
