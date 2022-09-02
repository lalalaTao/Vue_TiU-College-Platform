import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取知识点列表
export function queryzsdlist (params) {
  return request({
    url: requestUrl('/xqknowledge/select'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取试卷列表
export function querypaperlist(params) {
  return request({
    url: requestUrl('/xqquestion/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//上传试卷
export function uploadtestpaper(params) {
  return request({
    url: requestUrl('/xqpaper/save'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取证书名
export function getCertificateInfo(params) {
  return request({
    url: requestUrl('/xqcertificate/info'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取试卷
export function editpaper(params) {
  return request({
    url: requestUrl('/xqpaper/info/'+params),
    method: 'post'
    // data: requestParam(params)
  })
}
//获取试题信息
export function testdetail(params) {
  return request({
    url: requestUrl('/xqquestion/info/'+params),
    method: 'post'
    // data: requestParam(params)
  })
}
//更新试卷
export function updatepaper(params) {
  return request({
    url: requestUrl('/xqpaper/update'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取随机组题
export function getquestion(params) {
  return request({
    url: requestUrl('/xqquestion/doGetPaperQuestionsByType'),
    method: 'post',
    data: requestParam(params)
  })
}
