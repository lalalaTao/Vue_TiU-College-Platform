//考试
import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

//获取考试详细信息
export function querysjmclist (params) {
  return request({
    url: requestUrl('/xqexam/info'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取试卷详细信息
export function querypaperdata (params) {
  return request({
    url: requestUrl('/xqpaper/info/'+params),
    method: 'post',
    data: requestParam(params)
  })
}
//获取试题
export function querystlist (params) {
  return request({
    url: requestUrl('/xqquestion/doGetExamQuestions'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取试题详细信息
export function querystdata (params) {
  return request({
    url: requestUrl('/xqquestion/info/'+params),
    method: 'post',
    data: requestParam(params)
  })
}
//交卷
export function uploadtestpaper (params) {
  return request({
    url: requestUrl('/xqquestion/submitPaper'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取当前服务器时间
export function gettime (params) {
  return request({
    url: requestUrl('/sys/config/doGetTime'),
    method: 'get'
  })
}
