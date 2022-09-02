import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

//获取教师企业实践年份
export function getqysjyear (params) {
  return request({
    url: requestUrl('/xqteacherpracticeinfo/getPracticeYear'),
    method: 'post',
    // data: requestParam(params)
  })
}

//获取该年份教师企业实践信息
export function getqysjdetail (params) {
  return request({
    url: requestUrl('/xqteacherpracticeinfo/info'),
    method: 'post',
    data: requestParam(params)
  })
}

//保存教师基本信息
export function saveteajb (params) {
  return request({
    url: requestUrl('/xqteacherpracticeinfo/saveOrUpdatePracticeTeacherInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

//保存或修改教师企业实践企业信息
export function savesjqyde (params) {
  return request({
    url: requestUrl('/xqteacherpracticeinfo/saveOrUpdate'),
    method: 'post',
    data: requestParam(params)
  })
}

//保存教师培训项目
export function savepxxm (params) {
  return request({
    url: requestUrl('/xqteacherpracticeinfo/saveProject'),
    method: 'post',
    data: requestParam(params)
  })
}

//编辑教师培训项目
export function updatepxxm (params) {
  return request({
    url: requestUrl('/xqteacherpracticeinfo/updateProject'),
    method: 'post',
    data: requestParam(params)
  })
}

//删除教师培训项目
export function deletepxxm (params) {
  return request({
    url: requestUrl('/xqteacherpracticeinfo/deleteProject'),
    method: 'post',
    data: requestParam(params)
  })
}
