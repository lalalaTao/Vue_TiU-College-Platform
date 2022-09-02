import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

/**获取学生的模拟考列表*/
export function doGetExams (params) {
  return request({
    url: requestUrl('/xqexam/doGetExams'),
    method: 'post',
    data: requestParam(params)
  })
}

export function doGetScore (params) {
  return request({
    url: requestUrl('/xqscore/list'),
    method: 'post',
    data: requestParam(params)
  })
}
