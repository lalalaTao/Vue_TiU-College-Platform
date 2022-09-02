import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

//获取教师信息
export function getjsjl (params) {
  return request({
    url: requestUrl('/xqteacher/info'),
    method: 'post',
    // data: requestParam(params)
  })
}

//保存教师基本信息
export function savejsde (params) {
  return request({
    url: requestUrl('/xqteacher/saveBaseInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

//修改教师基本信息
export function updatejsde (params) {
  return request({
    url: requestUrl('/xqteacher/updateBaseInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

//上传教师头像
export function uploadimg (params) {
  return request({
    url: requestUrl('/xqteacher/saveTeacherImg'),
    method: 'post',
    data: requestParam(params)
  })
}

//保存学历情况
export function savexlqk (params) {
  return request({
    url: requestUrl('/xqteacher/saveEducation'),
    method: 'post',
    data: requestParam(params)
  })
}

//修改学历情况
export function updatexlqk (params) {
  return request({
    url: requestUrl('/xqteacher/updateEducation'),
    method: 'post',
    data: requestParam(params)
  })
}

//删除学历情况
export function deletexlqk (params) {
  return request({
    url: requestUrl('/xqteacher/deleteEducation'),
    method: 'post',
    data: requestParam(params)
  })
}

//添加工作经历
export function savegzjl (params) {
  return request({
    url: requestUrl('/xqteacher/saveWorkInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

//更新工作经历
export function updategzjl (params) {
  return request({
    url: requestUrl('/xqteacher/updateWorkInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

//删除工作经历
export function deletegzjl (params) {
  return request({
    url: requestUrl('/xqteacher/deleteWork'),
    method: 'post',
    data: requestParam(params)
  })
}

//添加企业实践经历
export function saveqysjjl (params) {
  return request({
    url: requestUrl('/xqteacher/savePractice'),
    method: 'post',
    data: requestParam(params)
  })
}

//更新企业实践经历
export function updateqysjjl (params) {
  return request({
    url: requestUrl('/xqteacher/updatePractice'),
    method: 'post',
    data: requestParam(params)
  })
}

//删除企业实践经历
export function deleteqysjjl (params) {
  return request({
    url: requestUrl('/xqteacher/deletePractice'),
    method: 'post',
    data: requestParam(params)
  })
}

//更新其他信息
export function updatedetail (params) {
  return request({
    url: requestUrl('/xqteacher/saveOrUpdateOther'),
    method: 'post',
    data: requestParam(params)
  })
}

//删除其他信息
export function deletedetail (params) {
  return request({
    url: requestUrl('/xqteacher/deleteOtherInfo'),
    method: 'post',
    data: requestParam(params)
  })
}
