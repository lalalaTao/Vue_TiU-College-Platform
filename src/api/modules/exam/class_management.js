//学生报考证书班级列表
import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function classmanage (params) {
  return request({
    url: requestUrl('/xqcertificateclass/doGetStudentJoinClassList'),
    method: 'post',
    data: requestParam(params)
  })
}
//加入班级
export function addnewclassmanage (params) {
  return request({
    url: requestUrl('/xqstudentclass/addNewClasses'),
    method: 'post',
    data: requestParam(params)
  })
}
//退出班级
export function delectstudentmanage (params) {
  return request({
    url: requestUrl('/xqstudentclass/deleteStudentFromClass'),
    method: 'post',
    data: requestParam(params)
  })
}
