import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

//获取试卷答题明细
export function querysjxxlist (params) {
  return request({
    url: requestUrl('/xqscore/info'),
    method: 'post',
    data: requestParam(params)
  })
}
