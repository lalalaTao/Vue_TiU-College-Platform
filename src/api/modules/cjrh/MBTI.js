import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

//获取性格测试题
export function getTestlist () {
  return request({
    url: requestUrl('/xqcharacterquestion/list'),
    method: 'get',
  })
}
//提交测试结果
export function upsubmit (params) {
  return request({
    url: requestUrl('/xqcharacterquestion/submit'),
    method: 'post',
    data: requestParam(params)
  })
}

export function doGetMyCharacter (params) {
  return request({
    url: requestUrl('/xqcharacterquestion/doGetMyCharacter'),
    method: 'post',
    data: requestParam(params)
  })
}
