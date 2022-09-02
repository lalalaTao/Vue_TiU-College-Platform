//考试列表
import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function examslist (params) {
  return request({
    url: requestUrl('/xqexam/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//班级列表
export function examsclasslist (params) {
  return request({
    url: requestUrl('/xqXzclassController/doGetClassBySpecialtyId'),
    method: 'post'
    //data: requestParam(params)
  })
}
//考试保存
export function examsavelist (params) {
  return request({
    url: requestUrl('/xqexam/save'),
    method: 'post',
    data: requestParam(params)
  })
}
//考试详细
export function examalllist (params) {
  return request({
    url: requestUrl('/xqexam/info'),
    method: 'post',
    data: requestParam(params)
  })
}
//修改考试
export function examupdatalist (params) {
  return request({
    url: requestUrl('/xqexam/update'),
    method: 'post',
    data: requestParam(params)
  })
}
//删除考试
export function examdelete (params) {
  return request({
    url: requestUrl('/xqexam/delete'),
    method: 'post',
    data: requestParam(params)
  })
}
